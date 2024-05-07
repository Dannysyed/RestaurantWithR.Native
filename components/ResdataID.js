import axios from "axios";

async function fetchBusinessData(businessId) {
    let headersList = {
        "Accept": "*/*",
        "Authorization": "Bearer JVueFyVX6hyz_FgU88E78Y7yeV87xCfZWdJfY_Tu89aP2WV4qzvMbyVgnUxWzD1hrinpRUBQkXSJADA3-Bwznxs2DyBRIOjr93dVXBsWaZIjYYEkgFralIFitfg1ZnYx"
    };

    let reqOptions = {
        url: `https://api.yelp.com/v3/businesses/${encodeURIComponent(businessId)}`,
        method: "GET",
        headers: headersList,
    };

    let response = (await axios.request(reqOptions)).data;
    return response;
}

export default fetchBusinessData;
