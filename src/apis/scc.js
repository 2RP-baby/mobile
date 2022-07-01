import { serverAxios } from "./axios";

const PREFIX_URL = "/scc";

// 선택한 조건으로 조회
export const getSearchList = async (test) => {
  try {
    const { data } = await serverAxios.post(`${PREFIX_URL}/sccSearchList`, test);
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
    const { data } = await serverAxios.post(`${PREFIX_URL}/sccSearchOne`, num);
    return data;
  } catch (err) {
    console.log("fail", err);
    console.log("status", error.response.status);
    // throw new Error("Failed to load");
    // throw err;
  }
};




