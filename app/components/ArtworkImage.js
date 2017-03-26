import React, { Component, PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

const styles = StyleSheet.create({
  artwork: {
    minHeight: '100%',
    width: '100%',
    height: 'auto',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    opacity: 1,
    transition: 'opacity .1s linear',
  },
  aside: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: '20px',
    background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,.2) 33%, rgba(0,0,0,.4) 66%, rgba(0,0,0,.6) 99%)',
    color: '#fff',
    textShadow: '0 2px 2px rgba(0,0,0,.5)'
  },
  time: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    padding: '20px',
    color: '#b8b8b8',
    fontSize: '84px'
  },
  paragraph: {
    color: '#b8b8b8',
    fontSize: '14px',
    fontWeight: 300,
  },
  title: {
    fontSize: '30px',
    fontWeight: 100,
  },
  artistName: {
  },
  hidden: {
    display: 'none'
  },
});


class ArtworkImage extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerId = setInterval(
      () => this.tick(),
      1000
    );
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    const {
      title,
      artist_name,
      provider_name,
      artwork_url,
    } = this.props.artwork;

    return (
      <div>
        <main
          className={css(styles.artwork)}
          style={{ backgroundImage: `url(${artwork_url})` }}
        />
        <section className={css(styles.aside)}>
          <h1 className={css(styles.title)}>{title}</h1>
          <p className={css(styles.paragraph, styles.artistName)}>{artist_name} | {provider_name}</p>
          <p><a className={css(styles.paragraph)} href="http://arto.gallery">ARTO Gallery</a></p>
          <h1 className={css(styles.title, styles.time)}>{this.state.date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</h1>
        </section>
      </div>
    );
  }
}

ArtworkImage.defaultProps = {
  artwork: null
};

ArtworkImage.propTypes = {
  artwork: PropTypes.shape({
    title: PropTypes.string.isRequired,
    artwork_url: PropTypes.string.isRequired,
    artwork_small_url: PropTypes.string.isRequired,
    artist_name: PropTypes.string.isRequired,
    provider_name: PropTypes.string.isRequired,
  }).isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default ArtworkImage;