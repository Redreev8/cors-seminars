import classNames from 'classnames'
import { AreaHTMLAttributes, createElement, forwardRef } from 'react'

interface TitleProps extends AreaHTMLAttributes<HTMLAnchorElement> {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const Title = forwardRef<HTMLAnchorElement, TitleProps>(
    ({ className, children, as = 'h2', size = 'h2', ...props }, ref) => {
        // я не стал доделовать просто сделал 2 заголовка нужные в проекте
        const cl = classNames(className, {
            'text-4xl': size === 'h1',
            'text-3xl': size === 'h2',
            'text-xl': size === 'h3',
        })

        return createElement(
            as,
            {
                className: cl,
                ref,
                ...props,
            },
            children,
        )
    },
)

export default Title
