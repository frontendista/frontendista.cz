import * as Popover from "@radix-ui/react-popover";

import { withClass } from "../hoc";

export const Root = withClass(Popover.Root, "");
export const Trigger = withClass(Popover.Trigger, "");
export const Content = withClass(Popover.Content, "bg-secondary p-xl");

export const Portal = Popover.Portal;
