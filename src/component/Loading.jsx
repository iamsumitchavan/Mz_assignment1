import { AiOutlineLoading3Quarters } from "react-icons/ai";
function Loading() {
  return (
    <div className="flex h-screen justify-center items-center">
      <div>
        <AiOutlineLoading3Quarters className="text-2xl animate-spin" />
      </div>
    </div>
  );
}
export default Loading;
