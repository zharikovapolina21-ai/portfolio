const portfolios = {
  presentations: [
    {
      title: 'А101', type: 'Презентация о коммерческой инфраструктуре',
      task: "Разработать презентацию на основе предоставленных материалов, раскрывающую роль коммерческой инфраструктуры в развитии жилых районов и её влияние на ценность проекта.",
      solution: "Выстроила последовательную структуру: от влияния коммерческой инфраструктуры на качество жизни до конкретных примеров из проектов А101. Систематизировала информацию и оформила её в едином визуальном стиле, создав понятный сценарий для выступления.",
      images: ['a0', 'a1', 'a2', 'a3', 'a4', 'a5'], description: "Крупный инвестиционно-строительный холдинг, один из крупнейших девелоперов Москвы."},
    {
      title: 'БАЗА', type: 'Презентации для обучения',
      task: "Разработать обучающую презентацию по управлению командой и личной эффективности, обеспечив понятную структуру материала, наглядную подачу и удобную навигацию по темам.",
      solution: "Разработала визуальную концепцию на основе контрастной палитры, оранжевых акцентов и объёмных иллюстраций. Создала систему слайдов для теории, схем и практических рекомендаций, выделив ключевые мысли и обеспечив единообразие оформления.",
      cover: 'base-ordered-1', images: ["base-ordered-1", "base-ordered-2", "base-ordered-3", "base-ordered-4", "base-ordered-5", "base-ordered-6"], description: "Тариф для формирования клиентской базы физических лиц."},
    {"title": "ИнФинТех", "type": "Презентация технологических проектов", "task": "Разработать корпоративную презентацию, раскрывающую ключевые направления деятельности компании, особенности её технологических решений и возможности их практического применения.", "solution": "Систематизировала техническую информацию и выстроила логичную структуру: от общего представления компании до конкретных решений и примеров их применения. Продумала визуальную иерархию, выделив ключевые тезисы и обеспечив последовательную подачу материала.", "images": ["infin-0", "infin-1", "infin-2", "infin-3", "infin-4", "infin-5"], description: "Технопарк «Корпорация ИнФинТех» — первый частный финтех-технопарк в России и Северо-Западном округе. Инновации, технологии и развитие финансовых решений."},
    {
      title: 'General Food & Catering', type: 'Коммерческая презентация',
      task: "Разработать презентацию для потенциальных клиентов, наглядно представляющую форматы корпоративного питания, особенности услуг компании и возможности сотрудничества.",
      solution: "Структурировала услуги по направлениям и разработала единую визуальную концепцию на основе светлой палитры и фотографий. Сделала акцент на преимуществах каждого формата, обеспечив понятную подачу предложений и удобную навигацию по презентации.",
      cover: 'food-ordered-1', images: ["food-ordered-1", "food-ordered-2", "food-ordered-3", "food-ordered-4", "food-ordered-5", "food-ordered-6"], description: "Эксперт в организации корпоративного питания."},
    {"title": "Русский Цифровой Бизнес", "type": "Презентация компании", "task": "Разработать корпоративную презентацию, отражающую обновлённый имидж компании, ключевые направления её деятельности, продуктовую линейку и стратегические планы развития.", "solution": "Выстроила последовательную структуру презентации: от знакомства с компанией и её позиционирования до продуктовых решений и планов развития. Разработала единую визуальную систему, объединив корпоративные и продуктовые слайды в целостную композицию.", "images": ["rcpres-0", "rcpres-1", "rcpres-2", "rcpres-3", "rcpres-4", "rcpres-5", "rcpres-6", "rcpres-7"], description: "Российская IT-компания, которая создаёт и продвигает цифровые продукты для людей, предпринимателей и партнёров."},
    {"title": "ЖДО", "type": "Презентация для выступления", "task": "Разработать презентацию для публичного выступления, посвящённого женскому предпринимательству и социальным инициативам, обеспечив наглядную подачу информации и выразительное представление ключевых идей.", "solution": "Структурировала материалы доклада, объединив аналитические данные, ключевые тезисы и практические примеры в последовательное повествование. Выстроила визуальную иерархию с акцентом на значимых фактах и выводах, обеспечив целостность оформления и удобство восприятия во время выступления.", "images": ["zhdo-ordered-1", "zhdo-ordered-2", "zhdo-ordered-3", "zhdo-ordered-4", "zhdo-ordered-5", "zhdo-ordered-6"], description: "Общественно-деловая платформа, цель которой объединить женщин-предпринимателей."},
    {
      title: 'Лидерский саммит', type: 'Презентация для события',
      task: "Разработать корпоративную презентацию, объединяющую ключевые новости компании, продуктовые обновления и достижения команды в единую, последовательную и визуально выразительную историю.",
      solution: "Разработала единую визуальную концепцию с цветовым разделением тематических блоков. Для продуктовых обновлений сделала акцент на визуализации решений, а для новостей команды — на фотографиях и ключевых событиях. Объединила разные форматы контента в целостную презентацию, сохранив единство стиля и удобство восприятия.",
      cover: 's16', images: ['s16', 's0', 's1', 's2', 's3', 's4'], description: "Международный саммит в Турции: подведение итогов года, обмен опытом и новые возможности для развития."},
    {"title": "А101 · Экологические решения", "type": "Презентация для конференции", "task": "Разработать презентацию об экологических инициативах девелопера, раскрывающую принципы устойчивого развития и влияние экологических решений на качество жилой среды.", "solution": "Систематизировала предоставленные материалы и выстроила структуру презентации вокруг ключевых экологических инициатив. Подкрепила основные тезисы примерами реализованных проектов, подчеркнув взаимосвязь экологических решений и качества городской среды. Адаптировала визуальную подачу под формат публичного выступления.", "images": ["aeco-0", "aeco-1", "aeco-2", "aeco-3", "aeco-4", "aeco-5", "aeco-6", "aeco-7"], description: "Крупный инвестиционно-строительный холдинг, один из крупнейших девелоперов Москвы."},
    {"title": "RC Group", "type": "Презентация компании", "task": "Разработать презентацию для публичного выступления, отражающую ключевые достижения компании, актуальные новости и основные направления её деятельности.", "solution": "Систематизировала материалы по тематическим блокам и разработала единую визуальную концепцию презентации. Выстроила чёткую иерархию информации, выделив ключевые тезисы с помощью типографики и композиционных акцентов. Адаптировала подачу материала для удобного сопровождения выступления.", "images": ["rcgroup-1", "rcgroup-2", "rcgroup-3", "rcgroup-4", "rcgroup-5", "rcgroup-6"], description: "Группа компаний, специализирующаяся на развитии широкой линейки IT-продуктов в различных областях."},
    {"title": "А101 · Недвижимость и бизнес", "type": "Презентация для выступления", "task": "Разработать деловую презентацию, раскрывающую перспективы развития коммерческой недвижимости, преимущества проекта и возможности потенциального сотрудничества.", "solution": "Структурировала предоставленные материалы, объединив аналитические данные, примеры объектов и ключевые аргументы в последовательную презентацию. Выстроила визуальную иерархию с акцентом на преимуществах проекта и значимых показателях, обеспечив убедительную подачу информации для деловой аудитории.", "images": ["aoffice-1", "aoffice-2", "aoffice-3", "aoffice-4", "aoffice-5", "aoffice-6"], description: "Крупный инвестиционно-строительный холдинг, один из крупнейших девелоперов Москвы."},
  ],
  social: [
    {
      title: 'Fitness House', layout: 'fitness',
      task: 'Разработать с нуля оформление для разных публикаций фитнес-клуба, от расписаний и афиш до развлекательных подборок.',
      solution: 'Разработала единую визуальную концепцию, обеспечив целостность фирменного стиля, узнаваемость контента и удобство восприятия информации.',
      images: Array.from({length: 7}, (_, i) => `smm-fitness-${i + 1}`),
    },
    {
      title: 'Русский Цифровой Бизнес', layout: 'digital',
      images: ['smm-digital-0', 'smm-digital-1', 'smm-digital-2', 'smm-digital-3'],
    },
    {
      title: 'RC Pay', layout: 'rc',
      task: 'Разработать систему визуального оформления для ежедневных публикаций в Telegram-канале.',
      solution: 'Создала систему графических элементов и композиционных решений для различных рубрик, сохранив целостность оформления и узнаваемость бренда.',
      images: Array.from({length: 8}, (_, i) => `smm-rc-${i + 1}`),
    },
  ],
  print: [
    {
      title: 'Бейдж форума', type: 'Печатная продукция', mock: 'badge',
      caption: 'Именной бейдж участника форума по туризму.',
      images: ['badge0'],
    },
    {
      title: 'Техноуспех', type: 'Бирка для одежды', mock: 'tag',
      caption: 'Навесная бирка с рекомендациями по уходу.',
      images: ['tag0'],
    },
    {
      title: 'Русский Цифровой Бизнес', type: 'Печатное уведомление', mock: 'paper', accent: 'notice',
      caption: 'Уведомление в фирменном оформлении.',
      images: ['notice'],
    },
    {
      title: 'БАЗА', type: 'Брендированный мерч', mock: 'merch',
      caption: 'Кружка, блокноты,<br>ручки и спортивные бутылки.',
      images: ['base-books', 'base-mug', 'base-pens', 'base-bottle'],
    },
    {
      title: 'Cyber Community', type: 'Флаер', mock: 'paper', 
      caption: 'Промофлаер компьютерного клуба.',
      images: ['cyber', 'cyber-giveaway'],
    },
    {
      title: 'Север', type: 'Визитка', mock: 'cards',
      caption: 'Две стороны визитки туристической компании.',
      images: ['north-card1', 'north-card0'],
    },
    {
      title: 'Сладости Востока', type: 'Визитка', mock: 'cards',
      caption: 'Лицевая и оборотная стороны визитки.',
      images: ['east-card1', 'east-card0'],
    },
    {
      title: 'The Gift Wrapper', type: 'Визитка', mock: 'cards',
      caption: 'Двусторонняя визитка с фирменным рисунком.',
      images: ['card0', 'card1'],
    },
    {
      title: 'ЖДО', type: 'Визитка', mock: 'cards', accent: 'zhdo',
      caption: 'Две стороны визитки Женского<br>делового общества.',
      images: ['zhdo-card-0', 'zhdo-card-1'],
    },
  ],
  web: [
    {
      title: 'Туроператор «Карелия Гид»', type: 'Сайт турфирмы', mock: 'device',
      task: "Спроектировать современный и удобный сайт туристической компании, который позволит пользователям легко находить подходящие туры, изучать условия поездок и переходить к бронированию.",
      solution: "Разработала визуальную концепцию и адаптивные макеты сайта для десктопных и мобильных устройств. Продумала структуру каталога, карточки туров и пользовательский путь от выбора направления до отправки заявки. Сделала акцент на интуитивной навигации, визуальной иерархии и удобстве взаимодействия с интерфейсом.",
      images: ['north0'], detailImages: ['north-full-0'], description: 'Туроператор, который открывает Карелию с самых разных сторон.',
    },
    {
      title: 'Практикум Сергея Бадюка', type: 'Промолендинг', description: 'Авторский онлайн-практикум Сергея Бадюка, направленный на развитие физической силы, восстановление подвижности и формирование здоровых привычек через систему ежедневных тренировок.', mock: 'device',
      task: "Разработать адаптивный дизайн страницы практикума, который познакомит аудиторию с программой, раскроет её ключевые преимущества и обеспечит удобный переход к подробной информации.",
      solution: "Разработала визуальную концепцию с акцентом на личности спикера и ключевом предложении практикума. Выстроила последовательную структуру блоков, выделила основные смыслы и продумала визуальную иерархию. Адаптировала дизайн для десктопных и мобильных устройств, сохранив целостность композиции и удобство восприятия.",
      images: ['landing0'], detailImages: ['landing-full-0', 'landing-full-1'],
    },
  ],
};

