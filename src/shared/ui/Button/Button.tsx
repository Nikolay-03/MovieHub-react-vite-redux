import {FC} from "react";
import clsx from "clsx";
import styles from './button.module.css'
interface IButton {
    children: string,
    Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
    className?: string,
    onClick?: () => void,
    disabled?: boolean
}

export const Button: FC<IButton> = (props) => {
    const {
        children,
        className,
        Icon,
        disabled,
        onClick
    } = props
    return (
        <button
            onClick={onClick}
            className={clsx(
                styles.button__wrapper,
                disabled && styles.button__disabled,
                className
            )}
        >
            {Icon && <Icon/>}
            {children}
        </button>
    );
};

