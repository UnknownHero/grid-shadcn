import { Breakpoint, breakpointAntdToTW } from '../breakpoint.ts';

export type Justify = 'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly'
export type JustifyProp = Justify | Record<Breakpoint, Justify> | undefined

const justifyAntdToTailwindClass = {
  start: 'justify-start',
  end: 'justify-end',
  center: 'justify-center',
  'space-around': 'justify-around',
  'space-between': 'justify-between',
  'space-evenly': 'justify-evenly',
};

export function justifyAntdToTW(justify: JustifyProp) {
  const justifyClass = !justify ? '' : typeof justify === 'string'
    ? justifyAntdToTailwindClass[justify]
    : Object.entries(justify || {}).map(([breakpoint, justifyValue]) => {
      return `${breakpointAntdToTW(breakpoint)}:${justifyAntdToTailwindClass[justifyValue]}`;
    }).join(' ');

  return justifyClass;
}

// /* justify-start */
// xs:justify-start
// sm:justify-start
// md:justify-start
// lg:justify-start
// xl:justify-start
// 2xl:justify-start
//
// /* justify-end */
// xs:justify-end
// sm:justify-end
// md:justify-end
// lg:justify-end
// xl:justify-end
// 2xl:justify-end
//
// /* justify-center */
// xs:justify-center
// sm:justify-center
// md:justify-center
// lg:justify-center
// xl:justify-center
// 2xl:justify-center
//
// /* justify-around */
// xs:justify-around
// sm:justify-around
// md:justify-around
// lg:justify-around
// xl:justify-around
// 2xl:justify-around
//
// /* justify: between */
// xs:justify-between
// sm:justify-between
// md:justify-between
// lg:justify-between
// xl:justify-between
// 2xl:justify-between
//
// /* justify-evenly */
// xs:justify-evenly
// sm:justify-evenly
// md:justify-evenly
// lg:justify-evenly
// xl:justify-evenly
// 2xl:justify-evenly