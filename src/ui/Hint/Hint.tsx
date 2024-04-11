import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode,
  additionClass?: string
}

const Hint: React.FC<Props> = ({ children, additionClass }) => (
  <div className={`hint ${additionClass}`}>
    {children}
  </div>
);

export default Hint;
