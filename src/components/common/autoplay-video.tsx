'use client'

import { useEffect, useRef } from 'react'

interface AutoplayVideoProps {
  src: string
  className?: string
  width?: string
  height?: string
  controls?: boolean
  muted?: boolean
  loop?: boolean
}

export function AutoplayVideo({
  src,
  className,
  width = '320',
  height = '240',
  controls = false,
  muted = true,
  loop = true
}: AutoplayVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Video is in view, play it
            video.play().catch(error => {
              console.error('Error playing video:', error)
            })
          } else {
            // Video is out of view, pause it
            video.pause()
          }
        })
      },
      {
        threshold: 0.5 // Play when 50% of the video is visible
      }
    )

    observer.observe(video)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <video
      ref={videoRef}
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
