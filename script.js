const sessions = [
  {
    id: 's1',
    month: '03',
    day: '03.10',
    time: '11:00',
    type: '브랜딩',
    title: '지학사 교과서 브랜딩 래퍼런스',
    speaker: '교재마케팅 Cell · 김남우 CP',
    summary: '“진심이 짓는다”라는 슬로건 아래 교사, 교과서, 학생·학부모의 여정을 하나의 브랜드 서사로 엮은 발표입니다.',
    overview: '교과서를 단순한 상품이 아니라 교육 현장을 함께 만드는 여정으로 바라보고, 교사의 생애 주기와 교과서의 확장, 학생과 학부모의 성장까지 아우르는 브랜드 구조를 제안했습니다.',
    points: [
      '교사의 준비물, 입학식, 수업중, 졸업식까지 이어지는 “선생님의 여정”을 감정적으로 설계했습니다.',
      '교과서를 ASMR, 영화제, 올림픽, 4컷 콘텐츠 등 다양한 포맷으로 재해석하는 아이디어가 제시됐습니다.',
      '티솔루션과 AI 디지털 교과서로 이어지는 미래 교육 확장성을 강조했습니다.',
      '학생·학부모를 위한 장학, 상담, 문해력 강연 등 브랜드의 사회적 역할도 함께 제안했습니다.'
    ],
    questions: [
      '우리 조직에서 “진심”을 가장 잘 보여주는 접점은 어디인가?',
      '교사·학생·학부모를 하나의 경험으로 잇는 캠페인은 무엇이 될 수 있을까?',
      '브랜드 메시지를 기능 설명이 아니라 여정의 언어로 바꾸면 무엇이 달라질까?'
    ],
    tags: ['진심이 짓는다', '교사 여정', '교과서 확장', '브랜드 서사'],
    links: [
      { label: '발표 자료', url: 'https://www.genspark.ai/api/files/s/IzLdm8oP' }
    ],
    open: true
  },
  {
    id: 's2',
    month: '04',
    day: '04.07',
    time: '11:00',
    type: 'AI 활용',
    title: 'AI 활용 챗봇 제작기',
    speaker: '플랫폼마케팅 Cell · 이태욱 CP',
    summary: '비전공자도 기획과 데이터만 있으면 AI로 실무형 챗봇을 만들 수 있다는 제작 경험을 구체적으로 보여준 발표입니다.',
    overview: '문의 유형 분류, 답변 데이터 구축, 도구 선택, 배포와 운영까지 실제 챗봇 제작 흐름을 압축해 보여줍니다. 기술보다 문제 정의와 정보 설계가 더 중요하다는 메시지가 분명합니다.',
    points: [
      'PDF 제공, 스콘 자료 제공, 내부 확인 필요 문의 등 실제 고객 문의를 먼저 구조화했습니다.',
      'ChatGPT, Claude, Genspark, Google AI Studio 등 도구를 목적에 따라 다르게 활용했습니다.',
      '기술 이슈와 보안 문제를 해결하며 GitHub와 Vercel 기반으로 실제 서비스 형태까지 구현했습니다.',
      '관리자 페이지와 지속 업데이트까지 고려한 운영형 사고가 포함돼 있습니다.'
    ],
    questions: [
      '우리 업무에서 챗봇으로 먼저 자동화할 수 있는 반복 문의는 무엇인가?',
      '도구 선택보다 더 중요한 데이터 설계 항목은 무엇인가?',
      'AI 프로젝트를 실험으로 끝내지 않고 운영 단계까지 가져가려면 무엇이 필요할까?'
    ],
    tags: ['챗봇', '자동화', '실무 구현', '운영'],
    links: [
      { label: '발표 자료', url: 'https://www.genspark.ai/api/files/s/ui6oKfRd' },
      { label: '챗봇 보기', url: 'https://visang-chatbot.vercel.app/' }
    ],
    open: false
  },
  {
    id: 's3',
    month: '04',
    day: '04.07',
    time: '11:30',
    type: '팀/웹앱',
    title: 'AI디어 (AIdea) · 비바코드 2026',
    speaker: '플랫폼마케팅 Cell · 임미정 CP',
    summary: 'AI를 통해 마케팅 업무를 실행에서 전략으로 전환하겠다는 목표를 팀 소개형 웹앱으로 정리한 발표입니다.',
    overview: '콘텐츠 기획·제작 자동화, 데이터 기반 성과 분석, 반복 업무 최소화라는 세 가지 목표를 중심으로 AI 활용 방향과 레퍼런스를 직관적으로 제시합니다.',
    points: [
      'AI 적용 목표를 “아이디어 → 실행 → 효율 → 전략” 흐름으로 간결하게 보여줍니다.',
      '피그마 버즈, 태블로, ChatGPT·Claude·Gemini, 나노바나나, Sora·Runway 등 실무형 레퍼런스를 연결했습니다.',
      '한 페이지 안에서 팀 소개, 목표, 사례, 일정이 자연스럽게 이어지는 구성이 강점입니다.',
      '발표 자체가 곧 웹앱이기 때문에 발표 내용과 표현 방식이 일치합니다.'
    ],
    questions: [
      '우리 팀이 AI를 활용해 가장 먼저 바꾸고 싶은 반복 업무는 무엇인가?',
      '레퍼런스를 수집하는 것에서 끝나지 않고 실행 프로세스로 전환하려면 어떤 장치가 필요할까?',
      '발표 자료를 문서가 아니라 경험형 웹앱으로 만들 때 전달력이 어떻게 달라지는가?'
    ],
    tags: ['AIdea', '싱글페이지', '전략 전환', '레퍼런스'],
    links: [
      { label: '웹앱 보기', url: 'https://roraa21.github.io/AIdea/' }
    ],
    open: false
  },
  {
    id: 's4',
    month: '05',
    day: '05.05',
    time: '11:00',
    type: '마케팅',
    title: '굿즈 마케팅 가이드',
    speaker: '비바샘마케팅 Cell · 조원진 CP',
    summary: '타깃 세분화, 아이템 선정, 제작사 체크리스트, 디자인 원칙까지 굿즈 마케팅 실무를 체계적으로 정리한 발표입니다.',
    overview: '굿즈를 브랜드 아이덴티티의 연장선으로 보고, VIP·관심 고객·잠재 고객에 따라 다른 아이템과 메시지를 설계하는 방식이 핵심입니다.',
    points: [
      'VIP, 관심 고객, 잠재 고객으로 나눠 목적·예산·아이템을 다르게 설계했습니다.',
      '제작사 선정 단계에서 품질, 단가, 납기, 패키징을 꼼꼼히 검토하는 체크리스트가 제시됐습니다.',
      '로고를 과하게 노출하지 않고 자연스럽게 스며드는 굿즈 디자인 원칙이 강조됩니다.',
      '브랜드 캐릭터와 톤앤매너를 일관되게 유지하는 실무형 시각 가이드가 담겨 있습니다.'
    ],
    questions: [
      '우리 브랜드 굿즈가 단순 증정품을 넘어 기억에 남는 이유는 무엇이어야 할까?',
      '타깃마다 다른 굿즈 전략을 쓸 때 어떤 기준으로 예산을 배분해야 할까?',
      '브랜드 노출과 실제 사용성을 동시에 만족시키는 디자인 원칙은 무엇인가?'
    ],
    tags: ['굿즈', '타깃 세분화', '디자인 원칙', '체크리스트'],
    links: [
      { label: '발표 자료', url: 'https://www.genspark.ai/api/files/s/mjY7ss4R' }
    ],
    open: false
  },
  {
    id: 's5',
    month: '06',
    day: '06.02',
    time: '11:00',
    type: '브랜드 전략',
    title: '2026 비바샘 BIS',
    speaker: '비바샘마케팅 Cell · 신명주 CP',
    summary: '비전, 미션, 브랜드 정의, 핵심가치를 선명하게 정리해 비바샘의 브랜드 정체성을 구조화한 발표입니다.',
    overview: '비바샘을 “교사를 가장 잘 이해하는 교수·학습 플랫폼”으로 정의하고, 현장성·혁신·동행이라는 핵심가치로 브랜드가 지향할 방향을 정리합니다.',
    points: [
      '브랜드 비전은 교수·학습 원스톱 생태계를 구축해 교사가 가장 먼저 찾는 파트너가 되는 것입니다.',
      '브랜드 미션은 교사가 원하는 교육을 실현하는 데 필요한 모든 것을 지원하는 것입니다.',
      '현장성, 혁신, 동행이라는 세 가지 핵심가치가 의사결정의 기준으로 제시됩니다.',
      '브랜드 에센스, 태그라인, 슬로건까지 연결되어 전체 메시지 체계가 명확합니다.'
    ],
    questions: [
      '우리 서비스에서 가장 강하게 전달되고 있는 브랜드 가치는 무엇인가?',
      '교사가 “가장 먼저 찾는 파트너”가 되기 위해 지금 보완해야 할 지점은 무엇인가?',
      '브랜드 정의를 실제 서비스 경험으로 바꾸려면 어떤 기능과 콘텐츠가 필요할까?'
    ],
    tags: ['BIS', '비전', '미션', '핵심가치'],
    links: [
      { label: '발표 자료', url: 'https://www.genspark.ai/api/files/s/uDLeTXw8' }
    ],
    open: false
  }
];

