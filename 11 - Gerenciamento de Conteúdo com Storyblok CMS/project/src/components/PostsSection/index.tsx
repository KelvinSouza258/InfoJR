/* eslint-disable @typescript-eslint/restrict-template-expressions */
import Image from 'next/image'
import Link from 'next/link'

import formatDate from '../../utils/formatDate'
import * as S from './styles'

export interface IPostContent {
    _uid: string
    title: string
    content: string
    component: string
    thumbnail: {
        id: number
        alt: string
        name: string
        focus: null
        title: string
        filename: string
        copyright: string
        fieldtype: string
    }
    author_name: string
    description: string
    published_at: string
    author_avatar: {
        id: 3061571
        alt: string
        name: string
        focus: null
        title: string
        filename: string
        copyright: string
        fieldtype: string
    }
    _editable: string
}

export interface IPost {
    name?: string
    created_at?: string
    published_at?: string
    id: number
    uuid: string
    content: IPostContent
    slug: string
    full_slug: string
    sort_by_date: string
    position: number
    tag_list: []
    is_startpage: boolean
    parent_id: number
    meta_data: null
    group_id: string
    first_published_at: string
    release_id: null
    lang: string
    path: string
    alternates: []
    default_full_slug: null
    translated_slugs: null
    _stopResolving: true
}

interface IBlok {
    _uid: string
    posts: IPost[]
}

const PostsSection: React.FC<{ blok: IBlok }> = ({ blok }) => {
    const firstPost = blok.posts[0]
    const [, ...posts] = blok.posts
    return (
        <S.Home>
            <Link href={`/${firstPost.slug}`}>
                <a>
                    <S.FirstPost>
                        <Image
                            src={firstPost.content.thumbnail.filename}
                            alt="post thumbnail"
                            width="854px"
                            height="533px"
                        />

                        <h2>{firstPost.content.title}</h2>
                        <p>{firstPost.content.description}</p>
                    </S.FirstPost>
                </a>
            </Link>
            <S.Divider />
            <S.PostsSection>
                {posts.map((post: IPost) => (
                    <Link href={`/${post.slug}`} passHref key={post.slug}>
                        <S.Post>
                            <Image
                                src={post.content.thumbnail.filename}
                                alt="post thumbnail"
                                width="304"
                                height="176"
                            />
                            <h2>{post.content.title}</h2>
                            <p>
                                Publicado em{' '}
                                {formatDate(post.content.published_at, 1)}
                            </p>
                        </S.Post>
                    </Link>
                ))}
            </S.PostsSection>
        </S.Home>
    )
}

export default PostsSection
