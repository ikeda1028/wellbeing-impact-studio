const categories = [
  {
    id: "human",
    label: "個人の人的資本価値",
    short: "人的資本",
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
  assessmentMode: "individual",
  organization: {
    activeMemberId: "member_1",
    members: [
      {
        id: "member_1",
        name: "回答者 1",
        role: "メンバー",
        answers: { before: {}, after: {} },
        esgAnswers: {}
      }
    ]
  },
  round: "before",
  answers: {
    before: {},
    after: {}
  },
  esgAnswers: {},
  scenarioMode: "collecting",
  scenarioFieldIndex: 0,
  scenarioSceneIndex: 0,
  scenarioContext: {
    industry: "",
    location: "",
    market: "",
    challenge: "",
    desiredImpact: ""
  },
  scenarioResponses: [],
  scenarioMessages: [],
  scenario: null,
  scenarioPlan: null,
  websiteAssessment: null,
  aiRecommendations: null
};

const form = document.querySelector("#assessmentForm");
const assessmentModeSelect = document.querySelector("#assessmentModeSelect");
const roundSelect = document.querySelector("#roundSelect");
const memberSelect = document.querySelector("#memberSelect");
const memberNameInput = document.querySelector("#memberNameInput");
const memberRoleInput = document.querySelector("#memberRoleInput");
const addMemberButton = document.querySelector("#addMemberButton");
const activeMemberBadge = document.querySelector("#activeMemberBadge");
const companyNameInput = document.querySelector("#companyNameInput");
const websiteUrlInput = document.querySelector("#websiteUrlInput");
const websiteAssessButton = document.querySelector("#websiteAssessButton");
const websiteAssessBadge = document.querySelector("#websiteAssessBadge");
const websiteAssessMemo = document.querySelector("#websiteAssessMemo");
const coverCanvas = document.querySelector("#coverCanvas");
const coverStartButton = document.querySelector("#coverStartButton");
const answeredCount = document.querySelector("#answeredCount");
const scoreGrid = document.querySelector("#scoreGrid");
const organizationPanel = document.querySelector("#organizationPanel");
const organizationModeBadge = document.querySelector("#organizationModeBadge");
const organizationGrid = document.querySelector("#organizationGrid");
const memberTable = document.querySelector("#memberTable");
const orgTypeBadge = document.querySelector("#orgTypeBadge");
const matrixDot = document.querySelector("#matrixDot");
const summaryGrid = document.querySelector("#summaryGrid");
const summaryRound = document.querySelector("#summaryRound");
const recommendationGrid = document.querySelector("#recommendationGrid");
const generateAiRecommendationsButton = document.querySelector("#generateAiRecommendationsButton");
const resetAiRecommendationsButton = document.querySelector("#resetAiRecommendationsButton");
const aiRecommendationBadge = document.querySelector("#aiRecommendationBadge");
const aiRecommendationMemo = document.querySelector("#aiRecommendationMemo");
const downloadResultsReportButton = document.querySelector("#downloadResultsReportButton");
const downloadRecommendationsReportButton = document.querySelector("#downloadRecommendationsReportButton");
const radarCanvas = document.querySelector("#radarCanvas");
const growthScore = document.querySelector("#growthScore");
const growthBadge = document.querySelector("#growthBadge");
const growthNarrative = document.querySelector("#growthNarrative");
const deltaList = document.querySelector("#deltaList");
const scenarioStageBadge = document.querySelector("#scenarioStageBadge");
const aiStatusBadge = document.querySelector("#aiStatusBadge");
const scenarioChat = document.querySelector("#scenarioChat");
const scenarioOptions = document.querySelector("#scenarioOptions");
const scenarioAnswerInput = document.querySelector("#scenarioAnswerInput");
const submitScenarioAnswerButton = document.querySelector("#submitScenarioAnswerButton");
const scenarioSampleButton = document.querySelector("#scenarioSampleButton");
const resetScenarioButton = document.querySelector("#resetScenarioButton");
const scenarioScoreBadge = document.querySelector("#scenarioScoreBadge");
const scenarioScoreGrid = document.querySelector("#scenarioScoreGrid");
const scenarioContextList = document.querySelector("#scenarioContextList");
const scenarioOutput = document.querySelector("#scenarioOutput");
const generateCompanyScenarioButton = document.querySelector("#generateCompanyScenarioButton");
const scenarioCompanyBadge = document.querySelector("#scenarioCompanyBadge");
const scenarioCompanyMemo = document.querySelector("#scenarioCompanyMemo");
const scenarioCompanyGrid = document.querySelector("#scenarioCompanyGrid");
const scenarioIndustryHint = document.querySelector("#scenarioIndustryHint");
const scenarioThemeHint = document.querySelector("#scenarioThemeHint");
const generatedImageCanvas = document.querySelector("#generatedImageCanvas");
const imagePromptText = document.querySelector("#imagePromptText");
const generateImageButton = document.querySelector("#generateImageButton");
const downloadImageButton = document.querySelector("#downloadImageButton");
const resultImageCanvas = document.querySelector("#resultImageCanvas");
const resultImagePromptText = document.querySelector("#resultImagePromptText");
const generateResultImageButton = document.querySelector("#generateResultImageButton");
const downloadResultImageButton = document.querySelector("#downloadResultImageButton");
const resultImageBadge = document.querySelector("#resultImageBadge");
const esgForm = document.querySelector("#esgForm");
const esgGradeBadge = document.querySelector("#esgGradeBadge");
const esgTotalScore = document.querySelector("#esgTotalScore");
const esgScoreGrid = document.querySelector("#esgScoreGrid");
const esgSummaryGrid = document.querySelector("#esgSummaryGrid");

function questionKey(categoryId, questionIndex) {
  return `${categoryId}_${questionIndex}`;
}

function activeMember() {
  return state.organization.members.find((member) => member.id === state.organization.activeMemberId) || state.organization.members[0];
}

function currentProfile() {
  return state.assessmentMode === "organization" ? activeMember() : state;
}

function currentAnswers() {
  return currentProfile().answers[state.round];
}

function currentEsgAnswers() {
  return currentProfile().esgAnswers;
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

const scenarioFields = [
  {
    id: "industry",
    label: "業界・領域",
    question: "まず、扱いたい業界・領域を選んでください。必要なら自由記述で補足できます。",
    options: ["地域医療・介護", "観光・地域商業", "製造業・現場DX", "教育・探究学習", "農業・食・ローカルブランド", "自治体・地域DX"]
  },
  {
    id: "location",
    label: "場所・組織",
    question: "次に、会社や活動場所、組織の文脈を選んでください。必要なら自由記述で補足できます。",
    options: ["地方都市の中核組織", "商店街・中心市街地", "地方工場と協力会社", "地域高校・大学", "自治体と地域団体", "複数拠点の中小企業"]
  },
  {
    id: "market",
    label: "対象者・市場",
    question: "誰の課題を扱いますか。近いものを選び、必要なら具体名を足してください。",
    options: ["高齢者家族・介護職・自治体", "若手観光客・地域事業者", "現場リーダー・熟練者・若手社員", "生徒・教員・地元企業", "子育て世帯・地域支援者", "中小企業経営者・従業員"]
  },
  {
    id: "challenge",
    label: "組織内の課題",
    question: "組織内では、どんな壁や課題がありますか。近いものを選び、必要なら補足してください。",
    options: ["意思決定が管理職に集中している", "部門間の壁があり越境しにくい", "現場が忙しく新しい実験に時間を割けない", "データや根拠が不足して説明できない", "若手の意欲はあるが任せる仕組みがない", "地域や外部人材との接続が弱い"]
  },
  {
    id: "desiredImpact",
    label: "実現したい変化",
    question: "このプロジェクトで実現したい変化を選んでください。必要なら事業成果も補足してください。",
    options: ["従業員の自律性と働きがいを高めたい", "地域のつながりと参加機会を増やしたい", "探究学習を地域課題解決につなげたい", "新規事業として継続収益を作りたい", "人的資本とwell-beingをESG価値として説明したい", "組織内外の協働プロジェクトを増やしたい"]
  }
];

const scenarioScenes = [
  {
    title: "場面1: 問いを立てる",
    prompt: "現場には課題感がありますが、管理職は慎重で、地域側も何を求めているか曖昧です。あなたは最初の2週間で何をしますか。誰に何を聞き、どんな問いに絞りますか。",
    focus: "探究度数・課題設定・情報収集"
  },
  {
    title: "場面2: 関係者を巻き込む",
    prompt: "ヒアリングで課題は見えてきました。一方で、現場メンバーは忙しく、管理職は成果の見通しを求め、地域関係者は慎重です。あなたはどう合意形成し、どのような小さな実証を設計しますか。",
    focus: "組織調整・プロジェクト型成熟度・well-being"
  },
  {
    title: "場面3: 事業化と説明責任",
    prompt: "実証に一定の手応えが出ました。次は継続資金、事業性、ESG/非財務価値の説明が必要です。あなたはどのKPIを置き、どんなリスクを管理し、投資家や外部関係者にどう説明しますか。",
    focus: "事業性・ESG説明力・インパクト測定"
  }
];

function activeScenarioScenes() {
  return state.scenarioPlan?.scenes?.length ? state.scenarioPlan.scenes : scenarioScenes;
}

const PUBLIC_API_BASE = "https://wellbeing-impact-studio-git-main-ikeda1028s-projects.vercel.app";
const shouldUsePublicApi =
  location.protocol === "file:" ||
  ["localhost", "127.0.0.1"].includes(location.hostname) ||
  location.hostname.endsWith(".github.io");
const AI_SCENARIO_API =
  window.WELLBEING_AI_API_BASE ||
  localStorage.getItem("WELLBEING_AI_API_BASE") ||
  (shouldUsePublicApi ? PUBLIC_API_BASE : "");
const AI_IMAGE_API =
  window.WELLBEING_AI_IMAGE_API_BASE ||
  window.WELLBEING_AI_API_BASE ||
  localStorage.getItem("WELLBEING_AI_IMAGE_API_BASE") ||
  localStorage.getItem("WELLBEING_AI_API_BASE") ||
  (shouldUsePublicApi ? PUBLIC_API_BASE : "");

function apiBaseCandidates(primaryBase) {
  const candidates = [primaryBase || ""];
  if (shouldUsePublicApi) candidates.push(PUBLIC_API_BASE);
  return [...new Set(candidates.map((base) => String(base || "").replace(/\/$/, "")))];
}

function scoreToScale(score) {
  const value = Number(score);
  if (!Number.isFinite(value)) return 3;
  return Math.max(1, Math.min(5, Math.round(value / 20)));
}

function fillAnswersFromCategoryScores(scores = {}) {
  categories.forEach((category) => {
    const value = scoreToScale(scores[category.id]);
    category.questions.forEach((_, questionIndex) => {
      currentAnswers()[questionKey(category.id, questionIndex)] = value;
    });
  });
}

function fillEsgAnswersFromScores(scores = {}) {
  esgCategories.forEach((category) => {
    const value = scoreToScale(scores[category.id]);
    category.questions.forEach((_, questionIndex) => {
      currentEsgAnswers()[esgQuestionKey(category.id, questionIndex)] = value;
    });
  });
}

function localWebsiteAssessment(url, companyName = "") {
  const text = `${url || ""} ${companyName || ""}`.toLowerCase();
  const hasEdu = /school|edu|academy|learning|tla|manabi|探究|教育/.test(text);
  const hasGov = /city|town|pref|lg|go\\.jp|地域|自治体/.test(text);
  const hasCorp = /co\\.jp|corp|company|inc|事業|株式会社/.test(text);
  const base = hasEdu ? 62 : hasGov ? 58 : hasCorp ? 56 : 52;
  return {
    companyName,
    confidence: 35,
    scores: {
      human: base + 2,
      inquiry: hasEdu ? base + 10 : base,
      autonomy: base - 4,
      project: base - 2,
      leadership: base - 3,
      orgWellbeing: base,
      regional: hasGov || hasEdu ? base + 8 : base - 2,
      business: hasCorp ? base + 8 : base - 1
    },
    esgScores: {
      esgGovernance: base - 2,
      esgStrategy: hasCorp ? base + 5 : base,
      esgRisk: base - 4,
      esgMetrics: base - 6,
      esgImpact: hasGov || hasEdu ? base + 7 : base,
      esgClimate: base - 5
    },
    summary: "AI APIに接続できないため、入力された会社名・URLから暫定値を入れました。公開情報に基づく正式な推定にはVercel APIとOpenAIキーが必要です。",
    evidence: ["入力された会社名・URL内の語句から領域を推定"],
    cautions: ["公開情報本文を読めていないため、必ず手動で確認してください。"]
  };
}

function applyWebsiteAssessment(result, fallbackUrl = "") {
  state.websiteAssessment = {
    ...result,
    sourceLabel: result.sourceUrl || fallbackUrl || result.companyName || result.requestedCompanyName || ""
  };
  fillAnswersFromCategoryScores(result.scores || {});
  fillEsgAnswersFromScores(result.esgScores || {});
  renderForm();
  renderEsgForm();

  const evidence = (result.evidence || []).slice(0, 3).join(" / ");
  const cautions = (result.cautions || []).slice(0, 2).join(" / ");
  websiteAssessBadge.textContent = `AI解析済み ${Math.round(result.confidence || 0)}%`;
  websiteAssessMemo.textContent = [
    result.companyName ? `AI解析により、${result.companyName}を暫定診断しました。` : "AI解析により、公開情報から暫定診断しました。",
    result.summary || "",
    evidence ? `根拠: ${evidence}` : "",
    cautions ? `注意: ${cautions}` : "",
    result.sourceUrl || fallbackUrl ? `対象: ${result.sourceUrl || fallbackUrl}` : ""
  ].filter(Boolean).join(" ");
  updateAll();
}

async function assessWebsiteFromUrl() {
  const companyName = companyNameInput.value.trim();
  const url = websiteUrlInput.value.trim();
  if (!url && !companyName) {
    websiteAssessBadge.textContent = "AI解析 未入力";
    websiteAssessMemo.textContent = "AI解析に使う会社名・団体名、またはホームページURLを入力してください。";
    return;
  }

  websiteAssessButton.disabled = true;
  websiteAssessButton.textContent = "AI解析中";
  websiteAssessBadge.textContent = "AI解析中";
  websiteAssessMemo.textContent = "AI解析が入力情報を読み取り、人的資本・組織OS・well-being・ESGの暫定値を作成しています。";

  try {
    let result = null;
    let lastError = null;
    for (const base of apiBaseCandidates(AI_SCENARIO_API)) {
      try {
        websiteAssessMemo.textContent = base
          ? `AI解析APIに接続しています。接続先: ${base}`
          : "AI解析APIに接続しています。";
        const response = await fetch(`${base}/api/website-assess`, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ url, companyName })
        });
        if (!response.ok) throw new Error(await response.text());
        result = await response.json();
        break;
      } catch (error) {
        lastError = error;
      }
    }
    if (!result) throw lastError || new Error("AI API request failed");
    applyWebsiteAssessment(result, url || companyName);
  } catch (error) {
    console.warn("Website assessment failed. Falling back to local estimate.", error);
    applyWebsiteAssessment(localWebsiteAssessment(url, companyName), url || companyName);
    websiteAssessBadge.textContent = "ローカルAI解析";
  } finally {
    websiteAssessButton.disabled = false;
    websiteAssessButton.textContent = "AI解析で暫定値を入力";
  }
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
  return categoryScoreForProfile(category, currentProfile(), round);
}

