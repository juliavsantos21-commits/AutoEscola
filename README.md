# 🚗 Auto Escola Sergipana - Portal de Serviços

Este é um projeto de interface web para uma Auto Escola, focado na experiência do usuário (UX) para serviços de habilitação, renovação de CNH e agendamentos integrados visualmente ao sistema do DETRAN/SE.

## 📋 Sobre o Projeto

O sistema foi desenvolvido para centralizar o fluxo de atendimento de um aluno/condutor, desde o cadastro inicial até a fase final de pagamento de taxas. A interface utiliza uma navegação baseada em âncoras (`id`), permitindo uma navegação fluida entre as seções sem recarregamento de página.

## 🚀 Funcionalidades

O portal está dividido em seções estratégicas:

* **Página Inicial (Home):** Apresentação visual e acesso rápido ao cadastro.
* **Cadastro:** Formulário para coleta de dados básicos (Nome, CPF, Telefone, Endereço e E-mail).
* **Menu de Serviços:** Central de opções contendo:
* Primeira Habilitação (por categorias A, B, C, D, E).
* Renovação de CNH (com fluxo guiado passo a passo).
* Adaptação para Deficientes.
* Agendamento de exames e biometria.
* Acompanhamento de processos em andamento.


* **Integração Visual DETRAN:** Simulador de interface do portal do Detran para guiar o usuário na renovação e identificação do condutor.
* **Sistema de Pagamento:** Interface para liquidação da 2ª via da CNH com suporte visual para:
* Cartão de Crédito.
* Boleto Bancário.
* PIX.
* Débito em Conta.



## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estrutura semântica das seções e formulários.
* **CSS3:** Estilização personalizada, layouts em Grid e Flexbox, e simulação de componentes interativos (como o seletor de pagamento via `radio buttons`).
* **Design Responsivo:** Adaptado para diferentes resoluções através de unidades relativas.

## 📂 Estrutura de Arquivos

```text
/
├── index.html   # Estrutura principal com todas as seções (home, cadastro, serviços, etc)
├── style.css    # Estilização completa, cores da marca e layout do portal
└── assets/      # Imagens e ícones (ex: logo do Detran, ícone do carro)

```

## 🎨 Identidade Visual

O projeto preserva as cores institucionais:

* **Azul Marinho (`#003366`):** Confiança e seriedade.
* **Dourado/Amarelo:** Alerta e destaque para instruções importantes.
* **Branco/Cinza Claro:** Limpeza visual nas áreas de preenchimento de dados.

## 📝 Como visualizar

1. Certifique-se de que o arquivo `style.css` esteja na mesma pasta que o `index.html`.
2. Abra o arquivo `index.html` em qualquer navegador moderno.
3. Utilize os botões "Confirmar" e os links de navegação para transitar entre os serviços.

---
---
