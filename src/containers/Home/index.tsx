import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Posts from "../../components/Posts";
import { setIsLoading } from "../../redux/action-creators/GeneralActionCreators";
import { getAllPosts } from "../../redux/action-creators/PostActionCreators";
import { State } from "../../redux/reducers";
import { PostsType } from "../../redux/types";

const Home = () => {
    const posts: PostsType = useSelector((state: State) => state.postsReducer);
    const dispatch = useDispatch();

    console.log(posts);
    useEffect(() => {
        (async () => {
            if (posts.data.length <= 1) dispatch(setIsLoading(true));

            await dispatch(getAllPosts());
        })();
    }, []);

    return (
        <>
            <h1 className="mt-4 mb-4">Posts</h1>
            <Posts data={posts.data} />
        </>
    );
};

export default Home;