// TechView & Diraav - Brand Theme
// ================================

export const theme = {
  colors: {
    // Primary backgrounds
    background: {
      primary: "#0A0A0A",      // Main dark background
      secondary: "#141414",     // Slightly lighter for cards
      tertiary: "#1E1E1E",      // Even lighter for hover states
    },

    // Text colors
    text: {
      primary: "#F2F2F2",       // Main text (off-white)
      secondary: "#F2F2F2B3",   // 70% opacity - secondary text
      muted: "#F2F2F280",       // 50% opacity - muted text
      subtle: "#F2F2F266",      // 40% opacity - subtle text/labels
    },

    // Accent colors (Olive palette)
    accent: {
      olive: "#6B7A5E",         // Primary olive
      oliveLight: "#8A9A7A",    // Light olive
      oliveDark: "#4A5A3E",     // Dark olive
      cream: "#F5F5F0",         // Off-white/cream for contrast sections
    },

    // UI elements
    border: {
      default: "#F2F2F21A",     // 10% opacity - subtle borders
      hover: "#F2F2F233",       // 20% opacity - hover borders
      active: "#F2F2F24D",      // 30% opacity - active borders
    },
  },

  // Typography
  fonts: {
    primary: "var(--font-inter), system-ui, -apple-system, sans-serif",
  },

  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
  },

  // Spacing scale (in pixels)
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    "2xl": 48,
    "3xl": 64,
    "4xl": 96,
  },

  // Border radius
  borderRadius: {
    none: 0,
    sm: 4,
    md: 8,
    lg: 16,
    full: 9999,
  },

  // Transitions
  transitions: {
    fast: "150ms ease",
    default: "300ms ease",
    slow: "500ms ease",
  },
} as const;

// Tailwind class shortcuts for common patterns
export const themeClasses = {
  // Backgrounds
  bgPrimary: "bg-[#0A0A0A]",
  bgSecondary: "bg-[#141414]",
  bgTertiary: "bg-[#1E1E1E]",
  bgCream: "bg-[#F5F5F0]",

  // Text
  textPrimary: "text-[#F2F2F2]",
  textSecondary: "text-[#F2F2F2]/70",
  textMuted: "text-[#F2F2F2]/50",
  textSubtle: "text-[#F2F2F2]/40",

  // Borders
  borderDefault: "border-[#F2F2F2]/10",
  borderHover: "border-[#F2F2F2]/20",
  borderActive: "border-[#F2F2F2]/30",

  // Common patterns
  label: "text-[#F2F2F2]/40 text-[10px] uppercase tracking-[2px]",
  heading: "text-[#F2F2F2] font-light",
  body: "text-[#F2F2F2]/70 font-light leading-relaxed",

  // Buttons
  buttonLink: "inline-flex items-center gap-2 text-[#F2F2F2]/80 text-sm font-light hover:text-[#F2F2F2] transition-colors",
} as const;
