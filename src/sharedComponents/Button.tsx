
import { ButtonProps } from '../../type'

const Button = ({children, className}:ButtonProps) => {
  return (
    <button className={`${className} outline-none`}>
        {children}
    </button>
  )
}

export default Button
