var config = {
    style: 'mapbox://styles/ancestrymapbox/ckikv9ge716o217qp6hc4spyc',
    accessToken: 'pk.eyJ1IjoiYW5jZXN0cnltYXBib3giLCJhIjoiNllqcGhKYyJ9.p9QKjx4kc2E_55jLTmDw0Q',
    showMarkers: true,
    markerColor: '#3FB1CE',
    theme: 'beige',
    use3dTerrain: true,
    title: 'From your DNA to Ancestry’s vast collections of records',
    subtitle: 'Confirm what we found in our records about you. Start with yourself and work your way back.',
    // byline: 'Ancestry Aha Experience',
    footer: 'Aha Hackathon Team',
    chapters: [
        {
            id: 'start-address',
            alignment: 'right',
            hidden: false,
            // title: 'Anne Selleck is from',
            image: './images/dna-result.png',
            // description: 'From your DNA, we think your ancestors were most likely from the countries above. Scroll down to continue your journey.',
            location: {
                center: { lon: 34.44201, lat: 55.01480 },
                zoom: 3.61,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '1st-address',
            alignment: 'right',
            hidden: false,
            // title: 'Were you married in New York?',
            image: './images/marriage.png',
            // description: 'We found an Anna Caitlyn Selleck who was married on 30 Sep 2012 in New York.',
            location: {
                center: { lon: -73.96273, lat: 40.77254 },
                zoom: 11.12,
                pitch: 42.50,
                bearing: -13.60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '2nd-address',
            alignment: 'right',
            hidden: false,
            // title: 'Is James William Murphy your husband?',
            image: './images/husband.png',
            // description: 'We found an Anna Caitlyn Selleck who was married on 30 Sep 2012 in New York.',
            location: {
                center: { lon: -73.96273, lat: 40.77254 },
                zoom: 11.12,
                pitch: 42.50,
                bearing: -13.60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: '3rd-address',
            alignment: 'right',
            hidden: false,
            // title: 'Were you also living in Half Moon Bay, California',
            image: './images/hmb.png',
            // description: 'We found records of potential residence in 447 Avenue Cabrillo, Half Moon Bay, California between 2008 and 2020',
            location: {
                center: { lon: -122.46418, lat: 37.50211 },
                zoom: 16.00,
                pitch: 46.50,
                bearing: -102.40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        
        {
            id: '4th-address',
            alignment: 'right',
            hidden: false,
            // title: 'Then San Francisco',
            image: './images/sf.png',
            // description: 'Looks like you then moved to 222 Eucalyptus Dr, San Francisco in 2015 for 3 years.',
            location: {
                center: { lon: -122.47541, lat: 37.73227 },
                zoom: 12.47,
                pitch: 21.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: '5th-address',
            alignment: 'right',
            hidden: false,
            // title: 'Did you move to Burlingame, California in 2015?',
            image: './images/bg.png',
            // description: 'From our records, we found that you might have lived at 1419 California Dr, Burlingame California between 2015 and 2018.',
            location: {
                center: { lon: -122.36875, lat: 37.55653 },
                zoom: 12.73,
                pitch: 48.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        
        {
            id: '6th-address',
            alignment: 'right',
            hidden: false,
            // title: 'Were you married in New York?',
            image: './images/father.png',
            // description: 'We found an Anna Caitlyn Selleck who was married on 30 Sep 2012 in New York.',
            location: {
                center: [-74.93756, 44.54078],
                zoom: 7.12,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'ending-address',
            alignment: 'right',
            hidden: false,
            // title: 'Congratulations!',
            image: './images/end.png',
            // description: 'Congratulations for confirming what you know, you were able to add X records and Y people to your tree. Continue adding and unlocking more about your family.',
            location: {
                center: { lon: -88.56765, lat: 39.57983 },
                zoom: 4.14,
                pitch: 33.00,
                bearing: -8.40
            },
            mapAnimation: 'flyTo',
            showMarkers: false,
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
