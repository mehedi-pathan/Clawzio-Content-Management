# Clawzio - AI-Powered Content Management for YouTubers

Clawzio is a Next.js 15 app that helps YouTube creators analyze competitors, discover trends, generate ideas and scripts, and optimize content SEO — with a polished UI built on shadcn/ui, Radix Primitives, Tailwind CSS, and Framer Motion.


## Features
- **Creator Dashboard**: Quick stats, trending topics, AI insights, achievements, and growth goals.
- **Competitor Intelligence**: Analyze YouTube channels via API with graceful mock fallbacks and AI insights when configured.
- **AI Tools Studio**: Thumbnail ideas, title optimizer, script writer, hashtag generator, and more (with premium placeholders).
- **Idea Generator**: Generate and filter content ideas by niche.
- **Script Generator**: Structured long-form script generation from prompts.
- **SEO Optimization Hub**: Content optimizer, keyword research, competitor SEO, and trending topics.
- **Settings**: Profile, notifications, subscription plan, and privacy controls.
- **PWA-ready**: Manifest and icons are included.


## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript, React 18
- **Styling**: Tailwind CSS, tailwind-merge, clsx
- **UI**: shadcn/ui components (Radix UI), lucide-react icons
- **Animation**: Framer Motion
- **State/Form**: react-hook-form, zod (resolvers available)
- **Charts**: recharts
- **Toast/Theme**: sonner, next-themes
- **APIs**:
  - YouTube Data API v3 (server routes under `app/api/youtube/...`)
  - Gemini (mocked integration with optional real key)


## Monorepo/Project Layout
```text
/ (repo root)
├─ app/
│  ├─ layout.tsx                # Root HTML, theme provider, toaster
│  ├─ page.tsx                  # Landing page wrapper
│  ├─ manifest.ts               # PWA manifest meta
│  ├─ (main)/                   # Authenticated-like main shell with bottom nav
│  │  ├─ layout.tsx             # Main layout with floating bottom nav
│  │  ├─ dashboard/page.tsx     # Creator dashboard
│  │  ├─ competitors/page.tsx   # Competitor Intelligence UI
│  │  ├─ ideas/page.tsx         # Idea generator
│  │  ├─ scripts/page.tsx       # Script generator
│  │  ├─ seo/page.tsx           # SEO optimization hub
│  │  └─ settings/page.tsx      # Settings
│  └─ api/
│     ├─ youtube/
│     │  ├─ search/route.ts     # GET /api/youtube/search?q=&maxResults=
│     │  └─ analyze/route.ts    # POST /api/youtube/analyze
│     └─ gemini/
│        └─ niche-insights/route.ts (if added later; see lib)
│
├─ components/
│  ├─ landing-page.tsx          # Marketing/landing content
│  ├─ floating-bottom-nav.tsx   # Mobile-first bottom navigation
│  ├─ floating-navbar.tsx       # Floating top navbar (if used)
│  ├─ bottom-navigation.tsx     # Nav primitives
│  ├─ theme-provider.tsx        # next-themes + shadcn theme
│  └─ ui/                       # shadcn/ui generated components
│
├─ hooks/                       # Reusable hooks (toast/mobile)
├─ lib/
│  ├─ youtube-api.ts            # YouTube API integration + robust mock data
│  ├─ gemini-analysis.ts        # Gemini analysis types + mocked outputs
│  └─ utils.ts                  # Tailwind `cn` helper
│
├─ public/                      # PWA icons, images, placeholders
├─ styles/                      # Global CSS (if used)
├─ app/globals.css              # Tailwind base styles (imported in app/layout)
├─ tailwind.config.ts
├─ next.config.mjs
├─ tsconfig.json
├─ package.json
└─ pnpm-lock.yaml / package-lock.json
```


## Getting Started

### Prerequisites
- Node.js 18+ (recommended Node 20+)
- pnpm or npm or yarn
- Optional: YouTube Data API key, Gemini API key

