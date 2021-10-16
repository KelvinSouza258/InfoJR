import Image from 'next/image'
import Link from 'next/link'

import * as S from '../../styles/pages/Post'
import useFormatDate from '../../utils/formatDate'

const PostPage: React.FC<{ blok: any }> = ({ blok }) => {
    const post = blok
    console.log(post)
    return (
        <S.Posts postId={blok.slug}>
            <header className="container">
                <h1>{post.title}</h1>
                <p>{post.description}</p>
            </header>
            <div className="image-container">
                <Image
                    src={post.thumbnail.filename}
                    alt="post thumbnail"
                    width="1440"
                    height="900"
                />
            </div>
            <S.PostInfo>
                <S.Author>
                    <Image
                        src={post.author_avatar.filename}
                        alt="post author"
                        width="57"
                        height="57"
                    />
                    <div>
                        <p>{post.author_name}</p>
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

export default PostPage
