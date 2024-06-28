export interface data_product{
    id: number
    brand_id: number
    createdAt: string
    lastUpdateAt: string
    name: string
    price: string
}

export interface request_products{
    products: data_product[];
    getProducts: () => any;
}