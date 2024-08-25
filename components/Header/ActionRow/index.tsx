import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import { ModeToggle } from "@/components/mode-toggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { HoverCard, HoverCardTrigger } from "@/components/ui/hover-card";

export const ActionRow = () => {
  return (
    <div className="flex items-center justify-between gap-2">
      <NavigationMenu className="hidden sm:hidden md:flex lg:flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Institucional</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Serviços</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Produtos</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="md:hidden lg:hidden">

      <Sheet>
        <SheetTrigger className="border rounded-md p-2 hover:bg-muted">
          <Menu size={20} />
        </SheetTrigger>
        <SheetContent className="flex flex-col">
            <HoverCard>
                <HoverCardTrigger className="border max-w-64 rounded p-2 hover:bg-muted cursor-pointer transition-all shadow-sm">
                    Institucional
                </HoverCardTrigger>
            </HoverCard>
            <HoverCard>
                <HoverCardTrigger className="border max-w-64 rounded p-2 hover:bg-muted cursor-pointer transition-all shadow-sm">
                    Serviços
                </HoverCardTrigger>
            </HoverCard>
            <HoverCard>
                <HoverCardTrigger className="border max-w-64 rounded p-2 hover:bg-muted cursor-pointer transition-all shadow-sm">
                    Produtos
                </HoverCardTrigger>
            </HoverCard>
        </SheetContent>
      </Sheet>
      </div>
      <ModeToggle />
    </div>
  );
};
