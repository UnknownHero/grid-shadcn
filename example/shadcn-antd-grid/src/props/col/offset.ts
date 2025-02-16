import { Breakpoint, breakpointAntdToTW } from '../breakpoint.ts';


export type Offset = number;
export type OffsetProp = Offset | Partial<Record<Breakpoint, Offset>> | undefined

function calculateOffset(offset: Offset): number {
  return Math.floor((offset / 24) * 10000) / 100;
}

export function offsetAntdToTW(offset: OffsetProp) {
  const alignClass = !offset ? '' : typeof offset === 'number'
    ? offset === 0 ? '' : `ms-[${calculateOffset(offset)}%]`
    : Object.entries(offset || {}).map(([breakpoint, offsetValue]) => {
      return offsetValue === 0 ? '' : `${breakpointAntdToTW(breakpoint)}:ms-[${calculateOffset(offsetValue)}%]`;
    }).join(' ');

  return alignClass;
}

// ms-[4.16%]
// xs:ms-[4.16%]
// sm:ms-[4.16%]
// md:ms-[4.16%]
// lg:ms-[4.16%]
// xl:ms-[4.16%]
// 2xl:ms-[4.16%]

// ms-[8.33%]
// xs:ms-[8.33%]
// sm:ms-[8.33%]
// md:ms-[8.33%]
// lg:ms-[8.33%]
// xl:ms-[8.33%]
// 2xl:ms-[8.33%]

// ms-[12.5%]
// xs:ms-[12.5%]
// sm:ms-[12.5%]
// md:ms-[12.5%]
// lg:ms-[12.5%]
// xl:ms-[12.5%]
// 2xl:ms-[12.5%]

// ms-[16.66%]
// xs:ms-[16.66%]
// sm:ms-[16.66%]
// md:ms-[16.66%]
// lg:ms-[16.66%]
// xl:ms-[16.66%]
// 2xl:ms-[16.66%]

// ms-[20.83%]
// xs:ms-[20.83%]
// sm:ms-[20.83%]
// md:ms-[20.83%]
// lg:ms-[20.83%]
// xl:ms-[20.83%]
// 2xl:ms-[20.83%]

// ms-[25%]
// xs:ms-[25%]
// sm:ms-[25%]
// md:ms-[25%]
// lg:ms-[25%]
// xl:ms-[25%]
// 2xl:ms-[25%]

// ms-[29.16%]
// xs:ms-[29.16%]
// sm:ms-[29.16%]
// md:ms-[29.16%]
// lg:ms-[29.16%]
// xl:ms-[29.16%]
// 2xl:ms-[29.16%]

// ms-[29.16%]
// xs:ms-[29.16%]
// sm:ms-[29.16%]
// md:ms-[29.16%]
// lg:ms-[29.16%]
// xl:ms-[29.16%]
// 2xl:ms-[29.16%]

// ms-[33.33%]
// xs:ms-[33.33%]
// sm:ms-[33.33%]
// md:ms-[33.33%]
// lg:ms-[33.33%]
// xl:ms-[33.33%]
// 2xl:ms-[33.33%]

// ms-[37.5%]
// xs:ms-[37.5%]
// sm:ms-[37.5%]
// md:ms-[37.5%]
// lg:ms-[37.5%]
// xl:ms-[37.5%]
// 2xl:ms-[37.5%]

// ms-[41.66%]
// xs:ms-[41.66%]
// sm:ms-[41.66%]
// md:ms-[41.66%]
// lg:ms-[41.66%]
// xl:ms-[41.66%]
// 2xl:ms-[41.66%]

// ms-[50%]
// xs:ms-[50%]
// sm:ms-[50%]
// md:ms-[50%]
// lg:ms-[50%]
// xl:ms-[50%]
// 2xl:ms-[50%]

// ms-[54.16%]
// xs:ms-[54.16%]
// sm:ms-[54.16%]
// md:ms-[54.16%]
// lg:ms-[54.16%]
// xl:ms-[54.16%]
// 2xl:ms-[54.16%]

// ms-[58.33%]
// xs:ms-[58.33%]
// sm:ms-[58.33%]
// md:ms-[58.33%]
// lg:ms-[58.33%]
// xl:ms-[58.33%]
// 2xl:ms-[58.33%]

// ms-[62.5%]
// xs:ms-[62.5%]
// sm:ms-[62.5%]
// md:ms-[62.5%]
// lg:ms-[62.5%]
// xl:ms-[62.5%]
// 2xl:ms-[62.5%]

// ms-[66.66%]
// xs:ms-[66.66%]
// sm:ms-[66.66%]
// md:ms-[66.66%]
// lg:ms-[66.66%]
// xl:ms-[66.66%]
// 2xl:ms-[66.66%]

// ms-[70.83%]
// xs:ms-[70.83%]
// sm:ms-[70.83%]
// md:ms-[70.83%]
// lg:ms-[70.83%]
// xl:ms-[70.83%]
// 2xl:ms-[70.83%]

// ms-[75%]
// xs:ms-[75%]
// sm:ms-[75%]
// md:ms-[75%]
// lg:ms-[75%]
// xl:ms-[75%]
// 2xl:ms-[75%]

// ms-[79.16%]
// xs:ms-[79.16%]
// sm:ms-[79.16%]
// md:ms-[79.16%]
// lg:ms-[79.16%]
// xl:ms-[79.16%]
// 2xl:ms-[79.16%]

// ms-[83.33%]
// xs:ms-[83.33%]
// sm:ms-[83.33%]
// md:ms-[83.33%]
// lg:ms-[83.33%]
// xl:ms-[83.33%]
// 2xl:ms-[83.33%]

// ms-[87.5%]
// xs:ms-[87.5%]
// sm:ms-[87.5%]
// md:ms-[87.5%]
// lg:ms-[87.5%]
// xl:ms-[87.5%]
// 2xl:ms-[87.5%]

// ms-[91.66%]
// xs:ms-[91.66%]
// sm:ms-[91.66%]
// md:ms-[91.66%]
// lg:ms-[91.66%]
// xl:ms-[91.66%]
// 2xl:ms-[91.66%]

// ms-[95.83%]
// xs:ms-[95.83%]
// sm:ms-[95.83%]
// md:ms-[95.83%]
// lg:ms-[95.83%]
// xl:ms-[95.83%]
// 2xl:ms-[95.83%]

// ms-[100%]
// xs:ms-[100%]
// sm:ms-[100%]
// md:ms-[100%]
// lg:ms-[100%]
// xl:ms-[100%]
// 2xl:ms-[100%]
