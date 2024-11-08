import { Link } from "react-router-dom";

const STYLES = ['button--text', 'button--bub']
const SIZES = ['button--small', 'button--med', 'button--large']

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonStyle : SIZES[1];

    return (
        <button className={`button ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}>

        </button>
    )
}