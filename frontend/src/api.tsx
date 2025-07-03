import axios from "axios";
import { CoinSearch } from "./coin.ds";

interface SearchResponse{
    data: CoinSearch[];
}

export const searchCoins = async (query: string) => {
    try{
        const data = await axios.get<SearchResponse>(
            `https://financialmodelingprep.com/stable/quote?symbol=${query}&apikey=${process.env.REACT_APP_API_KEY}`
        );
        return data;
    }
    catch (error) {
        if (error && typeof error === "object" && "isAxiosError" in error) {
            const axiosError = error as any;
            console.log("Axios error:", axiosError.response?.data || axiosError.message);
            return axiosError.message;
        } 
        else {
            console.error("Unexpected error:", error);
            return "Unexpected error";
        }
    }
};