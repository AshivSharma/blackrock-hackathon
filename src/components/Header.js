import { Link } from "react-router-dom";
import * as ROUTES from "../routes/routes";

export default function Header() {
  return (
    <header className="h-16 bg-white border-b border-gray-primary mb-8">
      <div className="container mx-auto max-w-screen-lg h-full">
        <div className="flex justify-between h-full">
          <div className="text-gray-700 text-center flex items-center align-items cursor-pointer">
            <h1 className="flex justify-center w-full">
              <Link to={ROUTES.HOMEPAGE}>
                <p>Home</p>
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
}
