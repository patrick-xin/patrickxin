import { Suspense } from "react";

import Login from "./components/login";

const Page = () => {
  return (
    <div className="mx-auto flex w-full justify-center">
      <Suspense>
        <Login />
      </Suspense>
    </div>
  );
};

export default Page;
