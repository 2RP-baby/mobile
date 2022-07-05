import { observable, runInAction } from 'mobx';

const createStore = () => {
    const shipmentCondition={
        deliver_to_location:"", 
        staff_name:"", 
        cost_center:"",
        item_name:"",
        page:1
    };

    const shipmentSelectStore = {
        shipmentCondition: observable.box(
            shipmentCondition
        ),
        changeShipmentCondition: (data) => runInAction(()=> shipmentSelectStore.shipmentCondition.set(data)),
    };

    return shipmentSelectStore;
};

const store = createStore();
export default store;