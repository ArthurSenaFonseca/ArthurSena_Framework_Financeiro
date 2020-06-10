function salvarProduto(){
    const nome = document.getElementById("nome").value;
    if(nome == ""){
      Swal.fire({
          icon: 'error',
          title: 'Preencha todos os campos!',
          text: '',
          footer: ''
      })
    }else{
    const produto = {id:Date.now(),nome};
    
    let produtoGravado = JSON.parse(window.localStorage.getItem("produtos"));
    if(produtoGravado == null){ // primeiro acesso chave ainda não foi criada
      window.localStorage.setItem('produtos',JSON.stringify([])); // criar
      produtoGravado = JSON.parse(window.localStorage.getItem("produtos"));// atualizar a minha variavel
      // validar se o email ja´ existe
       produtoGravado.push(produto); // adiciona um novo produto
        window.localStorage.setItem('produtos', JSON.stringify(produtoGravado)); // gravar na memoria o objeto atualizado
        Swal.fire({
      
          icon: 'success',
          title: 'Produto cadastrado com sucesso!',
          showConfirmButton: false,
          timer: 1500
        });
       
      
    }else{ // chave produto já existe na memória
        produtoGravado.push(produto); // adiciono um novo produto
        window.localStorage.setItem('produtos',JSON.stringify(produtoGravado)); // gravar na memoria
        Swal.fire({
      
          icon: 'success',
          title: 'Produto cadastrado com sucesso!',
          showConfirmButton: false,
          timer: 1500
        });
        
      }  
      limpar();
      listarprodutos();
    }
    }
  
   
  
  
  
  function cadproduto(){
    const nome = document.getElementById("nome").value;
  
    const produto = {id: Date.now(),nome};
    //produtos.push(produto);//
    // criar o objeto na localstorage
    // esta vazio na memoria
    //window.localStorage.setItem('produtos',JSON.stringify([])); // criar
    // primeiro acesso verificar se existe a chave na memoria
    let produtoGravado = JSON.parse(window.localStorage.getItem("produtos"));
    if(produtoGravado == null){ // primeiro acesso chave ainda não foi criada
      window.localStorage.setItem('produtos',JSON.stringify([])); // criar
      produtoGravado = JSON.parse(window.localStorage.getItem("produtos"));// atualizar a minha variavel
      // validar se o email ja´ existe
      
        produtoGravado.push(produto); // adiciona um novo produto
        window.localStorage.setItem('produtos', JSON.stringify(produtoGravado)); // gravar na memoria o objeto atualizado
        Swal.fire({
      
          icon: 'success',
          title: 'Produto cadastrado com sucesso!',
          showConfirmButton: false,
          timer: 1500
        });
      
    }else{ // chave produto já existe na memória
      
        produtoGravado.push(produto); // adiciono um novo produto
        window.localStorage.setItem('produtos',JSON.stringify(produtoGravado)); // gravar na memoria
        Swal.fire({
      
          icon: 'success',
          title: 'Produto cadastrado com sucesso!',
          showConfirmButton: false,
          timer: 1500
        });
      
    }
    /*produtoGravado.push(produto);
    window.localStorage.setItem('produtos',JSON.stringify(produtoGravado));// gravo na memoria o array novo
    */
    
    
    
    /*Swal.fire({
      
      icon: 'success',
      title: 'Usuário cadastrado com sucesso!',
      showConfirmButton: false,
      timer: 1500
    });
    limpar();
    window.location.href = "index.html";*/
   
   
  
  }
  
  
  function apagarproduto(id){
    Swal.fire({
      title: 'Confirmar a exclusão do Produto?',
      
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim'
    }).then((result) => {
      if (result.value) {
        let produtosGravado = JSON.parse(window.localStorage.getItem("produtos"));
        let produtoIndex = produtosGravado.findIndex(produto => produto.id == id);
        if(produtoIndex >= 0){
          produtosGravado.splice(produtoIndex,1);
          window.localStorage.setItem('produtos', JSON.stringify(produtosGravado));
          if(produtosGravado.length > 0){
            listarprodutos();
          }else{
            row = document.getElementById("tbody");
            row.innerHTML = "";
          }
        }
        Swal.fire(
          'Usuário excluído!',
          '',
          'success'
        )
      }
    });
  }
  
  
  function limpar(){
    /* limpar de forma basica manual
  document.getElementById("nome").value = "";
  document.getElementById("endereco").value = "";
  document.getElementById("telefone").value = "";
  document.getElementById("email").value = "";
  document.getElementById("cidade").value = ""; */
  
  /* limpar de forma automatica */
  let inputs = document.getElementsByTagName("input");
  for(let i = 0; i < inputs.length; i++){
     inputs[i].value = "";
  }
  document.getElementById("descricao").value = "";
    
  }
  
  
  
  function editarproduto(id){
    let produtosGravado = JSON.parse(window.localStorage.getItem("produtos"));
    for(let i = 0; i < produtosGravado.length; i++){
        if(produtosGravado[i].id == id){
  
          document.getElementById("id").value = produtosGravado[i].id;
          document.getElementById("nome").value = produtosGravado[i].nome;
          
        }
   }
  }
  
  function alterarProduto(){
    const id = document.getElementById("id").value;
    const nome = document.getElementById("nome").value;
    let produtoGravado = JSON.parse(window.localStorage.getItem("produtos"));
  
    // como fazer para atualiza a posicao do array
    produtoGravado[id] = {id,nome};
    Swal.fire({
      
      icon: 'success',
      title: 'Produto atualizado com sucesso!',
      showConfirmButton: false,
      timer: 1500
    });
    limpar();
    listarprodutos();
  
  }
  
  
  function listarprodutos(){
    let linha = "";
    let produtosGravado = JSON.parse(window.localStorage.getItem("produtos"));
    if(produtosGravado){
     
    produtosGravado.forEach(produto => {
      row = document.getElementById("tbody");
      if(row != null){
       linha += "<tr>"+
                "<td id='descricao'>"+produto.id +"</td>"+
                "<td id='descricao'>"+produto.nome +"</td>"+
                "<td id='tdacoes'><button class='btn btn-outline-success' onclick='editarproduto("+produto.id+")'><i class='fa fa-edit'></i></button>"+
                "<button class='btn btn-outline-danger'onclick='apagarproduto("+produto.id+")'><i class='fa fa-trash'></i></button></td>"
              +"</tr>";
      row.innerHTML = linha;        
      }   
    
    
    });
    }
   }
  function listarProdutosVendas(){
    let linha = "";
    let produtosGravado = JSON.parse(window.localStorage.getItem("produtos"));
    if(produtosGravado){
     
    produtosGravado.forEach(produto => {
      row = document.getElementById("produtosVenda");
       if(row !== null){
      linha += "<div class='card item'>" +
              " <div class='card-header' align='center'>"+
              "   <h1>"+produto.nome+"</h1>"+
              " </div>"+
              " <div class='card-body'>"+
              "      <p>"+produto.descricao+"</p>"+
              "      <h2>R$ - "+parseFloat(produto.preco).toFixed(2)+"</h2>"+
              "      <button class='btn btn-outline-danger'onclick='adicionarCarrinho("+produto.id+")'>Comprar</button>"+
              " </div>"+
              " </div>";
                
              
      row.innerHTML = linha;        
       }
    
    
    });
    }
   }
   function listarprodutosCarrinho(){
    let linha = "";
    let produtosCarrinho = JSON.parse(window.localStorage.getItem("cartComprados"));
    if(produtosCarrinho){ // tem produtos no carrinho
     
    produtosCarrinho.forEach(produto => {
      row = document.getElementById("tbodycompras");
      if(row != null){
       linha += "<tr>"+
                "<td id='tdnome'>"+produto.nomeproduto +"</td>"+
                "<td id='tdqtde'>"+produto.quantidade+"<select id='qtdeCarrinho' onchange='atualizarQtdeCarrinho("+produto.id_produto+")'><option value='1'>1</option><option value='2'>2</option> </select> <button class='btn btn-outline-success'><i class='fa fa-plus'></i></button></td>"+
                "<td id='tdpreco'>R$ "+parseFloat(produto.preco).toFixed(2)+"</td>"+
                "<td id='tdbotoes'><button class='btn btn-outline-danger' onclick='apagarCarrinho("+produto.id_produto+")'><i class='fa fa-trash'></i></button></td>"
                
              +"</tr>";
      row.innerHTML = linha;        
      }   
    });
    // atualizar a parte de resumo do pedidos
    listartotalCarrinho();
    }
    else{ // não tem produtos no carrinho vamos desabilita o botao finalizar
        document.getElementById("btnfinalizar").disabled = true;
    }
   }
  
  function atualizarQtdeCarrinho(id){
    let qtde = document.getElementById("qtdeCarrinho").value;
    let produtosCarrinho = JSON.parse(window.localStorage.getItem("cartComprados"));
    // encontrar a posicao do objeto que veio do carrinho
    let produtoIndex = produtosCarrinho.findIndex(produto => produto.id_produto == id);
    if(produtoIndex >= 0){ // atualizar a quantidade do produto na variavel local
        produtosCarrinho[produtoIndex].quantidade = qtde;
        // atualizar o carrinho na memoria
        window.localStorage.setItem("cartComprados", JSON.stringify(produtosCarrinho));
        // atualizar a tela
        listarprodutosCarrinho();
    } 
  } 
   function apagarCarrinho(id){
    
    Swal.fire({
      title: 'Confirmar a exclusão do item no Carrinho?',
      
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim'
    }).then((result) => {
      if (result.value) {
        // primeiro recuperar os produtos do carrinho em memoria
        let produtosCarrinho = JSON.parse(window.localStorage.getItem("cartComprados"));
        // faço a busca na memoria da posicao que o usuario quer apagar o item
        let produtoIndex = produtosCarrinho.findIndex(produto => produto.id_produto == id);
        
        if(produtoIndex >= 0){ // se encontrou vamos apagar
          produtosCarrinho.splice(produtoIndex,1); // apagando o item do array
          // atualizar novamento o objeto na memoria sem item excluido
          window.localStorage.setItem('cartComprados', JSON.stringify(produtosCarrinho));
          if(produtosCarrinho.length > 0){ // verificar se ainte tem item no array para recarregar a tela
            listarprodutosCarrinho();
            listaCartBagde();
          }else{ // não existe produtos no carrinho tem que limpar da memória
            row = document.getElementById("tbodycompras");
            row.innerHTML = "";
            listarprodutosCarrinho();
            listaCartBagde();
            // apagando da memoria o carrinho
            window.localStorage.removeItem("cartComprados");
          }
        }
        Swal.fire(
          'Item excluído do carrinho!',
          '',
          'success'
        )
      }
    });
  }
  
   function listartotalCarrinho(){
     let total = 0.0;
     let produtosCarrinho = JSON.parse(window.localStorage.getItem("cartComprados"));
     if(produtosCarrinho){
  
       // atualizar a quantidade de produtos comprados na parte de resumo pedido
       document.getElementById("qtdeTotal").innerHTML = produtosCarrinho.length+" produto(s)";
  
       // calculando o total do carrinho de compras
        for(let i = 0; i < produtosCarrinho.length; i++){
          total += parseFloat(produtosCarrinho[i].preco * produtosCarrinho[i].quantidade);
        }
        // atualizar os totais no resumo do pedido
        document.getElementById("precoTotal").innerHTML = "R$ "+total.toFixed(2) ;
        document.getElementById("precoFinal").innerHTML = "R$ "+total.toFixed(2) ;
     }
   }
   
   function finalizarCarrinho(){
     // recuperar na memoria se tem algo no carrinho
     let produtosCarrinho = JSON.parse(window.localStorage.getItem("cartComprados"));
     if(produtosCarrinho){
      Swal.fire({
        title: 'Deseja finalizar a Compra ?',
        
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim'
      }).then((result) => {
        if (result.value) {
                // apagando da memoria o carrinho
              window.localStorage.removeItem("cartComprados");
              // recarregar a pagina
              window.location.reload();
            }
          });
    }
  }
   listarprodutos();
  