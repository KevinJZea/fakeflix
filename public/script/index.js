/* Handle Search Bar */
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const searchForm = document.getElementById('search-form');

function handleSearchBar() {
  if (searchInput.classList.contains('hide')) {
    searchForm.style.border = '1px solid white';
    searchForm.style.padding = '0 12px';
  } else {
    searchForm.style.border = 'none';
    searchForm.style.padding = '0';
  }
  searchButton.classList.toggle('hide');
  searchInput.classList.toggle('hide');
}

/* Profile Container - Hidden Menu */
const body = document.getElementsByTagName('body')[0];
const header = document.getElementsByClassName('header')[0];
const hiddenMenu = header.querySelector('.header--hidden-menu-container');
let executeEvent;

function handleHiddenMenu() {
  hiddenMenu.classList.toggle('hide');
  executeEvent = true;

  if (!window.onkeyup) window.onkeyup = (event) => hideMenuWhenEscape(event);
  else window.onkeyup = undefined;

  if (!body.onclick) body.onclick = hideMenuWhenClick;
  else body.onclick = undefined;
}

function hideMenuWhenEscape(event) {
  if (event.key === 'Escape') handleHiddenMenu();
}

function hideMenuWhenClick() {
  if (!executeEvent) return handleHiddenMenu();
  executeEvent = false;
}

/* Header Background */
setTimeout(() => {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('active');
    } else {
      //remove the background property so it comes transparent again (defined in css)
      header.classList.remove('active');
    }
  });
}, 500);

/* Event Listener for Carousel Scrolling */
const carousels = document.querySelectorAll('.carousel');
const carouselsLength = carousels.length;
const rightButtons = document.querySelectorAll('.carousel-button-right');
const leftButtons = document.querySelectorAll('.carousel-button-left');

setTimeout(() => {
  for (let i = 0; i < carouselsLength; i++) {
    rightButtons[i].addEventListener('click', () => {
      carousels[i].scrollLeft += carousels[i].offsetWidth;
    });

    leftButtons[i].addEventListener('click', () => {
      carousels[i].scrollLeft -= carousels[i].offsetWidth;
    });
  }
}, 500);

/* Volume Button */

const mainVolumeButton = document.getElementById('main-volume-button');
const mainVideo = document.getElementById('main-video');

const portalVolumeButton = document.getElementById('portal-volume-button');
const portalVideo = document.getElementById('portal-main-video');

const handleVolumeButton = (volumeButton, video) => {
  if (volumeButton.innerHTML === 'volume_off') {
    volumeButton.innerHTML = 'volume_up';
    video.muted = !video.muted;
  } else if (volumeButton.innerHTML === 'volume_up') {
    volumeButton.innerHTML = 'volume_off';
    video.muted = !video.muted;
  } else if (volumeButton.innerHTML === 'replay') {
    volumeButton.innerHTML = 'volume_off';
    video.play();
    video.muted = true;
  }
};

setTimeout(() => {
  mainVideo.addEventListener('play', () => {
    mainVolumeButton.innerHTML = 'volume_off';
    mainVideo.muted = true;
  });

  portalVideo.addEventListener('play', () => {
    portalVolumeButton.innerHTML = 'volume_off';
    portalVideo.muted = true;
  });

  mainVideo.addEventListener('pause', () => {
    mainVolumeButton.innerHTML = 'replay';
  });

  portalVideo.addEventListener('pause', () => {
    portalVolumeButton.innerHTML = 'replay';
  });
}, 500);

setTimeout(() => {
  mainVideo.play();
}, 3000);

/* handlePortalDisplay */
const portal = document.getElementById('portal');

function hidePortalWhenEscape(event) {
  if (event.key === 'Escape') {
    handlePortalDisplayNone();
  }
}

const handlePortalDisplayBlock = () => {
  portal.style.display = 'flex';
  portalVideo.load();
  mainVideo.pause();
  portalVolumeButton.innerHTML = 'volume_off';
  portalVideo.muted = true;
  setTimeout(() => {
    portalVideo.play();
  }, 3000);

  // Hiding Portal pressing ESC
  window.addEventListener('keyup', hidePortalWhenEscape);
};

const handlePortalDisplayNone = () => {
  portal.style.display = 'none';
  mainVideo.play();
  portalVideo.pause();

  window.removeEventListener('keyup', hidePortalWhenEscape);
};