function categoryScoreForProfile(category, profile, round = state.round) {
  const answers = profile.answers[round];
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
      const value = currentEsgAnswers()[key] || "";
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
      currentEsgAnswers()[event.target.name] = Number(event.target.value);
      updateAll();
    });
  });
}

function esgCategoryScore(category, profile = currentProfile()) {
  const values = category.questions
    .map((_, index) => profile.esgAnswers[esgQuestionKey(category.id, index)])
    .filter(Boolean);

  if (!values.length) return 0;
  return Math.round((values.reduce((sum, value) => sum + value, 0) / values.length) * 20);
}

function averageObjects(items, keys) {
  if (!items.length) return Object.fromEntries(keys.map((key) => [key, 0]));
  return Object.fromEntries(keys.map((key) => [
    key,
    Math.round(items.reduce((sum, item) => sum + (item[key] || 0), 0) / items.length)
  ]));
}

function hasRoundAnswers(profile, round = state.round) {
  return Object.keys(profile.answers[round]).length > 0;
}

function hasEsgAnswers(profile) {
  return Object.keys(profile.esgAnswers).length > 0;
}

function scoreObjectForProfile(profile, round = state.round) {
  return Object.fromEntries(categories.map((category) => [category.id, categoryScoreForProfile(category, profile, round)]));
}

function allEsgScores() {
  if (state.assessmentMode !== "organization") {
    return Object.fromEntries(esgCategories.map((category) => [category.id, esgCategoryScore(category)]));
  }
  const respondents = state.organization.members.filter(hasEsgAnswers);
  const source = respondents.length ? respondents : [activeMember()];
  const items = source.map((member) => Object.fromEntries(esgCategories.map((category) => [category.id, esgCategoryScore(category, member)])));
  return averageObjects(items, esgCategories.map((category) => category.id));
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
  if (state.assessmentMode !== "organization") {
    return Object.fromEntries(categories.map((category) => [category.id, categoryScore(category, round)]));
  }
  const respondents = state.organization.members.filter((member) => hasRoundAnswers(member, round));
  const source = respondents.length ? respondents : [activeMember()];
  return averageObjects(source.map((member) => scoreObjectForProfile(member, round)), categories.map((category) => category.id));
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
  return Object.keys(currentAnswers()).length + Object.keys(currentEsgAnswers()).length;
}

function answeredCountForProfile(profile, round = state.round) {
  return Object.keys(profile.answers[round]).length + Object.keys(profile.esgAnswers).length;
}

function organizationStats(round = state.round) {
  const members = state.organization.members;
  const respondents = members.filter((member) => hasRoundAnswers(member, round));
  const scoredMembers = respondents.map((member) => {
    const scores = scoreObjectForProfile(member, round);
    return {
      member,
      scores,
      total: weightedScore(scores),
      answered: answeredCountForProfile(member, round)
    };
  });
  const totals = scoredMembers.map((item) => item.total);
  const average = totals.length ? Math.round(totals.reduce((sum, value) => sum + value, 0) / totals.length) : weightedScore(allScores(round));
  const variance = totals.length > 1
    ? Math.sqrt(totals.reduce((sum, value) => sum + Math.pow(value - average, 2), 0) / totals.length)
    : 0;
  const consensus = clamp(100 - variance * 1.5);
  const coverage = Math.round(
    members.reduce((sum, member) => sum + answeredCountForProfile(member, round), 0) /
    Math.max(1, members.length * totalQuestionCount) * 100
  );
  const categorySpread = categories.map((category) => {
    const values = scoredMembers.map((item) => item.scores[category.id]);
    const averageValue = values.length ? Math.round(values.reduce((sum, value) => sum + value, 0) / values.length) : 0;
    const stdev = values.length > 1
      ? Math.sqrt(values.reduce((sum, value) => sum + Math.pow(value - averageValue, 2), 0) / values.length)
      : 0;
    return {
      id: category.id,
      label: category.short,
      average: averageValue,
      stdev: Math.round(stdev),
      min: values.length ? Math.min(...values) : 0,
      max: values.length ? Math.max(...values) : 0
    };
  }).sort((a, b) => b.stdev - a.stdev);

  return {
    members,
    respondents,
    scoredMembers,
    average,
    variance: Math.round(variance),
    consensus,
    coverage,
    categorySpread
  };
}

function renderModeControls() {
  const isOrganization = state.assessmentMode === "organization";
  document.body.classList.toggle("is-organization-mode", isOrganization);
  assessmentModeSelect.value = state.assessmentMode;
  memberSelect.innerHTML = state.organization.members.map((member, index) => `
    <option value="${member.id}">${index + 1}. ${escapeHTML(member.name)}</option>
  `).join("");
  memberSelect.value = state.organization.activeMemberId;

  const member = activeMember();
  memberNameInput.value = member.name;
  memberRoleInput.value = member.role;
  activeMemberBadge.textContent = `${member.name} / ${member.role}`;
}

let coverFrame = 0;
const coverPointer = { x: 0, y: 0, active: false, hovered: "" };
const coverInfluence = {};
const coverNodeState = {};
const coverDrag = { active: false, label: "" };

function baseCoverNodes(scores, esgScore) {
  return [
    { label: "人的資本", value: scores.human || 56, x: 170, y: 160, color: "#1e7d5b" },
    { label: "組織OS", value: Math.round(((scores.autonomy || 50) + (scores.project || 50) + (scores.leadership || 50)) / 3), x: 390, y: 112, color: "#1f8a99" },
    { label: "地域WB", value: scores.regional || 52, x: 570, y: 245, color: "#2d68b1" },
    { label: "事業性", value: scores.business || 50, x: 420, y: 395, color: "#bd7b22" },
    { label: "ESG", value: esgScore || 54, x: 190, y: 340, color: "#b85353" }
  ];
}

function updateCoverNodePhysics(baseNodes) {
  const dragged = coverDrag.active ? coverNodeState[coverDrag.label] : null;
  const draggedBase = coverDrag.active ? baseNodes.find((item) => item.label === coverDrag.label) : null;

  baseNodes.forEach((base) => {
    if (!coverNodeState[base.label]) {
      coverNodeState[base.label] = { x: base.x, y: base.y, vx: 0, vy: 0 };
    }
  });

  baseNodes.forEach((base) => {
    const node = coverNodeState[base.label];
    let targetX = base.x;
    let targetY = base.y;
    let stiffness = 0.045;
    let damping = 0.84;

    if (coverDrag.active && coverDrag.label === base.label) {
      targetX = coverPointer.x;
      targetY = coverPointer.y;
      stiffness = 0.18;
      damping = 0.72;
    } else if (dragged && draggedBase) {
      const dragDx = coverPointer.x - draggedBase.x;
      const dragDy = coverPointer.y - draggedBase.y;
      const baseDistance = Math.hypot(base.x - draggedBase.x, base.y - draggedBase.y);
      const pull = Math.max(0, 1 - baseDistance / 430) * 0.42;
      targetX = base.x + dragDx * pull;
      targetY = base.y + dragDy * pull;
      stiffness = 0.055;
      damping = 0.82;
    }

    node.vx = (node.vx + (targetX - node.x) * stiffness) * damping;
    node.vy = (node.vy + (targetY - node.y) * stiffness) * damping;
    node.x = Math.max(76, Math.min(684, node.x + node.vx));
    node.y = Math.max(76, Math.min(444, node.y + node.vy));
  });

  return baseNodes.map((base) => ({
    ...base,
    x: coverNodeState[base.label].x,
    y: coverNodeState[base.label].y
  }));
}

function drawCoverCanvas() {
  if (!coverCanvas) return;
  const ctx = coverCanvas.getContext("2d");
  const width = coverCanvas.width;
  const height = coverCanvas.height;
  const scores = allScores();
  const esgScore = esgCompositeScore();
  const t = coverFrame * 0.018;
  coverFrame += 1;

  ctx.clearRect(0, 0, width, height);
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, "#f7fbf8");
  gradient.addColorStop(0.52, "#e6f3ee");
  gradient.addColorStop(1, "#edf4fb");
  ctx.fillStyle = gradient;
  drawRoundedRect(ctx, 18, 18, width - 36, height - 36, 26);
  ctx.fill();

  const nodes = updateCoverNodePhysics(baseCoverNodes(scores, esgScore));

  nodes.forEach((node) => {
    if (coverInfluence[node.label] === undefined) coverInfluence[node.label] = 0;
    const distance = coverPointer.active ? Math.hypot(coverPointer.x - node.x, coverPointer.y - node.y) : Infinity;
    const targetInfluence = coverPointer.active ? Math.max(0, 1 - distance / 280) : 0;
    coverInfluence[node.label] += (targetInfluence - coverInfluence[node.label]) * 0.075;
    if (coverInfluence[node.label] > 0.22) coverPointer.hovered = node.label;
  });

  ctx.lineWidth = 2;
  nodes.forEach((node, index) => {
    const next = nodes[(index + 1) % nodes.length];
    const influence = Math.max(coverInfluence[node.label] || 0, coverInfluence[next.label] || 0);
    const pulse = 0.36 + Math.sin(t + index) * 0.12 + influence * 0.32;
    ctx.strokeStyle = `rgba(30, 125, 91, ${pulse})`;
    ctx.lineWidth = 2 + influence * 3;
    ctx.beginPath();
    ctx.moveTo(node.x, node.y);
    ctx.bezierCurveTo(width / 2, node.y - 30, width / 2, next.y + 30, next.x, next.y);
    ctx.stroke();
  });

  nodes.forEach((node, index) => {
    const baseRadius = 48 + (node.value / 100) * 24 + Math.sin(t * 1.4 + index) * 4;
    const influence = coverInfluence[node.label] || 0;
    const radius = baseRadius * (1 + influence * 0.36);
    ctx.beginPath();
    ctx.arc(node.x, node.y, radius + 10 + influence * 24, 0, Math.PI * 2);
    ctx.fillStyle = `${node.color}16`;
    ctx.fill();

    ctx.beginPath();
    ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
    ctx.fillStyle = "#ffffff";
    ctx.fill();
    ctx.strokeStyle = node.color;
    ctx.lineWidth = 3 + influence * 3;
    ctx.stroke();

    ctx.fillStyle = node.color;
    ctx.font = `800 ${26 + influence * 10}px sans-serif`;
    ctx.textAlign = "center";
    ctx.fillText(String(node.value), node.x, node.y - 4 - influence * 6);
    ctx.fillStyle = "#52605b";
    ctx.font = `700 ${15 + influence * 3}px sans-serif`;
    ctx.fillText(node.label, node.x, node.y + 24 + influence * 7);
  });

  ctx.fillStyle = "#16201d";
  ctx.font = "800 24px sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("Impact Loop", width / 2, height / 2 - 10);
  ctx.fillStyle = "#52605b";
  ctx.font = "600 14px sans-serif";
  ctx.fillText("Diagnosis -> AI Scenario -> ESG -> TLA Action", width / 2, height / 2 + 18);
}

function animateCoverCanvas() {
  coverPointer.hovered = "";
  drawCoverCanvas();
  if (coverCanvas) coverCanvas.style.cursor = coverDrag.active ? "grabbing" : coverPointer.hovered ? "grab" : "default";
  requestAnimationFrame(animateCoverCanvas);
}

function updateCoverPointer(event) {
  if (!coverCanvas) return;
  const rect = coverCanvas.getBoundingClientRect();
  coverPointer.x = ((event.clientX - rect.left) / rect.width) * coverCanvas.width;
  coverPointer.y = ((event.clientY - rect.top) / rect.height) * coverCanvas.height;
  coverPointer.active = true;
}

function nearestCoverNode() {
  let nearest = null;
  Object.entries(coverNodeState).forEach(([label, node]) => {
    const distance = Math.hypot(coverPointer.x - node.x, coverPointer.y - node.y);
    if (!nearest || distance < nearest.distance) nearest = { label, distance };
  });
  return nearest && nearest.distance < 120 ? nearest.label : "";
}

function startCoverDrag(event) {
  updateCoverPointer(event);
  const label = nearestCoverNode();
  if (!label) return;
  coverDrag.active = true;
  coverDrag.label = label;
}

function stopCoverDrag() {
  coverDrag.active = false;
  coverDrag.label = "";
}

