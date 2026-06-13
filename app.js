const categories = [
  {
    id: "human",
    label: "個人の人的資産価値",
    short: "人的資産",
    description: "課題発見、構想、AI活用、実行、学習の基礎力を測ります。",
    questions: [
      "自分の専門性を、他者や組織の課題解決に結びつけられる",
      "曖昧な状況でも、解くべき課題を言語化できる",
      "AIを使って調査、整理、仮説づくりの質を高められる",
      "学んだことを短い実験や行動に変換できる",
      "自分の成長テーマを定期的に見直している"
    ]
  },
  {
    id: "inquiry",
    label: "探究度数",
    short: "探究度数",
    description: "正解のない問いに対して、課題を設定し、情報を集め、分析し、まとめて表現する力を測ります。",
    questions: [
      "実社会や自分の興味から、探究すべき問いを見つけられる",
      "本、ネット、データ、インタビューなどから必要な情報を集められる",
      "集めた情報を比較、分類、関連付けしながら整理・分析できる",
      "自分の考えや解決策を、相手に伝わる形でまとめ・表現できる"
    ]
  },
  {
    id: "autonomy",
    label: "自律分散度",
    short: "自律分散",
    description: "現場主導の意思決定、権限移譲、情報透明性を測ります。",
    questions: [
      "現場やチームが自分たちで判断できる範囲が明確である",
      "意思決定に必要な情報へアクセスしやすい",
      "役職に関係なく、妥当な提案が受け入れられる",
      "失敗を責めるより、学習に変える文化がある",
      "メンバーが自分で課題を設定し、周囲を巻き込める"
    ]
  },
  {
    id: "project",
    label: "プロジェクト型成熟度",
    short: "プロジェクト型",
    description: "課題ごとのチーム組成、越境協働、振り返り学習を測ります。",
    questions: [
      "部署を超えたプロジェクトが日常的に行われている",
      "プロジェクトごとの目的、成果指標、役割が明確である",
      "必要な人材を柔軟にアサインできる",
      "プロジェクト終了後に振り返りと学習共有がある",
      "外部パートナーや地域関係者を巻き込める"
    ]
  },
  {
    id: "leadership",
    label: "分散型リーダーシップ",
    short: "リーダーシップ",
    description: "リーダーシップが特定人物に集中せず、状況に応じて発揮されるかを測ります。",
    questions: [
      "テーマに応じて、最適な人がリーダーシップを取れる",
      "リーダー以外のメンバーも意思決定に関与している",
      "異なる意見を調整し、前進するための対話ができる",
      "メンバー同士が互いの強みを理解している",
      "成果責任と支援のバランスが取れている"
    ]
  },
  {
    id: "orgWellbeing",
    label: "組織well-being",
    short: "組織WB",
    description: "心理的安全性、信頼、働きがい、相互支援を測ります。",
    questions: [
      "率直な意見や違和感を安心して表明できる",
      "チーム内に信頼と相互支援がある",
      "仕事が自分や社会にとって意味あるものだと感じられる",
      "過度な負荷や孤立を早めに共有できる",
      "成果だけでなく、学習や挑戦も評価される"
    ]
  },
  {
    id: "regional",
    label: "地域well-beingインパクト",
    short: "地域WB",
    description: "地域課題との接続、包摂性、暮らしへの貢献可能性を測ります。",
    questions: [
      "地域の課題や資源を具体的に理解している",
      "住民、企業、行政、教育機関などの関係者を想定できる",
      "地域のつながりや参加機会を増やす視点がある",
      "弱い立場の人や取り残されやすい人への配慮がある",
      "地域の暮らしの質を高める成果を説明できる"
    ]
  },
  {
    id: "business",
    label: "事業実行可能性",
    short: "事業性",
    description: "顧客、収益、実行体制、持続可能性を測ります。",
    questions: [
      "解決したい課題と顧客・受益者が明確である",
      "提供価値を具体的なサービスやプロジェクトに落とし込める",
      "収益、資金、運営コストの見通しを立てられる",
      "実行に必要な体制や協力者を想定できる",
      "事業成果とwell-being成果を両方測定できる"
    ]
  }
];

const esgCategories = [
  {
    id: "esgGovernance",
    label: "ガバナンス",
    short: "Governance",
    description: "ESGリスクと機会を監督・管理する体制を測ります。",
    questions: [
      "経営層や責任者がESG・well-being・人的資本のリスクと機会を定期的に確認している",
      "ESGに関する意思決定、責任者、承認プロセスが明確である",
      "不祥事、ハラスメント、情報管理、利益相反などの統制が整っている"
    ]
  },
  {
    id: "esgStrategy",
    label: "戦略・事業性",
    short: "Strategy",
    description: "ESGが事業戦略、収益、資金調達、競争優位に接続しているかを測ります。",
    questions: [
      "ESG・well-beingへの取り組みが、事業成長や顧客価値と結びついている",
      "短期・中期・長期で、ESGリスクと機会が事業に与える影響を説明できる",
      "ESG施策の収益性、コスト、資金使途、投資回収の仮説がある"
    ]
  },
  {
    id: "esgRisk",
    label: "リスク管理",
    short: "Risk",
    description: "気候、社会、人材、地域、評判リスクを識別・管理できているかを測ります。",
    questions: [
      "環境・社会・人的資本・地域に関する重要リスクを洗い出している",
      "リスクの発生可能性、影響度、対応策を定期的に更新している",
      "ESGリスク管理が通常の事業リスク管理やプロジェクト管理に組み込まれている"
    ]
  },
  {
    id: "esgMetrics",
    label: "指標・開示",
    short: "Metrics",
    description: "投資家に説明できるKPI、目標、データ、開示準備を測ります。",
    questions: [
      "環境・社会・人的資本・well-beingに関するKPIを設定している",
      "KPIの実績データを継続的に収集し、前後比較できる",
      "投資家や外部関係者に説明できるレポートや根拠資料を準備している"
    ]
  },
  {
    id: "esgImpact",
    label: "社会・地域インパクト",
    short: "Impact",
    description: "地域well-being、人権、包摂性、ステークホルダー価値を測ります。",
    questions: [
      "地域、顧客、従業員、取引先など主要ステークホルダーへの影響を把握している",
      "弱い立場の人や取り残されやすい人への配慮が事業設計に入っている",
      "社会・地域への良い影響と負の影響の両方を説明できる"
    ]
  },
  {
    id: "esgClimate",
    label: "環境・気候対応",
    short: "Climate",
    description: "気候・環境リスク、排出量、資源利用への対応準備を測ります。",
    questions: [
      "自社・プロジェクトに関係する環境負荷や気候リスクを把握している",
      "エネルギー、廃棄物、移動、調達などの改善余地を特定している",
      "環境・気候に関する目標や改善アクションを設定している"
    ]
  }
];

