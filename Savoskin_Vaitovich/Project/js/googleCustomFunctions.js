export function InitMap() {
    let hospitalsCoordinates = {
        1: new google.maps.LatLng(49.843695, 24.010522),
        2: new google.maps.LatLng(49.841436, 24.018034),
        3: new google.maps.LatLng(49.836523, 24.047091),
        4: new google.maps.LatLng(49.839622, 24.042882)
    };
    let directionsService = new google.maps.DirectionsService;
    let directionsDisplay = new google.maps.DirectionsRenderer;

    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: {lat: 49.840401, lng: 24.028258}
    });
    directionsDisplay.setMap(map);
    directionsDisplay.setOptions({ suppressMarkers: true });

    let options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };
    let obj = {"lat": null, "lng": null};
    const assignValues = (position, obj) => {obj.lat = position.coords.latitude; obj.lng = position.coords.longitude};

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            assignValues(position, obj);
            markersCreator(obj, directionsService, directionsDisplay, map, hospitalsCoordinates);
        },function (failure) {
            console.log("Couldn't get your location" + failure);
        }, options);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}


export function markersCreator(currentCoordinates, directionsService, directionsDisplay, map, hospitalsCoordinates) {
    let markerArray = [], distancesArray = [];
    for (let i = 1; i < 5; ++i) {
        let marker = new google.maps.Marker({
            'position': hospitalsCoordinates[i],
            'map': map,
        });
        google.maps.event.addListener(marker,"click",function () {
            changeCertificate(i);
            calculateAndDisplayRoute(currentCoordinates, directionsService, directionsDisplay, map, hospitalsCoordinates[i]);
        });
        distancesArray.push(distance(currentCoordinates, {"lat":hospitalsCoordinates[i].lat(), "lng":hospitalsCoordinates[i].lng()}));
        markerArray.push(marker);
    }
    let smallest_dist_inx = distancesArray.indexOf(Math.max(...distancesArray));
    changeCertificate(smallest_dist_inx);
    calculateAndDisplayRoute(currentCoordinates, directionsService, directionsDisplay, map,
        hospitalsCoordinates[smallest_dist_inx]);
    return markerArray;
}

export function calculateAndDisplayRoute(currentCoordinates, directionsService, directionsDisplay, map, hospitalCoordinates) {
    let currentPosition = new google.maps.Marker({
        'position': currentCoordinates,
        'map': map,
    });

    directionsService.route({
        origin: currentPosition.getPosition(),
        destination: hospitalCoordinates,
        travelMode: 'DRIVING'
    }, function (response, status) {
        if (status === 'OK') {
            directionsDisplay.setDirections(response);
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
}

export function distance(coordinates1, coordinates2) {
    return Math.sqrt(Math.pow(coordinates1.lat - coordinates2.lat,2) + Math.pow(coordinates1.lng - coordinates2.lng,2) )
}

export function changeCertificate(i) {
    let img_handler = document.getElementById("certificates_img");
    if (i){
        img_handler.src = "../img/certificat"+i+".jpg";
        img_handler.style.display = "block";
    }else{
        img_handler.style.display = "None";
    }
}