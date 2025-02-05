import { useEffect, useState } from 'react'
import { Seminar } from '../../api/seminar/info'
import getSeminars from '../../api/seminar/get-seminars'

const useGetListSeminar = () => {
    const [listSeminar, setListSeminar] = useState<Seminar[]>([])
    const [error, setError] = useState<string>('')
    const [loudingGetSeminar, setLoudingGetSeminar] = useState<boolean>(true)
    useEffect(() => {
        setLoudingGetSeminar(true)
        // timeout нужен что бы показать лодудинг компонент
        setTimeout(() => {
            getSeminars().then((res) => {
                setLoudingGetSeminar(false)
                if (typeof res === 'string') {
                    setError(res)
                    return
                }
                setListSeminar(res)
            })
        }, 3000)
    }, [])

    return { listSeminar, loudingGetSeminar, error, setListSeminar }
}

export default useGetListSeminar
