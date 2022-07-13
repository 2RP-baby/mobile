import { observable, runInAction } from 'mobx';

const createStore = () => {
    const loginStore = {
        login: observable.box([]),
        changeLogin: (data) => runInAction(()=> loginStore.login.set(data)),
    };
    return loginStore;
};

const store = createStore();
export default store;