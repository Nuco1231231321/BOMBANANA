import { Link } from "@/i18n/navigation";
import type { InfoArticlePageProps } from "./InfoArticlePage";

const steamDemoUrl = "https://store.steampowered.com/app/4747510/BOMBANANA_Demo/";

export const manualPage = {
  locale: "en",
  eyebrow: "Manual flow",
  title: "BOMBANANA! Manual Guide",
  intro:
    "Use this guide to understand how the BOMBANANA! manual fits the three-role defusal loop, how the Mute Monkey should read module rules, and when your team should move from the manual hub into a specific module page.",
  cta: { label: "Start with Modules", href: "/modules" },
  updated: "Updated June 23, 2026",
  hero: {
    src: "/images/screenshots/ss_68f3c44625be8227496c6c017bfe847ed3c83e3d.thumb.jpg",
    alt: "BOMBANANA! bomb module interface",
  },
  quickAnswerTitle: "Direct answer",
  quickAnswer: (
    <p>
      <strong>The BOMBANANA! manual is the rule-reading part of the defusal chain, not an official PDF on this site.</strong> The
      Mute Monkey reads the rules, communicates by gesture, the Deaf Monkey turns those gestures into spoken instructions, and
      the Blind Monkey performs the final bomb action.
    </p>
  ),
  table: {
    headers: ["Module type", "Who reads", "Who executes", "Failure point", "Related internal page"],
    rows: [
      [
        "Wire",
        "Mute Monkey",
        "Blind Monkey",
        "Cutting before color/order is confirmed",
        <Link key="wire-module-link" href={"/modules/wire-module" as never} className="font-semibold underline">Wire module guide</Link>,
      ],
      [
        "Button",
        "Mute Monkey",
        "Blind Monkey",
        "Pressing before hold/release logic is clear",
        <Link key="button-module-link" href={"/modules/button-module" as never} className="font-semibold underline">Button module guide</Link>,
      ],
      [
        "Switch",
        "Mute Monkey",
        "Blind Monkey",
        "Losing track of current switch state",
        <Link key="switch-module-link" href={"/modules/switch-module" as never} className="font-semibold underline">Switch module guide</Link>,
      ],
      [
        "Symbols",
        "Mute Monkey",
        "Blind Monkey",
        "Using inconsistent names for the same symbol",
        <Link key="symbols-module-link" href={"/modules/symbols-module" as never} className="font-semibold underline">Symbols module guide</Link>,
      ],
    ],
  },
  sections: [
    {
      title: "What is the BOMBANANA manual?",
      body: (
        <>
          <p>
            In BOMBANANA!, the manual is the knowledge layer of the bomb. It gives the team the logic for modules while the
            bomb itself creates pressure through limited time, limited senses, and role restrictions. This page treats the manual
            as a gameplay flow: how to read a rule, translate it, confirm it, and turn it into one safe action.
          </p>
          <p>
            The important distinction is that the manual is not useful by itself. The Mute Monkey may know the answer, but cannot
            speak. The Deaf Monkey can see and speak, but cannot hear. The Blind Monkey can touch the bomb, but needs safe and
            precise instructions. A good manual process makes those limits predictable.
          </p>
        </>
      ),
    },
    {
      title: "How the manual fits the three-role system",
      body: (
        <ol className="list-decimal space-y-2 pl-5">
          <li>The Deaf Monkey identifies the visible module and asks for the relevant rule.</li>
          <li>The Mute Monkey finds the matching rule and reduces it to the next required action.</li>
          <li>The Mute Monkey gestures the instruction in small pieces instead of acting out the whole solution at once.</li>
          <li>The Deaf Monkey speaks the instruction clearly to the Blind Monkey.</li>
          <li>The Blind Monkey repeats the action before touching the bomb, then executes only after confirmation.</li>
        </ol>
      ),
    },
    {
      title: "Manual reading flow for Mute Monkey",
      body: (
        <>
          <p>
            The Mute Monkey should read for decision points, not for paragraphs. Start by identifying the module type, then isolate
            the clue that changes the action: wire count, button state, switch position, symbol group, timer state, or any visible
            label. Once the deciding clue is known, communicate only the next safe step.
          </p>
          <p>
            A reliable rhythm is: module name, clue needed, rule matched, action, confirmation. If the Deaf Monkey looks confused,
            reset to the clue needed instead of repeating a bigger gesture faster.
          </p>
        </>
      ),
    },
    {
      title: "Common manual mistakes",
      body: (
        <ul className="list-disc space-y-2 pl-5">
          <li>Reading too much at once and forcing the Deaf Monkey to remember a full rule chain.</li>
          <li>Skipping confirmation because a module looks simple.</li>
          <li>Changing symbol names mid-run.</li>
          <li>Letting the Blind Monkey act before the Deaf Monkey repeats the exact instruction.</li>
          <li>Using panic gestures that were never agreed before the timer started.</li>
        </ul>
      ),
    },
    {
      title: "When to use module pages instead",
      body: (
        <p>
          Use this manual guide to understand the team flow. Use the individual module pages when your team needs a concrete
          rule pattern, mistake checklist, or module-specific communication plan. Start with{" "}
          <Link href={"/modules" as never} className="underline">the modules overview</Link>, then move into wire, button, switch, or symbols.
        </p>
      ),
    },
  ],
  faqs: [
    {
      question: "Is this an official BOMBANANA! PDF manual?",
      answer: "No. This is an unofficial guide to the manual flow and team communication process. It does not claim to be an official PDF.",
    },
    {
      question: "Which role should read the manual?",
      answer: "The Mute Monkey is the role associated with manual knowledge, but the whole team needs a repeatable way to turn those rules into safe actions.",
    },
    {
      question: "Should the Blind Monkey ever guess?",
      answer: "No. The Blind Monkey should repeat the instruction and wait for confirmation before touching the bomb.",
    },
    {
      question: "What is the fastest way to improve manual calls?",
      answer: "Shorten the chain: module name, clue, rule, action, confirm. Avoid long explanations during the timer.",
    },
  ],
  relatedLinks: [
    { href: "/modules", label: "Modules overview" },
    { href: "/modules/wire-module", label: "Wire module" },
    { href: "/modules/button-module", label: "Button module" },
    { href: "/modules/switch-module", label: "Switch module" },
    { href: "/modules/symbols-module", label: "Symbols module" },
    { href: "/roles/mute-monkey", label: "Mute Monkey role" },
    { href: "/communication/communication-chain", label: "Communication chain" },
  ],
} satisfies InfoArticlePageProps;

