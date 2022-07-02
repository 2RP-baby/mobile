import searchedListStore from './searchedListStore'
import deliverySelectStore from './deliverySelectStore'
import vocaDataStore from './vocaDataStore'
import deliveryInsertStore from './deliveryInsertStore'

const createRootStore = () => {
  return {
    searchedListStore,
    deliverySelectStore,
    vocaDataStore,
    deliveryInsertStore
  };
};

export default createRootStore;
