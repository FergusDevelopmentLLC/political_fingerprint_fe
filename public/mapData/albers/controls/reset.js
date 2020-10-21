class ResetMapControl {
  onAdd(map) {

    this.map = map

    this.container = document.createElement('div')
    this.container.classList.add('mapboxgl-ctrl')
    this.container.classList.add('mapboxgl-ctrl-group')

    this.button = document.createElement('button')
    this.button.classList.add('mapcontrol')
    this.button.setAttribute('id', 'reset')
    this.button.setAttribute('title', 'Reset map')

    this.img = document.createElement('img')
    this.img.setAttribute("src", "https://res.cloudinary.com/fergusdev/image/upload/v1602294032/political_fingerprint/reset_1_attqkt.png")
    this.button.appendChild(this.img)

    this.container.appendChild(this.button)

    this.button.addEventListener('click', () => {

      popup.remove()

      isRotating = false

      let threedeeButton = document.getElementById('threedee')
      threedeeButton.setAttribute("title", 'Extrude Map')
      let threedeeButtonImage = threedeeButton.getElementsByTagName('img')[0]
      threedeeButtonImage.setAttribute("src", "https://res.cloudinary.com/fergusdev/image/upload/v1602272943/political_fingerprint/threedee_fdw66a.png")

      let rotateButton = document.getElementById('rotate')
      rotateButton.setAttribute("title", 'Rotate Map')
      let rotateButtonImage = rotateButton.getElementsByTagName('img')[0]
      rotateButtonImage.setAttribute("src", "https://res.cloudinary.com/fergusdev/image/upload/v1602272942/political_fingerprint/rotate_oqfpub.png")

      this.map.setPaintProperty('county_extruded', 'fill-extrusion-opacity', 0)
      this.map.setPitch(0)
      this.map.setBearing(0)
      this.map.fitBounds([
        [mapBounds[0], mapBounds[1]],
        [mapBounds[2], mapBounds[3]]
      ])
    })

    return this.container
  }

  onRemove() {
    this.container.parentNode.removeChild(this.container)
    this.map = undefined
  }
}