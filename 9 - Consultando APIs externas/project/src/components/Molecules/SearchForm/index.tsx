import { useEffect, useState } from 'react'
import { getData } from '../../../hooks/getContent'
import { SelectInput } from '../../Atoms'

const SeachForm: React.FC = () => {
    const [countries, setCountries] = useState<string[]>([])

    useEffect(() => {
        getData()
            .then((countryList) =>
                setCountries(countryList.map((country) => country.Country))
            )
            .catch((error) => {
                throw error
            })
    })

    return (
        <SelectInput placeholder="Select a Country">
            <option value="" disabled selected>
                Select a country
            </option>
            {countries.sort().map((country) => (
                <option key={country} value={country}>
                    {country}
                </option>
            ))}
        </SelectInput>
    )
}

export default SeachForm
