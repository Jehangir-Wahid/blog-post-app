import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuthor } from "../../redux/action-creators/AuthorActionCreators";
import { setIsLoading } from "../../redux/action-creators/GeneralActionCreators";
import { State } from "../../redux/reducers";
import { AuthorType } from "../../redux/types";
import Author from "../../components/Author";
import { useParams } from "react-router-dom";

const AuthorDetails = () => {
    const { authorId } = useParams();
    const author: AuthorType = useSelector(
        (state: State) => state.authorReducer
    );
    const message = useSelector((state: State) => state.generalReducer.message);
    const dispatch = useDispatch();

    console.log(author);
    useEffect(() => {
        (async () => {
            if (!author.data.name) {
                dispatch(setIsLoading(true));
            }

            await dispatch(getAuthor(authorId)); // 62051c96ff2db694153e2f79
        })();
    }, []);

    return (
        <div>
            {message && (
                <div>
                    <div style={{ color: "white" }}>{message.text}</div>
                    <div style={{ color: "white" }}>{message.level}</div>
                </div>
            )}
            {author.data.name && <Author data={author.data} />}
        </div>
    );
};

export default AuthorDetails;
