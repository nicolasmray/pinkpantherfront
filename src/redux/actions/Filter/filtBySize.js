import { FILT_BY_SIZE } from "../actions-types"; 

export const filtBySize = (size) => {
    return {
      type: FILT_BY_SIZE,
      payload: size,
    };
  };