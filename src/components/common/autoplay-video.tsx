'use client'

import { useEffect, useRef } from 'react'
import {
  getPlaybackAction,
  initialPlaybackState,
  updatePlaybackState
} from './autoplay-video-playback'

interface AutoplayVideoProps {
  src: string
  label: string
  poster?: string
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
  poster,
  className,
  width = '948',
  height = '768',
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
    let playbackState = initialPlaybackState
    let automaticPlayEvents = 0
    let componentPauseEvents = 0
    const updatePlayback = () => {
      const action = getPlaybackAction(playbackState, {
        inView,
        visible: document.visibilityState === 'visible',
        reducedMotion: reducedMotion.matches,
        paused: video.paused
      })

      if (action === 'play') {
        playbackState = updatePlaybackState(playbackState, 'automatic-play')
        const request = video.play()
        // Media events are queued, including when a later pause aborts play().
        if (!video.paused) automaticPlayEvents += 1
        request.catch(() => {
          // Playback controls remain available when a browser blocks autoplay.
        })
      } else if (action === 'pause') {
        playbackState = updatePlaybackState(playbackState, 'component-pause')
        componentPauseEvents += 1
        video.pause()
      }
    }

    const onPlay = () => {
      if (automaticPlayEvents > 0) {
        automaticPlayEvents -= 1
      } else {
        playbackState = updatePlaybackState(playbackState, 'manual-play')
      }
      updatePlayback()
    }

    const onPause = () => {
      if (componentPauseEvents > 0) {
        componentPauseEvents -= 1
      } else {
        playbackState = updatePlaybackState(playbackState, 'user-pause')
      }
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          inView = entry.isIntersecting && entry.intersectionRatio >= 0.5
          updatePlayback()
        })
      },
      {
        threshold: 0.5 // Play when 50% of the video is visible
      }
    )

    observer.observe(video)
    video.addEventListener('play', onPlay)
    video.addEventListener('pause', onPause)
    reducedMotion.addEventListener('change', updatePlayback)
    document.addEventListener('visibilitychange', updatePlayback)

    return () => {
      observer.disconnect()
      video.removeEventListener('play', onPlay)
      video.removeEventListener('pause', onPause)
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
      poster={poster}
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
