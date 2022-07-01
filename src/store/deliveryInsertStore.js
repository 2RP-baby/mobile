import { observable, runInAction } from 'mobx';

const createStore = () => {
    const deliveryInsertStore = {
        deliveryInsertInfo: observable.box([]),
        changeDeliveryInsertInfo: (data) => runInAction(()=> deliveryInsertStore.deliveryInsertInfo.set(data))
    };

    return deliveryInsertStore;
};

const store = createStore();
export default store;
