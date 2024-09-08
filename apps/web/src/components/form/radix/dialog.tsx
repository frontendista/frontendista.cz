import * as Dialog from "@radix-ui/react-dialog";

import { withClass } from "../hoc";

export const Root = withClass(Dialog.Root, "");
export const Overlay = withClass(Dialog.Overlay, "bg-primary/90 fixed inset-0");
export const Content = withClass(Dialog.Content, "fixed inset-0 lg:top-[50%] lg:left-[50%] lg:max-w-[50rem] lg:-translate-x-1/2 lg:-translate-y-1/2 bg-secondary p-xl");
export const Title = withClass(Dialog.Title, "");
export const Description = withClass(Dialog.Description, "");
export const Close = withClass(Dialog.Close, "");
export const Portal = Dialog.Portal;
