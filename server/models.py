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

    #adds relationships
    reply = db.relationship('Reply', back_populates = 'email')

    #adds serialization rules
    serialize_rules = ('-reply.email', )

    #validations
    @validates('number_sent')
    def validates_number_sent(self, key, value):
        if value > 0:
            return value
        else:
            raise ValueError
        
    @validates('number_replies')
    def validates_number_replies(self, key, value):
        if value > 0:
            return value
        else:
            raise ValueError


class Reply(db.Model, SerializerMixin):
    __tablename__ = "reply"

    id = db.Column(db.Integer, primary_key = True)
    email_template_id = db.Column(db.Integer, db.ForeignKey("email_template.id"))
    recipient_id = db.Column(db.Integer, db.ForeignKey("recipient.id"))
    tone = db.Column(db.Boolean)

    #adds relationships
    recipient = db.relationship('Recipient', back_populates = 'reply')
    email = db.relationship('Emails', back_populates = 'reply')

    #adds serialization rules
    serialize_rules = ('-emails.reply', '-recipient.reply')

class Recipient(db.Model, SerializerMixin):
    __tablename__ = "recipient"

    id = db.Column(db.Integer, primary_key = True)
    company_id = db.Column(db.Integer, db.ForeignKey("company.id"))
    email_address = db.Column(db.String)
    contact = db.Column(db.String)

    #adds relationships
    reply = db.relationship('Reply', back_populates = 'recipient')
    company = db.relationship('Company', back_populates = 'recipient')

    #adds serialization rules
    serialize_rules = ('-reply.recipient', '-company.recipient')

class Company(db.Model, SerializerMixin):
    __tablename__ = "company"

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String)
    employees = db.Column(db.String)
    revenue = db.Column(db.String)

    #adds relationships
    recipient = db.relationship('Recipient', back_populates = 'company')

    #adds serialization rules
    serialize_rules = ('-recipient.company', )