const dialog = document.querySelector('#project');
const content = dialog.querySelector('.project-content');
let activeCard;

function img(key, description, className = '') {
  return `<img src="assets/${key}.webp" alt="${description}" class="${className}" loading="lazy">`;
}

function cover(project) {
  const [first, second] = project.images;
  if (project.mock === 'device') {
    return `<div class="device-stage">
      <img class="desk-photo" src="assets/desk-landing.webp" alt="" loading="lazy">
      <div class="desk-screen">${img(first, project.title + ' на мониторе')}</div>
    </div>`;
  }
  if (project.mock === 'merch') {
    return `<div class="cover mock merch">${project.images.map((key, index) => img(key, ['Блокноты БАЗЫ', 'Кружка БАЗЫ', 'Ручки БАЗЫ', 'Бутылки БАЗЫ'][index])).join('')}</div>`;
  }
  if (project.mock === 'paper') {
    return `<div class="cover mock paper">${img(first, project.type + ' — ' + project.title)}${second ? img(second, 'Макет розыгрыша Cyber Community', 'giveaway') : ''}</div>`;
  }
  if (project.mock === 'tag') {
    return `<div class="cover mock tag">
      <div class="tag-face tag-back">${img(first, 'Техноуспех — оборот бирки')}</div>
      <div class="tag-face">${img(first, 'Техноуспех — лицевая сторона бирки')}</div>
    </div>`;
  }
  if (project.mock === 'badge') {
    return `<div class="cover mock badge"><div class="badge-lanyard">${img(first, project.title)}</div></div>`;
  }
  if (project.mock === 'cards') {
    return `<div class="cover mock ${project.mock}">${img(first, project.title)}${second ? img(second, 'Вторая сторона — ' + project.title) : ''}</div>`;
  }
  return `<div class="cover">${img(project.cover ?? first, project.title)}</div>`;
}

