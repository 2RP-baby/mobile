import searchedListStore from './searchedListStore'
import deliverySelectStore from './deliverySelectStore'
import vocaDataStore from './vocaDataStore'
import deliveryInsertStore from './deliveryInsertStore'
import checkedListStore from './checkedListStore'
const createRootStore = () => {
  return {
    searchedListStore,
    deliverySelectStore,
    vocaDataStore,
    deliveryInsertStore,
    checkedListStore
  };
};

export default createRootStore;
