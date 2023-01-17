import { pxToRem } from "../utils";

const typography = {
  fontWeight: {
    bold: 700,
    semiBold: 600,
    medium: 500,
    regular: 400,
  },

  fontSize: {
    desktop: {
      display01: pxToRem(130),
      display02: pxToRem(90),
      heading01: pxToRem(48),
      subtitle01: pxToRem(24),
      body: pxToRem(18),
    },
    mobile: {
      display01: `54px`,
      display02: `32px`,
      heading01: `24px`,
    },
  },
};

export default typography;
