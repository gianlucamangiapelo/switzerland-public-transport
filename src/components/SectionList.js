/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';
import { View } from 'react-native';
import { styles } from '../style';
import { PRIMARY, SECONDARY } from '../style/colors';
import { store } from '../context/store';
import Timeline from 'react-native-timeline-flatlist';
import { formatAMPM } from '../utils';

const colorContainer = [SECONDARY, 'orange', PRIMARY, 'red', 'purple'];

const getJourneyDescription = (journey) => {
  if (!journey) {
    return 'by walk';
  }
  let description = '';
  const jourLenght = journey.passList.length - 1;
  journey.passList.forEach((element, index) => {
    //remove first and last
    if (index !== 0 && index !== jourLenght) {
      description = description + '\n' + element.station.name;
    }
  });

  return description;
};

const SectionList = () => {
  const globalState = useContext(store);
  const { travel } = globalState.state;

  const mapTravel = ((travel) => {

    const data = travel.sections.map((sec, index) => {
      let result = {};

      const time = new Date(sec.departure.departure);
      result.time = formatAMPM(time);
      result.title = sec.departure.station.name;
      result.description = getJourneyDescription(sec.journey);
      result.lineColor = colorContainer[index % 5];
      result.circleColor = colorContainer[index % 5];
      return result;
    });

    //get arrival station
    let result = {};
    const arr = travel.sections[travel.sections.length - 1];
    result.time = formatAMPM(new Date(arr.arrival.arrival));
    result.title = arr.arrival.station.name;

    data[data.length] = result;


    return data;
  })(travel);

  return (
    <View style={styles.sectionListContainer}>
      <Timeline
        data={mapTravel}
        innerCircle={'dot'}
        descriptionStyle={{ color: 'gray', marginTop: -4 }}
        titleStyle={{ marginTop: -12 }}
        timeContainerStyle={{ minWidth: 72 }}
      />
    </View>
  );
};

export default SectionList;
