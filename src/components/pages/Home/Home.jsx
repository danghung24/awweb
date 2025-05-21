import AccSlider from "./accessory";
import EarSlider from "./earphone";
import FlashSaleSlider from "./FlashSaleSlider";
import { HomeContainter } from "./Home.styled";
import ImageSlider from "./ImageSlider";
import IpadSlider from "./Ipad";
import IphoneSlider from "./IphoneSlider";
import MacSlider from "./MacSlider";
import NewsSlider from "./News";



const Home = () => {
    return (
        <HomeContainter>
            <ImageSlider/>
            <FlashSaleSlider/> 
            <IphoneSlider />
            <MacSlider/>
            <IpadSlider/>
            <EarSlider/>
            <AccSlider/>
            <NewsSlider/>

            
        </HomeContainter>
    )
}

export default Home;