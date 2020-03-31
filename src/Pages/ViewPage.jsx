import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import axios from 'axios';
import { StatsList } from '../Components';

class ViewPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    console.log('---------props-----------', id);
    axios({
      method: 'get',
      url: 'http://localhost:5000/view',
      params: {
        objectId: id,
      },
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
        <StatsList data={data} />
      </Grid>
    );
  }
}

export default ViewPage;
