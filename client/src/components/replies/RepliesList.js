import React from 'react';
import RepliesCard from './RepliesCard';

function RepliesList({ replies }) {
    return (
        <div id="reply-list">
            {replies.map((reply) => (
                <RepliesCard
                    key={reply.id}
                    reply={reply}
                />
            ))}
        </div>
    )
}

export default RepliesList;