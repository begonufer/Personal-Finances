from api.models.db import db

class User(db.Model):
    __tablename__='User'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String, unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    name = db.Column(db.String, unique=False, nullable=False)
    surname = db.Column(db.String, unique=False, nullable=False)
    birth_date = db.Column(db.Integer, unique=False, nullable=False)
    phone_number = db.Column(db.Integer, unique=False, nullable=False)


    def __repr__(self):
        return f'<User {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
            "name": self.name,
            "surname": self.surname,
            "birhtdate": self.birthdate,
            "phone_number": self.phone_number,
        }
