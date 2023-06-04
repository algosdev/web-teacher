import { ReactComponent as SpinnerIcon } from '../../assets/icons/spinner.svg';

import { ReactComponent as SpinnerDarkIcon } from '../../assets/icons/spinner-dark.svg';
import React from 'react';

export default function Spinner({ dark, center }) {
  if (center) {
    return <div className="row pt--40">{dark ? <SpinnerDarkIcon /> : <SpinnerIcon />}</div>;
  }
  return dark ? <SpinnerDarkIcon /> : <SpinnerIcon />;
}
