import { Grid, Typography } from "@mui/material";
import { useRouteError } from "react-router-dom";


const ErrorPage: React.FC = () => {

    const error = useRouteError();
    console.log(error);

    return (
        <Grid container justifyContent={"center"} alignItems={"center"} height={"100vh"}>
            <Grid item>
                <Grid textAlign={"center"}>
                    <Typography variant="h3" gutterBottom>
                        Oops!
                    </Typography>
                </Grid>
                <Grid textAlign={"center"}>
                    <Typography variant="h6" gutterBottom>
                        Sorry, an unexpected error has occurred.
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};
export default ErrorPage;
