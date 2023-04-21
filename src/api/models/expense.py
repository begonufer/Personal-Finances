from api.models.db import db

class Expense(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    value = db.Column(db.Integer, nullable=False)
    category = db.Column(db.String(80), unique=False, nullable=False)
    dateTime = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<Expense {self.value}>'

    def serialize(self):
        return {
            "id": self.id,
            "value": self.value,
            "category": self.category,
            "dateTime": self.dateTime,
        }
