import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { OrderDto, OrderSearchResponse } from "../../../api/src/generated";
import StatusOrderEnum from "../../../constants/status-order.enum";
import PizzaChefOrderEmpty from "./pizza-chef-order-empty";
import PizzaChefOrderComponent from "./pizza-chef-order.component";

interface IProps {
    readonly orderCompleted: boolean;
    readonly getSearchOrderResponse: OrderSearchResponse | undefined;
}

const PizzaChefOrderCompleted: React.FC<IProps> = (props: IProps) => {

    const { orderCompleted, getSearchOrderResponse } = props;

    return (
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
    );
};
export default PizzaChefOrderCompleted;
