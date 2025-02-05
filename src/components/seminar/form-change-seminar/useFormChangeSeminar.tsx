import { useRef } from 'react'
import { Seminar } from '../../../api/seminar/info'
import formatDate from '../../../helper/format-date'
import formatDateInput from '../../../helper/format-date-input'
import { FormChangeSeminarProps } from './form-change-seminar'
import { useForm } from 'react-hook-form'

const useFormChangeSeminar = ({
    seminar,
    onSubmit,
}: Pick<FormChangeSeminarProps, 'seminar' | 'onSubmit'>) => {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<Omit<Seminar, 'id'>>({
        defaultValues: {
            photo: seminar ? seminar.photo : '',
            title: seminar ? seminar.title : '',
            description: seminar ? seminar.description : '',
            date: seminar ? formatDateInput(seminar.date) : '',
            time: seminar ? seminar.time : '',
        },
    })
    const refImg = useRef<HTMLImageElement>(null)
    const handelErrorImg = () => {
        setError('photo', {
            message: 'фото не загрузилось',
        })
    }
    const registers = {
        photo: () =>
            register('photo', {
                onBlur: (e: Event) => {
                    const inp = e.target as HTMLInputElement
                    if (!refImg.current!.src) return
                    refImg.current!.src = inp.value
                },
            }),
        title: () =>
            register('title', {
                required: 'Поле обезательно к заполнению',
                minLength: {
                    value: 5,
                    message: 'Поле не может быть меньше 5',
                },
                maxLength: {
                    value: 50,
                    message: 'Поле не может быть длинее 50',
                },
            }),
        description: () =>
            register('description', {
                required: 'Поле обезательно к заполнению',
                minLength: {
                    value: 10,
                    message: 'Поле не может быть меньше 10',
                },
                maxLength: {
                    value: 100,
                    message: 'Поле не может быть длинее 100',
                },
            }),
        date: () =>
            register('date', {
                pattern: {
                    value: /\d\d\d\d-\d\d-\d\d/,
                    message:
                        'ведите по шаблону /\\d\\d\\d\\d-\\d\\d-\\d\\d/ где \\d число',
                },
            }),
        time: () =>
            register('time', {
                pattern: {
                    value: /\d\d:\d\d/,
                    message: 'ведите по шаблону /\\d\\d:\\d\\d// где \\d число',
                },
            }),
    }

    return {
        registers,
        errors,
        refImg,
        handelErrorImg,
        handleSubmit: handleSubmit((data) =>
            onSubmit({ ...seminar!, ...data, date: formatDate(data.date) }),
        ),
    }
}

export default useFormChangeSeminar
