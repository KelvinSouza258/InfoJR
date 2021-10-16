import SbEditable from 'storyblok-react'

import Page from '../Page'
import Post from '../Post'
import PostsSection from '../PostsSection'

// resolve Storyblok components to Next.js components
const Components = {
    page: Page,
    postsSection: PostsSection,
    post: Post
}

const DynamicComponent: React.FC<{ blok: any }> = ({ blok }) => {
    // @ts-expect-error idk
    if (typeof Components[blok.component] !== 'undefined') {
        // @ts-expect-error idk

        const Component = Components[blok.component]
        return (
            <SbEditable content={blok}>
                <Component blok={blok} />
            </SbEditable>
        )
    }

    return (
        <p>
            The component <strong>{blok.component}</strong> has not been created
            yet.
        </p>
    )
}

export default DynamicComponent
