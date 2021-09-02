import React, { useState, useEffect } from "react";

function Products() {
  const [productList, setProductList] = useState([{ produto: "", preco: "", quantidade: "", total: "" }]);
  const [precoTotal, setPrecoTotal] = useState('');

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...productList];
    list[index][name] = value;
    list[index]['total'] = Number(list[index].preco) * Number(list[index].quantidade);
    list[index]['total'] = formatarValorParaReal(list[index]['total']);
    setProductList(list);
  };

  const handleRemoverLinha = index => {
    const list = [...productList];
    list.splice(index, 1);
    setProductList(list);
  };

  const handleAdicionarLinha = () => {
    setProductList([...productList, { produto: "", preco: "", quantidade: "", total: "" }]);
  };

  const formatarValorParaReal = (valor) => {  
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  useEffect(() => {
    const calcularValorTotalDosProdutos = () => {
      const valorTotal = productList.reduce((total, productList) => total + (productList.preco * productList.quantidade), 0);
      const valorReal = formatarValorParaReal(valorTotal);
      setPrecoTotal(valorReal);
    }

    calcularValorTotalDosProdutos();
  }, [productList]);

  return (
    <>
      <h1 className="text-center my-3 mx-2 fw-bold">Calculadora de Produtos</h1>
      {productList.map((x, i) => {
        return (
          <div key={i}>
            <div className="container">
              <div className="row g-row-2 mb-2 border border-1 py-3">
                <div className="col-12">
                  <div className="form-floating mb-3">
                    <input 
                      type="text" 
                      className="form-control" 
                      id="produto" 
                      name="produto"
                      placeholder="Produto"
                      value={x.produto}
                      onChange={e => handleInputChange(e, i)}
                      autoComplete="off"
                      autoFocus
                    />
                    <label>Produto:</label>
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-floating mb-3">
                    <input 
                      type="number" 
                      className="form-control" 
                      id="preco"
                      name="preco"
                      placeholder="Preço" 
                      value={x.preco}
                      onChange={e => handleInputChange(e, i)}
                    />
                    <label>Preço:</label>
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-floating mb-3">
                    <input 
                      type="number" 
                      className="form-control" 
                      id="quantidade"
                      name="quantidade"
                      placeholder="Quantidade" 
                      value={x.quantidade}
                      onChange={e => handleInputChange(e, i)}
                    />
                    <label>Quantidade:</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating mb-1">
                    <input 
                      type="text" 
                      className="form-control" 
                      id="total"
                      name="total"
                      placeholder="Total" 
                      value={x.total}
                      onChange={e => handleInputChange(e, i)}
                      disabled
                    />
                    <label>Total produto:</label>
                  </div>
                </div>
                <div className="col-12 mt-3">
                  {productList.length !== 1 && <button type="button" className="btn btn-sm btn-danger" onClick={() => handleRemoverLinha(i)}>Remover</button>}
                </div>
              </div>
              <div className="col-12 mt-3">
                  {productList.length - 1 === i && <button type="button" className="btn btn-sm btn-success" onClick={handleAdicionarLinha}>Adicionar</button>}
                </div>
            </div>
          </div>
        );
      })}
      <div className="text-center mt-3">
        <h1>Preço Total: {precoTotal}</h1>
      </div>
    </>
  );
}

export default Products;
