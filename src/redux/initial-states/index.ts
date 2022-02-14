export const authorInitialState = {
    data: {
        _id: "",
        username: "",
        password: "",
        profileId: "",
        name: "",
        author_avatar: null,
        total_posts: 0,
        popular_post_id: "",
        popular_post_name: "",
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