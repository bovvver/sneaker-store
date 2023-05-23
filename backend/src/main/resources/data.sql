INSERT INTO SNEAKERS (id, description, gender, name, price, producer) VALUES (1, 'The Air Jordan 1 High debuted in 1985 as the first signature sneaker developed by Nike for Michael Jordan. The Peter Moore designed performance basketball sneaker featured a simple Nike Dunk inspired design that incorporated the Nike Swoosh and the Jordan Wings logo and featured Nike Air. The black and red colorway of the Air Jordan 1 High was famously banned by the NBA for not adhering to the dress code. The Air Jordan 1 High was first retroed in 1994 and has seen hundreds of retro releases since.', 'men', 'Air Jordan 1', 180.00, 'Nike');

INSERT INTO SNEAKERS (id, description, gender, name, price, producer) VALUES (2, 'The Nike Air Force 1 remains a popular retro shoe to this day. The Air Force 1 features an upper that is most frequently dressed in leather, a large Swoosh across the lateral and medial sides, perforated toe boxes, metal lace dubraes, and an Air-encapsulated midsole with signature “AIR” text near the rear.', 'unisex', 'Air Force 1', 150.00, 'Nike');

INSERT INTO SNEAKERS (id, description, gender, name, price, producer) VALUES (3, 'With Fila Disruptor we feel like we''re back in the ''90s again. Whether you''re discovering it for the first time or celebrating the comeback of the sporty retro look with us, Fila Disruptor is definitely a must-have for all fans of vintage footwear. There''s no other shoe like it. The extra-thick sole makes the sneaker stand out and gives you a sense of walking on clouds. The refined details, such as the special lacing, the brand logo on the side of the shoe and the tongue, make Fila Disruptor unique.', 'women', 'Disruptor', 70.00, 'Fila');

INSERT INTO SNEAKERS (id, description, gender, name, price, producer) VALUES (4, 'One of the most iconic designs in a shop full of them. What started in 1977 as the Vans #36, introducing the now iconic Vans Sidestripe, became the Old Skool. They say the Classics never go out of style, and Vans Old Skool Black & White is further proof.', 'women', 'Old Skool Classic', 80.00, 'Vans');

INSERT INTO SNEAKERS (id, description, gender, name, price, producer) VALUES (5, 'Yeezy is a line of sports sneakers and apparel for men. The collection was launched in 2009. It is created by American rapper, Kanye West, as part of the Adidas brand. The duo''s latest offering, the Yeezy Boost sneakers, are enduringly popular.', 'men', 'Yeezy Boost', 220.00, 'adidas');

INSERT INTO SNEAKERS (id, description, gender, name, price, producer) VALUES (6, 'Go conquer the city in the Blazer MID''77 sneakers from Nike! This is an updated version of a basketball classic from the 1970s. In addition to a great old-school look, the shoes offer 100% comfort. Their synthetic leather upper is partly recycled, but loses none of its quality.', 'unisex', 'Blazer Mid ''77', 100.00, 'Nike');

INSERT INTO SNEAKERS (id, description, gender, name, price, producer) VALUES (7, 'Basketball sneakers have firmly established themselves in street fashion. If you want a model in your collection that catches the eye with its sophisticated design but also offers comfort and a stable step, look no further than this updated version of an old classic from 1989.', 'women', '550', 100.00, 'New Balance');

INSERT INTO SNEAKERS (id, description, gender, name, price, producer) VALUES (8, 'The Nike Air VaporMax Plus shoe harkens back to a classic model, but its design expresses ideas of the future. The model is a nod to the 1998 Air Max Plus shoes with a raised heel counter, cushioned upper and logo on the heel, but the revolutionary VaporMax Air technology enhances comfort and gives a modern look.', 'men', 'Air VaporMax Plus', 250.00, 'Nike');

