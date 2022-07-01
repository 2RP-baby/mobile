import searchedListStore from './searchedListStore'
import deliverySelectStore from './deliverySelectStore'
import vocaDataStore from './vocaDataStore'

const createRootStore = () => {
  return {
    searchedListStore,
    deliverySelectStore,
    vocaDataStore
  };
};

export default createRootStore;
