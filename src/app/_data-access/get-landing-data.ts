export interface Metric {
  value: string;
  label: string;
  sub: string;
}

export interface Pillar {
  number: string;
  category: string;
  title: string;
  description: string;
  tag: string;
  image: string;
  isDark?: boolean;
}

export interface RepertoireWork {
  badge: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
}

export interface PastPresentation {
  date: string;
  dayTime: string;
  churchCity: string;
  venue: string;
  detail: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image: string;
}

export interface LandingData {
  nav: {
    title: string;
    subtitle: string;
    buttonText: string;
    logoImage: string;
  };
  hero: {
    tag: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    buttonText: string;
    buttonNote: string;
    verse: string;
    reference: string;
    bannerImage: string;
    card: {
      tag: string;
      title: string;
      church: string;
      cityState: string;
      notice: string;
    };
  };
  metricsHeader: {
    title: string;
    tags: string;
  };
  metrics: Metric[];
  purpose: {
    quoteTag: string;
    quoteText: string;
    quoteAuthor: string;
    leftTitle: string;
    leftParagraphs: string[];
    rightCard: {
      title: string;
      text: string;
      quoteTitle: string;
      quoteText: string;
      groupName: string;
      location: string;
    };
  };
  pillars: {
    tag: string;
    title: string;
    subtitle: string;
    items: Pillar[];
  };
  repertoire: {
    tag: string;
    title: string;
    works: RepertoireWork[];
  };
  agenda: {
    tag: string;
    title: string;
    nextNotice: string;
    featured: {
      month: string;
      year: string;
      tag: string;
      title: string;
      church: string;
      notice: string;
    };
    pastPresentations: PastPresentation[];
  };
  testimonials: {
    tag: string;
    title: string;
    items: Testimonial[];
  };
  audition: {
    tag: string;
    title: string;
    text: string;
    requirements: string[];
    howToApply: string;
  };
  invite: {
    tag: string;
    title: string;
    text: string;
    techRider: string;
    logistics: string;
    ministry: string;
    contactCard: {
      boxTag: string;
      title: string;
      notice: string;
      email: string;
      phone: string;
      hours: string;
      buttonText: string;
      groupName: string;
    };
  };
  footer: {
    quote: string;
    repertoireLinks: string[];
    direction: string;
    cast: string;
    labs: string;
    subNote: string;
    email: string;
    pressEmail: string;
  };
}

