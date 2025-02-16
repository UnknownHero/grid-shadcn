
type Wrap = boolean
export type WrapProp = Wrap | undefined

export function wrapAntdToTW(wrap: WrapProp) {
  switch (wrap) {
    case true:
      return 'flex-wrap'
    case false:
      return 'flex-nowrap'
    default:
      return ''
  }
}