import { style } from '@vanilla-extract/css';

import { vars } from '~/global.css';

const cardStyle = style({
  padding: 16,
  border: `1px solid ${vars.color.border}`,
  borderRadius: 8,
});

export { cardStyle };
