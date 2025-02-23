
export type Categories = "Tours" | "Tickets" | "Rent" | "Transfer"

export type CategoriesType = Categories[]

export type FiltersType = {
    [category in Categories as string]: {
        name: string,
        options?: string[],
        type?: "range" | "time" | "number" | "text" | "date",
        min?: number,
        max?: number,
        default?: number,
    }[]
}

export type DataType = {
    title?: string;
    price?: number;
    vehicleType?: string;
    passengers?: number;
    ratings?: string;
    discount?: number;
    discountedPrice?: number;
    imageSrc?: string;
    description?: string;
    theme?: string;
    vehicle?: string;
    eventType?: string;
    location?: string;
    insurance?: string;
}

export type SampleDataType = {
    [category in Categories as string]: DataType[]
}

