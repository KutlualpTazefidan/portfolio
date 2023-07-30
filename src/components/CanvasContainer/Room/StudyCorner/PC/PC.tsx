import PCMonitor from "./PCMonitor";
import PCCase from "./PCCase";
import PCMouse from "./PCMouse";
import PCKeyboard from "./PCKeyboard";

export default function PC() {
  return (
    <>
      <PCMonitor />
      <PCCase />
      <PCMouse />
      <PCKeyboard />
    </>
  );
}
