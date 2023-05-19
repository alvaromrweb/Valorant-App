import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-center bg-slate-800 text-white">
      <h1 className="text-4xl font-bold mb-5">Oops!</h1>
      <p className="text-lg mb-5">Sorry, an unexpected error has occurred.</p>
      <p className="text-slate-400">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}