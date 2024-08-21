export const isMobile = () => {
  if (window.innerWidth <= 680) {
    return true;
  }

  return false;
};

export const isTablet = () => {
  if (window.innerWidth > 680 && window.innerWidth <= 960) {
    return true;
  }

  return false;
};

export const isDesktop = () => {
  if (window.innerWidth > 960) {
    return true;
  }

  return false;
};
