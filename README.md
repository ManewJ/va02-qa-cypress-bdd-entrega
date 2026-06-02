# VA02 — Automação de Testes BDD 🧪

Projeto de testes automatizados do [Portal da Transparência Gov.br](https://portaldatransparencia.gov.br/) utilizando BDD com Cypress, Cucumber e Gherkin.

---

## 👥 Integrantes

| Nome | Função |
|------|--------|
| Pedro | Desenvolvimento dos testes — Home |
| Rodrigo | Desenvolvimento dos testes — Despesas |
| Manoel | Desenvolvimento dos testes — Servidores |
| Rayssa | Desenvolvimento dos testes — Receitas e Contratos |

---

## 📋 Sobre o Projeto

A validação manual de funcionalidades de portais públicos é lenta e sujeita a erros humanos. O VA02 automatiza esse processo com a abordagem **BDD (Behavior Driven Development)**, onde os testes são escritos em linguagem natural (Gherkin) e executados automaticamente pelo Cypress.

O projeto cobre 4 seções do Portal da Transparência: **Home, Despesas, Servidores e Receitas/Contratos**, totalizando 23 cenários de teste.

---

## 🚀 Funcionalidades Testadas

- Navegação e carregamento da página inicial
- Consulta e filtragem de despesas públicas
- Busca de servidores públicos federais por nome
- Consulta de receitas e contratos do governo federal

---

## 🛠️ Tecnologias

- React Native + Expo
- Cypress 13
- Cucumber Preprocessor
- Gherkin
- Page Object Model (POM)
- Node.js / npm

---

## ▶️ Como Executar

```bash
# Instale as dependências
npm install

# Modo interativo (recomendado)
npm run cy:open

# Modo headless
npm run cy:run
```

---

## 📁 Estrutura

```
cypress/
├── e2e/
│   ├── features/     # Cenários em Gherkin (o quê testar)
│   ├── steps/        # Step Definitions (a ponte)
│   └── pages/        # Page Objects (o como)
├── fixtures/         # Dados estáticos
└── support/          # Configurações globais
```

---

## 📊 Resultado dos Testes

| Membro | Feature | Resultado |
|--------|---------|-----------|
| Pedro | Home | 13/13 ✅ |
| Rodrigo | Despesas | 5/5 ✅ |
| Manoel | Servidores | 6/6 ✅ |
| Rayssa | Receitas/Contratos | 5/5 ✅

**Total: 4 features · 23 cenários**

---

## 🎓 Informações Acadêmicas

**Instituição:** Centro Universitário UNIESP  
**Curso:** Sistemas para Internet  
**Disciplina:** Qualidade de Software  
**Professor:** Angelo Dias  
**Período:** 2026
