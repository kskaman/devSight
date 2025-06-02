import { useQuery } from "@tanstack/react-query";
import { fetchWelcome } from "../api/onboarding";
import Loader from "../ui/Loader";

type Role = "developer" | "recruiter";

interface Props {
  onDone: (role: Role) => void;
}

export default function Onboarding({ onDone }: Props) {
  //   const {
  //     data: greeting,
  //     isLoading,
  //     error,
  //   } = useQuery({
  //     queryKey: ["welcome"],
  //     queryFn: fetchWelcome,
  //   });

  //   if (isLoading) return <Loader />;
  //   if (error)
  //     return <p className="p-6 text-red-600">Failed to load greeting.</p>;

  return (
    <div className="space-y-6 max-w- w-[full]">
      {/* <p className="text-preset-3 mx-auto">{greeting}</p> */}

      <div className="flex gap-4">
        <button
          onClick={() => onDone("developer")}
          className="
            bg-indigo-600 
            text-white 
            px-4 py-2 
            rounded-full 
            hover:bg-indigo-700"
        >
          Developer
        </button>
        <button
          onClick={() => onDone("recruiter")}
          className="
          bg-emerald-600 
          text-white 
          px-4 
          py-2 
          rounded-full
          hover:bg-emerald-700"
        >
          Recruiter
        </button>
      </div>
    </div>
  );
}
