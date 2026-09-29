# 📋 Lista de Tarefas — Capacitor

![Capacitor](https://img.shields.io/badge/Capacitor-119EFF?style=for-the-badge&logo=capacitor&logoColor=white)
![Android](https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

Projeto feito pro **Seminário de Frameworks de Desenvolvimento Mobile** (IFPR — Campus Palmas), sobre o framework **Capacitor**.

É um app de lista de tarefas simples, em HTML, CSS e JavaScript puro (sem framework nenhum em cima, de propósito), empacotado como app Android com o Capacitor. A ideia era justamente mostrar o Capacitor "cru", sem nada escondendo o que ele faz por baixo.

O app tem duas telas — Início e Sobre — pra dar pra mostrar navegação entre páginas, captura de toque (adicionar, marcar como feita e remover tarefa) e acesso a um recurso de hardware do celular (o botão de vibração, na tela Sobre).

---

## 🧩 Sobre o Capacitor

O Capacitor é um framework híbrido/multiplataforma mantido pela **Ionic**, que pega uma aplicação web comum e empacota ela dentro de um app nativo (Android, iOS ou até web), dando acesso a recursos do aparelho — câmera, GPS, vibração, entre outros — através de plugins em JavaScript.

---

## 🛠️ O que precisa ter instalado

| Ferramenta | Pra que serve |
|---|---|
| [Node.js](https://nodejs.org) (18+) | Roda o npm, que instala o Capacitor |
| [Android Studio](https://developer.android.com/studio) | Compila e roda o app no emulador/celular |
| JDK 17 | O próprio Android Studio já vem com um, não precisa instalar separado |

Depois de instalar o Node, dá pra confirmar no terminal:

```bash
node -v
npm -v
```

Se aparecer número de versão nos dois, tá tudo certo.

---

## 👀 Dá pra testar sem instalar nada do Android

Antes de mexer com o Capacitor, o app já funciona só abrindo o `www/index.html` direto no navegador. Serve pra ver a lógica da lista de tarefas funcionando sem precisar compilar nada.

A vibração (na tela Sobre) só funciona de verdade em celular Android — no navegador do PC ele só mostra um aviso.

---

## 📦 Rodando como app Android

Na pasta do projeto, no terminal:

```bash
# instala as dependências
npm install

# adiciona a plataforma Android (cria a pasta /android)
npx cap add android

# copia os arquivos da www/ pro projeto Android
npx cap sync
```

Toda vez que mudar algo dentro de `www/`, roda `npx cap sync` de novo pra atualizar o app.

---

## ▶️ Rodando no emulador ou no celular

```bash
npx cap open android
```

Abre o projeto no Android Studio. De lá:

1. Espera o Gradle sincronizar.
2. Escolhe um emulador ou conecta o celular por USB (com a Depuração USB ativada).
3. Clica no ▶ verde.

> Pra usar celular físico: em Configurações → Sobre o telefone, toca 7x em "Número da versão" pra ativar as opções de desenvolvedor, depois liga a Depuração USB.

---

## 📂 Estrutura

```
capacitor-lista-tarefas/
├── capacitor.config.json   → configuração do Capacitor
├── package.json            → dependências
├── www/                     → todo o código do app
│   ├── index.html           → tela de lista de tarefas
│   ├── sobre.html            → tela Sobre (navegação + vibração)
│   ├── style.css             → estilo
│   ├── app.js                 → lógica da lista de tarefas
│   └── sobre.js                → lógica do botão de vibração
└── android/                  → gerado depois do "cap add android"
```

---

## 💡 Pra ir além

- Trocar o `localStorage` por um plugin real do Capacitor, como o `@capacitor/preferences`.
- Usar o `@capacitor/camera` pra anexar foto numa tarefa.
- Gerar o `.apk` final em **Build → Build Bundle(s) / APK(s)** no Android Studio.

---

Feito por **João Vitor Koch** — Bacharelado em Sistemas de Informação, IFPR Campus Palmas.
