from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates

db = SQLAlchemy()

class Emails(db.Model, SerializerMixin):
    __tablename__ = "email_template"

    id = db.Column(db.Integer, primary_key = True)
    subject = db.Column(db.String)
    body = db.Column(db.String)
    number_sent = db.Column(db.Integer)
    number_replied = db.Column(db.Integer)
    number_unsubscribed = db.Column(db.Integer)

class Reply(db.Model, SerializerMixin):
    __tablename__ = "reply"

    id = db.Column(db.Integer, primary_key = True)
    email_template_id = db.Column(db.Integer, db.ForeignKey("email_template.id"))
    recipient_id = db.Column(db.Integer, db.ForeignKey("recipient.id"))
    tone = db.Column(db.Boolean)

class Recipient(db.Model, SerializerMixin):
    __tablename__ = "recipient"

    id = db.Column(db.Integer, primary_key = True)
    company_id = db.Column(db.Integer, db.ForeignKey(""))
    email_address = id.Column(db.String)
    contact = id.Column(db.String)

class Company(db.Model, SerializerMixin):
    __tablename__ = "company"

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String)
    employees = db.Column(db.String)
    revenue = db.Column(db.String)
