class LegendMapControl {
    onAdd(map) {
  
      this.map = map
  
      
      this.container = document.createElement('div')
      this.container.classList.add('legend-wrapper')
    
      this.img = document.createElement('img')
      this.img.classList.add('legend')
      this.img.setAttribute("src", "https://res.cloudinary.com/fergusdev/image/upload/v1603731430/politipoint/legend/legend2_xf7pqa.png")
      this.container.appendChild(this.img)

      this.desc = document.createElement('div')
      this.desc.classList.add('legend-description')
      this.desc.innerHTML = "There are <span id='test-results-count'></span> total test results. <span id='county-3d-desc'>County height indicates number of test results for that county.</span>"
      this.container.appendChild(this.desc)
  
      return this.container
    }
  
    onRemove() {
      this.container.parentNode.removeChild(this.container)
      this.map = undefined
    }
  }