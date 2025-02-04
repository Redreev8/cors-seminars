import { FC } from 'react'
import CardSeminar from './card-seminar'
import classNames from 'classnames'
import { Seminar } from '../../api/seminar/info'

interface ListSeminarProps {
    listSeminar: Seminar[]
    onDel: (id: Seminar['id']) => void
}

const ListSeminar: FC<ListSeminarProps> = ({ onDel, listSeminar }) => {
    const clUl = classNames(
        'w-full',
        'md:w-[calc((100%-(var(--spacing)*4))/2)]',
        'xl:w-[calc((100%-(var(--spacing)*8))/3)]',
    )
    return (
        <ul className="flex flex-wrap gap-4">
            {listSeminar.map((seminar) => (
                <li className={clUl} key={seminar.id}>
                    <CardSeminar
                        onDel={onDel}
                        className="w-full"
                        {...seminar}
                    />
                </li>
            ))}
        </ul>
    )
}

export default ListSeminar
