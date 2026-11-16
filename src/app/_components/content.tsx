"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Menu,
  X,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  Mail,
  Phone,
  Clock,
  Play,
} from "lucide-react";
import { LandingData } from "../_data-access/get-landing-data";
import { registerLead, RegisterInput, RegisterResult } from "../_actions/register-lead";

interface ContentProps {
  data: LandingData;
}

export function ContentComponent({ data }: ContentProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Form state
  const [formInput, setFormInput] = useState<RegisterInput>({
    name: "",
    email: "",
    phone: "",
    church: "",
    workshop: "Dança Contemporânea / Clássica",
    acceptTerms: true,
  });
  const [videoLink, setVideoLink] = useState("");
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
          workshop: "Dança Contemporânea / Clássica",
          acceptTerms: true,
        });
        setVideoLink("");
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
      <header className="sticky top-0 z-50 bg-[#49000E] border-b border-[#6B111F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
          {/* Logo & Subtitle */}
          <div
            onClick={() => scrollToSection("hero")}
            className="flex flex-col cursor-pointer group"
          >
            <span className="font-serif text-3xl sm:text-[43px] font-bold tracking-widest text-white group-hover:text-[#C8A35C] transition-colors leading-none">
              {data.nav.title}
            </span>
            <span className="text-[10px] sm:text-[11px] tracking-[0.22em] text-[#C8A35C] font-sans font-semibold uppercase mt-2 leading-none">
              {data.nav.subtitle}
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-sans text-[#FCF9F4] font-normal">
            <button
              onClick={() => scrollToSection("grupo")}
              className="hover:text-[#C8A35C] transition-colors cursor-pointer"
            >
              O grupo
            </button>
            <button
              onClick={() => scrollToSection("proposito")}
              className="hover:text-[#C8A35C] transition-colors cursor-pointer"
            >
              Nosso propósito
            </button>
            <button
              onClick={() => scrollToSection("obras")}
              className="hover:text-[#C8A35C] transition-colors cursor-pointer"
            >
              Obras
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="hover:text-[#C8A35C] transition-colors cursor-pointer"
            >
              Contato
            </button>
          </nav>

          {/* Right Action & Church Seal */}
          <div className="hidden md:flex items-center gap-5">
            <button
              onClick={() => scrollToSection("agenda")}
              className="bg-[#C8A35C] hover:bg-[#b38f46] text-[#49000E] font-bold text-xs uppercase tracking-wider px-7 py-3 rounded-lg shadow-md transition-all cursor-pointer"
            >
              {data.nav.buttonText}
            </button>
            <div className="relative w-[100px] h-[55px] flex-shrink-0">
              <img
                src={data.nav.logoImage}
                alt="Emblema Igreja Elohim"
                style={{
                  position: "absolute",
                  height: "100px",
                  width: "100px",
                  left: 0,
                  top: "-27px",
                  right: 0,
                  bottom: 0,
                  color: "transparent",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <div className="relative w-12 h-10 flex-shrink-0">
              <Image
                src={data.nav.logoImage}
                alt="Emblema Igreja Elohim"
                fill
                className="object-contain"
              />
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-[#C8A35C] focus:outline-none"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#49000E] border-b border-[#6B111F] px-4 pt-2 pb-6 space-y-3 shadow-2xl">
            <button
              onClick={() => scrollToSection("grupo")}
              className="block w-full text-left py-2 text-[#EDE8E0] hover:text-[#C8A35C] border-b border-[#6B111F]/50 font-sans"
            >
              O grupo
            </button>
            <button
              onClick={() => scrollToSection("proposito")}
              className="block w-full text-left py-2 text-[#EDE8E0] hover:text-[#C8A35C] border-b border-[#6B111F]/50 font-sans"
            >
              Nosso propósito
            </button>
            <button
              onClick={() => scrollToSection("obras")}
              className="block w-full text-left py-2 text-[#EDE8E0] hover:text-[#C8A35C] border-b border-[#6B111F]/50 font-sans"
            >
              Obras
            </button>
            <button
              onClick={() => scrollToSection("agenda")}
              className="block w-full text-left py-2 text-[#EDE8E0] hover:text-[#C8A35C] border-b border-[#6B111F]/50 font-sans"
            >
              Agenda
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="block w-full text-left py-2 text-[#EDE8E0] hover:text-[#C8A35C] border-b border-[#6B111F]/50 font-sans"
            >
              Contato
            </button>
            <div className="pt-2">
              <button
                onClick={() => scrollToSection("agenda")}
                className="w-full bg-[#C8A35C] text-[#49000E] font-bold text-xs uppercase py-3 rounded-lg text-center shadow"
              >
                {data.nav.buttonText}
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ===================== HERO SECTION ===================== */}
      <section
        id="hero"
        className="relative bg-[#49000E] text-white pt-10 pb-16 lg:pt-14 lg:pb-24 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
              {/* Top Tag */}
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#EDE8E0]/70 block">
                {data.hero.tag}
              </span>

              {/* Main Headline */}
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-[76px] font-normal text-white tracking-tight leading-[1.05]">
                {data.hero.titleLine1} <br />
                {data.hero.titleLine2}
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-[#EDE8E0]/90 leading-relaxed max-w-lg font-sans">
                {data.hero.subtitle}
              </p>

              {/* Gold Button & Note */}
              <div className="space-y-2 pt-1">
                <button
                  onClick={() => scrollToSection("proposito")}
                  className="bg-[#C8A35C] hover:bg-[#b38f46] text-[#49000E] font-bold text-xs tracking-widest uppercase px-7 py-3.5 rounded-lg shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer block"
                >
                  {data.hero.buttonText}
                </button>
                <span className="text-xs text-[#EDE8E0]/70 font-sans block">
                  {data.hero.buttonNote}
                </span>
              </div>

              {/* Scripture Quote */}
              <div className="space-y-2 pt-4 max-w-lg border-t border-[#6B111F]/60">
                <p className="font-serif italic text-lg sm:text-xl text-white/95 leading-snug">
                  {data.hero.verse}
                </p>
                <span className="text-[11px] font-bold tracking-wider text-[#C8A35C] uppercase block">
                  {data.hero.reference}
                </span>
              </div>
            </div>

            {/* Right Photo with Floating Card (EXACTLY AS IN DESIGN) */}
            <div className="lg:col-span-6 relative pt-4 sm:pt-0">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                {/* Photo container */}
                <div className="relative aspect-[4/3] sm:aspect-[5/4] lg:aspect-[1/1] rounded-2xl overflow-hidden shadow-2xl bg-[#32000A] border border-[#6B111F]">
                  <Image
                    src={data.hero.bannerImage}
                    alt="Dançarinos Grupo Somos Um"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Floating Card */}
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-[#FCF9F4] text-[#49000E] p-6 sm:p-7 rounded-2xl shadow-2xl border border-[#EDE8E0] z-20">
                    <span className="text-[11px] font-bold tracking-widest uppercase text-[#564242] block mb-1">
                      {data.hero.card.tag}
                    </span>
                    <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#49000E] tracking-tight">
                      {data.hero.card.title}
                    </h3>
                    <p className="text-sm font-semibold text-[#49000E] mt-1 flex items-center gap-1.5">
                      <span>{data.hero.card.church}</span>
                      <span className="text-[#C8A35C]">•</span>
                      <span>{data.hero.card.cityState}</span>
                    </p>
                    <p className="text-xs text-[#564242] mt-1 font-sans">
                      {data.hero.card.notice}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== METRICS STRIP ===================== */}
      <section className="bg-[#49000E] text-white border-t border-b border-[#C8A35C]/30 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#6B111F] gap-2">
            <h2 className="font-serif text-xl sm:text-2xl text-white font-normal">
              {data.metricsHeader.title}
            </h2>
            <span className="text-xs tracking-[0.25em] text-[#C8A35C] uppercase font-sans font-semibold">
              {data.metricsHeader.tags}
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6">
            {data.metrics.map((m, idx) => (
              <div key={idx} className="space-y-1">
                <span className="font-serif text-4xl sm:text-5xl font-normal text-[#C8A35C]">
                  {m.value}
                </span>
                <p className="text-xs font-bold text-white tracking-wider uppercase">
                  {m.label}
                </p>
                <p className="text-[11px] text-[#EDE8E0]/70 font-sans">{m.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== PURPOSE & MANIFESTO SECTION ===================== */}
      <section id="proposito" className="py-20 bg-[#FCF9F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Top Quote Box with Left Border */}
          <div className="border-l-4 border-[#49000E] pl-6 sm:pl-8 py-2 max-w-4xl space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#49000E] uppercase block">
              {data.purpose.quoteTag}
            </span>
            <blockquote className="font-serif italic text-2xl sm:text-3xl text-[#49000E] leading-relaxed">
              {data.purpose.quoteText}
            </blockquote>
            <span className="text-xs font-semibold text-[#564242] tracking-wider uppercase block">
              {data.purpose.quoteAuthor}
            </span>
          </div>

          {/* Two Columns */}
          <div id="grupo" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#49000E] uppercase tracking-wide">
                {data.purpose.leftTitle}
              </h2>
              {data.purpose.leftParagraphs.map((para, i) => (
                <p key={i} className="text-sm sm:text-base text-[#564242] leading-relaxed font-sans">
                  {para}
                </p>
              ))}
            </div>

            {/* Right Card */}
            <div className="lg:col-span-6">
              <div className="bg-[#F6F3EE] p-8 sm:p-10 rounded-2xl border border-[#EDE8E0] space-y-6">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#49000E] uppercase tracking-wide">
                  {data.purpose.rightCard.title}
                </h3>
                <p className="text-sm text-[#564242] leading-relaxed font-sans">
                  {data.purpose.rightCard.text}
                </p>

                {/* Inner Quote Card */}
                <div className="bg-[#EDE8E0]/70 p-5 rounded-xl space-y-2 border border-[#EDE8E0]">
                  <span className="text-[10px] font-bold tracking-widest text-[#49000E] uppercase block">
                    {data.purpose.rightCard.quoteTitle}
                  </span>
                  <p className="font-serif italic text-sm text-[#49000E] leading-relaxed">
                    {data.purpose.rightCard.quoteText}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 text-xs font-bold text-[#49000E] uppercase tracking-wider">
                  <span>{data.purpose.rightCard.groupName}</span>
                  <span className="text-[#564242] font-normal">
                    {data.purpose.rightCard.location}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== PILLARS (3 CARDS) ===================== */}
      <section className="py-20 bg-[#F6F3EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold tracking-widest uppercase text-[#49000E]">
              {data.pillars.tag}
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-normal text-[#49000E]">
              {data.pillars.title}
            </h2>
            <div className="w-12 h-0.5 bg-[#49000E] mx-auto" />
            <p className="text-sm text-[#564242] font-sans pt-1">
              {data.pillars.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.pillars.items.map((p) => (
              <div
                key={p.number}
                className={`rounded-2xl overflow-hidden border shadow-sm flex flex-col justify-between transition-all hover:shadow-xl ${
                  p.isDark
                    ? "bg-[#49000E] text-white border-[#6B111F]"
                    : "bg-white text-[#181A29] border-[#EDE8E0]"
                }`}
              >
                <div className="p-6 pb-0 flex items-center justify-between text-xs font-bold tracking-widest uppercase">
                  <span className={p.isDark ? "text-[#C8A35C]" : "text-[#49000E]"}>
                    {p.number}
                  </span>
                  <span className={p.isDark ? "text-white/80" : "text-[#767676]"}>
                    {p.category}
                  </span>
                </div>

                <div className="p-6 space-y-4">
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden">
                    <Image src={p.image} alt={p.title} fill className="object-cover" />
                  </div>

                  <h3
                    className={`font-serif text-xl sm:text-2xl font-bold ${
                      p.isDark ? "text-white" : "text-[#49000E]"
                    }`}
                  >
                    {p.title}
                  </h3>

                  <p
                    className={`text-xs sm:text-sm leading-relaxed font-sans ${
                      p.isDark ? "text-[#EDE8E0]/90" : "text-[#564242]"
                    }`}
                  >
                    {p.description}
                  </p>
                </div>

                <div
                  className={`px-6 pb-6 pt-2 text-[11px] font-bold tracking-wider uppercase ${
                    p.isDark ? "text-[#C8A35C]" : "text-[#49000E]"
                  }`}
                >
                  {p.tag}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== REPERTOIRE (OBRAS) ===================== */}
      <section id="obras" className="py-20 bg-[#FCF9F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="space-y-1">
            <span className="text-xs font-bold tracking-widest uppercase text-[#49000E] block">
              {data.repertoire.tag}
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-normal text-[#49000E]">
              {data.repertoire.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {data.repertoire.works.map((w, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-[#EDE8E0] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/9]">
                    <Image src={w.image} alt={w.title} fill className="object-cover" />
                    <div className="absolute top-4 left-4 bg-[#49000E] text-white text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded">
                      {w.badge}
                    </div>
                  </div>

                  <div className="p-8 space-y-4">
                    <span className="text-[11px] font-bold tracking-wider uppercase text-[#767676] block">
                      {w.category}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#49000E]">
                      {w.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#564242] leading-relaxed font-sans">
                      {w.description}
                    </p>
                  </div>
                </div>

                <div className="px-8 pb-8 flex flex-wrap gap-2">
                  {w.tags.map((t) => (
                    <span
                      key={t}
                      className="bg-[#F6F3EE] text-[#49000E] text-[11px] font-semibold px-3 py-1 rounded-md border border-[#EDE8E0]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== AGENDA ===================== */}
      <section id="agenda" className="py-20 bg-[#F6F3EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#EDE8E0] pb-6">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-[#49000E] block">
                {data.agenda.tag}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#49000E] mt-1">
                {data.agenda.title}
              </h2>
            </div>
            <span className="text-xs font-bold tracking-wider uppercase text-[#564242]">
              {data.agenda.nextNotice}
            </span>
          </div>

          {/* Featured Upcoming Card (Wine) */}
          <div className="bg-[#49000E] text-white rounded-2xl p-8 sm:p-10 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="border-r border-[#6B111F] pr-6">
                <span className="font-serif text-4xl sm:text-5xl font-bold text-[#C8A35C] block">
                  {data.agenda.featured.month}
                </span>
                <span className="text-sm font-semibold tracking-widest text-[#EDE8E0]">
                  {data.agenda.featured.year}
                </span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold tracking-widest text-[#C8A35C] uppercase block">
                  {data.agenda.featured.tag}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  {data.agenda.featured.title}
                </h3>
                <p className="text-sm text-[#EDE8E0] font-semibold">
                  {data.agenda.featured.church}
                </p>
                <p className="text-xs text-[#EDE8E0]/70 font-sans">
                  {data.agenda.featured.notice}
                </p>
              </div>
            </div>

            <button
              onClick={() => scrollToSection("inscricao")}
              className="bg-[#C8A35C] hover:bg-[#b38f46] text-[#49000E] font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-lg shadow transition-all cursor-pointer whitespace-nowrap"
            >
              QUERO PARTICIPAR
            </button>
          </div>

          {/* Past Presentations */}
          <div className="space-y-4 pt-4">
            <span className="text-xs font-bold tracking-widest uppercase text-[#767676] block">
              APRESENTAÇÕES ANTERIORES
            </span>

            {data.agenda.pastPresentations.map((p, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl border border-[#EDE8E0] flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="flex items-start sm:items-center gap-6">
                  <div className="min-w-[90px]">
                    <span className="font-serif text-2xl font-bold text-[#49000E] block">
                      {p.date}
                    </span>
                    <span className="text-[10px] font-bold text-[#767676] uppercase">
                      {p.dayTime}
                    </span>
                  </div>

                  <div className="space-y-0.5">
                    <span className="text-[10px] font-bold tracking-wider uppercase text-[#767676] block">
                      {p.churchCity}
                    </span>
                    <h4 className="font-serif text-lg font-bold text-[#49000E]">{p.venue}</h4>
                    <p className="text-xs text-[#564242] font-sans">{p.detail}</p>
                  </div>
                </div>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#49000E] hover:bg-[#6B111F] text-white text-[11px] font-bold uppercase tracking-wider px-5 py-2.5 rounded-lg text-center transition-colors inline-block"
                >
                  VER OBRA NO INSTAGRAM
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== TESTIMONIALS ===================== */}
      <section className="py-20 bg-[#FCF9F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold tracking-widest uppercase text-[#49000E]">
              {data.testimonials.tag}
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-normal text-[#49000E]">
              {data.testimonials.title}
            </h2>
            <div className="w-12 h-0.5 bg-[#49000E] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.testimonials.items.map((t, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl border border-[#EDE8E0] shadow-sm flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <span className="font-serif text-4xl text-[#C8A35C] leading-none block">“</span>
                  <p className="font-serif italic text-base text-[#49000E] leading-relaxed">
                    {t.quote}
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-[#EDE8E0]">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#C8A35C] flex-shrink-0">
                    <Image src={t.image} alt={t.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-[#49000E]">{t.name}</h4>
                    <p className="text-[11px] text-[#767676] font-sans">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== AUDITION / REGISTRATION FORM ===================== */}
      <section id="inscricao" className="py-20 bg-[#F6F3EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Info */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold tracking-widest uppercase text-[#49000E] block">
                {data.audition.tag}
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-normal text-[#49000E] leading-tight">
                Faça parte desta <br />
                história de fé
              </h2>
              <div className="w-12 h-0.5 bg-[#49000E]" />

              <p className="text-sm text-[#564242] leading-relaxed font-sans">
                {data.audition.text}
              </p>

              <div className="space-y-3 pt-2">
                {data.audition.requirements.map((req, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-[#564242] font-sans">
                    <CheckCircle2 className="w-4 h-4 text-[#49000E] flex-shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </div>
                ))}
              </div>

              {/* How to participate box */}
              <div className="p-5 rounded-xl border border-[#49000E]/30 bg-white/70 space-y-1.5">
                <span className="text-[10px] font-bold tracking-widest text-[#49000E] uppercase block">
                  COMO PARTICIPAR
                </span>
                <p className="text-xs text-[#564242] font-sans leading-relaxed">
                  {data.audition.howToApply}
                </p>
              </div>
            </div>

            {/* Right Form Card */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-xl border-t-4 border-[#49000E] space-y-6">
                <div className="space-y-1">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#49000E]">
                    Quero servir com meus dons
                  </h3>
                  <span className="text-[10px] font-bold tracking-widest text-[#767676] uppercase block">
                    CONTE UM POUCO SOBRE VOCÊ
                  </span>
                </div>

                {formResult && (
                  <div
                    className={`p-4 rounded-lg text-sm flex items-start gap-2.5 ${
                      formResult.success
                        ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                        : "bg-rose-50 text-rose-800 border border-rose-200"
                    }`}
                  >
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <p className="font-semibold">{formResult.message}</p>
                  </div>
                )}

                <form onSubmit={handleFormSubmit} className="space-y-5">
                  {/* Nome Completo */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#49000E] mb-1">
                      NOME COMPLETO
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Ex.: Gabriel Vasconcelos Ribeiro"
                      value={formInput.name}
                      onChange={handleInputChange}
                      className="w-full pb-2 pt-1 border-b border-[#767676]/40 bg-transparent text-sm text-[#181A29] focus:outline-none focus:border-[#49000E]"
                    />
                  </div>

                  {/* Email & Telefone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#49000E] mb-1">
                        E-MAIL DE CONTATO
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="gabriel@arteecristo.com.br"
                        value={formInput.email}
                        onChange={handleInputChange}
                        className="w-full pb-2 pt-1 border-b border-[#767676]/40 bg-transparent text-sm text-[#181A29] focus:outline-none focus:border-[#49000E]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#49000E] mb-1">
                        WHATSAPP / TELEFONE
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="(11) 98765-4321"
                        value={formInput.phone}
                        onChange={handleInputChange}
                        className="w-full pb-2 pt-1 border-b border-[#767676]/40 bg-transparent text-sm text-[#181A29] focus:outline-none focus:border-[#49000E]"
                      />
                    </div>
                  </div>

                  {/* Igreja & Área de vocação */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#49000E] mb-1">
                        IGREJA LOCAL & CIDADE
                      </label>
                      <input
                        type="text"
                        name="church"
                        placeholder="Ex.: Igreja Presbiteriana Unida • SP"
                        value={formInput.church}
                        onChange={handleInputChange}
                        className="w-full pb-2 pt-1 border-b border-[#767676]/40 bg-transparent text-sm text-[#181A29] focus:outline-none focus:border-[#49000E]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#49000E] mb-1">
                        ÁREA DE VOCAÇÃO PRIMÁRIA
                      </label>
                      <select
                        name="workshop"
                        value={formInput.workshop}
                        onChange={handleInputChange}
                        className="w-full pb-2 pt-1 border-b border-[#767676]/40 bg-transparent text-sm text-[#181A29] focus:outline-none focus:border-[#49000E]"
                      >
                        <option value="Dança Contemporânea / Clássica">
                          Dança Contemporânea / Clássica
                        </option>
                        <option value="Teatro & Expressão Corporal">
                          Teatro & Expressão Corporal
                        </option>
                        <option value="Produção & Bastidores">Produção & Bastidores</option>
                        <option value="Música & Trilha">Música & Trilha</option>
                      </select>
                    </div>
                  </div>

                  {/* Link de vídeo */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#49000E] mb-1">
                      LINK DE VÍDEO / PORTFÓLIO (YOUTUBE, VIMEO OU DRIVE)
                    </label>
                    <input
                      type="url"
                      placeholder="https://vimeo.com/seuvideo-solo"
                      value={videoLink}
                      onChange={(e) => setVideoLink(e.target.value)}
                      className="w-full pb-2 pt-1 border-b border-[#767676]/40 bg-transparent text-sm text-[#181A29] focus:outline-none focus:border-[#49000E]"
                    />
                    <span className="text-[11px] text-[#767676] font-sans mt-1 block">
                      Grave um solo de até 3 minutos com movimentos livres ou peça clássica.
                    </span>
                  </div>

                  {/* Terms Checkbox */}
                  <div className="pt-2">
                    <label className="flex items-start gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        name="acceptTerms"
                        checked={formInput.acceptTerms}
                        onChange={handleInputChange}
                        className="mt-0.5 rounded text-[#49000E] focus:ring-[#49000E]"
                      />
                      <span className="text-xs text-[#564242] leading-relaxed font-sans">
                        Declaro que comungo com o estatuto doutrinário e a disciplina ministerial da
                        Companhia Somos Um.
                      </span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={formLoading}
                      className="w-full bg-[#49000E] hover:bg-[#6B111F] text-white font-bold text-xs uppercase tracking-widest py-4 rounded-lg shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                    >
                      {formLoading ? (
                        <span>ENVIANDO...</span>
                      ) : (
                        <>
                          <span>ENVIAR MINHA INSCRIÇÃO</span>
                          <Play className="w-3.5 h-3.5 fill-current text-white ml-1" />
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

      {/* ===================== CHURCH INVITATION & CONTACT ===================== */}
      <section id="contato" className="py-20 bg-[#49000E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold tracking-widest uppercase text-[#C8A35C] block">
                {data.invite.tag}
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white leading-tight">
                {data.invite.title}
              </h2>
              <p className="text-sm sm:text-base text-[#EDE8E0]/90 leading-relaxed max-w-xl font-sans">
                {data.invite.text}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-[#6B111F]">
                <div>
                  <span className="text-[11px] font-bold tracking-wider text-[#C8A35C] uppercase block mb-1">
                    RIDER TÉCNICO
                  </span>
                  <p className="text-xs text-[#EDE8E0]/80 font-sans">{data.invite.techRider}</p>
                </div>
                <div>
                  <span className="text-[11px] font-bold tracking-wider text-[#C8A35C] uppercase block mb-1">
                    LOGÍSTICA ÁGIL
                  </span>
                  <p className="text-xs text-[#EDE8E0]/80 font-sans">{data.invite.logistics}</p>
                </div>
                <div>
                  <span className="text-[11px] font-bold tracking-wider text-[#C8A35C] uppercase block mb-1">
                    MINISTRAÇÃO
                  </span>
                  <p className="text-xs text-[#EDE8E0]/80 font-sans">{data.invite.ministry}</p>
                </div>
              </div>
            </div>

            {/* Right Card */}
            <div className="lg:col-span-5">
              <div className="bg-[#FCF9F4] text-[#181A29] p-8 sm:p-10 rounded-2xl shadow-2xl space-y-6">
                <div>
                  <span className="text-[10px] font-bold tracking-widest text-[#767676] uppercase block">
                    {data.invite.contactCard.boxTag}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#49000E] mt-1">
                    {data.invite.contactCard.title}
                  </h3>
                  <p className="text-xs text-[#564242] mt-1 font-sans">
                    {data.invite.contactCard.notice}
                  </p>
                </div>

                <div className="space-y-3 text-xs text-[#49000E] font-medium pt-2 border-t border-[#EDE8E0]">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#49000E] flex-shrink-0" />
                    <span>{data.invite.contactCard.email}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#49000E] flex-shrink-0" />
                    <span>{data.invite.contactCard.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-[#49000E] flex-shrink-0" />
                    <span>{data.invite.contactCard.hours}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://wa.me/5582999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#49000E] hover:bg-[#6B111F] text-white font-bold text-xs uppercase tracking-wider py-4 rounded-lg shadow transition-all block text-center"
                  >
                    {data.invite.contactCard.buttonText}
                  </a>
                  <span className="text-[10px] font-bold tracking-widest text-[#767676] uppercase block text-center mt-3">
                    {data.invite.contactCard.groupName}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
      <footer className="bg-[#F6F3EE] border-t border-[#EDE8E0] text-[#181A29] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
            {/* Col 1: Logo & Manifesto Quote */}
            <div className="md:col-span-4 space-y-4">
              <div>
                <span className="font-serif text-2xl font-bold tracking-widest text-[#49000E] block leading-none">
                  SOMOS UM
                </span>
                <span className="text-[10px] tracking-[0.22em] text-[#C8A35C] uppercase font-sans font-semibold block mt-1.5 leading-none">
                  DANÇA TEATRAL • IGREJA ELOHIM
                </span>
              </div>
              <p className="font-serif italic text-sm text-[#49000E] leading-relaxed max-w-sm">
                {data.footer.quote}
              </p>
            </div>

            {/* Col 2: Repertório */}
            <div className="md:col-span-3 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#49000E] block">
                REPERTÓRIO & ATOS
              </span>
              <ul className="space-y-2 text-xs text-[#564242] font-sans">
                {data.footer.repertoireLinks.map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => scrollToSection("obras")}
                      className="hover:text-[#49000E] transition-colors cursor-pointer"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Expediente */}
            <div className="md:col-span-3 space-y-2 text-xs text-[#564242] font-sans">
              <span className="text-xs font-bold uppercase tracking-wider text-[#49000E] block mb-3">
                EXPEDIENTE & MINISTÉRIO
              </span>
              <p>
                <strong className="text-[#49000E]">Direção Cênica:</strong> {data.footer.direction}
              </p>
              <p>
                <strong className="text-[#49000E]">Corpo de Baile:</strong> {data.footer.cast}
              </p>
              <p>
                <strong className="text-[#49000E]">Laboratório:</strong> {data.footer.labs}
              </p>
              <p className="text-[11px] text-[#767676] pt-1">{data.footer.subNote}</p>
            </div>

            {/* Col 4: Contato & Imprensa */}
            <div className="md:col-span-2 space-y-3 text-xs text-[#564242] font-sans">
              <span className="text-xs font-bold uppercase tracking-wider text-[#49000E] block">
                CONTATO & IMPRENSA
              </span>
              <p className="hover:text-[#49000E] transition-colors cursor-pointer">
                {data.footer.email}
              </p>
              <p className="hover:text-[#49000E] transition-colors cursor-pointer">
                {data.footer.pressEmail}
              </p>
              <button
                onClick={() => scrollToSection("grupo")}
                className="text-[#49000E] font-bold text-[11px] uppercase tracking-wider hover:underline block pt-2 cursor-pointer flex items-center gap-1"
              >
                <span>CONHEÇA O GRUPO</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          <div className="pt-8 border-t border-[#EDE8E0] flex flex-col sm:flex-row items-center justify-between text-xs text-[#767676] gap-4 font-sans">
            <p>■ © 2026 SOMOS UM • Grupo de dança Teatral. Todos os direitos reservados.</p>
            <div className="flex items-center gap-6 text-[11px] font-bold uppercase tracking-wider text-[#564242]">
              <span className="hover:text-[#49000E] cursor-pointer">ESTATUTO ARTÍSTICO</span>
              <span className="hover:text-[#49000E] cursor-pointer">PRIVACIDADE</span>
              <span className="hover:text-[#49000E] cursor-pointer">ITINERÁRIO NACIONAL</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
