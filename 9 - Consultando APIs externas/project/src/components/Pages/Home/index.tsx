import { Heading, Paragraph } from '../../Atoms'
import { Form } from '../../Organisms'
import * as S from './styles'

const Home: React.FC = () => {
    return (
        <S.Home>
            <S.Texts>
                <Heading variant="big">
                    Learn all about COVID-19 anywhere in the world
                </Heading>
                <Paragraph>
                    Search for confirmed cases, deaths and recoveries from any
                    country in the world.
                </Paragraph>
            </S.Texts>
            <Form />
        </S.Home>
    )
}

export default Home
