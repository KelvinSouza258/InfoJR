import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'

// import Image from 'next/image'
// import Link from 'next/link'
import DynamicComponent from '../components/DynamicComponent'
import Storyblok, { useStoryblok } from '../lib/storyblok'
// import formatDate from '../utils/formatDate'

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
    story,
    preview
}) => {
    story = useStoryblok(story, preview)

    return <DynamicComponent blok={story.content} />
}

export default Home

export const getStaticProps: GetStaticProps = async (context) => {
    const slug = 'home'

    // eslint-disable-next-line @typescript-eslint/member-delimiter-style
    const params: {
        version: string
        cv?: number
        resolve_relations?: string[]
    } = {
        version: 'draft',
        resolve_relations: ['postsSection.posts']
    }

    if (context.preview ?? false) {
        params.version = 'draft'

        params.cv = Date.now()
    }

    const { data } = await Storyblok.get(`cdn/stories/${slug}`, params)

    return {
        props: {
            // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
            story: data ? data.story : false,
            preview: context.preview ?? false
        },
        revalidate: 10
    }
}
