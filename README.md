# Treinamento de Vue.js
![code-size](https://img.shields.io/github/languages/code-size/andersondev96/treinamento-vuejs?color=%23DB46B3)
![language-count](https://img.shields.io/github/languages/count/andersondev96/treinamento-vuejs?color=%23DB46B3)

Aplicação desenvolvida durante o Treinamento de Vue.js da Vue.js Brasil

[Sobre o projeto](#-sobre-o-projeto) | [Tecnologias utilizadas](#-tecnologias-utilizadas) | [Layout da aplicação](#-layout-da-aplicação) | 
[Como executar a aplicação](como-executar-a-aplicação) | [Como contribuir](#-como-contribuir) | [Licença](#-licença) | [Autor](#-autor)

## 📄 Sobre o projeto
O projeto é um sistema de *feedbacks*, no qual possuirá um *widget*, que poderá ser vinculado a qualquer site, para os usuários deixarem os seus comentários.
Neste sistema serão listados todos os *feedbacks*, categorizando-os em: **Todos**, **Problemas**, **Ideias** e **Outros**. Para vincular o *widget* em um site, o usuário
deve pegar uma credencial da chave API e inserir no código fonte de seu site.

## 🧑‍💻 Tecnologias utilizadas
[![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en)
[![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black)](https://babeljs.io/)
[![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)](https://jestjs.io/pt-BR/)

## 🎨 Layout da aplicação

O layout da aplicação está disponível através dos *links* abaixo:

- [Dashboard](https://www.figma.com/file/WhUZBnYnxgXVImQjh04Qon/Admin?type=design&node-id=0%3A1&mode=design&t=wFfLjnAzNe2OkmUg-1)
- [Widget](https://www.figma.com/file/VYWmc92nrhSqrgUxf6QpFj/Widget?type=design&node-id=0%3A1&mode=design&t=EzINA7jPeDOr557M-1)

Lembrando que é necessário possuir uma conta no [Figma](https://figma.com/) para ter acesso aos *layouts*.

## 🚀 Como executar a aplicação
Antes de executar a aplicação certifique que você tenha instalada uma versão LTS do [Node](https://nodejs.org/en/download).

Com o node.js instalado, siga os passos:

- Clone o repositório:
   ```
   git clone https://github.com/andersondev96/treinamento-vuejs/
   ```
- Acesse o back-end do projeto e instale as dependências:
  ```
  cd backend
  npm install
  ```
- Faça o build do back-end em um container docker:
  ```
  npm run build
  ```
- Rode o container que foi buildado:
  ```
  npm run container
  ```
- O backend estará disponível na porta `3000`
- Acesse o dashboar da aplicação e instale as suas dependências:
  ```
  cd dashboard
  npm install
  ```
- Execute a aplicação.
  ```
  npm run serve
  ```
- Acesse o widget e instale as suas dependências:
  ```
  cd widget
  npm install
  ```
- Execute a aplicação:
  ```
  npm run serve
  ```

  ## 🤝 Como contribuir?

- Faça um fork desse repositório.
- Crie uma branch com a sua feature: `git checkout -b my-feature`.
- Faça commit das suas alterações: `git commit -m 'feat: My new feature'`.
- Faça push para a sua branch: `git push origin my-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

## 📝 Licença

Este projeto está sob a licença [MIT](LICENSE).

## 👥 Autor

<img src="https://avatars.githubusercontent.com/u/49786548?v=4" width="64" style="border: 2px solid blue; border-radius: 50px" />

**Anderson Fernandes Ferreira**

[![instagram](https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com/anderson_ff13)
[![email](https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white)](mailto:andersonfferreira96@gmail.com.br)
[![linkedin](https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/anderson-fernandes96/)

Feito com 💚 por Anderson Fernandes 👋 [Entre em contato!](https://www.linkedin.com/in/anderson-fernandes96/)

