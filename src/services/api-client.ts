import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "74aa02e0213f46beae4a6b357abe8150",
    },
});
