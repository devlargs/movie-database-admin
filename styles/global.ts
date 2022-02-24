const STYLES = {
  global: {
    '#nprogress': {
      pointerEvents: 'none',
    },
    '#nprogress .bar': {
      background: '#F26628',
      position: 'fixed',
      zIndex: 9999,
      top: 0,
      left: 0,
      width: '100%',
      height: '0.125rem',
    },
    '#nprogress .peg': {
      display: 'block',
      position: 'absolute',
      right: '0rem',
      width: '6.25rem',
      height: '100%',
      boxShadow: '0 0 0.625rem white, 0 0 0.313rem white',
      opacity: 1,
      WebkitTransform: 'rotate(3deg) translate(0rem, -0.25rem)',
      msTransform: 'rotate(3deg) translate(0rem, -0.25rem)',
      transform: 'rotate(3deg) translate(0rem, -0.25rem)',
    },
    '#nprogress .spinner': {
      display: 'block',
      position: 'fixed',
      zIndex: 9999,
      top: '0.938rem',
      right: '0.938rem',
    },
    '#nprogress .spinner-icon': {
      width: '1.125rem',
      height: '1.125rem',
      boxSizing: 'border-box',
      border: 'solid 0.125rem transparent',
      borderTopColor: '#F26628',
      borderLeftColor: '#F26628',
      borderRadius: '50%',
      WebkitAnimation: 'nprogress-spinner 400ms linear infinite',
      animation: 'nprogress-spinner 400ms linear infinite',
    },
    '.nprogress-custom-parent': {
      overflow: 'hidden',
      position: 'relative',
    },
    '.nprogress-custom-parent #nprogress .spinner': {
      position: 'absolute',
    },
    '.nprogress-custom-parent #nprogress .bar': {
      position: 'absolute',
    },
    '@-webkit-keyframes nprogress-spinner': {
      '0%': {
        WebkitTransform: 'rotate(0deg)',
      },
      '100%': {
        WebkitTransform: 'rotate(360deg)',
      },
    },
    '@keyframes nprogress-spinner': {
      '0%': {
        transform: 'rotate(0deg)',
      },
      '100%': {
        transform: 'rotate(360deg)',
      },
    },
    '.hover-underline-animation': {
      display: 'inline-block',
      position: 'relative',
    },
    '.hover-underline-animation::after': {
      content: `''`,
      position: 'absolute',
      width: '100%',
      transform: 'scaleX(0)',
      height: '2px',
      bottom: 0,
      left: 0,
      backgroundColor: '#F26628',
      transformOrigin: 'bottom right',
      transition: 'transform 0.25s ease-out',
    },
    '.hover-underline-animation:hover::after': {
      transform: 'scaleX(1)',
      transformOrigin: 'bottom left',
    },
  },
};

export default STYLES;
