import React, { createElement }  from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import {
  MEDIA_QUERIES,
  GOTHAM,
  LEVEL_SIZE,
  FONT_SIZES,
  LEVEL_TAG,
} from '../../../constants';

/**
 * The only true button.
 */
const StyledHeader = styled(({ level, children, ...props }) =>
  createElement(LEVEL_TAG[level], props, children))(
  {
    fontFamily: GOTHAM,
    fontWeight: 'bold',
    margin: 0,
  },
  ({ level, size = LEVEL_SIZE[level] }) => ({
    fontSize: FONT_SIZES[size].mobile.fontSize,
    lineHeight: FONT_SIZES[size].mobile.lineHeight,
    marginBottom: FONT_SIZES[size].mobile.spacing,
    [MEDIA_QUERIES.LARGESCREEN]: {
      fontSize: FONT_SIZES[size].tablet.fontSize,
      lineHeight: FONT_SIZES[size].tablet.lineHeight,
      marginBottom: FONT_SIZES[size].tablet.spacing,
    },
    [MEDIA_QUERIES.PRINT]: {
      fontSize: FONT_SIZES[size].print.fontSize,
    },
  }),
);

const Header = props => <StyledHeader {...props} />;

Header.propTypes = {
  /**
   * Semantic heading level value between 1 and 6
   */
  level: PropTypes.number,
  /**
   * Visual size level, accepts   `XLARGE`, `LARGE`, `MEDIUM`, `SMALL`, `XSMALL`
   */
  size: PropTypes.oneOf(Object.keys(FONT_SIZES)),
};

export default Header;