export async function getLandingData(): Promise<LandingData> {
  return {
    nav: {
      title: "SOMOS UM",
      subtitle: "DANÇA TEATRAL • IGREJA ELOHIM",
      buttonText: "DEZEMBRO 2026",
      logoImage: "/assets/logo.png",
    },
    hero: {
      tag: "FESTIVIDADE 2026 / IGREJA ELOHIM",
      titleLine1: "Eis que é",
      titleLine2: "chegada a hora.",
      subtitle:
        "Somos Um: dança e teatro a serviço do Reino. Em dezembro, vamos nos reunir para celebrar a Cristo em uma festividade de fé e adoração.",
      buttonText: "CONHEÇA A FESTIVIDADE",
      buttonNote: "Uma celebração para toda a família.",
      verse:
        "“Eis que é chegada a hora, e o Filho do Homem será entregue nas mãos dos pecadores.”",
      reference: "MATEUS 26:45 • TEMA DA FESTIVIDADE",
      bannerImage: "/assets/hero-banner.jpg",
      card: {
        tag: "PREPARE O CORAÇÃO",
        title: "Dezembro 2026",
        church: "Igreja Elohim",
        cityState: "Penedo / AL",
        notice: "Dia e horário serão divulgados em breve.",
      },
    },
    metricsHeader: {
      title: "Dança e teatro para anunciar Jesus.",
      tags: "FÉ • ARTE • COMUNHÃO",
    },
    metrics: [
      {
        value: "+6",
        label: "ANOS DE MINISTÉRIO",
        sub: "Fundada em 2020",
      },
      {
        value: "+13",
        label: "INTEGRANTES",
        sub: "Bailarinos e atores",
      },
      {
        value: "20+",
        label: "CENAS DE ADORAÇÃO",
        sub: "Apresentações",
      },
      {
        value: "04",
        label: "APRESENTAÇÕES EM IGREJAS",
        sub: "Adoração",
      },
    ],
    purpose: {
      quoteTag: "NOSSO PROPÓSITO É GLORIFICAR A DEUS",
      quoteText:
        "“Não dançamos para que o homem aplauda nossa virtude, mas para que a beleza inefável do Criador seja contemplada através da nossa fragilidade consagrada.”",
      quoteAuthor: "— LIDERANÇA, SOMOS UM",
      leftTitle: "A FÉ QUE DÁ SENTIDO À NOSSA ARTE",
      leftParagraphs: [
        "Acreditamos que a dança e o teatro são formas de anunciar o amor de Jesus. Por meio de cada cena, compartilhamos a mensagem da cruz e da redenção.",
        "Nossa arte nasce da fé e aponta para Cristo. Cada movimento é um convite à esperança e a um encontro verdadeiro com Deus.",
        "Servimos com dedicação, unindo expressão corporal, teatro e a Palavra de Deus. Mais do que uma apresentação, desejamos oferecer uma mensagem que alcance corações e glorifique o nome de Jesus.",
      ],
      rightCard: {
        title: "UM SÓ CORPO, UM SÓ PROPÓSITO",
        text: "O palco não é um lugar para o nosso ego, mas uma oportunidade de servir. Em comunhão e oração, entregamos a Deus nossos ensaios, nossos dons e cada ministração. Toda honra e toda glória são dele.",
        quoteTitle: "NOSSA ENTREGA",
        quoteText:
          "“Quando a luz do palco se apaga, restam apenas os joelhos no chão e a certeza de que nenhuma honra pertence às nossas mãos mortais.”",
        groupName: "GRUPO SOMOS UM",
        location: "Penedo • Alagoas",
      },
    },
    pillars: {
      tag: "FÉ QUE SE EXPRESSA EM ARTE",
      title: "Dons a serviço do Reino",
      subtitle:
        "Dança, teatro e dedicação unidos por um mesmo propósito: compartilhar o evangelho e adorar a Jesus.",
      items: [
        {
          number: "I.",
          category: "DANÇA",
          title: "Adoração em Movimento",
          description:
            "Cada gesto expressa nossa gratidão a Deus. Na dança, encontramos uma linguagem para ministrar sobre o amor de Cristo, a esperança e a vida que há nele.",
          tag: "• CORPOS QUE ADORAM",
          image: "/assets/highlight-1.jpg",
          isDark: false,
        },
        {
          number: "II.",
          category: "TEATRO",
          title: "Histórias que anunciam Jesus",
          description:
            "Levamos ao palco histórias inspiradas na Palavra de Deus. Por meio do teatro, compartilhamos a mensagem da cruz e o poder transformador da graça.",
          tag: "• A PALAVRA EM CENA",
          image: "/assets/highlight-2.jpg",
          isDark: true,
        },
        {
          number: "III.",
          category: "DEDICAÇÃO",
          title: "Excelência para servir",
          description:
            "Cuidamos de cada detalhe como uma expressão de amor a Deus. Preparação, unidade e sensibilidade fazem parte da nossa entrega em cada ministração.",
          tag: "• TUDO PARA A GLÓRIA DE DEUS",
          image: "/assets/highlight-3.jpg",
          isDark: false,
        },
      ],
    },
    repertoire: {
      tag: "NOSSO REPERTÓRIO",
      title: "A mensagem em cena",
      works: [
        {
          badge: "OBRA PRIMÁRIA",
          category: "ATO TEATRAL CORPORAL",
          title: "O Resgate",
          description:
            "Drama sacro corporal que narra a jornada do homem da Queda do Éden até o Gólgota. A coreografia articula peso, gravidade e queda para simbolizar o pecado, culminando na suspensão etérea da ressurreição.",
          tags: ["Ballet Contemporâneo", "Dramaturgia Trágica", "Trilha Orquestrada"],
          image: "/assets/workshop-1.jpg",
        },
        {
          badge: "SUÍTE COREOGRÁFICA",
          category: "POEMA EM MOVIMENTO • 28 MIN • 12 BAILARINOS",
          title: "Graça Infinda",
          description:
            "Uma celebração lírica sobre a justificação pela fé e a leveza do jugo de Cristo. Com linhas neoclássicas fluidas, a peça ilustra a transição do fardo da lei mosaica para o descanso sabático no Redentor.",
          tags: ["Neoclássico", "Solo de Cordas", "Figurinos em Seda"],
          image: "/assets/workshop-2.jpg",
        },
      ],
    },
    agenda: {
      tag: "AGENDA • IGREJA ELOHIM",
      title: "Vamos celebrar juntos",
      nextNotice: "PRÓXIMO ENCONTRO: DEZEMBRO 2026",
      featured: {
        month: "DEZ",
        year: "2026",
        tag: "FESTIVIDADE • GRUPO SOMOS UM",
        title: "Eis que é chegada a hora.",
        church: "Igreja Elohim • Penedo / AL",
        notice: "Dia e horário serão divulgados em breve. Venha celebrar conosco!",
      },
      pastPresentations: [
        {
          date: "30 MAR",
          dayTime: "DOMINGO • 19H30",
          churchCity: "IGREJA ELOHIM - PENEDO/AL",
          venue: "Auditório Central do Pari",
          detail: "Estreia Nacional da Páscoa • Obra: O Resgate",
        },
        {
          date: "18 ABR",
          dayTime: "SEXTA-FEIRA • 20H00",
          churchCity: "IGREJA BATISTA - PENEDO/AL",
          venue: "Templo Monumental Batista",
          detail: "Conferência Aviva 2025 • Obra: Graça Infinda",
        },
      ],
    },
    testimonials: {
      tag: "HISTÓRIAS QUE CAMINHAM CONOSCO",
      title: "Fé que toca vidas",
      items: [
        {
          quote:
            "“Ver a Companhia Somos Um no altar não foi assistir a uma apresentação artística; foi ser constrangido pela presença manifesta da Cruz. Nossos jovens choraram em silêncio.”",
          name: "Pr. Roberto Alencar",
          role: "Comunidade Cristã Central • Penedo",
          image: "/assets/speaker-1.jpg",
        },
        {
          quote:
            "“O rigor técnico desta companhia rivaliza com os grandes corpos de baile do Theatro Municipal, contudo, o coração é totalmente desprovido de vaidade. É o sagrado no auge da forma.”",
          name: "Helena Bittencourt",
          role: "Crítica Cênica • Revista Movimento Sacro",
          image: "/assets/speaker-2.jpg",
        },
        {
          quote:
            "“Entrei como bailarino profissional e encontrei meu sacerdócio. No Somos Um, descobri que meu salto não é para os aplausos da plateia, mas uma oração física em favor das almas.”",
          name: "Lucas Brandão",
          role: "Solista • Corpo de Baile Somos Um",
          image: "/assets/speaker-3.jpg",
        },
      ],
    },
    audition: {
      tag: "SEUS DONS TÊM UM PROPÓSITO",
      title: "Faça parte desta história de fé",
      text: "Nosso grupo reúne dons da dança, do teatro e dos bastidores. Se você deseja servir a Deus por meio da arte, conheça o processo de participação no Somos Um.",
      requirements: [
        "Compromisso com vida devocional e igreja local ativa.",
        "Mínimo de 3 anos de prática técnica contínua comprovada.",
        "Disponibilidade para ensaios regulares e itinerância nacional.",
      ],
      howToApply:
        "Fase 1: Triagem de Portfólio em Vídeo • Fase 2: Imersão Litúrgica Presencial em São Paulo (15 a 17 de Março).",
    },
    invite: {
      tag: "VAMOS ADORAR EM COMUNHÃO",
      title: "Leve esta mensagem à sua igreja",
      text: "Dança e teatro para celebrar a glória de Deus e compartilhar o evangelho. Entre em contato com o Grupo Somos Um para conversar sobre uma ministração em sua comunidade.",
      techRider: "Mapa de luz simplificado e som orquestrado.",
      logistics: "Produção própria.",
      ministry: "Palavra pastoral e momento de apelo e altar conjunto.",
      contactCard: {
        boxTag: "FALE COM O GRUPO",
        title: "Vamos conversar?",
        notice: "Respondemos com caderno técnico e disponibilidade em até 24 horas úteis.",
        email: "agendas@somosumcia.art.br",
        phone: "+55 (82) 9 9999-9999 (WhatsApp Pastoral)",
        hours: "Atendimento: Seg — Sex, das 9h às 18h",
        buttonText: "CONVERSAR SOBRE UMA MINISTRAÇÃO",
        groupName: "GRUPO SOMOS UM",
      },
    },
    footer: {
      quote:
        "“O corpo que adora em verdade não performa vaidade; ele rasga o véu do invisível e convoca a presença.”",
      repertoireLinks: [
        "Vigília do Gênesis",
        "Kadosh in Motu",
        "O Cântico dos Mártires",
        "Arquivo Coreográfico",
      ],
      direction: "Curadoria Litúrgica Geral",
      cast: "18 Artistas Vocacionados",
      labs: "São Paulo • Rio de Janeiro",
      subNote: "Dança e teatro a serviço do evangelho. Jesus é o centro de tudo o que fazemos.",
      email: "contato@somosumcia.art.br",
      pressEmail: "imprensa@somosumcia.art.br",
    },
  };
}
