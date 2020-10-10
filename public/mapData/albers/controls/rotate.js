class RotateMapControl {
  onAdd(map) {

    this.map = map

    this.container = document.createElement('div')
    this.container.classList.add('mapboxgl-ctrl')
    this.container.classList.add('mapboxgl-ctrl-group')

    this.button = document.createElement('button')
    this.button.classList.add('mapcontrol')
    this.button.setAttribute('id', 'rotate')
    this.button.setAttribute('title', 'Rotate map')

    this.img = document.createElement('img')
    this.img.setAttribute("src", "https://res.cloudinary.com/fergusdev/image/upload/v1602272942/political_fingerprint/rotate_oqfpub.png")
    this.button.appendChild(this.img)

    this.container.appendChild(this.button)

    this.button.addEventListener('click', () => {
      isRotating = !isRotating
      if (isRotating) {
        rotateBy(this.map.getBearing())
        this.img.setAttribute("src", "https://res.cloudinary.com/fergusdev/image/upload/v1602294005/political_fingerprint/rotate-stop_ijkqhm.png")
        this.button.setAttribute('title', 'Stop rotating')
      }
      else {
        this.img.setAttribute("src", "https://res.cloudinary.com/fergusdev/image/upload/v1602272942/political_fingerprint/rotate_oqfpub.png")
        this.button.setAttribute('title', 'Rotate map')
      }
    })

    return this.container
  }

  onRemove() {
    this.container.parentNode.removeChild(this.container)
    this.map = undefined
  }
}