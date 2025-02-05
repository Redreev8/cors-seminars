import { Dispatch, SetStateAction, useState } from 'react'
import { Seminar } from '../../api/seminar/info'
import putSeminar from '../../api/seminar/put-seminar'

const useChangeSeminar = (
    setListSeminar: Dispatch<SetStateAction<Seminar[]>>,
) => {
    const [changemySeminar, setСhangemySeminar] = useState<Seminar | undefined>(
        undefined,
    )
    const [errorChange, setErrorChange] = useState<string>('')
    const [loudingChange, setLoudingChange] = useState<boolean>(false)

    const changeSeminar = (data: Seminar) => {
        setLoudingChange(true)
        // timeout нужен что бы показать лодудинг компонент
        setTimeout(() => {
            putSeminar(data).then((res) => {
                if (typeof res === 'object') {
                    setListSeminar((prev) =>
                        prev.map((el) => {
                            if (el.id === res.id) el = data
                            return el
                        }),
                    )
                    setСhangemySeminar(undefined)
                    setErrorChange('')
                } else {
                    setErrorChange(res)
                }
                setLoudingChange(false)
            })
        }, 3000)
    }
    const handelChangeSeminar = (seminar: Seminar) => {
        setСhangemySeminar(seminar)
    }
    const resetChangeSeminar = () => {
        setErrorChange('')
        setСhangemySeminar(undefined)
    }
    return {
        changemySeminar,
        errorChange,
        loudingChange,
        changeSeminar,
        handelChangeSeminar,
        resetChangeSeminar,
    }
}

export default useChangeSeminar
