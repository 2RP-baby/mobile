import { serverAxios } from "./axios2";

// let loginResult={};

export const getToken = async (sendData) => {
    try {
        const { data } = await serverAxios.post('/auth/login', sendData);

        console.log("sendData", sendData);

        const dataToken = data.accessToken
        console.log("accessToken", dataToken);

        serverAxios.defaults.headers.common['Authorization'] = `Bearer ${dataToken}`
        var loginResult = serverAxios.get('/member/me')
            .then(res => {	
                console.log("login info!!:!:!:", res.data);	
                return res.data;
            })

        return loginResult;
    } catch (err) {
        console.log("fail", err);
        console.log("status", error.response.status);
    }
};



