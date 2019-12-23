import { useCallback, useState } from 'react';
import { Clipboard, Platform } from 'react-native';
import useInterval from '@use-it/interval';

export function useClipboard(
  pinCount: number,
  setDigits: (digits: string[]) => void
) {
  const [clipboardCode, setClipboardCode] = useState('');

  const checkClipboard = useCallback(async () => {
    if (Platform.OS !== 'android') {
      return;
    }

    const code = await Clipboard.getString();
    if (code.length === pinCount && code !== clipboardCode) {
      setDigits(code.split(''));
      setClipboardCode(code);
    }
  }, [clipboardCode, pinCount, setDigits]);

  useInterval(checkClipboard, 400);
}
