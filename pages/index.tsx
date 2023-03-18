import { useState } from "react";
import Head from "next/head";
import { Caravan, useCaravans, VehicleType } from "../src/utils/api";
import { Container, PageWrapper } from "../src/components/Layout.styles";
import { Logo } from "../src/components/logo/Logo.component";
import { Button } from "../src/components/button/Button.component";
import { Filters } from "../src/components/filters/Filters.component";
import { CaravanList } from "../src/components/caravan-list/CaravanList.component";
import { CaravanLightbox } from "../src/components/caravan-lightbox/CaravanLightbox.component";

const Home = () => {
    const { caravans, caravansCount, isLoadingCaravans, isErrorCaravans } =
        useCaravans();

    const [currentPriceInterval, setCurrentPriceInterval] = useState<
        [number, number]
    >([100, 10000]);
    const [immidiateBooking, setImmidiateBooking] = useState(true);
    const [caravanTypes, setCaravanTypes] = useState([
        {
            checked: true,
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

    const [numberOfShownCaravans, setNumberOfShownCaravans] = useState(6);
    const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
    const [lightboxImages, setLightboxImages] = useState<
        {
            src: string;
            alt: string;
        }[]
    >([]);

    const dropdownOptions = [
        { value: "yes", label: "Ano" },
        { value: "no", label: "Ne" },
    ];

    const filteredCaravans = caravans.filter((caravan) => {
        const caravanIsAffordable =
            caravan.price >= currentPriceInterval[0] &&
            caravan.price <= currentPriceInterval[1];
        if (!caravanIsAffordable) return false;

        const caravanIsOfSelectedType = caravanTypes.some(
            (caravanType) =>
                caravanType.checked && caravanType.value === caravan.vehicleType
        );
        if (!caravanIsOfSelectedType) return false;

        const caravanIsAvailableForImmidiateBooking =
            immidiateBooking === caravan.instantBookable;
        if (!caravanIsAvailableForImmidiateBooking) return false;

        return true;
    });

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

    function handleCloseLightbox() {
        setLightboxIsOpen(false);
        setLightboxImages([]);
    }

    function handleCaravanClick(caravan: Caravan) {
        setLightboxImages(
            caravan.pictures.map((picture) => ({
                src: picture,
                alt: "caravan",
            }))
        );
        setLightboxIsOpen(true);
    }

    function loadMoreCaravans() {
        setNumberOfShownCaravans(
            (currentNumberOfShownCaravans) => currentNumberOfShownCaravans + 6
        );
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
                    dropdownValue={
                        immidiateBooking
                            ? dropdownOptions[0]
                            : dropdownOptions[1]
                    }
                    dropdownOptions={dropdownOptions}
                    onCaravanTypeChange={handleCaravanTypeChange}
                    onImmidiateBookingChange={handleImmidiateBookingChange}
                />
                <Container>
                    <CaravanList
                        caravans={filteredCaravans.slice(
                            0,
                            numberOfShownCaravans
                        )}
                        onCaravanClick={handleCaravanClick}
                    />
                </Container>
                {numberOfShownCaravans < filteredCaravans.length && (
                    <Container flex center>
                        <Button
                            text="Načíst další"
                            onClick={loadMoreCaravans}
                        />
                    </Container>
                )}
                <CaravanLightbox
                    isOpen={lightboxIsOpen}
                    images={lightboxImages}
                    onClose={handleCloseLightbox}
                />
            </PageWrapper>
        </>
    );
};

export default Home;