export const demoPage = {
  locale: "en",
  eyebrow: "Steam demo",
  title: "BOMBANANA! Demo Download Guide",
  intro:
    "The safe way to try BOMBANANA! is through Steam. Use this page to understand where the demo fits, what the full game status means, and why APK or third-party downloads should be treated as risk topics unless officially confirmed.",
  cta: { label: "Open Steam Demo", href: steamDemoUrl, external: true },
  updated: "Updated June 23, 2026",
  hero: {
    src: "/images/ui/game-header.jpg",
    alt: "BOMBANANA! Steam header artwork",
  },
  quickAnswerTitle: "Direct answer",
  quickAnswer: (
    <p>
      <strong>Download the BOMBANANA! Demo from Steam.</strong> Steam is the safe primary source. A BOMBANANA! APK is not confirmed
      as an official release, so do not treat APK sites as safe download sources.
    </p>
  ),
  table: {
    headers: ["Access option", "Status", "Risk", "What to do"],
    rows: [
      ["Steam Demo", "Available on Steam", "Low when opened from Steam", "Use the Steam demo page"],
      ["Full Game", "Planned for August 2026", "Normal pre-release uncertainty", "Wishlist and follow official updates"],
      ["APK", "not confirmed", "High if from third-party sites", "Do not install unless official confirmation appears"],
      ["Unofficial download", "not confirmed", "High", "Avoid copied installers and mirrors"],
    ],
  },
  sections: [
    {
      title: "Where to download BOMBANANA Demo",
      body: (
        <p>
          Use Steam as the primary download path. The official Steam ecosystem shows the game page, the demo entry, screenshots,
          supported languages, and update activity in one place. That makes it easier to avoid copied download pages and files that
          are not connected to the developer.
        </p>
      ),
    },
    {
      title: "Steam Demo vs full game",
      body: (
        <p>
          The demo is for trying the core 3-player co-op loop: identifying modules, communicating through restricted roles, and
          learning how quickly unclear calls can turn into failed defusals. The full game is planned for August 2026, so anything
          beyond the public Steam information should be treated as subject to change.
        </p>
      ),
    },
    {
      title: "Is there a BOMBANANA APK?",
      body: (
        <p>
          There is no official APK status confirmed here. If a site claims to offer a BOMBANANA! APK, treat it as unsafe unless an
          official channel confirms that Android build. Do not install random APK files just because they use the game name.
        </p>
      ),
    },
    {
      title: "Safe download checklist",
      body: (
        <ul className="list-disc space-y-2 pl-5">
          <li>Open the demo from Steam, not a file mirror.</li>
          <li>Check that the title is BOMBANANA! and the developer context matches the official Steam page.</li>
          <li>Avoid APK, cracked, portable, or repacked downloads.</li>
          <li>Do not enter Steam credentials on third-party download pages.</li>
          <li>After installing, invite exactly three players and use in-game voice for the intended restrictions.</li>
        </ul>
      ),
    },
    {
      title: "What to do after installing the demo",
      body: (
        <p>
          Start with the beginner flow before chasing speed. Assign Blind, Deaf, and Mute roles, agree on a few basic signals, then
          practice one module at a time. The fastest improvement usually comes from cleaner confirmation, not faster guessing.
        </p>
      ),
    },
  ],
  faqs: [
    { question: "Is the BOMBANANA! Demo free?", answer: "The Steam demo is the safe demo access point. Check Steam for current availability and install status." },
    { question: "Can I download BOMBANANA! outside Steam?", answer: "Steam is the safe primary source. Third-party downloads are not recommended." },
    { question: "Is there a BOMBANANA! APK?", answer: "An official APK is not confirmed. Avoid APK sites unless official confirmation appears." },
    { question: "What should I play after installing?", answer: "Start with a first-session setup, assign all three roles, then practice the basic communication chain." },
  ],
  relatedLinks: [
    { href: "/beginners", label: "Beginner guide" },
    { href: "/beginners/how-to-play", label: "How to play" },
    { href: "/faq", label: "FAQ" },
    { href: "/troubleshooting", label: "Troubleshooting" },
    { href: "/release-date", label: "Release date and platforms" },
  ],
} satisfies InfoArticlePageProps;