/* handlePortalMovieCards */
const expandMovieCardsButton = document.getElementById(
  'expand-movie-cards-button'
);
const expandMovieDivider = document.getElementById('expand-movie-divider');
const hideablePortalMovieCards = document.getElementsByClassName('hide-pmc');

const handlePortalMovieCards = () => {
  if (expandMovieCardsButton.innerText === 'expand_more') {
    expandMovieCardsButton.innerText = 'expand_less';
    expandMovieDivider.style.marginTop = '0px';

    for (let i = 0; i < hideablePortalMovieCards.length; i++) {
      hideablePortalMovieCards[i].style.display = 'block';
    }
  } else if (expandMovieCardsButton.innerText === 'expand_less') {
    expandMovieCardsButton.innerText = 'expand_more';
    expandMovieDivider.style.marginTop = '-80px';

    for (let i = 0; i < hideablePortalMovieCards.length; i++) {
      hideablePortalMovieCards[i].style.display = 'none';
    }
  }
};

/* handleChangeOnPortalSelect */
const portalSelectEpisodes = document.getElementById('episodes-portal');
const episodesCards = document.getElementsByClassName('episode-card');

const season1Data = [
  {
    img: 'https://asturscore.com/wp-content/uploads/2019/02/Caratula-BSO-The-Umbrella-Academy-Jeff-Russo.jpg',
    title: 'The Umbrella Academy',
    duration: '56 min.',
    description:
      'Una familia disfuncional de superh&eacute;roes trabajan juntos para descubrir c&oacute;mo falleci&oacute; su padre. La misi&oacute;n no resulta sencilla debido a que todos tienen personalidades y poderes diferentes.',
  },
  {
    img: 'https://i.pinimg.com/originals/ae/e0/26/aee026f47aa9a01116f4b7e613c8d470.png',
    title: 'Stranger Things',
    duration: '49 min.',
    description:
      'Despu&eacute;s de la extra&ntildea desaparici&oacute;n de un ni&ntilde;o, un pueblo se encuentra ante un misterio que revela experimentos secretos, fuerzas sobrenaturales y a una ni&ntilde;a muy especial.',
  },
  {
    img: 'https://d25bohr794b7hg.cloudfront.net/tlnt-holdings/case-studies/netflix-dark/netflix-dark-selected-01.jpg',
    title: 'Dark',
    duration: '48 min.',
    description:
      'Un ni&ntilde;o desaparecido expone los secretos y las conexiones ocultas entre cuatro familias mientras desentra&ntilde;an lentamente una siniestra conspiraci&oacute;n de viaje en el tiempo que abarca tres generaciones.',
  },
  {
    img: 'https://i.pinimg.com/originals/43/9a/0d/439a0d0c452ac069332e0c1450e5690a.jpg',
    title: '13 Reasons Why',
    duration: '51 min.',
    description:
      'El adolescente Clay Jensen se halla en medio de una serie de misterios desgarradores accionados por el tr&aacute;gico suicidio de una de sus amigas.',
  },
  {
    img: 'https://cdn.shopify.com/s/files/1/0969/9128/products/MoneyHeist-NetflixTVShowPosterFanArt_67917fbc-de8e-4228-90a4-217503d7bbd4.jpg',
    title: 'La Casa de Papel',
    duration: '56 min.',
    description:
      'Un grupo de asaltantes busca realizar el atraco del siglo al internarse en la F&aacute;brica de Moneda y Timbre de Espa&ntilde;a, guiados por el personaje conocido como El Profesor.',
  },
];

const season2Data = [
  {
    img: 'https://i.pinimg.com/236x/8a/8f/b0/8a8fb02d966e9cf4e811d1daa6699653--batman-and-catwoman-hd-movies.jpg',
    title: 'Batman: el Caballero de la Noche Asciende',
    duration: '2h 44min',
    description:
      'Ocho a&ntilde;os despu&eacute;s de asumir la culpa por la muerte de Harvey Dent y desaparecer en la noche, Batman se ve obligado a salir del exilio autoimpuesto gracias a una ladrona astuta y a un terrorista despiadado.',
  },

  {
    img: 'https://upload.wikimedia.org/wikipedia/en/c/c2/Back_to_the_Future_Part_II.jpg',
    title: 'Volver al Futuro II',
    duration: '1h 48min',
    description:
      'Un adolescente y un inventor extravagante viajan al pasado y al futuro para alterar una serie de eventos desastrosos.',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg',
    title: 'Forrest Gump',
    duration: '2h 22min',
    description:
      'Forrest Gump, un joven sure&ntilde;o, tenaz e inocente, es protagonista de acontecimientos cruciales en la historia de los Estados Unidos.',
  },
  {
    img: 'https://c8.alamy.com/comp/2K4TMJ5/the-matrix-1999-the-matrix-movie-poster-keanu-reeves-2K4TMJ5.jpg',
    title: 'Matrix',
    duration: '2h 16min',
    description:
      'Un joven hacker es convocado por el movimiento de resistencia liderado por Morfeo, que lucha contra la dominaci&oacute;n de los seres humanos por las m&aacute;quinas.',
  },
  {
    img: 'https://i.ebayimg.com/images/g/s8AAAOSwamZdmnsq/s-l300.jpg',
    title: 'Historia de un Matrimonio',
    duration: '2h 17min',
    description:
      'Un director de teatro y su mujer, actriz, luchan por superar un divorcio que les lleva al extremo tanto en lo personal como en lo creativo.',
  },
];

