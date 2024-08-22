import { OrderDto } from "../../../api/src/generated";
import BaseCard from "../../../components/base/base-card/base-card.component";
import PizzaChefOrderComponent from "../../pizza-chef/components/pizza-chef-order.component";
import useCustomerOrderHook from "./customer-order.hook";


const CustomerOrder = () => {

    const { redirectToCustomer, order, name, lookupStatusResponse } = useCustomerOrderHook();

    return (
        <BaseCard title={`Order list ${name?.replace("%20", " ")}`}
            subTitle="See the complete list of order"
            headerAction={{
                label: "Go to customers page",
                type: "primary",
                variant: "contained",
                onClick: redirectToCustomer
            }}>
            {order?.map((item: OrderDto) => (
                <PizzaChefOrderComponent order={item} lookupStatusResponse={lookupStatusResponse ?? []} />
            ))}
        </BaseCard>
    );
};
export default CustomerOrder;
