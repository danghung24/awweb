import { Outlet } from "react-router-dom";
import { MainLayoutContainer } from "./Mainlayout.styled";
import Header from "./header/Header";
import Content from "./content/content";

const MainLayout = () => {
    return (
        <MainLayoutContainer>
            <Header />
            
            <Content>
                <Outlet />
            </Content>
        </MainLayoutContainer>
    );
};

export default MainLayout;