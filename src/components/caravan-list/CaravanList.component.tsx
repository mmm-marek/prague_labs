import type { Caravan } from "../../utils/api";
import { CaravanCard } from "../caravan-card/CaravanCard.component";
import { StyledCaravanList, StyledNoResults } from "./CaravanList.styles";

type CaravanListProps = {
    caravans: Caravan[];
    onCaravanClick: (caravan: Caravan) => void;
};

export const CaravanList = ({ caravans, onCaravanClick }: CaravanListProps) => {
    return (
        <>
            {caravans.length === 0 ? (
                <StyledNoResults>
                    Nebyly nalezeny žádné karavany.
                </StyledNoResults>
            ) : (
                <StyledCaravanList>
                    {caravans.map((caravan) => (
                        <CaravanCard
                            onClick={() => onCaravanClick(caravan)}
                            key={`${caravan.name}+${caravan.location}+${caravan.price}+${caravan.vehicleType}+${caravan.pictures[0]}`}
                            caravan={caravan}
                        />
                    ))}
                </StyledCaravanList>
            )}
        </>
    );
};
