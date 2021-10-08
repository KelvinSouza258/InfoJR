import type { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import * as S from '../styles/pages/Home'
import fomartDate from '../utils/formatDate'

export interface IPost {
    id: string
    title: string
    description: string
    thumbnail: string
    author: {
        name: string
        avatar: string
    }
    published_at: string
    content: string
}

interface IHomeProps {
    firstPost: IPost
    posts: IPost[]
}

const Home: NextPage<IHomeProps> = ({ firstPost, posts }) => {
    return (
        <S.Home>
            <Link href={`/posts/${firstPost.id}`}>
                <a>
                    <S.FirstPost>
                        <Image
                            src={firstPost.thumbnail}
                            alt="post thumbnail"
                            width="854px"
                            height="533px"
                        />

                        <h2>{firstPost.title}</h2>
                        <p>{firstPost.description}</p>
                    </S.FirstPost>
                </a>
            </Link>
            <S.Divider />
            <h3 className="section-title">Todos os artigos</h3>
            <S.PostsSection>
                {posts.map((post) => (
                    <Link href={`/posts/${post.id}`} passHref key={post.id}>
                        <S.Post>
                            <Image
                                src={post.thumbnail}
                                alt="post thumbnail"
                                width="304"
                                height="176"
                            />
                            <h2>{post.title}</h2>
                            <p>
                                Publicado em {fomartDate(post.published_at, 1)}
                            </p>
                        </S.Post>
                    </Link>
                ))}
            </S.PostsSection>
        </S.Home>
    )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch('http://localhost:4000/posts')
    const posts: IPost[] = await res.json()

    const firstPost = posts.shift()

    return {
        props: {
            firstPost,
            posts
        }
    }
}
