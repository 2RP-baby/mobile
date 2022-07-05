import { observable, runInAction } from 'mobx';

const createStore = () => {
    const shipSearchedListStore = {
        searchedList: observable.box([]),
        changeSearchedList: (data) => runInAction(()=> shipSearchedListStore.searchedList.set(data))
    };

    return shipSearchedListStore;
};

const store = createStore();
export default store;
