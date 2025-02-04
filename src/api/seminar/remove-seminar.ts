import { Seminar, urlSeminars } from './info'

const removeSeminar = async (
    id: number,
    config: Omit<RequestInit, 'method'> = {},
): Promise<Seminar | string> => {
    const res = await fetch(urlSeminars + `/${id}`, {
        method: 'DELETE',
        ...config,
    })
    if (!res.ok) return res.statusText
    return await res.json()
}

export default removeSeminar
