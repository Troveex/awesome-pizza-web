import { Divider, Grid, Typography } from "@mui/material";
import { OrderDto } from "../../api/src/generated";
import StatusOrderEnum from "../../constants/status-order.enum";
import PizzaChefOrderEmpty from "./components/pizza-chef-order-empty";
import PizzaChefOrderComponent from "./components/pizza-chef-order.component";
import usePizzaChefHook from "./pizza-chef.hook";



const PizzaChefPage: React.FC = () => {

    const { getSearchOrderResponse, startOrder, deletetOrder, endOrder, orderBooked, orderCompleted, orderDeletd, orderInProgress } = usePizzaChefHook();

    return (
        <Grid marginX={2}>
            <Grid marginY={2}>
                <Typography gutterBottom variant="h5" component="div">
                    Order in progress
                </Typography>
                {orderInProgress ?
                    getSearchOrderResponse?.response?.filter((item => !item.deleted && item.status === StatusOrderEnum.IN_PROGRESS)).map((item: OrderDto, idx: number) => (
                        <PizzaChefOrderComponent key={idx} order={item} endOrder={endOrder} deleteOrder={deletetOrder} />
                    ))
                    :
                    <PizzaChefOrderEmpty />
                }
            </Grid>
            <Divider />
            <Grid marginY={2}>
                <Typography gutterBottom variant="h5" component="div">
                    Order booked
                </Typography>
                {orderBooked ?
                    getSearchOrderResponse?.response?.filter((item => !item.deleted && item.status === StatusOrderEnum.BOOKED)).map((item: OrderDto, idx: number) => (
                        <PizzaChefOrderComponent key={idx} order={item} startOrder={startOrder} deleteOrder={deletetOrder} orderInProgress={orderInProgress} />
                    )) :
                    <PizzaChefOrderEmpty />
                }
            </Grid>
            <Divider />
            <Grid marginY={2}>
                <Typography gutterBottom variant="h5" component="div">
                    Order completed
                </Typography>
                {orderCompleted ?
                    getSearchOrderResponse?.response?.filter((item => !item.deleted && item.status === StatusOrderEnum.COMPLETED)).map((item: OrderDto, idx: number) => (
                        <PizzaChefOrderComponent key={idx} order={item} />
                    ))
                    :
                    <PizzaChefOrderEmpty />
                }
            </Grid>
            <Divider />
            <Grid marginY={2}>
                <Typography gutterBottom variant="h5" component="div">
                    Order deleted
                </Typography>
                {orderDeletd ?
                    getSearchOrderResponse?.response?.filter((item => item.deleted && item.status === StatusOrderEnum.DELETED)).map((item: OrderDto, idx: number) => (
                        <PizzaChefOrderComponent key={idx} order={item} />
                    ))
                    :
                    <PizzaChefOrderEmpty />
                }
            </Grid>
            <Divider />
        </Grid>
    );
};
export default PizzaChefPage;
