/* Novo Stylos — menu do celular, compartilhado pelas 4 páginas. */

(function () {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (!toggle || !nav) return;

  const setOpen = (open) => {
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
  };

  toggle.addEventListener('click', () => {
    setOpen(!nav.classList.contains('open'));
  });

  // Escolher um link fecha o painel antes de navegar
  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) setOpen(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.classList.contains('open')) {
      setOpen(false);
      toggle.focus();
    }
  });

  // Tocar fora do painel fecha
  document.addEventListener('click', (event) => {
    if (!nav.classList.contains('open')) return;
    if (nav.contains(event.target) || toggle.contains(event.target)) return;
    setOpen(false);
  });

  // Ao alargar para desktop o painel deixa de existir; zera o estado
  const desktop = window.matchMedia('(min-width: 1024px)');
  const sync = () => desktop.matches && setOpen(false);
  desktop.addEventListener('change', sync);
  sync();
})();

/* Depoimentos — os 4 cards se revezam sozinhos no mesmo lugar.
   Sem JS o primeiro card já vem marcado como ativo no HTML e a seção
   continua legível; o JavaScript só acrescenta o rodízio e os pontos. */
(function () {
  const rotator = document.querySelector('[data-rotator]');
  if (!rotator) return;

  const cards = [...rotator.querySelectorAll('.testimonial')];
  const dots = [...rotator.querySelectorAll('.testimonial-dot')];
  if (cards.length < 2) return;

  const INTERVALO = 6000;
  let atual = 0;
  let timer = null;

  const mostrar = (i) => {
    atual = (i + cards.length) % cards.length;
    cards.forEach((c, n) => {
      const ativo = n === atual;
      c.classList.toggle('is-active', ativo);
      // esconde de leitores de tela o que está invisível na tela
      c.setAttribute('aria-hidden', String(!ativo));
    });
    dots.forEach((d, n) => d.classList.toggle('is-active', n === atual));
  };

  const parar = () => {
    clearInterval(timer);
    timer = null;
  };

  const rodar = () => {
    parar();
    // quem pediu menos movimento no sistema não recebe rodízio automático
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    timer = setInterval(() => mostrar(atual + 1), INTERVALO);
  };

  dots.forEach((d, n) =>
    d.addEventListener('click', () => {
      mostrar(n);
      rodar(); // reinicia a contagem para o card escolhido não sumir logo
    })
  );

  // pausa enquanto a pessoa está lendo, e no foco de teclado
  rotator.addEventListener('mouseenter', parar);
  rotator.addEventListener('mouseleave', rodar);
  rotator.addEventListener('focusin', parar);
  rotator.addEventListener('focusout', rodar);

  // não gasta ciclo rodando numa aba que ninguém está vendo
  document.addEventListener('visibilitychange', () =>
    document.hidden ? parar() : rodar()
  );

  mostrar(0);
  rodar();
})();
