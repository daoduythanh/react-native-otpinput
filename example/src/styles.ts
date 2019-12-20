import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    flexDirection: 'column',
    width: '100%',
    paddingHorizontal: 20,
  },
  digitInputStyle: {
    fontWeight: 'normal',
    backgroundColor: '#F2F2F2',
    borderColor: '#F2F2F2',
    borderRadius: 4,
    borderWidth: 1,
    color: '#02324C',
    fontSize: 14,
    height: 40,
    width: 40,
  },
  digitInputHighlightStyle: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E0E0E0',
  },
});
