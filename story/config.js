// eslint-disable-next-line
var config = {
  style: 'mapbox://styles/architecturesarasota1/cmc50k1gj009601skhpdkeqbb',
  accessToken:
    'pk.eyJ1IjoiYXJjaGl0ZWN0dXJlc2FyYXNvdGExIiwiYSI6ImNtYnpkN2V4MDFqdHYyd3F1d3oyM2M1a2sifQ.SQd1SUTfTCdWm8ea66NAfg',
  showMarkers: false,
  theme: 'dark',
  alignment: 'left',
  title: '',
  subtitle: '',
  footer:
    'Sources: U.S. Census Bureau, American Community Survey, Max Planck Institute for Ornithology, USDA National Agricultural Statistics Service',
  chapters: [
    {
      id: 'county-circles-1',
      title: '',
      image:
        'https://dl.dropboxusercontent.com/scl/fi/po2ygvoiypf3l31b068iy/Architecture_Sarasota_Special_Use_Logo_Black.png?rlkey=wd60w6bay0wrjm7vcbqdat2gu&st=x4efqi2j&dl=0',
      description:
        '',
      location: {
        center: [-82.573102, 27.313406],
        zoom: 10.94,
        pitch: 0.0,
        bearing: 0.0
      },
      onChapterEnter: [
        // {
        //   layer: "county-pop-centroid",
        //   opacity: 0.5
        // }
      ],
      onChapterExit: [
        // {
        //   layer: "county-pop-centroid",
        //   opacity: 0
        // }
      ]
    },
    {
      id: 'county-circles-2',
      title: 'Control the map',
      image: '',
      description:
        'Zoom, pan, tilt, and rotate the map to higlight the geographic area related to this part of your story.',
      location: {
        center: [-82.547441, 27.304290],
        zoom: 12.45,
        pitch: 0,
        bearing: 0.0
      },
      onChapterEnter: [
        {
          layer: 'county-pop-centroid',
          opacity: 0.5
        }
      ],
      onChapterExit: [
        {
          layer: 'county-pop-centroid',
          opacity: 0
        }
      ]
    },
    {
      id: 'county-polys-1',
      title: 'Change the layers',
      image: '',
      description:
        'If you have set up custom map data in Mapbox Studio, there are also settings to control which map layers to show and hide.',
      location: {
        center: [-80.70604, 36.22582],
        zoom: 5.7,
        pitch: 60.0,
        bearing: 0.0
      },
      onChapterEnter: [
        {
          layer: 'county-pop-polygon',
          opacity: 0.5
        }
      ],
      onChapterExit: [
        {
          layer: 'county-pop-polygon',
          opacity: 0
        }
      ]
    },
    {
      id: 'freedom-1',
      title: 'Layer support',
      image: '',
      description:
        'This template supports circle, line, fill, symbol, fill-extrusion, and raster layers.',
      location: {
        center: [-81.38123, 35.85894],
        zoom: 7.51,
        pitch: 60.0,
        bearing: 38.4
      },
      onChapterEnter: [
        {
          layer: 'freedom-line',
          opacity: 0.3
        }
      ],
      onChapterExit: [
        {
          layer: 'freedom-line',
          opacity: 0
        }
      ]
    },
    {
      id: 'raster-1',
      title: 'Your data and Mapbox data',
      image: '',
      description:
        'You can control any data in your Studio style, including base map layers. Shown in green are national park areas.',
      location: {
        center: [-107.061, 38.39659],
        zoom: 7,
        pitch: 60.0,
        bearing: 0
      },
      onChapterEnter: [
        {
          layer: 'national-park',
          opacity: 0.5
        }
      ],
      onChapterExit: [
        {
          layer: 'national-park',
          opacity: 0
        }
      ]
    },
    {
      id: 'raster-2',
      title: "Guide your reader's eye",
      image: '',
      description:
        'We also built a page to help find location coordinates and set up the best "camera angle" to showcase a location. Find the helper at <a href=\'https://demos.mapbox.com/location-helper/\'>https://demos.mapbox.com/location-helper/</a>.',
      location: {
        center: [-119.55048, 36.03344],
        zoom: 11.1,
        pitch: 55.5,
        bearing: -115.2
      },
      onChapterEnter: [
        {
          layer: 'cdl-2018',
          opacity: 0.5
        }
      ],
      onChapterExit: [
        {
          layer: 'cdl-2018',
          opacity: 0
        }
      ]
    },
    {
      id: 'wrap-up',
      title: '',
      image: '',
      description:
        "The hard part still may be coming up with a story, but now it's a little easier to tell. Built with Mapbox GL JS, Scrollama.js, and JavaScript. Clone the template and find documentation at <a href='https://github.com/mapbox/storytelling/'>https://github.com/mapbox/storytelling</a>",
      location: {
        center: [-97.061, 38.39659],
        zoom: 3.3,
        pitch: 0.0,
        bearing: 0.0
      },
      onChapterEnter: [
        {
          layer: 'county-pop-centroid',
          opacity: 0.5
        }
      ],
      onChapterExit: [
        {
          layer: 'county-pop-centroid',
          opacity: 0
        }
      ]
    }
  ]
}
