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
                email_title = "Cold -- Email Data",
                subject = "Email Data Question",
                body = """
                Hi [first name],

                Since the unsubscribe requirements from Google,
                52% of tier 2 tech companies report lack of
                visibility over their cold email data.

                Oracle reported a 12% decrease in unsubscribed emails
                since using Email Trace.

                Would you be open to discussing this?

                Best,

                Alex Isaacs
                """,
                number_sent = 9,
                number_replied = 6,
                number_unsubscribed = 0
            ),
            Emails(
                email_title = "Cold -- Reply Rate",
                subject = "Reply Rate Question",
                body = """
                Hi [first name],

                Companies in the [revenue] revenue range have
                reported a 30% decrease in positive replies.

                Email Trace reply rate data to SDR's. Enabling
                Them to keep their emails personalized and relevant,
                and reducing admin work for managers

                Would you be open to conversation around reducing headache?

                Cheers,

                Nick Jernigin
                """,
                number_sent = 9,
                number_replied = 5,
                number_unsubscribed = 2
            ),
            Emails(
                email_title = "Cold -- SDR Managers Use Case",
                subject = "QA Wolf - Use Case",
                body = """
                Hi [first name],

                QA Wolf's SDR team has low visibility into their email 
                statistics.

                Since implementing Email Trace, their business development
                team has seen a 6% increase in qualified demo's.

                [manager name] told me his SDR's are more empowered to
                write their own emails. Saving him an hour a day to work
                on GTM Strategy.

                Do you have time to talk about empowering your team?

                Best,

                Meagan Truong

                """,
                number_sent = 9,
                number_replied = 4,
                number_unsubscribed = 1
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
                contact = "Brittany Partridge"
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
                tone = False
            )
        ]

        db.session.add_all(replies)
        db.session.commit()

