import { observable, runInAction } from 'mobx';

const createStore = () => {
    const shipCheckedListStore = {
        checkedList: observable.box([
        ]),
        changeCheckedList: (data) => runInAction(()=> shipCheckedListStore.checkedList.set(data))
    };

    return shipCheckedListStore;
};

const store = createStore();
export default store;
