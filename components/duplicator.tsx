import * as React from "react";
import NextImage from "next/image";
import quarry from "./quarry.png";

export type DuplicatorProps = {
  id: string;
};

const Duplicator: React.FC<DuplicatorProps> = (props) => {
  return (
    <div>
      <h1>Hello {props.id}</h1>
      <NextImage src={quarry} width={100} height={100} />
    </div>
  );
};

export default Duplicator;
