import classNames from 'classnames'
import { FC } from 'react'

interface LoadingProps {
    isOpen: boolean
    className?: string
}

const Loading: FC<LoadingProps> = ({ className, isOpen }) => {
    const cl = classNames(
        className,
        'bg-lenen flex items-center justify-center transition-[opacity, visibility] duration-300',
        {
            'opacity-100 visible': isOpen,
            'opacity-0 invisible': !isOpen,
        },
    )
    return (
        <div className={cl}>
            <div className="text-dune bg-dune size-[48px] animate-ping text-[2px]">
                loading
            </div>
        </div>
    )
}

export default Loading
