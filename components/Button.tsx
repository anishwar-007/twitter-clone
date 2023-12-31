interface ButtonProps {
    label: string,
    onClick?: () => void,
    secondary?: boolean,
    fullWidth?: boolean,
    large?: boolean,
    disabled?: boolean,
    outline?: boolean,
}
const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    secondary,
    fullWidth,
    large,
    disabled,
    outline,
}) => {
    return ( 
        <button
        disabled={disabled}
        onClick={onClick}
        className={`
        disabled:opacity-80
        disabled:cursor-not-allowed
        rounded-full
        font-semibold
        hover:bg-opacity-80
        transition
        border-2
        ${fullWidth ? 'w-full' : 'w.fit'}
        ${secondary ? 'bg-white' : 'bg-sky-500'}
        ${secondary ? 'text-black' : 'text-white'}
        ${secondary ? 'border-black' : 'border-sky-500'}
        ${large ? 'text-xl' : 'text-md'}
        ${large ? 'px-5' : 'px-4'}
        ${large ? 'py-3' : 'py-2'}
        ${outline ? 'bg-transparent' : ''}
        ${outline ? 'border-white' : ''}
        ${outline ? 'text-white' : ''}
        `}
        >
            {label}
        </button>
     );
}
 
export default Button;