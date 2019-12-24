# React Native Otp Input

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A cross-platform and simple Otp Input component for React Native.

- Handle Input suggestion on IOS (requires React Native 0.58+ and iOS 12 or above)
- Auto fill when copy code on Android.
- Fully-typed with Typescript

## Installation

```javascript
$ npm install -S react-native-otpinput
```

or

```javascript
$ yarn add react-native-otpinput
```

## Usage

```tsx
import React, { useState } from 'react';
import { View } from 'react-native';
import { OtpInput } from 'react-native-otpinput';

const App: React.FC<{}> = () => {
  const [code, setCode] = useState('');

  return (
    <View>
      <OtpInput code={code} onCodeChanged={setCode} pinCount={4} />
    </View>
  );
};
```

## Props

| Name                     | Type     | Default      | Description                                                                                         |
| ------------------------ | -------- | ------------ | --------------------------------------------------------------------------------------------------- |
| autoFocusOnLoad          | boolean  | false        | auto focus the 1st input and show keyboard on load                                                  |
| code                     | string   | **REQUIRED** | the value of the input                                                                              |
| digitInputHighlightStyle | object   | null         | the style of focused input                                                                          |
| digitInputStyle          | object   | null         | the style of all inputs                                                                             |
| onCodeChanged            | function | **REQUIRED** | called when the code is changed                                                                     |
| onCodeFilled             | function | null         | called when the last digit is filled                                                                |
| pinCount                 | number   | **REQUIRED** | the number of digit in OTP code                                                                     |
| secureTextEntry          | boolean  | false        | if true, the text input obscures the text entered so that sensitive text like passwords stay secure |
| style                    | object   | null         | custom container style                                                                              |

## Acknowledgement

This library is created based on [@twotalltotems/react-native-otp-input](https://github.com/Twotalltotems/react-native-otp-input)
