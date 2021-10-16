/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/indent */
import DynamicComponent from '../DynamicComponent'

const Page: React.FC<{ blok: any }> = ({ blok }) => (
    <main>
        {blok.body
            ? blok.body.map((blok: any) => (
                  <DynamicComponent blok={blok} key={blok._uid} />
              ))
            : null}
    </main>
)

export default Page