function openProject(project, card) {
  activeCard = card;
  content.classList.toggle('presentation-case', portfolios.presentations.includes(project));
  content.innerHTML = `
    <p class="type">${project.type}</p>
    <h2 id="project-title">${project.title === 'Туроператор «Карелия Гид»' ? 'Туроператор <span class="mobile-title-line">«Карелия Гид»</span>' : project.title === 'Практикум Сергея Бадюка' ? 'Практикум <span class="mobile-title-line">Сергея Бадюка</span>' : project.title}</h2>
    <div class="case-brief">
      <section class="case-panel"><h3>Задача</h3><p>${project.task}</p></section>
      <section class="case-panel solution"><h3>Решение</h3><p>${project.solution}</p></section>
    </div>
    <div class="gallery${project.mock === 'device' ? ' web-gallery' : ''}">
      ${(project.detailImages ?? project.images).map((key, index) => key === 'landing-full-1'
        ? `<div class="phone-flow"><div class="phone-outline" aria-hidden="true"></div>${img(key, 'Мобильная версия практикума')}</div>`
        : img(key, `${project.title} — кадр ${index + 1}`)).join('')}
    </div>
    <a class="contact" href="https://t.me/pollyyzh">Обсудить проект <span aria-hidden="true">↗</span></a>`;
  if (portfolios.presentations.includes(project) || portfolios.web.includes(project)) {
    content.querySelectorAll('.case-panel').forEach(panel => {
      const heading = panel.querySelector('h3');
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'case-disclosure';
      button.textContent = heading.textContent;
      const mobile = matchMedia('(max-width:700px)').matches;
      panel.classList.toggle('is-collapsed', mobile);
      button.setAttribute('aria-expanded', String(!mobile));
      button.addEventListener('click', () => {
        if (!matchMedia('(max-width:700px)').matches) return;
        panel.classList.toggle('is-collapsed');
        button.setAttribute('aria-expanded', String(!panel.classList.contains('is-collapsed')));
      });
      heading.replaceChildren(button);
    });
  }
  bindShortWords(content);
  dialog.showModal();
  dialog.scrollTop = 0;
}

