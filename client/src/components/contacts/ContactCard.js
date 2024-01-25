import { useState, useEffect } from "react";
import React from "react";

function ContactsCard({ contact }) {

    const url = "http://127.0.0.1:5555"

    const [company, setCompany] = useState({})

    useEffect(() => {
        fetch(`${url}/companies/${contact.company_id}`)
            .then((res) => res.json())
            .then((data) => {
                setCompany(data)
            })
    }, [])

    return (
        <div className="contact-card">
            <div className="contact-card-header">Contact: {contact.contact}</div>
            <div className="contact-card-body">
                <p>Company: {company.name}</p>
                <p>Email: {contact.email_address}</p>
            </div>
        </div>
    )
}

export default ContactsCard