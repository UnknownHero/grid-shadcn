import { Breakpoint, breakpointAntdToTW } from '../breakpoint.ts';

export type Display = 'block' | 'inline' | 'flex' | 'grid' | 'none';;
export type DisplayProps = Display | Partial<Record<Breakpoint, Display>> | undefined

export function displayAntdToTW(display: DisplayProps) {
  const displayClass = !display ? '' : typeof display === 'string' ? display
    : Object.entries(display || {}).map(([breakpoint, displayValue]) => {
      return `${breakpointAntdToTW(breakpoint)}:${displayValue}`;
    }).join(' ');

  return displayClass;
}

// inline
// block
// inline-block
// flow-root
// flex
// inline-flex
// grid
// inline-grid
// contents
// table
// inline-table
// table-caption
// table-cell
// table-column
// table-column-group
// table-footer-group
// table-header-group
// table-row-group
// table-row
// list-item
// hidden
