import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/core/Slider';
import './FormComponent.css';

class FormComponent extends React.Component {

  previewFile = (event) => {
    if (event.target.files[0]) {
      this.props.getOriginalImage(event.target.files[0]);
    }
  }
  setImageFilter = (event, newValue) => {
    this.props.setImageFilter(newValue);
  }
  submit = () => {
    this.props.sendSubmit();
  }

  render() {
    return (
      <div className="FormComponent">
        <Grid container spacing={2}>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}>
            Settings
            <Slider value={this.value} onChange={this.setImageFilter} aria-labelledby="continuous-slider" />
          </Grid>
          <Grid item xs={6}>
            <Button color="primary" variant="contained" component="label" onChange={this.previewFile}  >
              Upload the image
              <input type="file" accept=".jpg,.png" hidden />
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button color="primary" variant="contained" component="label" onClick={this.submit}  >
              Process the image
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}




export default FormComponent;
