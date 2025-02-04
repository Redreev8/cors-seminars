import { Dispatch, SetStateAction, useState } from 'react'
import { Seminar } from '../../api/seminar/info'
import removeSeminar from '../../api/seminar/remove-seminar'

const useRemoveSeminar = (
    setListSeminar: Dispatch<SetStateAction<Seminar[]>>,
) => {
    const [idDelSeminar, setIdDelSeminar] = useState<
        Seminar['id'] | undefined
    >()
    const [errorRemove, setErrorRemove] = useState<string>('')
    const [loudingRemove, setLoudingRemove] = useState<boolean>(false)

    const handelYes = () => {
        setLoudingRemove(() => true)
        removeSeminar(idDelSeminar!).then((res) => {
            setTimeout(() => {
                if (typeof res === 'object') {
                    setListSeminar((prev) =>
                        prev.filter((el) => el.id !== res.id),
                    )
                    setIdDelSeminar(undefined)
                } else {
                    setErrorRemove(res)
                }
                setLoudingRemove(false)
            }, 3000)
        })
    }
    const handelNo = () => {
        setIdDelSeminar(undefined)
        setErrorRemove('')
    }
    const handelClickDeleteSeminar = (id: Seminar['id']) => {
        setIdDelSeminar(() => id)
        setErrorRemove('')
    }
    return {
        errorRemove,
        loudingRemove,
        idDelSeminar,
        handelYes,
        handelNo,
        handelClickDeleteSeminar,
    }
}

export default useRemoveSeminar
