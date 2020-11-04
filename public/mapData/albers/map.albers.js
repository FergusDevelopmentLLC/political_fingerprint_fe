let countiesGeoJson
let featureOfInterest

const getJson = async url => await fetch(url).then(r => r.json())

const getColorFor = (testResult) => {
  
  const total = parseFloat(testResult['economic']) 
              + parseFloat(testResult['diplomatic'])
              + (100 - parseFloat(testResult['civil'])) 
              + parseFloat(testResult['societal'])

  const avg = total / 4
  
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

const rotateBy = (current) => {
  map.rotateTo( current + 5, { duration: 200, easing: (t) => { return t } })//add 5 degrees to the current bearing.
  // source:
  // https://gist.github.com/danswick/ceb7de7a29330b024f88
}

const scaleMap = () => {

  popup.remove()
  
  map.fitBounds([
    [mapBounds[0], mapBounds[1]],
    [mapBounds[2], mapBounds[3]]
  ])
  
  map.resize()
  
  let legend = document.getElementById('legend-wrapper')
  let politipointButtons = document.getElementsByClassName('politipoint-button-container') 

  if (window.innerWidth > 420) {
    legend.style.display = 'block'
    legend.style.width = '55%'
    if(politipointButtons && politipointButtons.length > 0) {
      politipointButtons[0].style.visibility = 'visible'
    }
    map.scrollZoom.enable()
  }
  else {
    if(window.innerHeight == screen.height || window.location.href.indexOf("map.html") > -1) {
      legend.style.display = 'block'
      legend.style.width = '55%'
      if(politipointButtons && politipointButtons.length > 0) {
        politipointButtons[0].style.visibility = 'visible'
      }
      map.scrollZoom.enable()
    }
    else {
      legend.style.display = 'none'
    }
  }
  
}

const handlePopup = () => {

  map.on('click', 'counties_contracted', (e) => {

    featureOfInterest = e.features[0]

    map.getCanvas().style.cursor = 'pointer'

    let mapContainerWidth = document.getElementById("map-container").offsetWidth

    let zoomLevel = 8
    if(mapContainerWidth < 500) zoomLevel = 6

    let match = testResults.find(tr => tr.geoid === featureOfInterest.properties.geoid)

    if (match) {
      zoomLevel = zoomLevel - 2
    }

    map.flyTo({
      center: [featureOfInterest.properties.albers_x, featureOfInterest.properties.albers_y],
      zoom: zoomLevel,
      essential: true
    })

  })

  map.on('mouseenter', 'counties_contracted', (e) => {
    map.getCanvas().style.cursor = 'pointer'
  })

}

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
              <stop class="blue-stop" offset="0%" />
              <stop class="red-stop" offset="100%" />
            </linearGradient>
          </defs>`

    if(match.economic) {
      tooltip_msg += 
        `
        <div class='popup-subheader'>Economic: <em>${match.economic_match}</em></div>
        <div class='popup-barheader'><div>Equality</div><div>Markets</div></div>
        <div class="bar-wrapper-map">
          <svg height="${height}" width="${width}">
            ${defs}
            <rect class="bar" width="${width}" height="${height}" />
            <line class="line" x1="${100 - match.economic}" y1="0" x2="${100 - match.economic}" y2="${height}" />
          </svg>
        </div>`
    }

    if(match.diplomatic) {
      tooltip_msg += `
        <div class='popup-subheader'>Diplomatic: <em>${match.diplomatic_match}</em></div>
        <div class='popup-barheader'><div>World</div><div>Nation</div></div>
        <div class="bar-wrapper-map">
          <svg height="${height}" width="${width}">
            ${defs}
            <rect class="bar" width="${width}" height="${height}" />
            <line class="line" x1="${100 - match.diplomatic}" y1="0" x2="${100 - match.diplomatic}" y2="${height}" />
          </svg>
        </div>`
    }
    
    if(match.civil) {
      tooltip_msg += `
        <div class='popup-subheader'>Civil: <em>${match.civil_match}</em></div>
        <div class='popup-barheader'><div>Authority</div><div>Liberty</div></div>
        <div class="bar-wrapper-map">
          <svg height="${height}" width="${width}">
            ${defs}
            <rect class="bar" width="${width}" height="${height}" />
            <line class="line" x1="${match.civil}" y1="0" x2="${match.civil}" y2="${height}" />
          </svg>
        </div>`
    }
    
    if(match.societal) {
      tooltip_msg += `
        <div class='popup-subheader'>Societal: <em>${match.societal_match}</em></div>
        <div class='popup-barheader'><div>Progress</div><div>Tradition</div></div>
        <div class="bar-wrapper-map">
          <svg height="${height}" width="${width}">
            ${defs}
            <rect class="bar" width="${width}" height="${height}" />
            <line class="line" x1="${100 - match.societal}" y1="0" x2="${100 - match.societal}" y2="${height}" />
          </svg>
        </div>`
    }
    
    tooltip_msg += `<div class='popup-subheader'>Ideology: <em><a href='https://politipoint.org/results.html?e=${match.economic.toFixed(2)}&d=${match.diplomatic.toFixed(2)}&g=${match.civil.toFixed(2)}&s=${match.societal.toFixed(2)}'>${match.ideology_match_name}</a></em></div>`  
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

const setSpinnerVisibilityTo = (state) => {
  document.getElementById('loading').style.visibility = state
}

mapboxgl.accessToken = 'pk.eyJ1Ijoid2lsbGNhcnRlciIsImEiOiJjamV4b2g3Z2ExOGF4MzFwN3R1dHJ3d2J4In0.Ti-hnuBH8W4bHn7k6GCpGw'

// get bounding box: http://bboxfinder.com
let mapBounds = [-21, -18.25, 21, 14]//Southwest corner, Northeast corner

let center = [(mapBounds[0] + mapBounds[2]) / 2, (mapBounds[1] + mapBounds[3]) / 2]

let map = new mapboxgl.Map({
  container: 'map-container',
  style: `mapbox://styles/willcarter/ckfps2kwa01u019pp7bel1a7w`,
  center: center,
  pitch: 0,
  attributionControl: false
})