const season3Data = [
  {
    img: 'https://i.pinimg.com/originals/ae/e0/26/aee026f47aa9a01116f4b7e613c8d470.png',
    title: 'Stranger Things',
    duration: '49 min.',
    description:
      'Despu&eacute;s de la extra&ntildea desaparici&oacute;n de un ni&ntilde;o, un pueblo se encuentra ante un misterio que revela experimentos secretos, fuerzas sobrenaturales y a una ni&ntilde;a muy especial.',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/en/d/db/Rocky_Balboa_%282006%29_theatrical_poster.jpg',
    title: 'Rocky I',
    duration: '2h 2min',
    description:
      'Un humilde boxeador de Filadelfia, en el que nadie cree, tiene la oportunidad de cambiar su vida por completo si lucha por el t&iacute;tulo mundial contra el temible Apollo Creed.',
  },

  {
    img: 'https://cdn.shopify.com/s/files/1/0969/9128/products/MoneyHeist-NetflixTVShowPosterFanArt_67917fbc-de8e-4228-90a4-217503d7bbd4.jpg',
    title: 'La Casa de Papel',
    duration: '56 min.',
    description:
      'Un grupo de asaltantes busca realizar el atraco del siglo al internarse en la F&aacute;brica de Moneda y Timbre de Espa&ntilde;a, guiados por el personaje conocido como El Profesor.',
  },
  {
    img: 'https://i.ebayimg.com/images/g/s8AAAOSwamZdmnsq/s-l300.jpg',
    title: 'Historia de un Matrimonio',
    duration: '2h 17min',
    description:
      'Un director de teatro y su mujer, actriz, luchan por superar un divorcio que les lleva al extremo tanto en lo personal como en lo creativo.',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg',
    title: 'Forrest Gump',
    duration: '2h 22min',
    description:
      'Forrest Gump, un joven sure&ntilde;o, tenaz e inocente, es protagonista de acontecimientos cruciales en la historia de los Estados Unidos.',
  },
];

const season4Data = [
  {
    img: 'https://d25bohr794b7hg.cloudfront.net/tlnt-holdings/case-studies/netflix-dark/netflix-dark-selected-01.jpg',
    title: 'Dark',
    duration: '48 min.',
    description:
      'Un ni&ntilde;o desaparecido expone los secretos y las conexiones ocultas entre cuatro familias mientras desentra&ntilde;an lentamente una siniestra conspiraci&oacute;n de viaje en el tiempo que abarca tres generaciones.',
  },
  {
    img: 'https://i.pinimg.com/originals/43/9a/0d/439a0d0c452ac069332e0c1450e5690a.jpg',
    title: '13 Reasons Why',
    duration: '51 min.',
    description:
      'El adolescente Clay Jensen se halla en medio de una serie de misterios desgarradores accionados por el tr&aacute;gico suicidio de una de sus amigas.',
  },
  {
    img: 'https://i.pinimg.com/236x/8a/8f/b0/8a8fb02d966e9cf4e811d1daa6699653--batman-and-catwoman-hd-movies.jpg',
    title: 'Batman: el Caballero de la Noche Asciende',
    duration: '2h 44min',
    description:
      'Ocho a&ntilde;os despu&eacute;s de asumir la culpa por la muerte de Harvey Dent y desaparecer en la noche, Batman se ve obligado a salir del exilio autoimpuesto gracias a una ladrona astuta y a un terrorista despiadado.',
  },

  {
    img: 'https://upload.wikimedia.org/wikipedia/en/c/c2/Back_to_the_Future_Part_II.jpg',
    title: 'Volver al Futuro II',
    duration: '1h 48min',
    description:
      'Un adolescente y un inventor extravagante viajan al pasado y al futuro para alterar una serie de eventos desastrosos.',
  },
  {
    img: 'https://asturscore.com/wp-content/uploads/2019/02/Caratula-BSO-The-Umbrella-Academy-Jeff-Russo.jpg',
    title: 'The Umbrella Academy',
    duration: '56 min.',
    description:
      'Una familia disfuncional de superh&eacute;roes trabajan juntos para descubrir c&oacute;mo falleci&oacute; su padre. La misi&oacute;n no resulta sencilla debido a que todos tienen personalidades y poderes diferentes.',
  },
];

