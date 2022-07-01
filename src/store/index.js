import searchedListStore from './searchedListStore'
import vocaDataStore from './vocaDataStore'

const createRootStore = () => {
  return {
    searchedListStore,
    vocaDataStore
  };
};

export default createRootStore;
