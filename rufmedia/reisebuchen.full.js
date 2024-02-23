let submitedData = {};
let textTranslations;
let map;
let orignAutocomplete;
let destinationAutocomplete;
let currentDevice;

// Initialize and display the map
function initMap() {
  // Set the default position for the map
  var defaultPosition = { lat: 47.34002, lng: 8.58162 };

  // Create the map object
  map = new google.maps.Map(document.getElementById('map'), {
    mapId: 'DEMO_MAP_ID', //ToDo: needs to be replaced in production
    zoom: 11,
    center: defaultPosition,
    disableDefaultUI: true, // Disable all default UI controls
    draggable: false, // Disable map dragging
    clickable: false, // Disable default cklick listener
  });

  // Create a new StyledMapType using custom styles
  const customMapType = new google.maps.StyledMapType(
    [
      // { elementType: "labels.icon", stylers: [{visibility: "off"}] },
      { elementType: 'geometry', stylers: [{ color: '#000000' }] }, //242f3e
      { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
      { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#ffffff' }],
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#d59563' }],
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{ color: '#263c3f' }],
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#6b9a76' }],
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{ color: '#38414e' }],
      },
      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#212a37' }],
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#9ca5b3' }],
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{ color: '#746855' }],
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#1f2835' }],
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#f3d19c' }],
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{ color: '#2f3948' }],
      },
      {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#ffffff' }],
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{ color: '#2270DE' }],
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#cae1ff' }],
      },
      {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{ color: '#1e90ff' }],
      },
    ],
    { name: 'Custom Map' }
  );

  // Set the map to use the custom map type
  map.mapTypes.set('custom_map', customMapType);
  map.setMapTypeId('custom_map');

  /////

  // setup adress autocomplete
  initAutocomplete();
}

function initAutocomplete() {
  // get fields
  const originElement = document.getElementsByName('origin')[0];
  const destinationElement = document.getElementsByName('destination')[0];

  // define autocomplete options
  const options = {
    componentRestrictions: {
      country: ['de', 'at', 'ch'],
    },
    //fields: ["address_components", "geometry", "icon", "name"],
    strictBounds: false,
  };

  orignAutocomplete = new google.maps.places.Autocomplete(
    originElement,
    options
  );
  destinationAutocomplete = new google.maps.places.Autocomplete(
    destinationElement,
    options
  );

  // Listen for place_changed event on originAutocomplete
  orignAutocomplete.addListener('place_changed', () => {
    const place = orignAutocomplete.getPlace();
    const isAirport = place.types.includes('airport');
    originElement.setAttribute('airport', isAirport);
  });

  // Listen for place_changed event on destinationAutocomplete
  destinationAutocomplete.addListener('place_changed', () => {
    const place = destinationAutocomplete.getPlace();
    const isAirport = place.types.includes('airport');
    destinationElement.setAttribute('airport', isAirport);
  });
}

// switch route/trip div
function switchTab(target) {
  const className = 'invisible';
  if (target == 'route') {
    document.getElementById('trip').classList.toggle(className);
  } else if (target == 'trip') {
    // show map on mobile after switch to trip
    if (currentDevice == 'Mobile') {
      document.getElementById('map').style.display = 'flex';
      document.getElementsByClassName('route-form-container')[0].style.height =
        '750px';
    } else if (currentDevice == 'Tablet') {
      document.getElementById('map').style.display = 'flex';
      document.getElementsByClassName('route-form-container')[0].style.height =
        '700px';
    } else {
      // Desktop
    }

    document.getElementById('route').classList.toggle(className);
  } else {
    document.getElementById('trip').classList.add(className);
    document.getElementById('route').classList.add(className);
  }
  document.getElementById(target).classList.toggle(className);
}

