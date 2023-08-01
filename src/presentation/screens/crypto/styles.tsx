import {StyleSheet} from 'react-native';

const cryptoStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 18,
    backgroundColor: '#fff',
  },
  separator: {
    height: 60,
  },
  circleCard: {
    width: 300,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 150,
    borderWidth: 8,
    borderColor: '#1D006B',
    alignSelf: 'center',
  },
  imageContainer: {
    height: 90,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  cryptoNameText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    paddingLeft: 8,
  },
  cryptoSymbolText: {
    fontSize: 22,
    color: '#000',
    paddingLeft: 12,
    fontWeight: '600',
  },
  priceCard: {
    width: '100%',
    height: 108,
    marginTop: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.4,
    shadowRadius: 20,
    elevation: 10,
  },
  priceText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#000',
  },
  percentsContainer: {
    height: '100%',
    justifyContent: 'center',
  },
  percentText: {
    fontSize: 16,
    fontWeight: '500',
    paddingBottom: 4,
  },
});

export default cryptoStyles;
