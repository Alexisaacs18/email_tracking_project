import React from "react";

function StatsCard({ title, sent, replied, unsubscribed }) {
    return (
        <div className="statscard">
            <li>{title}</li>
            <li>{`Reply Rate: ${(replied / sent).toFixed(2)}%`}</li>
            <li>{`Unsubscribe Rate: ${(unsubscribed / sent).toFixed(2)}%`}</li>
        </div>
    )
}

export default StatsCard;
