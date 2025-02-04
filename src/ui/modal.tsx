import classNames from 'classnames'
import {
    AreaHTMLAttributes,
    forwardRef,
    TransitionEvent,
    useEffect,
    useState,
} from 'react'

export interface ModalProps extends AreaHTMLAttributes<HTMLDivElement> {
    isOpen: boolean
    classNameCard?: string
}

const Modal = forwardRef<HTMLDivElement, ModalProps>(
    ({ isOpen, className, classNameCard, children, ...props }, ref) => {
        const [isHidden, setIsHiden] = useState<boolean>(false)
        const [isRender, setIsRender] = useState<boolean>(false)
        const cl = classNames(
            className,
            'flex items-center justify-center',
            'bg-obsidian-opacity fixed top-0 left-0',
            'h-screen w-full transition-[opacity, visibility] duration-300',
            {
                'opacity-100 visible': isHidden,
                'opacity-0 invisible': !isHidden,
            },
        )
        const clCard = classNames(classNameCard, 'bg-lenen rounded-lg p-4')
        const hadnelTransitionEnd = (e: TransitionEvent<HTMLDivElement>) => {
            const el = e.target! as HTMLDivElement
            if (!('modal' in el.dataset)) return
            if (isOpen) return
            setIsRender(false)
        }
        useEffect(() => {
            if (isOpen) {
                setIsRender(() => true)
            }

            setIsHiden(() => false)
        }, [isOpen])
        useEffect(() => {
            if (isRender)
                setTimeout(() => {
                    setIsHiden(true)
                }, 100)
        }, [isRender])

        return (
            <>
                {isRender && (
                    <div
                        data-modal
                        className={cl}
                        {...props}
                        ref={ref}
                        onTransitionEnd={hadnelTransitionEnd}
                    >
                        <div className={clCard}>{children}</div>
                    </div>
                )}
            </>
        )
    },
)

export default Modal
