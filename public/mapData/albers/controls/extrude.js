class ExtrudeMapControl {
  onAdd(map) {

    this.map = map

    this.container = document.createElement('div')
    this.container.classList.add('mapboxgl-ctrl')
    this.container.classList.add('mapboxgl-ctrl-group')

    this.button = document.createElement('button')
    this.button.classList.add('mapcontrol')
    this.button.setAttribute("id", "threedee")
    this.button.setAttribute("title", 'Extrude Map')

    this.img = document.createElement('img')
    this.img.setAttribute("src", "https://res.cloudinary.com/fergusdev/image/upload/v1602272943/political_fingerprint/threedee_fdw66a.png")
    
    this.button.appendChild(this.img)

    this.container.appendChild(this.button)

    this.button.addEventListener('click', () => {
      if (this.map.getPitch() === 0) {
        this.img.setAttribute("src", "https://res.cloudinary.com/fergusdev/image/upload/v1602294005/political_fingerprint/threedee-off_fbeuan.png")
        this.button.setAttribute("title", 'Flatten Map')
        this.map.setPaintProperty('county_extruded', 'fill-extrusion-opacity', .8)
        this.map.easeTo({ pitch: 30 })
      } else {
        this.img.setAttribute("src", "https://res.cloudinary.com/fergusdev/image/upload/v1602272943/political_fingerprint/threedee_fdw66a.png")
        this.button.setAttribute("title", 'Extrude Map')
        this.map.setPaintProperty('county_extruded', 'fill-extrusion-opacity', 0)
        this.map.easeTo({ pitch: 0 })
      }
    })

    return this.container
  }

  onRemove() {
    this.container.parentNode.removeChild(this.container)
    this.map = undefined
  }
}