const colors = {
  white: 'rgba(255, 255, 255, 1)',
  black: 'rgba(30, 25, 21, 1)',
  primaryAlpha006: 'rgba(255, 113, 64, 0.06)',
  primaryLight: 'rgba(255, 232, 224, 1)',
  primaryDark: 'rgba(255, 83, 23, 1)',
  primaryMain: 'rgba(255, 113, 64, 1)',
  grayscaleBg: 'rgba(246, 246, 244, 1)',
  grayscale7: 'rgba(246, 246, 244, 1)',
  grayscale6: 'rgba(235, 235, 235, 1)',
  grayscale5: 'rgba(178, 175, 169, 1)',
  grayscale4: 'rgba(115, 111, 105, 1)',
  grayscale3: 'rgba(81, 76, 72, 1)',
  grayscale2: 'rgba(51, 46, 42, 1)',
  grayscaleAlpha004: 'rgba(30, 25, 21, 0.04)',
  grayscaleAlpha016: 'rgba(30, 25, 21, 0.16)',
  grayscaleAlpha028: 'rgba(30, 25, 21, 0.28)',
  grayscaleAlpha04: 'rgba(30, 25, 21, 0.4)',
  grayscaleAlpha052: 'rgba(30, 25, 21, 0.52)',
  grayscaleAlpha064: 'rgba(30, 25, 21, 0.64)',
  grayscaleAlpha072: 'rgba(30, 25, 21, 0.72)',
  grayscaleAlpha088: 'rgba(30, 25, 21, 0.88)',
  link: 'rgba(53, 144, 249, 1)',
  greenAlpha012: 'rgba(44, 166, 77, 0.12)',
  greenDark: 'rgba(24, 146, 57, 1)',
  greenMain: 'rgba(70, 173, 96, 1)',
  redAlpha012: 'rgba(242, 54, 38, 0.12)',
  redDark: 'rgba(242, 54, 38, 1)',
  redMain: 'rgba(255, 76, 62, 1)',
  yellowAlpha012: 'rgba(244, 161, 0, 0.12)',
  yellowMain: 'rgba(244, 161, 0, 1)',
  purpleAlpha012: 'rgba(130, 79, 231, 0.12)',
  purpleMain: 'rgba(130, 79, 231, 1)',
  blueAlpha012: 'rgba(0, 142, 244, 0.12)',
  blueMain: 'rgba(0, 142, 244, 1)',
  pinkAlpha012: 'rgba(236, 64, 122, 0.12)',
  pinkMain: 'rgba(236, 64, 122, 1)',
  links: {
    primary: {
      default: {
        background: 'transparent',
        font: 'rgba(255, 113, 64, 1)',
        border: 'transparent',
      },
      hover: {
        background: 'transparent',
        font: 'rgba(255, 83, 23, 1)',
        border: 'transparent',
      },
      pressed: {
        background: 'transparent',
        font: 'rgba(255, 83, 23, 1)',
        border: 'transparent',
      },
      disabled: {
        background: 'transparent',
        font: 'rgba(178, 175, 169, 1)',
        border: 'transparent',
      },
    },
    navActive: {
      default: {
        background: 'transparent',
        font: 'rgba(255, 113, 64, 1)',
        border: 'transparent',
      },
      hover: {
        background: 'rgba(255, 113, 64, 0.15)',
        font: 'rgba(255, 113, 64, 1)',
        border: 'transparent',
      },
      pressed: {
        background: 'rgba(255, 113, 64, 0.15)',
        font: 'rgba(255, 113, 64, 1)',
        border: 'transparent',
      },
      disabled: {
        background: 'transparent',
        font: 'rgba(235, 235, 235, 1)',
        border: 'transparent',
      },
    },
    navInactive: {
      default: {
        background: 'transparent',
        font: 'rgba(30, 25, 21, 1)',
        border: 'transparent',
      },
      hover: {
        background: 'rgba(255, 113, 64, 0.15)',
        font: 'rgba(255, 113, 64, 1)',
        border: 'transparent',
      },
      pressed: {
        background: 'rgba(255, 113, 64, 0.15)',
        font: 'rgba(255, 113, 64, 1)',
        border: 'transparent',
      },
      disabled: {
        background: 'transparent',
        font: 'rgba(235, 235, 235, 1)',
        border: 'transparent',
      },
    },
  },
  button: {
    primary: {
      default: {
        background: 'rgba(255, 113, 64, 1)',
        font: 'rgba(255, 255, 255, 1)',
        border: 'transparent',
      },
      hover: {
        background: 'rgba(255, 83, 23, 1)',
        font: 'rgba(255, 255, 255, 1)',
        border: 'transparent',
      },
      pressed: {
        background: 'rgba(255, 83, 23, 1)',
        font: 'rgba(255, 255, 255, 1)',
        border: 'transparent',
      },
      disabled: {
        background: 'rgba(246, 246, 244, 1)',
        font: 'rgba(178, 175, 169, 1)',
        border: 'transparent',
      },
    },
    secondary: {
      default: {
        background: 'rgba(255, 232, 224, 1)',
        font: 'rgba(255, 113, 64, 1)',
        border: 'transparent',
      },
      hover: {
        background: 'rgba(255, 232, 224, 1)',
        font: 'rgba(255, 83, 23, 1)',
        border: 'transparent',
      },
      pressed: {
        background: 'rgba(255, 232, 224, 1)',
        font: 'rgba(255, 83, 23, 1)',
        border: 'transparent',
      },
      disabled: {
        background: 'rgba(246, 246, 244, 1)',
        font: 'rgba(178, 175, 169, 1)',
        border: 'transparent',
      },
    },
    tertiary: {
      default: {
        background: 'rgba(255, 255, 255, 1)',
        font: 'rgba(51, 46, 42, 1)',
        border: 'rgba(235, 235, 235, 1)',
      },
      hover: {
        background: 'rgba(255, 255, 255, 1)',
        font: 'rgba(30, 25, 21, 1)',
        border: 'rgba(30, 25, 21, 1)',
      },
      pressed: {
        background: 'rgba(255, 255, 255, 1)',
        font: 'rgba(30, 25, 21, 1)',
        border: 'rgba(30, 25, 21, 1)',
      },
      disabled: {
        background: 'rgba(246, 246, 244, 1)',
        font: 'rgba(178, 175, 169, 1)',
        border: 'transparent',
      },
    },
    link: {
      default: {
        background: 'transparent',
        font: 'rgba(255, 113, 64, 1)',
        border: 'transparent',
      },
      hover: {
        background: 'transparent',
        font: 'rgba(255, 83, 23, 1)',
        border: 'transparent',
      },
      pressed: {
        background: 'transparent',
        font: 'rgba(255, 83, 23, 1)',
        border: 'transparent',
      },
      disabled: {
        background: 'transparent',
        font: 'rgba(178, 175, 169, 1)',
        border: 'transparent',
      },
    },
    success: {
      default: {
        background: 'rgba(70, 173, 96, 1)',
        font: 'rgba(255, 255, 255, 1)',
        border: 'transparent',
      },
      hover: {
        background: 'rgba(24, 146, 57, 1)',
        font: 'rgba(255, 255, 255, 1)',
        border: 'transparent',
      },
      pressed: {
        background: 'rgba(24, 146, 57, 1)',
        font: 'rgba(255, 255, 255, 1)',
        border: 'transparent',
      },
      disabled: {
        background: 'rgba(246, 246, 244, 1)',
        font: 'rgba(178, 175, 169, 1)',
        border: 'transparent',
      },
    },
    destructive: {
      default: {
        background: 'rgba(255, 76, 62, 1)',
        font: 'rgba(255, 255, 255, 1)',
        border: 'transparent',
      },
      hover: {
        background: 'rgba(242, 54, 38, 1)',
        font: 'rgba(255, 255, 255, 1)',
        border: 'transparent',
      },
      pressed: {
        background: 'rgba(242, 54, 38, 1)',
        font: 'rgba(255, 255, 255, 1)',
        border: 'transparent',
      },
      disabled: {
        background: 'rgba(246, 246, 244, 1)',
        font: 'rgba(178, 175, 169, 1)',
        border: 'transparent',
      },
    },
    red: {
      default: {
        background: 'rgba(255, 255, 255, 1)',
        font: 'rgba(255, 76, 62, 1)',
        border: 'transparent',
      },
      hover: {
        background: 'rgba(242, 54, 38, 0.12)',
        font: 'rgba(242, 54, 38, 1)',
        border: 'transparent',
      },
      pressed: {
        background: 'rgba(242, 54, 38, 0.12)',
        font: 'rgba(242, 54, 38, 1)',
        border: 'transparent',
      },
      disabled: {
        background: 'rgba(246, 246, 244, 1)',
        font: 'rgba(255, 76, 62, 0.3)',
        border: 'transparent',
      },
    },
  },
  input: {
    primary: {
      default: {
        background: 'rgba(246, 246, 244, 1)',
        border: 'rgba(235, 235, 235, 1)',
        font: 'rgba(30, 25, 21, 1)',
      },
      hover: {
        background: 'rgba(246, 246, 244, 1)',
        border: 'rgba(178, 175, 169, 1)',
        font: 'rgba(30, 25, 21, 1)',
      },
      pressed: {
        background: 'rgba(235, 235, 235, 1)',
        border: 'rgba(235, 235, 235, 1)',
        font: 'rgba(30, 25, 21, 1)',
      },
      focus: {
        background: 'rgba(255, 255, 255, 1)',
        border: 'rgba(235, 235, 235, 1)',
        font: 'rgba(30, 25, 21, 1)',
      },
      disabled: {
        background: 'rgba(235, 235, 235, 1)',
        border: 'transparent',
        font: 'rgba(30, 25, 21, 1)',
        label: 'rgba(115, 111, 105, 1)',
      },
      error: {
        background: 'rgba(242, 54, 38, 0.12)',
        border: 'transparent',
        font: 'rgba(30, 25, 21, 1)',
      },
    },
  },
  checkbox: {
    primary: {
      unchecked: {
        default: {
          background: 'rgba(235, 235, 235, 1)',
          border: 'transparent',
        },
        hover: {
          background: 'rgba(246, 246, 244, 1)',
          border: 'rgba(178, 175, 169, 1)',
        },
      },
      checked: {
        default: {
          background: 'rgba(255, 113, 64, 1)',
          border: 'transparent',
        },
        hover: {
          background: 'rgba(255, 113, 64, 1)',
          border: 'transparent',
        },
      },
      disabled: {
        background: 'rgba(235, 235, 235, 1)',
        border: 'transparent',
      },
    },
  },
  toggle: {
    thumb: 'rgba(255, 255, 255, 1)',
    default: {
      background: 'rgba(246, 246, 244, 1)',
      hover: {
        background: 'rgba(246, 246, 244, 1)',
      },
      disabled: {
        background: 'rgba(246, 246, 244, 1)',
      },
    },
    checked: {
      background: 'rgba(255, 113, 64, 1)',
      hover: {
        background: 'rgba(255, 113, 64, 1)',
      },
      disabled: {
        background: 'rgba(255, 113, 64, 1)',
      },
    },
  },
  select: {
    primary: {
      default: {
        background: 'rgba(246, 246, 244, 1)',
        font: 'rgba(30, 25, 21, 1)',
        border: 'rgba(235, 235, 235, 1)',
      },
      filled: {
        background: 'rgba(246, 246, 244, 1)',
        font: 'rgba(30, 25, 21, 1)',
        border: 'rgba(235, 235, 235, 1)',
      },
      hover: {
        background: 'rgba(246, 246, 244, 1)',
        font: 'rgba(30, 25, 21, 1)',
        border: 'rgba(178, 175, 169, 1)',
      },
    },
  },
}

export { colors }
