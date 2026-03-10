const mainContent = document.getElementById("main-content");
const menuItems = document.querySelectorAll(".menu li");

function getSectionContent(section) {
  switch (section) {
    case "home":
      return `
        <div class="hero">
          <h2>Bienvenue sur Oscar RTV</h2>
          <p>
            Oscar RTV s’engage à offrir des contenus exclusifs et de haute qualité,
            couvrant l’actualité, la musique et les enjeux culturels contemporains.
            Sa mission est d’informer, de divertir et d’inspirer à travers une
            programmation variée, rigoureuse et innovante.
          </p>

          <div class="hero-actions">
            <button class="action-btn" onclick="goToSection('radio')">▶ Écouter la radio</button>
            <button class="action-btn secondary-btn" onclick="goToSection('tv')">📺 Regarder Live TV</button>
          </div>
        </div>

        <div class="quick-stats">
          <div class="stat-card">
            <h3>Live Radio</h3>
            <p>Écoutez la diffusion radio 24/7.</p>
          </div>

          <div class="stat-card">
            <h3>Live TV</h3>
            <p>Suivez les directs vidéo et programmes spéciaux.</p>
          </div>

          <div class="stat-card">
            <h3>Podcast</h3>
            <p>Retrouvez les émissions audio thématiques.</p>
          </div>

          <div class="stat-card">
            <h3>Nos Services</h3>
            <p>Solutions digitales, app, site web et radio en ligne.</p>
          </div>
        </div>

        <div class="card">
          <h2>Programmation Officielle Oscar RTV</h2>
          <p>
            Retrouvez vos émissions en direct, vos podcasts, vos vidéos spécialisées
            et des contenus pensés pour informer, élever les consciences et connecter
            la communauté haïtienne sur le territoire comme dans la diaspora.
          </p>

          <div class="grid">
            <div class="item-box">
              <div class="media-thumb"></div>
              <h3>Radio en direct</h3>
              <p>Diffusion continue de vos programmes radio Oscar RTV.</p>
            </div>

            <div class="item-box">
              <div class="media-thumb"></div>
              <h3>Live TV</h3>
              <p>Regardez les directs et émissions vidéo de la plateforme.</p>
            </div>

            <div class="item-box">
              <div class="media-thumb"></div>
              <h3>Vidéos</h3>
              <p>Culture, sport, politique, actualité et contenus spéciaux.</p>
            </div>

            <div class="item-box">
              <div class="media-thumb"></div>
              <h3>Podcasts</h3>
              <p>Des émissions thématiques sur la culture, la foi et l’actualité.</p>
            </div>
          </div>
        </div>
      `;

    case "radio":
      return `
        <div class="card">
          <div class="badge-live">LIVE ● RADIO</div>
          <h2>Radio En Direct</h2>
          <p>Écoutez Oscar RTV en direct avec le flux officiel radio.</p>

          <button class="play-btn" onclick="playRadio()">▶ Play Radio Live</button>

          <audio id="radioPlayer" controls>
            <source src="https://s1.epistreaming.net/proxy/oscar/stream" type="audio/mpeg">
          </audio>
        </div>

        <div class="card">
          <h2>Émission en vedette</h2>
          <p>
            “120 Minutes : Moment Dédicace” fait partie de la programmation mise en avant
            sur le site, avec une plage indiquée de 7H30–9H30 PM.
          </p>
        </div>
      `;

    case "tv":
      return `
        <div class="card">
          <div class="badge-live">LIVE ● TV</div>
          <h2>Live TV</h2>
          <p>Zone réservée pour la télévision en direct Oscar RTV.</p>

          <iframe
            class="tv-frame"
            src="https://www.youtube.com/embed/7Emqt-xtBIM"
            title="Oscar RTV Live TV"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            referrerpolicy="strict-origin">
          </iframe>

          <div class="tv-button-wrap">
            <a
              href="https://www.youtube.com/live/7Emqt-xtBIM"
              target="_blank"
              class="youtube-btn">
              ▶ Open Live TV on YouTube
            </a>
          </div>
        </div>

        <div class="card">
          <h2>Live Chat</h2>
          <p>Suivez les messages en direct pendant la diffusion.</p>

          <iframe
            class="chat-frame"
            src="https://www.youtube.com/live_chat?v=7Emqt-xtBIM&embed_domain=127.0.0.1"
            title="Oscar RTV Live Chat"
            frameborder="0">
          </iframe>

          <div class="tv-button-wrap">
            <a
              href="https://www.youtube.com/live_chat?v=7Emqt-xtBIM"
              target="_blank"
              class="youtube-btn">
              💬 Open Live Chat on YouTube
            </a>
          </div>
        </div>
      `;

    case "podcasts":
      return `
        <div class="card">
          <h2>Podcasts</h2>
          <p>
            Oscar RTV diffuse des podcasts thématiques sur la culture, l’actualité,
            la foi et l’économie.
          </p>

          <div class="grid">
            <div class="item-box">
              <div class="media-thumb"></div>
              <h3>Culture</h3>
              <p>Contenus audio sur la culture haïtienne et diasporale.</p>
            </div>

            <div class="item-box">
              <div class="media-thumb"></div>
              <h3>Actualité</h3>
              <p>Analyses, réflexion et sujets d’actualité.</p>
            </div>

            <div class="item-box">
              <div class="media-thumb"></div>
              <h3>Foi & Économie</h3>
              <p>Programmes inspirants et éducatifs.</p>
            </div>
          </div>
        </div>
      `;

    case "videos":
      return `
        <div class="card">
          <h2>Videos</h2>
          <p>
            Retrouvez les contenus vidéo musicaux, sportifs et documentaires,
            ainsi que les sections sport, politique et actualité du site.
          </p>

          <div class="grid">
            <div class="item-box">
              <div class="media-thumb"></div>
              <h3>Sports</h3>
              <p>Actualité sportive haïtienne et internationale.</p>
            </div>

            <div class="item-box">
              <div class="media-thumb"></div>
              <h3>Politique</h3>
              <p>Conscience citoyenne et réflexion publique.</p>
            </div>

            <div class="item-box">
              <div class="media-thumb"></div>
              <h3>Actualité</h3>
              <p>Informations, débats et contenus médiatiques.</p>
            </div>
          </div>
        </div>
      `;

    case "favorites":
      return `
        <div class="card">
          <h2>Favorites</h2>
          <p>Vos contenus enregistrés apparaîtront ici.</p>
        </div>
      `;

    case "photos":
      return `
        <div class="card">
          <h2>Photos</h2>
          <p>Galerie visuelle Oscar RTV.</p>

          <div class="grid">
            <div class="item-box">
              <div class="media-thumb"></div>
              <h3>Studio</h3>
              <p>Ambiance et univers de production Oscar RTV.</p>
            </div>

            <div class="item-box">
              <div class="media-thumb"></div>
              <h3>Émissions</h3>
              <p>Moments forts des programmes et directs.</p>
            </div>

            <div class="item-box">
              <div class="media-thumb"></div>
              <h3>Communauté</h3>
              <p>Contenus inspirants liés au média et à sa mission.</p>
            </div>
          </div>
        </div>
      `;

    case "about":
      return `
        <div class="card">
          <h2>About Oscar RTV</h2>
          <p>
            Oscar RTV est bien plus qu’une simple station de radio ou une plateforme en ligne.
            C’est un souffle nouveau au cœur de la culture haïtienne et diasporale.
            À travers ses émissions, ses podcasts, ses programmes éducatifs et sa passion pour
            l’information juste, Oscar RTV bâtit un pont entre les générations, les communautés et les talents.
          </p>
          <p>
            Sa mission est de bâtir un média libre et engagé qui informe, élève les consciences
            et valorise la culture haïtienne, tant sur le territoire qu’au sein de la diaspora.
          </p>
        </div>

        <div class="card">
          <h2>Valeurs</h2>
          <div class="grid">
            <div class="item-box">
              <h3>Intégrité</h3>
              <p>Transmettre une information juste, équilibrée et responsable.</p>
            </div>
            <div class="item-box">
              <h3>Respect</h3>
              <p>Chaque voix compte, chaque histoire mérite d’être écoutée.</p>
            </div>
            <div class="item-box">
              <h3>Passion</h3>
              <p>La parole, le son et l’expression artistique peuvent changer les mentalités.</p>
            </div>
            <div class="item-box">
              <h3>Innovation</h3>
              <p>Rendre les médias accessibles, dynamiques et inspirants.</p>
            </div>
          </div>
        </div>
      `;

    case "contact":
      return `
        <div class="card links">
          <h2>Contact</h2>

          <div class="list-box">
            <div class="list-item">
              <h3>Website</h3>
              <p><a href="https://oscarrtvhaiti.com" target="_blank">oscarrtvhaiti.com</a></p>
            </div>

            <div class="list-item">
              <h3>YouTube</h3>
              <p><a href="https://www.youtube.com/@oscarrtv03" target="_blank">@oscarrtv03</a></p>
            </div>

            <div class="list-item">
              <h3>Instagram</h3>
              <p><a href="https://www.instagram.com/oscarrtv03" target="_blank">@oscarrtv03</a></p>
            </div>

            <div class="list-item">
              <h3>Facebook</h3>
              <p><a href="https://www.facebook.com/share/1ASrvYfXzq/?mibextid=wwXIfr" target="_blank">Oscar RTV Facebook</a></p>
            </div>

            <div class="list-item">
              <h3>Téléphone</h3>
              <p>Ajoutez ici le numéro officiel</p>
            </div>

            <div class="list-item">
              <h3>Email</h3>
              <p>Ajoutez ici l’email officiel</p>
            </div>
          </div>
        </div>
      `;

    case "website":
      return `
        <div class="card links">
          <h2>Website</h2>
          <p>Visitez le site officiel Oscar RTV :</p>
          <p style="margin-top:12px;">
            <a href="https://oscarrtvhaiti.com" target="_blank">https://oscarrtvhaiti.com</a>
          </p>
        </div>
      `;

    case "services":
      return `
        <div class="card">
          <h2>Nos services</h2>
          <p>
            Oscar RTV propose des solutions digitales sur mesure pour renforcer
            la visibilité en ligne et la performance des marques.
          </p>

          <div class="grid">
            <div class="item-box">
              <div class="media-thumb"></div>
              <h3>Website Manager</h3>
              <p>Mises à jour du site, vérification du contenu, maintenance et contrôle SEO.</p>
            </div>

            <div class="item-box">
              <div class="media-thumb"></div>
              <h3>Gestion des réseaux sociaux</h3>
              <p>Présence forte sur Facebook, Instagram et YouTube.</p>
            </div>

            <div class="item-box">
              <div class="media-thumb"></div>
              <h3>Création de contenu</h3>
              <p>Contenu visuel et rédactionnel engageant, stratégie de campagne et publicités.</p>
            </div>

            <div class="item-box">
              <div class="media-thumb"></div>
              <h3>Création de site web, app & radio en ligne</h3>
              <p>Sites pros, applications Android/iOS MVP et radios en ligne clé en main.</p>
            </div>
          </div>
        </div>
      `;

    default:
      return `
        <div class="card">
          <h2>Oscar RTV</h2>
          <p>Section non trouvée.</p>
        </div>
      `;
  }
}

function showSection(section, clickedItem) {
  mainContent.innerHTML = getSectionContent(section);

  menuItems.forEach(function (item) {
    item.classList.remove("active");
  });

  if (clickedItem) {
    clickedItem.classList.add("active");
  } else {
    const menuItem = document.querySelector('.menu li[data-section="' + section + '"]');
    if (menuItem) {
      menuItem.classList.add("active");
    }
  }
}

function goToSection(section) {
  showSection(section, null);
}

function playRadio() {
  const player = document.getElementById("radioPlayer");
  if (player) {
    player.play();
  }
}

menuItems.forEach(function (item) {
  item.addEventListener("click", function () {
    const section = this.getAttribute("data-section");
    showSection(section, this);
  });
});

mainContent.innerHTML = getSectionContent("home");