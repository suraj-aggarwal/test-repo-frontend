import React from 'react';
import { GridList, GridListTile } from '@material-ui/core';
import propTypes from 'prop-types';
import { Item } from '../Item';

function List(props) {
  const { data } = props;
  return (
    <GridList sapcing={3}>
      {data.map((val) => (
        <GridListTile>
          <Item data={val} />
        </GridListTile>
      ))}
    </GridList>
  );
}

List.propTypes = {
  data: propTypes.arrayOf,
};

List.defaultProps = {
  data: [],
};

export default List;
