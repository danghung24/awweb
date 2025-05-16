import { HeaderContainer } from "./Header.styled";
import LeftHeader from "./LeftHeader";
import CenterHeader from "./Centerheader";
import RightHeader from "./RightHeader"

const Header = () => {
    return (
        <HeaderContainer>
            <LeftHeader />
            <CenterHeader />
            <RightHeader /> 
        </HeaderContainer>
    )
}

export default Header;