const seasonDataMap = {
  'season-1': season1Data,
  'season-2': season2Data,
  'season-3': season3Data,
  'season-4': season4Data,
};

const handleChangeOnPortalSelect = () => {
  const seasonData = seasonDataMap[portalSelectEpisodes.value];

  for (let i = 0; i < episodesCards.length; i++) {
    const episodeCard = episodesCards[i];
    const episodeData = seasonData[i];

    const episodeCardImg = episodeCard.querySelector('img');
    episodeCardImg.src = episodeData.img;
    episodeCardImg.alt = episodeData.title;

    const episodeCardDetails = episodeCard.querySelector(
      '.episode-card--details'
    );
    episodeCardDetails.querySelector('.episode-card--title').innerHTML =
      episodeData.title;
    episodeCardDetails.querySelector('.episode-card--duration').innerHTML =
      episodeData.duration;
    episodeCardDetails.querySelector('.episode-card--description').innerHTML =
      episodeData.description;
  }
};

/* ------------------------------ */

function groupMoviesByImageSrc() {
  const movieCards = document.querySelectorAll('.movie-card');
  const movieCardsGroups = {};

  movieCards.forEach((movieCard) => {
    const movieCardImageSrc = movieCard.querySelector('img').src;

    if (!movieCardsGroups[movieCardImageSrc])
      movieCardsGroups[movieCardImageSrc] = [];

    movieCardsGroups[movieCardImageSrc].push(movieCard);
  });

  return movieCardsGroups;
}

const groupedMovieCards = groupMoviesByImageSrc();

/* ------------------------------ */

function changeMovieCardsWithSameImageSrc(movieCardImgSrc, innerHTML, title) {
  const movieCards = groupedMovieCards[movieCardImgSrc];

  movieCards.forEach((movieCard) => {
    const movieCardAddToMyListIcon = movieCard.querySelector(
      '.movie-card--details--add-icon'
    );
    movieCardAddToMyListIcon.innerHTML = innerHTML;
    movieCardAddToMyListIcon.title = title;
  });
}

/* handleMyList */
const mainMovieCards = document.querySelectorAll('.movie-card');

setTimeout(() => {
  mainMovieCards.forEach((movieCard) => {
    const addToMyListIcon = movieCard.querySelector(
      '.movie-card--details--add-icon'
    );

    addToMyListIcon.addEventListener('click', () => handleMyList(movieCard));
  });
}, 500);

const myList = document.getElementById('my-list');
const myListCarousel = myList.querySelector('.carousel');

