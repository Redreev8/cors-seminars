import classNames from 'classnames'
import { ButtonHTMLAttributes, forwardRef } from 'react'

interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    isOutline?: boolean
    isHarbor?: boolean
    isDarkTan?: boolean
}

const Btn = forwardRef<HTMLButtonElement, BtnProps>(
    (
        {
            className,
            isDarkTan,
            isHarbor,
            isOutline = true,
            children,
            disabled,
            ...props
        },
        ref,
    ) => {
        const cl = classNames(
            className,
            'py-2 px-4 text-base',
            'transition-[opacity, border-radius] duration-300',
            {
                'border-2 text-obsidian': isOutline,
                'border-dune': isOutline && !isHarbor && !isDarkTan,
                'border-harbor': isOutline && isHarbor,
                'border-dark': isOutline && isDarkTan,
                'bg-harbor text-lenen': !isOutline && isHarbor,
                'bg-dark-tan text-lenen': !isOutline && isDarkTan,
                'opacity-20': disabled,
                'opacity-100 rounded-none hover:rounded-[50px] focus:opacity-60':
                    !disabled,
            },
        )
        return (
            <button className={cl} {...props} ref={ref}>
                {children}
            </button>
        )
    },
)

export default Btn
