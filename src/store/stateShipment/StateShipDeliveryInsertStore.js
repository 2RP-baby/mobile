import { observable, runInAction } from 'mobx';

const createStore = () => {
    const StateShipDeliveryInsertStore = {
        deliveryInsertInfo: observable.box([]),
        changeDeliveryInsertInfo: (data) => runInAction(()=> StateShipDeliveryInsertStore.deliveryInsertInfo.set(data)),
        callChangeApi: async (po_num) => {
            const data = await getShipmentInsertInfo(po_num);
            runInAction(()=> StateShipDeliveryInsertStore.deliveryInsertInfo.set(data))
        }
    };

    return StateShipDeliveryInsertStore;
};

const store = createStore();
export default store;