const totalQuestionCount =
  categories.reduce((sum, category) => sum + category.questions.length, 0) +
  esgCategories.reduce((sum, category) => sum + category.questions.length, 0);

const state = {
  round: "before",
  answers: {
    before: {},
    after: {}
  },
  esgAnswers: {},
  scenario: null
};

const form = document.querySelector("#assessmentForm");
const roundSelect = document.querySelector("#roundSelect");
const answeredCount = document.querySelector("#answeredCount");
const scoreGrid = document.querySelector("#scoreGrid");
const orgTypeBadge = document.querySelector("#orgTypeBadge");
const matrixDot = document.querySelector("#matrixDot");
const summaryGrid = document.querySelector("#summaryGrid");
const summaryRound = document.querySelector("#summaryRound");
const recommendationGrid = document.querySelector("#recommendationGrid");
const radarCanvas = document.querySelector("#radarCanvas");
const growthScore = document.querySelector("#growthScore");
const growthBadge = document.querySelector("#growthBadge");
const growthNarrative = document.querySelector("#growthNarrative");
const deltaList = document.querySelector("#deltaList");
const industryInput = document.querySelector("#industryInput");
const locationInput = document.querySelector("#locationInput");
const marketInput = document.querySelector("#marketInput");
const maturityInput = document.querySelector("#maturityInput");
const storyInput = document.querySelector("#storyInput");
const generateScenarioButton = document.querySelector("#generateScenarioButton");
const scenarioSampleButton = document.querySelector("#scenarioSampleButton");
const scenarioScoreBadge = document.querySelector("#scenarioScoreBadge");
const scenarioScoreGrid = document.querySelector("#scenarioScoreGrid");
const scenarioOutput = document.querySelector("#scenarioOutput");
const generatedImageCanvas = document.querySelector("#generatedImageCanvas");
const imagePromptText = document.querySelector("#imagePromptText");
const generateImageButton = document.querySelector("#generateImageButton");
const downloadImageButton = document.querySelector("#downloadImageButton");
const esgForm = document.querySelector("#esgForm");
const esgGradeBadge = document.querySelector("#esgGradeBadge");
const esgTotalScore = document.querySelector("#esgTotalScore");
const esgScoreGrid = document.querySelector("#esgScoreGrid");
const esgSummaryGrid = document.querySelector("#esgSummaryGrid");

function questionKey(categoryId, questionIndex) {
  return `${categoryId}_${questionIndex}`;
}

function currentAnswers() {
  return state.answers[state.round];
}

function clamp(value, min = 0, max = 100) {
  return Math.max(min, Math.min(max, Math.round(value)));
}

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderForm() {
  form.innerHTML = categories.map((category) => {
    const questions = category.questions.map((question, index) => {
      const key = questionKey(category.id, index);
      const value = currentAnswers()[key] || "";
      const scale = [1, 2, 3, 4, 5].map((score) => `
        <label>
          <input type="radio" name="${key}" value="${score}" ${Number(value) === score ? "checked" : ""}>
          <span>${score}</span>
        </label>
      `).join("");

      return `
        <div class="question-row">
          <label for="${key}_${index}">${question}</label>
          <div class="scale" role="radiogroup" aria-label="${question}">
            ${scale}
          </div>
        </div>
      `;
    }).join("");

    return `
      <section class="question-group">
        <div class="group-header">
          <div>
            <h2>${category.label}</h2>
            <p>${category.description}</p>
          </div>
          <span class="group-score" id="group_${category.id}">--</span>
        </div>
        <div class="question-list">${questions}</div>
      </section>
    `;
  }).join("");

  form.querySelectorAll("input[type='radio']").forEach((input) => {
    input.addEventListener("change", (event) => {
      currentAnswers()[event.target.name] = Number(event.target.value);
      updateAll();
    });
  });
}

function categoryScore(category, round = state.round) {
  const answers = state.answers[round];
  const values = category.questions
    .map((_, index) => answers[questionKey(category.id, index)])
    .filter(Boolean);

  if (!values.length) return 0;
  return Math.round((values.reduce((sum, value) => sum + value, 0) / values.length) * 20);
}

function esgQuestionKey(categoryId, questionIndex) {
  return `${categoryId}_${questionIndex}`;
}

function renderEsgForm() {
  esgForm.innerHTML = esgCategories.map((category) => {
    const questions = category.questions.map((question, index) => {
      const key = esgQuestionKey(category.id, index);
      const value = state.esgAnswers[key] || "";
      const scale = [1, 2, 3, 4, 5].map((score) => `
        <label>
          <input type="radio" name="${key}" value="${score}" ${Number(value) === score ? "checked" : ""}>
          <span>${score}</span>
        </label>
      `).join("");

      return `
        <div class="question-row">
          <label>${question}</label>
          <div class="scale" role="radiogroup" aria-label="${question}">
            ${scale}
          </div>
        </div>
      `;
    }).join("");

    return `
      <section class="question-group">
        <div class="group-header">
          <div>
            <h2>${category.label}</h2>
            <p>${category.description}</p>
          </div>
          <span class="group-score" id="esg_group_${category.id}">--</span>
        </div>
        <div class="question-list">${questions}</div>
      </section>
    `;
  }).join("");

  esgForm.querySelectorAll("input[type='radio']").forEach((input) => {
    input.addEventListener("change", (event) => {
      state.esgAnswers[event.target.name] = Number(event.target.value);
      updateAll();
    });
  });
}

function esgCategoryScore(category) {
  const values = category.questions
    .map((_, index) => state.esgAnswers[esgQuestionKey(category.id, index)])
    .filter(Boolean);

  if (!values.length) return 0;
  return Math.round((values.reduce((sum, value) => sum + value, 0) / values.length) * 20);
}

