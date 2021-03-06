/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useEffect, useState } from 'react'
import StoryblokClient, { StoryData } from 'storyblok-js-client'

const Storyblok = new StoryblokClient({
    accessToken: 'sk3q8RRsFAogSthd4r4qGgtt',
    cache: {
        clear: 'auto',
        type: 'memory'
    }
})

export function useStoryblok(
    originalStory: StoryData,
    preview: any
): StoryData {
    const [story, setStory] = useState(originalStory)

    // adds the events for updating the visual editor
    // see https://www.storyblok.com/docs/guide/essentials/visual-editor#initializing-the-storyblok-js-bridge
    function initEventListeners() {
        // @ts-expect-error StoryblokBridge not on typeof window
        const { StoryblokBridge } = window
        if (typeof StoryblokBridge !== 'undefined') {
            // initialize the bridge with your token
            const storyblokInstance = new StoryblokBridge({
                resolve_relations: ['postsSection.posts']
            })

            // reload on Next.js page on save or publish event in the Visual Editor
            storyblokInstance.on(['change', 'published'], () =>
                location.reload()
            )

            // live update the story on input events
            storyblokInstance.on('input', (event: any) => {
                if (story && event.story.content._uid === story.content._uid) {
                    setStory(event.story)
                }
            })

            storyblokInstance.on('enterEditmode', (event: any) => {
                // loading the draft version on initial enter of editor
                Storyblok.get(`cdn/stories/${event.storyId}`, {
                    version: 'draft'
                })
                    .then(({ data }) => {
                        if (data.story) {
                            setStory(data.story)
                        }
                    })
                    .catch((error) => {
                        // eslint-disable-next-line no-console
                        console.log(error)
                    })
            })
        }
    }

    // appends the bridge script tag to our document
    // see https://www.storyblok.com/docs/guide/essentials/visual-editor#installing-the-storyblok-js-bridge
    function addBridge(callback: any) {
        // check if the script is already present
        const existingScript = document.getElementById('storyblokBridge')
        if (existingScript == null) {
            const script = document.createElement('script')
            script.src = '//app.storyblok.com/f/storyblok-v2-latest.js'
            script.id = 'storyblokBridge'
            document.body.appendChild(script)
            script.onload = () => {
                // once the scrip is loaded, init the event listeners
                callback()
            }
        } else {
            callback()
        }
    }

    useEffect(() => {
        // only load inside preview mode
        if (preview) {
            // first load the bridge, then initialize the event listeners
            addBridge(initEventListeners)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return story
}

export default Storyblok
