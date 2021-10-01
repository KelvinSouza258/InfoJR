import { useEffect, useState } from 'react'
import { Redirect } from 'react-router'

import { getCountries, ICountries } from '../../../hooks/getContent'
import { Button } from '../../Atoms'
import { SelectInput } from '../../Molecules'
import * as S from './styles'

const Form: React.FC<{
    btnCenter?: boolean
    parentLoading?: 'loading' | 'loaded'
}> = ({
    btnCenter,
    parentLoading = 'loaded'
}: {
    btnCenter?: boolean
    parentLoading?: 'loading' | 'loaded'
}) => {
    const [countries, setCountries] = useState<ICountries[]>([])
    const [selectedCountry, setSelectedCountry] = useState('')
    const [selectedStatus, setSelectedStatus] = useState('')
    const [search, setSearch] = useState(false)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState<'loading' | 'loaded'>('loading')

    const status = ['Confirmed', 'Deaths', 'Recovered']

    useEffect(() => {
        setLoading('loading')
        getCountries()
            .then((data) => {
                setCountries(data)
                setLoading('loaded')
            })
            .catch((error) => {
                setError(true)
                // eslint-disable-next-line no-console
                console.log(error)
            })

        setSearch(false)
    }, [])

    useEffect(() => {
        if (error) throw new Error('At Api Call')
    }, [error])

    const [slug, setSlug] = useState('')

    useEffect(() => {
        const country = countries.find(
            (country) => country.Country === selectedCountry
        )

        setSlug(country?.Slug ?? '')
    }, [selectedCountry])

    return (
        <>
            {loading === 'loading' || parentLoading === 'loading' ? (
                <S.FormSkeleton btnCenter={btnCenter}>
                    <div>
                        <span />
                    </div>
                    <div>
                        <span />
                    </div>
                    <div />
                </S.FormSkeleton>
            ) : (
                <S.Form
                    onSubmit={(e) => {
                        if (selectedCountry === '' || selectedStatus === '') {
                            e.preventDefault()
                            return
                        }
                        setSearch(true)
                    }}
                    btnCenter={btnCenter}
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
            )}
        </>
    )
}

export default Form
