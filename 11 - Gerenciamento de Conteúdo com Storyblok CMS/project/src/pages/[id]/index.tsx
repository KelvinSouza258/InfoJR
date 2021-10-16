/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/member-delimiter-style */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { GetStaticPaths, GetStaticProps } from 'next'
import { StoryData } from 'storyblok-js-client'

import DynamicComponent from '../../components/DynamicComponent'
import Storyblok, { useStoryblok } from '../../lib/storyblok'
// import useFormatDate from '../../../utils/formatDate'

const Post: React.FC<{ story: StoryData; preview: any }> = ({
    story,
    preview
}) => {
    const enableBridge = true
    story = useStoryblok(story, enableBridge)

    return <DynamicComponent blok={story.content} />
}

export default Post

export const getStaticProps: GetStaticProps = async ({
    params,
    preview = false
}) => {
    // @ts-expect-error idk
    const slug = params.id ? params.id : 'home'

    const sbParams: {
        version: string
        cv?: number
    } = {
        version: 'draft' // or published
    }

    if (preview) {
        sbParams.version = 'draft'
        sbParams.cv = Date.now()
    }

    const { data } = await Storyblok.get(`cdn/stories/posts/${slug}`, sbParams)
    return {
        props: {
            story: data ? data.story : null,
            preview
        },
        revalidate: 3600 // revalidate every hour
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const { data } = await Storyblok.get('cdn/links/', {
        starts_with: 'posts'
    })

    const paths: any[] = []
    Object.keys(data.links).forEach((linkKey) => {
        // don't create routes for folders and the index page
        if (
            data.links[linkKey].is_folder ||
            data.links[linkKey].slug === 'home'
        ) {
            return
        }
        // get array for slug because of catch all
        const slug = data.links[linkKey].slug
        // remove the posts part from the slug
        const newSlug = slug.replace('posts', '')
        const [, splittedSlug] = newSlug.split('/')

        paths.push({ params: { id: splittedSlug } })
    })

    return {
        paths: paths,
        fallback: false
    }
}
