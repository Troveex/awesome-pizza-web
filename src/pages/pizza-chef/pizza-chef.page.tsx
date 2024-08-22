import { Divider, Grid } from "@mui/material";
import BaseCard from "../../components/base/base-card/base-card.component";
import PizzaChefOrderBooked from "./components/pizza-chef-order-booked.component";
import PizzaChefOrderCompleted from "./components/pizza-chef-order-completed.component";
import PizzaChefOrderInProgress from "./components/pizza-chef-order-in-progress.component";
import usePizzaChefHook from "./pizza-chef.hook";



const PizzaChefPage: React.FC = () => {

    const { getSearchOrderResponse, lookupStatusResponse, startOrder, deletetOrder, endOrder, orderBooked, orderCompleted, orderInProgress, redirectToHomePage } = usePizzaChefHook();

    return (
        <BaseCard title="Welcome to pizza chef area"
            subTitle="See the completed, booked, deleted and in progress orders"
            headerAction={{
                label: "Go to homepage",
                type: "primary",
                variant: "contained",
                onClick: redirectToHomePage
            }}>
            <Grid marginX={2}>
                <PizzaChefOrderInProgress deleteOrder={deletetOrder} endOrder={endOrder} orderInProgress={orderInProgress} getSearchOrderResponse={getSearchOrderResponse} lookupStatusResponse={lookupStatusResponse} />
                <Divider />
                <PizzaChefOrderBooked deleteOrder={deletetOrder} orderBooked={orderBooked} getSearchOrderResponse={getSearchOrderResponse} orderInProgress={orderInProgress} startOrder={startOrder} lookupStatusResponse={lookupStatusResponse} />
                <Divider />
                <PizzaChefOrderCompleted orderCompleted={orderCompleted} getSearchOrderResponse={getSearchOrderResponse} lookupStatusResponse={lookupStatusResponse} />
                <Divider />
                {/* <Grid marginY={2}>
                    <Typography gutterBottom variant="h5" component="div">
                        Order deleted
                    </Typography>
                    {orderDeletd ?
                        getSearchOrderResponse?.response?.filter((item => item.status === StatusOrderEnum.DELETED)).map((item: OrderDto, idx: number) => (
                            <PizzaChefOrderComponent key={idx} order={item} />
                        ))
                        :
                        <PizzaChefOrderEmpty />
                    }
                </Grid> */}
                <Divider />
            </Grid>
        </BaseCard>
    );
};
export default PizzaChefPage;
