import { Breakpoint, breakpointAntdToTW } from '../breakpoint.ts';

export type Gutter = number | [number, number];
export type GutterProp = Gutter | Partial<Record<Breakpoint, Gutter>> | undefined

function gutterToTw(gutter: Gutter): string{
  return Array.isArray(gutter) ? `gap-y-${gutter[0]} gap-x-${gutter[1]}` : `gap-y-${gutter}`
}

export function gutterAntdToTW(gutter: GutterProp) {
  const gutterClass = !gutter ? '' : typeof gutter === 'number'
    ? gutterToTw(gutter)
    : Array.isArray(gutter) ? gutterToTw(gutter) : Object.entries(gutter || {}).map(([breakpoint, gutterValue]) => {
      return `${breakpointAntdToTW(breakpoint)}:${gutterToTw(gutterValue)}`;
    }).join(' ');

  return gutterClass;
}

// /* gap-y-0 */
// xs:gap-y-0
// sm:gap-y-0
// md:gap-y-0
// lg:gap-y-0
// xl:gap-y-0
// 2xl:gap-y-0
//
// /* gap-y-1 */
// xs:gap-y-1
// sm:gap-y-1
// md:gap-y-1
// lg:gap-y-1
// xl:gap-y-1
// 2xl:gap-y-1
//
// /* gap-y-2 */
// xs:gap-y-2
// sm:gap-y-2
// md:gap-y-2
// lg:gap-y-2
// xl:gap-y-2
// 2xl:gap-y-2
//
// /* gap-y-3 */
// xs:gap-y-3
// sm:gap-y-3
// md:gap-y-3
// lg:gap-y-3
// xl:gap-y-3
// 2xl:gap-y-3
//
// /* gap-y-4 */
// xs:gap-y-4
// sm:gap-y-4
// md:gap-y-4
// lg:gap-y-4
// xl:gap-y-4
// 2xl:gap-y-4
//
// /* gap-y-5 */
// xs:gap-y-5
// sm:gap-y-5
// md:gap-y-5
// lg:gap-y-5
// xl:gap-y-5
// 2xl:gap-y-5
//
// /* gap-y-6 */
// xs:gap-y-6
// sm:gap-y-6
// md:gap-y-6
// lg:gap-y-6
// xl:gap-y-6
// 2xl:gap-y-6
//
// /* gap-y-7 */
// xs:gap-y-7
// sm:gap-y-7
// md:gap-y-7
// lg:gap-y-7
// xl:gap-y-7
// 2xl:gap-y-7
//
// /* gap-y-8 */
// xs:gap-y-8
// sm:gap-y-8
// md:gap-y-8
// lg:gap-y-8
// xl:gap-y-8
// 2xl:gap-y-8
//
// /* gap-y-9 */
// xs:gap-y-9
// sm:gap-y-9
// md:gap-y-9
// lg:gap-y-9
// xl:gap-y-9
// 2xl:gap-y-9
//
// /* gap-y-10 */
// xs:gap-y-10
// sm:gap-y-10
// md:gap-y-10
// lg:gap-y-10
// xl:gap-y-10
// 2xl:gap-y-10
//
// /* gap-y-11 */
// xs:gap-y-11
// sm:gap-y-11
// md:gap-y-11
// lg:gap-y-11
// xl:gap-y-11
// 2xl:gap-y-11
//
// /* gap-y-12 */
// xs:gap-y-12
// sm:gap-y-12
// md:gap-y-12
// lg:gap-y-12
// xl:gap-y-12
// 2xl:gap-y-12
//
// /* gap-y-14 */
// xs:gap-y-14
// sm:gap-y-14
// md:gap-y-14
// lg:gap-y-14
// xl:gap-y-14
// 2xl:gap-y-14
//
// /* gap-y-16 */
// xs:gap-y-16
// sm:gap-y-16
// md:gap-y-16
// lg:gap-y-16
// xl:gap-y-16
// 2xl:gap-y-16
//
// /* gap-y-20 */
// xs:gap-y-20
// sm:gap-y-20
// md:gap-y-20
// lg:gap-y-20
// xl:gap-y-20
// 2xl:gap-y-20
//
// /* gap-y-24 */
// xs:gap-y-24
// sm:gap-y-24
// md:gap-y-24
// lg:gap-y-24
// xl:gap-y-24
// 2xl:gap-y-24
//
// /* gap-y-28 */
// xs:gap-y-28
// sm:gap-y-28
// md:gap-y-28
// lg:gap-y-28
// xl:gap-y-28
// 2xl:gap-y-28
//
// /* gap-y-32 */
// xs:gap-y-32
// sm:gap-y-32
// md:gap-y-32
// lg:gap-y-32
// xl:gap-y-32
// 2xl:gap-y-32
//
// /* gap-y-36 */
// xs:gap-y-36
// sm:gap-y-36
// md:gap-y-36
// lg:gap-y-36
// xl:gap-y-36
// 2xl:gap-y-36
//
// /* gap-y-40 */
// xs:gap-y-40
// sm:gap-y-40
// md:gap-y-40
// lg:gap-y-40
// xl:gap-y-40
// 2xl:gap-y-40
//
// /* gap-y-44 */
// xs:gap-y-44
// sm:gap-y-44
// md:gap-y-44
// lg:gap-y-44
// xl:gap-y-44
// 2xl:gap-y-44
//
// /* gap-y-48 */
// xs:gap-y-48
// sm:gap-y-48
// md:gap-y-48
// lg:gap-y-48
// xl:gap-y-48
// 2xl:gap-y-48
//
// /* gap-y-52 */
// xs:gap-y-52
// sm:gap-y-52
// md:gap-y-52
// lg:gap-y-52
// xl:gap-y-52
// 2xl:gap-y-52
//
// /* gap-y-56 */
// xs:gap-y-56
// sm:gap-y-56
// md:gap-y-56
// lg:gap-y-56
// xl:gap-y-56
// 2xl:gap-y-56
//
// /* gap-y-60 */
// xs:gap-y-60
// sm:gap-y-60
// md:gap-y-60
// lg:gap-y-60
// xl:gap-y-60
// 2xl:gap-y-60
//
// /* gap-y-64 */
// xs:gap-y-64
// sm:gap-y-64
// md:gap-y-64
// lg:gap-y-64
// xl:gap-y-64
// 2xl:gap-y-64
//
// /* gap-y-72 */
// xs:gap-y-72
// sm:gap-y-72
// md:gap-y-72
// lg:gap-y-72
// xl:gap-y-72
// 2xl:gap-y-72
//
// /* gap-y-80 */
// xs:gap-y-80
// sm:gap-y-80
// md:gap-y-80
// lg:gap-y-80
// xl:gap-y-80
// 2xl:gap-y-80
//
// /* gap-y-96 */
// xs:gap-y-96
// sm:gap-y-96
// md:gap-y-96
// lg:gap-y-96
// xl:gap-y-96
// 2xl:gap-y-96

