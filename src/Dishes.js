import img1 from "./animation menu imgs/seafood-dish.webp"
import img2 from "./animation menu imgs/mixed-fruits-in-a-plate.webp"
import img3 from "./animation menu imgs/favpng_fattoush-vegetarian-cuisine-spinach-salad-asian-cuisine-indonesian-cuisine.webp"
import img4 from "./animation menu imgs/food-plate-top-view.webp"
const imgs =[img1, img2, img3, img4]
export const dishes = [
    {
      img:imgs[0],
      index:1,
      dishSpanName:"Mixed",
      dishH1Name:"Sea Food",
      rating:{
      number:"4.9",
      chefName:"Chef Feny",
      chefInfo:"an exprienced chef in sea food for 10 years",
      dishInfo:"Enjoy our sea food dish which includes more than 10 kinds of different fishes , shrimps and lobsters !",
      likes:96,
      disLikes:25
    },
    color:"33 150 243"
  },
    {
      img:imgs[1],
      index:2,
      dishSpanName:"Mixed",
      dishH1Name:"Fruits",
      rating:{
      number:"4.2",
      chefName:"Chef Sally",
      chefInfo:"an exprienced chef in fruit salad for 3 years",
      dishInfo:"Enjoy our mixed fruit salad dish which includes more than 6 kinds of different fruits !",
      likes:45,
      disLikes:25
    },
    color:"244 67 54"
  },
    {
      img:imgs[2],
      index:3,
      dishSpanName:"Vegetarian",
      dishH1Name:"Fattoush",
      rating:{
      number:"3.9",
      chefName:"Chef Montaser",
      chefInfo:"an exprienced syrian chef in arabian food for 15 years",
      dishInfo:"Enjoy our fattoush dish which made specially for vegetarians, this dish doesn't include any meat at all !",
      likes:58,
      disLikes:14
    },
    color:"139 195 74"
  },
    {
      img:imgs[3],
      index:4,
      dishSpanName:"Healthy",
      dishH1Name:"Breakfast",
      rating:{
      number:"5.7",
      chefName:"Chef Ahmed",
      chefInfo:"an exprienced chef in Healthy food for 2 years",
      dishInfo:"Enjoy our healthy breakfast dish which includes 32g of protein and a less than 5g of carbs !",
      likes:125,
      disLikes:24
    },
    color:"255 193 7"
  }
]