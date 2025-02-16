import { Breakpoint, breakpointAntdToTW } from '../breakpoint.ts';
import { Offset } from './offset';
import { flexAntdToTW } from './flex';

export type Span = number;
export type SpanProps = Span | Partial<Record<Breakpoint, Span>> | undefined

function calculateSpan(offset: Offset): number {
  return Math.floor((offset / 24) * 10000) / 100;
}

export function spanAntdToTW(span: SpanProps) {
  const alignClass = !span ? '' : typeof span === 'number'
    ? span === 0 ? '' : `max-w-[${calculateSpan(span)}%] ${flexAntdToTW(`0 0 ${calculateSpan(span)}%`)}`
    : Object.entries(span || {}).map(([breakpoint, spanValue]) => {
      return spanValue === 0 ? '' : `${breakpointAntdToTW(breakpoint)}:max-w-[${calculateSpan(spanValue)}%] ${flexAntdToTW(`0 0 ${calculateSpan(spanValue)}%`)}`;
    }).join(' ');

  return alignClass;
}

// max-w-[4.16%]
// xs:max-w-[4.16%]
// sm:max-w-[4.16%]
// md:max-w-[4.16%]
// lg:max-w-[4.16%]
// xl:max-w-[4.16%]
// 2xl:max-w-[4.16%]

// max-w-[8.33%]
// xs:max-w-[8.33%]
// sm:max-w-[8.33%]
// md:max-w-[8.33%]
// lg:max-w-[8.33%]
// xl:max-w-[8.33%]
// 2xl:max-w-[8.33%]

// max-w-[12.5%]
// xs:max-w-[12.5%]
// sm:max-w-[12.5%]
// md:max-w-[12.5%]
// lg:max-w-[12.5%]
// xl:max-w-[12.5%]
// 2xl:max-w-[12.5%]

// max-w-[16.66%]
// xs:max-w-[16.66%]
// sm:max-w-[16.66%]
// md:max-w-[16.66%]
// lg:max-w-[16.66%]
// xl:max-w-[16.66%]
// 2xl:max-w-[16.66%]

// max-w-[20.83%]
// xs:max-w-[20.83%]
// sm:max-w-[20.83%]
// md:max-w-[20.83%]
// lg:max-w-[20.83%]
// xl:max-w-[20.83%]
// 2xl:max-w-[20.83%]

// max-w-[25%]
// xs:max-w-[25%]
// sm:max-w-[25%]
// md:max-w-[25%]
// lg:max-w-[25%]
// xl:max-w-[25%]
// 2xl:max-w-[25%]

// max-w-[29.16%]
// xs:max-w-[29.16%]
// sm:max-w-[29.16%]
// md:max-w-[29.16%]
// lg:max-w-[29.16%]
// xl:max-w-[29.16%]
// 2xl:max-w-[29.16%]

// max-w-[29.16%]
// xs:max-w-[29.16%]
// sm:max-w-[29.16%]
// md:max-w-[29.16%]
// lg:max-w-[29.16%]
// xl:max-w-[29.16%]
// 2xl:max-w-[29.16%]

// max-w-[33.33%]
// xs:max-w-[33.33%]
// sm:max-w-[33.33%]
// md:max-w-[33.33%]
// lg:max-w-[33.33%]
// xl:max-w-[33.33%]
// 2xl:max-w-[33.33%]

// max-w-[37.5%]
// xs:max-w-[37.5%]
// sm:max-w-[37.5%]
// md:max-w-[37.5%]
// lg:max-w-[37.5%]
// xl:max-w-[37.5%]
// 2xl:max-w-[37.5%]

// max-w-[41.66%]
// xs:max-w-[41.66%]
// sm:max-w-[41.66%]
// md:max-w-[41.66%]
// lg:max-w-[41.66%]
// xl:max-w-[41.66%]
// 2xl:max-w-[41.66%]

// max-w-[50%]
// xs:max-w-[50%]
// sm:max-w-[50%]
// md:max-w-[50%]
// lg:max-w-[50%]
// xl:max-w-[50%]
// 2xl:max-w-[50%]

// max-w-[54.16%]
// xs:max-w-[54.16%]
// sm:max-w-[54.16%]
// md:max-w-[54.16%]
// lg:max-w-[54.16%]
// xl:max-w-[54.16%]
// 2xl:max-w-[54.16%]

// max-w-[58.33%]
// xs:max-w-[58.33%]
// sm:max-w-[58.33%]
// md:max-w-[58.33%]
// lg:max-w-[58.33%]
// xl:max-w-[58.33%]
// 2xl:max-w-[58.33%]

// max-w-[62.5%]
// xs:max-w-[62.5%]
// sm:max-w-[62.5%]
// md:max-w-[62.5%]
// lg:max-w-[62.5%]
// xl:max-w-[62.5%]
// 2xl:max-w-[62.5%]

// max-w-[66.66%]
// xs:max-w-[66.66%]
// sm:max-w-[66.66%]
// md:max-w-[66.66%]
// lg:max-w-[66.66%]
// xl:max-w-[66.66%]
// 2xl:max-w-[66.66%]

// max-w-[70.83%]
// xs:max-w-[70.83%]
// sm:max-w-[70.83%]
// md:max-w-[70.83%]
// lg:max-w-[70.83%]
// xl:max-w-[70.83%]
// 2xl:max-w-[70.83%]

// max-w-[75%]
// xs:max-w-[75%]
// sm:max-w-[75%]
// md:max-w-[75%]
// lg:max-w-[75%]
// xl:max-w-[75%]
// 2xl:max-w-[75%]

// max-w-[79.16%]
// xs:max-w-[79.16%]
// sm:max-w-[79.16%]
// md:max-w-[79.16%]
// lg:max-w-[79.16%]
// xl:max-w-[79.16%]
// 2xl:max-w-[79.16%]

// max-w-[83.33%]
// xs:max-w-[83.33%]
// sm:max-w-[83.33%]
// md:max-w-[83.33%]
// lg:max-w-[83.33%]
// xl:max-w-[83.33%]
// 2xl:max-w-[83.33%]

// max-w-[87.5%]
// xs:max-w-[87.5%]
// sm:max-w-[87.5%]
// md:max-w-[87.5%]
// lg:max-w-[87.5%]
// xl:max-w-[87.5%]
// 2xl:max-w-[87.5%]

// max-w-[91.66%]
// xs:max-w-[91.66%]
// sm:max-w-[91.66%]
// md:max-w-[91.66%]
// lg:max-w-[91.66%]
// xl:max-w-[91.66%]
// 2xl:max-w-[91.66%]

// max-w-[95.83%]
// xs:max-w-[95.83%]
// sm:max-w-[95.83%]
// md:max-w-[95.83%]
// lg:max-w-[95.83%]
// xl:max-w-[95.83%]
// 2xl:max-w-[95.83%]

// max-w-[100%]
// xs:max-w-[100%]
// sm:max-w-[100%]
// md:max-w-[100%]
// lg:max-w-[100%]
// xl:max-w-[100%]
// 2xl:max-w-[100%]