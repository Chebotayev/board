import { useEffect } from 'react'

export const didMountEffect = action => {
  useEffect(() => {
    action();
  }, [])
}

