export interface AuthorType {
    data: {
        _id?: string,
        username: string,
        password?: string,
        profileId?: string,
        name?: string,
        author_avatar?: string | File | FileList | null,
        total_posts?: number,
        popular_post_id?: string,
        popular_post_name?: string,
        timestamp?: string,
    }
}

interface Author {
    _id?: string,
    username: string,
    password?: string,
    profileId?: string,
    name?: string,
    author_avatar?: string,
    total_posts?: number,
    popular_post_id?: string,
    popular_post_name?: string,
    timestamp?: string,
}

export interface AuthorsType {
    data: Array<Author>
}

export interface PostType {
    data: {
        _id?: string,
        authorId?: string,
        author_name?: string,
        author_avatar?: string,
        title: string,
        content: string,
        post_image?: string,
        tag: string,
        likes?: number
        timestamp?: string
    }
}

interface Post {
    _id?: string,
    authorId?: string,
    author_name?: string,
    author_avatar?: string,
    title: string,
    content: string,
    post_image?: string,
    tag: string,
    likes?: number
    timestamp?: string
}

export interface PostsType {
    data: Array<Post>
}

export interface LikePostType {
    postId?: string,
    isLike: boolean,
}

export interface IsLoadingType {
    isLoading: boolean
}

export interface MessageType {
    text: string,
    level: string,
}