function initForm() {
  // Get the form element
  var routeForm = document.getElementById('route-form');

  // Attach submit event listener for route form
  routeForm.addEventListener('submit', function (event) {
    // Prevent the default form submission
    event.preventDefault();

    // call validation
    if (validateRouteForm()) {
      let airport = 'false';
      if (
        routeForm.elements['origin'].getAttribute('airport') == 'true' ||
        routeForm.elements['destination'].getAttribute('airport') == 'true'
      ) {
        airport = 'true';
      }

      // create a JavaScript object with user input data
      const userInputData = {
        dataSource: 'route',
        type: routeForm.elements['type'].value,
        origin: routeForm.elements['origin'].value,
        destination: routeForm.elements['destination'].value,
        airport: airport,
        flightNumber: routeForm.elements['flightNumber'].value,
        returnDrive: routeForm.elements['return-drive'].value,
        hours: routeForm.elements['hours-select'].value,
        car: routeForm.elements['cars'].value,
      };

      // save route data for later
      submitedData.route = userInputData;

      // Convert the object to a JSON string
      const jsonData = JSON.stringify(userInputData);

      // Send the JSON string to the parent window (Wix page)
      window.parent.postMessage(jsonData, '*');

      // show loading spinner
      document.getElementById('loading').style.display = 'block';
    }
  });

  var typeRow = document.getElementById('type-row');
  // Attach click event listener
  typeRow.addEventListener('click', typeHandler);

  // Get the form element
  var tripForm = document.getElementById('trip-form');

  // Attach submit event listener for route form
  tripForm.addEventListener('submit', function (event) {
    // Prevent the default form submission
    event.preventDefault();

    if (validateTripForm()) {
      // create a JavaScript object with user input data
      const userInputData = {
        dataSource: 'trip',
        name: tripForm.elements['name'].value,
        email: tripForm.elements['email'].value,
        phone: tripForm.elements['phone'].value,
        baggageCount: tripForm.elements['baggageCount'].value,
        personCount: tripForm.elements['personCount'].value,
        childCount: tripForm.elements['childCount'].value,
        date: tripForm.elements['date'].value,
        pickupTime: tripForm.elements['pickupTime'].value,
        comment: tripForm.elements['comment'].value,
      };

      // save route data for later
      submitedData.trip = userInputData;
      submitedData.dataSource = 'trip';

      // Convert the object to a JSON string
      const jsonData = JSON.stringify(submitedData);

      // Send the JSON string to the parent window (Wix page)
      window.parent.postMessage(jsonData, '*');

      // show loading spinner
      document.getElementById('loading').style.display = 'block';
    }
  });

  // reload page on button click
  document.getElementById('reload').addEventListener('click', function (event) {
    location.reload();
    const jsonData = JSON.stringify({ dataSource: 'config' });
    // Send the JSON string to the parent window (Wix page)
    window.parent.postMessage(jsonData, '*');
    return false;
  });

  // receive calculated distance, duracation and polylines
  window.addEventListener('message', async event => {
    // Parse the received JSON string into a JavaScript object
    const { dataSource } = JSON.parse(event.data);

    if (dataSource == 'config') {
      const {
        dataSource,
        language,
        device,
        translations,
        cars,
        maxHours,
        kilometerPerHour,
      } = JSON.parse(event.data);

      currentDevice = device;

      handleTranslation(language, translations);

      // handle cars - add options for select
      const carsSelect = document.getElementById('cars');
      if (carsSelect.childElementCount == 1) {
        cars.forEach(car => {
          let optionElement = document.createElement('option');
          optionElement.value = car.NAME;
          optionElement.textContent = car.NAME;
          optionElement.setAttribute('maxPerson', car.MAX_PERSON);
          optionElement.setAttribute('maxBaggage', car.MAX_BAGGAGE);
          carsSelect.appendChild(optionElement);
        });

        carsSelect.addEventListener('change', carsSelectChange);
      }

      // create hour select for per hour type
      createHoursSelect(maxHours, kilometerPerHour);
    } else if (dataSource == 'route') {
      const {
        distance,
        duration,
        startLocation,
        endLocation,
        polylines,
        bounds,
        price,
      } = JSON.parse(event.data);

      // save calculation data for later
      submitedData.distance = distance;
      submitedData.duration = duration;
      submitedData.price = price;
      submitedData.polylines = polylines;
      submitedData.bounds = bounds;

      // set trip form data
      document.getElementById('distance').innerHTML =
        textTranslations.TABS.TRIP.DISTANCE + ': <br>' + distance + ' Km';
      document.getElementById('duration').innerHTML =
        textTranslations.TABS.TRIP.DURATION + ': <br>' + duration;
      document.getElementById('price').innerHTML =
        textTranslations.TABS.TRIP.PRICE + ': <br>' + price + ' CHF';

      if (polylines != '') {
        const decodedPath = google.maps.geometry.encoding.decodePath(polylines);

        // Add markers to the map
        var startMarker = new google.maps.Marker({
          position: startLocation,
          map: map,
          title: routeForm.elements['origin'].value,
        });

        const { PinView, AdvancedMarkerView } = await google.maps.importLibrary(
          'marker'
        );

        // change color of pin marker to white
        const pinViewBackground = new PinView({
          background: '#ffffff',
        });
        var endMarker = new AdvancedMarkerView({
          map: map,
          position: endLocation,
          content: pinViewBackground.element,
          title: routeForm.elements['destination'].value,
        });

        // create a polyline object with decoded coordinates
        const polyline = new google.maps.Polyline({
          path: decodedPath,
          strokeColor: '#FF0004',
          strokeWeight: 3,
          strokeOpacity: 0.7,
        });

        // add the polyline to the map
        polyline.setMap(map);

        // Fit the map bounds to show all markers and polyline
        var latLngBounds = new google.maps.LatLngBounds();
        latLngBounds.extend(startLocation);
        latLngBounds.extend(endLocation);
        map.fitBounds(latLngBounds);
      }

      // hide loading animation
      document.getElementById('loading').style.display = 'none';

      // switch tap to trip
      switchTab('trip');
    } else {
      // will be triggerd if email has been send
      const { dataSource, status, price, route, trip } = JSON.parse(event.data);

      if (status) {
        document.getElementById('booking-class').innerHTML =
          textTranslations.TABS.REQUEST.BOOKING_CLASS + ': ' + route.car;
        document.getElementById('dateTime').innerHTML =
          textTranslations.TABS.TRIP.DATE +
          ': ' +
          trip.date +
          ' / ' +
          textTranslations.TABS.TRIP.TIME +
          ': ' +
          trip.pickupTime;
        document.getElementById('originDestination').innerHTML =
          textTranslations.TABS.ROUTE.ORIGIN +
          ': ' +
          route.origin +
          ' / ' +
          textTranslations.TABS.ROUTE.DESTINATION +
          ': ' +
          route.destination;
        document.getElementById('totalPrice').innerHTML =
          textTranslations.TABS.TRIP.PRICE + ': ' + price + ' CHF';
        document.getElementById('counts').innerHTML =
          textTranslations.TABS.TRIP.PERSONS +
          ': ' +
          trip.personCount +
          ' / ' +
          textTranslations.TABS.TRIP.CHILDREN +
          ': ' +
          trip.childCount +
          ' / ' +
          textTranslations.TABS.TRIP.BAGGAGE +
          ': ' +
          trip.baggageCount;
        document.getElementById('request-comment').innerHTML =
          textTranslations.TABS.TRIP.COMMENT + ': ' + trip.comment;
      } else {
        // display error in innerHTML
        document.getElementById('request').innerHTML =
          '<h2>' +
          textTranslations.ERRORS.UNKNOWN.SOMETHING_WENT_WRONG +
          '</h2><p>' +
          textTranslations.ERRORS.UNKNOWN.REQUEST_COULD_NOT_SUBMITED +
          '</p><p>' +
          textTranslations.ERRORS.UNKNOWN.PLEASE_CONTACT_US +
          '</p>';
      }

      // hide loading animation
      document.getElementById('loading').style.display = 'none';

      // switch tap to request
      switchTab('request');
    }
  });
}

