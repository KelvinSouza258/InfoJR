import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import * as S from '../../../styles/pages/Post'
import useFormatDate from '../../../utils/formatDate'
import { IPost } from '../..'

const Post: React.FC<{ post: IPost }> = ({ post }) => {
    return (
        <S.Posts postId={post.id}>
            <header className="container">
                <h1>{post.title}</h1>
                <p>{post.description}</p>
            </header>
            <div className="image-container">
                <Image
                    src={post.thumbnail}
                    alt="post thumbnail"
                    width="1440"
                    height="900"
                />
            </div>
            <S.PostInfo>
                <S.Author>
                    <Image
                        src={post.author.avatar}
                        alt="post author"
                        width="57"
                        height="57"
                    />
                    <div>
                        <p>{post.author.name}</p>
                        <p>{useFormatDate(post.published_at, 2)}</p>
                    </div>
                </S.Author>
                <S.Social>
                    <Link href="#">
                        <a className="icon">
                            <Image
                                src="/facebook.svg"
                                alt="facebook logo"
                                width="20"
                                height="20"
                            />
                        </a>
                    </Link>
                    <Link href="#">
                        <a className="icon">
                            <Image
                                src="/twitter.svg"
                                alt="twitter logo"
                                width="20"
                                height="16"
                            />
                        </a>
                    </Link>
                    <Link href="#">
                        <a className="icon">
                            <Image
                                src="/zap.svg"
                                alt="whatsapp logo"
                                width="20"
                                height="20"
                            />
                        </a>
                    </Link>
                </S.Social>
            </S.PostInfo>
            <S.PostContent>
                <p>{post.content}</p>
            </S.PostContent>
        </S.Posts>
    )
}

export default Post

export const getStaticProps: GetStaticProps = async (ctx) => {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    const res = await fetch(`http://localhost:4000/posts/${ctx.params?.id}`)
    const post: IPost = await res.json()

    return {
        props: { post }
    }
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const res = await fetch('http://localhost:4000/posts')
    const posts: IPost[] = await res.json()

    const paths = posts.map((post) => ({
        params: { id: post.id }
    }))

    return {
        paths,
        fallback: false
    }
}
