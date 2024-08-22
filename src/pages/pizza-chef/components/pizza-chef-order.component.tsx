import { Chip, Divider, Grid } from "@mui/material";
import React, { useCallback } from "react";
import { OrderDto, PizzaDto } from "../../../api/src/generated";
import BaseButton from "../../../components/base/base-button/base-button.component";
import BaseCard from "../../../components/base/base-card/base-card.component";
import BaseLabelValue from "../../../components/base/base-label-value/base-label-value.component";
import StatusOrderEnum from "../../../constants/status-order.enum";

interface IProps {
    readonly order: OrderDto;
    readonly startOrder?: (code: string) => void;
    readonly endOrder?: (code: string) => void;
    readonly deleteOrder?: (code: string) => void;
    readonly orderInProgress?: boolean;
}

const PizzaChefOrderComponent: React.FC<IProps> = (props: IProps): React.ReactElement => {

    const { order, startOrder, deleteOrder, endOrder, orderInProgress } = props;

    const statusChip = useCallback((code: string) => {
        switch (code) {
            case StatusOrderEnum.BOOKED:
                return <Chip label={code} color="info" size="small" />;
                break;
            case StatusOrderEnum.DELETED:
                return <Chip label={code} color="error" size="small" />;
                break;
            case StatusOrderEnum.COMPLETED:
                return <Chip label={code} color="success" size="small" />;
                break;
            case StatusOrderEnum.IN_PROGRESS:
                return <Chip label={code} color="warning" size="small" />;
                break;
            default:
                <></>;
                break;
        }
    }, []);

    return (
        <Grid margin={2}>
            <BaseCard title={`Order numer: ${order.code}`}
                subTitle={`Price: €${order.price}`}
            >
                <Grid container marginY={2} justifyContent={"space-between"}>
                    <Grid item>
                        <BaseLabelValue label="Nome" value={order.creationUser} inline />
                    </Grid>
                    <Grid item>
                        <BaseLabelValue label="Data creazione" value={order.creationDate} inline />
                    </Grid>
                    <Grid item>
                        Status: {statusChip(order.status ?? "")}
                    </Grid>
                </Grid>
                <Divider />
                <Grid marginY={2}>
                    {order.pizzas?.map((item: PizzaDto, idx: number) => (
                        <Grid container>
                            <Grid item xs={4}>
                                <BaseLabelValue label={`${idx + 1}. Pizza`} value={`${item.name}`} inline />
                            </Grid>
                            <Grid item xs={4}>
                                <BaseLabelValue label={"Ingredienti"} value={`${item.description}`} inline />
                            </Grid>
                            <Grid item container justifyContent={"end"} xs={4}>
                                <Grid item>
                                    <BaseLabelValue label={"Price"} value={`€${item.price}`} inline />
                                </Grid>
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
                <Divider />
                {(startOrder || endOrder || deleteOrder) && (
                    <Grid container marginTop={2} justifyContent={"center"} spacing={2}>
                        {startOrder && (
                            <Grid item>
                                <BaseButton type="primary" variant="contained" label="Start order" disabled={orderInProgress} onClick={() => startOrder(order.code ?? "")} />
                            </Grid>
                        )}
                        {endOrder && (
                            <Grid item>
                                <BaseButton type="success" variant="contained" label="End order" onClick={() => endOrder(order.code ?? "")} />
                            </Grid>
                        )}
                        {deleteOrder && (
                            <Grid item>
                                <BaseButton type="error" variant="contained" label="Delete order" onClick={() => deleteOrder(order.code ?? "")} />
                            </Grid>
                        )}
                    </Grid>
                )}
            </BaseCard>
        </Grid>
    );
};
export default PizzaChefOrderComponent;