export const releaseDatePage = {
  locale: "en",
  eyebrow: "Release status",
  title: "BOMBANANA! Release Date, Price, and Platforms",
  intro:
    "Track the current BOMBANANA! release window, demo availability, price status, platform status, and console status without inventing details that are not confirmed.",
  cta: { label: "Check Demo / Updates", href: "/demo" },
  updated: "Updated June 23, 2026",
  hero: {
    src: "/images/screenshots/ss_858b009c283bfaac07f526309cb8a68c0c284278.thumb.jpg",
    alt: "BOMBANANA! gameplay screenshot",
  },
  quickAnswerTitle: "Direct answer",
  quickAnswer: (
    <p>
      <strong>BOMBANANA! is planned for August 2026 on Steam, and a Steam demo is available.</strong> Price, PS5, and console
      status are not confirmed here. Windows support is confirmed through the Steam platform listing.
    </p>
  ),
  table: {
    headers: ["Item", "Current status", "Confirmed detail", "What it means"],
    rows: [
      ["Demo status", "Available", "Steam demo", "Try the core co-op loop before launch"],
      ["Full game release window", "Planned", "August 2026", "Date may still move before launch"],
      ["Price status", "not confirmed", "No public price confirmed here", "Do not rely on third-party price claims"],
      ["Platform status", "Windows confirmed", "Steam lists Windows support", "Mac/Linux are not confirmed here"],
      ["PS5 / console status", "not confirmed", "No console status confirmed here", "Keep console questions on this page, not a thin PS5 page"],
    ],
  },
  sections: [
    {
      title: "Current release status",
      body: (
        <p>
          BOMBANANA! is listed with an August 2026 release window. Because the game is still pre-release, treat exact launch-day,
          edition, and pricing claims as not confirmed unless they appear through an official channel.
        </p>
      ),
    },
    {
      title: "Demo availability",
      body: (
        <p>
          The demo is the best current way to evaluate the game. It lets a three-player team test the central role split: one player
          handles the bomb, one reads the rule logic, and one bridges visual information into spoken instructions.
        </p>
      ),
    },
    {
      title: "Price status",
      body: (
        <p>
          The price is not confirmed here. Do not treat speculative price pages, regional guesses, or copied storefront snippets as
          final. Check Steam close to launch for the current purchase status.
        </p>
      ),
    },
    {
      title: "Platform status",
      body: (
        <p>
          Windows is confirmed on Steam. Other platform claims should be handled carefully unless official information changes. This
          page should be updated if Mac, Linux, Steam Deck status, or other stores become officially listed.
        </p>
      ),
    },
    {
      title: "PS5 / console status",
      body: (
        <p>
          PS5 and console release details are not confirmed here. That means the site should not create a standalone PS5 page yet:
          the useful answer fits in this release status page until official console details exist.
        </p>
      ),
    },
    {
      title: "How to track updates",
      body: (
        <p>
          Wishlist the game on Steam, follow the Steam updates area, and check this guide after public release changes. Patch notes,
          demo changes, or newly confirmed platforms should trigger an update to this page.
        </p>
      ),
    },
  ],
  faqs: [
    { question: "When does BOMBANANA! release?", answer: "The current public release window is August 2026." },
    { question: "Is the price confirmed?", answer: "No. The price is not confirmed here." },
    { question: "Is BOMBANANA! coming to PS5?", answer: "PS5 and console status are not confirmed here." },
    { question: "What platform is confirmed?", answer: "Windows support is confirmed through the Steam listing." },
  ],
  relatedLinks: [
    { href: "/demo", label: "Demo guide" },
    { href: "/updates", label: "Updates" },
    { href: "/faq", label: "FAQ" },
    { href: "/beginners", label: "Beginner guide" },
  ],
} satisfies InfoArticlePageProps;

