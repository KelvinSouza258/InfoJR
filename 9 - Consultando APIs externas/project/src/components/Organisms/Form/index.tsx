import { useEffect, useState } from 'react'

import { getCountries } from '../../../hooks/getContent'
import { Button } from '../../Atoms'
import { SelectInput } from '../../Molecules'
import * as S from './styles'

const Form: React.FC = () => {
    const [countries, setCountries] = useState<string[]>([])
    const [selectedCountry, setSelectedCountry] = useState('')
    const [selectedStatus, setSelectedStatus] = useState('')

    const status = ['confirmed', 'deaths', 'recovered']

    useEffect(() => {
        getCountries()
            .then((data) => setCountries(data.map((item) => item.Country)))
            .catch((error) => {
                throw error
            })
    }, [])

    return (
        <S.Form>
            <S.InputArea>
                <SelectInput
                    label="Country"
                    data={countries}
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
        </S.Form>
    )
}

export default Form
