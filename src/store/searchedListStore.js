import { observable, runInAction } from 'mobx';

const createStore = () => {
    const searchedListStore = {
        searchedList: observable.box([]),
        changeSearchedList: (data) => runInAction(()=> searchedListStore.searchedList.set(data))
    };

    return searchedListStore;
};

const store = createStore();
export default store;
