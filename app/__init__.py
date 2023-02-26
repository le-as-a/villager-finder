import os
import psycopg2
from dotenv import load_dotenv
from flask import Flask
from flask_cors import CORS
from flask_migrate import Migrate
from flask_login import LoginManager

load_dotenv()

app = Flask(__name__)

url = os.environ.get("DATABASE_URL")
connection = psycopg2.connect(url)

from .models import db, User
from .config import Config
from .seeds import seed_commands
from .api.auth import auth_routes
from .api.user import user_routes

login = LoginManager(app)
login.login_view = 'auth.unauthorized'

@login.user_loader
def load_user(id):
    return User.query.get(int(id))

app.config.from_object(Config)
app.cli.add_command(seed_commands)
app.register_blueprint(auth_routes, url_prefix='/api/auth')
app.register_blueprint(user_routes, url_prefix='/api/users')

db.init_app(app)
Migrate(app, db)
CORS(app)