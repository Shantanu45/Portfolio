import React, { useState, useEffect } from 'react';

type Props = {
  children: React.ReactNode;
  waitBeforeShow?: number;
};

const Delayed = (props: Props) => {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShown(true);
    }, props.waitBeforeShow);
    return () => clearTimeout(timer);
  }, [props.waitBeforeShow]);

  return isShown ? props.children : null;
};

export default Delayed;