### Install
```bash
# with pnpm
pnpm install
# or npm
npm install
```

### Environment Variables
Create a `.env.local` at the project root:
```bash
# YouTube Data API (optional; falls back to mock data when missing)
YOUTUBE_API_KEY=YOUR_YOUTUBE_API_KEY

# Gemini (optional; current integration returns enhanced mock data when missing)
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```
- If keys are not provided, the app will still run using mocked data for a full demo experience.

### Develop
```bash
pnpm dev
# or
npm run dev
```
The app runs on `http://localhost:3000`.

### Build & Start
```bash
pnpm build
pnpm start
# or
npm run build
npm start
```

### Lint
```bash
pnpm lint
# or
npm run lint
```
Note: `next.config.mjs` is configured to ignore TypeScript and ESLint errors during builds for faster iteration. Remove those flags for stricter CI.


## API Routes

- **GET** ` /api/youtube/search?q=QUERY&maxResults=10`
  - Returns a list of channels with stats.
  - Implementation: `app/api/youtube/search/route.ts`
  - Uses `lib/youtube-api.ts::searchChannels()` and gracefully returns mock channels if API or quota fails.

- **POST** ` /api/youtube/analyze`
  - Body: `{ channelId?: string, channelName?: string, niche?: string, goals?: string[] }`
  - Returns `{ analytics, aiAnalysis, success }` where `analytics` comes from YouTube API (or mock) and `aiAnalysis` comes from Gemini (or mock).
  - Implementation: `app/api/youtube/analyze/route.ts`
  - Uses `lib/youtube-api.ts::getChannelAnalytics()` and `lib/gemini-analysis.ts::analyzeCompetitorWithGemini()`.

- Future (optional): `app/api/gemini/niche-insights/route.ts` could wrap `generateNicheInsights()` for niche-level reports.


## Notable Implementation Details
- **Mock-friendly design**: Both YouTube and Gemini integrations return high-quality mock data when keys are missing or requests fail. This keeps demos functional and speeds up development.
- **UI system**: Centralized shadcn/ui components under `components/ui/` with Tailwind for fast, consistent design.
- **Theme**: `ThemeProvider` and `Toaster` are wired in `app/layout.tsx`.
- **Main layout**: `(main)/layout.tsx` adds a gradient background and `FloatingBottomNav` for mobile-friendly navigation.
- **Performance**: `next.config.mjs` enables `optimizePackageImports` for `framer-motion` and `lucide-react`.


## Navigation & Pages
- `/(main)/dashboard`: Overview, stats, AI picks, goals, and quick actions.
- `/(main)/competitors`: Channel analyzer with tabs for overview, content, performance, strategy, opportunities, AI insights.
- `/(main)/ideas`: Niche-filtered idea generation (local simulation).
- `/(main)/scripts`: AI script generator (local simulation with structured output).
- `/(main)/seo`: Optimizer, keywords, competitor SEO, trending topics.
- `/(main)/settings`: Profile, notifications, plan, and privacy.


## Development Notes
- Images under `public/` are placeholders optimized for demonstration.
- Some premium features are UI placeholders; wire to your billing/permissions flow as needed.
- Replace mock flows with real providers incrementally by providing API keys and adapting the lib functions.
- Tailwind config, themes, and tokens can be customized via `tailwind.config.ts` and CSS variables.


## Scripts (package.json)
- `dev`: Start Next.js dev server
- `build`: Production build
- `start`: Start production server
- `lint`: Run Next.js lint


## Known Limitations
- Without `YOUTUBE_API_KEY`, responses use mock data.
- Gemini integration currently returns enhanced mock analysis when no key is present.
- ESLint/TS errors are ignored during build; enable for production CI.


## Design & Developer

Designed and developed by [Mehedi Pathan](https://mehedipathan.online).


## License
MIT — customize as needed for your organization.
