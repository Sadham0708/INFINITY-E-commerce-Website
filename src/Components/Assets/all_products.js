import p1_img from "./p1_img.png"
import p2_img from "./p2_img.png"
import p3_img from "./p3_img.png"
import p4_img from "./p4_img.png"
import p5_img from "./p5_img.png"
import p6_img from "./p6_img.png"
import p7_img from "./p7_img.png"
import p8_img from "./p8_img.png"
import p9_img from "./p9_img.png"
import p10_img from "./p10_img.png"
import p11_img from "./p11_img.png"
import p12_img from "./p12_img.png"
import p13_img from "./p13_img.png"
import p14_img from "./p14_img.png"
import p15_img from "./p15_img.png"
import p16_img from "./p16_img.png"
import p17_img from "./p17_img.png"
import p18_img from "./p18_img.png"
import p19_img from "./p19_img.png"
import p20_img from "./p20_img.png"
import p21_img from "./p21_img.png"
import p22_img from "./p22_img.png"
import p23_img from "./p23_img.png"
import p24_img from "./p24_img.png"
import p25_img from "./p25_img.png"
import p26_img from "./p26_img.png"
import p27_img from "./p27_img.png"
import p28_img from "./p28_img.png"
import p29_img from "./p29_img.png"
import p30_img from "./p30_img.png"
import p31_img from "./p31_img.png"
import p32_img from "./p32_img.png"
import p33_img from "./p33_img.png"
import p34_img from "./p34_img.png"
import p35_img from "./p35_img.png"
import p36_img from "./p36_img.png"


let all_product = [
    {id: 1, 
        name: "Product 1 Name", 
        category: "women", 
        image: p1_img, 
        new_price: 50.0, 
        old_price: 80.5},
    {id: 2, 
        name: "Product 2 Name", 
        category: "women", 
        image: p2_img, 
        new_price: 59.04, 
        old_price: 76.16},
    {id: 3, 
        name: "Product 3 Name", 
        category: "women", 
        image: p3_img, 
        new_price: 68.61, 
        old_price: 144.91},
    {id: 4, 
        name: "Product 4 Name", 
        category: "women", 
        image: p4_img, 
        new_price: 79.15, 
        old_price: 80.83},
    {id: 5, 
        name: "Product 5 Name", 
        category: "women", 
        image: p5_img, 
        new_price: 77.23, 
        old_price: 96.1},
    {id: 6, 
        name: "Product 6 Name", 
        category: "women", 
        image: p6_img, 
        new_price: 54.89, 
        old_price: 82.65},
    {id: 7, 
        name: "Product 7 Name", 
        category: "women", 
        image: p7_img, 
        new_price: 94.73, 
        old_price: 109.91},
    {id: 8, 
        name: "Product 8 Name", 
        category: "women", 
        image: p8_img, 
        new_price: 63.27, 
        old_price: 108.56},
    {id: 9, 
        name: "Product 9 Name", 
        category: "women", 
        image: p9_img, 
        new_price: 75.51, 
        old_price: 115.19},
    {id: 10,
         name: "Product 10 Name", 
         category: "women", 
         image: p10_img, 
         new_price: 49.87,
         old_price: 92.48},
    {id: 11,
         name: "Product 11 Name", 
         category: "women", 
         image: p11_img, 
         new_price: 106.25, 
         old_price: 148.42},
    {id: 12,
         name: "Product 12 Name", 
         category: "women", 
         image: p12_img, 
         new_price: 40.29, 
         old_price: 75.14},
    {id: 13,
         name: "Product 13 Name", 
         category: "mens", 
         image: p13_img, 
         new_price: 61.38, 
         old_price: 98.22},
    {id: 14,
         name: "Product 14 Name", 
         category: "mens", 
         image: p14_img, 
         new_price: 99.75, 
         old_price: 140.48},
    {id: 15,
         name: "Product 15 Name", 
         category: "mens", 
         image: p15_img, 
         new_price: 54.92, 
         old_price: 105.65},
    {id: 16,
         name: "Product 16 Name", 
         category: "mens", 
         image: p16_img, 
         new_price: 63.81, 
         old_price: 77.99},
    {id: 17,
         name: "Product 17 Name", 
         category: "mens", 
         image: p17_img, 
         new_price: 95.03, 
         old_price: 120.77},
    {id: 18,
         name: "Product 18 Name", 
         category: "mens", 
         image: p18_img, 
         new_price: 68.59, 
         old_price: 107.31},
    {id: 19,
         name: "Product 19 Name", 
         category: "mens", 
         image: p19_img, 
         new_price: 55.37, 
         old_price: 106.84},
    {id: 20,
         name: "Product 20 Name", 
         category: "mens", 
         image: p20_img, 
         new_price: 82.04, 
         old_price: 125.89},
    {id: 21,
         name: "Product 21 Name", 
         category: "mens", 
         image: p21_img, 
         new_price: 71.81, 
         old_price: 88.27},
    {id: 22,
         name: "Product 22 Name", 
         category: "mens", 
         image: p22_img, 
         new_price: 43.32, 
         old_price: 67.98},
    {id: 23,
         name: "Product 23 Name", 
         category: "mens", 
         image: p23_img, 
         new_price: 64.11, 
         old_price: 94.64},
    {id: 24,
         name: "Product 24 Name", 
         category: "mens", 
         image: p24_img, 
         new_price: 58.64, 
         old_price: 85.27},
    {id: 25,
         name: "Product 25 Name", 
         category: "kids", 
         image: p25_img, 
         new_price: 99.88, 
         old_price: 132.01},
     {id: 26,
          name: "Product 27 Name", 
          category: "kids", 
          image: p26_img, 
          new_price: 81.12, 
          old_price: 106.09},
    {id: 27,
         name: "Product 27 Name", 
         category: "kids", 
         image: p27_img, 
         new_price: 81.12, 
         old_price: 106.09},
    {id: 28,
         name: "Product 28 Name", 
         category: "kids", 
         image: p28_img, 
         new_price: 79.49, 
         old_price: 107.87},
    {id: 29,
         name: "Product 29 Name", 
         category: "kids", 
         image: p29_img, 
         new_price: 112.19,
         old_price: 138.72},
    {id: 30,
         name: "Product 30 Name", 
         category: "kids", 
         image: p30_img, 
         new_price: 74.32, 
         old_price: 101.43},
    {id: 31,
         name: "Product 31 Name", 
         category: "kids", 
         image: p31_img, 
         new_price: 46.88, 
         old_price: 87.32},
    {id: 32,
         name: "Product 32 Name", 
         category: "kids", 
         image: p32_img, 
         new_price: 93.47, 
         old_price: 111.83},
    {id: 33,
         name: "Product 33 Name", 
         category: "kids", 
         image: p33_img, 
         new_price: 75.81, 
         old_price: 112.66},
    {id: 34,
         name: "Product 34 Name", 
         category: "kids", 
         image: p34_img, 
         new_price: 89.21, 
         old_price: 108.76},
    {id: 35,
         name: "Product 35 Name", 
         category: "kids", 
         image: p35_img, 
         new_price: 48.65, 
         old_price: 101.93},
    {id: 36,
         name: "Product 36 Name", 
         category: "kids", 
         image: p36_img, 
         new_price: 116.54, 
         old_price: 83.14},
];

export default all_product