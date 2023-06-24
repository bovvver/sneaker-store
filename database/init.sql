-- MySQL dump 10.13  Distrib 8.0.33, for Linux (x86_64)
--
-- Host: localhost    Database: sneaker_store
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `order_table`
--

DROP TABLE IF EXISTS `order_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_table` (
  `id` int NOT NULL,
  `quantity` int NOT NULL,
  `owner_id` int DEFAULT NULL,
  `sneaker_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK5vwu1dohw9umfywsp78pn566l` (`owner_id`),
  KEY `FK88wfh0kd0vv2pcepffng877ov` (`sneaker_id`),
  CONSTRAINT `FK5vwu1dohw9umfywsp78pn566l` FOREIGN KEY (`owner_id`) REFERENCES `user_table` (`id`),
  CONSTRAINT `FK88wfh0kd0vv2pcepffng877ov` FOREIGN KEY (`sneaker_id`) REFERENCES `sneakers` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_table`
--

LOCK TABLES `order_table` WRITE;
/*!40000 ALTER TABLE `order_table` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_table_seq`
--

DROP TABLE IF EXISTS `order_table_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_table_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_table_seq`
--

LOCK TABLES `order_table_seq` WRITE;
/*!40000 ALTER TABLE `order_table_seq` DISABLE KEYS */;
INSERT INTO `order_table_seq` VALUES (7901),(1);
/*!40000 ALTER TABLE `order_table_seq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `photo`
--

DROP TABLE IF EXISTS `photo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `photo` (
  `id` int NOT NULL,
  `path` varchar(255) DEFAULT NULL,
  `sneaker_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKf1rsu92m108aqe6mrb4pqw856` (`sneaker_id`),
  CONSTRAINT `FKf1rsu92m108aqe6mrb4pqw856` FOREIGN KEY (`sneaker_id`) REFERENCES `sneakers` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `photo`
--

LOCK TABLES `photo` WRITE;
/*!40000 ALTER TABLE `photo` DISABLE KEYS */;
INSERT INTO `photo` VALUES (1,'/sneaker-store/images/Jordan1/jordan1small.jpg',1),(2,'/sneaker-store/images/Jordan1/jordan2small.jpg',1),(3,'/sneaker-store/images/Jordan1/jordan3small.jpg',1),(4,'/sneaker-store/images/AirForce1/force1small.jpg',2),(5,'/sneaker-store/images/AirForce1/force2small.jpg',2),(6,'/sneaker-store/images/AirForce1/force3small.jpg',2),(7,'/sneaker-store/images/FilaDisruptor/fila1small.jpg',3),(8,'/sneaker-store/images/FilaDisruptor/fila2small.jpg',3),(9,'/sneaker-store/images/FilaDisruptor/fila3small.jpg',3),(10,'/sneaker-store/images/Vans/vans1small.jpg',4),(11,'/sneaker-store/images/Vans/vans2small.jpg',4),(12,'/sneaker-store/images/Vans/vans3small.jpg',4),(13,'/sneaker-store/images/Yeezy/yeezy1small.jpg',5),(14,'/sneaker-store/images/Yeezy/yeezy2small.jpg',5),(15,'/sneaker-store/images/Yeezy/yeezy3small.jpg',5),(16,'/sneaker-store/images/Blazer/blazer1small.jpg',6),(17,'/sneaker-store/images/Blazer/blazer2small.jpg',6),(18,'/sneaker-store/images/Blazer/blazer3small.jpg',6),(19,'/sneaker-store/images/550/newbalance1small.jpg',7),(20,'/sneaker-store/images/550/newbalance2small.jpg',7),(21,'/sneaker-store/images/Vapor/vapor1small.jpg',8),(22,'/sneaker-store/images/Vapor/vapor2small.jpg',8),(23,'/sneaker-store/images/Vapor/vapor3small.jpg',8),(24,'/sneaker-store/images/Chuck/chuck1small.jpg',9),(25,'/sneaker-store/images/Chuck/chuck2small.jpg',9),(26,'/sneaker-store/images/Chuck/chuck3small.jpg',9);
/*!40000 ALTER TABLE `photo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `photo_seq`
--

DROP TABLE IF EXISTS `photo_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `photo_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `photo_seq`
--

LOCK TABLES `photo_seq` WRITE;
/*!40000 ALTER TABLE `photo_seq` DISABLE KEYS */;
INSERT INTO `photo_seq` VALUES (1),(1);
/*!40000 ALTER TABLE `photo_seq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sneakers`
--

DROP TABLE IF EXISTS `sneakers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sneakers` (
  `id` int NOT NULL,
  `description` varchar(600) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` double NOT NULL,
  `producer` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sneakers`
--

LOCK TABLES `sneakers` WRITE;
/*!40000 ALTER TABLE `sneakers` DISABLE KEYS */;
INSERT INTO `sneakers` VALUES (1,'The Air Jordan 1 High debuted in 1985 as the first signature sneaker developed by Nike for Michael Jordan. The Peter Moore designed performance basketball sneaker featured a simple Nike Dunk inspired design that incorporated the Nike Swoosh and the Jordan Wings logo and featured Nike Air. The black and red colorway of the Air Jordan 1 High was famously banned by the NBA for not adhering to the dress code. The Air Jordan 1 High was first retroed in 1994 and has seen hundreds of retro releases since.','men','Air Jordan 1',180,'Nike'),(2,'The Nike Air Force 1 remains a popular retro shoe to this day. The Air Force 1 features an upper that is most frequently dressed in leather, a large Swoosh across the lateral and medial sides, perforated toe boxes, metal lace dubraes, and an Air-encapsulated midsole with signature “AIR” text near the rear.','unisex','Air Force 1',150,'Nike'),(3,'With Fila Disruptor we feel like we\'re back in the \'90s again. Whether you\'re discovering it for the first time or celebrating the comeback of the sporty retro look with us, Fila Disruptor is definitely a must-have for all fans of vintage footwear. There\'s no other shoe like it. The extra-thick sole makes the sneaker stand out and gives you a sense of walking on clouds. The refined details, such as the special lacing, the brand logo on the side of the shoe and the tongue, make Fila Disruptor unique.','women','Disruptor',70,'Fila'),(4,'One of the most iconic designs in a shop full of them. What started in 1977 as the Vans #36, introducing the now iconic Vans Sidestripe, became the Old Skool. They say the Classics never go out of style, and Vans Old Skool Black & White is further proof.','women','Old Skool Classic',80,'Vans'),(5,'Yeezy is a line of sports sneakers and apparel for men. The collection was launched in 2009. It is created by American rapper, Kanye West, as part of the Adidas brand. The duo\'s latest offering, the Yeezy Boost sneakers, are enduringly popular.','men','Yeezy Boost',220,'adidas'),(6,'Go conquer the city in the Blazer MID\'77 sneakers from Nike! This is an updated version of a basketball classic from the 1970s. In addition to a great old-school look, the shoes offer 100% comfort. Their synthetic leather upper is partly recycled, but loses none of its quality.','unisex','Blazer Mid \'77',100,'Nike'),(7,'Basketball sneakers have firmly established themselves in street fashion. If you want a model in your collection that catches the eye with its sophisticated design but also offers comfort and a stable step, look no further than this updated version of an old classic from 1989.','women','550',100,'New Balance'),(8,'The Nike Air VaporMax Plus shoe harkens back to a classic model, but its design expresses ideas of the future. The model is a nod to the 1998 Air Max Plus shoes with a raised heel counter, cushioned upper and logo on the heel, but the revolutionary VaporMax Air technology enhances comfort and gives a modern look.','men','Air VaporMax Plus',250,'Nike'),(9,'The Chuck 70 model is a retrospective that uses a modern design to celebrate the original 1970s All Star shoes. Features such as more cushioning and thicker rubber allow you to rediscover the era of classic basketball off the court. They have the look and style of the \'70s Chucks, but without the scent.','unisex','Chuck 70',120,'Converse');
/*!40000 ALTER TABLE `sneakers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sneakers_seq`
--

DROP TABLE IF EXISTS `sneakers_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sneakers_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sneakers_seq`
--

LOCK TABLES `sneakers_seq` WRITE;
/*!40000 ALTER TABLE `sneakers_seq` DISABLE KEYS */;
INSERT INTO `sneakers_seq` VALUES (801),(1);
/*!40000 ALTER TABLE `sneakers_seq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_table`
--

DROP TABLE IF EXISTS `user_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_table` (
  `id` int NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_table`
--

LOCK TABLES `user_table` WRITE;
/*!40000 ALTER TABLE `user_table` DISABLE KEYS */;
INSERT INTO `user_table` VALUES (1,'dev','dev@mail.com','$2a$12$yB1B4.im5a6FPnk6JiikJeh/b/dmoRdkoCBfGyre6/4S8e7zjB3zG','USER');
/*!40000 ALTER TABLE `user_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_table_seq`
--

DROP TABLE IF EXISTS `user_table_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_table_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_table_seq`
--

LOCK TABLES `user_table_seq` WRITE;
/*!40000 ALTER TABLE `user_table_seq` DISABLE KEYS */;
INSERT INTO `user_table_seq` VALUES (2151),(1);
/*!40000 ALTER TABLE `user_table_seq` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-19 19:40:49
