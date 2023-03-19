import type { Caravan } from "../../utils/api";
import { CaravanCard } from "../caravan-card/CaravanCard.component";
import {
    StyledCaravanListContainer,
    StyledMessage,
} from "./CaravanList.styles";

type CaravanListProps = {
    caravans: Caravan[];
    isLoadingCaravans: boolean;
    isErrorCaravans: boolean;
    onCaravanClick: (caravan: Caravan) => void;
};

export const CaravanList = ({
    caravans,
    onCaravanClick,
    isLoadingCaravans,
    isErrorCaravans,
}: CaravanListProps) => {
    if (isErrorCaravans)
        return (
            <StyledMessage>Nastala chyba při načítání karavanů.</StyledMessage>
        );

    if (isLoadingCaravans)
        return <StyledMessage>Prosím, čekejte...</StyledMessage>;

    if (caravans.length === 0)
        return <StyledMessage>Nebyly nalezeny žádné karavany.</StyledMessage>;

    return (
        <StyledCaravanListContainer>
            {caravans.map((caravan) => (
                <CaravanCard
                    onClick={() => onCaravanClick(caravan)}
                    key={`${caravan.name}+${caravan.location}+${caravan.price}+${caravan.vehicleType}+${caravan.pictures[0]}`}
                    caravan={caravan}
                />
            ))}
        </StyledCaravanListContainer>
    );
};
