import { LeftHeaderContainer } from "./LeftHeader.styled";
import { Link } from "react-router-dom";


const LeftHeader = () => {
    return (
        <LeftHeaderContainer>
            <Link to="/">
                <div className="logo-container">
                    <div className="logo">
                        <img src="images/logo_cart.svg" alt="" />
                    </div>
                    <div className="logo-text">KDH</div>
                </div>
            </Link>
        </LeftHeaderContainer>
    )
};

export default LeftHeader;