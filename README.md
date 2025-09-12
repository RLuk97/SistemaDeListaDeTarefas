# Sistema de Lista de Tarefas (Todo List)

Um sistema simples e elegante de gerenciamento de tarefas desenvolvido com React, Vite e Bootstrap. O projeto permite visualizar, filtrar e gerenciar uma lista de tarefas obtidas de uma API externa.

## 🚀 Funcionalidades

- **Listagem de Tarefas**: Visualização de todas as tarefas em formato de tabela
- **Filtro de Pesquisa**: Busca por tarefas através do título
- **Marcar como Concluído**: Checkbox para marcar/desmarcar tarefas como completadas
- **Detalhes da Tarefa**: Página individual para cada tarefa com informações detalhadas
- **Navegação**: Sistema de roteamento entre páginas
- **Interface Responsiva**: Design moderno usando Bootstrap

## 🛠️ Tecnologias Utilizadas

- **React 18.2.0** - Biblioteca JavaScript para construção de interfaces
- **Vite 4.1.0** - Ferramenta de build rápida e moderna
- **React Router DOM 6.8.2** - Roteamento para aplicações React
- **Axios 1.3.4** - Cliente HTTP para requisições à API
- **React Bootstrap 2.7.2** - Componentes Bootstrap para React
- **Bootstrap Icons** - Ícones para a interface

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Details.jsx      # Página de detalhes da tarefa
│   ├── Header.jsx       # Cabeçalho com título e campo de busca
│   ├── Table.jsx        # Tabela principal de tarefas
│   └── Todo.jsx         # Componente individual de tarefa
├── assets/
│   └── react.svg        # Logo do React
├── App.jsx              # Componente principal da aplicação
├── main.jsx             # Ponto de entrada da aplicação
└── index.css            # Estilos globais
```

## 🚦 Como Executar

### Pré-requisitos
- Node.js (versão 14 ou superior)
- npm ou yarn

### Instalação e Execução

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd LukProject
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Acesse a aplicação**
   - Abra seu navegador e acesse: `http://localhost:5173`

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera a build de produção
- `npm run preview` - Visualiza a build de produção localmente

## 🎯 Como Usar

1. **Página Principal**: Visualize todas as tarefas em uma tabela organizada
2. **Pesquisar**: Use o campo de busca no cabeçalho para filtrar tarefas por título
3. **Marcar como Concluído**: Clique no checkbox para alterar o status da tarefa
4. **Ver Detalhes**: Clique no ícone de informações (ℹ️) para ver detalhes da tarefa
5. **Navegar**: Use a seta de voltar na página de detalhes para retornar à lista

## 🌐 API Externa

O projeto utiliza a API pública [JSONPlaceholder](https://jsonplaceholder.typicode.com/) para obter dados de exemplo:
- **Endpoint**: `https://jsonplaceholder.typicode.com/todos`
- **Dados**: Lista de 200 tarefas com id, título, status de conclusão e userId

## 🎨 Interface

- **Design Responsivo**: Adaptável a diferentes tamanhos de tela
- **Bootstrap**: Interface moderna e consistente
- **Ícones**: Bootstrap Icons para melhor experiência visual
- **Cores**: Esquema de cores limpo e profissional

## 📝 Componentes Principais

### App.jsx
- Gerencia o estado global da aplicação
- Controla as requisições à API
- Define as rotas da aplicação

### Table.jsx
- Renderiza a tabela principal de tarefas
- Integra o cabeçalho e os componentes de tarefa

### Todo.jsx
- Representa uma linha individual da tabela
- Gerencia o checkbox de conclusão
- Fornece link para página de detalhes

### Details.jsx
- Exibe informações detalhadas de uma tarefa específica
- Navegação de volta para a lista principal

### Header.jsx
- Título da aplicação
- Campo de busca/filtro

## 🔧 Personalização

Para personalizar o projeto:

1. **Estilos**: Modifique `src/index.css` para alterar a aparência
2. **API**: Altere a URL da API em `App.jsx` para usar seus próprios dados
3. **Componentes**: Adicione novos componentes na pasta `src/components/`
4. **Rotas**: Adicione novas rotas em `App.jsx`

## 📄 Licença

Este projeto é de uso livre para fins educacionais e de demonstração.

---

**Desenvolvido com ❤️ usando React e Vite**