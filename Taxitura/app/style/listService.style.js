import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  enter: {
    flex: 1,
    flexDirection: 'column'
  },
  title: {
    height: 40,
    backgroundColor: 'rgba(26, 26, 26, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  titleText: {
    color: 'rgb(255, 255, 255)',
    fontSize: 15,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  list: {
    marginBottom: 25
  },
  loading: {
    position: 'absolute',
    right: 0,
    marginRight: 5
  },
  over: {
    position: 'absolute',
    zIndex: 1,
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.19)'
  }
})