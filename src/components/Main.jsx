import Name from "./Name"
import Objective from "./Objective"
import Experience from "./Experience"
import References from "./References"


function Main({user}){
  return(
    <main className="px-6 border-l-3 border-neutral-400 flex-1 flex flex-col gap-5">
      <Name />
      <Objective obj={user.objective}/>
      <Experience />
      <References />
    </main>
  )
}

export default Main