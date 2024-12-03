import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COOKBOOKS_API = `${REMOTE_SERVER}/api/cookbooks`;
export const fetchAllCookbooks = async () => {
    const { data } = await axios.get(COOKBOOKS_API);
    return data;
};
export const deleteCookbook = async (id: string) => {
    const { data } = await axios.delete(`${COOKBOOKS_API}/${id}`);
    return data;
};
export const updateCookbook = async (cookbook: any) => {
    const { data } = await axios.put(`${COOKBOOKS_API}/${cookbook._id}`, cookbook);
    return data;
};
export const findRecipesForCookbook = async (cookbookId: string) => {
    const response = await axios
        .get(`${COOKBOOKS_API}/${cookbookId}/recipes`);
    return response.data;
};
export const createRecipesForCookbook = async (cookbookId: string, recipe: any) => {
    const response = await axios.post(
        `${COOKBOOKS_API}/${cookbookId}/recipes`,
        recipe
    );
    return response.data;
};