for (const group of document.querySelectorAll('[data-group]')) {
  let businessCards;
  if (group.dataset.group === 'print') {
    businessCards = document.createElement('div');
    businessCards.className = 'print-loop-set';
  }
  for (const project of portfolios[group.dataset.group]) {
    if (group.dataset.group === 'social') {
      group.append(renderSocialProject(project, group.children.length));
      continue;
    }
    if (group.dataset.group === 'print') {
      const piece = document.createElement('figure');
      piece.className = `print-piece print-${project.mock}${project.accent ? ' print-' + project.accent : ''}`;
      piece.innerHTML = `${cover(project)}<figcaption class="print-callout"><strong>${project.accent === 'notice' ? 'Русский Цифровой<br>Бизнес' : project.title}</strong><p>${project.caption}</p></figcaption>`;
      businessCards.append(piece);
      continue;
    }
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'card';
    card.setAttribute('aria-haspopup', 'dialog');
    card.setAttribute('aria-label', 'Смотреть кейс — ' + project.title);
    const titleMarkup = project.title === 'Туроператор «Карелия Гид»' ? 'Туроператор <span class="mobile-title-line">«Карелия Гид»</span>' : project.title === 'Практикум Сергея Бадюка' ? 'Практикум <span class="mobile-title-line">Сергея Бадюка</span>' : project.title;
    card.innerHTML = `${cover(project)}<div class="card-copy"><strong>${titleMarkup}</strong><span class="arrow" aria-hidden="true">↗</span><p>${project.description ?? project.task}</p></div>`;
    card.addEventListener('click', () => openProject(project, card));
    group.append(card);
  }
  if (businessCards) {
    const viewport = document.createElement('div');
    viewport.className = 'print-loop';
    viewport.tabIndex = 0;
    viewport.setAttribute('role', 'region');
    viewport.setAttribute('aria-label', 'Печатные проекты — непрерывная карусель');
    const track = document.createElement('div');
    track.className = 'print-loop-track';
    const repeat = businessCards.cloneNode(true);
    repeat.setAttribute('aria-hidden', 'true');
    repeat.inert = true;
    track.append(businessCards, repeat);
    track.querySelectorAll('img').forEach(image => { image.loading = 'eager'; image.draggable = false; });
    viewport.append(track);
    group.append(viewport);
    const updateSpeed = () => track.style.setProperty('--print-loop-duration', `${Math.max(1, businessCards.getBoundingClientRect().width / 46)}s`);
    new ResizeObserver(updateSpeed).observe(businessCards);
    updateSpeed();
    let drag = null;
    viewport.addEventListener('pointerdown', event => {
      if (event.button !== 0 || !event.isPrimary) return;
      const animation = track.getAnimations()[0];
      const duration = animation ? Number(animation.effect.getTiming().duration) : 0;
      drag = {id: event.pointerId, x: event.clientX, time: Number(animation?.currentTime ?? 0), animation, duration, width: businessCards.getBoundingClientRect().width, scroll: viewport.scrollLeft};
      animation?.pause();
      viewport.setPointerCapture(event.pointerId);
      viewport.classList.add('is-dragging');
      event.preventDefault();
    });
    viewport.addEventListener('pointermove', event => {
      if (!drag || drag.id !== event.pointerId) return;
      const delta = event.clientX - drag.x;
      if (drag.animation && drag.width && drag.duration) {
        const time = drag.time - delta / drag.width * drag.duration;
        drag.animation.currentTime = ((time % drag.duration) + drag.duration) % drag.duration;
      } else viewport.scrollLeft = drag.scroll - delta;
    });
    const finishDrag = event => {
      if (!drag || drag.id !== event.pointerId) return;
      drag.animation?.play();
      drag = null;
      viewport.classList.remove('is-dragging');
      if (viewport.hasPointerCapture(event.pointerId)) viewport.releasePointerCapture(event.pointerId);
    };
    viewport.addEventListener('pointerup', finishDrag);
    viewport.addEventListener('pointercancel', finishDrag);
    viewport.addEventListener('lostpointercapture', finishDrag);
  }
}

