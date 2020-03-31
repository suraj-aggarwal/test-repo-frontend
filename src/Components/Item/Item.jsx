import React, { Component } from 'react';
import {
  Grid, Button, Select, MenuItem,
} from '@material-ui/core';
import axios from 'axios';
import { Link } from 'react-router-dom';
import history from '../history';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortDuration: 0,
      sortUsing: 'default',
      view: false,
    };
  }

  handleOnView = () => {
    const { data } = this.props;
    const { _id } = data;
    console.log(_id);
    return history.push(`/view/${_id}`);
  }

  handleChange = (e) => {
    this.setState({
      sortUsing: e.target.value,
    });
  }

  handleOnClickSort = () => {
    const { data } = this.props;
    const { sortUsing } = this.state;
    axios({
      method: 'get',
      url: 'http://localhost:5000/sort',
      params: {
        _id: data._id,
        sortUsing,
      },
    }).then((result) => {
      const
        { sortDuration } = result.data;
      console.log('---------sortDuraiton--------', sortDuration);
      this.setState({
        sortDuration,
      });
    }).catch((err) => {
      console.log(err);
    });
  };

  render() {
    const { data } = this.props;
    const { sortDuration, sortUsing } = this.state;
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
        <Grid item spacing={2}>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={sortUsing}
            onChange={this.handleChange}
            label="Select Algorithm"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="quickSort">quickSort</MenuItem>
            <MenuItem value="mergeSort">mergeSort</MenuItem>
            <MenuItem value="default">default</MenuItem>
          </Select>
          <Button variant="outlined" color="primary" onClick={this.handleOnClickSort}>Sort</Button>
          <Button variant="outlined" color="primary" onClick={this.handleOnView}>
            View
            <Link to="/view"> </Link>
          </Button>
          <p>
            Sort Duraiton:
            {sortDuration}
          </p>
        </Grid>
      </Grid>
    );
  }
}

export default Item;
