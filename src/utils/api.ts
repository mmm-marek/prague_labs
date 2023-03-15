import axios from "axios";
import { useQuery } from "react-query";

export type Caravan = {
    location: string;
    instantBookable: boolean;
    name: string;
    passengersCapacity: number;
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

async function fetchCaravans(): Promise<CaravanResponse> {
    const response = await axios.get("/api/data");
    return response.data as CaravanResponse;
}

export function useCaravans() {
    const { data, isLoading, isError } = useQuery("caravans", fetchCaravans);
    return {
        isLoadingCaravans: isLoading,
        isErrorCaravans: isError,
        caravans: data?.items || [],
        caravansCount: data?.count || 0,
    };
}
