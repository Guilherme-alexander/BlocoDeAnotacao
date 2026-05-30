# 📝 Sistema de Anotações

Aplicação web de anotações desenvolvida com **HTML, CSS e JavaScript puro**, focada em simplicidade, organização e armazenamento local.

O projeto permite criar múltiplas anotações, salvar automaticamente no navegador e recuperar tudo ao recarregar a página — sem necessidade de banco de dados ou backend.

Ideal para estudos de **JavaScript DOM**, **LocalStorage** e construção de interfaces web responsivas.

   ![html](https://img.shields.io/badge/Html-red)
   ![css](https://img.shields.io/badge/Css-blue)
   ![css](https://img.shields.io/badge/JavaScript-yellow)
   ![Platform](https://img.shields.io/badge/platform-Web-lightgrey)
   ![License](https://img.shields.io/badge/License-MIT-ffffff)

<br/>

## ✨ Preview

📌 Crie novas anotações rapidamente
💾 Salve no navegador automaticamente
🗑️ Exclua quando quiser
📱 Interface responsiva para desktop e mobile
🎨 Visual moderno com tema escuro e efeito glassmorphism

<br/>

## 🚀 Funcionalidades

### ➕ Criar novas anotações

Clique no botão flutuante **"+"** para criar uma nova anotação.

Cada anotação contém:

* título com data/hora
* campo de texto
* botão **Salvar**
* botão **Excluir**

<br/>

### 💾 Armazenamento local

As anotações são salvas usando:

```javascript
localStorage
```

Isso significa que:

✅ não precisa de login
✅ não precisa de servidor
✅ as anotações permanecem após atualizar a página
✅ funciona offline

<br/>

### 🗑️ Excluir anotações

Cada card pode ser removido individualmente.

A anotação também é removida do navegador automaticamente.

<br/>

### 📱 Layout responsivo

Interface adaptada para:

* 💻 Desktop
* 📱 Smartphones
* 📲 Tablets

Com:

* cards flexíveis
* botões adaptáveis
* scrollbar personalizada

<br/>

## 🛠️ Tecnologias utilizadas

* HTML5
* CSS3
* JavaScript (Vanilla JS)
* LocalStorage API

<br/>

## 📂 Estrutura do projeto

```bash
📁 BlocoDeAnotacao/
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── index.html
└── README.md
```

<br/>

## ▶️ Como executar

### 1. Clone o projeto

```bash
git clone https://github.com/Guilherme-alexander/BlocoDeAnotacao.git
```

<br/>

### 2. Entre na pasta

```bash
cd BlocoDeAnotacao
```

<br/>

### 3. Abra no navegador

Abra:

```bash
index.html
```

ou utilize uma extensão como:

* Live Server (VS Code)

<br/>

## 📚 Aprendizados com esse projeto

Esse projeto foi criado para praticar:

* manipulação do DOM
* criação dinâmica de elementos
* eventos em JavaScript
* `addEventListener`
* `localStorage`
* organização visual com CSS
* responsividade
* estrutura de projetos front-end

<br/>

## 🔮 Melhorias futuras

Ideias para próximas versões:

* [ ] editar título da anotação
* [ ] busca por palavras
* [ ] categorias
* [ ] cores personalizadas por nota
* [ ] exportar/importar JSON
* [ ] modo automático de salvar
* [ ] arrastar e reorganizar cards
* [ ] contador de caracteres

<br/>

## 👨‍💻 Autor

**Guilherme Alexander**

GitHub: [Guilherme-alexander](https://github.com/Guilherme-alexander)

---

## 📄 Licença

Projeto disponível sob a licença **MIT**.

Sinta-se livre para estudar, modificar e melhorar.

⭐ Se esse projeto te ajudou ou você gostou do código, deixa uma estrela no GitHub.
