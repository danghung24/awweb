import { ContentContainer } from "./content.styled";


const Content = ({ children }) => {
    return (
        <ContentContainer>
            {children}
        </ContentContainer>
    );
};

export default Content;
