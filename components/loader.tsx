import { Loader2 } from "lucide-react";

const Loader = () => (
  <div className="flex-grow flex items-center justify-center">
    <Loader2 className="animate-spin text-blue-500" size={48} />
  </div>
);

export default Loader;