INSERT INTO SNEAKERS (id, description, gender, name, price, producer) VALUES (9, 'The Chuck 70 model is a retrospective that uses a modern design to celebrate the original 1970s All Star shoes. Features such as more cushioning and thicker rubber allow you to rediscover the era of classic basketball off the court. They have the look and style of the ''70s Chucks, but without the scent.', 'unisex', 'Chuck 70', 120.00, 'Converse');


INSERT INTO PHOTO (id, path, sneaker_id) VALUES (1, '../data/photos/Jordan1/jordan1small.jpg', 1);
INSERT INTO PHOTO (id, path, sneaker_id) VALUES (2, '../data/photos/Jordan1/jordan2small.jpg', 1);
INSERT INTO PHOTO (id, path, sneaker_id) VALUES (3, '../data/photos/Jordan1/jordan3small.jpg', 1);

INSERT INTO PHOTO (id, path, sneaker_id) VALUES (4, '../data/photos/AirForce1/force1small.jpg', 2);
INSERT INTO PHOTO (id, path, sneaker_id) VALUES (5, '../data/photos/AirForce1/force2small.jpg', 2);
INSERT INTO PHOTO (id, path, sneaker_id) VALUES (6, '../data/photos/AirForce1/force3small.jpg', 2);

INSERT INTO PHOTO (id, path, sneaker_id) VALUES (7, '../data/photos/FilaDisruptor/fila1small.jpg', 3);
INSERT INTO PHOTO (id, path, sneaker_id) VALUES (8, '../data/photos/FilaDisruptor/fila2small.jpg', 3);
INSERT INTO PHOTO (id, path, sneaker_id) VALUES (9, '../data/photos/FilaDisruptor/fila3small.jpg', 3);

INSERT INTO PHOTO (id, path, sneaker_id) VALUES (10, '../data/photos/Vans/vans1small.jpg', 4);
INSERT INTO PHOTO (id, path, sneaker_id) VALUES (11, '../data/photos/Vans/vans2small.jpg', 4);
INSERT INTO PHOTO (id, path, sneaker_id) VALUES (12, '../data/photos/Vans/vans3small.jpg', 4);

INSERT INTO PHOTO (id, path, sneaker_id) VALUES (13, '../data/photos/Yeezy/yeezy1small.jpg', 5);
INSERT INTO PHOTO (id, path, sneaker_id) VALUES (14, '../data/photos/Yeezy/yeezy2small.jpg', 5);
INSERT INTO PHOTO (id, path, sneaker_id) VALUES (15, '../data/photos/Yeezy/yeezy3small.jpg', 5);

INSERT INTO PHOTO (id, path, sneaker_id) VALUES (16, '../data/photos/Blazer/blazer1small.jpg', 6);
INSERT INTO PHOTO (id, path, sneaker_id) VALUES (17, '../data/photos/Blazer/blazer2small.jpg', 6);
INSERT INTO PHOTO (id, path, sneaker_id) VALUES (18, '../data/photos/Blazer/blazer3small.jpg', 6);

INSERT INTO PHOTO (id, path, sneaker_id) VALUES (19, '../data/photos/550/newbalance1small.jpg', 7);
INSERT INTO PHOTO (id, path, sneaker_id) VALUES (20, '../data/photos/550/newbalance2small.jpg', 7);

INSERT INTO PHOTO (id, path, sneaker_id) VALUES (21, '../data/photos/Vapor/vapor1small.jpg', 8);
INSERT INTO PHOTO (id, path, sneaker_id) VALUES (22, '../data/photos/Vapor/vapor2small.jpg', 8);
INSERT INTO PHOTO (id, path, sneaker_id) VALUES (23, '../data/photos/Vapor/vapor3small.jpg', 8);

INSERT INTO PHOTO (id, path, sneaker_id) VALUES (24, '../data/photos/Chuck/chuck1small.jpg', 9);
INSERT INTO PHOTO (id, path, sneaker_id) VALUES (25, '../data/photos/Chuck/chuck2small.jpg', 9);
INSERT INTO PHOTO (id, path, sneaker_id) VALUES (26, '../data/photos/Chuck/chuck3small.jpg', 9);
