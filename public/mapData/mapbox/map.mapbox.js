// get bounding box: http://bboxfinder.com
let mapBounds = [-130.209961, 22.512557, -59.282227, 51.781436]//Southwest corner, Northeast corner

mapboxgl.accessToken = 'pk.eyJ1Ijoid2lsbGNhcnRlciIsImEiOiJjamV4b2g3Z2ExOGF4MzFwN3R1dHJ3d2J4In0.Ti-hnuBH8W4bHn7k6GCpGw'

let basemap = 'dark'

let countiesGeoJson

let map = new mapboxgl.Map({
  container: 'map-container',
  style: `mapbox://styles/mapbox/${basemap}-v9`,
  center: [(mapBounds[0] + mapBounds[2]) / 2, (mapBounds[1] + mapBounds[3]) / 2],
  zoom: 4
})

const getCounties = async () => {
  let url = `mapData/mapbox/counties.geojson`
  return await fetch(url).then(r => r.json())
}

const getTestResults = async () => {
  let url = `${dataUrl}`
  return await fetch(url).then(r => r.json())
}

map.on('load', async function () {

  let testResults = await getTestResults()
  countiesGeoJson = await getCounties()

  //merge them
  countiesGeoJson.features.forEach(county => {
    let match = testResults.find(tr => tr.geoid === county.properties.geoid)
    if (match) {
      county.properties['economic'] = match['economic']
      county.properties['diplomatic'] = match['diplomatic']
      county.properties['civil'] = match['civil']
      county.properties['societal'] = match['societal']
      county.properties['avg'] = (parseFloat(county.properties['economic']) + parseFloat(county.properties['diplomatic']) + parseFloat(county.properties['civil']) + parseFloat(county.properties['societal'])) / 4
    }
    else {
      county.properties['avg'] = 0
    }
  })

  // why doesn't this work?
  //countiesGeoJson.features = countiesGeoJson.features.map((item, i) => Object.assign({}, item, testResults[i]))
  // let merged = [];
  // merged = countiesGeoJson.features.map(itm => ({
  //   ...testResults.find((item) => (item.geoid === itm.id)),
  //   ...itm
  // }));
  // console.log('merged', merged)

  //console.log('countiesGeoJson.features', countiesGeoJson.features)

  map.addSource('counties', {
    type: 'geojson',
    data: countiesGeoJson
  })

  map.addSource('states', {
    type: 'geojson',
    data: 'mapData/mapbox/states.geojson'
  })

  //add counties
  map.addLayer({
    'id': 'counties',
    'type': 'fill',
    'source': 'counties',
    'layout': {},
    'paint': {
      'fill-color': {
        property: 'avg',
        stops: [
          [0, '#cccccc'],
          [1, '#ff0000'],
          [99, '#0015bc']
        ]
      },
      'fill-outline-color': '#919191'
    }
  })

  //add states
  map.addLayer({
    'id': 'states',
    'type': 'line',
    'source': 'states',
    'paint': {
      'line-color': '#ffffff',
      'line-width': 2,
      'line-blur': 1
    }
  })

  //handlePopup()

})

handlePopup = () => {

  // Create a popup, but don't add it to the map yet.
  let popup = new mapboxgl.Popup({
    offset: 0,
    closeButton: false,
    closeOnClick: false
  })

  map.on('mouseenter', 'counties_contracted_layer', (e) => {

    //console.log('e', e)

    let geoid = e.features[0].properties.geoid

    // let coordinates = [e.lngLat.lng, e.lngLat.lat]
    let coordinates = [e.features[0].properties.longitude, e.features[0].properties.latitude]

    let match = countiesGeoJson.features.find(county => county.properties.geoid === geoid)

    map.getCanvas().style.cursor = 'pointer'

    // // Ensure that if the map is zoomed out such that multiple copies of the feature are visible, the popup appears over the copy being pointed to.
    // while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
    //   coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360
    // }

    let tooltip_msg = ''
    tooltip_msg += `<strong>${match.properties.name} County</strong><br/>`
    tooltip_msg += `some other text<br/>`

    // Populate the popup and set its coordinates based on the feature found.
    popup.setLngLat(coordinates)
      .setHTML(tooltip_msg)
      .addTo(map)

  })

  map.on('mouseleave', 'counties_contracted_layer', () => {
    map.getCanvas().style.cursor = ''
    popup.remove()
  })

}