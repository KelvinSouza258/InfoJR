import { useEffect, useState } from 'react'
import { Redirect } from 'react-router'

import { getCountries, ICountries } from '../../../hooks/getContent'
import { Button } from '../../Atoms'
import { SelectInput } from '../../Molecules'
import * as S from './styles'

const Form: React.FC = () => {
    const [countries, setCountries] = useState<ICountries[]>([])
    const [selectedCountry, setSelectedCountry] = useState('')
    const [selectedStatus, setSelectedStatus] = useState('')
    const [search, setSearch] = useState(false)

    const status = ['Confirmed', 'Deaths', 'Recovered']

    useEffect(() => {
        getCountries()
            .then((data) => setCountries(data))
            .catch((error) => {
                throw error
            })

        setSearch(false)
    }, [])

    const [slug, setSlug] = useState('')

    useEffect(() => {
        const country = countries.find(
            (country) => country.Country === selectedCountry
        )

        setSlug(country?.Slug ?? '')
    }, [selectedCountry])

    return (
        <S.Form
            onSubmit={() => {
                setSearch(true)
            }}
        >
            <S.InputArea>
                <SelectInput
                    label="Country"
                    data={countries.map((data) => data.Country)}
                    state={selectedCountry}
                    setState={setSelectedCountry}
                />
                <SelectInput
                    label="Status"
                    data={status}
                    state={selectedStatus}
                    setState={setSelectedStatus}
                />
            </S.InputArea>
            <Button>Search</Button>
            {search ? (
                <Redirect
                    to={`/results/${slug}/${selectedStatus.toLocaleLowerCase()}`}
                />
            ) : null}
        </S.Form>
    )
}

export default Form
