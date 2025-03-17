"use client";

import * as Tooltip from "@radix-ui/react-tooltip";

interface Props {
    children: any;
    text: string;
}

export default function TooltipComponent({ children, text }: Props) {
  return (
    <Tooltip.Provider delayDuration={200}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="bg-gray-800 text-white px-3 py-1 rounded-md text-sm shadow-lg"
            sideOffset={5}
          >
            {text}
            <Tooltip.Arrow className="fill-gray-800" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
