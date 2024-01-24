from config import app
from flask import make_response, request

from models import db, Emails, Reply, Recipient, Company

@app.route("/emails", methods = ["GET", "POST"])
def emails():

    if request.method == "GET":

        emails = Emails.query.all()

        emails_to_dict = [email.to_dict(rules = ("-reply", )) for email in emails]

        response = make_response(
            emails_to_dict,
            200
        )

    elif request.method == "POST":

        try:

            form_data = request.get_json()

            new_reply = Emails(
                email_title = form_data["email_title"],
                subject = form_data["subject"],
                body = form_data["body"],
                number_sent = form_data["number_sent"],
                number_replied = form_data["number_replied"],
                number_unsubscribed = form_data["number_unsubscribed"]
            )

            db.session.add(new_reply)
            db.session.commit()

            response = make_response(
                new_reply.to_dict(),
                201
            )
        
        except ValueError:

            response = make_response(
                {"error" : "value error"},
                400
            )

    else:

        response = make_response(
            {"Error" : "Invalid Method"},
            400
        )

    return response

@app.route("/replies", methods = ["GET", "POST"])
def replies():

    replies = Reply.query.all()

    replies_to_dict = [reply.to_dict(rules = ("-email", "-recipient" ) ) for reply in replies]

    response = make_response(
        replies_to_dict,
        200
    )

    return response

@app.route("/recipients", methods = ["GET", "POST"])
def recipients():

    recipients = Recipient.query.all()

    recipients_to_dict = [recipient.to_dict(rules = ("-company", "-reply")) for recipient in recipients]

    response = make_response(
        recipients_to_dict,
        200
    )

    return response

@app.route("/companies", methods = ["GET", "POST"])
def companies():

    companies = Company.query.all()

    companies_to_dict = [company.to_dict(rules = ("-recipient", )) for company in companies]

    response = make_response(
        companies_to_dict,
        200
    )

    return response

@app.route("/emails/<int:id>", methods = ["PATCH"])
def emails_by_id(id):

    email = Emails.query.filter(Emails.id == id).first()

    if email:

        form_data = request.get_json()

        for key in form_data:
            setattr(email, key, form_data[key])

        db.session.commit()

        response = make_response(
            email.to_dict(),
            201
        )

    else:

        response = make_response(
            {"error" : "invalid ID"},
            404
        )

    return response

if __name__ == '__main__':
    app.run(port=5555, debug=True)

