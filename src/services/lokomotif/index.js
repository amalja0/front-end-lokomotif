import { groupLokomotifStatusandTotal } from "../../utils/HelperFunctions";
import api from "../config/axios";

export const getAllLokomotifFromYesterday = async () => {
    try {
        const res = await api.get('/lokomotifs');
        return res.data._embedded.lokomotifs;
    } catch (error) {
        console.log(error);
    }
};