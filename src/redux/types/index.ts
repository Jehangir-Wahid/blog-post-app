export interface AuthorType {
    data: {
        _id?: string,
        username: string,
        password?: string,
        authorId?: string,
        name?: string,
        author_avatar?: File,
        total_posts?: number,
        total_likes?: number,
        popular_post_id?: string,
        popular_post_name?: string,
        popular_post_likes?: number,
        timestamp?: string,
    }
}

interface Author {
    _id?: string,
    username: string,
    password?: string,
    authorId?: string,
    name?: string,
    author_avatar?: File,
    total_posts?: number,
    total_likes?: number,
    popular_post_id?: string,
    popular_post_name?: string,
    popular_post_likes?: number,
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
        post_image?: File,
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
    post_image?: File,
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