import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import axios from 'axios';
import { List } from '../Components';

class ListUnsorted extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: 'http://localhost:5000/list',
    }).then((result) => {
      const { data } = result;
      console.log('--------Data--------------', result.data);
      this.setState({
        data,
      });
    }).catch((err) => {
      console.log(err);
    });
  }

  render() {
    const { data } = this.state;
    return (
      <Grid>
        <List data={data} />
      </Grid>
    );
  }
}

export default ListUnsorted;
