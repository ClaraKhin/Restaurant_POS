import PekingDuck from "../assets/images/Peking_Duck.png";
import SiuMai from "../assets/images/Siu_Mai.png";
import MalaXiangGuo from "../assets/images/MalaXiangGuo.jpeg";
import SweetAndSourPork from "../assets/images/Sweet_Sour_Pork.png";
import KungPaoChicken from "../assets/images/KungPao_Chicken.png";
import FriedRice from "../assets/images/Fried_Rice.png";
import HotPot from "../assets/images/HotPot.jpeg";
import Wonton from "../assets/images/Wonton_Soup.png";
import ChowMein from "../assets/images/Chow_Mein.png";
import XiaoLongBao from "../assets/images/Xiao_Long_Bao.png";

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

export const startersItem = [
    {
        id: 1,
        name: "Xiao Long Bao (小笼包)",
        price: 10,
        category: "Non-Vegetarian"
    },
    {
        id: 2,
        name: "Siu Mai (烧卖)",
        price: 8,
        category: "Non-Vegetarian"
    },
    {
        id: 3,
        name: "Cucumber Salad (凉拌黄瓜)",
        price: 5,
        category: "Vegetarian"
    },
    {
        id: 4,
        name: "Wood Ear Mushroom Salad (凉拌木耳)",
        price: 7,
        category: "Vegetarian"
    },
    {
        id: 5,
        name: "Spring Rolls (春卷)",
        price: 7,
        category: "Non-Vegetarian"
    },
    {
        id: 6,
        name: "BBQ Spare Ribs",
        price: 12,
        category: "Non-Vegetarian"
    },
    {
        id: 7,
        name: "Pan-Fried or Steamed Dumplings (锅贴 / 水饺)",
        price: 8,
        category: "Non-Vegetarian"
    },
    {
        id: 8,
        name: "Salt & Pepper Calamari/Shrimp	",
        price: 13,
        category: "Non-Vegetarian"
    }
];

export const mainCourse = [
    {
        id: 1,
        name: "Peking Duck",
        price: 45,
        category: "Non-Vegetarian"
    },
    {
        id: 2,
        name: "Sweet and Sour Pork",
        price: 15,
        category: "Non-Vegetarian"
    },
    {
        id: 3,
        name: "Hot Pot",
        price: 30,
        category: "Non-Vegetarian"
    },
    {
        id: 4,
        name: "Kung Pao Chicken",
        price: 15,
        category: "Non-Vegetarian"
    },
    {
        id: 5,
        name: "Mala Xiang Guo",
        price: 20,
        category: "Non-Vegetarian"
    },
    {
        id: 6,
        name: "Char Siu",
        price: 19,
        category: "Non-Vegetarian"
    },
    {
        id: 7,
        name: "Beef with Broccoli",
        price: 16,
        category: "Non-Vegetarian"
    },
    {
        id: 8,
        name: "Tofu and Mushrooms clay pot",
        price: 13,
        category: "Vegetarian"
    },
    {
        id: 9,
        name: "Stir-Fried Vegetables",
        price: 12,
        category: "Vegetarian"
    },
    {
        id: 10,
        name: "Mapo Tofu",
        price: 10,
        category: "Non-Vegetarian"
    },
    {
        id: 11,
        name: "Fried Rice",
        price: 12,
        category: "Non-Vegetarian"
    }
];

export const beverages = [
    {
        id: 1,
        name: "Iced Chrysanthemum Tea (菊花茶)",
        price: 5,
        category: "Cold"
    },
    {
        id: 2,
        name: "Hot Soy Milk (热豆浆)",
        price: 3,
        category: "Hot"
    },
    {
        id: 3,
        name: "Bubble Milk Tea (珍珠奶茶)",
        price: 6,
        category: "Cold"
    },
    {
        id: 4,
        name: "Lemon Honey Water (柠檬蜂蜜水)",
        price: 4,
        category: "Cold"
    },
    {
        id: 5,
        name: "Sour Plum Drink (酸梅汤, Suanmeitang)",
        price: 6,
        category: "Cold"
    },
    {
        id: 6,
        name: "Fruit Tea (水果茶)",
        price: 5,
        category: "Cold"
    },
    {
        id: 7,
        name: "Ginger Brown Sugar Tea (姜茶)",
        price: 3,
        category: "Hot"
    },
    {
        id: 8,
        name: "Milk Tea (Hot Version of Bubble Tea)",
        price: 5,
        category: "Hot"
    },
    {
        id: 9,
        name: "Almond Milk Tea (杏仁茶) ",
        price: 5,
        category: "Hot"
    }
];

