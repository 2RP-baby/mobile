import searchedListStore from './delivery/searchedListStore'
import deliverySelectStore from './delivery/deliverySelectStore'
import deliveryInsertStore from './delivery/deliveryInsertStore'
import checkedListStore from './delivery/checkedListStore'
import shipmentSelectStore from './shipment/shipmentSelectStore'
import shipSearchedListStore from './shipment/shipSearchedListStore'
import shipDeliveryInsertStore from './shipment/shipDeliveryInsertStore'
import shipCheckedListStore from './shipment/shipCheckedListStore'
import statusCheckedListStore from './statusDelivery/statusCheckedListStore'
import statusDeliveryInsertStore from './statusDelivery/statusDeliveryInsertStore'
import statusDeliverySelectStore from './statusDelivery/statusDeliverySelectStore'
import statusSearchedListStore from './statusDelivery/statusSearchedListStore'

const createRootStore = () => {
  return {
    // 납품
    searchedListStore,
    deliverySelectStore,
    deliveryInsertStore,
    checkedListStore,

    // 출하
    shipmentSelectStore,
    shipSearchedListStore,
    shipDeliveryInsertStore,
    shipmentSelectStore,
    shipCheckedListStore,

    // 납품현황
    statusSearchedListStore,
    statusDeliverySelectStore,
    statusDeliveryInsertStore,
    statusCheckedListStore,



  };
};

export default createRootStore;
