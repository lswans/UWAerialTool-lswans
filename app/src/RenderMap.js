/*import React, { Component } from 'react';
import { loadModules } from 'esri-loader';

const options = {
  url: 'https://js.arcgis.com/4.6/'
};

const styles =  {
  container: {
    height: '100vh',
    width: '100vw'
  },
  mapDiv: {
    padding: 0,
    margin: 0,
    height: '100%',
    width: '100%'
  },
}

class BaseMap extends Component {

  constructor(props) {
    super(props);
    this.state = {
      status: 'loading'
    }
  }

  componentDidMount() {
    loadModules(['esri/Map', 'esri/views/MapView'], options)
      .then(([Map, MapView]) => {
        const map = new Map({ basemap: "streets" });
        const view = new MapView({
          container: "viewDiv",
          map,
          zoom: 15,
          center: [78.4867, 17.3850]
        });
        view.then(() => {
          this.setState({
            map,
            view,
            status: 'loaded'
          });
        });
      })

  }

  renderMap() {
    if(this.state.status === 'loading') {
      return <div>loading</div>;
    }
  }

  render() {

    return(
          <div style={styles.container}>
            <div id='viewDiv' style={ styles.mapDiv } >
              {this.renderMap()}
            </div>
          </div>
    )
    }
}*/