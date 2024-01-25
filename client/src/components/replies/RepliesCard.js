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
        <div className="reply-card">
            <li>
                <div className="reply-card-header">Email: {title.email_title}</div>
                <div className="reply-card-body">
                    <p>Contact: {contact.contact}</p>
                    {reply.tone ? <p>Tone: Positive</p> : <p>Tone: Negative</p>}
                </div>
            </li>
        </div>
    )
}

export default RepliesCard;