import React, { ReactNode } from "react";

type Props = { children: ReactNode };

const Child: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default Child;
