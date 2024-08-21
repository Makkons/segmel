const mapSelector = document.querySelector('#map');

functionMap();

function functionMap() {
    window.map = null;

    if (!mapSelector) {
        return;
    }

    initMap();

    async function initMap() {
        await ymaps3.ready;

        const {
            YMap,
            YMapDefaultSchemeLayer,
            YMapDefaultFeaturesLayer,
            YMapMarker,
        } = ymaps3;

        const CENTER_COORDINATES = [37.661752, 55.740066];
        const marker = mapSelector.querySelector('.map__marker');

        const map = new YMap(mapSelector,
            {
                location: {
                    center: CENTER_COORDINATES,
                    zoom: 10
                }
            },
            [
                new YMapDefaultSchemeLayer({}),
                new YMapDefaultFeaturesLayer({})
            ]
        );

        map.addChild(new YMapMarker({coordinates: CENTER_COORDINATES}, marker));
    }
}
