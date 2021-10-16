/* eslint-disable @typescript-eslint/restrict-template-expressions */
import Image from 'next/image'
import Link from 'next/link'

import {
    Post,
    PostsSection as StyledPostsSection
} from '../../styles/pages/Home'
import formatDate from '../../utils/formatDate'

const PostsSection: React.FC<{ blok: any }> = ({ blok }) => {
    console.log(blok.posts[0].content)
    return (
        <StyledPostsSection>
            {blok.posts.map((post: any) => (
                <Link href={`/posts/${post.slug}`} passHref key={post.id}>
                    <Post>
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
                    </Post>
                </Link>
            ))}
        </StyledPostsSection>
    )
}

export default PostsSection
