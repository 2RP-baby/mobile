import { observable, runInAction } from 'mobx';

const createStore = () => {
    const StateShipSearchedListStore = {
        searchedList: observable.box([]),
        changeSearchedList: (data) => runInAction(()=> StateShipSearchedListStore.searchedList.set(data))
    };

    return StateShipSearchedListStore;
};

const store = createStore();
export default store;
