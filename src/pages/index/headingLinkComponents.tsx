import { title } from "@/components/primitives";

export default function headingLinkComponents() {
  return (
    <div>
      <header className="heading p-7">
        <h1 className={title({size: "extrasm"})}>Powered by UI-AI</h1>
        <p className="max-w-sm mt-3 dark:text-neutral-200 text-sm">An AI model for designers. </p>
      </header>
    </div>
  );
}
