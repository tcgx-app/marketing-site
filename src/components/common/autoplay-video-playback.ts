export interface PlaybackState {
  intent: 'automatic' | 'manual' | 'paused'
  canStart: boolean
}

export const initialPlaybackState: PlaybackState = {
  intent: 'automatic',
  canStart: true
}

export function updatePlaybackState(
  state: PlaybackState,
  event: 'automatic-play' | 'manual-play' | 'component-pause' | 'user-pause'
): PlaybackState {
  switch (event) {
    case 'automatic-play':
      return { ...state, canStart: false }
    case 'manual-play':
      return { intent: 'manual', canStart: false }
    case 'component-pause':
      return { ...state, canStart: state.intent !== 'paused' }
    case 'user-pause':
      return { intent: 'paused', canStart: false }
  }
}

export function getPlaybackAction(
  state: PlaybackState,
  conditions: {
    inView: boolean
    visible: boolean
    reducedMotion: boolean
    paused: boolean
  }
): 'play' | 'pause' | undefined {
  const canPlay =
    conditions.inView &&
    conditions.visible &&
    (!conditions.reducedMotion || state.intent === 'manual')

  if (!canPlay) return conditions.paused ? undefined : 'pause'
  if (conditions.paused && state.canStart && state.intent !== 'paused') {
    return 'play'
  }
}
