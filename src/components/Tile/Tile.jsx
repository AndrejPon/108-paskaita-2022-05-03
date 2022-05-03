import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Tile.style';

const Tile = ({ children }) => {
  return <S.Tile>{children}</S.Tile>;
};

Tile.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Tile;
