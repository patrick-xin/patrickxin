import {
  HeartFilledIcon,
  TextAlignJustifyIcon,
  VercelLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NAGIGATIONS } from "@/lib/constants";
import Logo from "../logo";

const MobileDrawer = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <div className="rounded-lg border border-border/20 p-2">
          <TextAlignJustifyIcon className="z-200 h-4 w-4 text-primary" />
        </div>
      </SheetTrigger>
      <SheetContent
        className="z-200 h-full w-full opacity-80 backdrop-blur flex flex-col justify-between"
        side="top"
      >
        <div>
          <Logo />
        </div>
        <ul className="flex flex-col items-center py-48 justify-between h-full">
          {NAGIGATIONS.map((route) => (
            <li key={route.title}>
              <Link href={`${route.href}`}>{route.title}</Link>
            </li>
          ))}
        </ul>

        <div className="flex justify-center gap-4 text-xs -mx-4 pt-4 border-t">
          <div className="flex items-center">
            <span className="inline-block lg:mb-0">Made with</span>
            <HeartFilledIcon className="mx-1 -mt-0.5 inline-block h-4 w-4 text-red-600" />
          </div>
          <div className="flex items-center">
            <span className="inline-block">Powered by Vercel</span>
            <VercelLogoIcon className="mx-1 -mt-0.5 inline-block h-4 w-4" />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileDrawer;
