import axios from "axios";

class ApiHandler {
    getPlaces() {
        return axios.get("/places").then((response) => response.data);
    }

    getLogs(year) {
        return axios.get("/logs").then((response) => response.data);
    }



    updateLog(date, placeId) {
        return axios.put("/logs/" + date, {
            placeId: placeId,
        })
    }

    deleteLog(date) {
        return axios.delete("/logs/" + date)
    }

    savePlace(name, distanceFromBase, distanceFromHome) {
        return axios.post("/places", {
            name: name,
            distanceFromBase: distanceFromBase,
            distanceFromHome: distanceFromHome,
        })
    }

    deletePlace(placeId) {
        return axios.delete("/places/" + placeId.toString())
    }
}

const apiHandler = new ApiHandler();
export default apiHandler;