const Icon = {
  Arrow: (p) => (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  ),
  Check: (p) => (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M3 8.5l3.2 3L13 4.5" />
    </svg>
  ),
  Star: (p) => (
    <svg viewBox="0 0 20 20" fill="currentColor" {...p}>
      <path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.9 4.7 17.6l1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
    </svg>
  ),
  Sparkle: (p) => (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M8 2v3M8 11v3M2 8h3M11 8h3M4 4l2 2M10 10l2 2M12 4l-2 2M6 10l-2 2" />
    </svg>
  ),
  Blocks: (p) => (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="2.2" y="2.2" width="5" height="5" rx="1" />
      <rect x="8.8" y="2.2" width="5" height="5" rx="1" />
      <rect x="2.2" y="8.8" width="5" height="5" rx="1" />
      <rect x="8.8" y="8.8" width="5" height="5" rx="1" />
    </svg>
  ),
  Bulk: (p) => (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="2" y="2" width="9" height="9" rx="1.2" />
      <rect x="5" y="5" width="9" height="9" rx="1.2" />
    </svg>
  ),
  Seo: (p) => (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="7" cy="7" r="4.5" />
      <path d="M10.5 10.5L14 14" />
    </svg>
  ),
  Tone: (p) => (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M3 13c0-3.3 2.2-7 5-7s5 3.7 5 7" />
      <circle cx="8" cy="4.5" r="1.7" />
    </svg>
  ),
  Plus: (p) => (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" {...p}>
      <path d="M8 3v10M3 8h10" />
    </svg>
  ),
};

export default Icon;
