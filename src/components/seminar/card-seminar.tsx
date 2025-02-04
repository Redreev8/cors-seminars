import { FC } from 'react'
import Card from '../../ui/card'
import { Seminar } from '../../api/seminar/info'
import Title from '../../ui/title'
import Text from '../../ui/text'
import classNames from 'classnames'

interface CardSeminarProps extends Seminar {
    className?: string
}

const CardSeminar: FC<CardSeminarProps> = (props) => {
    const { title, description, photo, time, date, className } = props
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
        </Card>
    )
}

export default CardSeminar