// /* gap-x-0 */
// xs:gap-x-0
// sm:gap-x-0
// md:gap-x-0
// lg:gap-x-0
// xl:gap-x-0
// 2xl:gap-x-0
//
// /* gap-x-1 */
// xs:gap-x-1
// sm:gap-x-1
// md:gap-x-1
// lg:gap-x-1
// xl:gap-x-1
// 2xl:gap-x-1
//
// /* gap-x-2 */
// xs:gap-x-2
// sm:gap-x-2
// md:gap-x-2
// lg:gap-x-2
// xl:gap-x-2
// 2xl:gap-x-2
//
// /* gap-x-3 */
// xs:gap-x-3
// sm:gap-x-3
// md:gap-x-3
// lg:gap-x-3
// xl:gap-x-3
// 2xl:gap-x-3
//
// /* gap-x-4 */
// xs:gap-x-4
// sm:gap-x-4
// md:gap-x-4
// lg:gap-x-4
// xl:gap-x-4
// 2xl:gap-x-4
//
// /* gap-x-5 */
// xs:gap-x-5
// sm:gap-x-5
// md:gap-x-5
// lg:gap-x-5
// xl:gap-x-5
// 2xl:gap-x-5
//
// /* gap-x-6 */
// xs:gap-x-6
// sm:gap-x-6
// md:gap-x-6
// lg:gap-x-6
// xl:gap-x-6
// 2xl:gap-x-6
//
// /* gap-x-7 */
// xs:gap-x-7
// sm:gap-x-7
// md:gap-x-7
// lg:gap-x-7
// xl:gap-x-7
// 2xl:gap-x-7
//
// /* gap-x-8 */
// xs:gap-x-8
// sm:gap-x-8
// md:gap-x-8
// lg:gap-x-8
// xl:gap-x-8
// 2xl:gap-x-8
//
// /* gap-x-9 */
// xs:gap-x-9
// sm:gap-x-9
// md:gap-x-9
// lg:gap-x-9
// xl:gap-x-9
// 2xl:gap-x-9
//
// /* gap-x-10 */
// xs:gap-x-10
// sm:gap-x-10
// md:gap-x-10
// lg:gap-x-10
// xl:gap-x-10
// 2xl:gap-x-10
//
// /* gap-x-11 */
// xs:gap-x-11
// sm:gap-x-11
// md:gap-x-11
// lg:gap-x-11
// xl:gap-x-11
// 2xl:gap-x-11
//
// /* gap-x-12 */
// xs:gap-x-12
// sm:gap-x-12
// md:gap-x-12
// lg:gap-x-12
// xl:gap-x-12
// 2xl:gap-x-12
//
// /* gap-x-14 */
// xs:gap-x-14
// sm:gap-x-14
// md:gap-x-14
// lg:gap-x-14
// xl:gap-x-14
// 2xl:gap-x-14
//
// /* gap-x-16 */
// xs:gap-x-16
// sm:gap-x-16
// md:gap-x-16
// lg:gap-x-16
// xl:gap-x-16
// 2xl:gap-x-16
//
// /* gap-x-20 */
// xs:gap-x-20
// sm:gap-x-20
// md:gap-x-20
// lg:gap-x-20
// xl:gap-x-20
// 2xl:gap-x-20
//
// /* gap-x-24 */
// xs:gap-x-24
// sm:gap-x-24
// md:gap-x-24
// lg:gap-x-24
// xl:gap-x-24
// 2xl:gap-x-24
//
// /* gap-x-28 */
// xs:gap-x-28
// sm:gap-x-28
// md:gap-x-28
// lg:gap-x-28
// xl:gap-x-28
// 2xl:gap-x-28
//
// /* gap-x-32 */
// xs:gap-x-32
// sm:gap-x-32
// md:gap-x-32
// lg:gap-x-32
// xl:gap-x-32
// 2xl:gap-x-32
//
// /* gap-x-36 */
// xs:gap-x-36
// sm:gap-x-36
// md:gap-x-36
// lg:gap-x-36
// xl:gap-x-36
// 2xl:gap-x-36
//
// /* gap-x-40 */
// xs:gap-x-40
// sm:gap-x-40
// md:gap-x-40
// lg:gap-x-40
// xl:gap-x-40
// 2xl:gap-x-40
//
// /* gap-x-44 */
// xs:gap-x-44
// sm:gap-x-44
// md:gap-x-44
// lg:gap-x-44
// xl:gap-x-44
// 2xl:gap-x-44
//
// /* gap-x-48 */
// xs:gap-x-48
// sm:gap-x-48
// md:gap-x-48
// lg:gap-x-48
// xl:gap-x-48
// 2xl:gap-x-48
//
// /* gap-x-52 */
// xs:gap-x-52
// sm:gap-x-52
// md:gap-x-52
// lg:gap-x-52
// xl:gap-x-52
// 2xl:gap-x-52
//
// /* gap-x-56 */
// xs:gap-x-56
// sm:gap-x-56
// md:gap-x-56
// lg:gap-x-56
// xl:gap-x-56
// 2xl:gap-x-56
//
// /* gap-x-60 */
// xs:gap-x-60
// sm:gap-x-60
// md:gap-x-60
// lg:gap-x-60
// xl:gap-x-60
// 2xl:gap-x-60
//
// /* gap-x-64 */
// xs:gap-x-64
// sm:gap-x-64
// md:gap-x-64
// lg:gap-x-64
// xl:gap-x-64
// 2xl:gap-x-64
//
// /* gap-x-72 */
// xs:gap-x-72
// sm:gap-x-72
// md:gap-x-72
// lg:gap-x-72
// xl:gap-x-72
// 2xl:gap-x-72
//
// /* gap-x-80 */
// xs:gap-x-80
// sm:gap-x-80
// md:gap-x-80
// lg:gap-x-80
// xl:gap-x-80
// 2xl:gap-x-80
//
// /* gap-x-96 */
// xs:gap-x-96
// sm:gap-x-96
// md:gap-x-96
// lg:gap-x-96
// xl:gap-x-96
// 2xl:gap-x-96