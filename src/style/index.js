/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import { PRIMARY, SECONDARY, WHITE, BLACK, GRAY_MEDIUM, GRAY_DARK, GRAY_LIGHT } from './colors';
import { MARGIN_EXT_SMALL, MARGIN_SMALL, MARGIN_MEDIUM, MARGIN_LARGE, MARGIN_EXT_LARGE, PADDING_MEDIUM } from './spacing';
import { FONTSIZE_MEDIUM, FONTSIZE_16, FONTSIZE_18 } from './typography';

const styles = StyleSheet.create({
  homeImage: {
    width: 'auto',
    height: 300,
    resizeMode: 'stretch',
  },
  autocompleteContainer: {
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1,
  },
  autocompleteContainer2: {
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 48,
    zIndex: 1,
  },
  inputSelection: {
    flex: 1,
    marginLeft: PADDING_MEDIUM,
    marginRight: PADDING_MEDIUM,
    marginTop: PADDING_MEDIUM,
    height: 40,
    fontWeight: '700',
  },
  inputResult: {
    marginLeft: PADDING_MEDIUM,
    marginRight: PADDING_MEDIUM,
    marginTop: PADDING_MEDIUM,
    fontSize: FONTSIZE_18,
    fontWeight: '700',
  },
  inputDate: {
    marginLeft: PADDING_MEDIUM,
    marginRight: PADDING_MEDIUM,
    marginTop: PADDING_MEDIUM,
    color: BLACK,
    flex: 6,
    fontSize: FONTSIZE_16,
    fontWeight: '700',
  },
  inputLabel: {
    fontWeight: '500',
    color: GRAY_MEDIUM,
  },
  inputContainer: {
    flexDirection: 'row',
    borderBottomColor: GRAY_DARK,
    borderBottomWidth: 2,
  },
  stationInput: {
    marginTop: PADDING_MEDIUM,
    marginLeft: MARGIN_MEDIUM,
    height: 40,
    borderBottomColor: GRAY_MEDIUM,
    borderBottomWidth: 1,
  },
  buttonCenter: {
    marginTop: 16,
    marginLeft: 64,
    marginRight: 64,
  },
  sloganWhite: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: WHITE,
  },
  slogan: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: MARGIN_SMALL,
  },
  sloganText: {
    flex: 1,
    paddingTop: PADDING_MEDIUM,
    paddingRight: PADDING_MEDIUM,
    paddingBottom: PADDING_MEDIUM,
    paddingLeft: 0,
    backgroundColor: WHITE,
    color: GRAY_DARK,
    fontSize: FONTSIZE_MEDIUM,
  },
  connectionTime: {
    marginLeft: PADDING_MEDIUM,
    marginBottom: MARGIN_EXT_SMALL,
    fontSize: 16,
  },
  connectionInfo: {
    marginLeft: PADDING_MEDIUM,
    marginBottom: MARGIN_EXT_SMALL,
    color: GRAY_DARK,
  },
  sectionListContainer: {
    marginBottom: MARGIN_SMALL,
    marginLeft: PADDING_MEDIUM,
    marginRight: PADDING_MEDIUM,
    flex: 1,
  },
  iconContainer: {
    marginTop: MARGIN_MEDIUM,
    marginLeft: MARGIN_SMALL,
  },
});

export { styles };
