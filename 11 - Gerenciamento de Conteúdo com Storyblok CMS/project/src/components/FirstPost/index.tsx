/* eslint-disable @typescript-eslint/restrict-template-expressions */
import Image from 'next/image'
import Link from 'next/link'

import { Divider, FirstPost as StyledFirstPost } from '../../styles/pages/Home'

const FirstPost: React.FC<{ blok: any }> = ({ blok }) => {
    return (
        <>
            <Link href={`/posts/${blok.post[0].slug}`}>
                <a>
                    <StyledFirstPost>
                        <Image
                            src={blok.post[0].content.thumbnail.filename}
                            alt="post thumbnail"
                            width="854px"
                            height="533px"
                        />

                        <h2>{blok.post[0].content.title}</h2>
                        <p>{blok.post[0].content.description}</p>
                    </StyledFirstPost>
                </a>
            </Link>
            <Divider />
        </>
    )
}

export default FirstPost
