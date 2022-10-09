export const DEFAULT_CALLBACKS = {
  onStart: () => {},
  onPreviousStep: (currentStep) => {},
  onNextStep: (currentStep) => {},
  onStop: () => {},
  onSkip: () => {},
  onFinish: () => {console.log("Bitti")}
}

export const DEFAULT_OPTIONS = {
  highlight: true,
  labels: {
    buttonSkip: 'Geç',
    buttonPrevious: 'Önceki',
    buttonNext: 'Sonraki',
    buttonStop: 'Bitir'
  },
  enabledButtons: {
    buttonSkip: true,
    buttonPrevious: true,
    buttonNext: true,
    buttonStop: true
  },
  startTimeout: 0,
  useKeyboardNavigation: true,
  enabledNavigationKeys: {
    ESCAPE: true,
    ARROW_RIGHT: true,
    ARROW_LEFT: true
  },
  debug: false
}

export const HIGHLIGHT = {
  CLASSES: {
    ACTIVE: 'v-tour--active',
    TARGET_HIGHLIGHTED: 'v-tour__target--highlighted',
    TARGET_RELATIVE: 'v-tour__target--relative'
  },
  TRANSITION: 'box-shadow 0s ease-in-out 0s',
  useKeyboardNavigation: true,
  startTimeout: 0,
  stopOnTargetNotFound: true
}

export const DEFAULT_STEP_OPTIONS = {
  enableScrolling: false,
  highlight: DEFAULT_OPTIONS.highlight, // By default use the global tour setting
  enabledButtons: DEFAULT_OPTIONS.enabledButtons,
  placement: 'bottom',
}

export const KEYS = {
  ARROW_RIGHT: 39,
  ARROW_LEFT: 37,
  ESCAPE: 27
}
