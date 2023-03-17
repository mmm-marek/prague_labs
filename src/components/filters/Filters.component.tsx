import type { VehicleType } from "../../utils/api";
import { Checkbox } from "../checkbox/Checkbox.component";
import { Dropdown } from "../dropdown/Dropdown.component";
import { Icon } from "../icon/Icon.component";
import { Input } from "../input/Input.component";
import { Slider } from "../slider/Slider.component";
import {
    StyledCheckboxGrid,
    StyledFilterContainer,
    StyledInputContainer,
    StyledLabel,
} from "./Filters.styles";

type FiltersProps = {
    onPriceChange?: ([min, max]: [number, number]) => void;
    onCaravanTypeChange?: (caravanType: VehicleType) => void;
    onImmidiateBookingChange?: (immidiateBooking: boolean) => void;
};

export const Filters = ({ onCaravanTypeChange }: FiltersProps) => {
    const minPrice = 100;
    const maxPrice = 1000;

    const caravanTypes = [
        {
            value: "Campervan",
            title: "Campervan",
            description: "Obytka s rozměry osobáku, se kterou dojedete všude.",
        },
        {
            value: "Intergrated",
            title: "Integrál",
            description: "Král mezi karavany. Luxus na kolech.",
        },
        {
            value: "Alcove",
            title: "Vestavba",
            description: "Celý byt geniálně poskládaný do dodávky.",
        },
        {
            value: "BuiltIn",
            title: "Přívěs",
            description:
                "Tažný karavan za vaše auto. Od kapkovitých až po rodinné.",
        },
    ];

    const dropdownOptions = [
        { value: "yes", label: "Ano" },
        { value: "no", label: "Ne" },
    ];

    return (
        <div>
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
                            checked={false}
                            onChange={() => {}}
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
        </div>
    );
};
