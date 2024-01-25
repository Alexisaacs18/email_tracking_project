import React, { useState, useEffect } from "react";
import ContactsNav from "./ContactsNav";
import ContactsCard from "./ContactCard";

function ContactsPage() {

    const url = "http://127.0.0.1:5555"

    const [contacts, setContacts] = useState([])

    useEffect(() => {
        fetch(`${url}/recipients`)
            .then((res) => res.json())
            .then((data) => {
                setContacts(data)
            })
    }, [])

    return (
        <div>
            <ContactsNav />
            {contacts.map((contact) => (
                <ContactsCard
                    key={contact.id}
                    contact={contact}
                />
            ))}
        </div>
    )
}

export default ContactsPage