let getColor = d3.scaleLinear().domain([0, 99]).range(["#ff0000", "#0015bc"])

let popup = new mapboxgl.Popup({
  offset: 0,
  closeButton: true,
  closeOnClick: false
})

map.fitBounds([
  [mapBounds[0], mapBounds[1]],
  [mapBounds[2], mapBounds[3]]
])

let navControl = new mapboxgl.NavigationControl()
let extrudeControl = new ExtrudeMapControl()
let fullscreenControl = new mapboxgl.FullscreenControl()
let resetControl = new ResetMapControl()
let rotateControl = new RotateMapControl()
let logoControl = new LogoControl()
let legendControl = new LegendMapControl()

map.addControl(navControl, 'top-left')
map.addControl(extrudeControl, 'top-right')
map.addControl(fullscreenControl, 'top-right')
map.addControl(resetControl, 'top-right')
map.addControl(rotateControl, 'top-right')
map.addControl(logoControl, 'bottom-left')
map.addControl(legendControl, 'bottom-right')

map.scrollZoom.disable()

map.on('click', (e) => {
  featureOfInterest = null
  popup.remove()
})

const rotatorMaker = () => {
  let rotating = false
  return {
    flip: () => {
      rotating = !rotating
    },
    value: () => {
      return rotating
    }
  }
}
let rotator = rotatorMaker()

const testResultMaker = () => {
  let tr
  return {
    value: async () => {
      tr = tr || await getJson(dataUrl)
      return tr
    }
  }
}
let getTestResults = testResultMaker()

map.on('moveend', () => {
  if (rotator.value() == true) rotateBy(map.getBearing())// if isRotating flag is true, keep the map rotating
  featureOfInterest ? showPopup(featureOfInterest) : popup.remove()
})

map.on('load', async () => {

  testResults = await getTestResults.value()
  countiesGeoJson = await getJson("mapData/albers/counties_albers.geojson")

  let testCountDisplay = document.getElementById('test-results-count')
  if(testCountDisplay) testCountDisplay.innerHTML = testResults.reduce((acc, obj) => { return acc + obj.tr_count }, 0)

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

  let matchedCounties = []

  for (county of countiesGeoJson.features) {
    
    let match = testResults.filter(testResult => {
      return testResult.geoid.toString() === county.properties.geoid.toString()
    })

    if (match.length > 0) {
      county.properties.height = match[0]["pct_height"]
      matchedCounties.push (county)
    }
  }

  countiesGeoJson.features = matchedCounties

  map.addSource('counties-geojson', {
    type: 'geojson',
    data: countiesGeoJson
  })

  map.addLayer({
    'id': 'county_extruded',
    'source': 'counties-geojson',
    'type': 'fill-extrusion',
    'paint': {
      'fill-extrusion-base': 0,
      'fill-extrusion-color': getCountyFillColors(countiesGeoJson.features, testResults),
      'fill-extrusion-height': [
        'interpolate', ['linear'],
        ['get', 'height'],
        0, 0,
        1, 1000000
       ],    
      'fill-extrusion-opacity': 0
    }
  })
  
  handlePopup()

  setSpinnerVisibilityTo('hidden')

})

window.addEventListener("resize", scaleMap)