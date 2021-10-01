import { RefObject, useEffect } from 'react'

function useOnClickOutside<T extends HTMLElement = HTMLElement>(
    ref: RefObject<T>,
    handler: (event: MouseEvent) => void
): void {
    useEffect(() => {
        const listener = (event: MouseEvent): void => {
            const elemement = ref?.current

            if (elemement == null || elemement.contains(event.target as Node)) {
                return
            }

            handler(event)
        }

        document.addEventListener(`mousedown`, listener)

        return () => {
            document.removeEventListener(`mousedown`, listener)
        }

        // Reload only if ref or handler changes
    }, [ref, handler])
}

export default useOnClickOutside
