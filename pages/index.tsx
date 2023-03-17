import Head from "next/head";
import { useCaravans } from "../src/utils/api";
import { Container, PageWrapper } from "../src/components/Layout.styles";
import { Logo } from "../src/components/logo/Logo.component";
import { PriceFilter } from "../src/components/price-filter/PriceFilter.component";
import { CaravanCard } from "../src/components/caravan-card/CaravanCard.component";
import { Button } from "../src/components/button/Button.component";
import { Checkbox } from "../src/components/checkbox/Checkbox.component";
import { Filters } from "../src/components/filters/Filters.component";
import { CaravanList } from "../src/components/caravan-list/CaravanList.component";

const Home = () => {
    const { caravans, caravansCount, isLoadingCaravans, isErrorCaravans } =
        useCaravans();
    if (isLoadingCaravans) return <div>Loading...</div>;

    const options = [
        { value: "yes", label: "Ano" },
        { value: "no", label: "Ne" },
    ];
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
                <Filters />
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
