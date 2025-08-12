
interface ButtonProps {
        text?: string;
    styling?: string;
    children?: React.ReactNode
}
function Button({ text, styling, children, }: ButtonProps) {
        return <button className={`cursor-pointer block ${styling}`}>{children || text}</button>;
}

export default Button;
