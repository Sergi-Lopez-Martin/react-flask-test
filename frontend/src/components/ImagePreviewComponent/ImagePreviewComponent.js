import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import './ImagePreviewComponent.css';

class ImagePreviewComponent extends React.Component {
  render() {
    return (
      <div className="ImagePreviewComponent">
        <Card>
          <CardMedia className="media" image={this.props.previewImage} />
        </Card>
      </div>
    )
  }
}
export default ImagePreviewComponent;
