import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuthor } from "../../redux/action-creators/AuthorActionCreators";
import { setIsLoading } from "../../redux/action-creators/GeneralActionCreators";
import { State } from "../../redux/reducers";
import { AuthorType } from "../../redux/types";
import Author from "../../components/AuthorComponents/Author";
import { NavLink, useParams } from "react-router-dom";
import AuthorPosts from "../AuthorPosts";

const AuthorDetails = () => {
    const { authorId } = useParams();
    const author: AuthorType["data"] = useSelector(
        (state: State) => state.authorReducer.data
    );
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            if (!author.name) {
                dispatch(setIsLoading(true));
            }

            await dispatch(getAuthor(authorId)); // 62051c96ff2db694153e2f79
        })();
    }, []);

    return (
        <div>
            {author.name && (
                <>
                    <h1 className="mt-4 mb-4">Author Details</h1>

                    <div className="row">
                        <div className="col-md-3">
                            <div className="card">
                                <div className="card-body align-self-center">
                                    <img
                                        src={`${author.author_avatar}`}
                                        className="img-thumbnail"
                                        alt=""
                                    />
                                </div>
                                <div className="border p-2">{author.name}</div>
                                <div className="border p-2">
                                    Total Posts: {author.total_posts}
                                </div>
                                <div className="border p-2">
                                    Popular Post:
                                    <NavLink
                                        className="text-decoration-none"
                                        to={`/post-details/${author.popular_post_id}`}
                                    >
                                        &nbsp;{author.popular_post_name}
                                    </NavLink>
                                </div>
                            </div>
                        </div>

                        <AuthorPosts />
                        <div className="col-md-3"></div>
                    </div>
                </>
            )}
        </div>
    );
};

export default AuthorDetails;
