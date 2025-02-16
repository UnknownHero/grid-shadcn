import { AntdGridBaseProps } from './types.ts';
import { cn } from '../lib/utils.ts';
import { alignAntdToTW, AlignProp } from './props/row/align.ts';
import { gutterAntdToTW, GutterProp } from './props/row/gutter.ts';
import { Justify, justifyAntdToTW } from './props/row/justify.ts';
import { wrapAntdToTW } from './props/row/wrap.ts';
import { Breakpoint } from './props/breakpoint.ts';

export interface AntdGridRow extends AntdGridBaseProps{
  align?: AlignProp
  gutter?: GutterProp
  justify?: Justify | Record<Breakpoint, Justify>
  wrap?: boolean
}

export function Row({ align, children, justify, gutter, wrap }: AntdGridRow) {
  const rowClasses = cn(`flex ${alignAntdToTW(align)} ${gutterAntdToTW(gutter)} ${justifyAntdToTW(justify)} ${wrapAntdToTW(wrap)}`,{
  });
  return <div className={rowClasses}>{children}</div>;
}