import React from 'react';

/**
 * https://mui.com/material-ui/api/grid-2/
 */
export interface MUIGrid {
  children: React.ReactNode;

  columns: Array<number> | number | object;

  columnSpacing: Array<number | string> | number | object | string;

  container: boolean;

  direction:
    | 'column-reverse'
    | 'column'
    | 'row-reverse'
    | 'row'
    | Array<'column-reverse' | 'column' | 'row-reverse' | 'row'>
    | object;

  offset: string | number | Array<string | number> | object;

  rowSpacing: Array<number | string> | number | object | string;

  size: string | boolean | number | Array<string | boolean | number> | object;

  spacing: Array<number | string> | number | object | string;

  wrap: 'nowrap' | 'wrap-reverse' | 'wrap';
}
