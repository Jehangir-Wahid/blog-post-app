import React from "react";
import { NavLink } from "react-router-dom";
import { AuthorType } from "../../../redux/types";

const Author: React.FC<AuthorType> = ({
    data: {
        authorId,
        username,
        name,
        author_avatar,
        total_posts,
        popular_post_id,
        popular_post_name,
    },
}) => {
    return (
        <div>
            <div className="row border p-4 mb-4">
                <div className="col-md-3">
                    <img
                        src={`${author_avatar}`}
                        className="img-thumbnail rounded-circle"
                        alt={name}
                    />
                </div>
                <div className="col-md-9">
                    <h5 className="text-primary">
                        <NavLink
                            className="text-decoration-none"
                            to={`/author-posts/${authorId}`}
                        >
                            &nbsp;{name}
                        </NavLink>
                    </h5>
                    <h5>Total Posts: {total_posts}</h5>
                    <h5>
                        Popular Post:
                        <NavLink
                            className="text-decoration-none"
                            to={`/post-details/${popular_post_id}`}
                        >
                            &nbsp;{popular_post_name}
                        </NavLink>
                    </h5>
                </div>
            </div>
        </div>
    );
};

export default Author;
