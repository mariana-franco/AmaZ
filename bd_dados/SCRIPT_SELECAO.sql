-- select simples --

-- SELECT * FROM usuario;
-- SELECT produto.titulo, produto.descricao, produto.preco FROM produto;
-- SELECT * FROM categoria;


-- select com inner join --

/*
 SELECT produto.titulo, produto.descricao, produto.preco, produto.qtdEstoque AS estoque, categoria.nome AS categoria FROM produto
 INNER JOIN categoria ON categoria.idCategoria = produto.idCategoria;
 */

/*
 SELECT usuario.nome, usuario.email, venda.dataVenda AS dataCompra FROM venda
 INNER JOIN usuario ON usuario.idUsuario = venda.idUsuario
 ORDER BY dataVenda;
 */
 
/* 
 SELECT usuario.nome, venda.dataVenda AS dataCompra, produto.titulo AS produto, produto.preco, pedido.qtdProduto AS quantidade, pedido.valorPago FROM pedido
 INNER JOIN venda ON venda.idVenda = pedido.idVenda
 INNER JOIN usuario ON usuario.idUsuario = venda.idUsuario
 INNER JOIN produto ON produto.idProduto = pedido.idProduto;
 */