function allEsgScores() {
  return Object.fromEntries(esgCategories.map((category) => [category.id, esgCategoryScore(category)]));
}

function esgCompositeScore() {
  const scores = allScores();
  const esg = allEsgScores();
  const scenario = state.scenario?.scores;
  const disclosureReadiness = (
    esg.esgGovernance * 0.18 +
    esg.esgStrategy * 0.18 +
    esg.esgRisk * 0.16 +
    esg.esgMetrics * 0.18 +
    esg.esgImpact * 0.16 +
    esg.esgClimate * 0.14
  );
  const operatingReadiness = (
    scores.orgWellbeing * 0.18 +
    scores.regional * 0.18 +
    scores.business * 0.18 +
    scores.inquiry * 0.12 +
    scores.project * 0.12 +
    scores.leadership * 0.12 +
    scores.autonomy * 0.1
  );
  const scenarioReadiness = scenario
    ? scenario.impactIndex * 0.45 + scenario.businessPotential * 0.25 + scenario.wellbeingImpact * 0.2 + (100 - scenario.executionRisk) * 0.1
    : operatingReadiness;

  return clamp(disclosureReadiness * 0.55 + operatingReadiness * 0.25 + scenarioReadiness * 0.2);
}

function esgGrade(score) {
  if (score >= 85) return { label: "A 適格候補", body: "投資家説明に必要な体制、開示、インパクト、事業性がかなり整っています。" };
  if (score >= 70) return { label: "B 条件付き適格", body: "投資家に説明できる土台があります。KPI、リスク管理、開示根拠を補強すると説得力が増します。" };
  if (score >= 55) return { label: "C 要改善", body: "事業や社会価値の可能性はありますが、投資家向けの開示・管理・定量化が不足しています。" };
  return { label: "D 準備不足", body: "投資適格性の前に、ガバナンス、KPI、リスク管理、事業仮説の整備が必要です。" };
}

function allScores(round = state.round) {
  return Object.fromEntries(categories.map((category) => [category.id, categoryScore(category, round)]));
}

function weightedScore(scores) {
  return Math.round(
    scores.human * 0.16 +
    scores.inquiry * 0.14 +
    scores.autonomy * 0.14 +
    scores.project * 0.14 +
    scores.leadership * 0.1 +
    scores.orgWellbeing * 0.14 +
    scores.regional * 0.09 +
    scores.business * 0.09
  );
}

function organizationType(scores) {
  const highAutonomy = scores.autonomy >= 65;
  const highProject = scores.project >= 65;

  if (highAutonomy && highProject) {
    return {
      label: "自律分散プロジェクト組織",
      description: "現場主導で動きながら、課題ごとのチーム形成と成果創出ができる状態です。次は地域や外部パートナーとの接続を強める段階です。"
    };
  }
  if (!highAutonomy && highProject) {
    return {
      label: "管理型プロジェクト組織",
      description: "プロジェクト活動は進んでいますが、意思決定や権限が中央に寄っています。権限移譲と情報透明性が伸びしろです。"
    };
  }
  if (highAutonomy && !highProject) {
    return {
      label: "個人自走型組織",
      description: "個人は動けていますが、組織的なプロジェクト成果に変換しきれていません。目的、役割、振り返りの型が必要です。"
    };
  }
  return {
    label: "階層固定型組織",
    description: "部署や役職に依存しやすく、変化への対応が遅くなりがちな状態です。小さな越境プロジェクトから始めるのが現実的です。"
  };
}

function weakestCategories(scores, limit = 2) {
  return [...categories]
    .sort((a, b) => scores[a.id] - scores[b.id])
    .slice(0, limit);
}

function strongestCategories(scores, limit = 2) {
  return [...categories]
    .sort((a, b) => scores[b.id] - scores[a.id])
    .slice(0, limit);
}

function answeredTotal() {
  return Object.keys(currentAnswers()).length + Object.keys(state.esgAnswers).length;
}

function updateCounters() {
  answeredCount.textContent = `${answeredTotal()} / ${totalQuestionCount}`;
  categories.forEach((category) => {
    const node = document.querySelector(`#group_${category.id}`);
    if (node) node.textContent = `${categoryScore(category) || "--"}`;
  });
}

function renderScores() {
  const scores = allScores();
  const total = weightedScore(scores);
  const items = [
    ["総合人的資産", total],
    ...categories.map((category) => [category.short, scores[category.id]])
  ];

  scoreGrid.innerHTML = items.map(([label, value]) => `
    <article class="score-card">
      <span>${label}</span>
      <strong>${value}</strong>
      <div class="meter"><i style="width:${value}%"></i></div>
    </article>
  `).join("");
}

function renderMatrix() {
  const scores = allScores();
  const type = organizationType(scores);
  orgTypeBadge.textContent = type.label;
  matrixDot.style.left = `${Math.max(5, Math.min(95, scores.autonomy))}%`;
  matrixDot.style.top = `${100 - Math.max(5, Math.min(95, scores.project))}%`;
}

