import { StyledTrack, StyledThumb, StyledSlider } from "./Slider.styles";

const Thumb = (props: any) => <StyledThumb {...props}></StyledThumb>;

const Track = (props: any, state: any) => (
    <StyledTrack {...props} index={state.index} />
);

type PriceFilterProps = {
    min: number;
    max: number;
    value: number[];
    onAfterChange: (values: number[]) => void;
};

export const Slider = ({
    min,
    max,
    value,
    onAfterChange,
}: PriceFilterProps) => {
    return (
        <StyledSlider
            renderTrack={Track}
            renderThumb={Thumb}
            min={min}
            max={max}
            onAfterChange={(values) => {
                const valuesArray = values as number[];
                onAfterChange(valuesArray);
            }}
            value={value}
        />
    );
};
