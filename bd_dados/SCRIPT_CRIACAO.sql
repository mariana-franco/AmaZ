-- CREATE DATABASE amazBd;

CREATE TABLE Usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(255),
	telefone VARCHAR(255),
	email VARCHAR(255),
	senha VARCHAR(255)
);

CREATE TABLE Venda (
	idVenda INT PRIMARY KEY AUTO_INCREMENT,
	dataVenda DATE,
	idUsuario INT,
		CONSTRAINT fk_venda_usuario
		FOREIGN KEY (idUsuario)
		REFERENCES Usuario(idUsuario)
);

CREATE TABLE Categoria (
	idCategoria INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(255),
	descricao VARCHAR(5000)
);

CREATE TABLE Produto (
    idProduto INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(255),
    descricao VARCHAR(5000),
    linkFoto VARCHAR(1024),
    preco FLOAT,
    qtdEstoque INT,
    idCategoria INT,
    CONSTRAINT fk_produto_categoria FOREIGN KEY (idCategoria)
        REFERENCES Categoria (idCategoria)
);

CREATE TABLE Pedido (
	idPedido INT PRIMARY KEY AUTO_INCREMENT,
	qtdProduto INT,
	valorPago FLOAT,
   	idVenda INT,
	idProduto INT,
		CONSTRAINT fk_pedido_venda
		FOREIGN KEY (idVenda)
		REFERENCES Venda(idVenda),
			CONSTRAINT fk_pedido_produto
			FOREIGN KEY (idProduto)
			REFERENCES Produto(idProduto)
);
