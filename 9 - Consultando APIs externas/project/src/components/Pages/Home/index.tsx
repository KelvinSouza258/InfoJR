// import { Heading } from '../../Atoms'
import { ReactComponent as Logo } from '../../../assets/logo.svg'
import { Heading, Paragraph } from '../../Atoms'
import { Form } from '../../Organisms'
import * as S from './styles'

const Home: React.FC = () => {
    return (
        <S.Home>
            <Logo />
            <S.Content>
                <S.Texts>
                    <Heading variant="big">
                        Learn all about COVID-19 anywhere in the world
                    </Heading>
                    <Paragraph>
                        Search for confirmed cases, deaths and recoveries from
                        any country in the world.
                    </Paragraph>
                </S.Texts>
                <Form />
            </S.Content>
        </S.Home>
    )
}

export default Home
