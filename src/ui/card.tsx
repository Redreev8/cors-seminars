import classNames from 'classnames'
import { AreaHTMLAttributes, forwardRef } from 'react'

const Card = forwardRef<HTMLDivElement, AreaHTMLAttributes<HTMLDivElement>>(
    ({ className, children, ...props }, ref) => {
        const cl = classNames(className, 'border border-dune p-4')

        return (
            <div className={cl} {...props} ref={ref}>
                {children}
            </div>
        )
    },
)

export default Card
