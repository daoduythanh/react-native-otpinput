import { Platform } from 'react-native';

const majorVersionIOS = parseInt(Platform.Version.toString(), 10);

export const isAutoFillSupported =
  Platform.OS === 'ios' && majorVersionIOS >= 12;
