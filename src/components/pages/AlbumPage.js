import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Card, Image } from "semantic-ui-react";
import Lightbox from "react-image-lightbox";

class AlbumPage extends Component {
  state = {
    selectedPhoto: null,
    isOpen: false,

    photoIndex: 0
  };

  onClick = e => {
    this.setState({
      isOpen: true,
      photoIndex: parseInt(e.target.id, 10)
    });
  };

  componentDidMount() {
    if (this.props.history.action === "POP") {
      this.setState({ isOpen: false });
    }
  }

  render() {
    const { photos, albumId, album } = this.props;
    const { isOpen, photoIndex } = this.state;
    return (
      <div>
        <h1>{album[albumId].title}</h1>
        <div className="albums-grid">
          {photos[albumId].map((photo, i) => (
            <Card id={i} key={photo.id}>
              <Link to={`/album/${album[0].id}/${photo.title}`} id={i}>
                <Image
                  src={photo.url}
                  id={i}
                  onClick={this.onClick}
                  alt={photo.title}
                />
              </Link>
              <Card.Content id={i}>
                <Card.Header id={i}>{photo.title}</Card.Header>
              </Card.Content>
            </Card>
          ))}
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={photos[albumId][photoIndex].url}
            nextSrc={
              photos[albumId][(photoIndex + 1) % photos[albumId].length].url
            }
            prevSrc={
              photos[albumId][
                (photoIndex + photos[albumId].length - 1) %
                  photos[albumId].length
              ].url
            }
            onCloseRequest={() => {
              this.setState({ isOpen: false });
              this.props.history.goBack();
            }}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex:
                  (photoIndex + photos[albumId].length - 1) %
                  photos[albumId].length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % photos[albumId].length
              })
            }
            imageCaption={photos[albumId][photoIndex].title}
          />
        )}
      </div>
    );
  }
}

AlbumPage.propTypes = {
  albumId: PropTypes.string.isRequired
};

const mapStateToProps = state => {
  return {
    photos: state.photos,
    album: state.albums.albums,
    albumId: state.albums.id
  };
};

export default connect(mapStateToProps)(AlbumPage);
