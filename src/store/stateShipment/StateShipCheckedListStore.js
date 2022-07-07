import { observable, runInAction } from 'mobx';

const createStore = () => {
    const StateShipCheckedListStore = {
        checkedList: observable.box([
        ]),
        changeCheckedList: (data) => runInAction(()=> StateShipCheckedListStore.checkedList.set(data))
    };

    return StateShipCheckedListStore;
};

const store = createStore();
export default store;
