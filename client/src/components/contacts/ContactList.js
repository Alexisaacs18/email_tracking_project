import React from 'react';
import ContactCard from './ContactCard';

function ContactList() {
    return (
        <ul>
            <div className="contact-list">
                {contacts.map((contact) => (
                    <ContactCard
                        key={contact.id}
                        contact={contact}
                    />
                ))}
            </div>
        </ul>
    )
}