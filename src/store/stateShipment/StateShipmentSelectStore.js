import { observable, runInAction } from 'mobx';

const createStore = () => {
    const shipmentCondition={
        deliver_to_location:"", 
        staff_name:"", 
        cost_center:"",
        item_name:"",
        page:1
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