const handleMyList = (movieCard) => {
  const movieCardImage = movieCard.querySelector('img');
  const movieCardImgSrc = movieCardImage.src;
  const movieCardImgAlt = movieCardImage.alt;

  const movieCardTextsContainer = movieCard.querySelector(
    '.movie-card--details--text-container'
  );
  const movieCardDuration = movieCardTextsContainer.children[2].innerHTML;
  const movieCardPercentageText = movieCardTextsContainer.children[0].innerHTML;
  const movieCardPercentage = movieCardPercentageText.split('%')[0];
  const addToMyListIcon = movieCard.querySelector(
    '.movie-card--details--add-icon'
  );

  if (addToMyListIcon.innerHTML === 'add') {
    // New Movie Card
    const newMovieCard = createMovieCard(
      movieCardImgSrc,
      movieCardImgAlt,
      movieCardDuration,
      movieCardPercentage
    );

    const newMovieCardAddToListIcon = newMovieCard.querySelector(
      '.movie-card--details--add-icon'
    );

    newMovieCardAddToListIcon.addEventListener('click', () => {
      changeMovieCardsWithSameImageSrc(
        movieCardImgSrc,
        'add',
        'Agregar a favoritos'
      );

      myListCarousel.removeChild(newMovieCard);

      if (myListCarousel.children.length > 0) myList.style.display = 'block';
      else myList.style.display = 'none';
    });

    myListCarousel.append(newMovieCard);

    // Change Movie Cards with same image
    changeMovieCardsWithSameImageSrc(
      movieCardImgSrc,
      'delete_outline',
      'Remover a favoritos'
    );

    // Update Icon
    addToMyListIcon.innerHTML = 'delete_outline';
    addToMyListIcon.title = 'Remover de favoritos';
  } else if (addToMyListIcon.innerHTML === 'delete_outline') {
    const myListMovieCards = myListCarousel.querySelectorAll('.movie-card');

    myListMovieCards.forEach((myListMovieCard) => {
      const myListMovieCardImgSrc = myListMovieCard.querySelector('img').src;

      if (myListMovieCardImgSrc === movieCardImgSrc) {
        myListCarousel.removeChild(myListMovieCard);
      }
    });

    // Change Movie Cards with same image
    changeMovieCardsWithSameImageSrc(
      movieCardImgSrc,
      'add',
      'Agregar a favoritos'
    );

    // Update Icon
    addToMyListIcon.innerHTML = 'add';
    addToMyListIcon.title = 'Agregar a favoritos';
  }

  if (myListCarousel.children.length > 0) {
    myList.style.display = 'block';
  } else {
    myList.style.display = 'none';
  }
};

function createMovieCard(
  url = '',
  altText = 'Image',
  duration = '1h 50min',
  percentage = '96'
) {
  /* ---------- Create MovieCard's Icons Container ---------- */
  const playIcon = createIcon('Reproducir', 'play_arrow');
  const addIcon = createIcon('Remover de favoritos', 'delete_outline');
  const likeIcon = createIcon('Me gusta', 'thumb_up_off_alt');
  const dislikeIcon = createIcon('No me gusta', 'thumb_down_off_alt');

  addIcon.classList.add('movie-card--details--add-icon');

  const expandIcon = createElement({
    tagname: 'button',
    attributes: {
      class: 'material-icons',
      title: 'Ver m&aacute;s',
      onclick: 'handlePortalDisplayBlock()',
    },
    innerHTML: 'expand_more',
  });

  const iconsContainer = createElement({
    tagname: 'div',
    children: [playIcon, addIcon, likeIcon, dislikeIcon, expandIcon],
    attributes: { class: 'movie-card--details--icons-container' },
  });

  /* ---------- Create MovieCard's Text Container ---------- */
  const percentageText = createElement({
    tagname: 'p',
    attributes: {
      class: 'green-text',
    },
    innerHTML: `${percentage}% para ti`,
  });

  const tvmaText = createElement({
    tagname: 'p',
    attributes: {
      class: 'tv-ma-text',
    },
    innerHTML: 'TV-MA',
  });

  const durationText = createElement({ tagname: 'p', innerHTML: duration });

  const textContainer = createElement({
    tagname: 'div',
    children: [percentageText, tvmaText, durationText],
    attributes: { class: 'movie-card--details--text-container' },
  });

  /* ---------- Create MovieCard's Details Container ---------- */
  const detailsContainer = createElement({
    tagname: 'div',
    children: [iconsContainer, textContainer],
    attributes: { class: 'movie-card--details' },
  });

  /* ---------- Create MovieCard's Image Container ---------- */
  const image = createElement({
    tagname: 'img',
    attributes: {
      src: url,
      alt: altText,
    },
  });

  const pictureElement = createElement({
    tagname: 'picture',
    children: [image],
  });

  const imageContainer = createElement({
    tagname: 'div',
    children: [pictureElement],
    attributes: {
      class: 'movie-card--main-image',
    },
  });

  const movieCard = createElement({
    tagname: 'article',
    children: [imageContainer, detailsContainer],
    attributes: { class: 'movie-card' },
  });

  return movieCard;
}

function createIcon(title, innerHTML) {
  return createElement({
    tagname: 'i',
    attributes: {
      class: 'material-icons',
      title,
    },
    innerHTML,
  });
}

function createElement({ tagname, children = [], ...props }) {
  const element = document.createElement(tagname);
  element.append(...children);

  for (const prop in props) {
    if (prop === 'attributes') {
      Object.entries(props.attributes).forEach(function (attr) {
        element.setAttribute(attr[0], attr[1]);
      });
    } else element[prop] = props[prop];
  }

  return element;
}
