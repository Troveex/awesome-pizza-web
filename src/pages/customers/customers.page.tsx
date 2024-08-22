import Grid from "@mui/material/Grid";
import React from "react";
import { CustomerDto } from "../../api/src/generated";
import BaseButton from "../../components/base/base-button/base-button.component";
import BaseCard from "../../components/base/base-card/base-card.component";
import useCustomersHook from "./customers.hook";



const CustomerPage: React.FC = () => {

    const { redirectToHomePage, getSearchCustomerResponse, redirectToCustomerOrder } = useCustomersHook();

    return (
        <BaseCard title="Welcome to customers area"
            headerAction={{
                label: "Go to homepage",
                type: "primary",
                variant: "contained",
                onClick: redirectToHomePage
            }}>
            <Grid marginX={2}>
                {getSearchCustomerResponse?.customers?.map((item: CustomerDto, idx: number) => (
                    <Grid margin={1}>
                        <BaseCard title={item.name}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <BaseButton label="See list orders" variant="contained" type="info" onClick={() => redirectToCustomerOrder(item.name ?? "")} />
                                </Grid>
                                <Grid item>
                                    <BaseButton label="Book new order" variant="contained" type="primary" />
                                </Grid>
                            </Grid>
                        </BaseCard>
                    </Grid>
                ))}
            </Grid>
        </BaseCard>
    );
};
export default CustomerPage;
