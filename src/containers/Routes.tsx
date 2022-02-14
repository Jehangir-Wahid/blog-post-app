import { Routes, Route } from "react-router-dom";
import AuthorDetails from "./AuthorDetails";
import AuthorPosts from "./AuthorPosts";
import Authors from "./Authors";
import Dashboard from "./Dashboard";
import Home from "./Home";
import LikedPosts from "./LikedPosts";
import PostDetails from "./PostDetails";
import Signin from "./Signin";
import Signup from "./Signup";

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
            <Route path="/author-posts/:authorId" element={<AuthorPosts />} />
            <Route path="/liked-posts/:authorId" element={<LikedPosts />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    );
}

export default AppRoutes;