function drawRadar() {
  const canvas = radarCanvas;
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  const centerX = width / 2;
  const centerY = height / 2 + 8;
  const radius = Math.min(width, height) * 0.34;
  const scores = allScores();
  const points = categories.map((category, index) => {
    const angle = -Math.PI / 2 + (Math.PI * 2 * index) / categories.length;
    const valueRadius = radius * (scores[category.id] / 100);
    return {
      x: centerX + Math.cos(angle) * valueRadius,
      y: centerY + Math.sin(angle) * valueRadius,
      labelX: centerX + Math.cos(angle) * (radius + 42),
      labelY: centerY + Math.sin(angle) * (radius + 42),
      angle,
      label: category.short
    };
  });

  ctx.clearRect(0, 0, width, height);
  ctx.font = "13px sans-serif";
  ctx.lineWidth = 1;

  [0.25, 0.5, 0.75, 1].forEach((level) => {
    ctx.beginPath();
    categories.forEach((_, index) => {
      const angle = -Math.PI / 2 + (Math.PI * 2 * index) / categories.length;
      const x = centerX + Math.cos(angle) * radius * level;
      const y = centerY + Math.sin(angle) * radius * level;
      if (index === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.closePath();
    ctx.strokeStyle = "#d9e1dc";
    ctx.stroke();
  });

  categories.forEach((category, index) => {
    const angle = -Math.PI / 2 + (Math.PI * 2 * index) / categories.length;
    const x = centerX + Math.cos(angle) * radius;
    const y = centerY + Math.sin(angle) * radius;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(x, y);
    ctx.strokeStyle = "#e7eee9";
    ctx.stroke();
  });

  ctx.beginPath();
  points.forEach((point, index) => {
    if (index === 0) ctx.moveTo(point.x, point.y);
    else ctx.lineTo(point.x, point.y);
  });
  ctx.closePath();
  ctx.fillStyle = "rgba(30, 125, 91, 0.22)";
  ctx.fill();
  ctx.strokeStyle = "#1e7d5b";
  ctx.lineWidth = 2;
  ctx.stroke();

  points.forEach((point) => {
    ctx.beginPath();
    ctx.arc(point.x, point.y, 4, 0, Math.PI * 2);
    ctx.fillStyle = "#1e7d5b";
    ctx.fill();
    ctx.fillStyle = "#52605b";
    ctx.textAlign = point.labelX < centerX - 20 ? "right" : point.labelX > centerX + 20 ? "left" : "center";
    ctx.textBaseline = "middle";
    ctx.fillText(point.label, point.labelX, point.labelY);
  });
}

function renderSummary() {
  const scores = allScores();
  const type = organizationType(scores);
  const strong = strongestCategories(scores);
  const weak = weakestCategories(scores);
  const scenario = state.scenario;
  const esgScore = esgCompositeScore();
  const esgStatus = esgGrade(esgScore);
  summaryRound.textContent = state.round === "before" ? "Before" : "After";
  summaryGrid.innerHTML = [
    {
      title: "組織タイプ判定",
      body: type.description
    },
    {
      title: "強み",
      body: `${strong.map((item) => item.label).join("、")}が相対的に高い状態です。ここを起点に実践テーマを組むと初速が出ます。`
    },
    {
      title: "ボトルネック",
      body: `${weak.map((item) => item.label).join("、")}が次の伸びしろです。教育コンテンツと短期プロジェクトで補強します。`
    },
    {
      title: "AIシナリオ評価",
      body: scenario ? `AIシナリオ総合指数は${scenario.scores.impactIndex}です。市場適合${scenario.scores.marketFit}、組織実装力${scenario.scores.orgReadiness}、well-beingインパクト${scenario.scores.wellbeingImpact}として評価されています。` : "02のAIシナリオを実行すると、自己診断だけでは見えない実践判断の傾向がここに反映されます。"
    },
    {
      title: "ESG投資適格性",
      body: `ESG Readinessは${esgScore || "--"}点、判定は「${esgStatus.label}」です。well-beingで生まれる価値を投資家向けの非財務価値として説明する準備度です。`
    }
  ].map((item) => `
    <article class="summary-item">
      <strong>${item.title}</strong>
      <p>${item.body}</p>
    </article>
  `).join("");
}

function renderEsg() {
  const esg = allEsgScores();
  const total = esgCompositeScore();
  const grade = esgGrade(total);
  const scoreItems = [
    ["ガバナンス", esg.esgGovernance],
    ["戦略・事業性", esg.esgStrategy],
    ["リスク管理", esg.esgRisk],
    ["指標・開示", esg.esgMetrics],
    ["社会・地域", esg.esgImpact],
    ["環境・気候", esg.esgClimate]
  ];
  const weak = scoreItems.filter(([, value]) => value > 0).sort((a, b) => a[1] - b[1]).slice(0, 2);

  esgGradeBadge.textContent = grade.label;
  esgTotalScore.textContent = total || "--";

  esgCategories.forEach((category) => {
    const node = document.querySelector(`#esg_group_${category.id}`);
    if (node) node.textContent = `${esg[category.id] || "--"}`;
  });

  esgScoreGrid.innerHTML = scoreItems.map(([label, value]) => `
    <article class="esg-score-card">
      <span>${label}</span>
      <strong>${value || "--"}</strong>
      <div class="meter"><i style="width:${value}%"></i></div>
    </article>
  `).join("");

  esgSummaryGrid.innerHTML = [
    {
      title: "投資適格性の見立て",
      body: grade.body
    },
    {
      title: "評価の考え方",
      body: "IFRS S1/S2やTCFDのガバナンス、戦略、リスク管理、指標・目標に、GRI的な社会・地域インパクトを加えて評価しています。"
    },
    {
      title: "次に補強する領域",
      body: weak.length ? `${weak.map(([label]) => label).join("、")}を優先的に補強します。投資家には、根拠データ、目標、管理体制、事業への接続をセットで説明します。` : "まだESG診断が未入力です。6領域を入力すると補強ポイントが表示されます。"
    }
  ].map((item) => `
    <article class="summary-item">
      <strong>${item.title}</strong>
      <p>${item.body}</p>
    </article>
  `).join("");
}

function recommendationFor(categoryId) {
  const map = {
    human: ["AIを使った課題発見ワーク", "自分の専門性を事業仮説に変換する演習", "週1回の学習ログと小実験"],
    inquiry: ["正解のない問いを立てる演習", "一次情報と二次情報を組み合わせたリサーチ", "分析結果を提案書と発表にまとめる"],
    autonomy: ["権限移譲できる判断領域の棚卸し", "意思決定に必要な情報の公開範囲を見直す", "現場発案の小さな実験枠を作る"],
    project: ["90日プロジェクトの目的と成果指標を定義", "部署横断メンバーで最小チームを組成", "終了時の振り返りテンプレートを導入"],
    leadership: ["テーマ別リーダー制度を試す", "会議で意思決定者と支援者を明確化", "強みの相互理解ワークを実施"],
    orgWellbeing: ["心理的安全性の対話会を設計", "過負荷と孤立の早期共有ルールを作る", "挑戦と学習を称える場を増やす"],
    regional: ["地域ステークホルダーマップを作成", "住民や行政へのヒアリングを実施", "地域well-being成果を1つ定義"],
    business: ["顧客と受益者を分けて定義", "収益モデルと運営コストを1枚に整理", "事業成果とwell-being成果のKPIを分ける"]
  };
  return map[categoryId];
}

function maturityLabel(value) {
  const labels = {
    early: "立ち上げ期",
    stable: "安定運用期",
    change: "変革期",
    scale: "拡大期"
  };
  return labels[value] || "安定運用期";
}

function maturityModifier(value) {
  const modifiers = {
    early: { business: -4, org: -2, risk: 10 },
    stable: { business: 4, org: 4, risk: 0 },
    change: { business: 2, org: -3, risk: 6 },
    scale: { business: 8, org: 2, risk: 8 }
  };
  return modifiers[value] || modifiers.stable;
}

function contextSignals(context) {
  const text = `${context.industry} ${context.location} ${context.market} ${context.story}`;
  const includes = (words) => words.some((word) => text.includes(word));
  return {
    ai: includes(["AI", "DX", "デジタル", "自動化", "データ"]),
    regional: includes(["地域", "自治体", "商店街", "住民", "地方", "まち"]),
    care: includes(["医療", "介護", "福祉", "高齢", "健康"]),
    education: includes(["教育", "学校", "大学", "学習", "人材"]),
    manufacturing: includes(["製造", "工場", "物流", "品質", "現場"]),
    friction: includes(["壁", "対立", "疲弊", "孤立", "属人", "遅い", "集中"]),
    collaboration: includes(["越境", "外部", "連携", "共創", "巻き込", "協働"]),
    lengthBonus: Math.min(10, Math.floor(context.story.length / 35))
  };
}

function buildScenario() {
  const context = {
    industry: industryInput.value.trim() || "未設定の業界",
    location: locationInput.value.trim() || "未設定の場所",
    market: marketInput.value.trim() || "未設定の市場",
    maturity: maturityInput.value,
    story: storyInput.value.trim() || "組織内のストーリーはまだ入力されていません。"
  };
  const scores = allScores();
  const total = weightedScore(scores);
  const type = organizationType(scores);
  const weak = weakestCategories(scores, 2);
  const strong = strongestCategories(scores, 2);
  const signals = contextSignals(context);
  const maturity = maturityModifier(context.maturity);

  const marketFit = clamp(
    scores.business * 0.35 +
    scores.regional * 0.25 +
    scores.inquiry * 0.12 +
    total * 0.08 +
    (signals.care || signals.education || signals.manufacturing ? 8 : 2) +
    signals.lengthBonus +
    maturity.business
  );
  const orgReadiness = clamp(
    scores.autonomy * 0.27 +
    scores.project * 0.27 +
    scores.leadership * 0.2 +
    scores.orgWellbeing * 0.18 +
    (signals.collaboration ? 7 : 0) -
    (signals.friction ? 5 : 0) +
    maturity.org
  );
  const wellbeingImpact = clamp(
    scores.orgWellbeing * 0.24 +
    scores.regional * 0.34 +
    scores.human * 0.1 +
    scores.inquiry * 0.06 +
    (signals.regional ? 10 : 0) +
    (signals.care || signals.education ? 7 : 0) +
    signals.lengthBonus
  );
  const businessPotential = clamp(
    scores.business * 0.38 +
    marketFit * 0.3 +
    orgReadiness * 0.18 +
    scores.inquiry * 0.08 +
    (signals.ai ? 6 : 0) +
    maturity.business
  );
  const executionRisk = clamp(
    100 -
    (orgReadiness * 0.34 + scores.project * 0.22 + scores.leadership * 0.18 + scores.orgWellbeing * 0.14) +
    (signals.friction ? 14 : 4) +
    maturity.risk
  );
  const impactIndex = clamp(
    marketFit * 0.2 +
    orgReadiness * 0.24 +
    wellbeingImpact * 0.26 +
    businessPotential * 0.2 +
    (100 - executionRisk) * 0.1
  );

  state.scenario = {
    context,
    scores: {
      marketFit,
      orgReadiness,
      wellbeingImpact,
      businessPotential,
      executionRisk,
      impactIndex
    },
    title: `${context.location}における${context.industry}のwell-being事業化シナリオ`,
    story: `${context.market}が抱える未充足の課題を起点に、${type.label}への移行を進めながら、現場発の小さなプロジェクトを立ち上げます。${strong.map((item) => item.short).join("と")}を強みに、${weak.map((item) => item.short).join("と")}を補強することで、組織内の実行力と地域well-beingの両方を高めます。`,
    hypothesis: [
      `${context.market}に対して、困りごとの可視化と支援導線を一体化したサービスを検証する`,
      `組織内では、管理職承認に依存しすぎない90日プロジェクトとして運用する`,
      `成果指標は、事業性KPIとwell-being KPIを分けて測定する`
    ],
    stakeholders: [
      "現場メンバー",
      "管理職・意思決定者",
      context.market,
      signals.regional ? "自治体・地域団体" : "外部パートナー",
      "顧客・受益者"
    ],
    risks: [
      executionRisk >= 60 ? "意思決定が遅く、実証実験が始まる前に momentum を失う" : "初期実証の範囲が広がりすぎる",
      scores.orgWellbeing < 60 ? "挑戦が一部メンバーの負荷として偏り、well-beingを下げる" : "成果が見えにくい活動が評価されにくい",
      scores.inquiry < 60 ? "問いの設定や情報収集が浅くなり、実証テーマの説得力が弱くなる" : "事業性が先行し、地域側の納得形成が遅れる"
    ],
    experiments: [
      "2週間で関係者5名にヒアリングし、課題の頻度と痛みを数値化する",
      "30日で最小プロトタイプを作り、利用意向と支払い意思を確認する",
      "90日後に人的資産価値、組織well-being、地域well-being、事業性を再測定する"
    ]
  };

  renderScenario();
  generateScenarioImage();
  renderRecommendations();
}

function buildImagePrompt() {
  if (!state.scenario) {
    return "業界、地域、市場、組織内ストーリーから、well-being向上と事業化を表すコンセプト画像を生成する。";
  }

  const scenario = state.scenario;
  const context = scenario.context;
  const scoreText = Object.entries(scenario.scores)
    .map(([key, value]) => `${key}: ${value}`)
    .join(", ");

  return [
    `日本語の事業構想ビジュアル。テーマ: ${scenario.title}`,
    `業界: ${context.industry}`,
    `場所: ${context.location}`,
    `市場・対象者: ${context.market}`,
    `組織成熟度: ${maturityLabel(context.maturity)}`,
    `ストーリー: ${context.story}`,
    `表現: 組織、地域、市場、AI、well-being、事業性の関係が一目で分かる未来志向のコンセプトアート。`,
    `画面要素: 中央にプロジェクトの核、周囲にステークホルダー、右側に事業成長、左側に組織変革、下部に地域well-beingの波及。`,
    `スコア参考: ${scoreText}`,
    "スタイル: 清潔なSaaSダッシュボード向け、明るい自然光、信頼感、過度な装飾なし、文字は最小限。"
  ].join("\n");
}

function drawRoundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + width, y, x + width, y + height, radius);
  ctx.arcTo(x + width, y + height, x, y + height, radius);
  ctx.arcTo(x, y + height, x, y, radius);
  ctx.arcTo(x, y, x + width, y, radius);
  ctx.closePath();
}

function fitText(ctx, text, x, y, maxWidth, lineHeight, maxLines = 3) {
  const words = String(text).split("");
  const lines = [];
  let line = "";

  words.forEach((char) => {
    const test = line + char;
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line);
      line = char;
    } else {
      line = test;
    }
  });
  if (line) lines.push(line);

  lines.slice(0, maxLines).forEach((item, index) => {
    const suffix = index === maxLines - 1 && lines.length > maxLines ? "..." : "";
    ctx.fillText(item + suffix, x, y + index * lineHeight);
  });
}