function carsSelectChange() {
  const carsSelect = document.getElementById('cars');
  const baggageCountSelect = document.getElementById('baggageCount');
  const personCountSelect = document.getElementById('personCount');
  const childCountSelect = document.getElementById('childCount');

  // get values from car
  const maxPersonCount = parseInt(
    carsSelect.options[carsSelect.selectedIndex].getAttribute('maxPerson')
  );
  const maxBaggageCount = parseInt(
    carsSelect.options[carsSelect.selectedIndex].getAttribute('maxBaggage')
  );

  if (baggageCountSelect.childElementCount <= 1) {
    for (
      let baggageIndex = 0;
      baggageIndex <= maxBaggageCount;
      baggageIndex++
    ) {
      let optionElement = document.createElement('option');
      optionElement.value = baggageIndex;
      optionElement.textContent = baggageIndex;
      baggageCountSelect.appendChild(optionElement);
    }
  }

  if (childCountSelect.childElementCount <= 1) {
    for (let personIndex = 0; personIndex <= maxPersonCount; personIndex++) {
      // add options for person count select
      let optionElement = document.createElement('option');
      optionElement.value = personIndex;
      optionElement.textContent =
        textTranslations.TABS.TRIP.PERSONS + ' ' + personIndex;
      personCountSelect.appendChild(optionElement);

      // add options for child count select
      let optionElementChild = document.createElement('option');
      optionElementChild.value = personIndex;
      optionElementChild.textContent =
        textTranslations.TABS.TRIP.CHILDREN + ' ' + personIndex;
      childCountSelect.appendChild(optionElementChild);
    }
  }
}

