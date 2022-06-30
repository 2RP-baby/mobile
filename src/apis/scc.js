import { serverAxios } from "./axios";

const PREFIX_URL = "/scc";

// 선택한 조건으로 조회
export const getSearchList = async (test) => {
  try {
    console.log("input data : ", test);
    const { data } = await serverAxios.post(`${PREFIX_URL}/sccSearchList`, test);
    console.log("데이터베이스 갔다 온 값", data);
    return data;
    // return null;
  } catch (err) {
    throw new Error("Failed to load");
    // throw err;
  }
};




