'use client'

import { useEffect, useRef } from 'react'

interface AutoplayVideoProps {
  src: string
  label: string
  className?: string
  width?: string
  height?: string
  controls?: boolean
  muted?: boolean
  loop?: boolean
}

export function AutoplayVideo({
  src,
  label,
  className,
  width = '320',
  height = '240',
  controls = true,
  muted = true,
  loop = true
}: AutoplayVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let inView = false
    const updatePlayback = () => {
      if (
        inView &&
        !reducedMotion.matches &&
        document.visibilityState === 'visible'
      ) {
        video.play().catch(() => {
          // Playback controls remain available when a browser blocks autoplay.
        })
      } else {
        video.pause()
      }
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          inView = entry.isIntersecting
          updatePlayback()
        })
      },
      {
        threshold: 0.5 // Play when 50% of the video is visible
      }
    )

    observer.observe(video)
    reducedMotion.addEventListener('change', updatePlayback)
    document.addEventListener('visibilitychange', updatePlayback)

    return () => {
      observer.disconnect()
      reducedMotion.removeEventListener('change', updatePlayback)
      document.removeEventListener('visibilitychange', updatePlayback)
    }
  }, [])

  return (
    <video
      ref={videoRef}
      aria-label={label}
      width={width}
      height={height}
      controls={controls}
      preload='none'
      className={className}
      muted={muted}
      loop={loop}
      playsInline // Important for mobile devices
    >
      <source src={src} type='video/mp4' />
      Your browser does not support the video tag.
    </video>
  )
}
