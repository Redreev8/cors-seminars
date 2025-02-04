import classNames from 'classnames'
import { AreaHTMLAttributes, forwardRef } from 'react'

const Container = forwardRef<
    HTMLDivElement,
    AreaHTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
    const cl = classNames(className, 'max-w-[1600px] mx-auto py-4 px-10')
    return (
        <div className={cl} {...props} ref={ref}>
            {children}
        </div>
    )
})

export default Container
