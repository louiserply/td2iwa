import React from 'react';
import AuthService from '../../services/authentification';
import { Button, Card } from 'semantic-ui-react';

let names = [
  'Louise',
  'Aurélien',
  'Matthieu'
];


export default class AppThumbnail extends React.Component {
  render(){
    return (
      <div>
        <h2>  Token :  {AuthService.getToken()} </h2>
        <h3> Thumbnails </h3>
        <Gallery thumbnailNames={names} />
      </div>
    );
  }
}

class GalleryItem extends React.Component {
  deleteItem() {
    console.log('element deleted');
    names.pop()
  }

  render() {
    return (<Card>
      <Card.Content>
        <Card.Header>
          {this.props.itemValue}
        </Card.Header>
      </Card.Content>
      <Card.Content extra>
        <Button basic color='red'onClick={this.deleteItem}>Delete</Button>
      </Card.Content>
    </Card>)
  }
}

class Gallery extends React.Component {
  addGalleryItem() {
    /*this.props.thumbnailNames.push('Franklin');
    let newArray = this.props.thumbnailNames.slice();
    newArray.push("Franklin");
    this.setState({thumbnailNames: newArray});*/
    console.log('pushed');
    names.push('Franklin');


  };

  render() {
    return (<Card.Group itemsPerRow={3}>
      {this.props.thumbnailNames.map(function (item) {
        return <GalleryItem itemValue={item}/>;
      })}
      <Card>
        <Card.Content>
          <Button basic color='green' onClick={this.addGalleryItem}>Add</Button>
        </Card.Content>
      </Card>
    </Card.Group>);
  }
}


Gallery.propTypes = {
  thumbnailNames: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
};