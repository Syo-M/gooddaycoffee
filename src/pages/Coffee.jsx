import CatchCopy from "../components/CatchCopy/CatchCopy";
import { catchCopy } from "./list/catchCopy";

export default function Coffee() {
    return (
        <>
            <CatchCopy
                heading={catchCopy[1].header}
                first={catchCopy[1].firstLine}
                second={catchCopy[1].secondLine}
                third={catchCopy[1].theadLine}
                fourth={catchCopy[1].fourthLine}
                last={catchCopy[1].lastLine}
            />
            <div>Coffee</div>
        </>
    );
}
