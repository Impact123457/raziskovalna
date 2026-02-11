import SearchForm from "@/app/components/SearchForm";

export default function Home() {
  const result = ({ 
    
  })
  return (
    <>
    <div className="mainDIV">  
      <div>
        <h1 className="h2">Odkrij če je spletna stran <span className="text-blue-300">Dostopna</span></h1>
        <div>
          <p className="text">
            Skener vam pokaže, kaj je narobe in kako to odpraviti – hitro, jasno in učinkovito. 
            Vnesite svoj URL, da začnete zdaj!
          </p>
        </div>
      </div> 
        <SearchForm />
    </div>
    </>
  )
}