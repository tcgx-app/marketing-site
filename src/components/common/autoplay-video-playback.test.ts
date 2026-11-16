import assert from 'node:assert/strict'
import test from 'node:test'
import {
  getPlaybackAction,
  initialPlaybackState,
  updatePlaybackState
} from './autoplay-video-playback'

const visibleVideo = {
  inView: true,
  visible: true,
  reducedMotion: false,
  paused: true
}

test('a native pause survives scrolling, tab visibility and motion changes', () => {
  let state = updatePlaybackState(initialPlaybackState, 'automatic-play')
  state = updatePlaybackState(state, 'user-pause')

  for (const conditions of [
    { ...visibleVideo, inView: false },
    visibleVideo,
    { ...visibleVideo, visible: false },
    visibleVideo,
    { ...visibleVideo, reducedMotion: true },
    visibleVideo
  ]) {
    assert.equal(getPlaybackAction(state, conditions), undefined)
  }

  state = updatePlaybackState(state, 'manual-play')
  assert.equal(
    getPlaybackAction(state, { ...visibleVideo, paused: false }),
    undefined
  )
})

test('only an interrupted playback can automatically resume after it starts', () => {
  assert.equal(getPlaybackAction(initialPlaybackState, visibleVideo), 'play')
  let state = updatePlaybackState(initialPlaybackState, 'automatic-play')
  assert.equal(getPlaybackAction(state, visibleVideo), undefined)

  assert.equal(
    getPlaybackAction(state, {
      ...visibleVideo,
      inView: false,
      paused: false
    }),
    'pause'
  )
  state = updatePlaybackState(state, 'component-pause')
  assert.equal(getPlaybackAction(state, visibleVideo), 'play')
  state = updatePlaybackState(state, 'automatic-play')
  assert.equal(getPlaybackAction(state, visibleVideo), undefined)
})

test('reduced motion prevents autoplay but permits native manual playback', () => {
  const reducedMotion = { ...visibleVideo, reducedMotion: true }
  assert.equal(
    getPlaybackAction(initialPlaybackState, reducedMotion),
    undefined
  )

  let state = updatePlaybackState(initialPlaybackState, 'manual-play')
  assert.equal(
    getPlaybackAction(state, { ...reducedMotion, paused: false }),
    undefined
  )
  assert.equal(
    getPlaybackAction(state, {
      ...reducedMotion,
      visible: false,
      paused: false
    }),
    'pause'
  )
  state = updatePlaybackState(state, 'component-pause')
  assert.equal(getPlaybackAction(state, reducedMotion), 'play')
  state = updatePlaybackState(state, 'user-pause')
  assert.equal(getPlaybackAction(state, reducedMotion), undefined)
})

test('enabling reduced motion pauses autoplay until the preference permits it', () => {
  let state = updatePlaybackState(initialPlaybackState, 'automatic-play')
  assert.equal(
    getPlaybackAction(state, {
      ...visibleVideo,
      reducedMotion: true,
      paused: false
    }),
    'pause'
  )
  state = updatePlaybackState(state, 'component-pause')
  assert.equal(
    getPlaybackAction(state, { ...visibleVideo, reducedMotion: true }),
    undefined
  )
  assert.equal(getPlaybackAction(state, visibleVideo), 'play')
})
