import { AntdGridBaseProps } from './types';
import { cn } from '../lib/utils';
import { flexAntdToTW, FlexProp } from './props/col/flex';
import { offsetAntdToTW, OffsetProp } from './props/col/offset';
import { Order, orderAntdToTW } from './props/col/order';
import { Pull, pullAntdToTW } from './props/col/pull';
import { Span, spanAntdToTW } from './props/col/span';
import { Display, displayAntdToTW } from './props/col/display';
import { Push, pushAntdToTW } from './props/col/push';

export interface AntdGridColProps extends AntdGridBaseProps {
  flex?: FlexProp;
  offset?: OffsetProp;
  order?: Order;
  pull?: Pull;
  push?: Push;
  span?: Span;
  display?: Display;
}

export function Col({ flex, offset, order, pull, push, span, display, children }: AntdGridColProps) {
  const rowClasses = cn(`relative ${displayAntdToTW(display)} ${offsetAntdToTW(offset)} ${orderAntdToTW(order)} ${pullAntdToTW(pull)} ${pushAntdToTW(push)} ${spanAntdToTW(span)} ${flexAntdToTW(flex)}`, {});
  return <div className={rowClasses}>{children}</div>;
}
