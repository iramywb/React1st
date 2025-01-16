import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container mx-auto mt-[104px] flex flex-col gap-y-4 justify-center items-center min-h-[calc(100vh-412px)]">
      <h1 className="text-3xl font-bold">
        <i className="fa-solid fa-triangle-exclamation"></i> Page Not Found <i className="fa-solid fa-triangle-exclamation"></i>
      </h1>
      <Link to="/" className="btn btn-green"><i className="fa-solid fa-house"></i> Back to Home</Link>
    </div>
  )
}
