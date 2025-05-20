import FlashSaleSlider from "./FlashSaleSlider";
import { HomeContainter } from "./Home.styled";
import ImageSlider from "./ImageSlider";
import IphoneSlider from "./IphoneSlider";
import MacSlider from "./MacSlider";



const Home = () => {
    return (
        <HomeContainter>
            <ImageSlider/>
            <FlashSaleSlider/> 
            <IphoneSlider />
            <MacSlider/>

            
        </HomeContainter>
    )
}

export default Home;