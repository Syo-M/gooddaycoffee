import shop1 from "@/assets/top-shop1-min.jpg";
import shop2 from "@/assets/top-shop2-min.jpg";
import shop3 from "@/assets/top-shop3-min.jpg";

export const shopList = [
    {
        id: "kobe",
        imgSrc: shop1,
        imgAlt: "Shop KOBE",
        name: "KOBE",
        info: [
            { label: "PLACE", value: "神戸市中央区元町350-20-20" },
            { label: "TEL", value: "078-123-7890" },
            { label: "OPEN", value: "11:00" },
            { label: "CLOSE", value: "21:00(L.O 20:30)" },
        ],
        mapUrl: "https://maps.app.goo.gl/g3xhspHRjoanDKvZ9",
    },
    {
        id: "OSAKA",
        imgSrc: shop2,
        imgAlt: "Shop OSAKA",
        name: "OSAKA",
        info: [
            { label: "PLACE", value: "大阪市北区麹町1丁目\n24-1 グランフロント 1F" },
            { label: "TEL", value: "06-4321-7654" },
            { label: "OPEN", value: "11:00" },
            { label: "CLOSE", value: "21:00 (L.O 20:30)" },
        ],
        mapUrl: "https://maps.app.goo.gl/EvdgTB3stFKixsfe8",
    },
    {
        id: "KYOTO",
        imgSrc: shop3,
        imgAlt: "Shop KYOTO",
        name: "KYOTO",
        info: [
            { label: "PLACE", value: "京都市中京区三条油小路\n123-20 キャピタル三条 2F" },
            { label: "TEL", value: "075-555-2468" },
            { label: "OPEN", value: "11:00" },
            { label: "CLOSE", value: "21:00 (L.O 20:30)" },
        ],
        mapUrl: "https://maps.app.goo.gl/GttEwKWBsWDrzzFR7",
    },
];
