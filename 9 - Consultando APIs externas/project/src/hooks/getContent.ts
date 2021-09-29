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
