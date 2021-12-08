import axios from "axios";

class ApiHandler {
    constructor() {
        this.placesCache = [];
        this._dirty = false;
    }

    //Add place to cached response so it's available immediately?
    isDirty() {
        return this._dirty;
    }

    getPlaces() {
        return axios.get("/places").then((response) => response.data);
    }

    getLogs(year) {
        return Promise.resolve(
            {
                _id: 1,
                2021: {
                    341: "Langstone",
                    343: "Blackwater",
                }
            }
        );
    }
}

const apiHandler = new ApiHandler();
export default apiHandler;