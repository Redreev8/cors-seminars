import { FC } from 'react'
import Card from '../../ui/card'
import { Seminar } from '../../api/seminar/info'
import Title from '../../ui/title'
import Text from '../../ui/text'
import classNames from 'classnames'
import Btn from '../../ui/btn'

export interface CardSeminarProps {
    className?: string
    onDel: (id: Seminar['id']) => void
    onChange: (seminar: Seminar) => void
}

const CardSeminar: FC<CardSeminarProps & Seminar> = ({
    title,
    description,
    photo,
    time,
    date,
    className,
    id,
    onChange,
    onDel,
}) => {
    const seminar = {
        title,
        description,
        photo,
        time,
        date,
        id,
    }
    const cl = classNames(className, 'flex flex-col gap-4 h-full')
    return (
        <Card className={cl}>
            <img
                className="h-[160px] w-full shrink rounded-lg object-cover"
                src={photo}
                alt={description}
            />
            <div className="inline-flex flex-col justify-between gap-3">
                <div className="inline-flex flex-col justify-between gap-1">
                    <Title size="h3">{title}</Title>
                    <Text>{description}</Text>
                </div>
            </div>
            <time className="text-dark-tan mt-auto flex gap-2 font-bold">
                <span>{date}</span>
                <span>{time}</span>
            </time>
            <div className="flex gap-2">
                <Btn onClick={() => onChange(seminar)} isDarkTan>
                    Изменить
                </Btn>
                <Btn onClick={() => onDel(+id)} isDarkTan>
                    Удалить
                </Btn>
            </div>
        </Card>
    )
}

export default CardSeminar
