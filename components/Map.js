import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useRef } from 'react';
import MapView, { Marker } from 'react-native-maps';
import tw from 'tailwind-react-native-classnames';
import { useSelector } from 'react-redux';
import { selectDestination, selectOrigin } from '../slices/navSlice';
import MapViewDirections from 'react-native-maps-directions';

import { GOOGLE_MAPS_APIKEY } from '@env';

const Map = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);

  const mapRef = useRef();

  useEffect(() => {
    //if (!origin || !destination) return;

    //zoom & fit to markers
    mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
    });
  }, [origin, destination]);

  return (
    <MapView
      ref={mapRef}
      style={tw`flex-1`}
      mapType="mutedStandard"
      initialRegion={{
        latitude: 23.7746479,
        longitude: 90.4031033,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
        // redux implementation
        // latitude: origin.location.lat,
        // longitude: origin.location.lat,
        // latitudeDelta: 0.005,
        // longitudeDelta: 0.005,
      }}
    >
      {/* redux implementation
      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeColor='black'
          strokeWidth={3}
        />
      )}
      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lat,
          }}
          title='Origin'
          description={origin.description}
          identifier='origin'
        />
      )}
      {destination?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lat,
          }}
          title='Destination'
          description={destination.description}
          identifier='destination'
        />
      )} */}
      <MapViewDirections
        origin={{
          latitude: 23.7746479,
          longitude: 90.4031033,
        }}
        destination={{
          latitude: 23.7846479,
          longitude: 90.4131033,
        }}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeColor="black"
        strokeWidth={3}
      />
      <Marker
        coordinate={{
          latitude: 23.7746479,
          longitude: 90.4031033,
        }}
        title="Origin"
        description={'this is the origin'}
        identifier="origin"
      />
      <Marker
        coordinate={{
          latitude: 23.7846479,
          longitude: 90.4131033,
        }}
        title="Destination"
        description={'this is the destination'}
        identifier="destination"
      />
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({});
