# Somos Um — Festividade de Dezembro

Landing Page moderna, elegante e 100% responsiva para a **Festividade de Dezembro "Somos Um"**.

Construída com **Next.js 15 (App Router)**, **Tailwind CSS**, **Lucide Icons** e **TypeScript**, seguindo a arquitetura de camadas do projeto:
- `page.tsx` (Server Component)
- `_components/content.tsx` (Client Component interativo)
- `_actions/register-lead.ts` (Server Action para inscrições)
- `_data-access/get-landing-data.ts` (Data Access Layer)

---

## 🚀 Como Executar Localmente

1. **Instale as dependências:**
   ```bash
   npm install
   ```

2. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

3. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

---

## ☁️ Deploy na Vercel

O projeto está 100% configurado para a Vercel com zero-config:

1. Suba o repositório para o GitHub / GitLab / Bitbucket:
   ```bash
   git init
   git add .
   git commit -m "feat: landing page Somos Um responsiva"
   git branch -M main
   git remote add origin <seu-repositorio>
   git push -u origin main
   ```

2. No painel da [Vercel](https://vercel.com):
   - Clique em **"Add New Project"**
   - Importe o repositório
   - Clique em **"Deploy"** (Next.js é detectado automaticamente)
