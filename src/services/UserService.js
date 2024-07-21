import axios from "axios";

export const axiosJTW = axios.create()

export const loginUser = async (data) => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/signin`, data);
    return res.data;
};

export const signupUser = async (data) => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/signup`, data);
    return res.data;
};

export const getDetailUser = async (id, access_token) => {
    const res = await axiosJTW.get(`${process.env.REACT_APP_API_URL}/user/getDetail/${id}`, {
        headers: {
            token: `Bearer ${access_token}`,
        }
    });
    return res.data;
};

export const refreshToken = async () => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/refreshToken`, {
        withCredentials: true,
    });
    return res.data;
};

export const logoutUser = async () => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/logout`);
    return res.data;
};

export const getDetailKhachHang = async (data) => {
    const res = await axiosJTW.get(`${process.env.REACT_APP_API_URL}/khachhang/getDetail/${data}`);
    return res.data;
};

export const updateKhachHang = async (idkh, data, access_token) => {
    const res = await axiosJTW.put(`${process.env.REACT_APP_API_URL}/khachhang//updateKhachHang/${idkh}`, data,
        {
            headers: {
                token: `Bearer ${access_token}`,
            }
        }
    );
    return res.data;
};

export const updateUser = async (idtk, data, access_token) => {
    const res = await axiosJTW.put(`${process.env.REACT_APP_API_URL}/user//updateuser/${idtk}`, data,
        {
            headers: {
                token: `Bearer ${access_token}`,
            }
        }
    );
    return res.data;
};
