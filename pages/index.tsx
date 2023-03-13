import styled from "styled-components";
import { Heading } from "../src/components/LayoutComponents";
import { useCaravans } from "../src/utils/api";

const Home = () => {
    const { caravans, caravansCount, isLoadingCaravans, isErrorCaravans } =
        useCaravans();
    return (
        <PageWrapper>
            <Heading>Prague Labs testovací zadání</Heading>
        </PageWrapper>
    );
};

const PageWrapper = styled.div``;

export default Home;
