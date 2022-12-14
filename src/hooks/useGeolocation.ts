import { useEffect, useState } from 'react'

export const MAP_ID = 'naver-map'

type Location = { latitude: number; longitude: number }

function useGeolocation() {
  const [location, setLocation] = useState<Location>()

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) => {
          setLocation({
            latitude,
            longitude,
          })
        }
      )
    } else {
      // TODO: 토스트로 대체, 문구 상수화
      window.alert('현재 위치를 알 수 없어 기본 위치로 지정합니다.')
    }
  }, [])

  return {
    location,
  }
}

export default useGeolocation
