import { v4 as uuidv4 } from "uuid";

// jordan photos

import Jordan1 from "../data/photos/Jordan1/jordan1small.jpg";
import Jordan1Large from "../data/photos/Jordan1/jordan1large.jpg";
import Jordan2 from "../data/photos/Jordan1/jordan2small.jpg";
import Jordan2Large from "../data/photos/Jordan1/jordan2large.jpg";
import Jordan3 from "../data/photos/Jordan1/jordan3small.jpg";
import Jordan3Large from "../data/photos/Jordan1/jordan3large.jpg";

// air force 1 photos

import Force1 from "../data/photos/AirForce1/force1small.jpg";
import Force1Large from "../data/photos/AirForce1/force1large.jpg";
import Force2 from "../data/photos/AirForce1/force2small.jpg";
import Force2Large from "../data/photos/AirForce1/force2large.jpg";
import Force3 from "../data/photos/AirForce1/force3small.jpg";
import Force3Large from "../data/photos/AirForce1/force3large.jpg";

// fila photos

import Disruptor1 from "../data/photos/FilaDisruptor/fila1small.jpg";
import Disruptor1Large from "../data/photos/FilaDisruptor/fila1large.jpg";
import Disruptor2 from "../data/photos/FilaDisruptor/fila2small.jpg";
import Disruptor2Large from "../data/photos/FilaDisruptor/fila2large.jpg";
import Disruptor3 from "../data/photos/FilaDisruptor/fila3small.jpg";
import Disruptor3Large from "../data/photos/FilaDisruptor/fila3large.jpg";

// vans photos

import Vans1 from "../data/photos/Vans/vans1small.jpg";
import Vans1Large from "../data/photos/Vans/vans1large.jpg";
import Vans2 from "../data/photos/Vans/vans2small.jpg";
import Vans2Large from "../data/photos/Vans/vans2large.jpg";
import Vans3 from "../data/photos/Vans/vans3small.jpg";
import Vans3Large from "../data/photos/Vans/vans3large.jpg";

//  yeezy photos

import Yeezy1 from "../data/photos/Yeezy/yeezy1small.jpg";
import Yeezy1Large from "../data/photos/Yeezy/yeezy1large.jpg";
import Yeezy2 from "../data/photos/Yeezy/yeezy2small.jpg";
import Yeezy2Large from "../data/photos/Yeezy/yeezy2large.jpg";
import Yeezy3 from "../data/photos/Yeezy/yeezy3small.jpg";
import Yeezy3Large from "../data/photos/Yeezy/yeezy3large.jpg";

const data = {
  sneakers: [
    {
      id: uuidv4(),
      name: "Air Jordan 1",
      producer: "Nike",
      description:
        "The Air Jordan 1 High debuted in 1985 as the first signature sneaker developed by Nike for Michael Jordan. The Peter Moore designed performance basketball sneaker featured a simple Nike Dunk inspired design that incorporated the Nike Swoosh and the Jordan Wings logo and featured Nike Air. The black and red colorway of the Air Jordan 1 High was famously banned by the NBA for not adhering to the dress code. The Air Jordan 1 High was first retroed in 1994 and has seen hundreds of retro releases since.",
      price: "$180",
      gender: "male",
      collection: "Air",
      photos: [Jordan1, Jordan2, Jordan3],
      largePhotos: [Jordan1Large, Jordan2Large, Jordan3Large],
    },
    {
      id: uuidv4(),
      name: "Air Force 1",
      producer: "Nike",
      description:
        "The Nike Air Force 1 remains a popular retro shoe to this day. The Air Force 1 features an upper that is most frequently dressed in leather, a large Swoosh across the lateral and medial sides, perforated toe boxes, metal lace dubraes, and an Air-encapsulated midsole with signature “AIR” text near the rear.",
      price: "$150",
      gender: "Unisex",
      collection: "Air",
      photos: [Force1, Force2, Force3],
      largePhotos: [Force1Large, Force2Large, Force3Large],
    },
    {
      id: uuidv4(),
      name: "Disruptor",
      producer: "Fila",
      description:
        "With Fila Disruptor we feel like we're back in the '90s again. Whether you're discovering it for the first time or celebrating the comeback of the sporty retro look with us, Fila Disruptor is definitely a must-have for all fans of vintage footwear. There's no other shoe like it. The extra-thick sole makes the sneaker stand out and gives you a sense of walking on clouds. The refined details, such as the special lacing, the brand logo on the side of the shoe and the tongue, make Fila Disruptor unique. ",
      price: "$70",
      gender: "Female",
      collection: "Fila",
      photos: [Disruptor1, Disruptor2, Disruptor3],
      largePhotos: [Disruptor1Large, Disruptor2Large, Disruptor3Large],
    },
    {
      id: uuidv4(),
      name: "Old Skool Classic",
      producer: "Vans",
      description:
        "One of the most iconic designs in a shop full of them. What started in 1977 as the Vans #36, introducing the now iconic Vans Sidestripe, became the Old Skool. They say the Classics never go out of style, and Vans Old Skool Black & White is further proof.",
      price: "$80",
      gender: "Unisex",
      collection: "Old Skool",
      photos: [Vans1, Vans2, Vans3],
      largePhotos: [Vans1Large, Vans2Large, Vans3Large],
    },
    {
      id: uuidv4(),
      name: "Yeezy Boost",
      producer: "adidas",
      description:
        "Yeezy is a line of sports sneakers and apparel for men. The collection was launched in 2009. It is created by American rapper, Kanye West, as part of the Adidas brand. The duo's latest offering, the Yeezy Boost sneakers, are enduringly popular.",
      price: "$220",
      gender: "Unisex",
      collection: "Yeezy Boost",
      photos: [Yeezy1, Yeezy2, Yeezy3],
      largePhotos: [Yeezy1Large, Yeezy2Large, Yeezy3Large],
    },
  ],
};

export default data;