function renderOrganizationPanel() {
  const isOrganization = state.assessmentMode === "organization";
  organizationPanel.classList.toggle("is-hidden", !isOrganization);
  organizationModeBadge.textContent = isOrganization ? "組織モード" : "個人モード";
  if (!isOrganization) {
    organizationGrid.innerHTML = "";
    memberTable.innerHTML = "";
    return;
  }

  const stats = organizationStats();
  const scores = allScores();
  const type = organizationType(scores);
  organizationGrid.innerHTML = [
    ["回答者数", `${stats.respondents.length} / ${stats.members.length}`],
    ["組織人的資本価値", stats.average],
    ["合意度", stats.consensus],
    ["回答カバー率", `${stats.coverage}%`],
    ["総合ばらつき", stats.variance],
    ["組織タイプ", type.label]
  ].map(([label, value]) => `
    <article class="org-stat-card">
      <span>${label}</span>
      <strong>${value}</strong>
    </article>
  `).join("");

  memberTable.innerHTML = `
    <h3 class="org-table-title">カテゴリ別ばらつき</h3>
    <div class="spread-table" aria-label="カテゴリ別ばらつき">
      <div class="spread-row spread-row-head">
        <span>カテゴリ</span>
        <span>平均</span>
        <span>ばらつき</span>
        <span>最小-最大</span>
      </div>
      ${stats.categorySpread.map((item) => `
        <div class="spread-row">
          <strong>${item.label}</strong>
          <span>${item.average || "--"}</span>
          <span>${item.stdev}</span>
          <span>${item.min || "--"}-${item.max || "--"}</span>
        </div>
      `).join("")}
    </div>
    <h3 class="org-table-title">メンバー別スコア</h3>
    <div class="member-row member-row-head">
      <span>回答者</span>
      <span>役割</span>
      <span>総合</span>
      <span>回答数</span>
    </div>
    ${stats.members.map((member) => {
      const scoresForMember = scoreObjectForProfile(member);
      const hasAnswers = hasRoundAnswers(member);
      return `
        <div class="member-row">
          <span>${escapeHTML(member.name)}</span>
          <span>${escapeHTML(member.role)}</span>
          <strong>${hasAnswers ? weightedScore(scoresForMember) : "--"}</strong>
          <span>${answeredCountForProfile(member)} / ${totalQuestionCount}</span>
        </div>
      `;
    }).join("")}
  `;
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
    ["総合人的資本", total],
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
  const orgPrefix = state.assessmentMode === "organization" ? "組織集計として、" : "";
  summaryRound.textContent = state.round === "before" ? "Before" : "After";
  summaryGrid.innerHTML = [
    {
      title: "組織タイプ判定",
      body: `${orgPrefix}${type.description}`
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

function scenarioCurrentField() {
  return scenarioFields[state.scenarioFieldIndex];
}

function ensureScenarioStarted() {
  if (!state.scenarioMessages.length) {
    state.scenarioMessages.push({
      role: "ai",
      text: "これからAI実践シナリオを作ります。必要な情報が揃うまで順番に質問します。回答は短くても大丈夫です。",
      meta: scenarioFields[0].question
    });
  }
}

function scenarioContextComplete() {
  return scenarioFields.every((field) => state.scenarioContext[field.id]?.trim().length >= 2);
}

function scenarioContextText() {
  const context = state.scenarioContext;
  return `${context.industry} ${context.location} ${context.market} ${context.challenge} ${context.desiredImpact}`;
}

function startScenarioScenes() {
  state.scenarioMode = "scenes";
  state.scenarioSceneIndex = 0;
  state.scenarioMessages.push({
    role: "ai",
    text: "必要な情報が揃いました。ここから物語が進みます。各場面で、あなたならどう判断するかを自由記述で答えてください。",
    meta: buildScenePrompt(0)
  });
  buildScenario();
}

function normalizeCompanyNameForCompare(name = "") {
  return String(name)
    .toLowerCase()
    .replace(/株式会社|有限会社|合同会社|持株会社|ホールディングス|グループ|inc\.?|corp\.?|corporation|co\.?,?\s*ltd\.?|ltd\.?/gi, "")
    .replace(/[・･\s　\-ー–—_.,、。()（）［］\[\]「」'"]/g, "")
    .trim();
}

function isSameCompanyName(candidate, companyName) {
  const candidateKey = normalizeCompanyNameForCompare(candidate);
  const companyKey = normalizeCompanyNameForCompare(companyName);
  if (!candidateKey || !companyKey) return false;
  if (candidateKey === companyKey) return true;
  const shorter = candidateKey.length < companyKey.length ? candidateKey : companyKey;
  const longer = candidateKey.length < companyKey.length ? companyKey : candidateKey;
  return shorter.length >= 3 && longer.includes(shorter);
}

function scenarioCompetitorFallbacks(industry = "") {
  if (industry.includes("自動車") || industry.includes("モビリティ")) return ["本田技研工業", "日産自動車", "SUBARU", "マツダ", "スズキ"];
  if (industry.includes("電機") || industry.includes("エレクトロニクス")) return ["ソニーグループ", "パナソニックホールディングス", "日立製作所", "富士通", "NEC"];
  if (industry.includes("IT") || industry.includes("インターネット")) return ["楽天グループ", "LINEヤフー", "Amazon", "Google", "メルカリ"];
  if (industry.includes("金融") || industry.includes("保険")) return ["三井住友フィナンシャルグループ", "みずほフィナンシャルグループ", "野村ホールディングス", "東京海上ホールディングス", "大和証券グループ"];
  if (industry.includes("不動産") || industry.includes("都市")) return ["三菱地所", "三井不動産", "住友不動産", "東急不動産", "野村不動産"];
  if (industry.includes("小売") || industry.includes("流通")) return ["セブン&アイ・ホールディングス", "イオン", "ローソン", "ファミリーマート", "ファーストリテイリング"];
  if (industry.includes("食品") || industry.includes("飲料")) return ["サントリーホールディングス", "キリンホールディングス", "アサヒグループホールディングス", "味の素", "日清食品ホールディングス"];
  if (industry.includes("医療") || industry.includes("ヘルスケア")) return ["第一三共", "中外製薬", "エムスリー", "メドレー", "武田薬品工業"];
  if (industry.includes("教育") || industry.includes("探究")) return ["ベネッセコーポレーション", "リクルート（スタディサプリ）", "Classi", "atama plus", "Z会"];
  if (industry.includes("観光") || industry.includes("宿泊")) return ["JTB", "HIS", "楽天トラベル", "リクルート（じゃらん）", "Klook"];
  return ["同業大手候補", "隣接プラットフォーム候補", "地域同業候補", "代替サービス候補", "新興企業候補"];
}

function sanitizeScenarioCompetitors(competitors = [], companyName = "", industry = "") {
  const seen = new Set();
  const filtered = [];
  [...competitors, ...scenarioCompetitorFallbacks(industry)].forEach((name) => {
    const competitor = String(name || "").trim();
    const key = normalizeCompanyNameForCompare(competitor);
    if (!competitor || seen.has(key) || isSameCompanyName(competitor, companyName)) return;
    seen.add(key);
    filtered.push(competitor);
  });
  return filtered.slice(0, Math.max(3, Math.min(5, filtered.length)));
}

function sanitizeScenarioPlan(plan) {
  const companyName = plan.companyName || companyNameInput.value.trim() || state.websiteAssessment?.companyName || "";
  const inferredIndustry = plan.inferredIndustry || plan.industry || "";
  const competitors = sanitizeScenarioCompetitors(plan.competitors || [], companyName, inferredIndustry);
  const replacement = competitors[0] || "主要競合候補";
  const scenes = (plan.scenes || []).map((scene) => {
    let prompt = scene.prompt || "";
    if (companyName) {
      prompt = prompt
        .replaceAll(`競合候補の${companyName}`, `競合候補の${replacement}`)
        .replaceAll(`比較対象の${companyName}`, `比較対象の${replacement}`)
        .replaceAll(`競合の${companyName}`, `競合の${replacement}`);
    }
    return { ...scene, prompt };
  });
  return {
    ...plan,
    competitors,
    scenes,
    industryAnalysis: {
      ...(plan.industryAnalysis || {}),
      competitorBasis: `${plan.industryAnalysis?.competitorBasis || "業界における代表的な競合候補です。"} 対象会社と同一または同一グループと見なされる社名は除外しています。`
    }
  };
}

function inferScenarioPlanLocally() {
  const selectedIndustry = scenarioIndustryHint?.value || "";
  const selectedTheme = scenarioThemeHint?.value || "";
  const sourceText = [
    selectedIndustry,
    selectedTheme,
    companyNameInput.value,
    websiteUrlInput.value,
    state.websiteAssessment?.companyName,
    state.websiteAssessment?.summary,
    state.websiteAssessment?.evidence?.join(" ")
  ].filter(Boolean).join(" ");
  const text = sourceText.toLowerCase();
  const company = companyNameInput.value.trim() || state.websiteAssessment?.companyName || "対象組織";
  const industryProfiles = [
    {
      industry: "自動車・モビリティ",
      pattern: /toyota|トヨタ|honda|ホンダ|nissan|日産|subaru|スバル|mazda|マツダ|suzuki|スズキ|自動車|モビリティ|ev|車両/,
      competitors: ["トヨタ自動車", "本田技研工業", "日産自動車", "SUBARU", "マツダ"],
      marketPlayers: ["販売店", "部品サプライヤー", "法人顧客", "自治体交通担当"],
      businessModel: "車両販売、モビリティサービス、サプライチェーン連携、保守・金融サービス"
    },
    {
      industry: "電機・エレクトロニクス",
      pattern: /sony|ソニー|panasonic|パナソニック|hitachi|日立|toshiba|東芝|sharp|シャープ|nec|fujitsu|富士通|電機|半導体|電子|家電/,
      competitors: ["ソニーグループ", "パナソニックホールディングス", "日立製作所", "富士通", "NEC"],
      marketPlayers: ["法人顧客", "販売代理店", "開発パートナー", "グローバルサプライヤー"],
      businessModel: "製品販売、BtoBソリューション、保守サービス、データ・AI活用"
    },
    {
      industry: "IT・インターネットサービス",
      pattern: /rakuten|楽天|yahoo|line|google|amazon|mercari|メルカリ|cyberagent|サイバーエージェント|it|saas|クラウド|アプリ|ec|プラットフォーム/,
      competitors: ["楽天グループ", "LINEヤフー", "Amazon", "Google", "メルカリ"],
      marketPlayers: ["利用者", "広告主", "加盟店", "開発パートナー"],
      businessModel: "プラットフォーム、広告、課金、EC、データ活用サービス"
    },
    {
      industry: "金融・保険",
      pattern: /mitsubishiufj|三菱ufj|smbc|三井住友|mizuho|みずほ|nomura|野村|daiwa|大和証券|tokio marine|東京海上|金融|銀行|証券|保険|fintech/,
      competitors: ["三菱UFJフィナンシャル・グループ", "三井住友フィナンシャルグループ", "みずほフィナンシャルグループ", "野村ホールディングス", "東京海上ホールディングス"],
      marketPlayers: ["個人顧客", "法人顧客", "金融庁", "提携フィンテック"],
      businessModel: "預貸・決済、資産運用、保険、法人金融、デジタル金融サービス"
    },
    {
      industry: "不動産・都市開発",
      pattern: /mitsui fudosan|三井不動産|mitsubishi estate|三菱地所|sumitomo realty|住友不動産|tokyu|東急不動産|nomura real estate|野村不動産|不動産|都市開発|マンション|オフィス|商業施設/,
      competitors: ["三井不動産", "三菱地所", "住友不動産", "東急不動産", "野村不動産"],
      marketPlayers: ["入居企業", "住民", "自治体", "テナント事業者"],
      businessModel: "開発、賃貸、分譲、施設運営、都市サービス"
    },
    {
      industry: "小売・流通",
      pattern: /seven|セブン|aeon|イオン|lawson|ローソン|familymart|ファミリーマート|uniqlo|ユニクロ|小売|流通|スーパー|コンビニ|店舗/,
      competitors: ["セブン&アイ・ホールディングス", "イオン", "ローソン", "ファミリーマート", "ファーストリテイリング"],
      marketPlayers: ["店舗従業員", "消費者", "取引先", "物流パートナー"],
      businessModel: "店舗販売、EC、プライベートブランド、物流・会員サービス"
    },
    {
      industry: "食品・飲料",
      pattern: /suntory|サントリー|kirin|キリン|asahi|アサヒ|ajinomoto|味の素|nissin|日清|食品|飲料|外食|レストラン|フード/,
      competitors: ["サントリーホールディングス", "キリンホールディングス", "アサヒグループホールディングス", "味の素", "日清食品ホールディングス"],
      marketPlayers: ["消費者", "小売店", "飲食店", "原材料サプライヤー"],
      businessModel: "商品開発、製造、流通、ブランドマーケティング、外食・中食"
    },
    {
      industry: "医療・ヘルスケア",
      pattern: /takeda|武田薬品|daiichi sankyo|第一三共|chugai|中外製薬|m3|エムスリー|medley|メドレー|医療|介護|福祉|health|care|高齢|製薬|病院/,
      competitors: ["武田薬品工業", "第一三共", "中外製薬", "エムスリー", "メドレー"],
      marketPlayers: ["患者", "医療従事者", "介護職", "自治体福祉担当"],
      businessModel: "医薬品、医療サービス、ヘルスケアDX、地域ケア連携"
    },
    {
      industry: "教育・探究学習",
      pattern: /benesse|ベネッセ|study sapuri|スタディサプリ|classi|atama|教育|学校|学習|academy|school|edu|探究|人材/,
      competitors: ["ベネッセコーポレーション", "リクルート（スタディサプリ）", "Classi", "atama plus", "Z会"],
      marketPlayers: ["学校管理職", "教員", "生徒", "自治体教育担当"],
      businessModel: "教育プログラム、探究学習支援、学校・企業連携サービス"
    },
    {
      industry: "観光・宿泊・地域商業",
      pattern: /jtb|his|楽天トラベル|jalan|じゃらん|klook|観光|ホテル|旅行|宿泊|商店街|地域商業|tour/,
      competitors: ["JTB", "HIS", "楽天トラベル", "リクルート（じゃらん）", "Klook"],
      marketPlayers: ["旅行者", "宿泊事業者", "地域事業者", "自治体観光担当"],
      businessModel: "旅行商品、宿泊予約、地域体験、観光マーケティング"
    }
  ];
  const profile = industryProfiles.find((item) => selectedIndustry && item.industry === selectedIndustry)
    || industryProfiles.find((item) => item.pattern.test(text)) || {
    industry: "業界未確定（追加情報が必要）",
    competitors: ["同業大手候補", "地域同業候補", "隣接プラットフォーム候補"],
    marketPlayers: ["顧客", "取引先", "地域関係者", "金融機関"],
    businessModel: "入力情報が不足しているため、事業モデルは未確定です"
  };
  const industry = profile.industry;
  const competitors = sanitizeScenarioCompetitors(profile.competitors, company, industry);
  const marketPlayers = profile.marketPlayers;
  return {
    source: "ローカル会社別シナリオ",
    companyName: company,
    inferredIndustry: industry,
    industryAnalysis: {
      confidence: industry.includes("未確定") ? 28 : 68,
      basis: selectedIndustry ? `業界ヒント「${selectedIndustry}」を優先してシナリオを設計しました。` : industry.includes("未確定") ? "会社名、URL、AI解析メモから業界を特定できませんでした。会社URLや事業説明を追加してください。" : "会社名、URL、AI解析メモに含まれる企業名・ドメイン・業界語から業界を推定しました。",
      businessModel: profile.businessModel,
      customerSegments: marketPlayers.slice(0, 3),
      competitorBasis: "会社名やURLから推定した業界における代表的な競合候補・比較対象です。直接競合かどうかは要確認です。",
      assumptions: ["会社名やURLの語句からの推定であり、正式な業界分類は手動確認が必要です。", "社名は競合候補・比較対象であり、直接競合として断定しません。"],
      recommendedScenarioTheme: selectedTheme
        ? `${industry}における${selectedTheme}を、人的資本とwell-beingを強みに設計する`
        : `${industry}で競合に先行される中、人的資本とwell-beingを強みにした差別化事業を設計する`
    },
    market: marketPlayers.slice(0, 3).join("、"),
    location: state.websiteAssessment?.sourceLabel || "会社と地域市場",
    challenge: "競合が先に動く中で、社内の合意形成と実行体制が追いついていない。",
    desiredImpact: "人的資本、well-being、事業性を同時に高め、ESG価値として説明できる状態にする。",
    competitors,
    marketPlayers,
    storySeed: `${company}は${industry}領域で、競合候補である${competitors[0]}や${competitors[1]}の動きを受けながら、自社らしいwell-being事業を立ち上げようとしています。`,
    scenes: [
      {
        title: "場面1: 初動調査と問いの設定",
        prompt: `競合候補の${competitors[0]}が新サービスを発表し、${marketPlayers[0]}から比較され始めました。制約は2週間、予算30万円、調査できる相手は5名までです。営業部はすぐ商品化したい一方、現場は負荷増を警戒し、管理職は失敗時の説明責任を気にしています。さらに主要顧客から「来月までに方針を聞きたい」と連絡が入りました。あなたは誰に何を聞き、どの問いに絞り、何をまだ判断しないと決めますか。判断を遅らせた場合のリスクも含めて答えてください。`,
        focus: "探究度数・業界理解・競合比較・優先順位"
      },
      {
        title: "場面2: 社内対立と巻き込み設計",
        prompt: `比較対象の${competitors[1]}も地域連携を強めています。社内では、経営企画は事業性、現場責任者は人員不足、若手メンバーは挑戦機会、管理部門はリスク管理を主張しています。制約は90日、兼務メンバー3名、既存業務を止められないことです。${marketPlayers[1]}や${marketPlayers[2]}との協力も必要ですが、相手側も慎重です。あなたは誰を意思決定者・実行者・支援者に置き、どの合意形成プロセスで進めますか。反対者への対応も含めて答えてください。`,
        focus: "組織OS・プロジェクト型成熟度・合意形成・well-being"
      },
      {
        title: "場面3: 競合対応と差別化判断",
        prompt: `${competitors[2]}が価格を下げた類似施策を発表しました。社内からは「価格で対抗すべき」「独自性を出すべき」「撤退すべき」という3案が出ています。顧客は短期成果を求め、現場は品質低下を恐れ、投資家候補はESG価値の説明を求めています。あなたは競合に対して何で勝ち、何では戦わないと決めますか。差別化仮説、検証方法、撤退基準をセットで答えてください。`,
        focus: "事業性・競争優位・仮説検証・意思決定"
      },
      {
        title: "場面4: 実証中のトラブル対応",
        prompt: `実証開始後、参加者の満足度は高い一方、現場メンバーの残業が増え、${marketPlayers[0]}から個人情報や説明不足への懸念が出ました。同時に、${competitors[0]}が大規模キャンペーンを始め、社内では「このまま継続するか、一度止めるか」で意見が割れています。あなたはwell-beingを下げずに実証を続けるため、どのKPIを見直し、どのリスクを即時対応し、誰にどう説明しますか。`,
        focus: "well-being・リスク管理・実証改善・ステークホルダー対応"
      },
      {
        title: "場面5: 投資判断とESG説明",
        prompt: `90日実証の結果、顧客反応は良いものの収益化には追加投資が必要です。取締役会では、競合候補の${competitors[1]}との差別化、人的資本価値の向上、地域well-being、ESG投資適格性を同時に説明する必要があります。あなたは継続・縮小・撤退のどれを提案し、どの数値目標、リスク管理、開示ストーリーで承認を取りに行きますか。`,
        focus: "ESG投資適格性・事業判断・人的資本価値・説明責任"
      },
    ]
  };
}

function applyScenarioPlan(plan) {
  plan = sanitizeScenarioPlan(plan);
  const analysis = plan.industryAnalysis || {};
  state.scenarioPlan = plan;
  state.scenarioContext = {
    industry: plan.inferredIndustry || plan.industry || "",
    location: plan.location || "",
    market: plan.market || "",
    challenge: plan.challenge || plan.storySeed || "",
    desiredImpact: plan.desiredImpact || ""
  };
  state.scenarioMode = "scenes";
  state.scenarioFieldIndex = scenarioFields.length;
  state.scenarioSceneIndex = 0;
  state.scenarioResponses = [];
  state.scenarioMessages = [
    {
      role: "ai",
      text: `${plan.companyName || "対象組織"}の会社別AIシナリオを生成しました。推定業界は「${plan.inferredIndustry || "未設定"}」、分析確信度は${analysis.confidence ?? "--"}%です。${analysis.recommendedScenarioTheme ? `推奨テーマは「${analysis.recommendedScenarioTheme}」です。` : ""}具体的な競合候補や市場プレイヤーが登場する場面で判断してください。`,
      meta: buildScenePrompt(0)
    }
  ];
  scenarioCompanyBadge.textContent = plan.source || "AI会社別シナリオ";
  scenarioCompanyMemo.textContent = analysis.basis
    ? `業界分析: ${analysis.basis} 推奨テーマ: ${analysis.recommendedScenarioTheme || plan.storySeed || "未設定"}`
    : plan.storySeed || "会社名・URLから業界と競合を推定して、実践シナリオを生成しました。";
  buildScenario();
  updateAll();
}

function buildScenarioGenerationContext() {
  const scores = allScores();
  return {
    companyName: companyNameInput.value.trim(),
    url: websiteUrlInput.value.trim(),
    industryHint: scenarioIndustryHint?.value || "",
    scenarioThemeHint: scenarioThemeHint?.value || "",
    websiteAssessment: state.websiteAssessment,
    websiteEvidence: state.websiteAssessment?.evidence || [],
    websiteCautions: state.websiteAssessment?.cautions || [],
    scores,
    esgScores: allEsgScores(),
    esgCompositeScore: esgCompositeScore(),
    organizationType: organizationType(scores),
    weakestCategories: weakestCategories(scores, 3).map((category) => ({
      label: category.label,
      score: scores[category.id]
    })),
    strongestCategories: strongestCategories(scores, 3).map((category) => ({
      label: category.label,
      score: scores[category.id]
    })),
    existingScenarioContext: state.scenarioContext
  };
}

async function generateCompanyScenario() {
  generateCompanyScenarioButton.disabled = true;
  generateCompanyScenarioButton.textContent = "AIシナリオ生成中";
  scenarioCompanyBadge.textContent = "AI生成中";
  scenarioCompanyMemo.textContent = "AIが会社名・URL・AI解析結果・業界ヒントから業界文脈を整理し、競合他社が登場する場面を作成しています。";

  try {
    const response = await fetch(`${AI_SCENARIO_API}/api/scenario-generate`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(buildScenarioGenerationContext())
    });
    if (!response.ok) throw new Error(await response.text());
    const plan = await response.json();
    applyScenarioPlan(plan);
  } catch (error) {
    console.warn("Company scenario generation failed. Falling back to local scenario.", error);
    applyScenarioPlan(inferScenarioPlanLocally());
    scenarioCompanyBadge.textContent = "ローカル会社別シナリオ";
  } finally {
    generateCompanyScenarioButton.disabled = false;
    generateCompanyScenarioButton.textContent = "業界別AIシナリオ生成";
  }
}

function buildScenePrompt(index) {
  const scene = activeScenarioScenes()[index];
  if (!scene) return "すべての場面が完了しました。結果画面で診断との差分を確認してください。";
  const context = state.scenarioContext;
  return `${scene.title}\n${scene.prompt}\n\n文脈: ${context.industry} / ${context.location} / ${context.market}\n評価焦点: ${scene.focus}\n回答観点: 制約条件、利害対立、競合対応、ステークホルダー、KPI、判断しない場合のリスクまで含めてください。`;
}

function scoreScenarioResponse(text, sceneIndex) {
  const contains = (words) => words.some((word) => text.includes(word));
  const score = {
    inquiry: 0,
    org: 0,
    wellbeing: 0,
    business: 0,
    esg: 0
  };

  if (contains(["問い", "仮説", "なぜ", "課題", "リサーチ", "調査", "比較", "分析", "データ"])) score.inquiry += 18;
  if (contains(["ヒアリング", "インタビュー", "現場", "住民", "顧客", "当事者", "一次情報"])) score.inquiry += 18;
  if (contains(["整理", "優先", "検証", "実験", "プロトタイプ", "小さく"])) score.inquiry += 12;
  if (contains(["制約", "予算", "期限", "人員", "優先順位", "判断しない", "遅らせ"])) score.inquiry += 10;

  if (contains(["管理職", "上司", "合意", "役割", "権限", "チーム", "部門", "巻き込"])) score.org += 18;
  if (contains(["目的", "成果指標", "90日", "振り返り", "会議", "責任者"])) score.org += 16;
  if (contains(["心理的安全", "負荷", "孤立", "対話", "支援", "信頼"])) score.org += 12;
  if (contains(["利害", "対立", "反対", "意思決定者", "実行者", "支援者", "合意形成"])) score.org += 12;

  if (contains(["well-being", "幸福", "暮らし", "つながり", "包摂", "弱い立場", "地域", "参加"])) score.wellbeing += 22;
  if (contains(["従業員", "働きがい", "安心", "健康", "学習", "挑戦"])) score.wellbeing += 14;

  if (contains(["収益", "価格", "費用", "コスト", "資金", "顧客", "支払い", "継続", "事業"])) score.business += 22;
  if (contains(["KPI", "指標", "売上", "利用", "継続率", "効果", "ROI"])) score.business += 16;
  if (contains(["競合", "差別化", "撤退基準", "市場", "代替", "勝ち筋", "戦わない"])) score.business += 14;

  if (contains(["ESG", "開示", "投資家", "ガバナンス", "リスク", "環境", "気候", "人権", "KPI", "説明責任"])) score.esg += 22;
  if (contains(["測定", "目標", "根拠", "レポート", "透明性", "監督", "管理"])) score.esg += 14;
  if (contains(["個人情報", "プライバシー", "説明", "同意", "監査", "取締役会", "人的資本"])) score.esg += 12;

  if (text.length > 80) {
    score.inquiry += 6;
    score.org += 4;
    score.wellbeing += 4;
    score.business += 4;
    score.esg += 4;
  }

  if (sceneIndex === 0) score.inquiry += 12;
  if (sceneIndex === 1) {
    score.org += 12;
    score.wellbeing += 8;
  }
  if (sceneIndex === 2) {
    score.business += 12;
    score.esg += 12;
  }
  if (sceneIndex === 3) {
    score.org += 8;
    score.wellbeing += 12;
    score.esg += 8;
  }
  if (sceneIndex === 4) {
    score.business += 10;
    score.esg += 14;
    score.org += 6;
  }

  return Object.fromEntries(Object.entries(score).map(([key, value]) => [key, clamp(value, 0, 100)]));
}

function aggregateScenarioScores() {
  if (!state.scenarioResponses.length) {
    return {
      inquiry: 0,
      org: 0,
      wellbeing: 0,
      business: 0,
      esg: 0
    };
  }

  const total = state.scenarioResponses.reduce((sum, item) => {
    Object.entries(item.score).forEach(([key, value]) => {
      sum[key] = (sum[key] || 0) + value;
    });
    return sum;
  }, {});

  return Object.fromEntries(Object.entries(total).map(([key, value]) => [key, clamp(value / state.scenarioResponses.length)]));
}

function buildScenario() {
  const plan = state.scenarioPlan;
  const analysis = plan?.industryAnalysis || {};
  const context = {
    industry: state.scenarioContext.industry || "未設定の業界",
    location: state.scenarioContext.location || "未設定の場所",
    market: state.scenarioContext.market || "未設定の市場",
    maturity: "change",
    story: `${state.scenarioContext.challenge || "組織課題は未設定です。"} ${state.scenarioContext.desiredImpact || "実現したい変化は未設定です。"}`
  };
  const scores = allScores();
  const total = weightedScore(scores);
  const type = organizationType(scores);
  const weak = weakestCategories(scores, 2);
  const strong = strongestCategories(scores, 2);
  const signals = contextSignals(context);
  const maturity = maturityModifier(context.maturity);
  const scenarioJudgement = aggregateScenarioScores();

  const marketFit = clamp(
    scores.business * 0.35 +
    scores.regional * 0.25 +
    scores.inquiry * 0.12 +
    scenarioJudgement.inquiry * 0.08 +
    (signals.care || signals.education || signals.manufacturing ? 8 : 2) +
    signals.lengthBonus +
    maturity.business
  );
  const orgReadiness = clamp(
    scores.autonomy * 0.27 +
    scores.project * 0.27 +
    scores.leadership * 0.2 +
    scenarioJudgement.org * 0.18 +
    (signals.collaboration ? 7 : 0) -
    (signals.friction ? 5 : 0) +
    maturity.org
  );
  const wellbeingImpact = clamp(
    scores.orgWellbeing * 0.24 +
    scores.regional * 0.34 +
    scores.human * 0.1 +
    scenarioJudgement.wellbeing * 0.16 +
    (signals.regional ? 10 : 0) +
    (signals.care || signals.education ? 7 : 0) +
    signals.lengthBonus
  );
  const businessPotential = clamp(
    scores.business * 0.38 +
    marketFit * 0.3 +
    scenarioJudgement.business * 0.2 +
    orgReadiness * 0.08 +
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
    scenarioJudgement.esg * 0.1
  );

  state.scenario = {
    context,
    judgement: scenarioJudgement,
    scores: {
      marketFit,
      orgReadiness,
      wellbeingImpact,
      businessPotential,
      executionRisk,
      impactIndex
    },
    title: plan ? `${plan.companyName || context.location}の${context.industry} 分析型シナリオ` : `${context.location}における${context.industry}のwell-being事業化シナリオ`,
    story: plan ? `${plan.storySeed} AI業界分析では「${analysis.recommendedScenarioTheme || "競合環境を踏まえた差別化事業設計"}」が推奨テーマです。${context.market}と${(plan.competitors || []).slice(0, 2).join("、")}の動きを見ながら、${type.label}への移行を進めます。${strong.map((item) => item.short).join("と")}を強みに、${weak.map((item) => item.short).join("と")}を補強します。あなたの場面判断では、探究${scenarioJudgement.inquiry}、組織調整${scenarioJudgement.org}、well-being${scenarioJudgement.wellbeing}、事業性${scenarioJudgement.business}、ESG説明力${scenarioJudgement.esg}として測定されています。` : `${context.market}が抱える未充足の課題を起点に、${type.label}への移行を進めながら、現場発の小さなプロジェクトを立ち上げます。${strong.map((item) => item.short).join("と")}を強みに、${weak.map((item) => item.short).join("と")}を補強します。あなたの場面判断では、探究${scenarioJudgement.inquiry}、組織調整${scenarioJudgement.org}、well-being${scenarioJudgement.wellbeing}、事業性${scenarioJudgement.business}、ESG説明力${scenarioJudgement.esg}として測定されています。`,
    hypothesis: [
      `${context.market}に対して、困りごとの可視化と支援導線を一体化したサービスを検証する`,
      `組織内では、管理職承認に依存しすぎない90日プロジェクトとして運用する`,
      `成果指標は、事業性KPIとwell-being KPIを分けて測定する`
    ],
    stakeholders: [
      "現場メンバー",
      "管理職・意思決定者",
      context.market,
      ...(plan?.competitors?.slice(0, 2) || []),
      signals.regional ? "自治体・地域団体" : "外部パートナー",
      "顧客・受益者"
    ].slice(0, 7),
    risks: [
      executionRisk >= 60 ? "意思決定が遅く、実証実験が始まる前に momentum を失う" : "初期実証の範囲が広がりすぎる",
      scores.orgWellbeing < 60 ? "挑戦が一部メンバーの負荷として偏り、well-beingを下げる" : "成果が見えにくい活動が評価されにくい",
      scores.inquiry < 60 ? "問いの設定や情報収集が浅くなり、実証テーマの説得力が弱くなる" : "事業性が先行し、地域側の納得形成が遅れる"
    ],
    experiments: [
      "2週間で関係者5名にヒアリングし、課題の頻度と痛みを数値化する",
      "30日で最小プロトタイプを作り、利用意向と支払い意思を確認する",
      "90日後に人的資本価値、組織well-being、地域well-being、事業性を再測定する"
    ]
  };

  renderScenario();
  generateLocalScenarioImage();
  renderRecommendations();
}

async function evaluateScenarioWithAi(answer, sceneIndex, fallbackScore) {
  const endpoint = `${AI_SCENARIO_API}/api/scenario-evaluate`;
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        context: state.scenarioContext,
        scene: activeScenarioScenes()[sceneIndex],
        answer,
        selfScores: allScores(),
        esgScores: allEsgScores()
      })
    });
    if (!response.ok) throw new Error(`AI API ${response.status}`);
    const data = await response.json();
    return {
      score: {
        inquiry: clamp(data.score?.inquiry ?? fallbackScore.inquiry),
        org: clamp(data.score?.org ?? fallbackScore.org),
        wellbeing: clamp(data.score?.wellbeing ?? fallbackScore.wellbeing),
        business: clamp(data.score?.business ?? fallbackScore.business),
        esg: clamp(data.score?.esg ?? fallbackScore.esg)
      },
      feedback: data.feedback || "",
      nextProbe: data.nextProbe || "",
      aiUsed: true
    };
  } catch (error) {
    return {
      score: fallbackScore,
      feedback: "AI APIに接続できないため、ローカル評価で測定しました。",
      nextProbe: "",
      aiUsed: false
    };
  }
}

