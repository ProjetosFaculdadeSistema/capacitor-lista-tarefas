# Lista de Tarefas — Capacitor

App simples de lista de tarefas (HTML + CSS + JS puro) empacotado como app
Android com o **Capacitor**. Feito para o Seminário de Frameworks de
Desenvolvimento Mobile.

O app tem duas páginas (Início e Sobre), então dá pra mostrar navegação,
captura de toque (adicionar/marcar/remover tarefa e o botão de vibração) e a
sintaxe usada (JS comum, sem framework nenhum em cima).

---

## 1. O que precisa instalar antes

| Ferramenta | Pra que serve | Link |
|---|---|---|
| **Node.js** (versão 18 ou mais nova) | Roda o npm, que instala o Capacitor | https://nodejs.org |
| **Android Studio** | Emulador Android + compila o app | https://developer.android.com/studio |
| **JDK 17** | Necessário pro Android Studio compilar. O próprio Android Studio já baixa um JDK junto (não precisa instalar separado na maioria dos casos) | — |

Depois de instalar o Node, confirma no terminal:

```bash
node -v
npm -v
```

Se aparecer um número de versão nos dois, tá tudo certo.

No Android Studio, na primeira vez que abrir, ele vai pedir pra baixar o
**Android SDK** e componentes — deixa ele baixar tudo (pode demorar uns
minutos).

---

## 2. Testar rapidinho no navegador (sem precisar de nada disso)

Antes de mexer com Android, dá pra já ver o app funcionando só abrindo o
arquivo `www/index.html` direto no navegador (Chrome, por exemplo, com
botão direito → Abrir com...). Serve pra testar a lógica da lista de
tarefas e mexer no visual sem precisar compilar nada.

A parte de vibração (na página "Sobre") só funciona de verdade em
celular Android — no navegador do PC ele só mostra a mensagem de aviso.

---

## 3. Colocando o projeto pra rodar como app (Android)

Na pasta do projeto, abre o terminal e roda, **nesta ordem**:

```bash
# 1. instala as dependências do projeto (Capacitor)
npm install

# 2. adiciona a plataforma Android ao projeto (cria a pasta /android)
npx cap add android

# 3. copia os arquivos da pasta www/ pra dentro do projeto Android
npx cap sync
```

Esses três comandos já foram testados nesse projeto e funcionam sem erro
(testado com Node v22 e Capacitor 6.2.2). Isso cria uma pasta `android/`
com um projeto nativo completo por baixo dos panos — é esse projeto que
vira o `.apk`.

Sempre que você alterar algo em `www/` (html, css ou js), rodar de novo
o `npx cap sync` (ou pelo menos `npx cap copy`) pra atualizar o app.

---

## 4. Rodando no emulador ou no celular

```bash
npx cap open android
```

Isso abre o projeto direto no **Android Studio**. De lá:

1. Espera o Gradle terminar de sincronizar (barra de progresso embaixo).
2. Escolhe um emulador na barra de cima (ou conecta seu celular por
   USB com a "Depuração USB" ativada nas opções de desenvolvedor).
3. Clica no botão verde de **Play (▶)**.

O app instala e abre sozinho no emulador/celular.

> Se for usar celular físico: nas configurações do Android, entra em
> "Sobre o telefone" → toca 7 vezes em "Número da versão" pra ativar o
> modo desenvolvedor, depois em "Opções do desenvolvedor" liga a
> "Depuração USB".

---

## Estrutura do projeto

```
lista-tarefas-capacitor/
├── capacitor.config.json   → configuração do Capacitor (nome do app, pasta web)
├── package.json            → dependências do projeto
├── www/                     → TODO o código do app fica aqui (é isso que roda dentro do app)
│   ├── index.html           → tela principal (lista de tarefas)
│   ├── sobre.html            → tela "Sobre" (navegação + vibração)
│   ├── style.css             → estilo visual
│   ├── app.js                 → lógica da lista de tarefas
│   └── sobre.js                → lógica do botão de vibração
└── android/                  → só aparece depois do "npx cap add android" (projeto nativo)
```

---

## Se quiser ir além (opcional, não precisa pra entregar)

- Trocar o `localStorage` por um plugin real do Capacitor, tipo o
  `@capacitor/preferences`, pra guardar os dados de um jeito mais
  "nativo".
- Usar o `@capacitor/camera` pra tirar foto e anexar numa tarefa.
- Compilar um `.apk` final em Android Studio: menu **Build → Build
  Bundle(s) / APK(s) → Build APK(s)**.
