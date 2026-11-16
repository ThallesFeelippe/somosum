export interface Highlight {
  id: string;
  title: string;
  description: string;
  image: string;
  tag: string;
}

export interface Workshop {
  id: string;
  title: string;
  description: string;
  speaker: string;
  time: string;
  location: string;
  image: string;
  tags: string[];
}

export interface ScheduleItem {
  time: string;
  title: string;
  description: string;
  location: string;
  badge?: string;
}

export interface ScheduleDay {
  day: string;
  date: string;
  title: string;
  items: ScheduleItem[];
}

export interface Speaker {
  name: string;
  role: string;
  church: string;
  image: string;
  bio: string;
}

export interface LandingData {
  event: {
    name: string;
    edition: string;
    theme: string;
    verse: string;
    reference: string;
    dates: string;
    location: string;
    address: string;
    bannerImage: string;
    logoImage: string;
  };
  highlights: Highlight[];
  workshops: Workshop[];
  schedule: ScheduleDay[];
  speakers: Speaker[];
  faqs: { question: string; answer: string }[];
}

export async function getLandingData(): Promise<LandingData> {
  // Simulando Data Access Layer server-side conforme padrão de arquitetura
  return {
    event: {
      name: "Somos Um",
      edition: "Festividade de Dezembro",
      theme: "Unidade, Fé e Renovação",
      verse: "“Para que todos sejam um, como tu, ó Pai, o és em mim, e eu, em ti; que também eles sejam um em nós, para que o mundo creia que tu me enviaste.”",
      reference: "João 17:21",
      dates: "13 a 15 de Dezembro de 2026",
      location: "Templo Central — Auditório Principal",
      address: "Av. Central, 1000 — Centro",
      bannerImage: "/assets/hero-banner.jpg",
      logoImage: "/assets/logo.png",
    },
    highlights: [
      {
        id: "adoracao",
        title: "Louvor & Adoração Intensa",
        description:
          "Momentos únicos de celebração e adoração congregacional com corais, orquestra e ministração ao vivo.",
        image: "/assets/highlight-1.jpg",
        tag: "Espiritualidade",
      },
      {
        id: "palavra",
        title: "Palavra Transformadora",
        description:
          "Mensagens bíblicas profundas e práticas para fortalecer a sua fé, sua família e sua caminhada com Deus.",
        image: "/assets/highlight-2.jpg",
        tag: "Edificação",
      },
      {
        id: "comunhao",
        title: "Comunhão & Integração",
        description:
          "Três dias de reencontros, fraternidade e fortalecimento dos laços que nos unem como uma só família.",
        image: "/assets/highlight-3.jpg",
        tag: "Unidade",
      },
    ],
    workshops: [
      {
        id: "ws-1",
        title: "Liderança de Serviço & Unidade",
        description:
          "Capacitação prática para voluntários, líderes ministeriais e servos focados em edificar vidas com amor e excelência.",
        speaker: "Pr. Marcos Aurélio",
        time: "Sábado, às 10h00",
        location: "Sala Multiuso A",
        image: "/assets/workshop-1.jpg",
        tags: ["Liderança", "Capacitação", "Ministério"],
      },
      {
        id: "ws-2",
        title: "Nova Geração com Propósito",
        description:
          "Abordagem dinâmica para jovens e adolescentes viverem a fé com relevância e autenticidade nos dias de hoje.",
        speaker: "Pr. Daniel Carvalho",
        time: "Sábado, às 14h30",
        location: "Auditório das Crianças & Jovens",
        image: "/assets/workshop-2.jpg",
        tags: ["Juventude", "Missões", "Vocação"],
      },
    ],
    schedule: [
      {
        day: "Sexta-feira",
        date: "13 de Dezembro",
        title: "Abertura Oficial e Consagração",
        items: [
          {
            time: "18h30",
            title: "Recepção & Credenciamento",
            description: "Acolhimento especial com entrega de crachás e kits do participante.",
            location: "Hall de Entrada",
          },
          {
            time: "19h30",
            title: "Culto Solene de Abertura: 'Somos Um'",
            description: "Entrada das bandeiras, louvor com grande coral e mensagem inaugural.",
            location: "Nave Principal",
            badge: "Abertura Oficial",
          },
        ],
      },
      {
        day: "Sábado",
        date: "14 de Dezembro",
        title: "Workshops, Comunhão e Grande Celebração",
        items: [
          {
            time: "09h00",
            title: "Devocional & Café da Comunhão",
            description: "Momento matutino de oração congregacional seguido de confraternização.",
            location: "Área de Convivência",
          },
          {
            time: "10h30",
            title: "Workshops Temáticos Simultâneos",
            description: "Salas de liderança, família, adoração e nova geração.",
            location: "Salas do 1º Andar",
            badge: "Workshops",
          },
          {
            time: "19h00",
            title: "Grande Noite de Louvor & Testemunhos",
            description: "Noite marcada por ministração de louvor, oração e palavra profética.",
            location: "Nave Principal",
            badge: "Destaque",
          },
        ],
      },
      {
        day: "Domingo",
        date: "15 de Dezembro",
        title: "Encerramento e Gratidão",
        items: [
          {
            time: "09h30",
            title: "Culto Matutino da Família & Ceia",
            description: "Celebração da Santa Ceia da Unidade com todas as gerações reunidas.",
            location: "Nave Principal",
            badge: "Santa Ceia",
          },
          {
            time: "18h00",
            title: "Culto Festivo de Encerramento",
            description: "Ação de graças pelas vitórias do ano e proclamação para o novo tempo.",
            location: "Nave Principal",
            badge: "Grande Encerramento",
          },
        ],
      },
    ],
    speakers: [
      {
        name: "Pr. Marcos Aurélio",
        role: "Pastor Presidente & Preletor Oficial",
        church: "Igreja Central",
        image: "/assets/speaker-1.jpg",
        bio: "Mais de 25 anos dedicados ao ensino bíblico, edificação de famílias e liderança pastoral.",
      },
      {
        name: "Pra. Helena Silveira",
        role: "Ministra de Adoração & Escritora",
        church: "Ministério Vozes de Sião",
        image: "/assets/speaker-2.jpg",
        bio: "Conferencista internacional e líder de louvor apaixonada por inspirar uma adoração genuína.",
      },
      {
        name: "Pr. Daniel Carvalho",
        role: "Líder de Juventude & Conferencista",
        church: "Movimento Um Propósito",
        image: "/assets/speaker-3.jpg",
        bio: "Dedicado a mobilizar jovens cristãos para o serviço social, missões e transformação cultural.",
      },
    ],
    faqs: [
      {
        question: "A participação no evento é gratuita?",
        answer:
          "Sim! A entrada em todas as plenárias principais é totalmente livre e gratuita. Recomendamos apenas preencher o formulário de inscrição antecipado para garantir sua vaga e crachá de identificação.",
      },
      {
        question: "Haverá ministério infantil (espaço kids)?",
        answer:
          "Sim! Teremos uma equipe dedicada e segura para cuidar e ministrar às crianças de 2 a 10 anos durante todas as reuniões noturnas.",
      },
      {
        question: "Posso convidar amigos e familiares que não são membros?",
        answer:
          "Com certeza! O 'Somos Um' é um evento aberto a toda a comunidade e familiares. Todos são muito bem-vindos.",
      },
      {
        question: "Haverá transmissão online?",
        answer:
          "Os cultos noturnos serão transmitidos ao vivo em nosso canal oficial no YouTube para quem não puder comparecer presencialmente.",
      },
    ],
  };
}
