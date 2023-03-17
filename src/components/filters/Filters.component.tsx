import type { VehicleType } from "../../utils/api";
import { Checkbox } from "../checkbox/Checkbox.component";
import { Dropdown } from "../dropdown/Dropdown.component";
import { Icon } from "../icon/Icon.component";
import { Input } from "../input/Input.component";
import { Slider } from "../slider/Slider.component";
import {
    StyledCheckboxGrid,
    StyledFilterContainer,
    StyledFilters,
    StyledInputContainer,
    StyledLabel,
} from "./Filters.styles";

type FiltersProps = {
    onPriceChange?: ([min, max]: [number, number]) => void;
    onCaravanTypeChange: (caravanType: VehicleType) => void;
    onImmidiateBookingChange?: (immidiateBooking: boolean) => void;
    caravanTypes: {
        checked: boolean;
        value: VehicleType;
        title: string;
        description: string;
    }[];
};

export const Filters = ({
    caravanTypes,
    onCaravanTypeChange,
}: FiltersProps) => {
    const minPrice = 100;
    const maxPrice = 1000;

    const dropdownOptions = [
        { value: "yes", label: "Ano" },
        { value: "no", label: "Ne" },
    ];

    return (
        <StyledFilters>
            <StyledFilterContainer>
                <StyledLabel>Cena za den</StyledLabel>
                <Slider
                    min={minPrice}
                    max={maxPrice}
                    onAfterChange={() => {}}
                    value={[minPrice, maxPrice]}
                />
                <StyledInputContainer>
                    <Input
                        id="minPrice"
                        label="Kč"
                        min={minPrice}
                        max={maxPrice}
                        onChange={() => {}}
                        value={100}
                    />
                    <Input
                        id="maxPrice"
                        label="Kč"
                        min={minPrice}
                        max={maxPrice}
                        onChange={() => {}}
                        value={1000}
                    />
                </StyledInputContainer>
            </StyledFilterContainer>
            <StyledFilterContainer>
                <StyledLabel>Typ karavanu</StyledLabel>
                <StyledCheckboxGrid>
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
                </StyledCheckboxGrid>
            </StyledFilterContainer>
            <StyledFilterContainer>
                <StyledLabel>
                    Okamžitá rezervace
                    <Icon name="bolt" />
                </StyledLabel>
                <Dropdown
                    options={dropdownOptions}
                    onChange={() => {}}
                    value={dropdownOptions[0]}
                />
            </StyledFilterContainer>
        </StyledFilters>
    );
};
