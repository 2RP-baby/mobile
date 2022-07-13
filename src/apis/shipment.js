import { serverAxios } from "./axios";

const PREFIX_URL = "/ship";

// 선택한 조건으로 조회
export const getSearchList = async (test) => {
  try {
    const { data } = await serverAxios.post(`${PREFIX_URL}/shipSearchList`, test);
  //  console.log("data~~~~", data);
    return data;
  } catch (err) {
    console.log("fail", err);
    console.log("status", error.response.status);
  }
};

export const getShipmentInsertInfo = async (num) => {
  try {
    const sendData = {po_num : num};
    const { data } = await serverAxios.post(`${PREFIX_URL}/shipSearchOne`, sendData);
    return data;
  } catch (err) {
    console.log("fail", err);
    console.log("status", error.response.status);
    // throw new Error("Failed to load");
    // throw err;
  }
};

export const insertSccDeliveryInfo = async (sendData) => {
  try {
    const { data } = await serverAxios.post(`${PREFIX_URL}/shipInsertOne`, sendData);
    console.log("insert 후 반환된 결과 : ", data);
    return true;
  } catch (err) {
    console.log("fail", err);
    console.log("status", error.response.status);
    // throw new Error("Failed to load");
    // throw err;
  }
};

export const shipCurSearchList = async (sendData) => {
  try {
    const { data } = await serverAxios.post(`${PREFIX_URL}/shipCurSearchList`, sendData);
    console.log("insert 후 반환된 결과 shipCurSearchList: ", data);
    return data;
  } catch (err) {
    console.log("fail", err);
    console.log("status", error.response.status);
    // throw new Error("Failed to load");
    // throw err;
  }
};

export const getCurSearchInsertedOne = async (num) => {
  try {
    const sendData = {shipment_num : num};
    const { data } = await serverAxios.post(`${PREFIX_URL}/shipSearchInsertedOne`, sendData);
    return data;
  } catch (err) {
    console.log("fail", err);
    console.log("status", error.response.status);
    // throw new Error("Failed to load");
    // throw err;
  }
};