export const ptHowToPlayPage = {
  locale: "pt",
  eyebrow: "Guia em português",
  title: "Como jogar BOMBANANA!",
  intro:
    "Este é o ponto de entrada em português para entender BOMBANANA!: três jogadores, três macacos com limitações diferentes e uma bomba que só pode ser resolvida com comunicação clara.",
  cta: { label: "Ver demo / aprender funções", href: "/demo" },
  updated: "Atualizado em 23 de junho de 2026",
  hero: {
    src: "/images/screenshots/ss_71217070b739545c452accf9e600c6ca72832e64.thumb.jpg",
    alt: "Cena de BOMBANANA! com a equipe de macacos",
  },
  quickAnswerTitle: "Resposta direta",
  quickAnswer: (
    <p>
      <strong>BOMBANANA! é jogado em equipe de exatamente três pessoas.</strong> O macaco cego interage com a bomba, o macaco
      surdo vê e fala, e o macaco mudo entende as regras mas precisa se comunicar sem voz. A partida funciona quando a equipe
      transforma pistas em instruções curtas e confirmadas.
    </p>
  ),
  table: {
    headers: ["Função", "O que pode fazer", "O que não pode fazer", "Comunicação"],
    rows: [
      ["Macaco cego", "Tocar e executar ações na bomba", "Ver cores, telas e pistas visuais", "Recebe instruções faladas"],
      ["Macaco surdo", "Ver a bomba e falar com o cego", "Ouvir respostas ou correções", "Fala e lê gestos"],
      ["Macaco mudo", "Ler regras e ouvir", "Falar instruções", "Usa gestos, sinais e apontamentos"],
    ],
  },
  sections: [
    {
      title: "O que é BOMBANANA?",
      body: (
        <p>
          BOMBANANA! é um jogo cooperativo online de desarme de bombas para três jogadores. A graça não está só no quebra-cabeça:
          está no fato de que cada jogador recebe uma limitação diferente. Se a equipe falar demais, gesticular mal ou pular
          confirmação, uma resposta certa pode virar uma ação errada.
        </p>
      ),
    },
    {
      title: "Como funciona o jogo dos três macacos",
      body: (
        <p>
          A equipe precisa criar uma cadeia. O macaco surdo observa a bomba e identifica o módulo. O macaco mudo encontra a regra
          e tenta passar a instrução por gestos. O macaco surdo transforma isso em fala. O macaco cego repete, confirma e só então
          executa.
        </p>
      ),
    },
    {
      title: "Como jogar a primeira partida",
      body: (
        <ol className="list-decimal space-y-2 pl-5">
          <li>Escolham as três funções antes de iniciar.</li>
          <li>Combinem sinais para sim, não, repetir, parar, número e direção.</li>
          <li>Resolvam um módulo por vez.</li>
          <li>Repitam a instrução antes de agir.</li>
          <li>Depois da explosão ou vitória, ajustem os sinais que confundiram a equipe.</li>
        </ol>
      ),
    },
    {
      title: "Funções: macaco cego, surdo e mudo",
      body: (
        <p>
          Nenhuma função é secundária. O cego precisa de precisão, o surdo precisa transformar caos visual em fala clara, e o mudo
          precisa reduzir regras em gestos simples. Se uma função tenta fazer tudo, a equipe perde o ritmo.
        </p>
      ),
    },
    {
      title: "Comunicação básica",
      body: (
        <p>
          Use frases curtas e sinais fixos. Em vez de explicar uma regra inteira, passe a próxima ação segura. A melhor sequência é:
          nome do módulo, pista necessária, regra escolhida, ação, confirmação.
        </p>
      ),
    },
    {
      title: "Erros comuns de iniciantes",
      body: (
        <ul className="list-disc space-y-2 pl-5">
          <li>Começar sem combinar sinais básicos.</li>
          <li>Agir antes de repetir a instrução.</li>
          <li>Mudar nomes de símbolos durante a partida.</li>
          <li>Resolver dois módulos ao mesmo tempo sem necessidade.</li>
          <li>Usar Discord de um jeito que remove as limitações principais do jogo.</li>
        </ul>
      ),
    },
  ],
  faqs: [
    { question: "BOMBANANA! dá para jogar sozinho?", answer: "Não. O jogo foi construído para exatamente três jogadores em cooperação online." },
    { question: "Qual função é melhor para iniciantes?", answer: "Comece pela função que a pessoa consegue comunicar com mais calma. Depois troquem as funções para entender a cadeia completa." },
    { question: "Precisa usar voz dentro do jogo?", answer: "A voz com restrições faz parte da experiência. Usar ferramentas externas pode reduzir o desafio pretendido." },
    { question: "Existe página em português para demo e preço?", answer: "Sim. Use as páginas de demo e preço/data de lançamento em português nos links internos." },
  ],
  relatedLinks: [
    { href: "/demo", label: "BOMBANANA Demo" },
    { href: "/release-date", label: "Preço e data de lançamento" },
    { href: "/beginners/how-to-play", label: "English: how to play", locale: "en" },
    { href: "/roles", label: "English: roles", locale: "en" },
    { href: "/modules", label: "English: modules", locale: "en" },
  ],
} satisfies InfoArticlePageProps;

