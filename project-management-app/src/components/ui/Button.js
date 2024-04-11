const Button = ({children, ...props}) => {
    return (
        <button type="text" {...props}>{children}</button>
    )
}

export default Button;