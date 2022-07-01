import { observable, runInAction } from 'mobx';

const createStore = () => {
    const deliverySelectStore = {
        deliveryCondition: observable.box([]),
        changeDeliveryCondition: (data) => runInAction(()=> deliverySelectStore.deliveryCondition.set(data))
    };

    return deliverySelectStore;
};

const store = createStore();
export default store;
