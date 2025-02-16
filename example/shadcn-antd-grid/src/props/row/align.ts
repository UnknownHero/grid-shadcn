import { Breakpoint, breakpointAntdToTW } from '../breakpoint.ts';

export type Align = 'top' | 'middle' | 'bottom' | 'stretch' | 'baseline'
export type AlignProp = Align | Record<Breakpoint, Align> | undefined

const alignAntdToTailwindClass = {
  top: 'items-start',
  middle: 'items-center',
  bottom: 'items-end',
  stretch: 'items-stretch',
  baseline: 'items-baseline',
};

export function alignAntdToTW(align: AlignProp) {
  const alignClass = !align ? '' : typeof align === 'string'
    ? alignAntdToTailwindClass[align]
    : Object.entries(align || {}).map(([breakpoint, alignValue]) => {
      return `${breakpointAntdToTW(breakpoint)}:${alignAntdToTailwindClass[alignValue]}`;
    }).join(' ');

  return alignClass;
}
// /* items-start */
// xs:items-start
// sm:items-start
// md:items-start
// lg:items-start
// xl:items-start
// 2xl:items-start
//
// /* items-center */
// xs:items-center
// sm:items-center
// md:items-center
// lg:items-center
// xl:items-center
// 2xl:items-center
//
// /* items-end */
// xs:items-end
// sm:items-end
// md:items-end
// lg:items-end
// xl:items-end
// 2xl:items-end
//
// /* items-stretch */
// xs:items-stretch
// sm:items-stretch
// md:items-stretch
// lg:items-stretch
// xl:items-stretch
// 2xl:items-stretch
//
// /* items-baseline */
// xs:items-baseline
// sm:items-baseline
// md:items-baseline
// lg:items-baseline
// xl:items-baseline
// 2xl:items-baseline