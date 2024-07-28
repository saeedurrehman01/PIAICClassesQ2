"use client";

import { useRouter } from "next/navigation";

export default function Counter() {
  const router = useRouter();

  const onClickHandler = () => {
    router.push("/about");
  };
  return (
    <div>
      <button
        type="button"
        onClick={onClickHandler}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </div>
  );
}
