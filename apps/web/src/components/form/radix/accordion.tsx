import * as Accordion from "@radix-ui/react-accordion";

import { withClass } from "../hoc";

export const Root = withClass(Accordion.Root, "");
export const Item = withClass(Accordion.Item, "relative focus-within:z-50");
export const Header = withClass(Accordion.Header, "");
export const Trigger = withClass(Accordion.Trigger, "justify-between text-left");
export const Content = withClass(Accordion.Content, "font-medium bg-secondary overflow-hidden border-[3px] border-t-0 border-primary");
