import { observable, runInAction } from 'mobx';

const createStore = () => {
    const shipDeliveryInsertStore = {
        deliveryInsertInfo: observable.box([]),
        changeDeliveryInsertInfo: (data) => runInAction(()=> shipDeliveryInsertStore.deliveryInsertInfo.set(data)),
        callChangeApi: async (po_num) => {
            const data = await getShipmentInsertInfo(po_num);
            runInAction(()=> shipDeliveryInsertStore.deliveryInsertInfo.set(data))
        }
    };

    return shipDeliveryInsertStore;
};

const store = createStore();
export default store;