async function submitScenarioAnswer() {
  ensureScenarioStarted();
  const answer = scenarioAnswerInput.value.trim();
  if (!answer) return;

  state.scenarioMessages.push({ role: "user", text: answer });

  if (state.scenarioMode === "collecting") {
    const field = scenarioCurrentField();
    state.scenarioContext[field.id] = answer;
    state.scenarioFieldIndex += 1;

    if (scenarioContextComplete()) {
      startScenarioScenes();
    } else {
      const nextField = scenarioCurrentField();
      state.scenarioMessages.push({
        role: "ai",
        text: "ありがとうございます。次の情報を教えてください。",
        meta: nextField.question
      });
    }
  } else if (state.scenarioMode === "scenes") {
    const sceneIndex = state.scenarioSceneIndex;
    const scene = activeScenarioScenes()[sceneIndex];
    const fallbackScore = scoreScenarioResponse(answer, sceneIndex);
    submitScenarioAnswerButton.disabled = true;
    submitScenarioAnswerButton.textContent = "AI測定中...";
    const evaluation = await evaluateScenarioWithAi(answer, sceneIndex, fallbackScore);
    submitScenarioAnswerButton.disabled = false;
    submitScenarioAnswerButton.textContent = "回答して進む";
    const score = evaluation.score;
    state.scenarioResponses.push({ scene: scene.title, answer, score, feedback: evaluation.feedback, aiUsed: evaluation.aiUsed });
    state.scenarioSceneIndex += 1;
    buildScenario();

    if (state.scenarioSceneIndex < activeScenarioScenes().length) {
      state.scenarioMessages.push({
        role: "ai",
        text: evaluation.aiUsed ? "AIが回答を測定しました。次の場面に進みます。" : "回答をローカル評価で測定しました。次の場面に進みます。",
        meta: `${evaluation.feedback}${evaluation.nextProbe ? `\n深掘り問い: ${evaluation.nextProbe}` : ""}\n\n${buildScenePrompt(state.scenarioSceneIndex)}`
      });
    } else {
      state.scenarioMode = "complete";
      state.scenarioMessages.push({
        role: "ai",
        text: evaluation.aiUsed ? "AI実践シナリオは完了です。結果画面で、01の自己診断と02の実践判断の統合結果を確認できます。" : "実践シナリオは完了です。AI APIに接続できない場面はローカル評価で補完しています。",
        meta: `${evaluation.feedback}\n必要なら、回答を見直してもう一度シナリオを実行できます。`
      });
    }
  }

  scenarioAnswerInput.value = "";
  updateAll();
}

