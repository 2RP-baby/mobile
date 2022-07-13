import { observable, runInAction } from 'mobx';

const createStore = () => {
    const shipmentCondition={
        shipment_num : "",
        contact_name : "",
        deliver_to_location : "",
        subinventory : "",
        item_name : "",
        page:1,
    };

    const StateShipmentSelectStore = {
        shipmentCondition: observable.box(
            shipmentCondition
        ),
        changeShipmentCondition: (data) => runInAction(()=> StateShipmentSelectStore.shipmentCondition.set(data)),
    };

    return StateShipmentSelectStore;
};

const store = createStore();
export default store;