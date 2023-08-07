export type BlogPost = {
    id: string,
    title: string,
    date: string
}

export type BlogPosts = BlogPost[]

export type Filetree = {
    "tree": [
        {
            "path": string,
            'sha': string,
        }
    ]
}