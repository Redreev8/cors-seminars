import classNames from 'classnames'
import { forwardRef, InputHTMLAttributes } from 'react'

const Input = forwardRef<
    HTMLInputElement,
    InputHTMLAttributes<HTMLInputElement>
>(({ className, disabled, ...props }, ref) => {
    const cl = classNames(
        className,
        'text-obsidian border border-dune p-4',
        'py-2 px-4 text-base',
        'transition-[border-radius] duration-300',
        'placeholder:text-obsidian-opacity placeholder:italic',
        {
            'opacity-20': disabled,
            'opacity-100 rounded-none hover:rounded-[50px] focus:outline-none focus:rounded-[50px] focus:border-obsidian':
                !disabled,
        },
    )

    return <input className={cl} ref={ref} {...props} />
})

export default Input
