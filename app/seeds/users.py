from app.models import db, User

def seed_users():
    demo = User(username='demo', email='demo@aa.io', password='password')
    db.session.add(demo)
    db.session.commit()

def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()