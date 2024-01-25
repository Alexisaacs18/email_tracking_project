import React from "react";

function ContactsCard({ contact }) {

    return (
        <div>
            <h3>{contact.contact}</h3>
            <p>{contact.email_address}</p>
        </div>
    )
}

export default ContactsCard