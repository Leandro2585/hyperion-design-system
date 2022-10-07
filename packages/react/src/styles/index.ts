import {
  colors,
  fontFamily,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  spacing,
} from '@hyperion-ui/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const { styled, css, globalCss, keyframes, getCssText, theme } =
  createStitches({
    themeMap: {
      ...defaultThemeMap,
      height: 'space',
      width: 'space',
    },
    theme: {
      colors,
      fontSizes,
      fonts: fontFamily,
      fontWeights,
      lineHeights,
      radii,
      space: spacing,
    },
  })
