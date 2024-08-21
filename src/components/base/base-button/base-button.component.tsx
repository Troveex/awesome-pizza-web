import Button from "@mui/material/Button";
import { IProps } from "./base-button.model";


const BaseButton: React.FC<IProps> = (props: IProps) => {

    const { label, onClick, variant, type, disabled } = props;
    return (
        <Button onClick={onClick} color={type} disabled={disabled} variant={variant}>{label}</Button>
    );
};
export default BaseButton;
