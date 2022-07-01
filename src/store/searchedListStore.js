import { observable, runInAction } from 'mobx';

const createStore = () => {
    const searchedListStore = {
        searchedList: observable.box('selectVoca'),
        changeSearchedList: (data) => runInAction(()=> searchedListStore.searchedList.set(data))
    };

    return searchedListStore;
};

const store = createStore();
export default store;
