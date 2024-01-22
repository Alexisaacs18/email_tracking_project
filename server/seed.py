from config import app


from models import db, Emails, Reply, Recipient, Company

if __name__ == '__main__':
    with app.app_context():

        print("deleting tables...")

        Emails.query.delete()
        Reply.query.delete()
        Recipient.query.delete()
        Company.query.delete()

        db.session.commit()

        print("creating tables...")

        emails = [
            Emails(
                subject = "A",
                body = "A",
                number_sent = 5,
                number_replied = 1,
                number_unsubscribed = 2
            ),
            Emails(
                subject = "B",
                body = "B",
                number_sent = 6,
                number_replied = 2,
                number_unsubscribed = 0
            ),
            Emails(
                subject = "C",
                body = "C",
                number_sent = 10,
                number_replied = 3,
                number_unsubscribed = 4
            ),
        ]

        db.session.add_all(emails)
        db.session.commit()

        companies = [
            Company(
                name = "A",
                employees = "11-50",
                revenue = "1-5 M"
            )
        ]

        db.session.add_all(companies)
        db.session.commit()

        recipients = [
            Recipient(
                company_id = companies[0].id,
                email_address = "something@gmail.com",
                contact = "somebody"
            )
        ]

        db.session.add_all(recipients)
        db.session.commit()

        replies = [
            Reply(
                email_template_id = emails[0].id,
                recipient_id = recipients[0].id,
                tone = True
            )
        ]

        db.session.add_all(replies)
        db.session.commit()

