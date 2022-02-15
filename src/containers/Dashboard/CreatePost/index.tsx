import React from "react";
import DashboardNav from "../../../components/DashboardNav";
import PostForm from "../../../components/PostComponents/PostForm";

const CreatePost = () => {
    return (
        <>
            <div className="row">
                {/* <!-- left menu area --> */}
                <DashboardNav />
                <div className="col-md-6">
                    <h4 className="bg-light p-3">Create New Post</h4>
                    <PostForm />
                </div>
                <div className="col-md-3"></div>
            </div>
        </>
    );
};

export default CreatePost;
