from .db import db

class Favorite(db.Model):
    __tablename__ = 'favorites'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    villager_id = db.Column(db.String, nullable=False)

    users = db.relationship('User', back_populates='favorites')

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'villager_id': self.villager_id
        }