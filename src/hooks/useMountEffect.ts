import { EffectCallback, useEffect } from 'react';

const useMountEffect = (effect: EffectCallback) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useEffect(effect, []);
};

export default useMountEffect;
