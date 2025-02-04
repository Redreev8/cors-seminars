import { useEffect, useState } from 'react'
import { Seminar } from '../../api/seminar/info'
import getSeminars from '../../api/seminar/get-seminars'

const useGetListSeminar = () => {
    const [listSeminar, setListSeminar] = useState<Seminar[]>([])
    const [error, setError] = useState<string>('')
    useEffect(() => {
        // timeout нужен что бы показать лодудинг компонент
        setTimeout(() => {
            getSeminars().then((res) => {
                if (typeof res === 'string') {
                    setError(res)
                    return
                }
                setListSeminar(res)
            })
        }, 0)
    }, [])

    return { listSeminar, error, setListSeminar }
}

export default useGetListSeminar
