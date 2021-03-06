import { title } from "process";
import React from "react";
import { PostsType } from "../../../redux/types";
import NoRecods from "../../LayoutComponents/NoRecords";
import Post from "../Post";

const Posts: React.FC<PostsType> = ({ data }) => {
    return (
        <>


                {data.length > 1 ? (
                    <>
                        {data.map((post, index) => (
                            <Post key={index} data={post} />
                        ))}
                    </>
                ) : (
                    <NoRecods />
                )}
        </>
    );
};

export default Posts;
