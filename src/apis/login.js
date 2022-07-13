import { serverAxios } from "./axios2";

// const PREFIX_URL = "/auth";

export const getToken = async (sendData) => {
    try {
        const { data } = await serverAxios.post('/auth/login', sendData);

        const dataToken = data.accessToken
        console.log("accessToken", dataToken);

        serverAxios.defaults.headers.common['Authorization'] = `Bearer ${dataToken}`
        //     const {result} = await serverAxios.get('/member/me');

        serverAxios.get('/member/me')
            .then(res => {
            console.log("token 통해 정보 얻기", res);	
            console.log("email", res._response);	
        })
        

        return dataToken;
    } catch (err) {
        console.log("fail", err);
        console.log("status", error.response.status);
        // throw new Error("Failed to load");
        // throw err;
    }
};