const grid = document.getElementById('sessionGrid');
const filterButtons = document.querySelectorAll('.filter-chip');
const navToggle = document.getElementById('navToggle');
const siteNav = document.querySelector('.site-nav');

function renderSessions(filter = 'all') {
  const filtered = filter === 'all' ? sessions : sessions.filter((session) => session.month === filter);

  grid.innerHTML = filtered.map((session) => `
    <article class="session-card ${session.open ? 'is-open' : ''}" data-id="${session.id}">
      <div class="session-shell">
        <aside class="session-aside">
          <span class="month-chip">${session.month}월</span>
          <p class="session-date">${session.day}</p>
          <p class="session-time">${session.time}</p>
          <span class="type-chip">${session.type}</span>
        </aside>

        <div class="session-main">
          <div class="session-header">
            <div>
              <h3 class="session-title">${session.title}</h3>
              <p class="session-speaker">${session.speaker}</p>
            </div>
            <button class="toggle-btn" type="button" data-id="${session.id}">${session.open ? '접기' : '자세히 보기'}</button>
          </div>

          <p class="session-summary">${session.summary}</p>
          <div class="tag-list">
            ${session.tags.map((tag) => `<span class="tag">${tag}</span>`).join('')}
          </div>

          <div class="session-detail">
            <div class="session-detail-inner">
              <div class="detail-content">
                <div class="detail-grid">
                  <section class="detail-panel">
                    <h4>발표 개요</h4>
                    <p>${session.overview}</p>
                  </section>
                  <section class="detail-panel">
                    <h4>자료 링크</h4>
                    <div class="link-row">
                      ${session.links.map((link) => `<a class="link-chip" href="${link.url}" target="_blank" rel="noreferrer">${link.label}</a>`).join('')}
                    </div>
                  </section>
                </div>

                <div class="detail-grid">
                  <section class="detail-panel">
                    <h4>주요 포인트</h4>
                    <ul class="bullet-list">
                      ${session.points.map((point) => `<li>${point}</li>`).join('')}
                    </ul>
                  </section>
                  <section class="detail-panel">
                    <h4>회고 질문</h4>
                    <ol class="question-list">
                      ${session.questions.map((question) => `<li>${question}</li>`).join('')}
                    </ol>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  `).join('');

  grid.querySelectorAll('.toggle-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const targetCard = button.closest('.session-card');
      const isOpen = targetCard.classList.toggle('is-open');
      button.textContent = isOpen ? '접기' : '자세히 보기';
    });
  });
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((chip) => chip.classList.remove('is-active'));
    button.classList.add('is-active');
    renderSessions(button.dataset.filter);
  });
});

if (navToggle) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('is-visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

renderSessions();
