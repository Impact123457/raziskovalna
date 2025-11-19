import Image from "next/image";
import SearchForm from "../components/SearchForm";
export default function Home(){
  return (
  <>
    <div className="items-center bg-blue-800 min-h-[400px] flex flex-col justify-center text-center">
        <h1 className="heading">Welcome to WebInspector</h1>
          <p className="opis">
            WebInspector
            This tool analyzes any website you submit and provides a clear report on its accessibility, usability. It quickly identifies issues that may affect user experience, highlights areas that do not meet modern accessibility standards, and offers 
            actionable insights to ensure the site works properly.
          </p>
        <SearchForm />
    </div>
    <div>
      
    </div>
  </>
  )
}
