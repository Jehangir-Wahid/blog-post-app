export const authorInitialState = {
    data: {
        _id: "",
        username: "",
        password: "",
        authorId: "",
        name: "",
        author_avatar: null,
        total_posts: 0,
        total_likes: 0,
        popular_post_id: "",
        popular_post_name: "",
        popular_post_likes: 0,
        timestamp: "",
    }
}

export const authorsInitialState = { data: [authorInitialState.data].flat() }

export const postInitialState = {
    data: {
        _id: "",
        authorId: "",
        author_name: "",
        author_avatar: "",
        likes: 0,
        title: "",
        content: "",
        post_image: null,
        tag: "",
        timestamp: "",
    }
}

export const postsInitialState = { data: [postInitialState.data].flat() }

export const isLoadingInitialState = true

export const messageInitialState = {
    message: "",
    level: "",
}