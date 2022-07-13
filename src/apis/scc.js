import { serverAxios } from "./axios";

const PREFIX_URL = "/scc";

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

// axios.post('http://localhost:8282/mob/userinfo', formData)
//   .then((res) => {
//       console.log(res.data);

//       setcus_name(res.data[0].customer_name_kor)
//       setreal_name(res.data[0].esales_user_name)
//       setphone_num(res.data[0].customer_cellphone_num)
//       setbelong(res.data[0].belong)
//       setemail(res.data[0].email_address)
//   })