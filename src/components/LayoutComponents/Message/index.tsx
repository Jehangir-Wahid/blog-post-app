import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetMessage } from "../../../redux/action-creators/GeneralActionCreators";
import { MessageType } from "../../../redux/types";

const Message: React.FC<MessageType> = ({ text, level }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => dispatch(resetMessage()), 5000);
    }, []);

    return (
        <>
            {text && (
                <>
                    {window.scrollTo(0, 0)}
                    <div className={`alert alert-${level}`} role="alert">
                        {text}
                    </div>
                </>
            )}
        </>
    );
};

export default Message;
