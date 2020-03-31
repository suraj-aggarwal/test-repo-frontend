import React from 'react';
import {
  Grid,
} from '@material-ui/core';


function Stats(props) {
  const { data } = props;
  return (
    <Grid container>
      <Grid item>
        {
          Object.keys(data).map((key) => (
            <p>
              {key}
              {' '}
              :
              {' '}
              {data[key]}
              {' '}
            </p>
          ))
        }
      </Grid>
    </Grid>
  );
}

export default Stats;
