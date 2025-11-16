import Image from "next/image";
export default function Home() {
  return (
  <>
    <div className="flex">
      
      <div className="divH1">
        <h1 className="heading">Welcome to WebInspector</h1>
      </div>

      <div className="divImg">
        <div className="w-[35%]">
          <Image src="/robot.png" alt="robot" width={700} height={700}/>
        </div>
          
        <div className="w-[65%]">
          <p className="opis">
            <b>WebInspector</b> 
            This tool analyzes any website you submit and provides a clear report on its accessibility, usability, and overall technical health. 
            It quickly identifies issues that may affect performance or user experience, highlights areas that do not meet modern accessibility standards, and offers 
            actionable insights to ensure the site works properly and delivers a smooth, inclusive experience for all users.
          </p>
        </div>

      </div>  
    </div>

    <div className="div2">

      <div className="flex justify-center w-[30%]">
        <Image src="/robot-stand.png" alt="robot" width={500} height={500}/>
      </div>

      <div className="w-[70%]">

          <div className="card">
            <h1 className="cardH1">Website Analysis</h1>
            
            <p className="w-[65%]">Users can submit any website link to get a detailed evaluation.</p>
          </div>
          
          <div className="card">
            <h1 className="cardH1">Accessibility Checks</h1>
            
            <p className="w-[65%]">It identifies accessibility issues and 
              shows whether the site meets modern standards for users with disabilities.</p>
          </div>

          <div className="card">
            <h1 className="cardH1">Actionable Insights</h1>
            
            <p className="w-[65%]">It provides clear recommendations to fix issues and improve the 
              site is overall performance, accessibility, and usability.</p>
          </div>

      </div>    
    </div>
  </>
  )
}
