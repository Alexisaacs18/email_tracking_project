import React from "react";

function RepliesCard({ reply }) {

    console.log(reply)

    return (
        <div>
            {reply.tone ? <p>Positive</p> : <p>Negative</p>}
        </div>
    )
}

export default RepliesCard