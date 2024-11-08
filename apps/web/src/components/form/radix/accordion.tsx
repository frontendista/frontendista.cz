import * as Accordion from "@radix-ui/react-accordion";

import { withClass } from "../hoc";

export const Root = withClass(Accordion.Root, "");
export const Item = withClass(Accordion.Item, "");
export const Header = withClass(Accordion.Header, "");
export const Trigger = withClass(Accordion.Trigger, "justify-between text-left");
export const Content = withClass(Accordion.Content, "font-medium bg-secondary overflow-hidden border-l-[3px] border-primary");
