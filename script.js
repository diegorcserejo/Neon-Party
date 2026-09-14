/* ================================================================
   🔥 FIREBASE CONFIG — já preenchido com o seu projeto
   ================================================================ */
const firebaseConfig = {
  apiKey: "AIzaSyBzqS3QmLD7cg2YmytbV6cQdmx-bhVDTbE",
  authDomain: "neon-match-2455e.firebaseapp.com",
  databaseURL: "https://neon-match-2455e-default-rtdb.firebaseio.com",
  projectId: "neon-match-2455e",
  storageBucket: "neon-match-2455e.firebasestorage.app",
  messagingSenderId: "608531037973",
  appId: "1:608531037973:web:85fad56d1357e3884c331c"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const playersRef = db.ref('players');

// ===== DEBUG FIREBASE =====
firebase.database().ref('.info/connected').on('value', (snap) => {
  console.log('🔥 Firebase conectado?', snap.val());
});

firebase.database().ref('players').on('value', (snap) => {
  console.log('👥 Players no banco:', snap.val());
}, (error) => {
  console.error('❌ ERRO no Firebase:', error);
});

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

  exploreBtn.addEventListener('click', function() {
    main.style.display = 'none';
    explorePage.classList.add('visible');
    document.body.style.overflow = 'hidden';
    explorePage.scrollTop = 0;
  });

  backBtn.addEventListener('click', function() {
    explorePage.classList.remove('visible');
    main.style.display = 'flex';
    document.body.style.overflow = 'auto';
  });

  homeBtn.addEventListener('click', function() {
    explorePage.classList.remove('visible');
    main.style.display = 'flex';
    document.body.style.overflow = 'auto';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    main.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  mainBackBtn.addEventListener('click', function() {
    main.style.display = 'none';
    main.classList.remove('visible');
    if (bgMusic) bgMusic.pause();
    splash.style.display = 'flex';
    splash.classList.remove('hidden');
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
        youtubeId: '',
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
        youtubeId: '',
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
        youtubeId: '',
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
        youtubeId: '',
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
        youtubeId: '',
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
        youtubeId: '',
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
    drinksCount() { return this.drinks.length; },
    foodsCount() { return this.foods.length; },
    gamesCount() { return this.games.length; },
    rulesCount() { return this.rules.length; }
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
        g.active = (i === index) ? !g.active : false;
        return g;
      });
    },
    openVideo(game) {
      const modal = document.getElementById('videoModal');
      const container = document.getElementById('videoContainer');
      const title = document.getElementById('videoTitle');

      title.textContent = game.title;
      container.innerHTML = '';

      if (game.youtubeId) {
        const iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${game.youtubeId}?playsinline=1&rel=0&modestbranding=1`;
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
        iframe.allowFullscreen = true;
        iframe.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
        container.appendChild(iframe);
      } else if (game.videoSrc) {
        const video = document.createElement('video');
        video.controls = true;
        video.autoplay = false;
        video.playsInline = true;
        video.setAttribute('playsinline', '');
        video.setAttribute('webkit-playsinline', '');
        video.preload = 'auto';

        const source = document.createElement('source');
        source.src = game.videoSrc;
        source.type = 'video/mp4';
        video.appendChild(source);

        const placeholder = document.createElement('div');
        placeholder.className = 'video-placeholder';
        placeholder.innerHTML = `
          <div class="play-ring"><i class="fas fa-spinner fa-spin"></i></div>
          <h4>CARREGANDO VÍDEO...</h4>
          <p>${game.title}</p>
        `;

        video.addEventListener('canplay', () => {
          if (placeholder.parentNode) placeholder.remove();
        });

        video.addEventListener('error', () => {
          const err = video.error;
          const codes = {
            1: 'ABORTED — o carregamento foi cancelado',
            2: 'NETWORK — arquivo não encontrado ou bloqueado',
            3: 'DECODE — codec incompatível com este celular (converta para H.264 + AAC)',
            4: 'SRC_NOT_SUPPORTED — formato não suportado pelo navegador'
          };
          placeholder.innerHTML = `
            <div class="play-ring"><i class="fas fa-exclamation-triangle"></i></div>
            <h4>NÃO FOI POSSÍVEL CARREGAR</h4>
            <p><strong>Código ${err ? err.code : '?'}:</strong> ${codes[err?.code] || 'desconhecido'}</p>
            <p style="font-size:0.6rem;opacity:0.5;word-break:break-all">${game.videoSrc}</p>
            <a class="video-external-link" href="${game.videoSrc}" target="_blank" rel="noopener">
              <i class="fas fa-external-link-alt"></i> TENTAR ABRIR DIRETO
            </a>
          `;
        });

        placeholder.addEventListener('click', () => {
          video.play().catch(() => {});
        });

        container.appendChild(placeholder);
        container.appendChild(video);
        video.load();
      } else {
        container.innerHTML = `
          <div class="video-placeholder">
            <div class="play-ring"><i class="fas fa-video-slash"></i></div>
            <h4>VÍDEO INDISPONÍVEL</h4>
            <p>Adicione o arquivo em <strong>videos/</strong> ou um ID em <strong>youtubeId</strong>.</p>
          </div>`;
      }

      modal.classList.add('visible');
      document.body.style.overflow = 'hidden';
    }
  }
});

// ===== CONTROLE DO MODAL DE VÍDEO =====
document.addEventListener('DOMContentLoaded', function() {
  const videoModal = document.getElementById('videoModal');
  const videoCloseBtn = document.getElementById('videoCloseBtn');

  function fecharModal() {
    videoModal.classList.remove('visible');
    document.body.style.overflow = '';
    const video = videoModal.querySelector('video');
    if (video) {
      video.pause();
      video.removeAttribute('src');
      video.load();
    }
    const iframe = videoModal.querySelector('iframe');
    if (iframe && iframe.parentNode) {
      iframe.parentNode.removeChild(iframe);
    }
  }

  videoCloseBtn.addEventListener('click', fecharModal);
  videoModal.addEventListener('click', function(e) {
    if (e.target === videoModal) fecharModal();
  });
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && videoModal.classList.contains('visible')) {
      fecharModal();
    }
  });
});

/* ================================================================
   MATCH GAME com Firebase Realtime Database
   Funciona entre 13+ celulares em tempo real
   ================================================================ */
(function() {
  const MY_NAME_KEY = 'neon_my_name';

  let myName = localStorage.getItem(MY_NAME_KEY) || '';
  let myChoices = {};
  let allPlayers = {};

  // ===== DOM =====
  const matchPage    = document.getElementById('matchPage');
  const loginScreen  = document.getElementById('matchLogin');
  const gameScreen   = document.getElementById('matchGame');
  const myNameInput  = document.getElementById('myNameInput');
  const enterBtn     = document.getElementById('matchEnterBtn');
  const myNameDisp   = document.getElementById('myNameDisplay');
  const myAvatar     = document.getElementById('myAvatar');
  const changeBtn    = document.getElementById('changeNameBtn');
  const grid         = document.getElementById('matchGrid');
  const resultsList  = document.getElementById('matchResultsList');
  const modal        = document.getElementById('matchModal');
  const modalName    = document.getElementById('matchName');
  const modalClose   = document.getElementById('matchModalClose');
  const matchBackBtn = document.getElementById('matchBackBtn');
  const matchHomeBtn = document.getElementById('matchHomeBtn');
  const openMatchBtn = document.getElementById('openMatchBtn');

  if (!matchPage) return;

  // ===== Paleta =====
  const PALETTE = ['#ec4899', '#a855f7', '#00e5ff', '#8b5cf6',
                   '#ff9e00', '#00ff88', '#ff4d6d', '#c77dff',
                   '#4cc9f0', '#f72585', '#4361ee', '#06d6a0'];

  function colorFor(name) {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return PALETTE[Math.abs(hash) % PALETTE.length];
  }

  function initialFor(name) {
    return (name.trim()[0] || '?').toUpperCase();
  }

  function safeKey(name) {
    return name.replace(/[.#$\[\]/]/g, '_');
  }

  // ===== Helpers =====
  function otherPlayers() {
    return Object.keys(allPlayers).filter(n => n !== myName);
  }

  function whoChoseMe() {
    const result = {};
    otherPlayers().forEach(n => {
      const esc = (allPlayers[n] && allPlayers[n].escolhas) || {};
      if (esc[safeKey(myName)]) result[n] = true;
    });
    return result;
  }

  // ===== Telas =====
  function showLogin() {
    loginScreen.style.display = 'block';
    gameScreen.style.display = 'none';
    myNameInput.value = myName || '';
    setTimeout(() => myNameInput.focus(), 200);
  }

  function showGame() {
    loginScreen.style.display = 'none';
    gameScreen.style.display = 'block';
    myNameDisp.textContent = myName;
    myAvatar.textContent = initialFor(myName);
    myAvatar.style.background = `linear-gradient(135deg, ${colorFor(myName)}, ${colorFor(myName)}88)`;
    renderCards();
    renderResults();
  }

  // ===== Entrar =====
  function enterGame() {
    const name = myNameInput.value.trim();
    if (name.length < 2) {
      myNameInput.focus();
      myNameInput.style.borderColor = '#ec4899';
      myNameInput.placeholder = 'Digite pelo menos 2 letras...';
      return;
    }

    if (name !== myName) {
      myChoices = {};
    }

    myName = name;
    localStorage.setItem(MY_NAME_KEY, myName);

    playersRef.child(safeKey(myName)).update({
      nome: myName,
      escolhas: myChoices || {}
    });

    showGame();
  }

  enterBtn.addEventListener('click', enterGame);
  myNameInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') enterGame();
  });

  changeBtn.addEventListener('click', () => {
    showLogin();
  });

  // ===== Render Cards =====
  function renderCards() {
    const others = otherPlayers();
    const chosenMe = whoChoseMe();

    if (others.length === 0) {
      grid.innerHTML = `
        <div class="no-matches" style="grid-column:1/-1;text-align:center;padding:40px 20px;">
          <i class="fas fa-users" style="font-size:2.5rem;color:rgba(236,72,153,0.4);display:block;margin-bottom:16px;"></i>
          Nenhuma outra pessoa entrou ainda.<br>
          <span style="font-size:0.75rem;opacity:0.6;">Peça para alguém abrir o jogo e digitar o nome!</span>
        </div>`;
      return;
    }

    grid.innerHTML = '';
    others.forEach(nome => {
      const color = colorFor(nome);
      const selected = !!myChoices[safeKey(nome)];
      const matched = selected && chosenMe[nome];

      const card = document.createElement('div');
      card.className = 'match-card';
      if (selected) card.classList.add('selected');
      if (matched) card.classList.add('matched');

      let statusText = 'Escolher';
      let statusIcon = 'fa-circle';
      if (selected && matched) { statusText = 'Match!'; statusIcon = 'fa-heart'; }
      else if (selected) { statusText = 'Esperando...'; statusIcon = 'fa-clock'; }

      card.innerHTML = `
        <div class="match-check"><i class="fas fa-check"></i></div>
        <div class="match-avatar" style="background: linear-gradient(135deg, ${color}, ${color}88);">
          ${initialFor(nome)}
        </div>
        <div class="match-name">${nome}</div>
        <div class="match-status">
          <i class="fas ${statusIcon}"></i> ${statusText}
        </div>
      `;

      card.addEventListener('click', () => toggleChoice(nome));
      grid.appendChild(card);
    });
  }

  // ===== Toggle escolha =====
  function toggleChoice(nome) {
    const key = safeKey(nome);
    const wasSelected = !!myChoices[key];

    if (wasSelected) {
      delete myChoices[key];
    } else {
      myChoices[key] = true;
    }

    playersRef.child(safeKey(myName)).child('escolhas').set(myChoices);

    renderCards();
    renderResults();

    if (!wasSelected) {
      const chosenMe = whoChoseMe();
      if (chosenMe[nome]) {
        showMatchModal(nome);
      }
    }
  }

  // ===== Resultados =====
  function renderResults() {
    const chosenMe = whoChoseMe();
    const matched = otherPlayers().filter(n => myChoices[safeKey(n)] && chosenMe[n]);

    if (matched.length === 0) {
      resultsList.innerHTML = '<div class="no-matches">Nenhum match ainda. Continue escolhendo!</div>';
      return;
    }

    resultsList.innerHTML = '';
    matched.forEach(nome => {
      const color = colorFor(nome);
      const item = document.createElement('div');
      item.className = 'match-result-item';
      item.innerHTML = `
        <div class="mini-avatar" style="background: linear-gradient(135deg, ${color}, ${color}88);">
          ${initialFor(nome)}
        </div>
        <span>${nome}</span>
        <i class="fas fa-heart"></i>
      `;
      resultsList.appendChild(item);
    });
  }

  // ===== Modal =====
  function showMatchModal(nome) {
    modalName.textContent = nome;
    modal.classList.add('visible');
    if (navigator.vibrate) navigator.vibrate([100, 50, 100, 50, 200]);
  }

  modalClose.addEventListener('click', () => modal.classList.remove('visible'));
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('visible');
  });

  // ===== Listener em tempo real do Firebase =====
  playersRef.on('value', (snapshot) => {
    const raw = snapshot.val() || {};
    allPlayers = {};

    Object.keys(raw).forEach(k => {
      const p = raw[k] || {};
      const nome = p.nome || k;
      allPlayers[nome] = {
        escolhas: p.escolhas || {}
      };
    });

    if (myName && allPlayers[myName]) {
      myChoices = allPlayers[myName].escolhas || {};
    }

    if (gameScreen.style.display !== 'none') {
      renderCards();
      renderResults();
    }
  });

  // ===== Abrir / Fechar página =====
  function openMatchPage() {
    matchPage.classList.add('visible');
    if (myName) showGame(); else showLogin();
  }

  function closeMatchPage() {
    matchPage.classList.remove('visible');
  }

  if (openMatchBtn) openMatchBtn.addEventListener('click', openMatchPage);
  if (matchBackBtn) matchBackBtn.addEventListener('click', closeMatchPage);
  if (matchHomeBtn) {
    matchHomeBtn.addEventListener('click', () => {
      closeMatchPage();
    });
  }

  // Inicializa
  if (myName) showGame(); else showLogin();
})();