function handleTranslation(language, translations) {
  textTranslations = translations;

  // route
  document.getElementById('route-headline').innerHTML =
    translations.TABS.ROUTE.HEADLINE;
  document.getElementById('transfer-ride').value =
    translations.TABS.ROUTE.TYPE_ROW.TRANSFER_RIDE;
  document.getElementById('per-hour').value =
    translations.TABS.ROUTE.TYPE_ROW.PER_HOUR;
  document.getElementsByName('origin')[0].placeholder =
    translations.TABS.ROUTE.ORIGIN;
  document.getElementsByName('destination')[0].placeholder =
    translations.TABS.ROUTE.DESTINATION;
  document.getElementsByName('flightNumber')[0].placeholder =
    translations.TABS.ROUTE.FLIGHT_NUMBER;
  document.getElementById('return-drive-label').innerHTML =
    translations.TABS.ROUTE.RETURN_DRIVE_SELECT.LABEL + ':';
  document.getElementById('hours-select-label').innerHTML =
    translations.TABS.ROUTE.HOURS_SELECT.LABEL + ':';
  document.getElementById('cars-label').innerHTML =
    translations.TABS.ROUTE.CARS.LABEL + ':';
  document.getElementById('one-way').innerHTML =
    translations.TABS.ROUTE.RETURN_DRIVE_SELECT.ONE_WAY;
  document.getElementById('round-trip').innerHTML =
    translations.TABS.ROUTE.RETURN_DRIVE_SELECT.ROUND_TRIP;
  document.getElementById('please-select').innerHTML =
    translations.TABS.ROUTE.CARS.PLEASE_SELECT;
  document.getElementById('route-submit').value =
    translations.TABS.ROUTE.SUBMIT_BUTTON;

  // trip
  document.getElementById('trip-headline').innerHTML =
    translations.TABS.TRIP.HEADLINE;
  document.getElementsByName('name')[0].placeholder =
    translations.TABS.TRIP.NAME;
  document.getElementsByName('email')[0].placeholder =
    translations.TABS.TRIP.EMAIL;
  document.getElementsByName('phone')[0].placeholder =
    translations.TABS.TRIP.PHONE;
  document.getElementById('baggage').innerHTML = translations.TABS.TRIP.BAGGAGE;
  // document.getElementById("persons").innerHTML = translations.TABS.TRIP.PERSONS;
  // document.getElementById("children").innerHTML = translations.TABS.TRIP.CHILDREN;
  document.getElementsByName('date')[0].placeholder =
    translations.TABS.TRIP.DATE;
  document.getElementsByName('pickupTime')[0].placeholder =
    translations.TABS.TRIP.TIME;
  document.getElementById('maxPersonError').innerHTML =
    translations.ERRORS.VEHICLE_CAPACITY;
  document.getElementById('dateTimeError').innerHTML =
    translations.ERRORS.BOOKING_DATETIME;
  document.getElementsByName('comment')[0].placeholder =
    translations.TABS.TRIP.COMMENT;
  document.getElementById('trip-submit').value =
    translations.TABS.TRIP.SUBMIT_BUTTON;

  // request
  document.getElementById('request-headline').innerHTML =
    translations.TABS.REQUEST.HEADLINE;
  document.getElementById('your-request').innerHTML =
    translations.TABS.REQUEST.YOUR_BOOKING_REQUEST + ':';
  document.getElementById('request-message').innerHTML =
    translations.TABS.REQUEST.WE_WILL_CONTACT_YOU;
  document.getElementById('reload').value =
    translations.TABS.REQUEST.SUBMIT_BUTTON;

  // google apis
  map.setOptions({ language: language });
  orignAutocomplete.setOptions({ language: language });
  destinationAutocomplete.setOptions({ language: language });
}

