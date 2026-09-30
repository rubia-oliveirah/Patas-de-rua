[README.md](https://github.com/user-attachments/files/32874458/README.md)
# 🐾 Patas de Rua

Site institucional de uma ONG fictícia dedicada ao resgate, cuidado e adoção de animais de rua. Projeto desenvolvido como trabalho de faculdade, com foco em **HTML5 semântico**, **acessibilidade** e **formulário com validações e máscaras de entrada**.

🔗 **Site publicado:** https://github.com/rubia-oliveirah

## Páginas

| Página | Arquivo | Conteúdo |
|---|---|---|
| Início | `index.html` | Apresentação da ONG, missão, visão e valores, formas de ajudar e dados de contato |
| Projetos | `pages/projetos.html` | Frentes de atuação (resgate, castração e adoção), seções de voluntariado e de doação |
| Cadastro | `pages/cadastro.html` | Formulário de cadastro de futuros colaboradores |

## Estrutura de diretórios

```
ong-patas-de-rua/
├── index.html
├── pages/
│   ├── projetos.html
│   └── cadastro.html
├── css/
│   └── style.css
├── js/
│   └── mascaras.js
└── img/
    ├── hero.svg
    ├── resgate.svg
    ├── castracao.svg
    └── adocao.svg
```

## Tecnologias

- **HTML5** semântico
- **CSS3** (Flexbox, Grid e layout responsivo)
- **JavaScript** puro (sem bibliotecas)

## Destaques do projeto

### Semântica e acessibilidade
- Estrutura com `header`, `nav`, `main`, `section`, `article`, `figure`, `address` e `footer`.
- Um único `h1` por página e hierarquia de títulos sem saltos de nível.
- Atributo `alt` descritivo em todas as imagens.
- Link "Ir para o conteúdo", `aria-current` na navegação e `aria-labelledby` nas seções.
- Formulário com `fieldset`, `legend` e `label` associado a cada campo.
- Imagens responsivas (`max-width: 100%` e `height: auto`).

### Formulário de cadastro
- **Validações nativas do HTML5:** `required`, `type="email"`, `pattern`, `minlength`, `maxlength` e `max` na data de nascimento.
- **Máscaras de entrada** aplicadas em tempo real com JavaScript:
  - CPF: `000.000.000-00`
  - Telefone: `(00) 00000-0000` (aceita fixo e celular)
  - CEP: `00000-000`
- **Validação dos dígitos verificadores do CPF.**
- Feedback visual de campo válido e inválido e mensagem de sucesso acessível (`aria-live`).

> O formulário é apenas demonstrativo: os dados não são enviados a nenhum servidor.

## Como executar localmente

1. Clone o repositório ou baixe o projeto:
   ```bash
   git clone https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO.git
   ```
2. Abra o arquivo `index.html` no navegador.

Não há dependências nem etapa de build. As fontes vêm do Google Fonts, então é necessária conexão com a internet para carregá-las (sem ela, o site usa a fonte padrão do sistema).

## Publicação

O site é publicado com **GitHub Pages**: em *Settings > Pages*, selecione a branch `main` e a pasta `/ (root)`.

## Observações

Os dados de contato, a chave Pix e as campanhas exibidas no site são **fictícios**, criados apenas para fins acadêmicos.

## Autor

**SEU NOME**
Curso de SEU CURSO, SUA INSTITUIÇÃO
