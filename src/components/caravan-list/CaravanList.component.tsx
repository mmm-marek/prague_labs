import type { Caravan } from "../../utils/api";
import { CaravanCard } from "../caravan-card/CaravanCard.component";
import { StyledCaravanList } from "./CaravanList.styles";

type CaravanListProps = {
    caravans: Caravan[];
    onCaravanClick: (caravan: Caravan) => void;
};

export const CaravanList = ({ caravans }: CaravanListProps) => {
    return (
        <StyledCaravanList>
            {caravans.map((caravan) => (
                <CaravanCard
                    key={`${caravan.name}+${caravan.location}`}
                    caravan={caravan}
                />
            ))}
        </StyledCaravanList>
    );
};
