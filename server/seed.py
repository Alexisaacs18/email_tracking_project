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
                subject = "Email Data Question",
                body = """
                Hi [first name],

                Since the unsubscribe requirements from Google,
                52% of tier 2 tech companies report lack of
                visibility over their cold email data.

                Oracle reported a 36% decrease in unsubscribed emails
                since using Email Trace.

                Would you be open to discussing this?

                Best,

                Alex Isaacs
                """,
                number_sent = 8,
                number_replied = 2,
                number_unsubscribed = 0
            ),
            Emails(
                subject = "Reply Rate Question",
                body = """
                Hi [first name],


                """,
                number_sent = 6,
                number_replied = 1,
                number_unsubscribed = 3
            ),
            Emails(
                subject = "Unsubscribe Issues",
                body = """
                Hi [first name],

                """,
                number_sent = 7,
                number_replied = 2,
                number_unsubscribed = 3
            ),
        ]

        db.session.add_all(emails)
        db.session.commit()

        companies = [
            Company(
                name = "Salesforce",
                employees = "10k+",
                revenue = "$31.4 B"
            ),
            Company(
                name = "Intel",
                employees = "10k+",
                revenue = "$15.6 B"
            ),
            Company(
                name = "Adobe",
                employees = "10k+",
                revenue = "$19.4 B"
            )
        ]

        db.session.add_all(companies)
        db.session.commit()

        recipients = [
            Recipient(
                company_id = companies[0].id,
                email_address = "jtaylor@salesforce.com",
                contact = "Justin Taylor"
            ),
            Recipient(
                company_id = companies[0].id,
                email_address = "cspencer@salesforce.com",
                contact = "Cody Spencer"
            ),
            Recipient(
                company_id = companies[0].id,
                email_address = "crodriguez@salesforce.com",
                contact = "Casey Rodriguez"
            ),
            Recipient(
                company_id = companies[1].id,
                email_address = "atupey@intel.com",
                contact = "Anne Tupey"
            ),
            Recipient(
                company_id = companies[1].id,
                email_address = "jfisher@intel.com",
                contact = "Jay Fisher"
            ),
            Recipient(
                company_id = companies[1].id,
                email_address = "asmith@intel.com",
                contact = "Andre Smith"
            ),
            Recipient(
                company_id = companies[2].id,
                email_address = "jtran@adobe.com",
                contact = "Josh Tran"
            ),
            Recipient(
                company_id = companies[2].id,
                email_address = "jpartridge@adobe.com",
                contact = "Julia Partridge"
            ),
            Recipient(
                company_id = companies[2].id,
                email_address = "misaacs@adobe.com",
                contact = "Max Isaacs"
            ),
        ]

        db.session.add_all(recipients)
        db.session.commit()

        replies = [
            Reply(
                email_template_id = emails[0].id,
                recipient_id = recipients[0].id,
                tone = True
            ),
            Reply(
                email_template_id = emails[0].id,
                recipient_id = recipients[3].id,
                tone = True
            ),
            Reply(
                email_template_id = emails[1].id,
                recipient_id = recipients[7].id,
                tone = False
            ),
            Reply(
                email_template_id = emails[2].id,
                recipient_id = recipients[1].id,
                tone = True
            ),
            Reply(
                email_template_id = emails[2].id,
                recipient_id = recipients[5].id,
                tone = True
            )
        ]

        db.session.add_all(replies)
        db.session.commit()

