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
      <div
        style={{
          display: "flex",
          flex: "row",
        }}
      >
        <NextImage src={quarry} width={100} height={100} />
        {/* <img {...(quarry as any)} width={100} height={100} /> */}
      </div>
    </div>
  );
};

export default Duplicator;
