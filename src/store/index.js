import searchedListStore from './delivery/searchedListStore'
import deliverySelectStore from './delivery/deliverySelectStore'
import vocaDataStore from './delivery/vocaDataStore'
import deliveryInsertStore from './delivery/deliveryInsertStore'
import checkedListStore from './delivery/checkedListStore'
import shipmentSelectStore from './shipment/shipmentSelectStore'
import shipSearchedListStore from './shipment/shipSearchedListStore'
import shipDeliveryInsertStore from './shipment/shipDeliveryInsertStore'
import shipCheckedListStore from './shipment/shipCheckedListStore'

import StateShipCheckedListStore from './stateShipment/StateShipCheckedListStore'
import StateShipDeliveryInsertStore from './stateShipment/StateShipDeliveryInsertStore'
import StateShipmentSelectStore from './stateShipment/StateShipmentSelectStore'
import StateShipSearchedListStore from './stateShipment/StateShipSearchedListStore'
const createRootStore = () => {
  return {
    // 납품
    searchedListStore,
    deliverySelectStore,
    vocaDataStore,
    deliveryInsertStore,
    checkedListStore,

    // 출하
    shipmentSelectStore,
    shipSearchedListStore,
    shipDeliveryInsertStore,
    shipmentSelectStore,
    shipCheckedListStore,

    //State출하
    StateShipCheckedListStore,
    StateShipDeliveryInsertStore,
    StateShipmentSelectStore,
    StateShipSearchedListStore,
  };
};

export default createRootStore;