function renderSocialProject(project, index) {
  const article = document.createElement('article');
  article.className = `smm-case smm-${project.layout}`;
  article.setAttribute('aria-labelledby', `smm-title-${index}`);
  const picture = (key, alt, className = '') => `<img src="assets/${key}.jpg" alt="${alt}" class="${className}" loading="lazy" width="960" height="1200">`;
  const controls = `<div class="smm-controls" aria-label="Публикации ${project.title}">
    <button type="button" data-smm-step="-1" aria-label="Предыдущая публикация ${project.title}">←</button>
    <button type="button" data-smm-step="1" aria-label="Следующая публикация ${project.title}">→</button>
  </div>`;
  const brief = `<div class="smm-brief"><section class="smm-task"><h4>ЗАДАЧА</h4><p>${project.task}</p></section>
    <section class="smm-solution"><h4>РЕШЕНИЕ</h4><p>${project.solution}</p></section></div>`;
  article.innerHTML = `<div class="smm-case-heading"><h3 id="smm-title-${index}" class="smm-title"><span class="project-index">${index + 1}</span>${project.title}</h3>${project.layout === 'digital' ? '' : controls}</div>`;
  if (project.layout === 'digital') {
    article.insertAdjacentHTML('beforeend', `<div class="smm-digital-composition">
      <div class="smm-digital-phone">
        <img class="smm-digital-frame" src="assets/smm-digital-phone-original.png" alt="Русский Цифровой Бизнес — Выгода в кадре" loading="lazy">
      </div>
      <div class="smm-digital-grid">${project.images.map((key, i) => picture(key, ['Ещё больше экономии с «Халва.Десятка»', 'Рейтинг городов — Санкт-Петербург', 'Айгуль Габдуллина', 'До главного события года остаётся всё меньше времени'][i])).join('')}</div>
    </div>`);
    return article;
  }
  const isRC = project.layout === 'rc';
  if (!isRC) {
    article.insertAdjacentHTML('beforeend', `<div class="smm-fitness-composition">${brief}
      <div class="smm-fitness-phone">
        <img class="smm-phone-source" src="assets/smm-fitness-device.png" alt="" loading="lazy" width="1421" height="2426">
        <div class="smm-fitness-screen">${picture(project.images[0], 'Fitness House — публикация 1', 'smm-current')}</div>
      </div></div>`);
  } else {
    article.insertAdjacentHTML('beforeend', `<div class="smm-rc-composition">${brief}
      <div class="smm-rc-slider">
        <div class="smm-rc-phone">
          <img class="smm-rc-device" src="assets/smm-rc-device.png" alt="Телефон RC PAY. KIKO: та самая помада из Италии. KIKO Milano — любимый бренд нашего СММ-специалиста." loading="lazy" width="1583" height="2674">
          <div class="smm-rc-original-cover" aria-hidden="true"></div>
        </div>
        <div class="smm-rc-window"><div class="smm-rc-track">
          ${project.images.map((key, i) => picture(key, `${project.title} — публикация ${i + 1}`)).join('')}
        </div></div>
      </div></div>`);
    article.querySelector('.smm-rc-composition').prepend(article.querySelector('.smm-case-heading'));
    document.querySelector('.smm-sheet').insertAdjacentHTML('beforeend', '<img class="smm-rc-arrow" src="assets/smm-cursor-hq.png" alt="" loading="lazy" width="1150" height="1368">');
  }
  let current = 0;
  const previous = article.querySelector('[data-smm-step="-1"]');
  const next = article.querySelector('[data-smm-step="1"]');
  const currentImage = article.querySelector('.smm-current');
  const track = article.querySelector('.smm-rc-track');
  const last = project.images.length - (isRC ? 2 : 1);
  article.insertAdjacentHTML('beforeend', '<span class="smm-status" role="status" aria-live="polite"></span>');
  function update() {
    if (track) {
      track.style.setProperty('--smm-index', current);
      [...track.children].forEach((image, i) => image.setAttribute('aria-hidden', String(i < current || i > current + 1)));
    } else {
      currentImage.src = `assets/${project.images[current]}.jpg`;
      currentImage.alt = `${project.title} — публикация ${current + 1}`;
    }
    previous.disabled = current === 0;
    next.disabled = current === last;
    article.dataset.slide = String(current + 1);
    article.querySelector('.smm-status').textContent = isRC
      ? `${current + 1}–${current + 2} / ${project.images.length}`
      : `${current + 1} / ${project.images.length}`;
  }
  for (const button of [previous, next]) button.addEventListener('click', () => {
    current = Math.max(0, Math.min(last, current + Number(button.dataset.smmStep)));
    update();
    if (currentImage && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
      currentImage.animate([{opacity: .3}, {opacity: 1}], {duration: 250, easing: 'ease-out'});
    }
  });
  const swipeSurface = article.querySelector(isRC ? '.smm-rc-slider' : '.smm-fitness-phone');
  swipeSurface.classList.add('mobile-swipe-surface');
  swipeSurface.insertAdjacentHTML('beforeend', '<span class="mobile-swipe-hint" aria-hidden="true">← Свайпайте →</span>');
  addMobileSwipe(swipeSurface, direction => {
    (direction > 0 ? next : previous).click();
  });
  update();
  return article;
}

