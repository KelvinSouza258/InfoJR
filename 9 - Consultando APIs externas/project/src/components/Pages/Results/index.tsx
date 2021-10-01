import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { getCountryInfo, ICountryInfo } from '../../../hooks/getContent'
import { Heading } from '../../Atoms'

const Results: React.FC = () => {
    const { slug, status } = useParams<{ slug: string; status: string }>()
    const [loading, setLoading] = useState<'loading' | 'loaded'>('loading') //eslint-disable-line

    const [country, setCountry] = useState<ICountryInfo>() //eslint-disable-line

    useEffect(() => {
        getCountryInfo({ country: slug, status, setLoading })
            .then((data) => setCountry(data[data.length - 1]))
            .catch((error) => {
                throw error
            })
    }, [])

    return (
        <Heading>
            {country?.Country} + {country?.Cases}
        </Heading>
    )
}

export default Results
