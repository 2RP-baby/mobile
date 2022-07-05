import { observable, runInAction } from 'mobx';

const createStore = () => {
    const deliveryCondition={
        po_num:"", 
        staff_name:"", 
        staff_dept_code:"",
        subinventory:"",
        vendor_name:"",
        item_name:"",
        page:1
    };

    const deliverySelectStore = {
        deliveryCondition: observable.box(
            deliveryCondition
        ),
        changeDeliveryCondition: (data) => runInAction(()=> deliverySelectStore.deliveryCondition.set(data)),
    };

    return deliverySelectStore;
};

const store = createStore();
export default store;