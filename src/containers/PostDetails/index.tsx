import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Post from "../../components/PostComponents/Post";
import { setIsLoading } from "../../redux/action-creators/GeneralActionCreators";
import { getPost } from "../../redux/action-creators/PostActionCreators";
import { State } from "../../redux/reducers";
import { PostType } from "../../redux/types";

const PostDetails = () => {
    const { postId } = useParams();
    const post: PostType["data"] = useSelector(
        (state: State) => state.postReducer.data
    );
    const message = useSelector((state: State) => state.generalReducer.message);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!post.title) {
            dispatch(setIsLoading(true));
        }

        dispatch(getPost(postId)); // 62051ce6ff2db694153e2f9f
    }, []);

    return (
        <div>
            {message && (
                <div>
                    <div>{message.text}</div>
                    <div>{message.level}</div>
                </div>
            )}
            {post.title && (
                <div className="post-details">
                    <Post data={post} />
                </div>
            )}
        </div>
    );
};

export default PostDetails;
