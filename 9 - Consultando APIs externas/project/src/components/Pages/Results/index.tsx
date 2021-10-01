import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { getCountryInfo, ICountryInfo } from '../../../hooks/getContent'
import { Heading, Paragraph } from '../../Atoms'
import Form from '../../Organisms/Form'
import * as S from './styles'

const Results: React.FC = () => {
    const { slug, status } = useParams<{ slug: string; status: string }>()
    const [loading, setLoading] = useState<'loading' | 'loaded'>('loading')
    const [error, setError] = useState(false)

    const [country, setCountry] = useState<ICountryInfo | undefined>(undefined)

    useEffect(() => {
        setLoading('loading')
        getCountryInfo({ country: slug, status, setLoading })
            .then((data) => {
                const countryInfo = data[data.length - 1]
                if (countryInfo.Country === '') throw new Error('Quebrou aqui')
                setCountry(countryInfo)
                setLoading('loaded')
            })
            .catch((error) => {
                setError(true)
                // eslint-disable-next-line no-console
                console.error(error)
            })
    }, [])

    useEffect(() => {
        if (country?.Country === '' || error) throw new Error('At Api Call')
    }, [country, error])

    return (
        <S.Results>
            {loading === 'loaded' ? (
                <S.Title>
                    <Heading variant="big">{country?.Country}</Heading>
                    <Paragraph variant="cases">
                        {country?.Cases.toLocaleString()}
                        <span>{country?.Status} cases</span>
                    </Paragraph>
                </S.Title>
            ) : (
                <S.SkeletonResults>
                    <div />
                    <div />
                </S.SkeletonResults>
            )}
            <S.Separator />
            <Form btnCenter parentLoading={loading} />
        </S.Results>
    )
}

export default Results
