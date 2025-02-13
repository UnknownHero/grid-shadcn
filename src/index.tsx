import React from 'react';
import { MUIGrid } from './index.types';

interface GridProps extends MUIGrid {
  custom: boolean;
}

export function Grid({ custom }: GridProps) {
  console.log(custom);
  return <div>Test</div>;
}
