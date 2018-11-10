import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Card, Image } from "semantic-ui-react";

import Modal from "../modules/Modal";

class AlbumPage extends Component {
  state = {
    selectedPhoto: null,
    showModal: false,
    modalData: {
      src: "",
      title: ""
    }
  };
  onClick = e => {
    this.setState({
      showModal: true,
      modalData: { src: e.target.src, title: e.target.alt }
    });
  };

  onClose = () => {
    this.setState({ showModal: false });
    this.props.history.goBack();
  };

  render() {
    const { photos, albumId, album } = this.props;
    const { showModal, modalData } = this.state;
    return (
      <div>
        <h1>{album[albumId].title}</h1>
        <div className="albums-grid">
          {photos[albumId].map((photo, i) => (
            <Card id={i}>
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
        {showModal && (
          <Modal
            src={modalData.src}
            title={modalData.title}
            onClick={this.onClose}
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
