"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Calendar,
  Clock,
  MapPin,
  Menu,
  X,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  Users,
  Heart,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  Send,
  HelpCircle,
  ChevronDown,
} from "lucide-react";
import { LandingData } from "../_data-access/get-landing-data";
import { registerLead, RegisterInput, RegisterResult } from "../_actions/register-lead";

interface ContentProps {
  data: LandingData;
}

export function ContentComponent({ data }: ContentProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDayIndex, setActiveDayIndex] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Form state
  const [formInput, setFormInput] = useState<RegisterInput>({
    name: "",
    email: "",
    phone: "",
    church: "",
    workshop: "",
    acceptTerms: true,
  });
  const [formLoading, setFormLoading] = useState(false);
  const [formResult, setFormResult] = useState<RegisterResult | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormInput((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormInput((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormLoading(true);
    setFormResult(null);

    try {
      const res = await registerLead(formInput);
      setFormResult(res);
      if (res.success) {
        setFormInput({
          name: "",
          email: "",
          phone: "",
          church: "",
          workshop: "",
          acceptTerms: true,
        });
      }
    } catch {
      setFormResult({
        success: false,
        message: "Ocorreu um erro inesperado ao enviar sua inscrição. Tente novamente.",
      });
    } finally {
      setFormLoading(false);
    }
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FCF9F4] text-[#181A29]">
      {/* ===================== NAVBAR ===================== */}
      <header className="sticky top-0 z-50 bg-[#49000E]/95 backdrop-blur-md border-b border-[#6B111F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <div
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative w-12 h-12 flex-shrink-0">
              <Image
                src="/assets/logo.png"
                alt="Logo Somos Um"
                fill
                className="object-contain drop-shadow"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-[#C8A35C] group-hover:text-amber-200 transition-colors">
                SOMOS UM
              </span>
              <span className="text-[10px] sm:text-xs text-[#EDE8E0] tracking-widest uppercase">
                Festividade de Dezembro
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#EDE8E0]">
            <button
              onClick={() => scrollToSection("sobre")}
              className="hover:text-[#C8A35C] transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("destaques")}
              className="hover:text-[#C8A35C] transition-colors"
            >
              Destaques
            </button>
            <button
              onClick={() => scrollToSection("workshops")}
              className="hover:text-[#C8A35C] transition-colors"
            >
              Workshops
            </button>
            <button
              onClick={() => scrollToSection("programacao")}
              className="hover:text-[#C8A35C] transition-colors"
            >
              Programação
            </button>
            <button
              onClick={() => scrollToSection("preletores")}
              className="hover:text-[#C8A35C] transition-colors"
            >
              Preletores
            </button>
            <button
              onClick={() => scrollToSection("local")}
              className="hover:text-[#C8A35C] transition-colors"
            >
              Local
            </button>
          </nav>

          {/* Action CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => scrollToSection("inscricao")}
              className="bg-[#C8A35C] hover:bg-[#b38f46] text-[#49000E] font-semibold text-sm px-5 py-2.5 rounded-full shadow-lg transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <span>Inscrever-se</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-[#C8A35C] focus:outline-none"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#49000E] border-b border-[#6B111F] px-4 pt-2 pb-6 space-y-3 shadow-2xl">
            <button
              onClick={() => scrollToSection("sobre")}
              className="block w-full text-left py-2 text-[#EDE8E0] hover:text-[#C8A35C] border-b border-[#6B111F]/50"
            >
              Sobre o Evento
            </button>
            <button
              onClick={() => scrollToSection("destaques")}
              className="block w-full text-left py-2 text-[#EDE8E0] hover:text-[#C8A35C] border-b border-[#6B111F]/50"
            >
              Destaques
            </button>
            <button
              onClick={() => scrollToSection("workshops")}
              className="block w-full text-left py-2 text-[#EDE8E0] hover:text-[#C8A35C] border-b border-[#6B111F]/50"
            >
              Workshops
            </button>
            <button
              onClick={() => scrollToSection("programacao")}
              className="block w-full text-left py-2 text-[#EDE8E0] hover:text-[#C8A35C] border-b border-[#6B111F]/50"
            >
              Programação
            </button>
            <button
              onClick={() => scrollToSection("preletores")}
              className="block w-full text-left py-2 text-[#EDE8E0] hover:text-[#C8A35C] border-b border-[#6B111F]/50"
            >
              Preletores
            </button>
            <button
              onClick={() => scrollToSection("local")}
              className="block w-full text-left py-2 text-[#EDE8E0] hover:text-[#C8A35C] border-b border-[#6B111F]/50"
            >
              Local & Informações
            </button>
            <div className="pt-2">
              <button
                onClick={() => scrollToSection("inscricao")}
                className="w-full bg-[#C8A35C] text-[#49000E] font-bold py-3 rounded-lg text-center shadow-md flex items-center justify-center gap-2"
              >
                <span>Garantir Minha Vaga Gratuita</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ===================== HERO SECTION ===================== */}
      <section
        id="hero"
        className="relative bg-[#49000E] text-white pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden"
      >
        {/* Subtle background decoration */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C8A35C_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Headline and Call to Actions */}
            <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6B111F] border border-[#C8A35C]/40 text-[#C8A35C] text-xs sm:text-sm font-semibold tracking-wide">
                <Sparkles className="w-4 h-4 text-[#C8A35C]" />
                <span>{data.event.dates} • Entrada Franca</span>
              </div>

              {/* Title */}
              <div className="space-y-2">
                <span className="text-[#C8A35C] text-sm sm:text-base font-semibold tracking-widest uppercase">
                  {data.event.edition}
                </span>
                <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
                  SOMOS <span className="text-[#C8A35C]">UM</span>
                </h1>
              </div>

              {/* Theme Verse */}
              <blockquote className="border-l-4 border-[#C8A35C] pl-4 italic text-sm sm:text-base text-[#EDE8E0]/90 leading-relaxed max-w-xl">
                {data.event.verse}
                <footer className="text-xs font-semibold text-[#C8A35C] not-italic mt-1">
                  — {data.event.reference}
                </footer>
              </blockquote>

              {/* Event Quick Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-lg pt-2">
                <div className="flex items-center gap-3 bg-[#6B111F]/70 p-3 rounded-xl border border-[#C8A35C]/20">
                  <Calendar className="w-5 h-5 text-[#C8A35C] flex-shrink-0" />
                  <div className="text-xs">
                    <span className="block text-[#EDE8E0] font-medium">Dias do Evento</span>
                    <span className="font-semibold text-white">13 a 15 de Dezembro</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-[#6B111F]/70 p-3 rounded-xl border border-[#C8A35C]/20">
                  <MapPin className="w-5 h-5 text-[#C8A35C] flex-shrink-0" />
                  <div className="text-xs">
                    <span className="block text-[#EDE8E0] font-medium">Localização</span>
                    <span className="font-semibold text-white">Templo Central</span>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
                <button
                  onClick={() => scrollToSection("inscricao")}
                  className="bg-[#C8A35C] hover:bg-[#b38f46] text-[#49000E] font-bold text-base px-8 py-4 rounded-xl shadow-xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3"
                >
                  <span>Garantir Minha Vaga</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <button
                  onClick={() => scrollToSection("programacao")}
                  className="bg-transparent hover:bg-white/10 text-[#EDE8E0] border border-[#EDE8E0]/30 font-medium text-base px-6 py-4 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <span>Ver Cronograma</span>
                  <ChevronRight className="w-4 h-4 text-[#C8A35C]" />
                </button>
              </div>
            </div>

            {/* Right Column: Hero Banner Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative border frame */}
                <div className="absolute -inset-3 rounded-2xl bg-gradient-to-r from-[#C8A35C] via-[#6B111F] to-[#C8A35C] opacity-50 blur-sm transform -rotate-1" />

                <div className="relative rounded-2xl overflow-hidden border-2 border-[#C8A35C]/40 bg-[#6B111F] shadow-2xl">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={data.event.bannerImage}
                      alt="Festividade Somos Um"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#49000E] via-transparent to-transparent opacity-80" />
                  </div>

                  <div className="p-6 bg-[#49000E] text-white space-y-2">
                    <div className="flex items-center justify-between text-xs text-[#C8A35C] font-semibold">
                      <span>ENTRADA GRATUITA</span>
                      <span>VAGAS LIMITADAS</span>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-white">
                      Três noites inesquecíveis na presença de Deus
                    </h3>
                    <p className="text-xs text-[#EDE8E0]/80 leading-relaxed">
                      Convidamos você e sua família para celebrar o encerramento do ano com muita
                      gratidão, louvor congregacional e comunhão profunda.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== QUICK NUMBERS / COUNTERS ===================== */}
      <section className="bg-[#32000A] text-white py-8 border-b border-[#6B111F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#C8A35C]">3</span>
              <p className="text-xs sm:text-sm text-[#EDE8E0]">Dias de Celebração</p>
            </div>
            <div className="space-y-1">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#C8A35C]">+1.000</span>
              <p className="text-xs sm:text-sm text-[#EDE8E0]">Vagas Disponíveis</p>
            </div>
            <div className="space-y-1">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#C8A35C]">2</span>
              <p className="text-xs sm:text-sm text-[#EDE8E0]">Workshops Especiais</p>
            </div>
            <div className="space-y-1">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#C8A35C]">100%</span>
              <p className="text-xs sm:text-sm text-[#EDE8E0]">Acesso Gratuito</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== ABOUT SECTION ===================== */}
      <section id="sobre" className="py-20 bg-[#F6F3EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#49000E] bg-[#FFDADA] px-3.5 py-1 rounded-full">
              Sobre a Festividade
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#49000E]">
              O que nos une é maior do que qualquer diferença
            </h2>
            <div className="w-16 h-1 bg-[#C8A35C] mx-auto rounded-full" />
            <p className="text-base sm:text-lg text-[#564242] leading-relaxed pt-2">
              A <strong>Festividade de Dezembro "Somos Um"</strong> nasceu do desejo de reunir todas
              as gerações da igreja e da comunidade para celebrar a fidelidade de Deus e reafirmar
              nosso compromisso com o amor fraternal e o serviço mútuo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#EDE8E0] space-y-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#49000E] text-[#C8A35C] flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#49000E]">Comunhão Fraternal</h3>
              <p className="text-sm text-[#564242] leading-relaxed">
                Um espaço preparado com carinho para fortalecer relacionamentos, fazer novos amigos e
                celebrar a vida como membros da mesma família de fé.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#EDE8E0] space-y-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#49000E] text-[#C8A35C] flex items-center justify-center">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#49000E]">Alimento Espiritual</h3>
              <p className="text-sm text-[#564242] leading-relaxed">
                Mensagens bíblicas centradas em Cristo, trazendo esperança, cura e direção prática
                para os desafios cotidianos do novo ano que se aproxima.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#EDE8E0] space-y-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#49000E] text-[#C8A35C] flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#49000E]">Todas as Gerações</h3>
              <p className="text-sm text-[#564242] leading-relaxed">
                Crianças, jovens, adultos e idosos adorando juntos. Um evento planejado com
                atividades e acolhimento para toda a sua família.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== HIGHLIGHTS SECTION ===================== */}
      <section id="destaques" className="py-20 bg-[#FCF9F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#49000E] bg-[#FFDADA] px-3.5 py-1 rounded-full">
              Pilares do Evento
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#49000E]">
              O que você vai viver no Somos Um
            </h2>
            <div className="w-16 h-1 bg-[#C8A35C] mx-auto rounded-full" />
            <p className="text-sm sm:text-base text-[#564242]">
              Três dias estruturados para proporcionar um encontro genuíno com Deus e com o próximo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.highlights.map((highlight) => (
              <div
                key={highlight.id}
                className="bg-white rounded-2xl overflow-hidden border border-[#EDE8E0] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={highlight.image}
                    alt={highlight.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#49000E] text-[#C8A35C] text-xs font-bold px-3 py-1 rounded-full shadow">
                    {highlight.tag}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl font-bold text-[#49000E] group-hover:text-[#6B111F] transition-colors">
                      {highlight.title}
                    </h3>
                    <p className="text-sm text-[#564242] leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center text-xs font-bold text-[#C8A35C]">
                    <span>Experiência Inclusa</span>
                    <CheckCircle2 className="w-4 h-4 ml-1.5 text-emerald-600" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== WORKSHOPS SECTION ===================== */}
      <section id="workshops" className="py-20 bg-[#F0EDE9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#49000E] bg-[#FFDADA] px-3.5 py-1 rounded-full">
              Capacitação & Prática
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#49000E]">
              Workshops Temáticos Especiais
            </h2>
            <div className="w-16 h-1 bg-[#C8A35C] mx-auto rounded-full" />
            <p className="text-sm sm:text-base text-[#564242]">
              Sessões práticas e interativas no sábado para aprofundar temas essenciais para sua vida e vocação.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {data.workshops.map((workshop) => (
              <div
                key={workshop.id}
                className="bg-white rounded-2xl overflow-hidden border border-[#EDE8E0] shadow-sm hover:shadow-lg transition-all flex flex-col md:flex-row"
              >
                <div className="relative md:w-2/5 aspect-[4/3] md:aspect-auto">
                  <Image
                    src={workshop.image}
                    alt={workshop.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-[#49000E] text-white text-[11px] font-bold px-2.5 py-1 rounded-md">
                    Workshop
                  </div>
                </div>

                <div className="p-6 md:w-3/5 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-1.5">
                      {workshop.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-[#EDE8E0] text-[#49000E] text-[10px] font-semibold px-2 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="font-serif text-xl font-bold text-[#49000E]">
                      {workshop.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#564242] leading-relaxed">
                      {workshop.description}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-[#EDE8E0] text-xs text-[#564242]">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#C8A35C]" />
                      <span>{workshop.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#C8A35C]" />
                      <span>{workshop.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-[#C8A35C]" />
                      <span>Ministrante: <strong>{workshop.speaker}</strong></span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setFormInput((prev) => ({ ...prev, workshop: workshop.title }));
                      scrollToSection("inscricao");
                    }}
                    className="w-full bg-[#49000E] hover:bg-[#6B111F] text-white text-xs font-bold py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 mt-2"
                  >
                    <span>Selecionar este Workshop</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C8A35C]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SCHEDULE SECTION ===================== */}
      <section id="programacao" className="py-20 bg-[#FCF9F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#49000E] bg-[#FFDADA] px-3.5 py-1 rounded-full">
              Cronograma Oficial
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#49000E]">
              Programação Completa dos 3 Dias
            </h2>
            <div className="w-16 h-1 bg-[#C8A35C] mx-auto rounded-full" />
            <p className="text-sm sm:text-base text-[#564242]">
              Fique por dentro de cada reunião e venha participar de cada momento especial conosco.
            </p>
          </div>

          {/* Day Selector Tabs */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex p-1.5 rounded-xl bg-[#EDE8E0] max-w-full overflow-x-auto">
              {data.schedule.map((day, idx) => (
                <button
                  key={day.day}
                  onClick={() => setActiveDayIndex(idx)}
                  className={`px-4 sm:px-6 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                    activeDayIndex === idx
                      ? "bg-[#49000E] text-white shadow-md"
                      : "text-[#564242] hover:text-[#49000E]"
                  }`}
                >
                  <span className="block">{day.day}</span>
                  <span className="text-[10px] font-normal opacity-80">{day.date}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Active Day Content */}
          <div className="max-w-3xl mx-auto bg-white p-6 sm:p-10 rounded-2xl border border-[#EDE8E0] shadow-sm">
            <div className="mb-8 border-b border-[#EDE8E0] pb-4">
              <span className="text-xs font-bold text-[#C8A35C] uppercase tracking-wider">
                {data.schedule[activeDayIndex].day} • {data.schedule[activeDayIndex].date}
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#49000E] mt-1">
                {data.schedule[activeDayIndex].title}
              </h3>
            </div>

            <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-[#EDE8E0]">
              {data.schedule[activeDayIndex].items.map((item, i) => (
                <div key={i} className="relative flex items-start gap-6 pl-2">
                  <div className="w-4 h-4 rounded-full bg-[#49000E] border-4 border-white shadow-sm flex-shrink-0 mt-1.5 z-10" />

                  <div className="flex-1 bg-[#FCF9F4] p-5 rounded-xl border border-[#EDE8E0] space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#49000E] bg-white px-2.5 py-1 rounded-md border border-[#EDE8E0]">
                        <Clock className="w-3.5 h-3.5 text-[#C8A35C]" />
                        {item.time}
                      </span>

                      {item.badge && (
                        <span className="text-[10px] font-bold uppercase bg-[#FFDADA] text-[#49000E] px-2 py-0.5 rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </div>

                    <h4 className="font-serif text-lg font-bold text-[#49000E]">
                      {item.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-[#564242] leading-relaxed">
                      {item.description}
                    </p>

                    <div className="flex items-center gap-1 text-[11px] text-[#767676] pt-1">
                      <MapPin className="w-3.5 h-3.5 text-[#C8A35C]" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SPEAKERS SECTION ===================== */}
      <section id="preletores" className="py-20 bg-[#F6F3EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#49000E] bg-[#FFDADA] px-3.5 py-1 rounded-full">
              Vozes Inspiradoras
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#49000E]">
              Ministrantes & Preletores Convidados
            </h2>
            <div className="w-16 h-1 bg-[#C8A35C] mx-auto rounded-full" />
            <p className="text-sm sm:text-base text-[#564242]">
              Líderes comprometidos com o ensino das Sagradas Escrituras e com o coração voltado ao avivamento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {data.speakers.map((speaker) => (
              <div
                key={speaker.name}
                className="bg-white p-6 rounded-2xl border border-[#EDE8E0] shadow-sm text-center flex flex-col items-center space-y-4 hover:shadow-lg transition-all"
              >
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-[#C8A35C]/50 shadow-md">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="space-y-1">
                  <h3 className="font-serif text-lg font-bold text-[#49000E]">{speaker.name}</h3>
                  <p className="text-xs font-semibold text-[#C8A35C]">{speaker.role}</p>
                  <p className="text-[11px] text-[#767676]">{speaker.church}</p>
                </div>

                <p className="text-xs text-[#564242] leading-relaxed italic">
                  "{speaker.bio}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== REGISTRATION FORM SECTION ===================== */}
      <section id="inscricao" className="py-20 bg-[#49000E] text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Form Info Left */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#C8A35C] bg-[#6B111F] px-3.5 py-1 rounded-full border border-[#C8A35C]/30">
                Inscrição Gratuita
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Garanta o seu lugar na Festividade
              </h2>
              <p className="text-sm sm:text-base text-[#EDE8E0]/90 leading-relaxed">
                As inscrições são gratuitas e servem para prepararmos o crachá de identificação, o
                kit do congressista e o controle de capacidade do auditório.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-[#EDE8E0]">
                  <CheckCircle2 className="w-5 h-5 text-[#C8A35C] flex-shrink-0" />
                  <span>Acesso a todas as plenárias dos 3 dias</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-[#EDE8E0]">
                  <CheckCircle2 className="w-5 h-5 text-[#C8A35C] flex-shrink-0" />
                  <span>Opção de participação em workshops temáticos</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-[#EDE8E0]">
                  <CheckCircle2 className="w-5 h-5 text-[#C8A35C] flex-shrink-0" />
                  <span>Espaço Kids monitorado para crianças</span>
                </div>
              </div>
            </div>

            {/* Registration Card Right */}
            <div className="lg:col-span-7">
              <div className="bg-[#FCF9F4] text-[#181A29] p-6 sm:p-10 rounded-3xl shadow-2xl border border-[#EDE8E0]">
                <div className="mb-6 space-y-1">
                  <h3 className="font-serif text-2xl font-bold text-[#49000E]">
                    Formulário de Confirmação
                  </h3>
                  <p className="text-xs text-[#564242]">
                    Preencha com seus dados abaixo para receber seu comprovante por e-mail.
                  </p>
                </div>

                {formResult && (
                  <div
                    className={`p-4 rounded-xl mb-6 text-sm flex items-start gap-3 ${
                      formResult.success
                        ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                        : "bg-rose-50 text-rose-800 border border-rose-200"
                    }`}
                  >
                    {formResult.success ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    ) : (
                      <ShieldCheck className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                    )}
                    <div>
                      <p className="font-semibold">{formResult.message}</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-[#49000E] mb-1">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Ex: Gabriel Santos da Silva"
                      value={formInput.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#EDE8E0] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#49000E]"
                    />
                    {formResult?.errors?.name && (
                      <p className="text-xs text-rose-600 mt-1">{formResult.errors.name[0]}</p>
                    )}
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#49000E] mb-1">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="seuemail@exemplo.com"
                        value={formInput.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-[#EDE8E0] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#49000E]"
                      />
                      {formResult?.errors?.email && (
                        <p className="text-xs text-rose-600 mt-1">{formResult.errors.email[0]}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#49000E] mb-1">
                        WhatsApp / Celular *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="(00) 90000-0000"
                        value={formInput.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-[#EDE8E0] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#49000E]"
                      />
                      {formResult?.errors?.phone && (
                        <p className="text-xs text-rose-600 mt-1">{formResult.errors.phone[0]}</p>
                      )}
                    </div>
                  </div>

                  {/* Church & Workshop Selection */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#49000E] mb-1">
                        Igreja / Congregação
                      </label>
                      <input
                        type="text"
                        name="church"
                        placeholder="Ex: Templo Central ou Visitante"
                        value={formInput.church}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-[#EDE8E0] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#49000E]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#49000E] mb-1">
                        Workshop de Interesse
                      </label>
                      <select
                        name="workshop"
                        value={formInput.workshop}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-[#EDE8E0] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#49000E]"
                      >
                        <option value="">Nenhum / Apenas Cultos</option>
                        {data.workshops.map((ws) => (
                          <option key={ws.id} value={ws.title}>
                            {ws.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Terms Checkbox */}
                  <div className="pt-2">
                    <label className="flex items-start gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        name="acceptTerms"
                        checked={formInput.acceptTerms}
                        onChange={handleInputChange}
                        className="mt-1 rounded text-[#49000E] focus:ring-[#49000E] border-[#EDE8E0]"
                      />
                      <span className="text-xs text-[#564242] leading-tight">
                        Concordo em receber as comunicações e o voucher de confirmação do evento no
                        meu e-mail e WhatsApp.
                      </span>
                    </label>
                    {formResult?.errors?.acceptTerms && (
                      <p className="text-xs text-rose-600 mt-1">
                        {formResult.errors.acceptTerms[0]}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-3">
                    <button
                      type="submit"
                      disabled={formLoading}
                      className="w-full bg-[#49000E] hover:bg-[#6B111F] text-white font-bold py-4 rounded-xl shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
                    >
                      {formLoading ? (
                        <span>Processando sua inscrição...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-[#C8A35C]" />
                          <span>Confirmar Inscrição Gratuita</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== LOCATION / VENUE SECTION ===================== */}
      <section id="local" className="py-20 bg-[#FCF9F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#49000E] rounded-3xl overflow-hidden shadow-xl text-white">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-7 p-8 sm:p-12 space-y-6">
                <span className="text-xs font-bold tracking-widest uppercase text-[#C8A35C] bg-[#6B111F] px-3.5 py-1 rounded-full border border-[#C8A35C]/30">
                  Como Chegar
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                  Localização do Evento
                </h3>
                <p className="text-sm text-[#EDE8E0]/90 leading-relaxed">
                  O evento será realizado no auditório principal, com estrutura climatizada,
                  acessibilidade para cadeirantes, estacionamento no local e equipe de acolhimento.
                </p>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#C8A35C] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-sm block">{data.event.location}</span>
                      <span className="text-xs text-[#EDE8E0]">{data.event.address}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-[#C8A35C] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-sm block">13 a 15 de Dezembro de 2026</span>
                      <span className="text-xs text-[#EDE8E0]">
                        Sexta às 19h30 • Sábado das 09h às 21h • Domingo às 09h30 e 18h
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => scrollToSection("inscricao")}
                    className="bg-[#C8A35C] hover:bg-[#b38f46] text-[#49000E] font-bold text-sm px-6 py-3 rounded-xl shadow-md transition-all inline-flex items-center gap-2"
                  >
                    <span>Fazer Inscrição Agora</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Venue Illustration / Visual Side */}
              <div className="lg:col-span-5 bg-[#6B111F] p-8 sm:p-12 flex flex-col justify-center items-center text-center border-t lg:border-t-0 lg:border-l border-[#C8A35C]/20">
                <div className="w-20 h-20 rounded-2xl bg-[#49000E] border-2 border-[#C8A35C] flex items-center justify-center mb-6 shadow-inner">
                  <MapPin className="w-10 h-10 text-[#C8A35C]" />
                </div>
                <h4 className="font-serif text-2xl font-bold text-white mb-2">Estacionamento Livre</h4>
                <p className="text-xs text-[#EDE8E0] max-w-xs leading-relaxed mb-6">
                  Vagas gratuitas para participantes no pátio interno com seguranças e orientadores de trânsito.
                </p>
                <div className="w-full bg-[#49000E] p-4 rounded-xl border border-[#C8A35C]/30 text-xs text-[#C8A35C] font-semibold">
                  ✓ Linhas de transporte público com ponto em frente
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FAQ SECTION ===================== */}
      <section className="py-20 bg-[#F6F3EE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-14">
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#49000E] bg-[#FFDADA] px-3.5 py-1 rounded-full">
              Dúvidas Frequentes
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#49000E]">
              Perguntas Frequentes
            </h2>
            <div className="w-16 h-1 bg-[#C8A35C] mx-auto rounded-full" />
          </div>

          <div className="space-y-4">
            {data.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-[#EDE8E0] overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-serif text-base sm:text-lg font-bold text-[#49000E]"
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-[#C8A35C] flex-shrink-0" />
                      <span>{faq.question}</span>
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#49000E] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-sm text-[#564242] leading-relaxed border-t border-[#EDE8E0]/60">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
      <footer className="bg-[#F6F3EE] border-t border-[#EDE8E0] text-[#181A29] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
            {/* Logo and brief */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10">
                  <Image
                    src="/assets/logo.png"
                    alt="Logo Somos Um"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-lg font-bold text-[#49000E] tracking-wider">
                    SOMOS UM
                  </span>
                  <span className="text-[10px] text-[#767676] tracking-widest uppercase">
                    Festividade de Dezembro
                  </span>
                </div>
              </div>

              <p className="text-xs text-[#564242] leading-relaxed max-w-sm">
                Uma festividade dedicada a celebrar a unidade da igreja, a gratidão a Deus e o amor
                fraternal através do louvor, comunhão e palavra bíblica.
              </p>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3 space-y-3">
              <span className="font-serif text-sm font-bold text-[#49000E] uppercase tracking-wider block">
                Navegação Rápida
              </span>
              <ul className="space-y-2 text-xs text-[#564242]">
                <li>
                  <button onClick={() => scrollToSection("hero")} className="hover:text-[#49000E]">
                    Início
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("sobre")} className="hover:text-[#49000E]">
                    Sobre a Festividade
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("programacao")}
                    className="hover:text-[#49000E]"
                  >
                    Cronograma dos Dias
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("preletores")}
                    className="hover:text-[#49000E]"
                  >
                    Preletores Convidados
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("inscricao")}
                    className="hover:text-[#49000E]"
                  >
                    Inscrição Gratuita
                  </button>
                </li>
              </ul>
            </div>

            {/* Event Dates & Church Info */}
            <div className="md:col-span-4 space-y-3">
              <span className="font-serif text-sm font-bold text-[#49000E] uppercase tracking-wider block">
                Informações do Evento
              </span>
              <div className="space-y-2 text-xs text-[#564242]">
                <p>
                  <strong>Data:</strong> 13 a 15 de Dezembro de 2026
                </p>
                <p>
                  <strong>Local:</strong> Templo Central — Auditório Principal
                </p>
                <p>
                  <strong>Endereço:</strong> Av. Central, 1000 — Centro
                </p>
                <p>
                  <strong>Entrada:</strong> 100% Gratuita (com crachá via inscrição)
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-[#EDE8E0] flex flex-col sm:flex-row items-center justify-between text-xs text-[#767676] gap-4">
            <p>© 2026 Festividade Somos Um. Todos os direitos reservados.</p>
            <p className="flex items-center gap-1">
              <span>Feito com fé e excelência para visualização</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
