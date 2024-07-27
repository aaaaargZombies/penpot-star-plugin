import { PenpotPathCommand } from "@penpot/plugin-types";

type MsgToPlugin =
  | { kind: "Change" }
  | { kind: "Ready" }
  | { kind: "State"; content: number };

type MsgFromPlugin = { kind: "Status" };

const unreachable = (_: never) => {
  throw new Error("This should be unreachable");
};

console.log("Hello from the plugin!");

penpot.ui.open("Penpot plugin starter Elm template", "");

const makePath = () => {
  const path = penpot.createPath();
  if (path) {
    const points: PenpotPathCommand[] = [
      {
        command: "move-to",
        params: {
          y: 0,
          x: 0,
          c1y: 0,
          c1x: 0,
          c2y: 0,
          c2x: 0,
        },
      },
      {
        command: "line-to",
        params: {
          y: 100,
          x: 100,
          c1y: 100,
          c1x: 100,
          c2y: 100,
          c2x: 100,
        },
      },
      {
        command: "line-to",
        params: {
          y: 611.5,
          x: 491,
          c1x: 491,
          c1y: 611.5,
          c2x: 491,
          c2y: 611.5,
        },
      },
      {
        command: "close-path",
      },
    ];

    path.content = points;
  }
};

const sendMessage = (msg: MsgFromPlugin) => {
  penpot.ui.sendMessage(msg);
};

const update = (msg: MsgToPlugin): void => {
  switch (msg.kind) {
    case "Ready":
      console.log("Interface Ready!");
      makePath();
      break;

    case "Change":
      console.log("The model has changed.");
      sendMessage({ kind: "Status" });
      break;

    case "State":
      console.log("The model is now: ", msg.content);
      break;

    default:
      unreachable(msg);
      break;
  }
};

penpot.ui.onMessage(update);