function drawNode(ctx, node) {
  ctx.save();
  ctx.shadowColor = "rgba(22, 32, 29, 0.12)";
  ctx.shadowBlur = 22;
  ctx.shadowOffsetY = 10;
  drawRoundedRect(ctx, node.x, node.y, node.w, node.h, 18);
  ctx.fillStyle = node.fill;
  ctx.fill();
  ctx.shadowColor = "transparent";
  ctx.strokeStyle = "rgba(22, 32, 29, 0.12)";
  ctx.stroke();
  ctx.fillStyle = node.color || "#16201d";
  ctx.font = "700 25px sans-serif";
  ctx.fillText(node.title, node.x + 22, node.y + 40);
  ctx.font = "500 18px sans-serif";
  ctx.fillStyle = node.bodyColor || "#52605b";
  fitText(ctx, node.body, node.x + 22, node.y + 72, node.w - 44, 25, 3);
  ctx.restore();
}

function generateScenarioImage() {
  const canvas = generatedImageCanvas;
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  const scenario = state.scenario;
  const scores = scenario ? scenario.scores : {
    marketFit: 45,
    orgReadiness: 45,
    wellbeingImpact: 45,
    businessPotential: 45,
    executionRisk: 45,
    impactIndex: 45
  };
  const context = scenario ? scenario.context : {
    industry: "業界",
    location: "地域・会社の場所",
    market: "市場・対象者",
    story: "シナリオ生成後に画像が更新されます。"
  };

  imagePromptText.value = buildImagePrompt();

  const grd = ctx.createLinearGradient(0, 0, width, height);
  grd.addColorStop(0, "#f7fbf8");
  grd.addColorStop(0.45, "#e8f4ef");
  grd.addColorStop(1, "#eef4fb");
  ctx.fillStyle = grd;
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = "rgba(30, 125, 91, 0.08)";
  ctx.beginPath();
  ctx.arc(180, 580, 270, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "rgba(45, 104, 177, 0.08)";
  ctx.beginPath();
  ctx.arc(1010, 150, 260, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = "rgba(30, 125, 91, 0.28)";
  ctx.lineWidth = 3;
  [
    [385, 210, 550, 345],
    [840, 220, 660, 345],
    [360, 505, 550, 395],
    [850, 505, 660, 395]
  ].forEach(([x1, y1, x2, y2]) => {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.bezierCurveTo((x1 + x2) / 2, y1, (x1 + x2) / 2, y2, x2, y2);
    ctx.stroke();
  });

  const nodes = [
    {
      x: 70,
      y: 120,
      w: 330,
      h: 150,
      fill: "#ffffff",
      title: "組織変革",
      body: `実装力 ${scores.orgReadiness} / ${context.industry}`
    },
    {
      x: 800,
      y: 120,
      w: 330,
      h: 150,
      fill: "#ffffff",
      title: "市場機会",
      body: `市場適合 ${scores.marketFit} / ${context.market}`
    },
    {
      x: 435,
      y: 282,
      w: 330,
      h: 170,
      fill: "#1e7d5b",
      color: "#ffffff",
      bodyColor: "#eaf6f0",
      title: `総合指数 ${scores.impactIndex}`,
      body: scenario ? scenario.title : "AIシナリオから事業構想を可視化"
    },
    {
      x: 70,
      y: 455,
      w: 330,
      h: 150,
      fill: "#ffffff",
      title: "地域well-being",
      body: `インパクト ${scores.wellbeingImpact} / ${context.location}`
    },
    {
      x: 800,
      y: 455,
      w: 330,
      h: 150,
      fill: "#ffffff",
      title: "事業成長",
      body: `事業可能性 ${scores.businessPotential} / リスク ${scores.executionRisk}`
    }
  ];
  nodes.forEach((node) => drawNode(ctx, node));

  ctx.fillStyle = "#16201d";
  ctx.font = "800 38px sans-serif";
  fitText(ctx, scenario ? scenario.title : "AIシナリオ画像生成", 70, 62, 920, 43, 2);
  ctx.font = "600 20px sans-serif";
  ctx.fillStyle = "#52605b";
  fitText(ctx, context.story, 70, 650, 1040, 28, 2);

  const bars = [
    ["Market", scores.marketFit, "#1f8a99"],
    ["Org", scores.orgReadiness, "#1e7d5b"],
    ["WB", scores.wellbeingImpact, "#2d68b1"],
    ["Biz", scores.businessPotential, "#bd7b22"]
  ];
  bars.forEach(([label, value, color], index) => {
    const x = 940;
    const y = 34 + index * 24;
    ctx.fillStyle = "#d9e1dc";
    drawRoundedRect(ctx, x, y, 140, 10, 5);
    ctx.fill();
    ctx.fillStyle = color;
    drawRoundedRect(ctx, x, y, 140 * (value / 100), 10, 5);
    ctx.fill();
    ctx.fillStyle = "#52605b";
    ctx.font = "700 13px sans-serif";
    ctx.fillText(label, 1090, y + 10);
  });
}

function renderScenario() {
  if (!state.scenario) {
    scenarioScoreBadge.textContent = "未生成";
    scenarioScoreGrid.innerHTML = [
      ["市場適合", "--"],
      ["組織実装力", "--"],
      ["WBインパクト", "--"],
      ["事業可能性", "--"],
      ["実行リスク", "--"],
      ["総合指数", "--"]
    ].map(([label, value]) => `
      <article class="scenario-score">
        <span>${label}</span>
        <strong>${value}</strong>
        <div class="meter"><i style="width:0%"></i></div>
      </article>
    `).join("");
    scenarioOutput.innerHTML = "";
    generateScenarioImage();
    return;
  }

  const scenario = state.scenario;
  const scores = scenario.scores;
  scenarioScoreBadge.textContent = `総合 ${scores.impactIndex}`;
  const scoreItems = [
    ["市場適合", scores.marketFit],
    ["組織実装力", scores.orgReadiness],
    ["WBインパクト", scores.wellbeingImpact],
    ["事業可能性", scores.businessPotential],
    ["実行リスク", scores.executionRisk],
    ["総合指数", scores.impactIndex]
  ];

  scenarioScoreGrid.innerHTML = scoreItems.map(([label, value]) => `
    <article class="scenario-score">
      <span>${label}</span>
      <strong>${value}</strong>
      <div class="meter"><i style="width:${value}%"></i></div>
    </article>
  `).join("");

  scenarioOutput.innerHTML = [
    {
      title: escapeHTML(scenario.title),
      body: escapeHTML(scenario.story),
      list: [],
      featured: true
    },
    {
      title: "検証仮説",
      body: `${escapeHTML(scenario.context.industry)} / ${escapeHTML(scenario.context.location)} / ${escapeHTML(maturityLabel(scenario.context.maturity))}`,
      list: scenario.hypothesis.map(escapeHTML)
    },
    {
      title: "主要ステークホルダー",
      body: "プロジェクト開始時に巻き込む相手です。",
      list: scenario.stakeholders.map(escapeHTML)
    },
    {
      title: "実行リスク",
      body: "高い順に潰すべきリスクです。",
      list: scenario.risks.map(escapeHTML)
    },
    {
      title: "次の実証設計",
      body: "AIリサーチ後に進める最小実験です。",
      list: scenario.experiments.map(escapeHTML)
    }
  ].map((card) => `
    <article class="scenario-card ${card.featured ? "featured" : ""}">
      <strong>${card.title}</strong>
      <p>${card.body}</p>
      ${card.list.length ? `<ul>${card.list.map((item) => `<li>${item}</li>`).join("")}</ul>` : ""}
    </article>
  `).join("");
}

function renderRecommendations() {
  const scores = allScores();
  const weak = weakestCategories(scores, 3);
  const type = organizationType(scores);
  const total = weightedScore(scores);
  const scenario = state.scenario;
  const esgScore = esgCompositeScore();
  const esgStatus = esgGrade(esgScore);
  const cards = [
    {
      title: "優先テーマ",
      body: `${weak.map((item) => item.label).join("、")}を90日間の改善テーマにします。総合スコアは${total}です。`,
      list: weak.map((item) => `${item.short}: ${scores[item.id]}点`)
    },
    {
      title: "実践プロジェクト案",
      body: scenario ? scenario.title : "地域または組織の実課題を題材に、学習と事業仮説を同時に検証します。",
      list: scenario ? scenario.experiments : [
          "地域の困りごとを1つ選び、関係者5名にヒアリングする",
          "AIで先行事例、顧客、収益モデルを整理する",
          "30日以内に試せる最小サービスを設計する"
        ]
    },
    {
      title: "文脈スコア",
      body: scenario ? `AIシナリオ総合指数は${scenario.scores.impactIndex}です。事業性とwell-beingの両面から実証優先度を判断します。` : "AIシナリオを生成すると、文脈を加味した事業性とwell-beingインパクトがここに反映されます。",
      list: scenario ? [
        `市場適合: ${scenario.scores.marketFit}`,
        `組織実装力: ${scenario.scores.orgReadiness}`,
        `実行リスク: ${scenario.scores.executionRisk}`
      ] : [
        "業界・地域・市場を入力",
        "組織内ストーリーを入力",
        "AIシナリオで数値化"
      ]
    },
    {
      title: "ESG投資適格性",
      body: `現在のESG Readinessは${esgScore || "--"}点、判定は「${esgStatus.label}」です。投資判断ではなく、投資家に説明できる準備度として扱います。`,
      list: [
        "ガバナンス・戦略・リスク管理・指標/開示を整える",
        "地域well-beingと人的資本のKPIを投資家向けに翻訳する",
        "環境・気候リスクと社会インパクトを両方説明する"
      ]
    },
    {
      title: "組織OSアクション",
      body: type.label + "として、次の習慣を入れると変化が見えやすくなります。",
      list: recommendationFor(weak[0].id)
    },
    {
      title: "教育コンテンツ",
      body: "動画を増やすより、診断結果と実践課題に直結する短い教材から始めます。",
      list: [
        "AIリサーチ基礎",
        "well-being指標設計",
        "プロジェクト型組織の作り方"
      ]
    },
    {
      title: "AIシミュレーション",
      body: "上司、地域住民、顧客、自治体担当者の反応をAIが演じ、提案の実践力を測ります。",
      list: [
        "提案への反論対応",
        "地域関係者との合意形成",
        "事業性と社会性の両立"
      ]
    },
    {
      title: "次回測定",
      body: "90日後に同じ診断を行い、人的資産価値とwell-beingインパクトの伸びを比較します。",
      list: [
        "Before / Afterスコア",
        "組織タイプの変化",
        "事業成熟度の変化"
      ]
    }
  ];

  recommendationGrid.innerHTML = cards.map((card) => `
    <article class="recommendation-card">
      <strong>${card.title}</strong>
      <p>${card.body}</p>
      <ul>${card.list.map((item) => `<li>${item}</li>`).join("")}</ul>
    </article>
  `).join("");
}

function renderGrowth() {
  const before = allScores("before");
  const after = allScores("after");
  const hasBefore = Object.keys(state.answers.before).length > 0;
  const hasAfter = Object.keys(state.answers.after).length > 0;

  if (!hasBefore || !hasAfter) {
    growthScore.textContent = "--";
    growthBadge.textContent = "未比較";
    growthNarrative.textContent = "BeforeとAfterの両方を入力すると、変化が表示されます。";
    deltaList.innerHTML = categories.map((category) => `
      <div class="delta-row">
        <strong>${category.label}</strong>
        <span>--</span>
      </div>
    `).join("");
    return;
  }

  const beforeTotal = weightedScore(before);
  const afterTotal = weightedScore(after);
  const delta = afterTotal - beforeTotal;
  growthScore.textContent = delta > 0 ? `+${delta}` : `${delta}`;
  growthBadge.textContent = delta >= 10 ? "大きく成長" : delta > 0 ? "成長中" : "要再設計";
  growthNarrative.textContent = `総合人的資産価値は${beforeTotal}点から${afterTotal}点に変化しました。伸びた領域を次のプロジェクトに接続し、停滞した領域は教育コンテンツと組織習慣で補強します。`;

  deltaList.innerHTML = categories.map((category) => {
    const change = after[category.id] - before[category.id];
    return `
      <div class="delta-row">
        <strong>${category.label}</strong>
        <span>${change > 0 ? "+" : ""}${change}</span>
      </div>
    `;
  }).join("");
}

function updateAll() {
  updateCounters();
  renderScores();
  renderMatrix();
  drawRadar();
  renderSummary();
  renderScenario();
  renderEsg();
  renderRecommendations();
  renderGrowth();
}

function switchView(viewId) {
  document.querySelectorAll(".view").forEach((view) => {
    view.classList.toggle("is-visible", view.id === viewId);
  });
  document.querySelectorAll(".step").forEach((step) => {
    step.classList.toggle("is-active", step.dataset.view === viewId);
  });
  if (viewId !== "diagnosis") updateAll();
}

function sampleAnswers() {
  const templates = {
    before: [3, 3, 2, 3, 2, 3, 2, 2],
    after: [4, 4, 4, 4, 3, 4, 4, 3]
  };
  categories.forEach((category, categoryIndex) => {
    category.questions.forEach((_, questionIndex) => {
      const base = templates[state.round][categoryIndex];
      const adjustment = questionIndex % 2 === 0 ? 0 : 1;
      currentAnswers()[questionKey(category.id, questionIndex)] = Math.min(5, base + adjustment);
    });
  });
  renderForm();
  sampleEsgAnswers();
  updateAll();
}

function sampleEsgAnswers() {
  const templates = {
    before: [3, 3, 2, 2, 3, 2],
    after: [4, 4, 4, 4, 4, 3]
  };
  esgCategories.forEach((category, categoryIndex) => {
    category.questions.forEach((_, questionIndex) => {
      const base = templates[state.round][categoryIndex];
      const adjustment = questionIndex === 1 ? 1 : 0;
      state.esgAnswers[esgQuestionKey(category.id, questionIndex)] = Math.min(5, base + adjustment);
    });
  });
  renderEsgForm();
}

function scenarioSample() {
  const samples = [
    {
      industry: "観光・地域商業",
      location: "温泉街と周辺の中小旅館",
      market: "若手観光客、旅館スタッフ、地域商店主",
      maturity: "change",
      story: "観光客は戻りつつあるが、地域内の連携が弱く、旅館と商店街が別々に集客している。若手スタッフはSNSやAI活用に関心があるが、既存業務に追われて実験が進まない。"
    },
    {
      industry: "製造業・現場DX",
      location: "地方工場と協力会社ネットワーク",
      market: "現場リーダー、熟練技能者、若手作業者",
      maturity: "stable",
      story: "品質改善のノウハウが熟練者に集中しており、若手への継承が属人的になっている。部門ごとの改善活動はあるが、データとAIを使った横断プロジェクトにはなっていない。"
    },
    {
      industry: "教育・探究学習",
      location: "地域高校と地元企業",
      market: "高校生、教員、地元企業、自治体",
      maturity: "early",
      story: "探究学習のテーマは増えているが、地域企業の実課題や事業化までつながりにくい。教員の負荷も高く、外部人材を巻き込む仕組みが不足している。"
    }
  ];
  const sample = samples[Math.floor(Math.random() * samples.length)];
  industryInput.value = sample.industry;
  locationInput.value = sample.location;
  marketInput.value = sample.market;
  maturityInput.value = sample.maturity;
  storyInput.value = sample.story;
  buildScenario();
}

function downloadGeneratedImage() {
  const link = document.createElement("a");
  link.download = "wellbeing-impact-scenario.png";
  link.href = generatedImageCanvas.toDataURL("image/png");
  link.click();
}

function resetCurrentRound() {
  state.answers[state.round] = {};
  state.esgAnswers = {};
  renderForm();
  renderEsgForm();
  updateAll();
}

document.querySelectorAll("[data-view]").forEach((button) => {
  button.addEventListener("click", () => switchView(button.dataset.view));
});

document.querySelectorAll("[data-view-target]").forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.roundTarget) {
      state.round = button.dataset.roundTarget;
      roundSelect.value = state.round;
      renderForm();
      updateAll();
    }
    switchView(button.dataset.viewTarget);
  });
});

roundSelect.addEventListener("change", (event) => {
  state.round = event.target.value;
  renderForm();
  updateAll();
});

document.querySelector("#sampleButton").addEventListener("click", sampleAnswers);
document.querySelector("#resetButton").addEventListener("click", resetCurrentRound);
generateScenarioButton.addEventListener("click", buildScenario);
scenarioSampleButton.addEventListener("click", scenarioSample);
generateImageButton.addEventListener("click", generateScenarioImage);
downloadImageButton.addEventListener("click", downloadGeneratedImage);

renderForm();
renderEsgForm();
updateAll();
