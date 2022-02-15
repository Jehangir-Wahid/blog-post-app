import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuthor } from "../../../redux/action-creators/AuthorActionCreators";
import { State } from "../../../redux/reducers";
import { AuthorType } from "../../../redux/types";

const AuthorDashboard = () => {
    const authorId = localStorage.getItem("authorId");
    const author: AuthorType = useSelector(
        (state: State) => state.authorReducer
    );
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            await dispatch(getAuthor(authorId));
        })();
    }, []);

    return (
        <>
            {author.data.name && (
                <div className="col-md-6">
                    <h5>Welcome {author.data.name}!</h5>
                    <div className="row mb-4">
                        <div className="col-md-4 m-4 border text-center p-5">
                            <h1>{author.data.total_posts}</h1>
                            <h5>Total Posts</h5>
                        </div>
                        <div className="col-md-4 m-4 border text-center p-5">
                            <h1>{author.data.total_likes}</h1>
                            <h5>Total Liked</h5>
                        </div>
                    </div>

                    <h4 className="bg-light p-2">Popular Post</h4>

                    <table className="table table-responsive">
                        <thead>
                            <tr>
                                <th>Title</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{author.data.popular_post_name}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </>
    );
};

export default AuthorDashboard;