function validateRouteForm() {
  // add custom validation here
  return true;
}

function validateTripForm() {
  // hide error
  document.getElementById('dateTimeError').style.display = 'none';
  document.getElementById('maxPersonError').style.display = 'none';

  // get the form elements
  var routeForm = document.getElementById('route-form');
  var tripForm = document.getElementById('trip-form');

  const date = tripForm.elements['date'].value;
  const pickupTime = tripForm.elements['pickupTime'].value;
  const personCount = tripForm.elements['personCount'].value;
  const childCount = tripForm.elements['childCount'].value;
  const count = parseInt(personCount) + parseInt(childCount);

  const carsSelect = routeForm.elements['cars'];
  const maxPersonCount = parseInt(
    carsSelect.options[carsSelect.selectedIndex].getAttribute('maxPerson')
  );

  // create datetime object from input
  const enteredDatetime = new Date(date + ' ' + pickupTime);

  // remove 12 hours to the entered datetime
  enteredDatetime.setHours(enteredDatetime.getHours() - 12);

  // check if entered datetime is valid
  const dateTimeIsValid = enteredDatetime > new Date();

  // display error if needed
  if (dateTimeIsValid == false) {
    document.getElementById('dateTimeError').style.display = 'block';
  }

  // check if count is valid for selected car
  const countIsValid = parseInt(count) <= parseInt(maxPersonCount);

  if (countIsValid == false) {
    document.getElementById('maxPersonError').style.display = 'block';
  }

  return dateTimeIsValid && countIsValid;
}

function typeHandler(event) {
  var clickedButton = event.target;
  if (!clickedButton.matches('input')) {
    return; // Do nothing if the click was not on an input element
  }

  // Remove the "selected" class from all buttons
  var buttons = document
    .getElementById('type-row')
    .getElementsByTagName('input');
  for (const element of buttons) {
    element.classList.remove('selected');
  }
  // Add the "selected" class to the clicked button
  clickedButton.classList.add('selected');

  // save value to hidden input field
  //document.getElementById("route-form").elements["type"].value = clickedButton.value.toLowerCase().replace(/\s/g, "_")

  const selectedTypeId = event.target.id;
  document.getElementById('route-form').elements['type'].value = selectedTypeId;

  if (selectedTypeId == 'transfer-ride') {
    document.getElementsByName('destination')[0].style.display = 'flex';
    // add required attribute
    document.getElementsByName('destination')[0].setAttribute('required', '');

    document.getElementsByName('flightNumber')[0].style.display = 'flex';
    document.getElementById('return-drive').style.display = 'flex';
    document.getElementById('return-drive-label').style.display = 'flex';
    document.getElementById('hours-select').style.display = 'none';
    document.getElementById('hours-select-label').style.display = 'none';

    document.getElementById('distance').style.display = 'flex';
    document.getElementById('duration').style.display = 'flex';
  } else {
    document.getElementsByName('destination')[0].style.display = 'none';
    // remove required attribute
    document.getElementsByName('destination')[0].removeAttribute('required');

    document.getElementsByName('flightNumber')[0].style.display = 'none';
    document.getElementById('return-drive').style.display = 'none';
    document.getElementById('return-drive-label').style.display = 'none';
    document.getElementById('hours-select').style.display = 'flex';
    document.getElementById('hours-select-label').style.display = 'flex';

    document.getElementById('distance').style.display = 'none';
    document.getElementById('duration').style.display = 'none';
  }
}

function createHoursSelect(maxOptionsCount, kilometerPerHour) {
  const selectElement = document.getElementById('hours-select');

  // avoid dupplicate options
  if (selectElement.childElementCount > 1) {
    return;
  }

  // hide select by default
  selectElement.style.display = 'none';

  for (let index = 1; index <= maxOptionsCount; index++) {
    let optionElement = document.createElement('option');
    optionElement.value = index;
    optionElement.textContent =
      index +
      ' (' +
      textTranslations.TABS.ROUTE.HOURS_SELECT.INCLUSIVE +
      index * kilometerPerHour +
      'Km)';
    selectElement.appendChild(optionElement);
  }
}

initForm();
