import CatchCopy from "../components/CatchCopy/CatchCopy";
import FirstView from "../components/FirstView/FirstView";
import TopNews from "../components/TopNews/TopNews";
import TopSection from "../components/TopSection/TopSection";
import TopShopList from "../components/TopShopList/TopShopList";
import TopSwiper from "../components/TopSwiper/TopSwiper";
import { catchCopy } from "./list/catchCopy";

import "swiper/css";

export default function Top() {
    return (
        <>
            <FirstView />
            <CatchCopy
                heading={catchCopy[0].header}
                first={catchCopy[0].firstLine}
                second={catchCopy[0].secondLine}
                third={catchCopy[0].theadLine}
                fourth={catchCopy[0].fourthLine}
                last={catchCopy[0].lastLine}
            />
            <TopSwiper />
            <TopSection />
            <TopShopList />
            <TopNews />

            <div>Top</div>
        </>
    );
}
