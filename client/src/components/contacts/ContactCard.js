import { useState, useEffect } from "react";
import React from "react";

function ContactsCard({ contact }) {

    const url = "http://127.0.0.1:5555"

    const [company, setCompany] = useState([])

    useEffect(() => {
        fetch(`${url}/companies/${contact.company_id}`)
            .then((res) => res.json())
            .then((data) => {
                setCompany(data)
            })
    }, [])

    return (
        <div>
            <h3>{contact.contact}</h3>
            <ul>{company.name}</ul>
            <p>{contact.email_address}</p>
        </div>
    )
}

export default ContactsCard