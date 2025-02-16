export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export function breakpointAntdToTW(breakpoint: string): 'sm' | 'md' | 'lg' | 'xl' | '2xl' {
  switch (breakpoint) {
    case 'xs':
      return 'sm'
    case 'sm':
      return 'sm'
    case 'md':
      return 'md'
    case 'lg':
      return 'lg'
    case 'xl':
      return 'xl'
    case 'xxl':
      return '2xl'
    default: return 'sm'
  }
}