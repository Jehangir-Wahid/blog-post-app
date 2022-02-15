import React from "react";
import DashboardNav from "../../../components/DashboardNav";
import AuthorPosts from "../../AuthorPosts";

const CreatedPosts = () => {
    return (
        <>
            <h1 className="mt-4 mb-4">Dashboard</h1>

            <div className="row">
                <DashboardNav />
                <AuthorPosts />
                <div className="col-md-3"></div>
            </div>
        </>
    );
};

export default CreatedPosts;