export const soups = [
    {
        id: 1,
        name: "Wonton Soup (云吞汤) ",
        price: 14,
        category: "Non-Vegetarian"
    },
    {
        id: 2,
        name: "Egg Drop Soup (蛋花汤)",
        price: 10,
        category: "Vegetarian"
    },
    {
        id: 3,
        name: "Hot and Sour Soup (酸辣汤)",
        price: 12,
        category: "Vegetarian"
    },
    {
        id: 4,
        name: "Chinese Herbal Chicken Soup (老火汤)",
        price: 18,
        category: "Non-Vegetarian"
    },
    {
        id: 5,
        name: "Seafood Tofu Soup (海鲜豆腐羹)",
        price: 20,
        category: "Non-Vegetarian"
    }
];

export const desserts = [
    {
        id: 1,
        name: "Mango Sago Pomelo (杨枝甘露)",
        price: 6,
        category: "Vegetarian"
    },
    {
        id: 2,
        name: "Sesame Balls (Jian Dui, 芝麻球) ",
        price: 4,
        category: "Vegetarian"
    },
    {
        id: 3,
        name: "Steamed Egg Custard (炖蛋)",
        price: 5,
        category: "Vegetarian"
    },
    {
        id: 4,
        name: "Sweet Red Bean Soup (红豆汤)",
        price: 5,
        category: "Vegetarian"
    },
    {
        id: 5,
        name: "Black Sesame Soup (芝麻糊)",
        price: 5,
        category: "Vegetarian"
    },
    {
        id: 6,
        name: "Fried Ice Cream (炸冰淇淋)",
        price: 6,
        category: "Vegetarian"
    },
    {
        id: 7,
        name: "Chilled Coconut Jelly (椰汁糕)",
        price: 5,
        category: "Vegetarian"
    }
];

export const pizzas = [
    {
        id: 1,
        name: "Cheese Pizza",
        price: 10,
        category: "Vegetarian"
    },
    {
        id: 2,
        name: "Pepperoni Pizza",
        price: 12,
        category: "Non-Vegetarian"
    },
    {
        id: 3,
        name: "Hawaiian Pizza",
        price: 12,
        category: "Non-Vegetarian"
    },
    {
        id: 4,
        name: "BBQ Chicken Pizza",
        price: 13,
        category: "Non-Vegetarian"
    },
    {
        id: 5,
        name: "Mushroom Pizza",
        price: 10,
        category: "Vegetarian"
    }
];

export const alcoholicDrinks = [
    {
        id: 1,
        name: "Baijiu (白酒)",
        price: 10,
        category: "Alcoholic"
    },
    {
        id: 2,
        name: "Huangjiu (黄酒)",
        price: 6,
        category: "Alcoholic"
    },
    {
        id: 3,
        name: "Chinese Beer",
        price: 5,
        category: "Alcoholic"
    },
    {
        id: 4,
        name: "Lychee Martini",
        price: 9,
        category: "Alcoholic"
    },
    {
        id: 5,
        name: "Ginger Mojito ",
        price: 8,
        category: "Alcoholic"
    },
    {
        id: 6,
        name: "Wine",
        price: 7,
        category: "Alcoholic"
    }
];

export const salads = [
    {
        id: 1,
        name: "Cucumber Salad (凉拌黄瓜)",
        price: 5,
        category: "Vegetarian"
    },
    {
        id: 2,
        name: "Wood Ear Mushroom Salad (凉拌木耳)",
        price: 7,
        category: "Vegetarian"
    },
    {
        id: 3,
        name: "Napa Cabbage & Glass Noodle Salad (凉拌粉丝白菜)",
        price: 6,
        category: "Vegetarian"
    },
    {
        id: 4,
        name: "Century Egg & Tofu Salad (皮蛋豆腐)",
        price: 7,
        category: "Vegetarian"
    },
    {
        id: 5,
        name: "Shredded Carrot & Daikon Salad (凉拌萝卜丝胡萝卜丝)",
        price: 5,
        category: "Vegetarian"
    },
    {
        id: 6,
        name: "Green Onion & Bean Curd Skin Salad (凉拌豆腐皮)",
        price: 6,
        category: "Vegetarian"
    }
];


export const menus = [
    { id: 1, name: "Starters", bgColor: "#b73e3e", icon: "🍲", items: startersItem },
    { id: 2, name: "Main Course", bgColor: "#5b45b0", icon: "🍛", items: mainCourse },
    { id: 3, name: "Beverages", bgColor: "#7f167f", icon: "🍹", items: beverages },
    { id: 4, name: "Soups", bgColor: "#735f32", icon: "🍜", items: soups },
    { id: 5, name: "Desserts", bgColor: "#1d2569", icon: "🍰", items: desserts },
    { id: 6, name: "Pizzas", bgColor: "#285430", icon: "🍕", items: pizzas },
    { id: 7, name: "Alcoholic Drinks", bgColor: "#b73e3e", icon: "🍺", items: alcoholicDrinks },
    { id: 8, name: "Salads", bgColor: "#5b45b0", icon: "🥗", items: salads }
]
