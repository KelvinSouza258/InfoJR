import React, { SetStateAction } from 'react'

export interface ICountries {
    Country: string
    Slug: string
    ISO2: string
}

export const getCountries = async (): Promise<ICountries[]> => {
    const res = await fetch('https://api.covid19api.com/countries')
    const body = await res.json()

    return body
}

export interface ICountryInfo {
    Country: string
    CountryCode: string
    Lat: string
    Lon: string
    Cases: number
    Status: string
    Date: string
}

interface IGetCoutryProps {
    country: string
    status: string
    setLoading: React.Dispatch<SetStateAction<'loading' | 'loaded'>>
}

export const getCountryInfo = async ({
    country,
    status,
    setLoading
}: IGetCoutryProps): Promise<ICountryInfo[]> => {
    setLoading('loading')

    const date = new Date()

    const today = `${date.getFullYear()}-${
        date.getMonth() + 1
    }-${date.getDate()}`

    const yesterday = `${date.getFullYear()}-${date.getMonth() + 1}-${
        date.getDate() - 1
    }`
    const res = await fetch(
        `https://api.covid19api.com/country/${country}/status/${status}?from=${yesterday}T00:00:00Z&to=${today}T00:00:00Z`
    )

    return await res.json()
}