function keepShortWords(text) {
  return text.replace(/(?<![а-яё])(?:а|и|к|с|в|у|о|на|по|за|от|из|до|для|без|под|над|при|про|через|во|со|об) (?=\S)/giu, (word) => word.trimEnd() + '\u00a0');
}

dialog.querySelector('.close').addEventListener('click', () => dialog.close());
dialog.addEventListener('close', () => activeCard?.focus({ preventScroll: true }));
dialog.addEventListener('click', (event) => {
  if (event.target !== dialog) return;
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) {
    dialog.close();
  }
});
const mobileNav = document.querySelector('.mobile-nav');
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { mobileNav.open = false; }));

const presentations = document.querySelector('.presentation-section');
const cards = [...presentations.querySelectorAll('.presentation-rail .card')];
const numbers = presentations.querySelector('.presentation-numbers');
let activePresentation = 0;
function showPresentation(index) {
  activePresentation = Math.max(0, Math.min(cards.length - 1, index));
  cards.forEach((card, i) => {
    card.classList.toggle('is-active', i === activePresentation);
    card.inert = i !== activePresentation;
    card.setAttribute('aria-hidden', String(i !== activePresentation));
  });
  [...numbers.children].forEach((button, i) => {
    button.setAttribute('aria-pressed', String(i === activePresentation));
  });
  const swipeHint = presentations.querySelector('.presentation-swipe-hint');
  if (swipeHint) cards[activePresentation].querySelector('.cover').append(swipeHint);
  requestAnimationFrame(syncPortfolioSpacing);
}
function navigatePresentation(index) {
  showPresentation(index);
}
cards.forEach((card, index) => {
  const button = document.createElement('button');
  button.type = 'button';
  button.textContent = String(index + 1).padStart(2, '0');
  button.setAttribute('aria-label', 'Показать презентацию ' + card.querySelector('strong').textContent);
  button.addEventListener('click', () => navigatePresentation(index));
  numbers.append(button);
});
for (const button of presentations.querySelectorAll('[data-direction]')) {
  button.addEventListener('click', () => navigatePresentation(activePresentation + Number(button.dataset.direction)));
}
presentations.querySelector('.presentation-viewport').insertAdjacentHTML('beforeend', '<span class="presentation-swipe-hint" aria-hidden="true">← Свайпайте →</span>');
addMobileSwipe(presentations.querySelector('.presentation-viewport'), direction => navigatePresentation(activePresentation + direction));
showPresentation(0);

