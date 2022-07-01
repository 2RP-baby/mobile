import { observable, runInAction } from 'mobx';

const createStore = () => {
    const deliveryInsertStore = {
        deliveryInsertInfo: observable.box([]),
        changeDeliveryInsertInfo: (data) => runInAction(()=> deliveryInsertStore.deliveryInsertInfo.set(data)),
        callChangeApi: async (po_num) => {
            const data = await getDeliveryInsertInfo(po_num);
            runInAction(()=> deliveryInsertStore.deliveryInsertInfo.set(data))
        }
    };

    return deliveryInsertStore;
};

const store = createStore();
export default store;
