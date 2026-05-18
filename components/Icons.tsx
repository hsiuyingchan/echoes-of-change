// Reusable SVG Icon Components
// Extracted from page.tsx to reduce duplication

interface IconProps {
  className?: string;
}

export function Logo({ className = "w-10 h-10" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="logo-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        <radialGradient id="center-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2D6A6A" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#2D6A6A" stopOpacity="0" />
        </radialGradient>
      </defs>
      
      {/* Outer Ethereal Circle (Hexagram Patterns) */}
      <circle cx="50" cy="50" r="49" stroke="#F4F1EA" strokeWidth="0.25" strokeDasharray="1 3" opacity="0.3" />
      <circle cx="50" cy="50" r="47" stroke="#9CAF88" strokeWidth="0.5" strokeDasharray="4 2" opacity="0.1" />
      
      {/* 8 Bagua Trigrams Ring */}
      <g stroke="#F4F1EA" strokeWidth="1.2" strokeLinecap="round" opacity="0.6">
        {/* Top: Qian (Heaven) - ☰ */}
        <g transform="translate(50, 15)">
          <line x1="-6" y1="-3" x2="6" y2="-3" stroke="#D4AF37" strokeWidth="1" />
          <line x1="-6" y1="0" x2="6" y2="0" />
          <line x1="-6" y1="3" x2="6" y2="3" />
        </g>
        {/* Bottom: Kun (Earth) - ☷ */}
        <g transform="translate(50, 85)">
          <line x1="-6" y1="-3" x2="-1" y2="-3" /> <line x1="1" y1="-3" x2="6" y2="-3" />
          <line x1="-6" y1="0" x2="-1" y2="0" /> <line x1="1" y1="0" x2="6" y2="0" />
          <line x1="-6" y1="3" x2="-1" y2="3" /> <line x1="1" y1="3" x2="6" y2="3" />
        </g>
        {/* Right: Li (Fire) - ☲ */}
        <g transform="translate(85, 50) rotate(90)">
          <line x1="-6" y1="-3" x2="6" y2="-3" />
          <line x1="-6" y1="0" x2="-1" y2="0" /> <line x1="1" y1="0" x2="6" y2="0" />
          <line x1="-6" y1="3" x2="6" y2="3" />
        </g>
        {/* Left: Kan (Water) - ☵ */}
        <g transform="translate(15, 50) rotate(90)">
          <line x1="-6" y1="-3" x2="-1" y2="-3" /> <line x1="1" y1="-3" x2="6" y2="-3" />
          <line x1="-6" y1="0" x2="6" y2="0" />
          <line x1="-6" y1="3" x2="-1" y2="3" /> <line x1="1" y1="3" x2="6" y2="3" />
        </g>
        {/* Top-Right: Dui (Lake) - ☱ */}
        <g transform="translate(75, 25) rotate(45)">
          <line x1="-6" y1="-3" x2="-1" y2="-3" /> <line x1="1" y1="-3" x2="6" y2="-3" />
          <line x1="-6" y1="0" x2="6" y2="0" />
          <line x1="-6" y1="3" x2="6" y2="3" />
        </g>
        {/* Top-Left: Gen (Mountain) - ☶ */}
        <g transform="translate(25, 25) rotate(-45)">
          <line x1="-6" y1="-3" x2="6" y2="-3" />
          <line x1="-6" y1="0" x2="-1" y2="0" /> <line x1="1" y1="0" x2="6" y2="0" />
          <line x1="-6" y1="3" x2="-1" y2="3" /> <line x1="1" y1="3" x2="6" y2="3" />
        </g>
        {/* Bottom-Right: Xun (Wind) - ☴ */}
        <g transform="translate(75, 75) rotate(135)">
          <line x1="-6" y1="-3" x2="6" y2="-3" />
          <line x1="-6" y1="0" x2="6" y2="0" />
          <line x1="-6" y1="3" x2="-1" y2="3" /> <line x1="1" y1="3" x2="6" y2="3" />
        </g>
        {/* Bottom-Left: Zhen (Thunder) - ☳ */}
        <g transform="translate(25, 75) rotate(-135)">
          <line x1="-6" y1="-3" x2="-1" y2="-3" /> <line x1="1" y1="-3" x2="6" y2="-3" />
          <line x1="-6" y1="0" x2="-1" y2="0" /> <line x1="1" y1="0" x2="6" y2="0" />
          <line x1="-6" y1="3" x2="6" y2="3" />
        </g>
      </g>
      
      {/* Sacred Geometric Inner Ring */}
      <circle cx="50" cy="50" r="32" stroke="url(#gold-grad)" strokeWidth="0.5" opacity="0.4" />
      
      {/* Central Yin-Yang made of intricate lines */}
      <g filter="url(#logo-glow)">
        <circle cx="50" cy="50" r="24" fill="url(#center-glow)" />
        
        {/* Yang Side (Deep Teal) */}
        <g stroke="#134E4E" strokeWidth="1.8" strokeLinecap="round">
          <line x1="42" y1="36" x2="58" y2="36" />
          <line x1="39" y1="40" x2="61" y2="40" />
          <line x1="38" y1="44" x2="62" y2="44" />
          <line x1="40" y1="48" x2="50" y2="48" strokeWidth="2.5" />
        </g>
        
        {/* Yin Side (Warm Sage) */}
        <g stroke="#9CAF88" strokeWidth="1.8" strokeLinecap="round">
          <line x1="50" y1="52" x2="60" y2="52" strokeWidth="2.5" />
          <line x1="38" y1="56" x2="48" y2="56" /> <line x1="52" y1="56" x2="62" y2="56" />
          <line x1="39" y1="60" x2="48" y2="60" /> <line x1="52" y1="60" x2="61" y2="60" />
          <line x1="42" y1="64" x2="48" y2="64" /> <line x1="52" y1="64" x2="58" y2="64" />
        </g>
        
        {/* Gold Accent - Floating Center Dot */}
        <circle cx="50" cy="50" r="1.5" fill="#D4AF37" />
      </g>
    </svg>
  );
}

export function CheckIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

export function ArrowRightIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

export function TrendingUpIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  );
}

export function CalendarIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}

export function MailIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

export function BeakerIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  );
}

export function BriefcaseIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

export function SparklesIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  );
}

export function BookOpenIcon({ className = "w-7 h-7" }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  );
}

export function UsersIcon({ className = "w-7 h-7" }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );
}

export function BoltIcon({ className = "w-7 h-7" }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}

export function LinkedInIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

export function GitHubIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

export function XTwitterIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

export function PlayIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

export function MenuIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

export function CloseIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}
