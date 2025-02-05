import classNames from 'classnames'
import { AreaHTMLAttributes, forwardRef } from 'react'
import { FieldError } from 'react-hook-form'

export interface ErrorProps
    extends Omit<AreaHTMLAttributes<HTMLSpanElement>, 'children'> {
    error: FieldError | undefined
}

const Error = forwardRef<HTMLSpanElement, ErrorProps>(
    ({ className, error, ...props }, ref) => {
        const cl = classNames(
            className,
            'overflow-hidden text-base text-lenen bg-dark-tan',
            'grid transition-[grid-template-rows]  duration-300',
            {
                'grid-rows-[0fr]': !error?.message,
                'grid-rows-[1fr]': error?.message,
            },
        )
        return (
            <span className={cl} {...props} ref={ref}>
                <span className="min-h-0">
                    <span className="p-1">{error?.message}</span>
                </span>
            </span>
        )
    },
)

export default Error
