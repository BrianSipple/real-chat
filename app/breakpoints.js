const THRESHOLDS = {
  phone: 320,
  tablet: 768,
  desktop: 992,
  largeDesktop: 1280,
  monitor: 1536
};

export default {
  smallHandset: `(max-width: ${THRESHOLDS.tablet - 1}px)`,
  tablet: `(min-width: ${THRESHOLDS.tablet}px) and (max-width: ${THRESHOLDS.desktop - 1}px)`,
  atLeastTablet: `(min-width: ${THRESHOLDS.tablet}px)`,
  mobile: `(max-width: ${THRESHOLDS.desktop - 1}px)`,
  greaterThanMobile: `(min-width: ${THRESHOLDS.desktop}px)`,
  desktop: `(min-width: ${THRESHOLDS.desktop}px) and (max-width: ${THRESHOLDS.largeDesktop - 1}px)`,
  largeDesktop: `(min-width: ${THRESHOLDS.largeDesktop}px) and (max-width: ${THRESHOLDS.monitor - 1}px)`,
  monitor: `(min-width: ${THRESHOLDS.monitor}px)`
};
