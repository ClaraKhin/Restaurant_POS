import PekingDuck from "../assets/images/Peking_Duck.jpeg";
import SiuMai from "../assets/images/Siu_Mai.jpeg";
import MalaXiangGuo from "../assets/images/MalaXiangGuo.jpeg";
import SweetAndSourPork from "../assets/images/Sweet_and_Sour_Pork.jpeg";
import KungPaoChicken from "../assets/images/KungPao_Chicken.jpeg";
import FriedRice from "../assets/images/Fried_Rice.jpeg";
import HotPot from "../assets/images/HotPot.jpeg";
import Wonton from "../assets/images/Wonton_Soup.jpeg";
import ChowMein from "../assets/images/Chow_Mein.jpeg";
import XiaoLongBao from "../assets/images/Xiao_Long_Bao.jpeg";

export const popularDishes = [
    {
        id: 1,
        image: MalaXiangGuo,
        name: "Mala Xiang Guo",
        numberOfOrders: 200,
    },
    {
        id: 2,
        image: HotPot,
        name: "Hot Pot",
        numberOfOrders: 180,
    },
    {
        id: 3,
        image: PekingDuck,
        name: "Peking Duck",
        numberOfOrders: 150,
    },
    {
        id: 4,
        image: XiaoLongBao,
        name: "Xiao Long Bao",
        numberOfOrders: 130,
    },
    {
        id: 5,
        image: SweetAndSourPork,
        name: "Sweet and Sour Pork",
        numberOfOrders: 120,
    },
    {
        id: 6,
        image: KungPaoChicken,
        name: "Kung Pao Chicken",
        numberOfOrders: 100,
    },
    {
        id: 7,
        image: Wonton,
        name: "Wonton Soup",
        numberOfOrders: 95,
    },
    {
        id: 8,
        image: SiuMai,
        name: "Siu Mai",
        numberOfOrders: 85,
    },
    {
        id: 9,
        image: ChowMein,
        name: "Chow Mein",
        numberOfOrders: 75,
    },
    {
        id: 10,
        image: FriedRice,
        name: "Fried Rice",
        numberOfOrders: 70,
    }

]

export const tables = [
    { id: 1, name: "Table 1", status: "booked", initial: "AM" },
    { id: 2, name: "Table 2", status: "booked", initial: "MB" },
    { id: 3, name: "Table 3", status: "available", initial: "JS" },
    { id: 4, name: "Table 4", status: "booked", initial: "HR" },
    { id: 5, name: "Table 5", status: "available", initial: "PL" },
    { id: 6, name: "Table 6", status: "booked", initial: "RT" },
    { id: 7, name: "Table 7", status: "available", initial: "LC" },
    { id: 8, name: "Table 8", status: "booked", initial: "DP" },
    { id: 9, name: "Table 9", status: "available", initial: "NK" },
    { id: 10, name: "Table 10", status: "booked", initial: "SB" }
]