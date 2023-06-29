let btnAddAnotacao = document.querySelector('button.add-btn');
let containerAnotacao = document.querySelector('.container-anotacao');
let btnSalvar = document.querySelectorAll('.btnSalvar');

// HORAS
var date = new Date();
var hora = date.getHours();
var minutos = date.getMinutes();
let Time = hora + ":" + minutos;

btnAddAnotacao.addEventListener('click', function () {
    // bloco de anotação
    let anotacaoSingle = document.createElement('div');
    anotacaoSingle.classList.add('anotacao-single');

    let anotacaoSpan = document.createElement('span');
    anotacaoSpan.innerText = "Nova Anotação - " + Time;

    let textarea = document.createElement('textarea');
    textarea.cols = "30";
    textarea.rows = "10";
    textarea.placeholder = "Nova Anotação";

    let btnSalvar = document.createElement('button');
    btnSalvar.classList.add('btnSalvar');
    btnSalvar.innerText = "Salvar";

    let btnExcluir = document.createElement('button');
    btnExcluir.classList.add('btnExcluir');
    btnExcluir.innerText = "Excluir";

    anotacaoSpan.appendChild(textarea);
    anotacaoSpan.appendChild(btnSalvar);
    anotacaoSpan.appendChild(btnExcluir);
    anotacaoSingle.appendChild(anotacaoSpan);
    containerAnotacao.appendChild(anotacaoSingle);

    btnSalvar.addEventListener('click', () => {
        const anotacao = textarea.value;
        localStorage.setItem(`anotacao-${Date.now()}`, anotacao);
    });

    btnExcluir.addEventListener('click', () => {
        containerAnotacao.removeChild(anotacaoSingle);
        localStorage.removeItem(`anotacao-${Date.now()}`);
    });
});

window.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('anotacao-')) {
            const anotacao = localStorage.getItem(key);
            const anotacaoSingle = document.createElement('div');
            anotacaoSingle.classList.add('anotacao-single');

            let anotacaoSpan = document.createElement('span');
            anotacaoSpan.innerText = key.substring(9); // Exclui o prefixo "anotacao-"

            let textarea = document.createElement('textarea');
            textarea.cols = "30";
            textarea.rows = "10";
            textarea.placeholder = "Nova Anotação";
            textarea.value = anotacao;

            let btnSalvar = document.createElement('button');
            btnSalvar.classList.add('btnSalvar');
            btnSalvar.innerText = "Salvar";

            let btnExcluir = document.createElement('button');
            btnExcluir.classList.add('btnExcluir');
            btnExcluir.innerText = "Excluir";

            anotacaoSpan.appendChild(textarea);
            anotacaoSpan.appendChild(btnSalvar);
            anotacaoSpan.appendChild(btnExcluir);
            anotacaoSingle.appendChild(anotacaoSpan);
            containerAnotacao.appendChild(anotacaoSingle);

            btnSalvar.addEventListener('click', () => {
                const updatedAnotacao = textarea.value;
                localStorage.setItem(key, updatedAnotacao);
            });

            btnExcluir.addEventListener('click', () => {
                containerAnotacao.removeChild(anotacaoSingle);
                localStorage.removeItem(key);
            });
        }
    }
});
