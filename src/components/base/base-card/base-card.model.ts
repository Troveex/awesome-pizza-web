

type BaseProps = {
    readonly title?: string;
    readonly subTitle?: string;
    readonly urlImg?: string;
    readonly cardAction?: CardActionBaseProps;
};

type CardActionBaseProps = {
    readonly name: string;
    readonly onClick?: () => void;
    readonly color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning";
    readonly size?: "small" | "medium" | "large";
};

type IProps = BaseProps & React.PropsWithChildren;

export default IProps;
