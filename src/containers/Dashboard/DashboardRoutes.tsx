import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from ".";
import AuthorDashboard from "../../components/AuthorDashboard";
import PostForm from "../../components/PostForm";
import AuthorPosts from "../AuthorPosts";
import LikedPosts from "../LikedPosts";

const DashboardRoutes = () => {
    return (
        <Routes>
            <Route path="/dashboard" element={<AuthorDashboard />} />
            <Route
                path="/dashboard/created-posts/:authorId"
                element={<AuthorPosts />}
            />
            <Route
                path="/dashboard/liked-posts/:authorId"
                element={<LikedPosts />}
            />
            <Route path="/dashboard/create-post" element={<PostForm />} />
        </Routes>
    );
};

export default DashboardRoutes;
