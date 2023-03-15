import { useCaravans } from "../src/utils/api";
import { Container, PageWrapper } from "../src/components/Layout.styles";
import { Logo } from "../src/components/logo/Logo.component";
import { PriceFilter } from "../src/components/price-filter/PriceFilter.component";
import { CaravanCard } from "../src/components/caravan-card/CaravanCard.component";
import { Button } from "../src/components/button/Button.component";
import { Checkbox } from "../src/components/checkbox/Checkbox.component";
import Head from "next/head";

const Home = () => {
    const { caravans, caravansCount, isLoadingCaravans, isErrorCaravans } =
        useCaravans();
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
                <Container>
                    <PriceFilter
                        min={100}
                        max={10000}
                        defaultMin={1200}
                        defaultMax={7600}
                    />
                    <CaravanCard caravan={caravans[0]} />
                    <Button
                        text="Načíst další"
                        onClick={() => {
                            console.log("click");
                        }}
                    />
                    <Checkbox
                        checked={false}
                        id="campervan"
                        title="Campervan"
                        description="Obytka s rozměry osobáku, se kterou dojedete všude."
                        onChange={() => {}}
                    />
                </Container>
            </PageWrapper>
        </>
    );
};

export default Home;
