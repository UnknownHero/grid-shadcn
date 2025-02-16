import { Breakpoint, breakpointAntdToTW } from '../breakpoint.ts';
import { Offset } from './offset';

export type Pull = number;
export type PullProp = Pull | Partial<Record<Breakpoint, Pull>> | undefined

function calculatePull(offset: Offset): number {
  return Math.floor((offset / 24) * 10000) / 100;
}

export function pullAntdToTW(pull: PullProp) {
  const alignClass = !pull ? '' : typeof pull === 'number'
    ? pull === 0 ? '' : `end-[${calculatePull(pull)}%]`
    : Object.entries(pull || {}).map(([breakpoint, pullValue]) => {
      return pullValue === 0 ? '' : `${breakpointAntdToTW(breakpoint)}:end-[${calculatePull(pullValue)}%]`;
    }).join(' ');

  return alignClass;
}

// end-[4.16%]
// xs:end-[4.16%]
// sm:end-[4.16%]
// md:end-[4.16%]
// lg:end-[4.16%]
// xl:end-[4.16%]
// 2xl:end-[4.16%]

// end-[8.33%]
// xs:end-[8.33%]
// sm:end-[8.33%]
// md:end-[8.33%]
// lg:end-[8.33%]
// xl:end-[8.33%]
// 2xl:end-[8.33%]

// end-[12.5%]
// xs:end-[12.5%]
// sm:end-[12.5%]
// md:end-[12.5%]
// lg:end-[12.5%]
// xl:end-[12.5%]
// 2xl:end-[12.5%]

// end-[16.66%]
// xs:end-[16.66%]
// sm:end-[16.66%]
// md:end-[16.66%]
// lg:end-[16.66%]
// xl:end-[16.66%]
// 2xl:end-[16.66%]

// end-[20.83%]
// xs:end-[20.83%]
// sm:end-[20.83%]
// md:end-[20.83%]
// lg:end-[20.83%]
// xl:end-[20.83%]
// 2xl:end-[20.83%]

// end-[25%]
// xs:end-[25%]
// sm:end-[25%]
// md:end-[25%]
// lg:end-[25%]
// xl:end-[25%]
// 2xl:end-[25%]

// end-[29.16%]
// xs:end-[29.16%]
// sm:end-[29.16%]
// md:end-[29.16%]
// lg:end-[29.16%]
// xl:end-[29.16%]
// 2xl:end-[29.16%]

// end-[29.16%]
// xs:end-[29.16%]
// sm:end-[29.16%]
// md:end-[29.16%]
// lg:end-[29.16%]
// xl:end-[29.16%]
// 2xl:end-[29.16%]

// end-[33.33%]
// xs:end-[33.33%]
// sm:end-[33.33%]
// md:end-[33.33%]
// lg:end-[33.33%]
// xl:end-[33.33%]
// 2xl:end-[33.33%]

// end-[37.5%]
// xs:end-[37.5%]
// sm:end-[37.5%]
// md:end-[37.5%]
// lg:end-[37.5%]
// xl:end-[37.5%]
// 2xl:end-[37.5%]

// end-[41.66%]
// xs:end-[41.66%]
// sm:end-[41.66%]
// md:end-[41.66%]
// lg:end-[41.66%]
// xl:end-[41.66%]
// 2xl:end-[41.66%]

// end-[50%]
// xs:end-[50%]
// sm:end-[50%]
// md:end-[50%]
// lg:end-[50%]
// xl:end-[50%]
// 2xl:end-[50%]

// end-[54.16%]
// xs:end-[54.16%]
// sm:end-[54.16%]
// md:end-[54.16%]
// lg:end-[54.16%]
// xl:end-[54.16%]
// 2xl:end-[54.16%]

// end-[58.33%]
// xs:end-[58.33%]
// sm:end-[58.33%]
// md:end-[58.33%]
// lg:end-[58.33%]
// xl:end-[58.33%]
// 2xl:end-[58.33%]

// end-[62.5%]
// xs:end-[62.5%]
// sm:end-[62.5%]
// md:end-[62.5%]
// lg:end-[62.5%]
// xl:end-[62.5%]
// 2xl:end-[62.5%]

// end-[66.66%]
// xs:end-[66.66%]
// sm:end-[66.66%]
// md:end-[66.66%]
// lg:end-[66.66%]
// xl:end-[66.66%]
// 2xl:end-[66.66%]

// end-[70.83%]
// xs:end-[70.83%]
// sm:end-[70.83%]
// md:end-[70.83%]
// lg:end-[70.83%]
// xl:end-[70.83%]
// 2xl:end-[70.83%]

// end-[75%]
// xs:end-[75%]
// sm:end-[75%]
// md:end-[75%]
// lg:end-[75%]
// xl:end-[75%]
// 2xl:end-[75%]

// end-[79.16%]
// xs:end-[79.16%]
// sm:end-[79.16%]
// md:end-[79.16%]
// lg:end-[79.16%]
// xl:end-[79.16%]
// 2xl:end-[79.16%]

// end-[83.33%]
// xs:end-[83.33%]
// sm:end-[83.33%]
// md:end-[83.33%]
// lg:end-[83.33%]
// xl:end-[83.33%]
// 2xl:end-[83.33%]

// end-[87.5%]
// xs:end-[87.5%]
// sm:end-[87.5%]
// md:end-[87.5%]
// lg:end-[87.5%]
// xl:end-[87.5%]
// 2xl:end-[87.5%]

// end-[91.66%]
// xs:end-[91.66%]
// sm:end-[91.66%]
// md:end-[91.66%]
// lg:end-[91.66%]
// xl:end-[91.66%]
// 2xl:end-[91.66%]

// end-[95.83%]
// xs:end-[95.83%]
// sm:end-[95.83%]
// md:end-[95.83%]
// lg:end-[95.83%]
// xl:end-[95.83%]
// 2xl:end-[95.83%]

// end-[100%]
// xs:end-[100%]
// sm:end-[100%]
// md:end-[100%]
// lg:end-[100%]
// xl:end-[100%]
// 2xl:end-[100%]