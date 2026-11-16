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
    heroTitle: string;
    heroSubtitle: string;
    verse: string;
    reference: string;
    dates: string;
    datesNotice: string;
    cardTag: string;
    churchName: string;
    cityState: string;
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
  return {
    event: {
      name: "Somos Um",
      edition: "Festividade de Dezembro",
      heroTitle: "Chegada é a hora.",
      heroSubtitle:
        "Um chamado ao serviço do Reino. Venha se juntar a nós para celebrar a fé e adoração.",
      verse:
        "“...chegada é a hora, e o Filho do Homem é entregue nas mãos dos pecadores.”",
      reference: "Marcos 14:41",
      dates: "Dezembro 2026",
      datesNotice: "Dia e horário serão divulgados em breve.",
      cardTag: "PREPARE O CORAÇÃO",
      churchName: "Igreja Elohim",
      cityState: "Penedo / AL",
      location: "Igreja Elohim — Templo Sede",
      address: "Penedo — Alagoas / AL",
      bannerImage: "/assets/hero-banner.jpg",
      logoImage: "/assets/logo.png",
    },
    highlights: [
      {
        id: "adoracao",
        title: "Louvor & Adoração Intensa",
        description:
          "Momentos de celebração e adoração congregacional, dança ministerial e louvor ao vivo.",
        image: "/assets/highlight-1.jpg",
        tag: "Espiritualidade",
      },
      {
        id: "palavra",
        title: "Palavra Transformadora",
        description:
          "Mensagens bíblicas centradas nas Escrituras para fortalecer a sua fé e sua família.",
        image: "/assets/highlight-2.jpg",
        tag: "Edificação",
      },
      {
        id: "comunhao",
        title: "Comunhão & Unidade",
        description:
          "Celebrando a unidade do corpo de Cristo: uma só fé, um só coração, um só propósito.",
        image: "/assets/highlight-3.jpg",
        tag: "Unidade",
      },
    ],
    workshops: [
      {
        id: "ws-1",
        title: "Liderança de Serviço & Unidade",
        description:
          "Capacitação para voluntários e servos focados em edificar vidas com amor e excelência.",
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
          "Abordagem dinâmica para jovens e adolescentes viverem a fé com relevância e autenticidade.",
        speaker: "Pr. Daniel Carvalho",
        time: "Sábado, às 14h30",
        location: "Auditório dos Jovens",
        image: "/assets/workshop-2.jpg",
        tags: ["Juventude", "Missões", "Vocação"],
      },
    ],
    schedule: [
      {
        day: "Sexta-feira",
        date: "Dezembro 2026",
        title: "Abertura Oficial e Consagração",
        items: [
          {
            time: "18h30",
            title: "Recepção & Acolhimento",
            description: "Recepção com entrega de crachás e credenciamento dos participantes.",
            location: "Hall de Entrada",
          },
          {
            time: "19h30",
            title: "Culto Solene de Abertura: 'Somos Um'",
            description: "Abertura oficial com ministração de dança, coral e palavra inaugural.",
            location: "Nave Principal",
            badge: "Abertura Oficial",
          },
        ],
      },
      {
        day: "Sábado",
        date: "Dezembro 2026",
        title: "Workshops, Comunhão e Celebração",
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
            description: "Capacitação em liderança, adoração e juventude.",
            location: "Salas de Treinamento",
            badge: "Workshops",
          },
          {
            time: "19h00",
            title: "Grande Noite de Louvor & Adoração",
            description: "Noite de clamor, ministração profética e testemunhos inspiradores.",
            location: "Nave Principal",
            badge: "Destaque",
          },
        ],
      },
      {
        day: "Domingo",
        date: "Dezembro 2026",
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
            title: "Grande Culto Festivo de Encerramento",
            description: "Ação de graças pelas vitórias do ano e proclamação para o novo tempo.",
            location: "Nave Principal",
            badge: "Encerramento",
          },
        ],
      },
    ],
    speakers: [
      {
        name: "Pr. Marcos Aurélio",
        role: "Pastor Presidente & Preletor",
        church: "Igreja Elohim",
        image: "/assets/speaker-1.jpg",
        bio: "Dedicado ao ensino bíblico, edificação de famílias e pastoreio da Igreja Elohim em Penedo / AL.",
      },
      {
        name: "Pra. Helena Silveira",
        role: "Ministra de Adoração & Dança",
        church: "Ministério Vozes de Sião",
        image: "/assets/speaker-2.jpg",
        bio: "Líder de ministério e apaixonada por inspirar uma adoração genuína e viva.",
      },
      {
        name: "Pr. Daniel Carvalho",
        role: "Líder de Juventude & Missões",
        church: "Movimento Um Propósito",
        image: "/assets/speaker-3.jpg",
        bio: "Mobilizando jovens cristãos para o serviço social, discipulado e missões.",
      },
    ],
    faqs: [
      {
        question: "A participação no evento é gratuita?",
        answer:
          "Sim! A entrada em todas as plenárias principais é totalmente livre e gratuita. Recomendamos preencher o formulário para garantir sua vaga e crachá de identificação.",
      },
      {
        question: "Onde será realizado o evento?",
        answer:
          "Na Igreja Elohim em Penedo / AL. O endereço completo e as orientações de trânsito estão disponíveis na seção Local.",
      },
      {
        question: "Haverá espaço para crianças?",
        answer:
          "Sim! Teremos o Espaço Kids com monitores dedicados durante as reuniões noturnas.",
      },
      {
        question: "Quando serão divulgados os dias exatos e horários?",
        answer:
          "A programação detalhada com dias e horários definitivos de Dezembro 2026 será enviada diretamente para o e-mail e WhatsApp de todos os inscritos.",
      },
    ],
  };
}
