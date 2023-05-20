from api.models.db import db


class Income(db.Model):
    __tablename__='income'
    id = db.Column(db.Integer, primary_key=True)
    value = db.Column(db.Float, nullable=False)
    category_income = db.Column(db.String(80), unique=False, nullable=True)
    dateTime = db.Column(db.DateTime, unique=False, nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    user = db.relationship('User', backref='income')

    def __repr__(self):
        return f'<Income {self.value}>'

    def serialize(self):
        return {
            "id": self.id,
            "value": self.value,
            "category_income": self.category_income,
            "dateTime": self.dateTime,
            "user": self.user.serialize()
        }
