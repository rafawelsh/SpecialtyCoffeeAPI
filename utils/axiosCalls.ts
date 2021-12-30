import axios from "axios";

const instance = axios.create({
	baseURL: "https://localhost:3000/api/coffeeshop",
	timeout: 1000,
});

export const getCoffeeShops = async () => {
	axios({
		method: "GET",
		url: "api/coffeeshop",
	}).then((response) => {
		console.log(response.data);
		return response;
	});
};
