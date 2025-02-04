import classNames from 'classnames'
import { AreaHTMLAttributes, forwardRef } from 'react'

const Text = forwardRef<
    HTMLParagraphElement,
    AreaHTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
    const cl = classNames(className, 'text-base')

    return (
        <p className={cl} {...props} ref={ref}>
            {children}
        </p>
    )
})

export default Text
