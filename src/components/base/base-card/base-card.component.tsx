import { Button, CardActions, CardContent, Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import BaseButton from "../base-button/base-button.component";
import IProps from "./base-card.model";

const BaseCard: React.FC<IProps> = (props: IProps): React.ReactElement => {

    const { title, subTitle, urlImg, cardAction, headerAction } = props;

    return (
        <Card sx={{ maxWidth: 2345 }}>
            {urlImg && (<CardMedia
                component="img"
                height="140"
                image={urlImg}
            />
            )}
            <CardContent>
                <Grid container justifyContent={"space-between"}>
                    <Grid item>
                        {title && (
                            <Typography gutterBottom variant="h5" component="div">
                                {title}
                            </Typography>
                        )}
                    </Grid>
                    <Grid item>
                        {headerAction?.label && headerAction.onClick && (
                            <BaseButton label={headerAction?.label}
                                onClick={headerAction?.onClick}
                                disabled={headerAction?.disabled}
                                type={headerAction?.type}
                                variant={headerAction?.variant}
                            />
                        )}
                    </Grid>
                </Grid>

                {subTitle && (
                    <Typography variant="body2" color="text.secondary">
                        {subTitle}
                    </Typography>
                )}
            </CardContent>
            {props.children && (
                <CardContent>
                    {props.children}
                </CardContent>
            )}
            <CardActions>
                <Button size={cardAction?.size} color={cardAction?.color} onClick={cardAction?.onClick}>{cardAction?.name}</Button>
            </CardActions>
        </Card >
    );
};
export default BaseCard;
