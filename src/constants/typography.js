// https://govuk-elements.herokuapp.com/typography/#typography-headings
// https://github.com/alphagov/govuk_frontend_toolkit/blob/master/stylesheets/_typography.scss
// https://github.com/alphagov/govuk-frontend/blob/master/src/globals/scss/core/_typography.scss
// https://github.com/alphagov/govuk_elements/blob/master/packages/govuk-elements-sass/public/sass/elements/_elements-typography.scss

// using spacing values from https://github.com/alphagov/govuk-frontend/blob/master/src/globals/scss/core/_typography.scss
import { RESPONSIVE_8, RESPONSIVE_6, RESPONSIVE_4 } from './spacing';

const FONT_70 = {
  tablet: {
    lineHeight: 70 / 70,
    fontSize: 70,
    spacing: RESPONSIVE_8.tablet,
  },
  mobile: {
    lineHeight: 55 / 53,
    fontSize: 53,
    spacing: RESPONSIVE_8.mobile,
  },
  print: {
    fontSize: 28,
  },
};

const FONT_46 = {
  tablet: {
    lineHeight: 50 / 46,
    fontSize: 46,
    spacing: RESPONSIVE_6.tablet,
  },
  mobile: {
    lineHeight: 35 / 32,
    fontSize: 32,
    spacing: RESPONSIVE_6.mobile,
  },
  print: {
    fontSize: 18,
  },
};

const FONT_30 = {
  tablet: {
    lineHeight: 36 / 30,
    fontSize: 30,
    spacing: RESPONSIVE_4.tablet,
  },
  mobile: {
    lineHeight: 25 / 24,
    fontSize: 24,
    spacing: RESPONSIVE_4.mobile,
  },
  print: {
    fontSize: 18,
  },
};

const FONT_26 = {
  tablet: {
    lineHeight: 29 / 26,
    fontSize: 26,
    spacing: RESPONSIVE_4.tablet,
  },
  mobile: {
    lineHeight: 19 / 17,
    fontSize: 19,
    spacing: RESPONSIVE_4.mobile,
  },
  print: {
    fontSize: 16,
  },
};

const FONT_22 = {
  tablet: {
    lineHeight: 28 / 22,
    fontSize: 22,
    spacing: RESPONSIVE_4.tablet,
  },
  mobile: {
    lineHeight: 22 / 18,
    fontSize: 18,
    spacing: RESPONSIVE_4.mobile,
  },
  print: {
    fontSize: 16,
  },
};

const FONT_18 = {
  tablet: {
    lineHeight: 24 / 18,
    fontSize: 18,
    spacing: RESPONSIVE_4.tablet,
  },
  mobile: {
    lineHeight: 20 / 16,
    fontSize: 16,
    spacing: RESPONSIVE_4.mobile,
  },
  print: {
    fontSize: 14,
  },
};

const FONT_16 = {
  tablet: {
    lineHeight: 20 / 16,
    fontSize: 16,
    spacing: RESPONSIVE_4.tablet,
  },
  mobile: {
    lineHeight: 16 / 14,
    fontSize: 14,
    spacing: RESPONSIVE_4.mobile,
  },
  print: {
    fontSize: 12,
  },
};

// Association between 'xsmall' format used by https://github.com/alphagov/govuk_elements/blob/master/packages/govuk-elements-sass/public/sass/elements/_elements-typography.scss
// and core-xx format used by https://github.com/alphagov/govuk_frontend_toolkit/blob/master/stylesheets/_typography.scss
//
// core-80 is misleading as it is not always 80px, therefore xsmall format is preferred,
// but lookup to original mixin values is kept for clarity.
const XXLARGE = FONT_70;
const XLARGE = FONT_46;
const LARGE = FONT_30;
const MEDIUMLARGE = FONT_26;
const MEDIUM = FONT_22;
const SMALL = FONT_18;
const XSMALL = FONT_16;

// all available font sizes
export const FONT_SIZES = {
  XXLARGE,
  XLARGE,
  LARGE,
  MEDIUMLARGE,
  MEDIUM,
  SMALL,
  XSMALL,
};

// Lookup between numerical header level and associated html element
export const LEVEL_TAG = {
  1: 'h1',
  2: 'h2',
  3: 'h3',
  4: 'h4',
  5: 'h5',
  6: 'h6',
};

// Lookup between a header level (1-6) and the associated default font size
export const LEVEL_SIZE = {
  1: 'XLARGE',
  2: 'LARGE',
  3: 'MEDIUM',
  4: 'SMALL',
  5: 'XSMALL',
  6: 'XSMALL',
};
