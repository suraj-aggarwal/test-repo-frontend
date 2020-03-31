import React from 'react';
import { GridList, GridListTile } from '@material-ui/core';
import propTypes from 'prop-types';
import { Stats } from '../Stats';

function StatsList(props) {
  const { data } = props;
  return (
    <GridList sapcing={3}>
      {data.map((val) => (
        <GridListTile>
          <Stats data={val} />
        </GridListTile>
      ))}
    </GridList>
  );
}

StatsList.propTypes = {
  data: propTypes.arrayOf,
};

StatsList.defaultProps = {
  data: [],
};

export default StatsList;
