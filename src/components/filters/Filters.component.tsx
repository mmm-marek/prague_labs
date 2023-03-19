import type { VehicleType } from "../../utils/api";
import { Checkbox } from "../checkbox/Checkbox.component";
import { Dropdown } from "../dropdown/Dropdown.component";
import { Icon } from "../icon/Icon.component";
import { Input } from "../input/Input.component";
import { Slider } from "../slider/Slider.component";
import {
    StyledFiltersContainer,
    StyledFiltersSection,
    StyledFilterWrapper,
    StyledLabel,
    StyledInputContainer,
    StyledCaravanGrid,
} from "./Filters.styles";

type FiltersProps = {
    onPriceIntervalChange: (interval: number[]) => void;
    onCaravanTypeChange: (caravanType: VehicleType) => void;
    onImmidiateBookingChange: (selectedValue: string) => void;
    caravanTypes: {
        checked: boolean;
        value: VehicleType;
        title: string;
        description: string;
    }[];
    dropdownValue: { value: string; label: string };
    dropdownOptions: { value: string; label: string }[];
    minPrice: number;
    maxPrice: number;
    currentPriceInterval: [number, number];
};

export const Filters = ({
    caravanTypes,
    onCaravanTypeChange,
    onImmidiateBookingChange,
    onPriceIntervalChange,
    dropdownValue,
    dropdownOptions,
    minPrice,
    maxPrice,
    currentPriceInterval,
}: FiltersProps) => {
    const currentMinPrice = currentPriceInterval[0];
    const currentMaxPrice = currentPriceInterval[1];

    function handleNewMinPrice(newMinPrice: string) {
        if (isNaN(Number(newMinPrice))) return;

        const newMinPriceNumber = Number(newMinPrice);

        if (newMinPriceNumber > currentMaxPrice) {
            // switch values of the interval
            onPriceIntervalChange([currentMaxPrice, newMinPriceNumber]);
            return;
        }

        if (newMinPriceNumber < minPrice) {
            onPriceIntervalChange([minPrice, currentMaxPrice]);
            return;
        }

        onPriceIntervalChange([newMinPriceNumber, currentMaxPrice]);
    }

    function handleNewMaxPrice(newMaxPrice: string) {
        if (isNaN(Number(newMaxPrice))) return;

        const newMaxPriceNumber = Number(newMaxPrice);

        if (newMaxPriceNumber < currentMinPrice) {
            onPriceIntervalChange([newMaxPriceNumber, currentMinPrice]);
            return;
        }

        if (newMaxPriceNumber > maxPrice) {
            onPriceIntervalChange([currentMinPrice, maxPrice]);
            return;
        }

        onPriceIntervalChange([currentMinPrice, newMaxPriceNumber]);
    }

    return (
        <StyledFiltersSection>
            <StyledFilterWrapper>
                <StyledFiltersContainer>
                    <StyledLabel>Cena za den</StyledLabel>
                    <Slider
                        min={minPrice}
                        max={maxPrice}
                        value={currentPriceInterval}
                        onAfterChange={(value) => onPriceIntervalChange(value)}
                    />
                    <StyledInputContainer>
                        <Input
                            id="minPrice"
                            label="Kč"
                            min={minPrice}
                            max={maxPrice}
                            onChange={(e) => handleNewMinPrice(e.target.value)}
                            value={currentPriceInterval[0]}
                        />
                        <Input
                            id="maxPrice"
                            label="Kč"
                            min={minPrice}
                            max={maxPrice}
                            onChange={(e) => handleNewMaxPrice(e.target.value)}
                            value={currentPriceInterval[1]}
                        />
                    </StyledInputContainer>
                </StyledFiltersContainer>
                <StyledFiltersContainer>
                    <StyledLabel>Typ karavanu</StyledLabel>
                    <StyledCaravanGrid>
                        {caravanTypes.map((caravanType) => (
                            <Checkbox
                                key={caravanType.value}
                                id={caravanType.value}
                                title={caravanType.title}
                                description={caravanType.description}
                                checked={caravanType.checked}
                                onChange={() =>
                                    onCaravanTypeChange(caravanType.value)
                                }
                            />
                        ))}
                    </StyledCaravanGrid>
                </StyledFiltersContainer>
                <StyledFiltersContainer>
                    <StyledLabel>
                        Okamžitá rezervace
                        <Icon name="bolt" />
                    </StyledLabel>
                    <Dropdown
                        value={dropdownValue}
                        options={dropdownOptions}
                        onChange={(e) => onImmidiateBookingChange(e.value)}
                    />
                </StyledFiltersContainer>
            </StyledFilterWrapper>
        </StyledFiltersSection>
    );
};
