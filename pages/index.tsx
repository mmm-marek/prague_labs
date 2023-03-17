import { useState } from "react";
import Head from "next/head";
import { useCaravans, VehicleType } from "../src/utils/api";
import { Container, PageWrapper } from "../src/components/Layout.styles";
import { Logo } from "../src/components/logo/Logo.component";
import { Button } from "../src/components/button/Button.component";
import { Filters } from "../src/components/filters/Filters.component";
import { CaravanList } from "../src/components/caravan-list/CaravanList.component";

const Home = () => {
    const { caravans, caravansCount, isLoadingCaravans, isErrorCaravans } =
        useCaravans();

    const [currentPriceInterval, setCurrentPriceInterval] = useState<
        [number, number]
    >([1620, 7000]);
    const [immidiateBooking, setImmidiateBooking] = useState(true);
    const [caravanTypes, setCaravanTypes] = useState([
        {
            checked: false,
            value: "Campervan" as VehicleType,
            title: "Campervan",
            description: "Obytka s rozměry osobáku, se kterou dojedete všude.",
        },
        {
            checked: false,
            value: "Intergrated" as VehicleType,
            title: "Integrál",
            description: "Král mezi karavany. Luxus na kolech.",
        },
        {
            checked: false,
            value: "Aove" as VehicleType,
            title: "Vestavba",
            description: "Celý byt geniálně poskládaný do dodávky.",
        },
        {
            checked: false,
            value: "BuiltIn" as VehicleType,
            title: "Přívěs",
            description:
                "Tažný karavan za vaše auto. Od kapkovitých až po rodinné.",
        },
    ]);

    const dropdownOptions = [
        { value: "yes", label: "Ano" },
        { value: "no", label: "Ne" },
    ];

    function handleCaravanTypeChange(clickedCaravanType: VehicleType) {
        setCaravanTypes((currentCaravanTypes) =>
            currentCaravanTypes.map((caravanType) => ({
                ...caravanType,
                checked:
                    caravanType.value === clickedCaravanType
                        ? !caravanType.checked
                        : caravanType.checked,
            }))
        );
    }

    function handleImmidiateBookingChange(selectedValue: string) {
        setImmidiateBooking(selectedValue === "yes");
    }

    function handlePriceIntervalChange(interval: number[]) {
        if (validatePriceInterval(interval)) {
            setCurrentPriceInterval(interval);
        }
    }

    function validatePriceInterval(
        interval: number[]
    ): interval is [number, number] {
        return interval.length === 2;
    }

    if (isLoadingCaravans) return <div>Loading...</div>;

    return (
        <>
            <Head>
                <title>Campiri Light</title>
                <meta name="description" content="Caravan" />
                <link rel="icon" href="/assets/favicon.png" />
            </Head>
            <PageWrapper>
                <Container>
                    <Logo />
                </Container>
                <Filters
                    onPriceIntervalChange={handlePriceIntervalChange}
                    minPrice={100}
                    maxPrice={10000}
                    currentPriceInterval={currentPriceInterval}
                    caravanTypes={caravanTypes}
                    dropdownOptions={dropdownOptions}
                    onCaravanTypeChange={handleCaravanTypeChange}
                    onImmidiateBookingChange={handleImmidiateBookingChange}
                />
                <Container>
                    <CaravanList
                        caravans={caravans}
                        onCaravanClick={() => {}}
                    />
                </Container>
                <Container>
                    <Button text="Načíst další" onClick={() => {}} />
                </Container>
            </PageWrapper>
        </>
    );
};

export default Home;
