import { Seminar, urlSeminars } from './info'

const getSeminars = async (
    config: Omit<RequestInit, 'method'> = {},
): Promise<Seminar[] | string> => {
    const res = await fetch(urlSeminars, {
        method: 'GET',
        ...config,
    })
    if (!res.ok) return res.statusText
    return await res.json()
}

export default getSeminars
