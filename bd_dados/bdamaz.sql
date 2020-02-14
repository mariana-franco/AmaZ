CREATE DATABASE  IF NOT EXISTS `amazbd` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `amazbd`;
-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: amazbd
-- ------------------------------------------------------
-- Server version	8.0.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categoria`
--

DROP TABLE IF EXISTS `categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categoria` (
  `id` int NOT NULL AUTO_INCREMENT,
  `categoria` varchar(255) DEFAULT NULL,
  `descricao` varchar(5119) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria`
--

LOCK TABLES `categoria` WRITE;
/*!40000 ALTER TABLE `categoria` DISABLE KEYS */;
INSERT INTO `categoria` VALUES (1,'Balde','Recipiente com alça, feito de metal, plástico ou madeira'),(2,'Colar','Acessório que se usa no pescoço.'),(3,'Alimentos','Produtos alimenticios.'),(4,'Jarro','Vaso para decoração ou para conter flores'),(5,'Quadro','Moldura, caixilho de madeira ou outro material.'),(6,'Chinelo','Calçado macio e confortável, com ou sem salto.'),(7,'Boneca','Representação tridimensional de um corpo humano feminino, infantil ou adulto, feita de pano, porcelana, borracha etc.'),(8,'Copo','O copo é um recipiente feito de vidro, plástico e outros materiais, de formato cilíndrico.'),(9,'Chocalho','Espécie de sineta em forma de cone ou cilindro achatado que se prende ao pescoço do gado ou das bestas de carga e que, agitado pelo movimento do animal, produz um som baço, metálico, monótono'),(10,'Instrumento','Um instrumento musical é um objeto construído com o propósito de produzir música.'),(11,'Tapete','Revestimento feito de outro material (borracha, linóleo etc.)'),(12,'Bracelete','Um bracelete é uma peça de joalheria ou bijuteria que serve para adornar o pulso das mãos de um indivíduo.'),(13,'Decoração','Conjunto de elementos de uma obra de arte ou peça artística que apelam aos sentidos (cor) ou despertam sensações (forma e movimento).'),(14,'Vestimenta','Peça de roupa que serve para vestir qualquer parte do corpo.'),(15,'Máscaras','Uma máscara é um acessório utilizado para cobrir o rosto. É utilizada para diversos propósitos: lúdicos, religiosos, artísticos ou de natureza prática. ');
/*!40000 ALTER TABLE `categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedido`
--

DROP TABLE IF EXISTS `pedido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedido` (
  `id` int NOT NULL AUTO_INCREMENT,
  `qtd_produto` int NOT NULL,
  `valor_pago` float NOT NULL,
  `produto_id` int DEFAULT NULL,
  `venda_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK73bw249kqpeedj11lmig00nj4` (`produto_id`),
  KEY `FKjq56grnph2gs60ljbb0wyfnag` (`venda_id`),
  CONSTRAINT `FK73bw249kqpeedj11lmig00nj4` FOREIGN KEY (`produto_id`) REFERENCES `produto` (`id`),
  CONSTRAINT `FKjq56grnph2gs60ljbb0wyfnag` FOREIGN KEY (`venda_id`) REFERENCES `venda` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedido`
--

LOCK TABLES `pedido` WRITE;
/*!40000 ALTER TABLE `pedido` DISABLE KEYS */;
INSERT INTO `pedido` VALUES (1,1,135,1,1),(2,1,409,2,2),(3,1,19.9,3,3),(4,1,29.9,4,4),(5,1,79.9,5,5),(6,1,76.14,6,6),(7,2,1100,7,7),(8,2,140,8,8),(9,3,1107,9,9),(10,1,79.9,10,10),(11,1,29.9,11,11),(12,2,858,12,12),(13,3,405,13,13),(14,1,429,14,14),(15,5,497.5,15,15);
/*!40000 ALTER TABLE `pedido` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produto`
--

DROP TABLE IF EXISTS `produto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produto` (
  `id` int NOT NULL AUTO_INCREMENT,
  `descricao` varchar(5119) DEFAULT NULL,
  `link_foto` varchar(1024) DEFAULT NULL,
  `preco` float NOT NULL,
  `qtd_estoque` int NOT NULL,
  `titulo` varchar(255) DEFAULT NULL,
  `categoria_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKopu9jggwnamfv0c8k2ri3kx0a` (`categoria_id`),
  CONSTRAINT `FKopu9jggwnamfv0c8k2ri3kx0a` FOREIGN KEY (`categoria_id`) REFERENCES `categoria` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produto`
--

LOCK TABLES `produto` WRITE;
/*!40000 ALTER TABLE `produto` DISABLE KEYS */;
INSERT INTO `produto` VALUES (1,'A Boneca em Tecido Fruta feita pelo grupo produtivo Manaus Feito à Mão, traz a representatividade cultural e econômica do Guaraná para os povos caboclos. O produto foi confeccionado com o talento e criatividade da artesã Lilian Oliveira, usando de fibras vegetais, sementes, frutas e grafismos indígenas.','https://images-americanas.b2w.io/produtos/01/00/img/102718/1/102718162_1GG.jpg',135,4,'Boneca em tecido fruta (guaraná) da Amazônia',7),(2,'A maior expressividade do Vaso em Fibra Japiim Solta Vermelho com Acabamento da Amazônia é a técnica usada e as emoções que envolvem a arte 100% artesanal. Uma peça que se adapta em vários ambientes, com a bagagem e design cultural do Amazonas.','https://images-americanas.b2w.io/produtos/01/00/img/1371133/8/1371133822_1GG.jpg',409,6,'Cesto em fibra Japim vermelho com acabamento da Amazônia',1),(3,'O Café Orgânico Apuí Agroflorestal Extra Forte da Amazônia é oriundo do munícipio de Apuí no sul do Amazonas. Ele é o primeiro café do estado a atingir a certificação orgânica e busca resgatar o potencial local de produção cafeeira de forma sustentável. É Com sabor inesquecível, não utiliza agrotóxicos em sua composição e é encorpado com grãos de alta qualidade.','https://images-americanas.b2w.io/produtos/01/00/img/470268/3/470268360_1GG.jpg',19.9,325,'Café Apuí agroflorestal da Amazônia extra forte',3),(4,'Formada por artesãs da Comunidade São João de Ipecaçu, São Paulo, Vila Nova e Nova Canaã a marca Teçume D’Amazônia se dedica a confeccionar cestas a partir das fibras de cauaçu, uma erva que pode atingir até 5 metros de altura. Trabalho artesanal que promoveu uma nova relação entre as artesãs e o cauaçu, já que antes a erva era usada somente nos telhados das cozinhas e nos fornos de farinha das comunidades da Reserva de Desenvolvimento Sustentável do Amanã, na região do médio Solimões. Hoje, viram produtos sustentáveis que, além de contribuírem para um mundo melhor, garantem a preservação da cultura.','https://images-americanas.b2w.io/produtos/01/00/img/80621/2/80621231_1GG.jpg',29.9,14,'Embalagem para presente de fibra de Cauaçu tingido com folhas de Crajiru da Amazônia - Modelo X',13),(5,'A Bolsa Colorida de Sementes de Açaí e Morototó da Amazônia, é uma opção prática para guardar os seus pertences. Produzida 100% manualmente, é muito útil para o dia a dia.','https://images-americanas.b2w.io/produtos/01/00/img/1370389/1/1370389199_1GG.jpg',79.9,21,'Bolsa colorida em sementes de Açaí e Morototó da Amazônia',14),(6,'Formada por artesãs das comunidades São João de Ipecaçu, São Paulo, Vila Nova e Nova Canaã a marca Teçume D’Amazônia se dedica a confeccionar cestas a partir das fibras de cauaçu, uma erva que pode atingir até 5 metros de altura. Trabalho artesanal que promoveu uma nova relação entre as artesãs e o cauaçu, já que antes a erva era usada somente nos telhados das cozinhas e nos fornos de farinha das comunidades da Reserva de Desenvolvimento Sustentável do Amanã, na região do médio Solimões. Hoje, viram produtos sustentáveis que, além de contribuírem para um mundo melhor, garantem a preservação da cultura.','https://images-americanas.b2w.io/produtos/01/00/img/1389566/0/1389566052_1GG.jpg',76.14,9,'Garrafa de mesa de fibra de Cauaçu tingido com folhas de Crajiru e Açafrão da Amazônia',13),(7,'Sabemos que uma bandeja, quando bem posta, pode redesenhar todo um ambiente. A pintura vermelha se destaca na madeira Guaraná, que carrega uma bagagem de cultura, criatividade e elegância para sua casa.','https://images-americanas.b2w.io/produtos/01/00/img/75390/2/75390243_1GG.jpg',550,3,'Bandeja em resíduo de madeira marchetada Home Bar - Projeto Design Tropical da Amazônia',13),(8,'Boneco índio da amazônia em tecido feito artesanalmente.','https://images-americanas.b2w.io/produtos/01/00/img/102718/0/102718083_1SZ.jpg',70,5,'Boneco índio da amazônia.',13),(9,'Fruteira de mesa de folha do wambé da amazônia.','https://images-americanas.b2w.io/produtos/01/00/img/1370322/7/1370322761_1GG.jpg',369,8,'Fruteira de mesa de folha.',13),(10,'Bolsa colorida com alça em sementes de açaí da amazônia e morototó tingido.','https://images-americanas.b2w.io/produtos/01/00/img/1370389/3/1370389391_1GG.jpg',79.9,4,'Bolsa colorida com alça em sementes de açaí.',14),(11,'Café apuí agroflorestal da amazônia orgânico.','https://images-americanas.b2w.io/produtos/01/00/img/470269/0/470269039_1GG.jpg',29.9,31,'Café apuí agroflorestal da amazônia orgânico',3),(12,'Vaso coringa da amazônia.','https://images-americanas.b2w.io/produtos/01/00/img/1371128/6/1371128661_1GG.jpg',429,4,'Vaso coringa.',13),(13,'boneca em tecido fruta (Tucumã) da amazônia.','https://images-americanas.b2w.io/produtos/01/00/img/102720/1/102720171_1GG.jpg',135,4,'Boneca em tecido fruta (Tucumã)',7),(14,'Vaso em fibra maracujá vermelho da Amazônia.','https://images-americanas.b2w.io/produtos/01/00/img/1389722/9/1389722991_1GG.jpg',429,3,'Vaso em fibra maracujá.',13),(15,'Conjunto de colares em madeira e sementes da Amazônia','https://images-americanas.b2w.io/produtos/01/00/img/1370402/6/1370402630_1GG.jpg',99.5,12,'Conjunto de colares.',14);
/*!40000 ALTER TABLE `produto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `senha` varchar(25) DEFAULT NULL,
  `telefone` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'caioyuri@gmail.com','Caio Sewa','123456789@@','11444444444'),(2,'josecarlose@gmail.com','João Carlos Eduardo Sebastião','7J4okqDLjP','84985960857'),(3,'renatohenriquedapaz_@humanfit.com.br','Renato Henrique da Paz','hHRYrWcsWO','84998818251'),(4,'cesarmarcoscardoso@tedde.com.br','César Marcos Cardoso','um9uzbhztb','84987262264'),(5,'geraldolevimonteiro-94@creativeinteriores.com.br','Geraldo Levi Monteiro','nlzKmg932P','84982119888'),(6,'renatohenriquedapaz_@humanfit.com.br','Nathan Martin da Rocha','4G2Thf1GOY','84994030232'),(7,'luccadasilvagregorio_@pharmaterra.com.br','Lucca da Silva Gregorio','IknotOxR1O','84981306395'),(8,'augustoarthurgustavo-85@cavalinho.srv.br','Augusto Arthur Gustavo Gonçalves','zoCwL8ZD3k','84981666941'),(9,'mmanoelianferreira@bitco.cc','Manoel Ian Ferreira','FCkrDJeKU6','84998215967'),(10,'luizagregorio@humanfit.com.br','Luiza da Silva Gregorio','4G2Thf1GOY','84994030232'),(11,'ttheolevienzodacruz@kantoferramentaria.com.br','Theo Levi Enzo da Cruz','HY2aOoc7qo','84981590939'),(12,'alexandresales-89@publifix.com.br','Francisco Bernardo Alexandre Sales','JoMmWCLm1w','84994421805'),(13,'jorgeeliasdasneves@opusvp.com.br','Jorge Elias das Neves','rEQxsZ0x7G','84988840320'),(14,'pedrohenrique@pharmaterra.com.br','Pedro Henrique Kauê Nicolas Porto','TfZmJwCl73','84986542388'),(15,'noahricardodacosta_@pp33.com.br','Noah Ricardo da Costa','OetnL2oPnq','84997573565'),(16,'liz@gmail.com','Liz Gregorio','123456789@@','11977542152');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `venda`
--

DROP TABLE IF EXISTS `venda`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `venda` (
  `id` int NOT NULL AUTO_INCREMENT,
  `data_venda` varchar(255) DEFAULT NULL,
  `usuario_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKrxdls7rvs4vi9ytunrblva9h4` (`usuario_id`),
  CONSTRAINT `FKrxdls7rvs4vi9ytunrblva9h4` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `venda`
--

LOCK TABLES `venda` WRITE;
/*!40000 ALTER TABLE `venda` DISABLE KEYS */;
INSERT INTO `venda` VALUES (1,'2017-05-05',5),(2,'2017-01-09',2),(3,'2017-05-16',1),(4,'2017-07-20',4),(5,'2017-08-22',7),(6,'2018-01-09',9),(7,'2018-02-02',10),(8,'2018-05-16',1),(9,'2018-09-17',11),(10,'2018-10-22',9),(11,'2018-12-29',11),(12,'2019-01-05',14),(13,'2019-09-19',12),(14,'2019-12-18',15),(15,'2019-12-30',13);
/*!40000 ALTER TABLE `venda` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-02-06  0:41:12
