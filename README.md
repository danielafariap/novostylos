# Novo Stylos — site institucional

Site de página única para o salão **Novo Stylos** (Luciana Ribeiro) — cabelo, unha, tricologia,
visagismo, noiva, estética e terapia capilar.

**Endereço:** R. Manoel Luzio, 53 — Vila Salete, São Paulo/SP, 03615-080
**WhatsApp / telefone:** (11) 96549-7290

Site estático puro: HTML + CSS + JavaScript, sem build, sem dependências, sem gerenciador de pacotes.

## Estrutura

```
index.html      # página única — topo, sobre, serviços, noiva, resultados, programas, contato
styles.css      # folha de estilo completa do site
script.js       # alterna o menu mobile (aria-expanded)
assets/         # imagens efetivamente usadas pelo site
```

Também versionado, fora do site publicável:

```
texto site luciana.txt        # briefing original da cliente
novostylos-*.png              # mockups de identidade (variantes A/B) e telas finais
teaser-novostylos.png         # peça de teaser
avaliação *.JPG               # capturas de avaliações
WhatsApp Image/Video *        # material bruto enviado pela cliente
```

## Rodar localmente

Não há passo de build. Abra `index.html` no navegador, ou sirva a pasta:

```sh
python -m http.server 8000
# depois: http://localhost:8000
```

Um servidor local é preferível a abrir o arquivo direto, porque reproduz o comportamento real
de caminhos relativos e de âncoras.

## Estado atual

Publicado como repositório **privado**, apenas versionado — GitHub Pages não está ativo e o site
não está no ar. A ativação depende de revisão com a cliente.

## Pendências conhecidas

- [x] **WhatsApp e telefone** — número real aplicado nos 6 links `wa.me` e no telefone exibido.
- [x] **Localização** — endereço completo na seção de contato, com link para o Google Maps.
- [ ] **Instagram** — o rodapé aponta para `instagram.com/novostylos`, deduzido do briefing
      ("Instagram/site: Novo stylos") e do `@novostylos` exibido na página. **Confirmar o handle
      real com a cliente** antes de qualquer publicação pública.
- [ ] **Otimização de imagens** — as fotos são JPEGs originais de WhatsApp, sem redimensionamento
      nem formatos modernos (WebP/AVIF) e sem `loading="lazy"`.
- [ ] **Favicon e metadados sociais** — não há favicon nem tags Open Graph/Twitter Card.
