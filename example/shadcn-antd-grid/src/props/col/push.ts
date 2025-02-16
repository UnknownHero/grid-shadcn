import { Breakpoint, breakpointAntdToTW } from '../breakpoint.ts';
import { Offset } from './offset';

export type Push = number;
export type PushProp = Push | Partial<Record<Breakpoint, Push>> | undefined

function calculatePush(offset: Offset): number {
  return Math.floor((offset / 24) * 10000) / 100;
}

export function pushAntdToTW(push: PushProp) {
  const alignClass = !push ? '' : typeof push === 'number'
    ? push === 0 ? '' : `start-[${calculatePush(push)}%]`
    : Object.entries(push || {}).map(([breakpoint, pushValue]) => {
      return pushValue === 0 ? '' : `${breakpointAntdToTW(breakpoint)}:start-[${calculatePush(pushValue)}%]`;
    }).join(' ');

  return alignClass;
}

// start-[4.16%]
// xs:start-[4.16%]
// sm:start-[4.16%]
// md:start-[4.16%]
// lg:start-[4.16%]
// xl:start-[4.16%]
// 2xl:start-[4.16%]

// start-[8.33%]
// xs:start-[8.33%]
// sm:start-[8.33%]
// md:start-[8.33%]
// lg:start-[8.33%]
// xl:start-[8.33%]
// 2xl:start-[8.33%]

// start-[12.5%]
// xs:start-[12.5%]
// sm:start-[12.5%]
// md:start-[12.5%]
// lg:start-[12.5%]
// xl:start-[12.5%]
// 2xl:start-[12.5%]

// start-[16.66%]
// xs:start-[16.66%]
// sm:start-[16.66%]
// md:start-[16.66%]
// lg:start-[16.66%]
// xl:start-[16.66%]
// 2xl:start-[16.66%]

// start-[20.83%]
// xs:start-[20.83%]
// sm:start-[20.83%]
// md:start-[20.83%]
// lg:start-[20.83%]
// xl:start-[20.83%]
// 2xl:start-[20.83%]

// start-[25%]
// xs:start-[25%]
// sm:start-[25%]
// md:start-[25%]
// lg:start-[25%]
// xl:start-[25%]
// 2xl:start-[25%]

// start-[29.16%]
// xs:start-[29.16%]
// sm:start-[29.16%]
// md:start-[29.16%]
// lg:start-[29.16%]
// xl:start-[29.16%]
// 2xl:start-[29.16%]

// start-[29.16%]
// xs:start-[29.16%]
// sm:start-[29.16%]
// md:start-[29.16%]
// lg:start-[29.16%]
// xl:start-[29.16%]
// 2xl:start-[29.16%]

// start-[33.33%]
// xs:start-[33.33%]
// sm:start-[33.33%]
// md:start-[33.33%]
// lg:start-[33.33%]
// xl:start-[33.33%]
// 2xl:start-[33.33%]

// start-[37.5%]
// xs:start-[37.5%]
// sm:start-[37.5%]
// md:start-[37.5%]
// lg:start-[37.5%]
// xl:start-[37.5%]
// 2xl:start-[37.5%]

// start-[41.66%]
// xs:start-[41.66%]
// sm:start-[41.66%]
// md:start-[41.66%]
// lg:start-[41.66%]
// xl:start-[41.66%]
// 2xl:start-[41.66%]

// start-[50%]
// xs:start-[50%]
// sm:start-[50%]
// md:start-[50%]
// lg:start-[50%]
// xl:start-[50%]
// 2xl:start-[50%]

// start-[54.16%]
// xs:start-[54.16%]
// sm:start-[54.16%]
// md:start-[54.16%]
// lg:start-[54.16%]
// xl:start-[54.16%]
// 2xl:start-[54.16%]

// start-[58.33%]
// xs:start-[58.33%]
// sm:start-[58.33%]
// md:start-[58.33%]
// lg:start-[58.33%]
// xl:start-[58.33%]
// 2xl:start-[58.33%]

// start-[62.5%]
// xs:start-[62.5%]
// sm:start-[62.5%]
// md:start-[62.5%]
// lg:start-[62.5%]
// xl:start-[62.5%]
// 2xl:start-[62.5%]

// start-[66.66%]
// xs:start-[66.66%]
// sm:start-[66.66%]
// md:start-[66.66%]
// lg:start-[66.66%]
// xl:start-[66.66%]
// 2xl:start-[66.66%]

// start-[70.83%]
// xs:start-[70.83%]
// sm:start-[70.83%]
// md:start-[70.83%]
// lg:start-[70.83%]
// xl:start-[70.83%]
// 2xl:start-[70.83%]

// start-[75%]
// xs:start-[75%]
// sm:start-[75%]
// md:start-[75%]
// lg:start-[75%]
// xl:start-[75%]
// 2xl:start-[75%]

// start-[79.16%]
// xs:start-[79.16%]
// sm:start-[79.16%]
// md:start-[79.16%]
// lg:start-[79.16%]
// xl:start-[79.16%]
// 2xl:start-[79.16%]

// start-[83.33%]
// xs:start-[83.33%]
// sm:start-[83.33%]
// md:start-[83.33%]
// lg:start-[83.33%]
// xl:start-[83.33%]
// 2xl:start-[83.33%]

// start-[87.5%]
// xs:start-[87.5%]
// sm:start-[87.5%]
// md:start-[87.5%]
// lg:start-[87.5%]
// xl:start-[87.5%]
// 2xl:start-[87.5%]

// start-[91.66%]
// xs:start-[91.66%]
// sm:start-[91.66%]
// md:start-[91.66%]
// lg:start-[91.66%]
// xl:start-[91.66%]
// 2xl:start-[91.66%]

// start-[95.83%]
// xs:start-[95.83%]
// sm:start-[95.83%]
// md:start-[95.83%]
// lg:start-[95.83%]
// xl:start-[95.83%]
// 2xl:start-[95.83%]

// start-[100%]
// xs:start-[100%]
// sm:start-[100%]
// md:start-[100%]
// lg:start-[100%]
// xl:start-[100%]
// 2xl:start-[100%]