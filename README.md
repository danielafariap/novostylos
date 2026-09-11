# Novo Stylos — site institucional

Site do salão **Novo Stylos** (Luciana Ribeiro) — cabelo, unhas, tricologia, visagismo, dia da
noiva, estética e terapia capilar.

**Endereço:** R. Manoel Luzio, 53 · Vila Salete, São Paulo/SP · 03615-080
**WhatsApp / telefone:** (11) 96549-7290
**Instagram:** [@novostylos_salao](https://www.instagram.com/novostylos_salao/)

Site estático de 4 páginas: HTML + CSS + JavaScript. Sem build, sem dependências, sem gerenciador
de pacotes, sem fonte externa. Abre direto no navegador.

## Páginas

| Arquivo | Conteúdo |
|---|---|
| `index.html` | Topo, Luciana, prévia dos serviços, dia da noiva, prévia dos resultados, chamada final |
| `servicos.html` | Os 8 serviços, terapia capilar a laser em destaque, dia da noiva (`#noiva`) |
| `resultados.html` | 5 antes/depois e os 4 depoimentos em rodízio |
| `contato.html` | História da Luciana, credenciais, contato, endereço e mapa |

As quatro carregam o mesmo `styles.css` e o mesmo `script.js`. Cabeçalho e rodapé são repetidos em
cada arquivo — é o custo de não ter build, e o que mantém o site abrindo sem nenhuma ferramenta.

## Estrutura

```
index.html · servicos.html · resultados.html · contato.html
styles.css      # folha única, escrita mobile-first
script.js       # menu do celular + rodízio dos depoimentos
assets/         # 12 arquivos: 9 fotos em uso, favicon e logo da MADAN
_config.yml     # config do GitHub Pages — mantém _material/ fora do ar
```

Também versionado, **fora do site publicável** — material de origem enviado pela cliente, agora
reunido em `_material/`:

```
_material/texto site luciana.txt        # briefing original
_material/novostylos-*.png              # mockups de identidade (A/B) e telas finais
_material/teaser-novostylos.png         # peça de teaser (foto das peônias em 1170px)
_material/avaliação *.JPG               # capturas das avaliações do Google
_material/WhatsApp Image/Video *        # fotos e vídeos originais recebidos
```

O prefixo `_` faz o Jekyll ignorar a pasta, e `_config.yml` repete a exclusão de forma explícita —
nada de `_material/` vira endereço público quando o site entra no ar. **Não adicione um arquivo
`.nojekyll` ao repositório:** ele desliga o Jekyll e, junto, essa proteção.

Isso protege o material no **site publicado**. Não protege se o **repositório** virar público — aí
qualquer pessoa vê `_material/` navegando pelo GitHub. Ver "Pendências conhecidas".

## Rodar localmente

Não há passo de build. Abra `index.html` no navegador, ou sirva a pasta:

```sh
npx serve .
```

## Decisões de implementação

- **Mobile-first.** O CSS base é o do celular; `@media (min-width: 720px)` e `(min-width: 1024px)`
  só ampliam. A navegação é um painel deslizante no celular e barra horizontal no desktop.
- **Sem framework e sem fonte externa.** A pilha de fontes usa o que já existe no sistema: nenhuma
  requisição a CDN, nenhum bloqueio de renderização.
- **Todo botão de WhatsApp abre com mensagem escrita**, e a mensagem muda conforme o lugar do
  clique (diagnóstico capilar, dia da noiva, orientação, transformação). A Luciana recebe o
  contato já sabendo o que a pessoa quer e que ela veio do site.
- **Depoimentos transcritos, não em print.** Os 4 comentários foram copiados na íntegra das
  capturas em `_material/avaliação 1.JPG` e `_material/avaliação 3.JPG` — nenhum texto, nome ou
  data foi inventado. Os 4 cards existem uma vez só no HTML e se revezam na mesma célula de grade,
  trocando por opacidade a cada 6s; pausam no cursor, no foco de teclado e em aba oculta.
- **Autoria.** O selo MADAN nos 4 rodapés usa `assets/madan-logo.svg`, reproduzido do favicon de
  madanstudio.com.br, nas cores da marca: navy `#0E1030` e laranja `#FF5417`.
- **Acessibilidade:** foco visível no teclado, `aria-current` na página ativa, `aria-expanded` no
  menu, alvos de toque de 48px e `prefers-reduced-motion` respeitado.

## Estado atual

Repositório `danielafariap/novostylos`, privado. GitHub Pages **não** está ativo: o site ainda não
está no ar.

O repositório já está **preparado** para publicar: o material bruto saiu da raiz para `_material/`
e `_config.yml` garante que ele não seja servido. Falta a decisão de hospedagem e, no caso do
GitHub Pages, ligar o Pages — o que exige permissão de **admin**, hoje só da dona do repositório.

## Pendências conhecidas

- [ ] **Nota e total de avaliações do Google.** O `5,0★` e o `+2mil clientes atendidas` exibidos no
      topo vieram da versão anterior do site e **nunca foram confirmados**. Verificar antes de
      publicar, ou remover — são afirmações públicas sobre um negócio real.
- [ ] **Horário de funcionamento.** Não consta no briefing e não foi inventado. Falta pedir e
      incluir em `contato.html`.
- [ ] **Fotos em alta resolução.** Todas as fotos vieram por WhatsApp, que comprime para no máximo
      1280px, e todas são verticais. Isso impede um topo em largura total, que exigiria 1920px+ e
      orientação horizontal. Pedir à Luciana os originais enviados como **"Documento"** no WhatsApp
      ou por link do Drive.
- [ ] **Fotos dos demais serviços.** Corte, coloração, visagismo, unhas e estética não têm imagem
      no material atual; por isso os 8 cards de `servicos.html` usam só ícone.
- [ ] **Links dos posts do Instagram.** A lista de antes/depois já suporta ligar cada foto ao seu
      post; falta apenas preencher as URLs.
- [ ] **`og:image` relativo.** As tags de compartilhamento apontam para caminhos relativos. Quando
      houver domínio definitivo, trocar por URLs absolutas para o card aparecer no WhatsApp.
- [ ] **Hospedagem × visibilidade — a decisão em aberto.** GitHub Pages em conta gratuita exige
      repositório **público**; em conta paga (Pro/Team) publica de repositório privado, mas o site
      resultante é público de qualquer forma. O repositório precisa permanecer **privado** enquanto
      contiver o material bruto da cliente. As saídas: (a) a dona ter plano pago e ligar o Pages
      com o repo privado; (b) tirar `_material/` do repositório e do histórico, e então torná-lo
      público; ou (c) hospedar em Netlify/Vercel, que servem repositório privado no plano gratuito.
