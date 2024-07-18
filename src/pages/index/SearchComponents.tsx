import { Button } from "@nextui-org/button";
import { title } from "@/components/primitives";

export default function SearchComponents() {
  return (
    <div className="flex items-center mt-10 mb-20 lg:mt-28 scale-80 lg:scale-100">
      <input type="text" placeholder="An app to Design" className="max-w-60 lg:pl-10 px-10 lg:px-0 lg:pr-16 py-3 rounded-full bg-[#39393f] text-white focus:outline-none  placeholder-gray-400" />
      <Button radius="full">
        <span className={title({ size: "litlesm" })}>Generate</span>
      </Button>
    </div>
  );
}
