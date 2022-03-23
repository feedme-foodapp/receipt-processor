/* pageTransition.ts */

/* Interface(s) */
export interface VariantModel {
  initial: ObjectModel;
  in: ObjectModel;
  out: ObjectModel;
}

export interface TransitionModel {
  type: string;
  ease: string;
  duration: number;
}

interface ObjectModel {
  x: string;
  opacity: number;
}

export const VARIANT: VariantModel = {
  initial: {
    x: "-100vh",
    opacity: 0,
  },
  in: {
    x: "0vh",
    opacity: 1,
  },
  out: {
    x: "-100vh",
    opacity: 0,
  },
};

export const TRANSITION: TransitionModel = {
  type: "tween",
  ease: "anticipate",
  duration: 0.75,
};
