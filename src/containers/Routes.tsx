import { Routes, Route } from "react-router-dom";
import AuthorDetails from "./AuthorDetails";
import AuthorPosts from "./AuthorPosts";
import Authors from "./Authors";
import Dashboard from "./Dashboard";
import CreatedPosts from "./Dashboard/CreatedPosts";
import Home from "./Home";
import LikedPosts from "./Dashboard/LikedPosts";
import PostDetails from "./PostDetails";
import Signin from "./Signin";
import Signup from "./Signup";
import CreatePost from "./Dashboard/CreatePost";
import UpdatePassword from "./Dashboard/UpdatePassword";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post-details/:postId" element={<PostDetails />} />
            <Route path="/authors" element={<Authors />} />
            <Route
                path="/author-details/:authorId"
                element={<AuthorDetails />}
            />
            <Route path="/author-posts/:authorId" element={<AuthorDetails />} />
            <Route
                path="/dashboard/liked-posts/:authorId"
                element={<LikedPosts />}
            />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route
                path="/dashboard/created-posts/:authorId"
                element={<CreatedPosts />}
            />
            <Route path="/dashboard/create-post" element={<CreatePost />} />
            <Route
                path="/dashboard/update-password"
                element={<UpdatePassword />}
            />
        </Routes>
    );
}

export default AppRoutes;
