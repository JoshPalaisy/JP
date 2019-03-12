import React from 'react'
import Particles from 'react-particles-js'
import '../styles/animBg.css'

const AnimBg = props => {

  function getWidth() {
    setInterval(() => {
      let w = window.innerWidth
      // console.log('width: ' + w)
      return w
    }, 1000)
  }


  function getHeight() {
    setInterval(() => {
      let h = window.innerHeight
      // console.log('height: ' + h)
      return h
    }, 1000)
  }

  const width = getWidth()
  const height = getHeight()


  return (
    <Particles
      params={{
        "particles": {
          "number": {
            "value": 250,
            "density": {
              "enable": true,
              "value_area": 1500
            }
          },
          "line_linked": {
            "enable": true,
            "opacity": 0.03
          },
          "move": {
            "direction": "right",
            "speed": 0.5
          },
          "size": {
            "value": 1.25,
            "random": true,
            "anim": {
              "speed": 4,
              "size_min": 0.3
            }
          },
          "opacity": {
            "anim": {
              "enable": true,
              "speed": 1,
              "opacity_min": 0.05
            }
          }
        },
        "interactivity": {
          "events": {
            "onclick": {
              "enable": true,
              "mode": "push"
            }
          },
          "modes": {
            "push": {
              "particles_nb": 1
            }
          }
        },
        "retina_detect": true
      }}
      className="animBg"
      width={width}
      height={height}
    />
  )

}

export default AnimBg