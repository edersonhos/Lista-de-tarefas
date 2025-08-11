//inicializando o localStorage
meuStorage = localStorage;
// Verifica se o localStorage já contém itens e exibe-os
if (meuStorage.length > 0) { 
    exibirItens(); // Exibe os itens já existentes
    atualizarContador(); // Atualiza o contador ao carregar a página}
}
// atualizar dados contador
function atualizarContador() {
    let totalLista = meuStorage.length;
    let Count = document.getElementById("task-count-number");   
    Count.innerHTML = totalLista;
}

// Função para adicionar um item ao localStorage
function adicionarItem() {
    let titulo = document.getElementById("task-input-title").value;
    let descricao = document.getElementById("task-input-desc").value;

    if (titulo === "" || descricao === "") {
        alert("Por favor, preencha ambos os campos.");
        return;
    }

    meuStorage.setItem(titulo, descricao);

    document.getElementById("task-input-title").value = "";
    document.getElementById("task-input-desc").value = "";
    exibirItens(); // Atualiza a exibição após adicionar o item
    atualizarContador(); // Atualiza o contador após adicionar o item
}

//funcão para exibir os itens do localStorage
function exibirItens() { 
    let lista = document.getElementById("task-list-ul");
    lista.innerHTML = ""; // Limpa a lista antes de exibir os itens

    for (let i = 0; i < meuStorage.length; i++) {
        let titulo = meuStorage.key(i);
        let descricao = meuStorage.getItem(titulo);

        let item = document.createElement("li");
        item.className = "task-itens-lista";
        let title = document.createElement("h2");
        title.textContent = titulo;
        item.appendChild(title);
        title.className = "item-title";
        let description = document.createElement("h4");
        description.textContent = descricao;
        item.appendChild(description);
        title.className = "item-description";
        lista.appendChild(item);
        // Cria o botão de exclusão
        let itemAct = document.createElement("button"); 
        itemAct.className = "item-action-button-delete";
        itemAct.onclick = function() {meuStorage.removeItem(titulo);
            exibirItens(); /*Atualiza a exibição após remover o item*/
            atualizarContador(); // Atualiza o contador após remover o item
        }
        itemAct.textContent = "Excluir";   
        item.appendChild(itemAct);
    };
}

// Função para limpar a lista
function limparLista() {
    if (confirm("Você tem certeza que deseja limpar a lista?")) {
        meuStorage.clear();
        exibirItens(); // Atualiza a exibição após limpar
        atualizarContador(); // Atualiza o contador após limpar
    }
}