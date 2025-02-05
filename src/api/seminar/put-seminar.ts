import { Seminar, urlSeminars } from './info'

const putSeminar = async (
    data: Seminar,
    config: Omit<RequestInit, 'method'> = {},
): Promise<Seminar | string> => {
    const res = await fetch(urlSeminars + `/${data.id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        ...config,
    })
    if (!res.ok) return res.statusText
    return await res.json()
}

export default putSeminar
