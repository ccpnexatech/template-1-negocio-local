# Template de Site para Negócio Local

Template estático (HTML + CSS + JavaScript) focado em conversão para WhatsApp e telefone, ideal para prestadores de serviço locais.

## Estrutura do projeto

- `index.html`
- `assets/css/style.css`
- `assets/js/main.js`
- `assets/img/`

## Como customizar os dados do negócio

Edite o arquivo `index.html` e substitua:

- Nome da empresa: `Studio Prime`
- Telefone/WhatsApp: `5500000000000`
- Endereço e horários na seção **Localização**
- Depoimentos e links de redes sociais

### Dica importante
Atualize todos os links `https://wa.me/5500000000000` para o número real com DDI + DDD.

## Como alterar as cores

As cores estão no topo de `assets/css/style.css` em variáveis CSS:

- `--color-primary`
- `--color-secondary`
- `--color-accent`
- `--color-bg`
- `--color-text`
- `--color-muted`

Troque apenas os valores dessas variáveis para manter consistência visual.

## Como atualizar os serviços

No `index.html`, localize a seção com `id="services"`.

Cada serviço está em um card com:

- Título (`<h3>`)
- Descrição (`<p>`)
- Preço opcional (`<span>`)

Você pode duplicar/remover cards mantendo a estrutura.

## Formulário sem backend

O formulário de contato usa JavaScript (`assets/js/main.js`) para abrir o WhatsApp com mensagem automática.

Mensagem padrão:

`Olá! Vi seu site e gostaria de mais informações sobre os serviços.`

## Deploy no GitHub Pages

1. Suba o projeto para um repositório GitHub.
2. No GitHub, vá em **Settings > Pages**.
3. Em **Build and deployment**, escolha:
   - **Source:** `Deploy from a branch`
   - **Branch:** `main` (ou a branch desejada) e pasta `/root`
4. Salve e aguarde o link público ser gerado.

Após publicado, revise telefone, WhatsApp, endereço, SEO e links sociais.
