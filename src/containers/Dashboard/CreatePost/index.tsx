import React from "react";
import DashboardNav from "../../../components/DashboardNav";
import PostForm from "../../../components/PostComponents/PostForm";

const CreatePost = () => {
    return (
        <>
            <h1 className="mt-4 mb-4">Created Posts</h1>

            <div className="row">
                {/* <!-- left menu area --> */}
                <DashboardNav />
                <PostForm />
                <div className="col-md-3"></div>
            </div>
        </>
    );
};

export default CreatePost;
