import { useCallback, useEffect, useState } from 'react';

export function useFocusState(
  autoFocusOnLoad: boolean
): [
  { [key: number]: boolean },
  (index: number) => void,
  (index: number) => void,
  () => void
] {
  const [focusState, setFocusState] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    setFocusState({
      0: autoFocusOnLoad ? true : false,
    });
  }, [autoFocusOnLoad]);

  const focus = useCallback(
    (index: number) =>
      setFocusState(state => ({
        ...state,
        [index]: true,
      })),
    []
  );

  const blur = useCallback(
    (index: number) => setFocusState(state => ({ ...state, [index]: false })),
    []
  );

  const blurAll = useCallback(() => setFocusState({}), []);

  return [focusState, focus, blur, blurAll];
}
