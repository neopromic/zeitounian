import { ActionRow } from "../ActionRow";
import { LogoSection } from "../LogoSection";

export const RootContainer = () => {
  return (
    <header className="border-b h-12 bg-background/30 backdrop-blur-lg flex items-center px-4 tracking-tight  sticky top-0 left-0 z-50">
      <section className="flex-1">
        <LogoSection />
      </section>
      <section>
        <ActionRow />
      </section>
    </header>
  );
};
