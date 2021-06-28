import React from 'react';
import axios from 'axios';
import './App.css';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ImagePreviewComponent from './components/ImagePreviewComponent/ImagePreviewComponent';
import FormComponent from './components/FormComponent/FormComponent';

class App extends React.Component {

  constructor(props) {
    super(props)
  }

  state = {
    processedFile: './assets/unnamed.png',
    originalFile: './assets/unnamed.png',
    postFile: null,
    filter: 0
  }

  previewImage = (image) => {
    this.setState({
      originalFile: URL.createObjectURL(image)
    })
    this.setState({
      postFile: image
    })
  }

  imageFilter = (data) => {
    this.setState({
      filter: data
    })
  }

  sendSubmit = () => {
    if (this.state.postFile) {
      const formData = new FormData();
      formData.append('filter', this.state.filter);
      formData.append('postFile', this.state.postFile, this.state.postFile.name);

      axios.post(`http://localhost:5000/api/create`, formData)
        .then(res => {
          this.setState({
            processedFile: res.data + '?' + Date.now()
          })
        })
        .catch(e => {
          alert(e.response.data)
        })
    }
  }

  render() {
    return (
      <div className="App">
        <Container className="main">
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <ImagePreviewComponent previewImage={this.state.originalFile} />
            </Grid>
            <Grid item xs={6}>
              <ImagePreviewComponent previewImage={this.state.processedFile} />
            </Grid>
            <Grid item xs={12}>
              <FormComponent getOriginalImage={this.previewImage} setImageFilter={this.imageFilter} sendSubmit={this.sendSubmit} />
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default App;
