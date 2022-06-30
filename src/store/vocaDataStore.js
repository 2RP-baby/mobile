import { observable, runInAction } from 'mobx';

const createStore = () => {
    const screenModeStore = {
        vocaData: observable.box('selectVoca'),

        changeVocaData: (data) => runInAction(()=> screenModeStore.screenMode.set(data))
    };

    return screenModeStore;
};

const store = createStore();
export default store;
