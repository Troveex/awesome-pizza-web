import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";
import BaseCard from "../../components/base/base-card/base-card.component";
import useNavigationHook from "../../hooks/shared/navigation.hook";


const HomePage: React.FC = () => {

    const { redirectTo } = useNavigationHook();

    return (
        <>
            <Grid container justifyContent={"center"} alignItems={"center"} height={"95vh"}>
                <Grid item>
                    <Grid marginBottom={2}>
                        <BaseCard title="Pizza chef"
                            subTitle="Click here to open the pizza chef area"
                            urlImg={"https://img.freepik.com/vettori-premium/pizzaiolo_26838-73.jpg?w=1060"}
                            cardAction={{
                                name: "Go to pizza chef area",
                                size: "large",
                                onClick: () => redirectTo("/pizza-chef")
                            }}
                        />
                    </Grid>
                    <Grid>
                        <BaseCard title="Customer"
                            subTitle="Click here to open the customers area"
                            urlImg={"https://cdn.vectorstock.com/i/1000x1000/07/96/chef-giving-pizza-to-customer-vector-25020796.webp"}
                            cardAction={{
                                name: "Go to customers area",
                                size: "large",
                                onClick: () => redirectTo("/customers")
                            }}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid>
                <Box sx={{ backgroundColor: "lightblue" }} height={"5vh"}>
                    <Grid container justifyContent={"center"}>
                        <Grid marginTop={2}>
                            Powered by Awesome Pizza web 2024©
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </>
    );
};
export default HomePage;
