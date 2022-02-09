# Site PS Unect

Site desenvolvido para a divulgação do Processo Seletivo da Unect Jr.

Tecnogias utilizadas:

- HTML/CSS
- JavaScript

## Instalação

Clone o repositório e acesse o diretório do projeto:

```
$ git clone https://gitlab.com/UnectJr/site-ps-unect.git

$ cd site-ps-unect
```

## Estrutura

### Git

Visando uma melhor manutebilidade, este repositório é divido em branches, das quais são:

|Branch|Descrição|
|------|---------|
|main|Códigos estáveis ou em produção|
|dev|Códigos em desenvolvimento|
|feat-nome|Funcionalidade em desenvolvimento|
|fix-nome|Correção de bugs ou issues em desenvolvimento|

### Diretórios

A estrutura dos diretórios é uma coleção de práticas utilizadas em diversos projetos com tais tecnologias. A árvore de diretórios do projeto se dá desta maneira:

```
site-ps-unect
|
└─── public/ ...
|
|    .firebaserc
|    .gitignore
|    firebase.json
|    README.md
```

Dentro da pasta `public` estará todo o código do projeto em si e qualquer assets necessários para o funcionamento do site, tais como:
- `index.html`
- `favicon.ico`
- `404.html`

Cuidado, é importante não deixar nenhum arquivo com credencial ou similar dentro desta pasta, pois ela e todo seu conteúdo ficarão visíveis após o deploy.

Nesta pasta, também existe uma estrutura de subdiretórios, os quais são:

|Diretório|Descrição|
|-|-|
|css|Arquivos de estilo do site|
|img|Imagem e/ou qualquer asset estático do site|
|js|Scripts do site|

## Deploy

O site está sendo hospedado através do Firebase Hosting e pode ser gerenciado através do console do Firebase [a partir deste link](https://console.firebase.google.com/u/2/project/unect-site/hosting/sites/ps-unect). 

Para acessar o console, é necessário ter as credencias, caso você não tenha, entre em contato com o gerente do projeto.

Para fazer um novo deploy do site será necessário instalar o CLI do Firebase no sistema:

```
$ npm install -g firebase-tools

$ firebase -V
```

Agora, é preciso fazer o login na conta do Firebase onde está o projeto.

```
$ firebase login
```

Uma vez logado no Firebase, é possível fazer o deploy de uma nova versão do site através do comando seguinte:

```
$ firebase deploy --only hosting:psunect
```

Atenção: Para garantir uma consistência e fácil manutenção no site, é recomendado que o código do site venha sempre da branch `main`, dessa forma, é possível garantir que o site que está "no ar"/em produção é o equivalente ao código que está na branch `main`.

Dito isso, toda vez que for necessário realizar alguma correção ou melhoria no site, é recomendado que utilize o seguinte fluxo:

```
nova-funcionalidade -> dev -> main
```

---

Para mais informações e referências acesse a [documentação](https://firebase.google.com/docs/hosting) ou esta [série de tutoriais](https://www.youtube.com/watch?v=mmmaeHBCTOw) sobre o Firebase Hosting.
