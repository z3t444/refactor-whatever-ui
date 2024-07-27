import { title } from "@/components/primitives";

export default function HeadingHelpDesk() {
  return (
    <div>
      <header className="heading p-7">
        <h1 className={title({ size: "extrasm" })}>Chat with Genius</h1>
        <p className="max-w-sm mt-3 dark:text-neutral-200 text-sm">Genius can consult and act on any design-related questions.</p>
      </header>
    </div>
  );
}
