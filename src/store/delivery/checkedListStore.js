import { observable, runInAction } from 'mobx';

const createStore = () => {
    const checkedListStore = {
        checkedList: observable.box([]),
        changeCheckedList: (data) => runInAction(()=> checkedListStore.checkedList.set(data))
    };

    return checkedListStore;
};

const store = createStore();
export default store;
