import React from 'react';
import ContactCard from './ContactCard';

function ContactList({ contacts }) {
    return (
        <ul id="contact-list">
            {contacts.map((contact) => (
                <ContactCard
                    key={contact.id}
                    contact={contact}
                />
            ))}
        </ul>
    )
}

export default ContactList;