function selectScenarioOption(value) {
  if (!scenarioAnswerInput.value.trim()) {
    scenarioAnswerInput.value = value;
    return;
  }
  scenarioAnswerInput.value = `${scenarioAnswerInput.value.trim()}、${value}`;
}

function resetScenario() {
  state.scenarioPlan = null;
  state.scenarioMode = "collecting";
  state.scenarioFieldIndex = 0;
  state.scenarioSceneIndex = 0;
  state.scenarioContext = {
    industry: "",
    location: "",
    market: "",
    challenge: "",
    desiredImpact: ""
  };
  state.scenarioResponses = [];
  state.scenarioMessages = [];
  state.scenario = null;
  scenarioCompanyBadge.textContent = "未生成";
  scenarioCompanyMemo.textContent = "01の会社名・URL・AI解析結果から業界を特定し、競合他社や市場プレイヤーが登場する実践シナリオを生成します。";
  scenarioCompanyGrid.innerHTML = "";
  scenarioAnswerInput.value = "";
  ensureScenarioStarted();
  updateAll();
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
    "スタイル: 清潔なSaaSダッシュボード向け、明るい自然光、信頼感、過度な装飾なし、文字は入れず、図解的でプロフェッショナル。"
  ].join("\n");
}

function buildResultDashboardPrompt() {
  const scores = allScores();
  const total = weightedScore(scores);
  const type = organizationType(scores);
  const esgScore = esgCompositeScore();
  const esgStatus = esgGrade(esgScore);
  const scenario = state.scenario;
  const strong = strongestCategories(scores, 2).map((item) => `${item.short} ${scores[item.id]}`).join("、");
  const weak = weakestCategories(scores, 2).map((item) => `${item.short} ${scores[item.id]}`).join("、");
  const scoreText = categories.map((category) => `${category.short}: ${scores[category.id]}`).join(", ");
  const orgStats = state.assessmentMode === "organization" ? organizationStats() : null;
  const orgText = orgStats
    ? `組織モード: 回答者 ${orgStats.respondents.length}/${orgStats.members.length}、合意度 ${orgStats.consensus}、総合ばらつき ${orgStats.variance}、回答カバー率 ${orgStats.coverage}%`
    : "個人モード: 個人の人的資本価値と実践判断を可視化";
  const scenarioText = scenario
    ? `AIシナリオ: ${scenario.title}。総合指数 ${scenario.scores.impactIndex}、市場適合 ${scenario.scores.marketFit}、組織実装力 ${scenario.scores.orgReadiness}、well-being ${scenario.scores.wellbeingImpact}、事業可能性 ${scenario.scores.businessPotential}、実行リスク ${scenario.scores.executionRisk}`
    : "AIシナリオ未完了: 自己診断とESGの現在値を中心に可視化";

  resultImagePromptText.value = [
    "日本語サービスの結果ダッシュボードを象徴する横長ビジュアルを生成する。",
    `総合人的資本価値: ${total}`,
    `組織タイプ: ${type.label}`,
    `ESG投資適格性: ${esgScore || "--"} / ${esgStatus.label}`,
    `強み: ${strong}`,
    `伸びしろ: ${weak}`,
    orgText,
    scenarioText,
    `カテゴリスコア: ${scoreText}`,
    "画面構成: 中央に人的資本価値の大きな円形指標、左に組織OSと探究度数、右にESG投資適格性と事業性、下部にwell-being波及と組織のばらつきが見えるグラフ群。",
    "表現方針: 投資家・経営会議で見せられる清潔で信頼感のあるSaaSダッシュボード。細かい文字は入れず、カード、チャート、ネットワーク、レーダー、バーで数値評価の雰囲気を表現。過度な装飾なし、明るい自然光、プロフェッショナル。"
  ].join("\n");

  return resultImagePromptText.value;
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

function generateLocalScenarioImage() {
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

function generateLocalResultDashboardImage() {
  if (!resultImageCanvas) return;
  const canvas = resultImageCanvas;
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  const scores = allScores();
  const total = weightedScore(scores);
  const type = organizationType(scores);
  const esgScore = esgCompositeScore();
  const scenario = state.scenario;
  const stats = state.assessmentMode === "organization" ? organizationStats() : null;

  buildResultDashboardPrompt();
  resultImageBadge.textContent = "プレビュー";

  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, "#f7fbf8");
  gradient.addColorStop(0.5, "#e9f5ef");
  gradient.addColorStop(1, "#eef4fb");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = "rgba(30, 125, 91, 0.08)";
  ctx.beginPath();
  ctx.arc(1080, 110, 250, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "rgba(45, 104, 177, 0.07)";
  ctx.beginPath();
  ctx.arc(120, 660, 280, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#16201d";
  ctx.font = "800 39px sans-serif";
  fitText(ctx, "統合結果ダッシュボード", 58, 68, 720, 46, 1);
  ctx.font = "600 18px sans-serif";
  ctx.fillStyle = "#52605b";
  fitText(ctx, `${state.assessmentMode === "organization" ? "組織" : "個人"} / ${type.label} / ESG ${esgScore || "--"}`, 60, 105, 820, 28, 1);

  drawNode(ctx, {
    x: 60,
    y: 150,
    w: 360,
    h: 260,
    fill: "#1e7d5b",
    color: "#ffffff",
    bodyColor: "#eaf6f0",
    title: `人的資本 ${total}`,
    body: `強み: ${strongestCategories(scores, 2).map((item) => item.short).join(" / ")}\n伸びしろ: ${weakestCategories(scores, 2).map((item) => item.short).join(" / ")}`
  });

  const cardNodes = [
    ["組織OS", Math.round((scores.autonomy + scores.project + scores.leadership) / 3), 460, 150, "#ffffff"],
    ["well-being", Math.round((scores.orgWellbeing + scores.regional) / 2), 790, 150, "#ffffff"],
    ["ESG適格性", esgScore || 0, 460, 324, "#ffffff"],
    ["事業性", scenario ? scenario.scores.businessPotential : scores.business, 790, 324, "#ffffff"]
  ];
  cardNodes.forEach(([label, value, x, y, fill]) => {
    drawNode(ctx, {
      x,
      y,
      w: 290,
      h: 136,
      fill,
      title: `${label} ${value || "--"}`,
      body: label === "ESG適格性" ? esgGrade(esgScore).label : "指標を統合して可視化"
    });
    ctx.fillStyle = "#d9e1dc";
    drawRoundedRect(ctx, x + 22, y + 102, 180, 12, 6);
    ctx.fill();
    ctx.fillStyle = label === "ESG適格性" ? "#b85353" : "#1f8a99";
    drawRoundedRect(ctx, x + 22, y + 102, 180 * ((value || 0) / 100), 12, 6);
    ctx.fill();
  });

  const barItems = categories.map((category) => [category.short, scores[category.id]]);
  const barX = 60;
  const barY = 460;
  ctx.fillStyle = "#ffffff";
  drawRoundedRect(ctx, barX, barY, 670, 196, 18);
  ctx.fill();
  ctx.strokeStyle = "rgba(22, 32, 29, 0.1)";
  ctx.stroke();
  ctx.fillStyle = "#16201d";
  ctx.font = "800 22px sans-serif";
  ctx.fillText("カテゴリ別スコア", barX + 24, barY + 38);
  barItems.forEach(([label, value], index) => {
    const x = barX + 26 + (index % 2) * 320;
    const y = barY + 68 + Math.floor(index / 2) * 32;
    ctx.fillStyle = "#52605b";
    ctx.font = "700 14px sans-serif";
    ctx.fillText(label, x, y + 11);
    ctx.fillStyle = "#e2ebe5";
    drawRoundedRect(ctx, x + 92, y, 170, 12, 6);
    ctx.fill();
    ctx.fillStyle = value >= 70 ? "#1e7d5b" : value >= 55 ? "#bd7b22" : "#b85353";
    drawRoundedRect(ctx, x + 92, y, 170 * (value / 100), 12, 6);
    ctx.fill();
    ctx.fillStyle = "#16201d";
    ctx.fillText(String(value), x + 274, y + 12);
  });

  drawNode(ctx, {
    x: 760,
    y: 500,
    w: 360,
    h: 156,
    fill: "#ffffff",
    title: stats ? `ばらつき ${stats.variance}` : "AIシナリオ",
    body: stats
      ? `合意度 ${stats.consensus} / 回答者 ${stats.respondents.length}/${stats.members.length} / カバー率 ${stats.coverage}%`
      : scenario
        ? `総合指数 ${scenario.scores.impactIndex} / 市場 ${scenario.scores.marketFit} / WB ${scenario.scores.wellbeingImpact}`
        : "02を完了すると実践判断が反映されます"
  });
}

async function generateScenarioImage() {
  const prompt = buildImagePrompt();
  imagePromptText.value = prompt;
  generateImageButton.disabled = true;
  generateImageButton.textContent = "AI生成中";

  try {
    const response = await fetch(`${AI_IMAGE_API}/api/image-generate`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ prompt })
    });
    if (!response.ok) throw new Error(await response.text());

    const data = await response.json();
    const image = new Image();
    image.onload = () => {
      const canvas = generatedImageCanvas;
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    };
    image.src = `data:image/png;base64,${data.imageBase64}`;
  } catch (error) {
    console.warn("AI image generation failed. Falling back to local canvas.", error);
    generateLocalScenarioImage();
  } finally {
    generateImageButton.disabled = false;
    generateImageButton.textContent = "AI画像生成";
  }
}

