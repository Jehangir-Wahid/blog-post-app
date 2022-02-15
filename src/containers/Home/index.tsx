import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Posts from "../../components/PostComponents/Posts";
import { setIsLoading } from "../../redux/action-creators/GeneralActionCreators";
import { getAllPosts } from "../../redux/action-creators/PostActionCreators";
import { State } from "../../redux/reducers";
import { PostsType } from "../../redux/types";

const Home = () => {
    const posts: PostsType = useSelector((state: State) => state.postsReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            if (posts.data.length <= 1) dispatch(setIsLoading(true));

            await dispatch(getAllPosts());
        })();
    }, []);

    return (
        <>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <h4 className="bg-light p-3">Posts</h4>
                    <Posts data={posts.data} />
                </div>
                <div className="col-md-3"></div>
            </div>
        </>
    );
};

export default Home;