export const ptDemoPage = {
  ...demoPage,
  locale: "pt",
  eyebrow: "Demo no Steam",
  title: "BOMBANANA Demo: Steam, download seguro e APK",
  intro:
    "A forma segura de testar BOMBANANA! é pelo Steam. Esta página explica onde baixar o demo, como evitar sites de terceiros e por que APK deve ser tratado como risco enquanto não houver confirmação oficial.",
  cta: { label: "Abrir demo no Steam", href: steamDemoUrl, external: true },
  updated: "Atualizado em 23 de junho de 2026",
  quickAnswerTitle: "Resposta direta",
  quickAnswer: (
    <p>
      <strong>Baixe o demo de BOMBANANA! pelo Steam.</strong> O Steam é a fonte segura principal. Não há APK oficial confirmado,
      então sites oferecendo APK ou instaladores de terceiros não devem ser tratados como seguros.
    </p>
  ),
  table: {
    headers: ["Opção", "Status", "Risco", "O que fazer"],
    rows: [
      ["Steam Demo", "Disponível no Steam", "Baixo quando aberto pelo Steam", "Usar a página do Steam"],
      ["Jogo completo", "Planejado para agosto de 2026", "Incerteza normal de pré-lançamento", "Adicionar à lista de desejos"],
      ["APK", "ainda não confirmado", "Alto em sites de terceiros", "Não instalar sem confirmação oficial"],
      ["Sites de terceiros", "ainda não confirmado", "Alto", "Evitar mirrors e instaladores copiados"],
    ],
  },
  sections: [
    { title: "Onde baixar o demo de BOMBANANA", body: <p>Use o Steam como caminho principal de download. Ele concentra página do jogo, demo, imagens, idiomas suportados e atualizações em um ambiente mais seguro do que páginas de arquivo soltas.</p> },
    { title: "Steam Demo vs jogo completo", body: <p>O demo serve para testar o ciclo central: três jogadores, comunicação limitada e módulos de bomba. O jogo completo está planejado para agosto de 2026, então detalhes fora das informações oficiais podem mudar.</p> },
    { title: "Existe APK de BOMBANANA?", body: <p>Não há APK oficial confirmado. Se um site promete APK de BOMBANANA!, trate como risco até existir confirmação oficial. Não instale arquivos aleatórios só porque usam o nome do jogo.</p> },
    { title: "Checklist de download seguro", body: <ul className="list-disc space-y-2 pl-5"><li>Abra o demo pelo Steam.</li><li>Evite APK, crack, repack ou download portátil.</li><li>Não informe login da Steam em sites de terceiros.</li><li>Confira se a página corresponde ao jogo BOMBANANA!.</li><li>Depois de instalar, jogue com exatamente três pessoas.</li></ul> },
    { title: "O que fazer depois de instalar o demo", body: <p>Escolha as funções, combine sinais básicos e pratique um módulo por vez. A melhora vem de confirmação clara, não de pressa.</p> },
  ],
  faqs: [
    { question: "Onde baixo o demo de BOMBANANA?", answer: "Pelo Steam, que é a fonte segura principal." },
    { question: "Existe APK oficial?", answer: "Não há APK oficial confirmado." },
    { question: "Sites de terceiros são seguros?", answer: "Não trate sites de terceiros como seguros para baixar o jogo." },
    { question: "O que faço depois de instalar?", answer: "Monte uma equipe de três jogadores e comece pelo guia de como jogar." },
  ],
  relatedLinks: [
    { href: "/como-jogar-bombanana", label: "Como jogar BOMBANANA!" },
    { href: "/release-date", label: "Preço e data de lançamento" },
    { href: "/demo", label: "English demo guide", locale: "en" },
    { href: "/faq", label: "FAQ em inglês", locale: "en" },
    { href: "/troubleshooting", label: "Troubleshooting", locale: "en" },
  ],
} satisfies InfoArticlePageProps;

