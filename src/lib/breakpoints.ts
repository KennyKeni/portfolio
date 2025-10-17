// Tailwind CSS default breakpoints
// Keep these in sync with Tailwind's configuration
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

// Helper function to check if current viewport is below a breakpoint
export function isBelowBreakpoint(breakpoint: keyof typeof BREAKPOINTS): boolean {
  return window.innerWidth < BREAKPOINTS[breakpoint];
}

// Helper function to check if current viewport is at or above a breakpoint
export function isAtOrAboveBreakpoint(breakpoint: keyof typeof BREAKPOINTS): boolean {
  return window.innerWidth >= BREAKPOINTS[breakpoint];
}

// Commonly used checks
export const isMobile = () => isBelowBreakpoint('md');
export const isTablet = () => isAtOrAboveBreakpoint('md') && isBelowBreakpoint('lg');
export const isDesktop = () => isAtOrAboveBreakpoint('lg');
