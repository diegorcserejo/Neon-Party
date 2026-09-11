// ===== CONTROLE DA SPLASH + MÚSICA =====
document.addEventListener('DOMContentLoaded', function() {
  const splash = document.getElementById('splash');
  const main = document.getElementById('main');
  const enterBtn = document.getElementById('enterBtn');
  const bgMusic = document.getElementById('bgMusic');

  main.style.display = 'none';
  bgMusic.volume = 0.4;

  enterBtn.addEventListener('click', function() {
    bgMusic.play().catch(function(err) {
      console.log('Música não encontrada ou bloqueada:', err.message);
    });

    splash.classList.add('hidden');
    setTimeout(function() {
      splash.style.display = 'none';
      main.style.display = 'flex';
      main.classList.add('visible');
    }, 900);
  });
});

// ===== NAVEGAÇÃO =====
document.addEventListener('DOMContentLoaded', function() {
  const exploreBtn = document.getElementById('exploreBtn');
  const backBtn = document.getElementById('backBtn');
  const homeBtn = document.getElementById('homeBtn');
  const mainBackBtn = document.getElementById('mainBackBtn');
  const main = document.getElementById('main');
  const explorePage = document.getElementById('explorePage');
  const splash = document.getElementById('splash');
  const bgMusic = document.getElementById('bgMusic');

  // Ir para a tela Explorar
  exploreBtn.addEventListener('click', function() {
    main.style.display = 'none';
    explorePage.classList.add('visible');
    document.body.style.overflow = 'hidden';
    explorePage.scrollTop = 0;
  });

  // Voltar da Explorar para a Main (botão do header)
  backBtn.addEventListener('click', function() {
    explorePage.classList.remove('visible');
    main.style.display = 'flex';
    document.body.style.overflow = 'auto';
  });

  // Botão Início (volta para a Main e rola pro topo)
  homeBtn.addEventListener('click', function() {
    explorePage.classList.remove('visible');
    main.style.display = 'flex';
    document.body.style.overflow = 'auto';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    main.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  // Botão Voltar da tela principal (volta para a splash)
  mainBackBtn.addEventListener('click', function() {
    // Esconde a main
    main.style.display = 'none';
    main.classList.remove('visible');

    // Para a música
    if (bgMusic) bgMusic.pause();

    // Mostra a splash novamente
    splash.style.display = 'flex';
    splash.classList.remove('hidden');

    // Garante que as animações voltem ao normal
    requestAnimationFrame(() => {
      splash.style.opacity = '1';
      splash.style.transform = 'scale(1)';
    });
  });
});

// ===== VUE APP =====
new Vue({
  el: '#exploreApp',
  data: {
    cards: {
      bebidas: false,
      comida: false,
      brincadeiras: false,
      regras: false
    },
    drinks: [
      'Skol Beats Tropical',
      'Skol Beats Senses',
      'Skol Beats Redmix',
      'Ices variados',
      'Vodkas',
      'Água',
      'Gelo Saborizado',
      'Cachaça 51',
      'Mansão Maromba',
      'Caipirinha',
      'Refrigerante',
      'Pirulitos'
    ],
    foods: [
      'Salgados variados'
    ],
    rules: [
      { text: 'Não mijar na piscina', icon: 'fas fa-ban' },
      { text: 'Não desperdiçar bebida', icon: 'fas fa-wine-bottle' },
      { text: 'Não ficar abrindo o freezer toda hora', icon: 'fas fa-snowflake' },
      { text: 'Não vomitar na piscina', icon: 'fas fa-water' },
      { text: 'Não vomitar fora do banheiro', icon: 'fas fa-toilet' }
    ],
    games: [
      {
        title: 'DUELO DE SHOT',
        icon: 'fas fa-fist-raised',
        videoSrc: 'videos/duelo-shot.mp4',
        tutorial: `
          <div class="step"><i class="fas fa-users"></i> <strong>1.</strong> Divida os participantes em duas equipes.</div>
          <div class="step"><i class="fas fa-handshake"></i> <strong>2.</strong> Dois duelistas se enfrentam.</div>
          <div class="step"><i class="fas fa-glass-whiskey"></i> <strong>3.</strong> O desafiante escolhe o shot.</div>
          <div class="step"><i class="fas fa-trophy"></i> <strong>4.</strong> Quem terminar primeiro vence e marca 1 ponto.</div>
          <div class="step"><i class="fas fa-sync-alt"></i> <strong>5.</strong> Nova rodada com novos duelistas.</div>
          <div class="step"><i class="fas fa-crown"></i> <strong>6.</strong> A equipe com mais pontos no final vence!</div>
        `,
        active: false
      },
      {
        title: 'ROLETA',
        icon: 'fas fa-sync-alt',
        videoSrc: 'videos/roleta.mp4',
        tutorial: `
          <div class="step"><i class="fas fa-user"></i> <strong>1.</strong> Um participante por vez.</div>
          <div class="step"><i class="fas fa-arrow-right"></i> <strong>2.</strong> Gire a roleta (virtual ou física).</div>
          <div class="step"><i class="fas fa-bullseye"></i> <strong>3.</strong> O resultado define o desafio.</div>
          <div class="step"><i class="fas fa-glass-whiskey"></i> <strong>4.</strong> Realize o desafio (geralmente um shot ou tarefa).</div>
          <div class="step"><i class="fas fa-user-plus"></i> <strong>5.</strong> Passe a vez para o próximo.</div>
          <div class="step"><i class="fas fa-redo-alt"></i> <strong>6.</strong> Repita até todos participarem!</div>
        `,
        active: false
      },
      {
        title: 'BEER PONG',
        icon: 'fas fa-beer',
        videoSrc: 'videos/beer-pong.mp4',
        tutorial: `
          <div class="step"><i class="fas fa-users"></i> <strong>1.</strong> Divida os participantes em duas equipes.</div>
          <div class="step"><i class="fas fa-beer"></i> <strong>2.</strong> Monte 10 copos em formato de triângulo em cada lado da mesa.</div>
          <div class="step"><i class="fas fa-arrow-right"></i> <strong>3.</strong> Cada equipe joga a bolinha alternadamente, tentando acertar os copos adversários.</div>
          <div class="step"><i class="fas fa-glass-whiskey"></i> <strong>4.</strong> Se acertar, o copo é removido (e a bebida é consumida).</div>
          <div class="step"><i class="fas fa-trophy"></i> <strong>5.</strong> A equipe que eliminar todos os copos adversários primeiro vence!</div>
          <div class="step"><i class="fas fa-fire"></i> <strong>6.</strong> Regra especial: se acertar dois copos seguidos, joga novamente!</div>
        `,
        active: false
      },
      { 
        title: 'PEPERO',
        icon: 'fas fa-cookie-bite',
        videoSrc: 'videos/pepero.mp4',
        tutorial: `
          <div class="step"><i class="fas fa-user-friends"></i> <strong>1.</strong> Forme duplas.</div>
          <div class="step"><i class="fas fa-cookie"></i> <strong>2.</strong> Cada um recebe um Pepero (biscoito).</div>
          <div class="step"><i class="fas fa-arrow-right"></i> <strong>3.</strong> Participante 1 morde o biscoito enquanto o outro fica parado.</div>
          <div class="step"><i class="fas fa-exchange-alt"></i> <strong>4.</strong> Inverta: Participante 2 morde agora.</div>
          <div class="step"><i class="fas fa-ruler"></i> <strong>5.</strong> Compare os pedaços restantes.</div>
          <div class="step"><i class="fas fa-crown"></i> <strong>6.</strong> Quem deixar o menor pedaço vence a rodada!</div>
        `,
        active: false
      },
      {
        title: 'BODYSHOT',
        icon: 'fas fa-hand-sparkles',
        videoSrc: 'videos/bodyshot.mp4',
        tutorial: `
          <div class="step"><i class="fas fa-user-plus"></i> <strong>1.</strong> Voluntários se inscrevem.</div>
          <div class="step"><i class="fas fa-shuffle"></i> <strong>2.</strong> Sorteie a dupla que irá participar.</div>
          <div class="step"><i class="fas fa-arrow-right"></i> <strong>3.</strong> Sorteie a parte do corpo (ex: braço, barriga).</div>
          <div class="step"><i class="fas fa-glass-whiskey"></i> <strong>4.</strong> Realize o body shot.</div>
          <div class="step"><i class="fas fa-redo-alt"></i> <strong>5.</strong> Novo sorteio para a próxima rodada.</div>
          <div class="step"><i class="fas fa-heart"></i> <strong>⚠️</strong> Participação somente com consentimento de ambos.</div>
        `,
        active: false
      },
      {
        title: 'MATCH',
        icon: 'fas fa-heart',
        videoSrc: 'videos/match.mp4',
        tutorial: `
          <div class="step"><i class="fas fa-user-edit"></i> <strong>1.</strong> Cada participante faz um cadastro rápido.</div>
          <div class="step"><i class="fas fa-users"></i> <strong>2.</strong> Visualize os perfis dos participantes.</div>
          <div class="step"><i class="fas fa-heart"></i> <strong>3.</strong> Escolha seu interesse (curtida).</div>
          <div class="step"><i class="fas fa-exchange-alt"></i> <strong>4.</strong> Se o interesse for mútuo...</div>
          <div class="step"><i class="fas fa-fire"></i> <strong>5.</strong> MATCH! Vocês foram combinados!</div>
          <div class="step"><i class="fas fa-smile-wink"></i> <strong>6.</strong> Divirta-se e curta o momento!</div>
        `,
        active: false
      }
    ]
  },
  computed: {
    drinksCount() {
      return this.drinks.length;
    },
    foodsCount() {
      return this.foods.length;
    },
    gamesCount() {
      return this.games.length;
    },
    rulesCount() {
      return this.rules.length;
    }
  },
  methods: {
    toggleCard(card, event) {
      if (event && event.currentTarget) {
        const header = event.currentTarget;
        header.classList.add('rippling');
        setTimeout(() => header.classList.remove('rippling'), 600);
      }
      this.cards[card] = !this.cards[card];
    },
    toggleGame(index) {
      this.games = this.games.map((g, i) => {
        if (i === index) {
          g.active = !g.active;
        } else {
          g.active = false;
        }
        return g;
      });
    },
    openVideo(game) {
      const modal = document.getElementById('videoModal');
      const container = document.getElementById('videoContainer');
      const title = document.getElementById('videoTitle');

      title.textContent = game.title;
      container.innerHTML = '';

      const video = document.createElement('video');
      video.src = game.videoSrc;
      video.controls = true;
      video.autoplay = false;
      video.playsInline = true;
      video.preload = 'metadata';

      const placeholder = document.createElement('div');
      placeholder.className = 'video-placeholder';
      placeholder.innerHTML = `
        <div class="play-ring">
          <i class="fas fa-play"></i>
        </div>
        <h4>VÍDEO TUTORIAL</h4>
        <p>Adicione o vídeo <strong>${game.videoSrc}</strong> na pasta do projeto para exibir o tutorial em vídeo.</p>
      `;

      video.addEventListener('error', function() {
        container.innerHTML = '';
        container.appendChild(placeholder);

        const playRing = placeholder.querySelector('.play-ring');
        playRing.addEventListener('click', function() {
          this.style.transform = 'scale(0.9)';
          setTimeout(() => { this.style.transform = 'scale(1)'; }, 150);
        });
      });

      video.addEventListener('loadeddata', function() {
        container.innerHTML = '';
        container.appendChild(video);
      });

      container.appendChild(placeholder);
      container.appendChild(video);

      modal.classList.add('visible');
      document.body.style.overflow = 'hidden';
    }
  }
});

// ===== CONTROLE DO MODAL DE VÍDEO =====
document.addEventListener('DOMContentLoaded', function() {
  const videoModal = document.getElementById('videoModal');
  const videoCloseBtn = document.getElementById('videoCloseBtn');

  videoCloseBtn.addEventListener('click', function() {
    videoModal.classList.remove('visible');
    document.body.style.overflow = '';
    const video = videoModal.querySelector('video');
    if (video) video.pause();
  });

  videoModal.addEventListener('click', function(e) {
    if (e.target === videoModal) {
      videoModal.classList.remove('visible');
      document.body.style.overflow = '';
      const video = videoModal.querySelector('video');
      if (video) video.pause();
    }
  });
});