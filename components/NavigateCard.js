import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import { GOOGLE_MAPS_APIKEY } from '@env';
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Good Morning, Sajid</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
          {/* <GooglePlacesAutocomplete
            placeholder='Where to?'
            debounce={400}
            fetchDetails={true}
            enablePoweredByContainer={false}
            query={{
                key: GOOGLE_MAPS_APIKEY,
                language: 'en'
            }}
            nearbyPlacesAPI='GooglePLacesSearch'
            returnKyeType={"search"}
            maxLength = {2}
            onPress={(data, details = null)=> {
                dispatch(setDestination({
                    location: details.geometry.location,
                    description: data.description
                }))
                navigation.navigate("RideOptionsCard")
            }}
            /> */}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('RideOptionsCard');
            }}
          >
            <Text>sdafdasd</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

const styles = StyleSheet.create({});
