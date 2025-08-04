import React from "react";

interface ButtonProps {
        text: string;
        styling?: string;
}
function Button({ text, styling }: ButtonProps) {
        return <div className={styling}>{text}</div>;
}

export default Button;
