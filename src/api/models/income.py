from api.models.db import db


class Income(db.Model):
    __tablename__='income'
    id = db.Column(db.Integer, primary_key=True)
    value = db.Column(db.Float, nullable=False)
    category = db.Column(db.String(80), unique=False, nullable=False)
    dateTime = db.Column(db.DateTime, unique=False, nullable=True)
    description = db.Column(db.String(80), nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    user = db.relationship('User', backref='income')

    def __repr__(self):
        return f'<Income {self.value}>'

    def serialize(self):
        return {
            "id": self.id,
            "value": self.value,
            "category": self.category,
            "dateTime": self.dateTime,
            "description": self.description,
            "user": self.user.serialize()
        }
