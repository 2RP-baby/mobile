import { observable, runInAction } from 'mobx';

const createStore = () => {
    const screenModeStore = {
        screenMode: observable.box('selectVoca'),

        changeScreenMode: (data) => runInAction(()=> screenModeStore.screenMode.set(data))
    };

    return screenModeStore;
};

const store = createStore();
export default store;
