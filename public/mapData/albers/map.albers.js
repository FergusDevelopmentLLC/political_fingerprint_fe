const getJson = async (url) => {
  return await fetch(url).then(r => r.json())
}

const getColorFor = (testResult) => {
  let avg = (parseFloat(testResult['economic']) + parseFloat(testResult['diplomatic']) + parseFloat(testResult['civil']) + parseFloat(testResult['societal'])) / 4
  return d3.color(getColor(avg)).formatHex()
}

const getCountyFillColors = (counties, testResults) => {

  // we want to return an array like this to drive county color
  // let fake = [
  //   'match',
  //   ['get', 'geoid'],
  //   '19189', 
  //   'red',
  //   '20093',
  //   'purple',
  //   '21029',
  //   'green',
  //   '21063',
  //   'purple',
  //   '#ccc'//other
  // ]

  let returnArray = []
  returnArray.push('match')
  returnArray.push(['get', 'geoid'])

  for (testResult of testResults) {
    returnArray.push(testResult['geoid'])
    returnArray.push(getColorFor(testResult))
  }

  returnArray.push('#ccc')

  return returnArray
}

let countiesGeoJson
let testResults

mapboxgl.accessToken = 'pk.eyJ1Ijoid2lsbGNhcnRlciIsImEiOiJjamV4b2g3Z2ExOGF4MzFwN3R1dHJ3d2J4In0.Ti-hnuBH8W4bHn7k6GCpGw'

// get bounding box: http://bboxfinder.com
let mapBounds = [-21, -14, 20, 14]//Southwest corner, Northeast corner
let map = new mapboxgl.Map({
  container: 'map',
  style: `mapbox://styles/willcarter/ckfps2kwa01u019pp7bel1a7w`,
  center: [(mapBounds[0] + mapBounds[2]) / 2, (mapBounds[1] + mapBounds[3]) / 2]
})

let getColor = d3.scaleLinear().domain([0, 99]).range(["#ff0000", "#0015bc"])

let popup = new mapboxgl.Popup({
  offset: 0,
  closeButton: false,
  closeOnClick: false
})

map.fitBounds([
  [mapBounds[0], mapBounds[1]],
  [mapBounds[2], mapBounds[3]]
])

map.on('load', async function () {

  testResults = await getJson(testResultsUrl)
  countiesGeoJson = await getJson("mapData/albers/counties_albers.geojson")

  map.addSource('counties', {
    type: 'vector',
    url: 'mapbox://willcarter.czkf2uey'
  })

  map.addSource('counties_contracted_source', {
    type: 'vector',
    url: 'mapbox://willcarter.1n52p1jf'
  })

  map.addSource('states_source', {
    type: 'vector',
    url: 'mapbox://willcarter.a5cnwnoj'
  })

  map.addLayer({
    'id': 'states_bg',
    'source': 'states_source',
    'source-layer': 'states_albers',
    'type': 'fill',
    'paint': {
      'fill-color': '#ffffff'
    }
  })

  map.addLayer({
    'id': 'county',
    'source': 'counties',
    'source-layer': 'counties_albers-ala1ut',
    'type': 'fill',
    'paint': {
      'fill-color': getCountyFillColors(countiesGeoJson.features, testResults),
      'fill-outline-color': '#919191'
    }
  })

  map.addLayer({
    'id': 'counties_contracted',
    'source': 'counties_contracted_source',
    'source-layer': 'counties_contracted_albers-cvwq37',
    'type': 'fill',
    'paint': {
      'fill-opacity': 0
    }
  })

  map.addLayer({
    'id': 'states',
    'source': 'states_source',
    'source-layer': 'states_albers',
    'type': 'line',
    'paint': {
      'line-width': 2,
      'line-color': '#ffffff',
      'line-opacity': 1,
      'line-blur': 1
    }
  })

  handlePopup()
})

