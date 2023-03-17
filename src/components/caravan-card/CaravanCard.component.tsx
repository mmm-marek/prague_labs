import { Caravan } from "../../utils/api";
import { Icon } from "../icon/Icon.component";
import {
    StyledCaravanCard,
    StyledContent,
    StyledName,
    StyledImage,
    StyledLocation,
    StyledAttributes,
    StyledInfo,
    StyledAttribute,
    StyledPriceInfo,
    StyledPrice,
    StyledImageContainer,
} from "./CaravanCard.styles";

type CaravanCardProps = {
    caravan: Caravan;
};

export const CaravanCard = ({
    caravan: {
        vehicleType,
        pictures,
        name,
        price,
        location,
        passengersCapacity,
        sleepCapacity,
        shower,
        toilet,
        instantBookable,
    },
}: CaravanCardProps) => {
    return (
        <StyledCaravanCard>
            <StyledImageContainer>
                <StyledImage
                    src={pictures[0]}
                    alt="caravan image"
                    loader={() => pictures[0]}
                    objectFit="cover"
                    layout="fill"
                    unoptimized
                />
            </StyledImageContainer>
            <StyledContent>
                <StyledName>
                    <label>{vehicleType}</label>
                    <h2>{name}</h2>
                </StyledName>
                <StyledInfo>
                    <StyledLocation>{location}</StyledLocation>
                    <StyledAttributes>
                        <StyledAttribute>
                            <Icon name="person" />
                            {passengersCapacity}
                        </StyledAttribute>
                        <StyledAttribute>
                            <Icon name="bed" />
                            {sleepCapacity}
                        </StyledAttribute>
                        {shower && <Icon name="shower" />}
                        {toilet && <Icon name="toilet" />}
                    </StyledAttributes>
                </StyledInfo>
                <StyledPriceInfo>
                    <label>Cena od</label>
                    <StyledPrice>
                        <span>{price} Kč/den</span>
                        {instantBookable && <Icon name="bolt" />}
                    </StyledPrice>
                </StyledPriceInfo>
            </StyledContent>
        </StyledCaravanCard>
    );
};
