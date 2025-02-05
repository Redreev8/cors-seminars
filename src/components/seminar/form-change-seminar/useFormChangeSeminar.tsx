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
        formState: { errors },
    } = useForm<Omit<Seminar, 'id' | 'photo'>>({
        defaultValues: {
            title: seminar ? seminar.title : '',
            description: seminar ? seminar.description : '',
            date: seminar ? formatDateInput(seminar.date) : '',
            time: seminar ? seminar.time : '',
        },
    })

    const registers = {
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
                pattern: /\d\d\d\d-\d\d-\d\d/,
            }),
        time: () =>
            register('time', {
                pattern: /\d\d:\d\d/,
            }),
    }

    return {
        registers,
        errors,
        handleSubmit: handleSubmit((data) =>
            onSubmit({ ...seminar!, ...data, date: formatDate(data.date) }),
        ),
    }
}

export default useFormChangeSeminar
