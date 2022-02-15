import { title } from "process";
import React from "react";
import { PostsType } from "../../../redux/types";
import Post from "../Post";

const Posts: React.FC<PostsType> = ({ data }) => {
    return (
        <>
            {data.length > 0 && (
                <div className="col-md-6">
                    {data.map((post, index) => (
                        <Post key={index} data={post} />
                    ))}
                </div>
            )}
        </>
    );
};

export default Posts;
