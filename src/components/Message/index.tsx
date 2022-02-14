import React from "react";
import { MessageType } from "../../redux/types";

const Message: React.FC<MessageType> = ({ text, level }) => {
    return (
        <div className={`alert alert-${level}`} role="alert">
            {text}
        </div>
    );
};

export default Message;
