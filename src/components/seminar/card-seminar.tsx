import { FC } from 'react'
import Card from '../../ui/card'
import { Seminar } from '../../api/seminar/info'
import Title from '../../ui/title'
import Text from '../../ui/text'
import classNames from 'classnames'
import Btn from '../../ui/btn'

interface CardSeminarProps extends Seminar {
    className?: string
    onDel: (id: Seminar['id']) => void
}

const CardSeminar: FC<CardSeminarProps> = ({
    title,
    description,
    photo,
    time,
    date,
    className,
    id,
    onDel,
}) => {
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
                <Btn onClick={() => onDel(+id)} isDarkTan>
                    Удалить
                </Btn>
            </div>
        </Card>
    )
}

export default CardSeminar
