import { useState } from "react";
import { Slider } from "../slider/Slider.component";
import { Input } from "../input/Input.component";

type PriceFilterProps = {
    min: number;
    max: number;
    defaultMin: number;
    defaultMax: number;
};

export const PriceFilter = ({
    min,
    max,
    defaultMax,
    defaultMin,
}: PriceFilterProps) => {
    const [values, setValues] = useState([defaultMin, defaultMax]);

    return (
        <div>
            <label>Cena za den</label>
            <Slider
                min={100}
                max={10000}
                value={values}
                onAfterChange={(values) => setValues(values)}
            />
            <div>
                <Input
                    id="min"
                    max={max}
                    placeholder="1200"
                    min={min}
                    label="Kč"
                    onChange={(e) => {
                        if (isNaN(Number(e.target.value))) return;

                        const validatedValue =
                            Number(e.target.value) < min
                                ? min
                                : Number(e.target.value);
                        setValues([validatedValue, values[1]]);
                    }}
                    value={values[0]}
                />
                <Input
                    id="max"
                    placeholder="1200"
                    min={min}
                    max={max}
                    label="Kč"
                    onChange={(e) => {
                        if (isNaN(Number(e.target.value))) return;

                        const validatedValue =
                            Number(e.target.value) > max
                                ? max
                                : Number(e.target.value);

                        setValues([values[0], validatedValue]);
                    }}
                    value={values[1]}
                />
            </div>
        </div>
    );
};
