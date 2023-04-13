import axios from "axios";

export default axios.create({
    params: {
        baseURL: "https://api.rawg.io/api",
        key: "ad91479d51124f06b88ff3ddce2e2259",
    },
});
