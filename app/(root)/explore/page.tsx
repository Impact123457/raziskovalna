import SearchForm from "@/app/components/SearchForm";

export default function Home() {
  const result = ({ 
    
  })
  return (
    <>
    <div className="mainDIV">  
      <div>
        <h1 className="h2">Find out if your website is <span className="text-blue-300">Accessible</span></h1>
        <div>
          <p className="text">
            The scanner shows you what’s wrong and exactly how to fix it — fast, clear, and actionable. 
            Type your URL to start now! 
          </p>
        </div>
      </div> 
        <SearchForm />
    </div>
    </>
  )
}