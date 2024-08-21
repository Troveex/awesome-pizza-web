import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { IProps } from "./base-label-value.model";



const BaseLabelValue: React.FC<IProps> = (props: IProps): React.ReactElement => {

    const { label, value, bold = true, inline } = props;

    return (
        <Grid container={inline} spacing={1}>
            <Grid item>
                <Typography
                    fontWeight={bold ? "bold" : undefined}
                >
                    {label}:
                </Typography>
            </Grid>
            <Grid item>
                <Typography
                >
                    {value}
                </Typography>
            </Grid>
        </Grid>
    );
};
export default BaseLabelValue;
