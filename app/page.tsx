import SearchForm from "./components/SearchForm";
import Link from "next/link";
export default function Home() {
  return (
    <section>
      <div className="mainDIV">
        <div className="opis" />
        <h1 className="h1">
          Welcome to <span className="text-blue-300">WebInspector</span>
        </h1>

        <p className="text">
          <span className="font-semibold text-white">WebInspector</span> analyzes any website you submit and provides
          a clear report on accessibility and usability. It identifies issues that
          impact user experience and highlights areas that don’t meet modern
          accessibility standards.
        </p>
        <div className="flex gap-2">
          <Link href="/login" className="btn1">
            Log in
          </Link>

          <Link href="/explore" className="btn2">
            Start exploring
          </Link>
        </div>
      </div>
    </section>
  );
}
