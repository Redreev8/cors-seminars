import { forwardRef, useId } from 'react'
import { Seminar } from '../../api/seminar/info'
import Modal, { ModalProps } from '../../ui/modal'
import Btn from '../../ui/btn'
import FormChangeSeminar, {
    FormChangeSeminarProps,
} from './form-change-seminar/form-change-seminar'

interface ModalChangeSeminarProps
    extends Omit<ModalProps, 'isOpen' | 'id' | 'title'>,
        Pick<FormChangeSeminarProps, 'seminar' | 'disabled'> {
    onCahge: (data: Seminar) => void
    onClose: () => void
}

const ModalChangeSeminar = forwardRef<HTMLDivElement, ModalChangeSeminarProps>(
    ({ children, seminar, onCahge, onClose, disabled, ...props }, ref) => {
        const id = useId()
        return (
            <Modal
                isOpen={!!seminar}
                classNameCard="max-w-[600px] w-full flex w-full flex-col gap-6"
                ref={ref}
                {...props}
            >
                <FormChangeSeminar
                    id={id}
                    seminar={seminar}
                    disabled={disabled}
                    onSubmit={onCahge}
                />
                <div className="flex justify-end gap-4">
                    {children}
                    <Btn
                        isOutline={false}
                        isHarbor
                        disabled={disabled}
                        type="submit"
                        form={id}
                    >
                        Сохранить
                    </Btn>
                    <Btn
                        onClick={onClose}
                        disabled={disabled}
                        isOutline={false}
                        isDarkTan
                    >
                        Отмена
                    </Btn>
                </div>
            </Modal>
        )
    },
)

export default ModalChangeSeminar