const facts = document.querySelector('.facts');
const counterObserver = new IntersectionObserver((entries) => {
  if (!entries.some(entry => entry.isIntersecting)) return;
  counterObserver.disconnect();
  const counters = [...facts.querySelectorAll('[data-count]')];
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const start = performance.now();
  function animateCounters(now) {
    const progress = Math.min(1, (now - start) / 2600);
    const eased = 1 - Math.pow(1 - progress, 3);
    for (const counter of counters) {
      counter.textContent = Math.round(Number(counter.dataset.count) * eased) + (counter.dataset.suffix ?? '');
    }
    if (progress < 1) requestAnimationFrame(animateCounters);
  }
  requestAnimationFrame(animateCounters);
}, {threshold: .2});
counterObserver.observe(facts);

function bindShortWords(root) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) {
    if (!walker.currentNode.parentElement.closest('script,style,svg')) nodes.push(walker.currentNode);
  }
  for (const node of nodes) node.textContent = keepShortWords(node.textContent);
}
bindShortWords(document.body);

function fitHeroHeading() {
  const heading = document.querySelector('.hero h1');
  const mobile = matchMedia('(max-width:700px)').matches;
  let middle = heading.querySelector('.mobile-hero-middle');
  if (mobile && !middle) {
    middle = document.createElement('span');
    middle.className = 'mobile-hero-middle';
    middle.innerHTML = '<span>&amp; WEB</span>';
    heading.firstElementChild.after(middle);
  } else if (!mobile && middle) middle.remove();
  const first = heading.firstElementChild.firstElementChild;
  const firstText = mobile ? 'GRAPHIC' : 'GRAPHIC & WEB';
  if (first.textContent !== firstText) first.textContent = firstText;
  for (const line of heading.children) {
    const inner = line.firstElementChild;
    inner.style.fontSize = '100px';
    const naturalWidth = inner.getBoundingClientRect().width;
    inner.style.fontSize = (100 * heading.clientWidth / naturalWidth) + 'px';

  }
}
for (const line of document.querySelectorAll('.hero h1 > span')) {
  const inner = document.createElement('span');
  inner.textContent = line.textContent;
  line.replaceChildren(inner);
}
new ResizeObserver(fitHeroHeading).observe(document.querySelector('.hero h1'));
document.fonts.ready.then(fitHeroHeading);

