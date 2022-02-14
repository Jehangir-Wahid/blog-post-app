import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Posts from "../../components/Posts";
import { setIsLoading } from "../../redux/action-creators/GeneralActionCreators";
import { likedPosts } from "../../redux/action-creators/PostActionCreators";
import { State } from "../../redux/reducers";
import { PostsType } from "../../redux/types";

const LikedPosts = () => {
    const { authorId } = useParams();
    const posts: PostsType = useSelector((state: State) => state.postsReducer);
    const dispatch = useDispatch();

    console.log(posts);
    useEffect(() => {
        (async () => {
            if (posts.data.length <= 1) dispatch(setIsLoading(true));

            await dispatch(likedPosts(authorId));
        })();
    }, []);

    return (
        <>
            <Posts data={posts.data} />
        </>
    );
};

export default LikedPosts;
