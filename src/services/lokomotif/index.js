import { groupLokomotifStatusandTotal } from "../../utils/HelperFunctions";
import api from "../config/axios";

export const getAllLokomotifFromYesterday = async () => {
    try {
        const res = await api.get('/lokomotifs');
        const pageSize = res.data.page.totalPages;

        let allLokomotifData = [];
        for(var i = 0; i < pageSize; i++) {
            const resOnPage = await getLokomotifDataByPage(i)
            allLokomotifData = [...allLokomotifData, ...resOnPage];;
        }

        return allLokomotifData;
    } catch (error) {
        console.log(error);
    }
};

const getLokomotifDataByPage = async (page) => {
    try {
        const res = await api.get(`/lokomotifs?page=${page}`);
        return res.data._embedded.lokomotifs;
    } catch (error) {
        console.log(error);
    }
}