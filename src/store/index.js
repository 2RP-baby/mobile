import screenModeStore from './screenModeStore'
import vocaDataStore from './vocaDataStore'

const createRootStore = () => {
  return {
    screenModeStore,
    vocaDataStore
  };
};

export default createRootStore;
