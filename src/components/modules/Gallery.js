import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Card, Image } from "semantic-ui-react";

import { getClickedAlbumId } from "../../actions/albums";

class Gallery extends Component {
  onClick = e => this.props.getClickedAlbumId(e.target.id);

  render() {
    const { albums, photos } = this.props;
    return (
      <div className="albums-grid">
        {albums.map((album, i) => (
          <Link
            to={`/album/${album.id}`}
            key={album.id}
            id={i}
            onClick={this.onClick}
          >
            <Card id={i}>
              <Image src={photos[i][0].thumbnailUrl} id={i} />
              <Card.Content id={i}>
                <Card.Header id={i}>{album.title}</Card.Header>
              </Card.Content>
            </Card>
          </Link>
        ))}
      </div>
    );
  }
}

Gallery.propTypes = {
  albums: PropTypes.array.isRequired,
  photos: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return {
    albums: state.albums.albums,
    photos: state.photos
  };
};

export default connect(
  mapStateToProps,
  { getClickedAlbumId }
)(Gallery);
