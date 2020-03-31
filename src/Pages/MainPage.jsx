import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { AddDialog, List } from '../Components';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

    appendData = (element, data) => {
      this.setState({ data: [...data, element] });
    }

    render() {
      const { data } = this.state;
      return (
        <Grid>
          <AddDialog addData={this.appendData} data={data} />
          <List data={data} />
        </Grid>
      );
    }
}

export default MainPage;
