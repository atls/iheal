import { styleFn } from 'styled-system'

export const transitionStyles: styleFn = () => ({
  transition: '.3s',
})

export const appearanceNavLinkStyles: styleFn = ({ theme, keep }) =>
  !keep && {
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 8,
    paddingBottom: 8,
    color: theme.colors.links.navInactive.default.font,
    backgroundColor: theme.colors.links.navInactive.default.background,
    border: theme.colors.links.navInactive.default.border,
    borderRadius: theme.radii.extra,
    '&:hover': {
      color: theme.colors.links.navInactive.hover.font,
      backgroundColor: theme.colors.links.navInactive.hover.background,
      border: theme.colors.links.navInactive.hover.border,
      borderRadius: theme.radii.extra,
    },
    '&:active': {
      color: theme.colors.links.navInactive.pressed.font,
      backgroundColor: theme.colors.links.navInactive.pressed.background,
      border: theme.colors.links.navInactive.pressed.border,
      borderRadius: theme.radii.extra,
    },
    '& svg > path:only-of-type': {
      fill: theme.colors.links.navInactive.hover.font,
    },
  }

export const activeNavLinkStyles: styleFn = ({ active, theme }) =>
  active && {
    color: theme.colors.links.navActive.default.font,
    backgroundColor: theme.colors.links.navActive.default.background,
    border: theme.borders.transparent,
    borderRadius: theme.radii.extra,
    '&:hover': {
      color: theme.colors.links.navActive.hover.font,
      backgroundColor: theme.colors.links.navActive.hover.background,
      border: theme.borders.transparent,
      borderRadius: theme.radii.extra,
      transition: '0.3s',
      '& svg > path:only-of-type': {
        fill: theme.colors.links.navInactive.hover.font,
        transition: '0.3s',
      },
      '& svg > path': {
        fill: theme.colors.links.navInactive.hover.font,
        transition: '0.3s',
      },
    },
    '&:active': {
      color: theme.colors.links.navActive.pressed.font,
      backgroundColor: theme.colors.links.navActive.pressed.background,
      border: theme.borders.transparent,
      borderRadius: theme.radii.extra,
      '& svg > path:only-of-type': {
        fill: theme.colors.links.navActive.pressed.font,
        transition: '0.3s',
      },
      '& svg > path': {
        fill: theme.colors.links.navActive.pressed.font,
        transition: '0.3s',
      },
    },
    '& svg > path:only-of-type': {
      fill: theme.colors.links.navActive.default.font,
      transition: '0.3s',
    },
    '& svg > path': {
      fill: theme.colors.links.navActive.default.font,
      transition: '0.3s',
    },
  }

export const defaultNavLinkStyles: styleFn = ({ active, theme }) =>
  !active && {
    color: theme.colors.links.navInactive.default.font,
    backgroundColor: theme.colors.links.navInactive.default.background,
    border: theme.borders.transparent,
    borderRadius: theme.radii.extra,
    '&:hover': {
      color: theme.colors.links.navInactive.hover.font,
      backgroundColor: theme.colors.links.navInactive.hover.background,
      border: theme.borders.transparent,
      borderRadius: theme.radii.extra,
      '& svg > path:only-of-type': {
        fill: theme.colors.links.navInactive.hover.font,
        transition: '0.3s',
      },
      '& svg > path': {
        fill: theme.colors.links.navInactive.hover.font,
        transition: '0.3s',
      },
    },
    '&:active': {
      color: theme.colors.links.navInactive.pressed.font,
      backgroundColor: theme.colors.links.navInactive.pressed.background,
      border: theme.borders.transparent,
      borderRadius: theme.radii.extra,
    },
    '& svg > path:only-of-type': {
      fill: theme.colors.black,
    },
    '& svg > path': {
      fill: theme.colors.black,
    },
  }
