import * as RadixTooltip from "@radix-ui/react-tooltip";
import {ReactNode, forwardRef} from "react";

type Props = {
  children: ReactNode;
  content: string | ReactNode;
  maxWidth?: number;
  side?: "top" | "right" | "bottom" | "left";
};

/** 按鍵提示 */
const InfoTooltip = forwardRef<HTMLButtonElement | null, Props>(({children, content, side = "top", maxWidth, ...rest}, ref) => {
  
  return (
    <RadixTooltip.Provider delayDuration={300}>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger
          asChild
          ref={ref} {...rest}
          // 避免點擊icon時關閉
          onClick={(event) => event.preventDefault()}
        >
          {children}
        </RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content
            className="infotooltip-content"
            sideOffset={4}
            side={side}
            style={maxWidth ? {maxWidth: maxWidth + "px"} : {}}
            // 避免點擊icon時關閉
            onPointerDownOutside={(event) => {
              event.preventDefault();
            }}
          >
            {content}
            {/* <RadixTooltip.Arrow className={styles['tooltip-arrow']} /> */}
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
});
InfoTooltip.displayName = "InfoTooltip";

export default InfoTooltip;
