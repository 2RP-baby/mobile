import { serverAxios } from "./axios";

const PREFIX_URL = "/scc";

// 납품 신청

// 선택한 조건으로 조회
export const getSearchList = async (test) => {
  try {
    const { data } = await serverAxios.post(`${PREFIX_URL}/sccSearchList`, test);
  //  console.log("data~~~~", data);
    return data;
  } catch (err) {
    console.log("fail", err);
    console.log("status", error.response.status);
    // throw new Error("Failed to load");
    // throw err;
  }
};

export const getDeliveryInsertInfo = async (num) => {
  try {
    const sendData = {po_num : num};
    const { data } = await serverAxios.post(`${PREFIX_URL}/sccSearchOne`, sendData);
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
    const { data } = await serverAxios.post(`${PREFIX_URL}/sccInsertOne`, sendData);
    return data;
  } catch (err) {
    console.log("fail", err);
    console.log("status", error.response.status);
    // throw new Error("Failed to load");
    // throw err;
  }
};


export const StatusDeliveryInfo = async (num) => {
  try {
    const sendData = {po_num : num};
    const { data } = await serverAxios.post(`${PREFIX_URL}/sccSearchInsertedOne`, sendData);
    return data;
  } catch (err) {
    console.log("fail", err);
    console.log("status", error.response.status);
  }
};

// 납품 신청 현황
export const getCurSearchList = async (test) => {
  try {
    const { data } = await serverAxios.post(`${PREFIX_URL}/sccCurSearchList`, test);
  //  console.log("data~~~~", data);
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
    const { data } = await serverAxios.post(`${PREFIX_URL}/sccSearchInsertedOne`, sendData);
    return data;
  } catch (err) {
    console.log("fail", err);
    console.log("status", error.response.status);
    // throw new Error("Failed to load");
    // throw err;
  }
};


// 금액 , 표기
export const getNumberFormat = (value) => {
  return value ? value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") : "0";
};

