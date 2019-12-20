import { styles } from './styles';

export const exampleConfig: { [key: string]: { title: string; props: {} } } = {
  Default: {
    title: 'Default props',
    props: {
      pinCount: 4,
    },
  },
  AutoFocus: {
    title: 'Auto focus on load',
    props: {
      pinCount: 4,
      autoFocusOnLoad: true,
    },
  },
  SecureText: {
    title: 'With secure text prop',
    props: {
      pinCount: 4,
      secureTextEntry: true,
    },
  },
  CustomStyle: {
    title: 'Custom input styles',
    props: {
      pinCount: 4,
      autoFocusOnLoad: true,
      digitInputStyle: styles.digitInputStyle,
      digitInputHighlightStyle: styles.digitInputHighlightStyle,
    },
  },
};
