import { create } from "zustand";
import http from "../../api/interseptor";
import { request_products } from "@/interfaces/products";

const useProductStore = create <request_products> ((set) => ({
    products: [],
    getProducts: async () => {
        try{
            const response = await http.get("/products/search");
            set({ products: response?.data?.data?.products});
        }catch(err){
            console.log(err);
        }
    },
}));




export default useProductStore;