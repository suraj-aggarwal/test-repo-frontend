import React, { Component } from 'react';
import {
  TextField, Button, Grid, Typography,
} from '@material-ui/core';
import axios from 'axios';

class AddDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rootkeyCount: 0,
      depth: 0,
    };
  }

  handlerrootKeyCount = (e) => {
    this.setState({
      rootkeyCount: e.target.value,
    });
  }

  handlerDepth = (e) => {
    this.setState({
      depth: e.target.value,
    });
  }

  handlerOnClick = () => {
    const {
      rootkeyCount, depth,
    } = this.state;
    const { addData, data} = this.props;
    axios.post('http://localhost:5000/create', { rootkeyCount, depth })
      .then((res) => {
        const { _id, generationTime, size } = res.data;
        const element = {
          rootkeyCount, depth, _id, generationTime, size,
        };
        addData(element, data);
        console.log('outside addData');
      })
      .catch((err) => console.log(err));
  }


  render() {
    const {
      rootkeyCount, depth,
    } = this.state;
    return (
      <div>
        <Typography variant="subtitle1" gutterBottom>
          ADD OBJECT:
        </Typography>
        <Grid container spacing={2} label="Add Object">
          <Grid item xs="auto">
            <TextField
              name="rootkeyCount"
              onChange={this.handlerrootKeyCount}
              value={rootkeyCount}
              variant="outlined"
              color="primary"
              size="small"
              label="rootkeyCount"
            />
          </Grid>
          <Grid item xs="auto">
            <TextField
              name="depth"
              onChange={this.handlerDepth}
              value={depth}
              variant="outlined"
              size="small"
              color="primary"
              label="depth"
            />
          </Grid>
          <Grid item xs="auto">
            <Button
              name="add Object"
              variant="outlined"
              color="primary"
              size="medium"
              onClick={this.handlerOnClick}
            >
              Add
            </Button>
          </Grid>
        </Grid>
      </div>

    );
  }
}
export default AddDialog;
