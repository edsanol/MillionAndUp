import {StyleSheet} from 'react-native';

const homeStyles = StyleSheet.create({
  flexContainer: {
    flex: 1,
  },
  mainCardContainer: {
    width: '100%',
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
  titleText: {
    color: '#000',
    fontSize: 20,
    fontWeight: '700',
  },
  textInputStyle: {
    width: '90%',
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 5,
  },
  listContainer: {
    backgroundColor: '#fff',
    flex: 1,
  },
  cardsContainer: {
    flexDirection: 'row',
    padding: 20,
    marginBottom: 20,
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
  cardImage: {
    width: 70,
    height: 70,
    borderRadius: 70,
    marginRight: 20,
  },
  cardTextTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
  },
  cardTextPrice: {
    fontSize: 18,
    opacity: 0.8,
    color: '#000',
    fontWeight: '500',
  },
  cardTextSymbol: {
    fontSize: 14,
    opacity: 0.9,
    color: '#5917D7',
  },
});

export default homeStyles;
