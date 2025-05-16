import FlashSaleSlider from "./FlashSaleSlider";
import { HomeContainter } from "./Home.styled"
import ImageSlider from "./ImageSlider";
import IphoneSlider from "./IphoneSlider";


const Home = () => {
    return (
        <HomeContainter>
            <ImageSlider/>
            <FlashSaleSlider/>
            {/* <IphoneSlider/> */}

            
        </HomeContainter>
    )
}

export default Home;