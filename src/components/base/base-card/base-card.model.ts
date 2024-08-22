

type BaseProps = {
    readonly title?: string;
    readonly subTitle?: string;
    readonly urlImg?: string;
    readonly cardAction?: CardActionBaseProps;
    readonly headerAction?: CardHeaderActionBaseProps;
};

type CardActionBaseProps = {
    readonly name: string;
    readonly onClick?: () => void;
    readonly color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning";
    readonly size?: "small" | "medium" | "large";
};

type CardHeaderActionBaseProps = {
    readonly label?: string;
    readonly onClick?: () => void;
    readonly variant?: "text" | "contained" | "outlined";
    readonly type?: "error" | "inherit" | "primary" | "secondary" | "success" | "info" | "warning";
    readonly disabled?: boolean;
};

type IProps = BaseProps & React.PropsWithChildren;

export default IProps;
