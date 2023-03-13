import axios from "axios";

export type Caravan = {
    location: string;
    instantBookable: boolean;
    name: string;
    passengerCapacity: number;
    sleepCapacity: number;
    price: number;
    vehicleType: string;
    toilet: boolean;
    shower: boolean;
    pictures: string[];
};

type CaravanResponse = {
    count: number;
    items: Caravan[];
};

export async function getCaravans(): Promise<CaravanResponse> {
    const response = await axios.get("/api/data");
    return response.data as CaravanResponse;
}
