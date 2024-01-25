import React, { useEffect, useState } from "react";
import RepliesNav from "./RapliesNav";
import RepliesCard from "./RepliesCard";

function RepliesPage() {

    const url = "http://127.0.0.1:5555"

    const [replies, setReplies] = useState([])

    useEffect(() => {
        fetch(`${url}/replies`)
            .then((res) => res.json())
            .then((data) => {
                setReplies(data)
                console.log(data)
            })
    }, [])

    return (
        <div>
            <RepliesNav />
            {replies.map((reply) => (
                <RepliesCard
                    key={reply.id}
                    reply={reply}
                />
            ))}
        </div>
    )
}

export default RepliesPage