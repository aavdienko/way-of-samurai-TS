import axios from 'axios';

type GetUsersPropsType = {
  pageNumber: number;
  pageSize: number;
};

const axiosInstance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '149d62aa-bd4d-437d-ba09-e1ee03f78f90',
  },
});

export const usersAPI = {
  getUsers(pageNumber = 1, pageSize = 10) {
    return axiosInstance
      .get(`users?page=${pageNumber}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  follow(userId: number) {
    return axiosInstance.post(`follow/${userId}`, {}).then((response) => {
      return response.data;
    });
  },
  unfollow(userId: number) {
    return axiosInstance.delete(`follow/${userId}`).then((response) => {
      return response.data;
    });
  },
  getProfile(userId: string) {
    console.warn('old method, please use profileAPI');
    return profileAPI.getProfile(userId);
  },
};

export const authAPI = {
  me() {
    return axiosInstance.get(`auth/me`);
  },
  login(email: string, password: string, rememberMe: boolean = false) {
    return axiosInstance.post(`auth/login`, { email, password, rememberMe });
  },
  logout() {
    return axiosInstance.delete(`auth/login`);
  },
};

export const profileAPI = {
  getProfile(userId: string) {
    return axiosInstance.get(`profile/${userId}`);
  },
  getStatus(userId: string) {
    return axiosInstance.get(`profile/status/${userId}`);
  },
  updateStatus(status: string) {
    return axiosInstance.put(`profile/status`, { status });
  },
};
