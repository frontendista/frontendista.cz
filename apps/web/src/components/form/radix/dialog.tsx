import * as Dialog from "@radix-ui/react-dialog";

import { withClass } from "../hoc";

export const Root = withClass(Dialog.Root, "");
export const Overlay = withClass(Dialog.Overlay, "bg-primary/90 fixed inset-0 z-50 animate-fade-in backdrop-blur-sm backdrop-saturate-0");
export const Content = withClass(Dialog.Content, "fixed z-50 inset-0 lg:top-[50%] lg:left-[50%] lg:max-w-[50rem] lg:-translate-x-1/2 lg:-translate-y-1/2 p-xl animate-fade-in overflow-y-auto lg:max-h-[calc(100vh-32px)]");
export const Title = withClass(Dialog.Title, "");
export const Description = withClass(Dialog.Description, "");
export const Close = withClass(Dialog.Close, "");
export const Portal = Dialog.Portal;
export const Trigger = Dialog.Trigger;
