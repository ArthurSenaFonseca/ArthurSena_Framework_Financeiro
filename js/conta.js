


function salvarProduto(){
    const id = document.getElementById("id").value;
    const descricao = document.getElementById("descricao").value;
    const tipo = document.getElementById("tipo").value;
    const categoria = document.getElementById("categoria").value;
    if(descricao == "" || tipo == ""){
      Swal.fire({
          icon: 'error',
          title: 'Preencha todos os campos!',
          text: '',
          footer: ''
      })
  }else{
    
    const produto = {id:Date.now(),descricao, tipo, categoria};
    
    let produtoGravado = JSON.parse(window.localStorage.getItem("contas"));
    if(produtoGravado == null){ // primeiro acesso chave ainda não foi criada
      window.localStorage.setItem('contas',JSON.stringify([])); // criar
      produtoGravado = JSON.parse(window.localStorage.getItem("contas"));// atualizar a minha variavel
      // validar se o email ja´ existe
       produtoGravado.push(produto); // adiciona um novo produto
        window.localStorage.setItem('contas', JSON.stringify(produtoGravado)); // gravar na memoria o objeto atualizado
        Swal.fire({
      
          icon: 'success',
          title: 'Produto cadastrado com sucesso!',
          showConfirmButton: false,
          timer: 1500
        });
       
      
    }else{ // chave produto já existe na memória
        produtoGravado.push(produto); // adiciono um novo produto
        window.localStorage.setItem('contas',JSON.stringify(produtoGravado)); // gravar na memoria
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
    const id = document.getElementById("id").value;
    const descricao = document.getElementById("descricao").value;
    const tipo = document.getElementById("tipo").value;
    const categoria = document.getElementById("categoria").value;
   
  
    const produto = {id: Date.now(),descricao, tipo, categoria};
    //contas.push(produto);//
    // criar o objeto na localstorage
    // esta vazio na memoria
    //window.localStorage.setItem('contas',JSON.stringify([])); // criar
    // primeiro acesso verificar se existe a chave na memoria
    let produtoGravado = JSON.parse(window.localStorage.getItem("contas"));
    if(produtoGravado == null){ // primeiro acesso chave ainda não foi criada
      window.localStorage.setItem('contas',JSON.stringify([])); // criar
      produtoGravado = JSON.parse(window.localStorage.getItem("contas"));// atualizar a minha variavel
      // validar se o email ja´ existe
      
        produtoGravado.push(produto); // adiciona um novo produto
        window.localStorage.setItem('contas', JSON.stringify(produtoGravado)); // gravar na memoria o objeto atualizado
        Swal.fire({
      
          icon: 'success',
          title: 'Produto cadastrado com sucesso!',
          showConfirmButton: false,
          timer: 1500
        });
      
    }else{ // chave produto já existe na memória
      
        produtoGravado.push(produto); // adiciono um novo produto
        window.localStorage.setItem('contas',JSON.stringify(produtoGravado)); // gravar na memoria
        Swal.fire({
      
          icon: 'success',
          title: 'Produto cadastrado com sucesso!',
          showConfirmButton: false,
          timer: 1500
        });
      
    }
    /*produtoGravado.push(produto);
    window.localStorage.setItem('contas',JSON.stringify(produtoGravado));// gravo na memoria o array novo
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
        let contasGravado = JSON.parse(window.localStorage.getItem("contas"));
        let produtoIndex = contasGravado.findIndex(produto => produto.id == id);
        if(produtoIndex >= 0){
          contasGravado.splice(produtoIndex,1);
          window.localStorage.setItem('contas', JSON.stringify(contasGravado));
          if(contasGravado.length > 0){
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
  document.getElementById("id").value = "";
  document.getElementById("descricao").value = "";
  document.getElementById("tipo").value = "";
  document.getElementById("categoria").value = ""; */
  
  /* limpar de forma automatica */
  let inputs = document.getElementsByTagName("input");
  for(let i = 0; i < inputs.length; i++){
     inputs[i].value = "";
  }
  document.getElementById("descricao").value = "";
    
  }
  
  
  
  function editarproduto(id){
    let contasGravado = JSON.parse(window.localStorage.getItem("contas"));
    for(let i = 0; i < contasGravado.length; i++){
        if(contasGravado[i].id == id){
  
          document.getElementById("id").value = contasGravado[i].id;
          document.getElementById("descricao").value = contasGravado[i].descricao;
          document.getElementById("tipo").value = contasGravado[i].tipo;
          document.getElementById("categoria").value = contasGravado[i].categoria;
          
        }
   }
  }
  
  function alterarProduto(){
    const id = document.getElementById("id").value;
    const descricao = document.getElementById("descricao").value;
    const tipo = document.getElementById("tipo").value;
    const categoria = document.getElementById("categoria").value;
  
    contagravada = JSON.parse(window.localStorage.getItem("contas"));
    let containdex = contagravada.findIndex((contas => contas.id == id));
    if(containdex >= 0){
    contagravada[containdex] = {id,descricao,tipo,categoria};
    window.localStorage.setItem("contas",JSON.stringify(contagravada));
    }
    Swal.fire({
      
      icon: 'success',
      title: 'Produto atualizado com sucesso!',
      showConfirmButton: false,
      timer: 1500
    });
    limpar();
    listarprodutos();
  
  }
  function alterarPr(){
    const id = document.getElementById("id").value;
    const descricao = document.getElementById("descricao").value;
    const tipo = document.getElementById("tipo").value;
    const categoria = document.getElementById("categoria").value;
  
    // como fazer para atualiza a posicao do array
    usuarios[id] = {id,descricao,tipo,categoria};
    Swal.fire({
  
      icon: 'success',
      title: 'Usuário atualizado com sucesso!',
      showConfirmButton: false,
      timer: 1500
    });
    limpar();
    listarprodutos();
  
  }
  function ListarCategorias(){
    let linha = "";
    let categorias = JSON.parse(localStorage.getItem("produtos"));
    if(categorias){
    categorias.forEach(produto => {
      let row = document.getElementById("categoria");
      if(row != null){
        linha += 
        "<option value="+produto.nome+">"+produto.nome+"</option>"
        row.innerHTML = linha;
      }
    });
  }
    }

  
  function listarprodutos(){
    let linha = "";
    let contasGravado = JSON.parse(window.localStorage.getItem("contas"));
    if(contasGravado){
     
    contasGravado.forEach(produto => {
      row = document.getElementById("tbody");
      if(row != null){
       linha += "<tr>"+
                "<td id='tdid'>"+produto.id +"</td>"+
                "<td id='tddescricao'>"+produto.descricao+"</td>"+
                "<td id='tdtipo'>"+produto.tipo+"</td>"+
                "<td id='tdcategoria'>"+produto.categoria+"</td>"+
                "<td id='tdacoes'><button class='btn btn-outline-success' onclick='editarproduto("+produto.id+")'><i class='fa fa-edit'></i></button>"+
                "<button class='btn btn-outline-danger'onclick='apagarproduto("+produto.id+")'><i class='fa fa-trash'></i></button></td>"
              +"</tr>";
      row.innerHTML = linha;        
      }   
    
    
    });
    }
   }
  function listarcontasVendas(){
    let linha = "";
    let contasGravado = JSON.parse(window.localStorage.getItem("contas"));
    if(contasGravado){
     
    contasGravado.forEach(produto => {
      row = document.getElementById("contasVenda");
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
   function listarcontasCarrinho(){
    let linha = "";
    let contasCarrinho = JSON.parse(window.localStorage.getItem("cartComprados"));
    if(contasCarrinho){ // tem contas no carrinho
     
    contasCarrinho.forEach(produto => {
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
    else{ // não tem contas no carrinho vamos desabilita o botao finalizar
        document.getElementById("btnfinalizar").disabled = true;
    }
   }
  
  function atualizarQtdeCarrinho(id){
    let qtde = document.getElementById("qtdeCarrinho").value;
    let contasCarrinho = JSON.parse(window.localStorage.getItem("cartComprados"));
    // encontrar a posicao do objeto que veio do carrinho
    let produtoIndex = contasCarrinho.findIndex(produto => produto.id_produto == id);
    if(produtoIndex >= 0){ // atualizar a quantidade do produto na variavel local
        contasCarrinho[produtoIndex].quantidade = qtde;
        // atualizar o carrinho na memoria
        window.localStorage.setItem("cartComprados", JSON.stringify(contasCarrinho));
        // atualizar a tela
        listarcontasCarrinho();
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
        // primeiro recuperar os contas do carrinho em memoria
        let contasCarrinho = JSON.parse(window.localStorage.getItem("cartComprados"));
        // faço a busca na memoria da posicao que o usuario quer apagar o item
        let produtoIndex = contasCarrinho.findIndex(produto => produto.id_produto == id);
        
        if(produtoIndex >= 0){ // se encontrou vamos apagar
          contasCarrinho.splice(produtoIndex,1); // apagando o item do array
          // atualizar novamento o objeto na memoria sem item excluido
          window.localStorage.setItem('cartComprados', JSON.stringify(contasCarrinho));
          if(contasCarrinho.length > 0){ // verificar se ainte tem item no array para recarregar a tela
            listarcontasCarrinho();
            listaCartBagde();
          }else{ // não existe contas no carrinho tem que limpar da memória
            row = document.getElementById("tbodycompras");
            row.innerHTML = "";
            listarcontasCarrinho();
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
     let contasCarrinho = JSON.parse(window.localStorage.getItem("cartComprados"));
     if(contasCarrinho){
  
       // atualizar a quantidade de contas comprados na parte de resumo pedido
       document.getElementById("qtdeTotal").innerHTML = contasCarrinho.length+" produto(s)";
  
       // calculando o total do carrinho de compras
        for(let i = 0; i < contasCarrinho.length; i++){
          total += parseFloat(contasCarrinho[i].preco * contasCarrinho[i].quantidade);
        }
        // atualizar os totais no resumo do pedido
        document.getElementById("precoTotal").innerHTML = "R$ "+total.toFixed(2) ;
        document.getElementById("precoFinal").innerHTML = "R$ "+total.toFixed(2) ;
     }
   }
   
   function finalizarCarrinho(){
     // recuperar na memoria se tem algo no carrinho
     let contasCarrinho = JSON.parse(window.localStorage.getItem("cartComprados"));
     if(contasCarrinho){
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
   
   function adicionarCarrinho(id){
      let cart = JSON.parse(window.localStorage.getItem("cartComprados"));
      let contasGravados = JSON.parse(window.localStorage.getItem("contas"));
      let produtoIndex = contasGravados.findIndex(produto => produto.id == id);
      
      
          
      if(cart == null){
        window.localStorage.setItem("cartComprados",JSON.stringify([]));
        cart = JSON.parse(window.localStorage.getItem("cartComprados"));
        // id_produto, nomeproduto, quantidade, preco
        let produtoCart = {
          id_produto: id,
          nomeproduto: contasGravados[produtoIndex].nome,
          quantidade: 1,
          preco: contasGravados[produtoIndex].preco
        }
        
        cart.push(produtoCart);
        window.localStorage.setItem("cartComprados",JSON.stringify(cart));
        Swal.fire({
      
          icon: 'success',
          title: 'Produto adicionado ao Carrinho com sucesso!',
          showConfirmButton: false,
          timer: 1500
        });
        listaCartBagde();
  
      }else{
         let produtoCart = {
           id_produto: id,
           nomeproduto: contasGravados[produtoIndex].nome,
           quantidade: 1,
           preco: contasGravados[produtoIndex].preco
         }
        cart.push(produtoCart);
        window.localStorage.setItem("cartComprados",JSON.stringify(cart));
        Swal.fire({
      
          icon: 'success',
          title: 'Produto adicionado ao Carrinho com sucesso!',
          showConfirmButton: false,
          timer: 1500
        });
        listaCartBagde();
      }
  
   }
   function listaCartBagde(){
    let cart = JSON.parse(window.localStorage.getItem("cartComprados"));
    if(cart){
     document.getElementById("cart").innerHTML = cart.length;
    }else{
     document.getElementById("cart").innerHTML = 0;
    }
  }
  ListarCategorias();
   listarprodutos();
   
