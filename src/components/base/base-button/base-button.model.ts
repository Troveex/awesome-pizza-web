type BaseButtonProps = {
    readonly label?: string;
    readonly onClick?: () => void;
    readonly variant?: "text" | "contained" | "outlined";
    readonly type?: "error" | "inherit" | "primary" | "secondary" | "success" | "info" | "warning";
    readonly disabled?: boolean;
};

export type IProps = BaseButtonProps; 
