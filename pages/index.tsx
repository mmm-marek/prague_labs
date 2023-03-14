import styled from "styled-components";
import { Heading } from "../src/components/LayoutComponents";
import { useCaravans } from "../src/utils/api";
import { Icon } from "../src/components/icon/Icon.component";

const Home = () => {
    const { caravans, caravansCount, isLoadingCaravans, isErrorCaravans } =
        useCaravans();
    return (
        <PageWrapper>
            <Heading>Prague Labs testovací zadání</Heading>
            <Icon name="bed" />
        </PageWrapper>
    );
};

const PageWrapper = styled.div``;

export default Home;
