import axios from "axios";

axios.defaults.withCredentials = true;

const paxios = axios.create({
	baseURL: "http://203.241.228.50:18100/api",
	timeout: 5000,
	withCredentials: true,
});

export default paxios;