export const ptReleaseDatePage = {
  ...releaseDatePage,
  locale: "pt",
  eyebrow: "Status de lançamento",
  title: "BOMBANANA: preço, data de lançamento e plataformas",
  intro:
    "Acompanhe o status atual de preço, demo, lançamento, plataformas e console de BOMBANANA! sem transformar informação ainda não confirmada em promessa.",
  cta: { label: "Ver demo / acompanhar updates", href: "/demo" },
  updated: "Atualizado em 23 de junho de 2026",
  quickAnswerTitle: "Resposta direta",
  quickAnswer: (
    <p>
      <strong>BOMBANANA! está planejado para agosto de 2026 no Steam, e há demo no Steam.</strong> Preço, PS5 e consoles ainda
      não confirmado. Windows aparece como plataforma confirmada na listagem do Steam.
    </p>
  ),
  table: {
    headers: ["Item", "Status atual", "Detalhe", "O que significa"],
    rows: [
      ["Preço", "ainda não confirmado", "Sem preço público confirmado aqui", "Não confiar em páginas especulativas"],
      ["Demo", "Disponível", "Steam Demo", "Dá para testar o ciclo cooperativo"],
      ["Lançamento", "Planejado", "agosto de 2026", "A janela pode mudar antes do lançamento"],
      ["Plataformas", "Windows confirmado", "Steam lista Windows", "Mac/Linux ainda não confirmado aqui"],
      ["PS5 / console", "ainda não confirmado", "Sem detalhe oficial aqui", "Não criar página fina só para PS5"],
    ],
  },
  sections: [
    { title: "Preço atual", body: <p>O preço ainda não confirmado. Evite tratar estimativas, conversões regionais ou páginas copiadas como valor final.</p> },
    { title: "Status do lançamento", body: <p>O lançamento está planejado para agosto de 2026. Como o jogo ainda está em pré-lançamento, detalhes exatos podem mudar.</p> },
    { title: "Plataformas", body: <p>Windows está confirmado pela listagem do Steam. Mac, Linux e outras plataformas ainda não confirmado aqui.</p> },
    { title: "PS5 / console", body: <p>PS5 e consoles ainda não confirmado. Até existir informação oficial, esse assunto deve ficar nesta página de status.</p> },
    { title: "Como acompanhar atualizações", body: <p>Use a página do Steam, acompanhe updates oficiais e volte a este guia quando houver mudança em preço, plataforma ou demo.</p> },
  ],
  faqs: [
    { question: "Qual é o preço de BOMBANANA?", answer: "O preço ainda não confirmado." },
    { question: "Quando BOMBANANA! lança?", answer: "A janela pública atual é agosto de 2026." },
    { question: "Vai sair para PS5?", answer: "PS5 e console ainda não confirmado." },
    { question: "Qual plataforma está confirmada?", answer: "Windows está confirmado pela listagem do Steam." },
  ],
  relatedLinks: [
    { href: "/demo", label: "Demo em português" },
    { href: "/como-jogar-bombanana", label: "Como jogar BOMBANANA!" },
    { href: "/updates", label: "Updates em inglês", locale: "en" },
    { href: "/faq", label: "FAQ em inglês", locale: "en" },
  ],
} satisfies InfoArticlePageProps;