async function generateResultDashboardImage() {
  const prompt = buildResultDashboardPrompt();
  generateResultImageButton.disabled = true;
  generateResultImageButton.textContent = "image2生成中";
  resultImageBadge.textContent = "生成中";

  try {
    const response = await fetch(`${AI_IMAGE_API}/api/image-generate`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ prompt })
    });
    if (!response.ok) throw new Error(await response.text());

    const data = await response.json();
    const image = new Image();
    image.onload = () => {
      const canvas = resultImageCanvas;
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
      resultImageBadge.textContent = "image2生成済み";
    };
    image.src = `data:image/png;base64,${data.imageBase64}`;
  } catch (error) {
    console.warn("AI result dashboard image generation failed. Falling back to local canvas.", error);
    generateLocalResultDashboardImage();
    resultImageBadge.textContent = "ローカル表示";
  } finally {
    generateResultImageButton.disabled = false;
    generateResultImageButton.textContent = "image2で結果画像生成";
  }
}

function renderScenario() {
  ensureScenarioStarted();
  const plan = state.scenarioPlan;
  const analysis = plan?.industryAnalysis || {};
  scenarioCompanyGrid.innerHTML = plan ? [
    ["生成方式", plan.source || "--"],
    ["業界ヒント", scenarioIndustryHint?.value || "AI自動判定"],
    ["重点テーマ", scenarioThemeHint?.value || "AIに任せる"],
    ["推定業界", plan.inferredIndustry || "--"],
    ["分析確信度", analysis.confidence !== undefined ? `${analysis.confidence}%` : "--"],
    ["対象組織", plan.companyName || companyNameInput.value.trim() || "--"],
    ["事業モデル", analysis.businessModel || "--"],
    ["顧客セグメント", (analysis.customerSegments || []).join(" / ") || plan.market || "--"],
    ["競合候補（社名）", (plan.competitors || []).join(" / ") || "--"],
    ["競合設定の根拠", analysis.competitorBasis || "--"],
    ["推奨テーマ", analysis.recommendedScenarioTheme || plan.storySeed || "--"]
  ].map(([label, value]) => `
    <div class="context-chip">
      <span>${label}</span>
      <strong>${escapeHTML(value)}</strong>
    </div>
  `).join("") : "";
  scenarioStageBadge.textContent =
    state.scenarioMode === "collecting" ? "情報収集中" :
    state.scenarioMode === "scenes" ? `場面 ${state.scenarioSceneIndex + 1} / ${activeScenarioScenes().length}` :
        "完了";
  const lastResponse = state.scenarioResponses[state.scenarioResponses.length - 1];
  aiStatusBadge.textContent = lastResponse?.aiUsed ? "AI API接続" : "ローカル評価";

  const currentField = state.scenarioMode === "collecting" ? scenarioCurrentField() : null;
  if (currentField?.options?.length) {
    scenarioOptions.innerHTML = `
      <span>選択肢</span>
      <div class="option-chip-row">
        ${currentField.options.map((option) => `<button class="option-chip" type="button" data-scenario-option="${escapeHTML(option)}">${escapeHTML(option)}</button>`).join("")}
      </div>
    `;
  } else if (state.scenarioMode === "scenes") {
    scenarioOptions.innerHTML = `
      <span>回答に含めると測定されやすい観点</span>
      <div class="option-chip-row">
        ${["制約条件", "利害対立", "競合対応", "ステークホルダー", "仮説検証", "KPI", "撤退基準", "未判断リスク", "well-being", "ESG開示"].map((option) => `<button class="option-chip" type="button" data-scenario-option="${escapeHTML(option)}">${escapeHTML(option)}</button>`).join("")}
      </div>
    `;
  } else {
    scenarioOptions.innerHTML = "";
  }

  scenarioChat.innerHTML = state.scenarioMessages.map((message) => `
    <article class="chat-message ${message.role}">
      <strong>${message.role === "ai" ? "AIシミュレーター" : "あなた"}</strong>
      <p>${escapeHTML(message.text).replaceAll("\n", "<br>")}</p>
      ${message.meta ? `<p>${escapeHTML(message.meta).replaceAll("\n", "<br>")}</p>` : ""}
    </article>
  `).join("");
  scenarioChat.scrollTop = scenarioChat.scrollHeight;

  const contextItems = scenarioFields.map((field) => [
    field.label,
    state.scenarioContext[field.id] || "未入力"
  ]);
  scenarioContextList.innerHTML = contextItems.map(([label, value]) => `
    <div class="context-chip">
      <span>${label}</span>
      <strong>${escapeHTML(value)}</strong>
    </div>
  `).join("");

  if (!state.scenario) {
    scenarioScoreBadge.textContent = "未生成";
    scenarioScoreGrid.innerHTML = [
      ["探究", "--"],
      ["組織調整", "--"],
      ["WB感度", "--"],
      ["事業性", "--"],
      ["ESG説明", "--"],
      ["総合指数", "--"]
    ].map(([label, value]) => `
      <article class="scenario-score">
        <span>${label}</span>
        <strong>${value}</strong>
        <div class="meter"><i style="width:0%"></i></div>
      </article>
    `).join("");
    scenarioOutput.innerHTML = "";
    generateLocalScenarioImage();
    return;
  }

  const scenario = state.scenario;
  const scores = scenario.scores;
  const judgement = scenario.judgement;
  scenarioScoreBadge.textContent = `総合 ${scores.impactIndex}`;
  const scoreItems = [
    ["探究", judgement.inquiry],
    ["組織調整", judgement.org],
    ["WB感度", judgement.wellbeing],
    ["事業性", judgement.business],
    ["ESG説明", judgement.esg],
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
      title: "場面回答の測定",
      body: `${state.scenarioResponses.length} / ${activeScenarioScenes().length}場面を回答済みです。`,
      list: state.scenarioResponses.map((item) => `${item.scene}: 探究${item.score.inquiry} / 組織${item.score.org} / WB${item.score.wellbeing} / 事業${item.score.business} / ESG${item.score.esg}`).map(escapeHTML)
    },
    {
      title: "主要ステークホルダー",
      body: "プロジェクト開始時に巻き込む相手です。",
      list: scenario.stakeholders.map(escapeHTML)
    },
    {
      title: "競合・市場プレイヤー",
      body: plan ? `${escapeHTML(plan.inferredIndustry || "推定業界")}の市場文脈を反映しています。` : "会社別シナリオを生成すると、競合や市場プレイヤーがここに表示されます。",
      list: plan ? [...(plan.competitors || []), ...(plan.marketPlayers || [])].slice(0, 6).map(escapeHTML) : ["AIで会社別シナリオ生成を実行"]
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

function buildRecommendationContext() {
  const scores = allScores();
  const esg = allEsgScores();
  const esgScore = esgCompositeScore();
  const type = organizationType(scores);
  const stats = state.assessmentMode === "organization" ? organizationStats() : null;
  return {
    mode: state.assessmentMode,
    round: state.round,
    company: {
      inputName: companyNameInput.value.trim(),
      inputUrl: websiteUrlInput.value.trim(),
      aiAnalysis: state.websiteAssessment
    },
    totalHumanCapital: weightedScore(scores),
    organizationType: type,
    scores,
    esgScores: esg,
    esgCompositeScore: esgScore,
    esgGrade: esgGrade(esgScore),
    weakestCategories: weakestCategories(scores, 3).map((category) => ({
      id: category.id,
      label: category.label,
      score: scores[category.id]
    })),
    strongestCategories: strongestCategories(scores, 3).map((category) => ({
      id: category.id,
      label: category.label,
      score: scores[category.id]
    })),
    organizationStats: stats ? {
      respondents: stats.respondents.length,
      members: stats.members.length,
      average: stats.average,
      variance: stats.variance,
      consensus: stats.consensus,
      coverage: stats.coverage,
      categorySpread: stats.categorySpread.slice(0, 5)
    } : null,
    scenario: state.scenario ? {
      title: state.scenario.title,
      story: state.scenario.story,
      context: state.scenario.context,
      scores: state.scenario.scores,
      judgement: state.scenario.judgement,
      experiments: state.scenario.experiments,
      risks: state.scenario.risks,
      stakeholders: state.scenario.stakeholders
    } : null
  };
}

function localAiRecommendations() {
  const scores = allScores();
  const weak = weakestCategories(scores, 3);
  const type = organizationType(scores);
  const total = weightedScore(scores);
  const esgScore = esgCompositeScore();
  const stats = state.assessmentMode === "organization" ? organizationStats() : null;
  const source = state.websiteAssessment?.companyName || companyNameInput.value.trim() || "この組織";
  const lift = (value, amount = 10) => clamp((value || 0) + amount);
  return {
    source: "ローカルAI組織別提案",
    summary: `${source}の診断結果をもとに、弱点補強とESG適格性を同時に高める提案です。`,
    cards: [
      {
        title: `${source}向け優先テーマ`,
        body: `${type.label}の状態を前提に、${weak.map((item) => item.label).join("、")}を90日間の重点テーマにします。`,
        target: `総合人的資本価値 ${total} -> ${lift(total, 10)}`,
        list: weak.map((item) => `${item.short}を${scores[item.id]}点から${lift(scores[item.id], 12)}点へ引き上げる`)
      },
      {
        title: "組織OSアクション",
        body: "会議、権限移譲、情報共有、振り返りを再設計し、現場発のプロジェクトが進む組織習慣を作ります。",
        target: `自律分散 ${scores.autonomy} -> ${lift(scores.autonomy)} / プロジェクト型 ${scores.project} -> ${lift(scores.project)}`,
        list: ["意思決定できる範囲を部署ごとに明文化する", "週次で課題、実験、学びを共有する", "部署横断の小さな実証枠を3件作る"]
      },
      {
        title: "改善タスクフォース",
        body: "次世代リーダー、取締役、各部署、現場メンバーを招聘し、診断結果を実装に変える推進チームを組成します。",
        target: stats ? `合意度 ${stats.consensus} -> ${lift(stats.consensus, 8)} / ばらつき ${stats.variance} -> ${Math.max(0, stats.variance - 5)}` : "90日で3テーマを実証、部署横断参加率70%以上",
        list: ["経営スポンサーを1名置く", "各部署から実装担当を1名ずつ選ぶ", "月1回の取締役レビューでKPIを更新する"]
      },
      {
        title: "ESG投資適格性",
        body: "人的資本、well-being、地域インパクトを投資家向けの非財務価値として説明できる状態に整えます。",
        target: `ESG Readiness ${esgScore || 0} -> ${lift(esgScore || 0, 12)}`,
        list: ["業界比較で当社の強みを定義する", "人的資本・地域インパクトKPIを3つ設定する", "改善ロードマップを四半期単位で開示できる形にする"]
      },
      {
        title: "TLA組織開発プログラム",
        body: "AIリサーチ、問いの設定、業界比較、KPI設計を実プロジェクトに接続します。",
        target: `探究度数 ${scores.inquiry} -> ${lift(scores.inquiry)} / リーダーシップ ${scores.leadership} -> ${lift(scores.leadership)}`,
        list: ["TLA受講者を次世代リーダー候補から選抜する", "90日プロジェクトを教材ではなく実案件で設計する", "Before/Afterで人的資本価値を再測定する"]
      }
    ]
  };
}

async function generateAiRecommendations() {
  generateAiRecommendationsButton.disabled = true;
  generateAiRecommendationsButton.textContent = "AI提案生成中";
  aiRecommendationBadge.textContent = "AI生成中";
  aiRecommendationMemo.textContent = "AIが診断結果、組織タイプ、ESG、ばらつき、AI解析、AIシナリオを読み取り、組織別提案を作成しています。";

  try {
    const response = await fetch(`${AI_SCENARIO_API}/api/recommendations`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(buildRecommendationContext())
    });
    if (!response.ok) throw new Error(await response.text());
    state.aiRecommendations = await response.json();
    aiRecommendationBadge.textContent = "AI組織別提案";
    aiRecommendationMemo.textContent = state.aiRecommendations.summary || "AIがこの組織に合わせた提案カードを生成しました。";
  } catch (error) {
    console.warn("AI recommendations failed. Falling back to local organization proposal.", error);
    state.aiRecommendations = localAiRecommendations();
    aiRecommendationBadge.textContent = "ローカルAI提案";
    aiRecommendationMemo.textContent = state.aiRecommendations.summary;
  } finally {
    generateAiRecommendationsButton.disabled = false;
    generateAiRecommendationsButton.textContent = "AIで組織別提案を生成";
    renderRecommendations();
  }
}

function resetAiRecommendations() {
  state.aiRecommendations = null;
  aiRecommendationBadge.textContent = "標準提案";
  aiRecommendationMemo.textContent = "AI解析、診断スコア、組織モードのばらつき、AIシナリオ結果をもとに、この組織に属した提案へ更新できます。";
  renderRecommendations();
}

function renderRecommendationCards(cards, className = "") {
  recommendationGrid.innerHTML = cards.map((card) => `
    <article class="recommendation-card ${className}">
      <strong>${escapeHTML(card.title)}</strong>
      <p>${escapeHTML(card.body)}</p>
      <div class="target-box">
        <span>数値目標</span>
        <b>${escapeHTML(card.target)}</b>
      </div>
      <ul>${(card.list || []).map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ul>
    </article>
  `).join("");
}

function standardRecommendationCards() {
  const scores = allScores();
  const weak = weakestCategories(scores, 3);
  const type = organizationType(scores);
  const total = weightedScore(scores);
  const scenario = state.scenario;
  const esgScore = esgCompositeScore();
  const esgStatus = esgGrade(esgScore);
  const liftTarget = (value, lift = 12) => clamp((value || 0) + lift);
  const targetText = (label, current, target) => `${label}: ${current || "--"} -> ${target}`;
  const scenarioScores = scenario?.scores;
  return [
    {
      title: "優先テーマ",
      body: `${weak.map((item) => item.label).join("、")}を90日間の改善テーマにします。総合スコアは${total}です。`,
      target: targetText("総合人的資本価値", total, liftTarget(total, 10)),
      list: weak.map((item) => `${item.short}: ${scores[item.id]}点`)
    },
    {
      title: "実践プロジェクト案",
      body: scenario ? scenario.title : "地域または組織の実課題を題材に、学習と事業仮説を同時に検証します。",
      target: scenarioScores
        ? targetText("AIシナリオ総合指数", scenarioScores.impactIndex, liftTarget(scenarioScores.impactIndex, 8))
        : "30日以内に最小実証を1件開始",
      list: scenario ? scenario.experiments : [
          "地域の困りごとを1つ選び、関係者5名にヒアリングする",
          "AIで先行事例、顧客、収益モデルを整理する",
          "30日以内に試せる最小サービスを設計する"
        ]
    },
    {
      title: "文脈スコア",
      body: scenario ? `AIシナリオ総合指数は${scenario.scores.impactIndex}です。事業性とwell-beingの両面から実証優先度を判断します。` : "AIシナリオを生成すると、文脈を加味した事業性とwell-beingインパクトがここに反映されます。",
      target: scenarioScores
        ? `市場適合 ${scenarioScores.marketFit} -> ${liftTarget(scenarioScores.marketFit, 8)} / 実行リスク ${scenarioScores.executionRisk} -> ${Math.max(0, scenarioScores.executionRisk - 8)}`
        : "AIシナリオ5場面を完了し、文脈スコアを算出",
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
      body: `現在のESG Readinessは${esgScore || "--"}点、判定は「${esgStatus.label}」です。業界比較を行い、当社の人的資本・well-being・地域インパクト上の強みを投資家向けに確定します。`,
      target: targetText("ESG Readiness", esgScore || 0, liftTarget(esgScore || 0, 12)),
      list: [
        "同業他社の人的資本、ESG、地域インパクト開示を比較する",
        "当社の強みを非財務価値、競争優位、成長ストーリーとして定義する",
        "ESG適格性に必要なKPI、根拠データ、改善ロードマップを整える"
      ]
    },
    {
      title: "組織OSアクション",
      body: `${type.label}として、組織開発を経営課題として扱い、部署横断で改善サイクルを回します。`,
      target: `自律分散 ${scores.autonomy} -> ${liftTarget(scores.autonomy)} / プロジェクト型 ${scores.project} -> ${liftTarget(scores.project)}`,
      list: [
        "自律分散、プロジェクト型、分散型リーダーシップの現状ギャップを可視化する",
        "会議、権限移譲、情報共有、振り返りの組織習慣を設計し直す",
        ...recommendationFor(weak[0].id).slice(0, 1)
      ]
    },
    {
      title: "改善タスクフォース",
      body: "次世代リーダー候補、取締役、各部署、現場メンバーを招聘し、診断結果を実装に変える推進チームを組成します。",
      target: "90日で3テーマを実証、月1回の取締役レビュー、部署横断参加率70%以上",
      list: [
        "取締役または経営層がスポンサーとなり、改善テーマの優先順位を決める",
        "各部署と現場メンバーが課題、制約、実行アイデアを持ち寄る",
        "90日単位で実験、測定、開示ストーリー化まで進める"
      ]
    },
    {
      title: "TLA組織開発プログラム",
      body: "改善タスクフォースの共通言語を作るため、TLAプログラム受講を推奨します。学習だけで終えず、実プロジェクトに接続します。",
      target: `探究度数 ${scores.inquiry} -> ${liftTarget(scores.inquiry, 10)} / リーダーシップ ${scores.leadership} -> ${liftTarget(scores.leadership, 12)}`,
      list: [
        "人的資本価値、well-being、ESGを統合して理解する",
        "AIリサーチ、問いの設定、業界比較、KPI設計を実践する",
        "組織開発テーマを90日プロジェクトとして設計する"
      ]
    },
    {
      title: "AIシミュレーション",
      body: "上司、地域住民、顧客、自治体担当者の反応をAIが演じ、提案の実践力を測ります。",
      target: "5場面×2回の再演習で、実践判断スコア80点以上を目指す",
      list: [
        "提案への反論対応",
        "地域関係者との合意形成",
        "事業性と社会性の両立"
      ]
    },
    {
      title: "次回測定",
      body: "90日後に同じ診断を行い、人的資本価値とwell-beingインパクトの伸びを比較します。",
      target: `Before比 +10点以上、組織well-being ${scores.orgWellbeing} -> ${liftTarget(scores.orgWellbeing, 10)}`,
      list: [
        "Before / Afterスコア",
        "組織タイプの変化",
        "事業成熟度の変化"
      ]
    }
  ];
}

function activeRecommendationCards() {
  return state.aiRecommendations?.cards?.length ? state.aiRecommendations.cards : standardRecommendationCards();
}

function renderRecommendations() {
  if (state.aiRecommendations?.cards?.length) {
    aiRecommendationBadge.textContent = state.aiRecommendations.source || "AI組織別提案";
    aiRecommendationMemo.textContent = state.aiRecommendations.summary || "AIがこの組織に合わせた提案カードを生成しました。";
    renderRecommendationCards(state.aiRecommendations.cards, "is-ai-generated");
    return;
  }

  aiRecommendationBadge.textContent = "標準提案";
  renderRecommendationCards(standardRecommendationCards());
}

function reportSubjectName() {
  return state.websiteAssessment?.companyName || companyNameInput.value.trim() || "対象組織";
}

function reportDateText() {
  return new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(new Date());
}

function reportMetric(label, value, note = "") {
  return `
    <article class="metric">
      <span>${escapeHTML(label)}</span>
      <strong>${escapeHTML(value)}</strong>
      ${note ? `<small>${escapeHTML(note)}</small>` : ""}
    </article>
  `;
}

function reportScoreTable(scores) {
  return `
    <table>
      <thead><tr><th>評価領域</th><th>スコア</th><th>取締役会での読み方</th></tr></thead>
      <tbody>
        ${categories.map((category) => `
          <tr>
            <td>${escapeHTML(category.label)}</td>
            <td>${scores[category.id]}</td>
            <td>${escapeHTML(category.description)}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

function reportEsgTable(esgScores) {
  return `
    <table>
      <thead><tr><th>ESG評価領域</th><th>スコア</th><th>説明責任上の観点</th></tr></thead>
      <tbody>
        ${esgCategories.map((category) => `
          <tr>
            <td>${escapeHTML(category.label)}</td>
            <td>${esgScores[category.id]}</td>
            <td>${escapeHTML(category.description)}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

function reportList(items) {
  return `<ul>${items.filter(Boolean).map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ul>`;
}

function reportRecommendationCardsHtml(cards) {
  return cards.map((card) => `
    <article class="proposal">
      <h3>${escapeHTML(card.title)}</h3>
      <p>${escapeHTML(card.body)}</p>
      <div class="target">数値目標: ${escapeHTML(card.target || "未設定")}</div>
      ${reportList(card.list || [])}
    </article>
  `).join("");
}

function boardReportShell(title, subtitle, bodyHtml) {
  return `<!doctype html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>${escapeHTML(title)}</title>
  <style>
    @page { size: A4; margin: 14mm; }
    * { box-sizing: border-box; }
    body { margin: 0; color: #17211d; font-family: "Hiragino Sans", "Yu Gothic", "Meiryo", Arial, sans-serif; line-height: 1.65; background: #fff; }
    .report { max-width: 1040px; margin: 0 auto; padding: 24px; }
    header { border-bottom: 3px solid #1e7d5b; padding-bottom: 18px; margin-bottom: 22px; }
    .eyebrow { color: #1e7d5b; font-size: 12px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; }
    h1 { margin: 6px 0 8px; font-size: 28px; line-height: 1.25; }
    h2 { margin: 26px 0 10px; font-size: 18px; border-left: 5px solid #1e7d5b; padding-left: 10px; break-after: avoid; }
    h3 { margin: 0 0 6px; font-size: 15px; }
    p { margin: 0 0 10px; }
    .meta { color: #58645f; display: flex; gap: 18px; flex-wrap: wrap; font-size: 12px; }
    .summary { border: 1px solid #d9e1dc; background: #f7faf8; padding: 14px; border-radius: 8px; }
    .metrics { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin: 14px 0; }
    .metric { border: 1px solid #d9e1dc; border-radius: 8px; padding: 10px; min-height: 86px; }
    .metric span { display: block; color: #66736e; font-size: 11px; }
    .metric strong { display: block; margin-top: 4px; font-size: 24px; }
    .metric small { display: block; color: #66736e; font-size: 10px; line-height: 1.45; }
    table { width: 100%; border-collapse: collapse; margin: 10px 0 16px; font-size: 12px; }
    th, td { border: 1px solid #d9e1dc; padding: 8px; vertical-align: top; }
    th { background: #edf5f1; text-align: left; }
    ul { margin: 8px 0 0; padding-left: 18px; }
    li { margin: 3px 0; }
    .grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
    .proposal, .note { border: 1px solid #d9e1dc; border-radius: 8px; padding: 12px; break-inside: avoid; }
    .proposal p { color: #3f4b46; }
    .target { margin: 8px 0; padding: 8px; background: #eef6f2; border-radius: 6px; font-weight: 700; color: #1e7d5b; font-size: 12px; }
    .page-break { break-before: page; }
    footer { margin-top: 24px; padding-top: 12px; border-top: 1px solid #d9e1dc; color: #66736e; font-size: 10px; }
    @media print {
      .report { padding: 0; }
      .no-print { display: none; }
      a { color: inherit; text-decoration: none; }
    }
  </style>
</head>
<body>
  <main class="report">
    <header>
      <div class="eyebrow">Board Report</div>
      <h1>${escapeHTML(title)}</h1>
      <p>${escapeHTML(subtitle)}</p>
      <div class="meta">
        <span>対象: ${escapeHTML(reportSubjectName())}</span>
        <span>作成日: ${escapeHTML(reportDateText())}</span>
        <span>モード: ${state.assessmentMode === "organization" ? "組織モード" : "個人モード"}</span>
      </div>
    </header>
    ${bodyHtml}
    <footer>
      本レポートはAI解析、自己診断、組織回答、AIシナリオの結果を統合した取締役会向けドラフトです。投資判断、開示、対外説明に用いる場合は、根拠資料、監査可能なデータ、法務・IR確認を経て確定してください。
    </footer>
  </main>
  <script>
    window.addEventListener("load", () => {
      setTimeout(() => window.print(), 300);
    });
  </script>
</body>
</html>`;
}

function buildResultsBoardReportHtml() {
  const scores = allScores();
  const esgScores = allEsgScores();
  const total = weightedScore(scores);
  const esgScore = esgCompositeScore();
  const esgStatus = esgGrade(esgScore);
  const type = organizationType(scores);
  const strong = strongestCategories(scores, 3);
  const weak = weakestCategories(scores, 3);
  const stats = state.assessmentMode === "organization" ? organizationStats() : null;
  const scenario = state.scenario;
  const body = `
    <section class="summary">
      <h2>エグゼクティブサマリー</h2>
      <p>${escapeHTML(reportSubjectName())}の人的資本価値は${total}点です。組織タイプは「${escapeHTML(type.label)}」、ESG Readinessは${esgScore}点で「${escapeHTML(esgStatus.label)}」です。強みは${strong.map((item) => item.label).join("、")}、優先改善領域は${weak.map((item) => item.label).join("、")}です。</p>
      <p>${escapeHTML(type.description)}</p>
    </section>

    <section>
      <h2>重要指標</h2>
      <div class="metrics">
        ${reportMetric("総合人的資本価値", `${total}/100`, "8領域の加重平均")}
        ${reportMetric("組織タイプ", type.label, "自律分散度とプロジェクト型成熟度")}
        ${reportMetric("ESG Readiness", `${esgScore}/100`, esgStatus.body)}
        ${reportMetric("AIシナリオ総合", scenario ? `${scenario.scores.impactIndex}/100` : "未実施", scenario ? "実践判断を反映" : "02完了後に反映")}
      </div>
      ${stats ? `<div class="metrics">
        ${reportMetric("回答者数", `${stats.respondents.length}名`, `登録 ${stats.members.length}名`)}
        ${reportMetric("組織平均", `${stats.average}/100`, "回答者の人的資本価値平均")}
        ${reportMetric("ばらつき", `${stats.variance}`, "低いほど認識が揃っている")}
        ${reportMetric("合意度", `${stats.consensus}/100`, `回答カバー率 ${stats.coverage}%`)}
      </div>` : ""}
    </section>

    <section>
      <h2>人的資本・組織OS・well-being評価</h2>
      ${reportScoreTable(scores)}
    </section>

    <section>
      <h2>ESG投資適格性評価</h2>
      <p>${escapeHTML(esgStatus.body)}</p>
      ${reportEsgTable(esgScores)}
    </section>

    <section>
      <h2>AIシナリオによる実践判断</h2>
      ${scenario ? `
        <p>${escapeHTML(scenario.story)}</p>
        <div class="metrics">
          ${reportMetric("市場適合", `${scenario.scores.marketFit}/100`)}
          ${reportMetric("組織実装力", `${scenario.scores.orgReadiness}/100`)}
          ${reportMetric("well-beingインパクト", `${scenario.scores.wellbeingImpact}/100`)}
          ${reportMetric("実行リスク", `${scenario.scores.executionRisk}/100`, "低減対象")}
        </div>
        <div class="grid">
          <article class="note"><h3>主要リスク</h3>${reportList(scenario.risks)}</article>
          <article class="note"><h3>次の実証</h3>${reportList(scenario.experiments)}</article>
        </div>
      ` : `<p>AIシナリオが未完了のため、実践判断、競合対応、ステークホルダー対応の評価は未反映です。</p>`}
    </section>

    <section>
      <h2>取締役会での意思決定事項</h2>
      ${reportList([
        "人的資本価値を経営KPIとして継続測定するか",
        `優先改善領域「${weak.map((item) => item.label).join("、")}」に90日間の実証予算と責任者を置くか`,
        "ESG投資適格性に向けて、人的資本・well-being・地域インパクトの開示KPIを設定するか",
        "改善タスクフォースとTLA組織開発プログラムを開始するか"
      ])}
    </section>
  `;
  return boardReportShell("人的資本価値・well-being統合診断レポート", "取締役会提出用の診断結果、ESG適格性、組織OS、AIシナリオ評価の統合報告です。", body);
}

function buildRecommendationsBoardReportHtml() {
  const scores = allScores();
  const total = weightedScore(scores);
  const esgScore = esgCompositeScore();
  const esgStatus = esgGrade(esgScore);
  const type = organizationType(scores);
  const cards = activeRecommendationCards();
  const weak = weakestCategories(scores, 3);
  const stats = state.assessmentMode === "organization" ? organizationStats() : null;
  const source = state.aiRecommendations?.source || "標準提案";
  const body = `
    <section class="summary">
      <h2>提案方針</h2>
      <p>${escapeHTML(reportSubjectName())}は、総合人的資本価値${total}点、組織タイプ「${escapeHTML(type.label)}」、ESG Readiness ${esgScore}点「${escapeHTML(esgStatus.label)}」です。本提案は、${weak.map((item) => item.label).join("、")}を重点改善領域とし、90日で事業性とwell-beingを同時に高める実装計画です。</p>
      <p>提案生成方式: ${escapeHTML(source)}</p>
    </section>

    <section>
      <h2>経営判断に必要なKPI</h2>
      <div class="metrics">
        ${reportMetric("人的資本価値", `${total}/100`, "90日後に+10点以上を目標")}
        ${reportMetric("自律分散", `${scores.autonomy}/100`)}
        ${reportMetric("プロジェクト型成熟度", `${scores.project}/100`)}
        ${reportMetric("ESG Readiness", `${esgScore}/100`, esgStatus.label)}
      </div>
      ${stats ? `<div class="metrics">
        ${reportMetric("合意度", `${stats.consensus}/100`, "組織内認識の揃い方")}
        ${reportMetric("ばらつき", `${stats.variance}`, "部署・メンバー差")}
        ${reportMetric("カバー率", `${stats.coverage}%`, "回答網羅性")}
        ${reportMetric("回答者", `${stats.respondents.length}名`, "組織評価の母数")}
      </div>` : ""}
    </section>

    <section>
      <h2>取締役会提出用 提案カード</h2>
      <div class="grid">${reportRecommendationCardsHtml(cards)}</div>
    </section>

    <section class="page-break">
      <h2>90日実行ロードマップ</h2>
      <table>
        <thead><tr><th>期間</th><th>実行内容</th><th>責任主体</th><th>成果物</th></tr></thead>
        <tbody>
          <tr><td>0-30日</td><td>業界比較、当社の強み確定、改善テーマ選定</td><td>取締役スポンサー、改善タスクフォース</td><td>重点テーマ、KPI、リスク台帳</td></tr>
          <tr><td>31-60日</td><td>TLA受講、AIリサーチ、実証プロジェクト設計</td><td>次世代リーダー、各部署、現場メンバー</td><td>実証計画、関係者マップ、測定設計</td></tr>
          <tr><td>61-90日</td><td>小規模実証、効果測定、取締役会レビュー</td><td>タスクフォース、経営会議</td><td>Before/After、ESG開示ストーリー、次期投資判断</td></tr>
        </tbody>
      </table>
    </section>

    <section>
      <h2>承認依頼事項</h2>
      ${reportList([
        "改善タスクフォースの設置と取締役スポンサーの任命",
        "TLA組織開発プログラムの受講枠と実証予算の確保",
        "人的資本価値、組織well-being、地域well-being、ESG Readinessを四半期KPIとして扱うこと",
        "90日後の取締役会で再測定結果と投資判断を審議すること"
      ])}
    </section>
  `;
  return boardReportShell("ESG・組織開発・TLA実践提案レポート", "取締役会提出用の改善提案、数値目標、90日ロードマップ、承認事項です。", body);
}

function openPdfReport(kind) {
  updateAll();
  const html = kind === "recommendations" ? buildRecommendationsBoardReportHtml() : buildResultsBoardReportHtml();
  const win = window.open("", "_blank");
  if (!win) {
    const blob = new Blob([html], { type: "text/html;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = kind === "recommendations" ? "board-proposal-report.html" : "board-results-report.html";
    link.click();
    URL.revokeObjectURL(link.href);
    return;
  }
  win.document.open();
  win.document.write(html);
  win.document.close();
}

function renderGrowth() {
  const before = allScores("before");
  const after = allScores("after");
  const hasBefore = state.assessmentMode === "organization"
    ? state.organization.members.some((member) => hasRoundAnswers(member, "before"))
    : Object.keys(state.answers.before).length > 0;
  const hasAfter = state.assessmentMode === "organization"
    ? state.organization.members.some((member) => hasRoundAnswers(member, "after"))
    : Object.keys(state.answers.after).length > 0;

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
  const subject = state.assessmentMode === "organization" ? "組織の総合人的資本価値" : "総合人的資本価値";
  growthNarrative.textContent = `${subject}は${beforeTotal}点から${afterTotal}点に変化しました。伸びた領域を次のプロジェクトに接続し、停滞した領域は教育コンテンツと組織習慣で補強します。`;

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
  renderModeControls();
  updateCounters();
  renderScores();
  renderOrganizationPanel();
  renderMatrix();
  drawRadar();
  renderSummary();
  generateLocalResultDashboardImage();
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
      currentEsgAnswers()[esgQuestionKey(category.id, questionIndex)] = Math.min(5, base + adjustment);
    });
  });
  renderEsgForm();
}

function scenarioSample() {
  state.scenarioPlan = null;
  state.scenarioMode = "complete";
  state.scenarioFieldIndex = scenarioFields.length;
  state.scenarioSceneIndex = activeScenarioScenes().length;
  state.scenarioContext = {
    industry: "教育・探究学習",
    location: "地域高校と地元企業",
    market: "高校生、教員、地元企業、自治体",
    challenge: "探究テーマは増えているが、地域企業の実課題や事業化までつながりにくい。教員の負荷も高く、外部人材を巻き込む仕組みが不足している。",
    desiredImpact: "高校生の探究力を高め、地域企業の課題解決と若者の地域参加を増やし、継続できる教育事業にしたい。"
  };
  const answers = [
    "最初の2週間は、生徒、教員、地元企業、自治体にヒアリングし、なぜ探究が事業化につながらないのか問いを立てます。既存事例と地域データを調査し、課題を比較分析して優先テーマを絞ります。",
    "教員の負荷を増やさないよう、役割と責任者を明確にした90日プロジェクトを作ります。管理職、企業、地域コーディネーターを巻き込み、小さなプロトタイプを実験して振り返ります。",
    "競合と価格だけで戦わず、地域企業の実課題と生徒の探究をつなぐ独自性で差別化します。仮説は企業課題の解決率と生徒の探究度数向上を同時に測り、撤退基準は継続率と教員負荷で置きます。",
    "実証中に残業や個人情報の懸念が出たら、参加者満足だけでなく教員負荷、説明同意、相談件数をKPIに加えます。リスクの高い運用は一度止め、自治体と学校管理職へ改善策を説明します。",
    "継続提案を選びます。数値目標は参加生徒数、企業課題解決件数、教員負荷の削減、well-being変化、収益見込みに置きます。取締役会には人的資本、地域インパクト、ESG開示の根拠として説明します。"
  ];
  state.scenarioResponses = answers.map((answer, index) => ({
    scene: activeScenarioScenes()[index].title,
    answer,
    score: scoreScenarioResponse(answer, index)
  }));
  state.scenarioMessages = [
    { role: "ai", text: "サンプルの基本情報を入力しました。", meta: "5つの複雑な場面回答もサンプルで測定しています。" },
    ...answers.flatMap((answer, index) => [
      { role: "ai", text: buildScenePrompt(index) },
      { role: "user", text: answer }
    ]),
    { role: "ai", text: "AI実践シナリオは完了です。結果画面で統合結果を確認できます。" }
  ];
  buildScenario();
  updateAll();
}

function downloadGeneratedImage() {
  const link = document.createElement("a");
  link.download = "wellbeing-impact-scenario.png";
  link.href = generatedImageCanvas.toDataURL("image/png");
  link.click();
}

function downloadResultDashboardImage() {
  const link = document.createElement("a");
  link.download = "wellbeing-impact-results-dashboard.png";
  link.href = resultImageCanvas.toDataURL("image/png");
  link.click();
}

function resetCurrentRound() {
  currentProfile().answers[state.round] = {};
  currentProfile().esgAnswers = {};
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
  renderEsgForm();
  updateAll();
});

