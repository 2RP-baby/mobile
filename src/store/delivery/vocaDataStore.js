import { observable, runInAction } from 'mobx';

const createStore = () => {
    const searchedListStore = {
        vocaData: observable.box([]),

        changeVocaData: (data) => runInAction(()=> searchedListStore.searchedList.set(data))
    };

    return searchedListStore;
};

const store = createStore();
export default store;