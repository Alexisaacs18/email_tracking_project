import React from "react";
import { useEffect, useState } from "react";

function RepliesCard({ reply }) {

    const url = "http://127.0.0.1:5555"

    const [title, setTitle] = useState({})
    const [contact, setContact] = useState({})

    useEffect(() => {
        fetch(`${url}/emails/${reply.email_template_id}`)
            .then((res) => res.json())
            .then((data) => {
                setTitle(data)
            })
    }, [])

    useEffect(() => {
        fetch(`${url}/recipients/${reply.recipient_id}`)
            .then((res) => res.json())
            .then((data) => {
                setContact(data)
            })
    }, [])

    return (
        <div>
            <h3>Email: {title.email_title}</h3>
            <h3>Contact: {contact.contact}</h3>
            {reply.tone ? <p>Tone: Positive</p> : <p>Tone: Negative</p>}
        </div>
    )
}

export default RepliesCard