assessmentModeSelect.addEventListener("change", (event) => {
  state.assessmentMode = event.target.value;
  renderForm();
  renderEsgForm();
  updateAll();
});

memberSelect.addEventListener("change", (event) => {
  state.organization.activeMemberId = event.target.value;
  renderForm();
  renderEsgForm();
  updateAll();
});

memberNameInput.addEventListener("input", (event) => {
  activeMember().name = event.target.value.trim() || "名称未設定";
  updateAll();
});

memberRoleInput.addEventListener("input", (event) => {
  activeMember().role = event.target.value.trim() || "メンバー";
  updateAll();
});

addMemberButton.addEventListener("click", () => {
  const nextIndex = state.organization.members.length + 1;
  const id = `member_${Date.now()}`;
  state.organization.members.push({
    id,
    name: `回答者 ${nextIndex}`,
    role: "メンバー",
    answers: { before: {}, after: {} },
    esgAnswers: {}
  });
  state.organization.activeMemberId = id;
  state.assessmentMode = "organization";
  renderForm();
  renderEsgForm();
  updateAll();
});

document.querySelector("#sampleButton").addEventListener("click", sampleAnswers);
document.querySelector("#resetButton").addEventListener("click", resetCurrentRound);
websiteAssessButton.addEventListener("click", assessWebsiteFromUrl);
generateAiRecommendationsButton.addEventListener("click", generateAiRecommendations);
resetAiRecommendationsButton.addEventListener("click", resetAiRecommendations);
downloadResultsReportButton.addEventListener("click", () => openPdfReport("results"));
downloadRecommendationsReportButton.addEventListener("click", () => openPdfReport("recommendations"));
generateCompanyScenarioButton.addEventListener("click", generateCompanyScenario);
submitScenarioAnswerButton.addEventListener("click", submitScenarioAnswer);
scenarioSampleButton.addEventListener("click", scenarioSample);
resetScenarioButton.addEventListener("click", resetScenario);
scenarioOptions.addEventListener("click", (event) => {
  const button = event.target.closest("[data-scenario-option]");
  if (!button) return;
  selectScenarioOption(button.dataset.scenarioOption);
});
generateImageButton.addEventListener("click", generateScenarioImage);
downloadImageButton.addEventListener("click", downloadGeneratedImage);
generateResultImageButton.addEventListener("click", generateResultDashboardImage);
downloadResultImageButton.addEventListener("click", downloadResultDashboardImage);
coverStartButton.addEventListener("click", () => {
  document.querySelector(".page-header")?.scrollIntoView({ behavior: "smooth", block: "start" });
});
coverCanvas.addEventListener("mousemove", updateCoverPointer);
coverCanvas.addEventListener("mousedown", startCoverDrag);
window.addEventListener("mouseup", stopCoverDrag);
coverCanvas.addEventListener("mouseleave", () => {
  if (!coverDrag.active) coverPointer.active = false;
  coverPointer.hovered = "";
});
coverCanvas.addEventListener("touchstart", (event) => {
  updateCoverPointer(event.touches[0]);
  startCoverDrag(event.touches[0]);
}, { passive: true });
coverCanvas.addEventListener("touchmove", (event) => {
  updateCoverPointer(event.touches[0]);
}, { passive: true });
window.addEventListener("touchend", stopCoverDrag);

renderForm();
renderEsgForm();
ensureScenarioStarted();
updateAll();
animateCoverCanvas();
