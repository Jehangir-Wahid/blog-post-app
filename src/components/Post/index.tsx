import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { likePost } from "../../redux/action-creators/PostActionCreators";
import { PostType } from "../../redux/types";

const Post: React.FC<PostType> = ({
    data: {
        _id,
        authorId,
        author_name,
        author_avatar,
        title,
        content,
        post_image,
        tag,
        likes,
        timestamp,
    },
}) => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(likePost({ postId: _id, isLike: true }));
    };

    return (
        <>
            <div className="card mt-4 mb-4">
                <div className="card-body">
                    <div className="card-title bg-light">
                        <div className="d-flex">
                            <div className="mr-5">
                                <img
                                    src={author_avatar}
                                    width="50"
                                    height="50"
                                    className="img-thumbnail"
                                    alt={author_name}
                                />
                            </div>
                            <div className="p-2"></div>
                            <div className="align-self-center">
                                <NavLink
                                    className="text-decoration-none"
                                    to={`/author-details/${authorId}`}
                                >
                                    &nbsp;{author_name}
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <p>{title}</p>
                    <div className="d-flex justify-content-center">
                        <img
                            src={post_image}
                            className="img-thumbnail"
                            alt=""
                        />
                    </div>
                    <p className="mt-4 mb-4">{content}</p>
                </div>
                <div className="card-footer">
                    <div className="d-flex justify-content-between">
                        <span>Likes: {likes}</span>
                        <span>Tag: {tag}</span>
                    </div>
                    <hr />
                    <button
                        className="btn btn-primary btn-small"
                        onClick={handleClick}
                    >
                        Like
                    </button>
                </div>
            </div>
        </>
    );
};

export default Post;
