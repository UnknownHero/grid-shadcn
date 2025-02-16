import { Breakpoint, breakpointAntdToTW } from '../breakpoint.ts';

export type Order = number;
export type OrderProp = Order | Partial<Record<Breakpoint, Order>> | undefined

export function orderAntdToTW(order: OrderProp) {
  const alignClass = !order ? '' : typeof order === 'number'
    ? order === 0 ? '' : `order-${order}`
    : Object.entries(order || {}).map(([breakpoint, orderValue]) => {
      return orderValue === 0 ? '' : `${breakpointAntdToTW(breakpoint)}:order-${orderValue}`;
    }).join(' ');

  return alignClass;
}

// order-0
// xs:order-0
// sm:order-0
// md:order-0
// lg:order-0
// xl:order-0
// 2xl:order-0

// order-1
// xs:order-1
// sm:order-1
// md:order-1
// lg:order-1
// xl:order-1
// 2xl:order-1

// order-2
// xs:order-2
// sm:order-2
// md:order-2
// lg:order-2
// xl:order-2
// 2xl:order-2

// order-3
// xs:order-3
// sm:order-3
// md:order-3
// lg:order-3
// xl:order-3
// 2xl:order-3

// order-4
// xs:order-4
// sm:order-4
// md:order-4
// lg:order-4
// xl:order-4
// 2xl:order-4

// order-5
// xs:order-5
// sm:order-5
// md:order-5
// lg:order-5
// xl:order-5
// 2xl:order-5

// order-6
// xs:order-6
// sm:order-6
// md:order-6
// lg:order-6
// xl:order-6
// 2xl:order-6

// order-7
// xs:order-7
// sm:order-7
// md:order-7
// lg:order-7
// xl:order-7
// 2xl:order-7

// order-8
// xs:order-8
// sm:order-8
// md:order-8
// lg:order-8
// xl:order-8
// 2xl:order-8

// order-9
// xs:order-9
// sm:order-9
// md:order-9
// lg:order-9
// xl:order-9
// 2xl:order-9

// order-10
// xs:order-10
// sm:order-10
// md:order-10
// lg:order-10
// xl:order-10
// 2xl:order-10

// order-11
// xs:order-11
// sm:order-11
// md:order-11
// lg:order-11
// xl:order-11
// 2xl:order-11

// order-12
// xs:order-12
// sm:order-12
// md:order-12
// lg:order-12
// xl:order-12
// 2xl:order-12

// order-13
// xs:order-13
// sm:order-13
// md:order-13
// lg:order-13
// xl:order-13
// 2xl:order-13

// order-14
// xs:order-14
// sm:order-14
// md:order-14
// lg:order-14
// xl:order-14
// 2xl:order-14

// order-15
// xs:order-15
// sm:order-15
// md:order-15
// lg:order-15
// xl:order-15
// 2xl:order-15

// order-16
// xs:order-16
// sm:order-16
// md:order-16
// lg:order-16
// xl:order-16
// 2xl:order-16

// order-17
// xs:order-17
// sm:order-17
// md:order-17
// lg:order-17
// xl:order-17
// 2xl:order-17

// order-18
// xs:order-18
// sm:order-18
// md:order-18
// lg:order-18
// xl:order-18
// 2xl:order-18

// order-19
// xs:order-19
// sm:order-19
// md:order-19
// lg:order-19
// xl:order-19
// 2xl:order-19

// order-20
// xs:order-20
// sm:order-20
// md:order-20
// lg:order-20
// xl:order-20
// 2xl:order-20

// order-21
// xs:order-21
// sm:order-21
// md:order-21
// lg:order-21
// xl:order-21
// 2xl:order-21

// order-22
// xs:order-22
// sm:order-22
// md:order-22
// lg:order-22
// xl:order-22
// 2xl:order-22

// order-23
// xs:order-23
// sm:order-23
// md:order-23
// lg:order-23
// xl:order-23
// 2xl:order-23

// order-24
// xs:order-24
// sm:order-24
// md:order-24
// lg:order-24
// xl:order-24
// 2xl:order-24