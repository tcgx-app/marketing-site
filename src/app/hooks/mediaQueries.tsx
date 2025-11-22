import { useMediaQuery } from 'usehooks-ts'

const useDevice = () => {
  const isSmall = useMediaQuery('(min-width: 640px)', {
    initializeWithValue: true
  })
  const isMedium = useMediaQuery('(min-width: 768px)', {
    initializeWithValue: true
  })
  const isLarge = useMediaQuery('(min-width: 1024px)', {
    initializeWithValue: true
  })

  return { isSmall, isMedium, isLarge }
}

export default useDevice
