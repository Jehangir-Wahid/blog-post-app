import React from "react";
import DashboardNav from "../../../components/DashboardNav";
import AuthorPosts from "../../AuthorPosts";

const CreatedPosts = () => {
    return (
        <>
            <div className="row">
                <DashboardNav />
                <AuthorPosts />
                <div className="col-md-3"></div>
            </div>
        </>
    );
};

export default CreatedPosts;
