import { FC, FormHTMLAttributes } from 'react'
import { Seminar } from '../../../api/seminar/info'
import Input from '../../../ui/input'
import Label from '../../../ui/label'
import useFormChangeSeminar from './useFormChangeSeminar'
import Error from '../../../ui/errors'

export interface FormChangeSeminarProps
    extends Omit<FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> {
    seminar?: Seminar
    disabled?: boolean
    onSubmit: (seminar: Seminar) => void
}

const FormChangeSeminar: FC<FormChangeSeminarProps> = ({
    seminar,
    disabled,
    onSubmit,
    ...props
}) => {
    const { registers, errors, handelErrorImg, refImg, handleSubmit } =
        useFormChangeSeminar({
            seminar,
            onSubmit,
        })
    return (
        <form
            onSubmit={handleSubmit}
            className="flex w-full flex-col gap-4"
            {...props}
        >
            <div className="flex flex-col gap-4">
                <Label>
                    <span className="flex items-center gap-2">
                        <span>Фото url</span>
                        <img
                            onError={handelErrorImg}
                            ref={refImg}
                            src={seminar?.photo}
                            className="border-dune size-[40px] rounded-full border object-cover"
                        />
                    </span>
                    <Input
                        className="w-full"
                        disabled={disabled}
                        {...registers.photo()}
                        type="url"
                    />
                    <Error error={errors.photo} />
                </Label>
                <Label>
                    <span>Заголовок</span>
                    <Input
                        className="w-full"
                        disabled={disabled}
                        {...registers.title()}
                        type="text"
                    />
                    <Error error={errors.title} />
                </Label>
                <Label>
                    <span>Описание</span>
                    <Input
                        className="w-full"
                        disabled={disabled}
                        {...registers.description()}
                        type="text"
                    />
                    <Error error={errors.description} />
                </Label>
            </div>
            <div className="flex gap-4">
                <Label className="w-full">
                    <span>Дата</span>
                    <Input
                        className="w-full"
                        disabled={disabled}
                        {...registers.date()}
                        type="date"
                    />
                    <Error error={errors.date} />
                </Label>
                <Label className="w-full">
                    <span>Время</span>
                    <Input
                        className="w-full"
                        disabled={disabled}
                        {...registers.time()}
                        type="time"
                    />
                    <Error error={errors.time} />
                </Label>
            </div>
        </form>
    )
}

export default FormChangeSeminar
