import { useRef } from "react";
import { CreateComponent } from "./CreateComponent";

export function CreateDesign() {
  const ref = useRef();
  return (
    <section>
      <div ref={ref}></div>
    </section>
  );
}
