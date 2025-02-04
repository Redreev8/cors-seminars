import { forwardRef, MouseEvent, ReactNode } from 'react'
import Modal, { ModalProps } from '../ui/modal'
import Btn from '../ui/btn'

interface СonfirmationModalProps extends ModalProps {
    onYes: () => void
    onNo: () => void
    children?: ReactNode
    disabled?: boolean
}

const СonfirmationModal = forwardRef<HTMLDivElement, СonfirmationModalProps>(
    ({ onYes, onNo, disabled, children, ...props }, ref) => {
        const handelClick = (e: MouseEvent<HTMLDivElement>) => {
            const el = e.target! as HTMLDivElement
            if (!('modal' in el.dataset) && !disabled) return
            onNo()
        }
        return (
            <Modal
                onClick={handelClick}
                classNameCard="flex gap-4"
                {...props}
                ref={ref}
            >
                <Btn
                    disabled={disabled}
                    isOutline={false}
                    isHarbor
                    onClick={!disabled ? onYes : () => {}}
                >
                    Да
                </Btn>
                <Btn
                    disabled={disabled}
                    isOutline={false}
                    isDarkTan
                    onClick={!disabled ? onNo : () => {}}
                >
                    нет
                </Btn>
                {children}
            </Modal>
        )
    },
)

export default СonfirmationModal
