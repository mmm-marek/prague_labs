import { useCaravans } from "../src/utils/api";
import { Container, PageWrapper } from "../src/components/LayoutComponents";
import { Logo } from "../src/components/logo/Logo.component";

const Home = () => {
    const { caravans, caravansCount, isLoadingCaravans, isErrorCaravans } =
        useCaravans();
    return (
        <PageWrapper>
            <Container>
                <Logo />
            </Container>
        </PageWrapper>
    );
};

export default Home;