handlePopup = () => {

  const showPopup = (countyOfInterest) => {

    //let coordinates = [e.lngLat.lng, e.lngLat.lat]
    let coordinates = [countyOfInterest.properties.albers_x, countyOfInterest.properties.albers_y]
    let match = testResults.find(tr => tr.geoid === countyOfInterest.properties.geoid)

    let tooltip_msg = ''
    tooltip_msg += `<div class="popup-header"><strong>${countyOfInterest.properties.name} County, ${countyOfInterest.properties.state_abbrev}</strong></div>`
    tooltip_msg += `<div>`
    if (match) {

      let width = 100
      let height = 15
      let defs = `
            <defs>
              <linearGradient id="gradient">
                <stop class="red-stop" offset="0%" />
                <stop class="blue-stop" offset="100%" />
              </linearGradient>
            </defs>`

      // tooltip_msg += `<div>econ: ${match.economic.toFixed(2)}</div>`
      tooltip_msg += `<div class='popup-subheader'>Economic</div>`
      tooltip_msg += `<div class='popup-barheader'><div>Equality</div><div>Markets</div></div>`
      tooltip_msg += `
          <div class="bar-wrapper">
            <svg height="${height}" width="${width}">
              ${defs}
              <rect class="bar" width="${width}" height="${height}" />
              <line class="line" x1="${match.economic}" y1="0" x2="${match.economic}" y2="${height}" />
            </svg>
          </div>`

      // tooltip_msg += `<div>dipl: ${match.diplomatic.toFixed(2)}</div>`
      tooltip_msg += `<div class='popup-subheader'>Diplomatic</div>`
      tooltip_msg += `<div class='popup-barheader'><div>Nation</div><div>World</div></div>`
      tooltip_msg += `
          <div class="bar-wrapper">
            <svg height="${height}" width="${width}">
              ${defs}
              <rect class="bar" width="${width}" height="${height}" />
              <line class="line" x1="${match.diplomatic}" y1="0" x2="${match.diplomatic}" y2="${height}" />
            </svg>
            
          </div>`

      // tooltip_msg += `<div>civil: ${match.civil.toFixed(2)}</div>`
      tooltip_msg += `<div class='popup-subheader'>Civil</div>`
      tooltip_msg += `<div class='popup-barheader'><div>Liberty</div><div>Authority</div></div>`
      tooltip_msg += `
          <div class="bar-wrapper">
            <svg height="${height}" width="${width}">
              ${defs}
              <rect class="bar" width="${width}" height="${height}" />
              <line class="line" x1="${match.civil}" y1="0" x2="${match.civil}" y2="${height}" />
            </svg>
          </div>`

      // tooltip_msg += `<div>societal: ${match.societal.toFixed(2)}</div>`
      tooltip_msg += `<div class='popup-subheader'>Societal</div>`
      tooltip_msg += `<div class='popup-barheader'><div>Traditional</div><div>Modern</div></div>`
      tooltip_msg += `
          <div class="bar-wrapper">
            <svg height="${height}" width="${width}">
              ${defs}
              <rect class="bar" width="${width}" height="${height}" />
              <line class="line" x1="${match.societal}" y1="0" x2="${match.societal}" y2="${height}" />
            </svg>
          </div>`
    }
    else {
      tooltip_msg += `<div class="popup-subheader">No test results</div>`
    }
    tooltip_msg += `<div>`
    // Populate the popup and set its coordinates based on the feature found.
    popup.setLngLat(coordinates)
      .setHTML(tooltip_msg)
      .addTo(map)
  }

  map.on('click', 'counties_contracted', (e) => {

    map.getCanvas().style.cursor = 'pointer'

    popup.remove()

    map.flyTo({
      center: [e.features[0].properties.albers_x, e.features[0].properties.albers_y],
      zoom: 7.5,
      essential: true
    })

    showPopup(e.features[0])

  })

  map.on('mouseenter', 'counties_contracted', (e) => {
    map.getCanvas().style.cursor = 'pointer'
    showPopup(e.features[0])
  })

  map.on('mouseleave', 'counties_contracted', () => {
    map.getCanvas().style.cursor = ''
    popup.remove()
  })

}