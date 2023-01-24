// jordan photos

import Jordan1 from "../data/photos/Jordan1/jordan1small.jpg";
import Jordan2 from "../data/photos/Jordan1/jordan2small.jpg";
import Jordan3 from "../data/photos/Jordan1/jordan3small.jpg";

// air force 1 photos

import Force1 from "../data/photos/AirForce1/force1small.jpg";
import Force2 from "../data/photos/AirForce1/force2small.jpg";
import Force3 from "../data/photos/AirForce1/force3small.jpg";

// fila photos

import Disruptor1 from "../data/photos/FilaDisruptor/fila1small.jpg";
import Disruptor2 from "../data/photos/FilaDisruptor/fila2small.jpg";
import Disruptor3 from "../data/photos/FilaDisruptor/fila3small.jpg";

// vans photos

import Vans1 from "../data/photos/Vans/vans1small.jpg";
import Vans2 from "../data/photos/Vans/vans2small.jpg";
import Vans3 from "../data/photos/Vans/vans3small.jpg";

//  yeezy photos

import Yeezy1 from "../data/photos/Yeezy/yeezy1small.jpg";
import Yeezy2 from "../data/photos/Yeezy/yeezy2small.jpg";
import Yeezy3 from "../data/photos/Yeezy/yeezy3small.jpg";

class Product {
  constructor(id, name, producer, description, price, gender, photos) {
    this.id = id;
    this.name = name;
    this.producer = producer;
    this.description = description;
    this.price = price;
    this.gender = gender;
    this.photos = photos;
  }
}

const data = {
  sneakers: [
    new Product(
      "21d23790-ce5c-4b33-be29-14e6b483f14c",
      "Air Jordan 1",
      "Nike",
      "The Air Jordan 1 High debuted in 1985 as the first signature sneaker developed by Nike for Michael Jordan. The Peter Moore designed performance basketball sneaker featured a simple Nike Dunk inspired design that incorporated the Nike Swoosh and the Jordan Wings logo and featured Nike Air. The black and red colorway of the Air Jordan 1 High was famously banned by the NBA for not adhering to the dress code. The Air Jordan 1 High was first retroed in 1994 and has seen hundreds of retro releases since.",
      "180.00",
      "men",
      [Jordan1, Jordan2, Jordan3]
    ),
    new Product(
      "14e914ae-93ba-464c-9d57-bcd93d4b96c3",
      "Air Force 1",
      "Nike",
      "The Nike Air Force 1 remains a popular retro shoe to this day. The Air Force 1 features an upper that is most frequently dressed in leather, a large Swoosh across the lateral and medial sides, perforated toe boxes, metal lace dubraes, and an Air-encapsulated midsole with signature “AIR” text near the rear.",
      "150.00",
      "unisex",
      [Force1, Force2, Force3]
    ),
    new Product(
      "2ae6c35c-2cba-4eae-a020-a6c81181bbc1",
      "Disruptor",
      "Fila",
      "With Fila Disruptor we feel like we're back in the '90s again. Whether you're discovering it for the first time or celebrating the comeback of the sporty retro look with us, Fila Disruptor is definitely a must-have for all fans of vintage footwear. There's no other shoe like it. The extra-thick sole makes the sneaker stand out and gives you a sense of walking on clouds. The refined details, such as the special lacing, the brand logo on the side of the shoe and the tongue, make Fila Disruptor unique. ",
      "70.00",
      "women",
      [Disruptor1, Disruptor2, Disruptor3]
    ),
    new Product(
      "e82d1e88-c969-4948-b244-8a999a2c9222",
      "Old Skool Classic",
      "Vans",
      "One of the most iconic designs in a shop full of them. What started in 1977 as the Vans #36, introducing the now iconic Vans Sidestripe, became the Old Skool. They say the Classics never go out of style, and Vans Old Skool Black & White is further proof.",
      "80.00",
      "women",
      [Vans1, Vans2, Vans3]
    ),
    new Product(
      "d4ba9ee0-dff5-44a8-a4e2-4cbd4906aa6b",
      "Yeezy Boost",
      "adidas",
      "Yeezy is a line of sports sneakers and apparel for men. The collection was launched in 2009. It is created by American rapper, Kanye West, as part of the Adidas brand. The duo's latest offering, the Yeezy Boost sneakers, are enduringly popular.",
      "220.00",
      "men",
      [Yeezy1, Yeezy2, Yeezy3]
    ),
  ],
};

export default data;