const badge = document.querySelector('.badge-swing');
badge.addEventListener('animationend', (event) => {
  if (event.animationName === 'swing' || event.animationName === 'mobile-badge-swing') badge.closest('.badge-fall').classList.add('settled');
});

const aboutSection = document.querySelector('#about');
const aboutParagraph = aboutSection.querySelector('.about-text-page > p');
const aboutText = aboutParagraph.textContent;
const aboutObserver = new IntersectionObserver(entries => {
  if (!entries.some(entry => entry.isIntersecting)) return;
  aboutObserver.disconnect();
  aboutSection.classList.add('about-entered');
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const ghost = document.createElement('span');
  ghost.className = 'typing-space';
  ghost.setAttribute('aria-hidden', 'true');
  ghost.textContent = aboutText;
  const visible = document.createElement('span');
  visible.className = 'typing-visible';
  visible.setAttribute('aria-hidden', 'true');
  aboutParagraph.setAttribute('aria-label', aboutText);
  aboutParagraph.classList.add('typing-paragraph');
  aboutParagraph.replaceChildren(ghost, visible);
  const start = performance.now();
  function type(now) {
    const count = Math.min(aboutText.length, Math.floor((now - start) / 20));
    visible.textContent = aboutText.slice(0, count);
    if (count < aboutText.length) requestAnimationFrame(type);
    else {
      aboutParagraph.classList.remove('typing-paragraph');
      aboutParagraph.textContent = aboutText;
    }
  }
  requestAnimationFrame(type);
}, {threshold: .2});
aboutObserver.observe(aboutSection);

// Match desktop presentation gaps; on stacked layouts use the stage padding as the spacing reference.
function syncPortfolioSpacing() {
  const section = document.querySelector('#presentations');
  const reference = section.querySelector('.card .cover');
  const active = section.querySelector('.card.is-active');
  const contact = document.querySelector('.services-contact');
  const social = document.querySelector('#social');
  const target = matchMedia('(max-width:900px)').matches
    ? Number.parseFloat(getComputedStyle(section.querySelector('.presentation-stage')).paddingTop)
    : reference.getBoundingClientRect().top - contact.getBoundingClientRect().bottom;
  const remaining = section.getBoundingClientRect().bottom - active.getBoundingClientRect().bottom;
  social.style.paddingTop = Math.max(0, target - remaining) + 'px';
}
const portfolioSpacingObserver = new ResizeObserver(syncPortfolioSpacing);
portfolioSpacingObserver.observe(document.querySelector('.presentation-stage'));
portfolioSpacingObserver.observe(document.querySelector('.services-contact'));
document.fonts.ready.then(syncPortfolioSpacing);

// Mobile-only swipe navigation keeps all desktop controls and behavior intact.
function addMobileSwipe(surface, navigate) {
  let origin = null;
  let suppressClickUntil = 0;
  surface.addEventListener('pointerdown', event => {
    if (!matchMedia('(max-width:700px)').matches || !event.isPrimary || event.button !== 0) return;
    origin = {x:event.clientX,y:event.clientY,id:event.pointerId};
  });
  surface.addEventListener('pointermove', event => {
    if (!origin || origin.id !== event.pointerId) return;
    const dx=event.clientX-origin.x,dy=event.clientY-origin.y;
    if (Math.abs(dx)>12 && Math.abs(dx)>Math.abs(dy)*1.25 && !surface.hasPointerCapture(event.pointerId)) surface.setPointerCapture(event.pointerId);
  });
  surface.addEventListener('pointerup', event => {
    if (!origin || origin.id !== event.pointerId) return;
    const dx = event.clientX-origin.x, dy = event.clientY-origin.y;
    origin = null;
    if (Math.abs(dx) >= 35 && Math.abs(dx) > Math.abs(dy)*1.25) {
      suppressClickUntil = performance.now()+450;
      navigate(dx < 0 ? 1 : -1);
    }
    if (surface.hasPointerCapture(event.pointerId)) surface.releasePointerCapture(event.pointerId);
  });
  surface.addEventListener('pointercancel', () => { origin = null; });
  surface.addEventListener('click', event => {
    if (performance.now() < suppressClickUntil) { event.preventDefault(); event.stopImmediatePropagation(); }
  }, true);
  surface.querySelectorAll('img').forEach(image => { image.draggable = false; });
}
