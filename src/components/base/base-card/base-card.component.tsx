import { Button, CardActions, CardContent, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import IProps from "./base-card.model";



const BaseCard: React.FC<IProps> = (props: IProps): React.ReactElement => {

    const { title, subTitle, urlImg, cardAction } = props;

    return (
        <Card sx={{ maxWidth: 345 }}>
            {urlImg && (<CardMedia
                component="img"
                height="140"
                image={urlImg}
            />
            )}
            <CardContent>
                {title && (
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                )}
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
