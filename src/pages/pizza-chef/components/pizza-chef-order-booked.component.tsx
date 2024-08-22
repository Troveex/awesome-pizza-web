import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { GetStatusApiResponse, OrderDto, OrderSearchResponse } from "../../../api/src/generated";
import StatusOrderEnum from "../../../constants/status-order.enum";
import PizzaChefOrderEmpty from "./pizza-chef-order-empty";
import PizzaChefOrderComponent from "./pizza-chef-order.component";

interface IProps {
    readonly lookupStatusResponse: GetStatusApiResponse | undefined;
    readonly orderBooked: boolean;
    readonly orderInProgress: boolean;
    readonly getSearchOrderResponse: OrderSearchResponse | undefined;
    readonly startOrder: (code: string) => void;
    readonly deleteOrder: (code: string) => void;
}

const PizzaChefOrderBooked: React.FC<IProps> = (props: IProps) => {

    const { startOrder, deleteOrder, getSearchOrderResponse, orderBooked, orderInProgress, lookupStatusResponse } = props;

    return (
        <Grid marginY={2}>
            <Typography gutterBottom variant="h5" component="div">
                Order booked
            </Typography>
            {orderBooked ?
                getSearchOrderResponse?.response?.filter((item => !item.deleted && item.status === StatusOrderEnum.BOOKED)).map((item: OrderDto, idx: number) => (
                    <PizzaChefOrderComponent key={idx} order={item} lookupStatusResponse={lookupStatusResponse ?? []} startOrder={startOrder} deleteOrder={deleteOrder} orderInProgress={orderInProgress} />
                )) :
                <PizzaChefOrderEmpty />
            }
        </Grid>
    );
};
export default PizzaChefOrderBooked;
