import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import { GetStatusApiResponse, OrderDto, OrderSearchResponse } from "../../../api/src/generated";
import StatusOrderEnum from "../../../constants/status-order.enum";
import PizzaChefOrderEmpty from "./pizza-chef-order-empty";
import PizzaChefOrderComponent from "./pizza-chef-order.component";

interface IProps {
    readonly lookupStatusResponse: GetStatusApiResponse | undefined;
    readonly getSearchOrderResponse: OrderSearchResponse | undefined;
    readonly orderInProgress: boolean;
    readonly endOrder: (code: string) => void;
    readonly deleteOrder: (code: string) => void;
}

const PizzaChefOrderInProgress: React.FC<IProps> = (props: IProps) => {

    const { orderInProgress, getSearchOrderResponse, deleteOrder, endOrder, lookupStatusResponse } = props;

    return (
        <Grid marginY={2}>
            <Typography gutterBottom variant="h5" component="div">
                Order in progress
            </Typography>
            {orderInProgress ?
                getSearchOrderResponse?.response?.filter((item => !item.deleted && item.status === StatusOrderEnum.IN_PROGRESS)).map((item: OrderDto, idx: number) => (
                    <PizzaChefOrderComponent key={idx} order={item} endOrder={endOrder} deleteOrder={deleteOrder} lookupStatusResponse={lookupStatusResponse ?? []} />
                ))
                :
                <PizzaChefOrderEmpty />
            }
        </Grid>
    );
};

export default PizzaChefOrderInProgress;
