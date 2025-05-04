# 📦 Instalação de Requisitos para o Projeto

Este projeto utiliza microFrontends com Vue.js 3, Webpack Module Federation e outras ferramentas modernas. Abaixo estão listadas as dependências e instruções para instalação do ambiente necessário.

---

## ✅ Pré-requisitos

Antes de iniciar, verifique se os seguintes softwares estão instalados e nas versões indicadas:

- **Node.js**: `v21.6.2`
- **npm**: `v10.2.4`
- **Vue CLI**: `@vue/cli 5.0.8`
- **http-server**: versão mais recente

---

## 🔧 Passo a passo para instalação

### 1. Instalar Node.js e npm

Acesse o site oficial e baixe a versão compatível:

🔗 https://nodejs.org/

Após a instalação, confirme as versões:

```bash
node -v   # Deve retornar v21.6.2 ou uma versão superior
npm -v    # Deve retornar v10.2.4 ou uma versão superior
```

### 2. Instalar Vue CLI (Global)
Use o comando abaixo para instalar o Vue CLI globalmente:
```bash
npm install -g @vue/cli@5.0.8
```

Verifique a instalação:
```bash
vue --version  # Deve retornar 5.0.8 ou uma versão superior
```

### 3. Instalar http-server (Global)
Esse pacote será utilizado para servir os arquivos estáticos gerados pelo build do projeto:

```bash
npm install -g http-server
```

Verifique a instalação:
```bash
http-server --version
```

### 4. Instalar dependências dos projetos
Após o clonar o repositório, você verá que o mesmo é composto por três projetos, sendo: **orquestrador**, **sistema-a** e **sistema-b**. Basta rodar o comando abaixo para fazer a instalação de dependências de cada um deles:

```bash
cd orquestrador && npm i && cd ../sistema-a && npm i && cd ../sistema-b && npm i
```

### 5. Buildar os microFrontends e inicializar Servidores (http-server)

Antes de executar o orquestrador, faça o build dos microFrontends e rode o http-server. <ins> Aconselho rodar esses comandos em terminais separados. </ins>

#### Sistema A
```bash
cd ../sistema-a && npm run build && http-server dist -p 8081 --cors
```

#### Sistema B
```bash
cd ../sistema-b && npm run build && http-server dist -p 8082 --cors
```

### 6. Inicializar o Orquestrador

Após ter concluido o build e levantado o servidor de cada um dos microFrontends, levante o servidor do orquestrador.

```bash
cd ../orquestrador && npm run serve
```