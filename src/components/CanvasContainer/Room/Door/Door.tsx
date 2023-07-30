import DoorFrame from "./DoorFrame";
import DoorWindowFrame from "./DoorWindowFrame";
import DoorHandle from "./DoorHandle";
import DoorLock from "./DoorLock";
import DoorWindow from "./DoorWindow";
import DoorBase from "./DoorBase";

export default function Door() {
  return (
    <>
      <DoorFrame />
      <DoorBase />
      <DoorWindowFrame />
      <DoorHandle />
      <DoorLock />
      <DoorWindow />
    </>
  );
}
