import {FC} from "react";
import clsx from "clsx";
import styles from './button.module.css'
import {SvgIconTypeMap} from "@mui/material";
import {OverridableComponent} from "@mui/material/OverridableComponent";

interface IButton {
    children: string,
    Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string; }
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

