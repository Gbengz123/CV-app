import Name from "./Name"
import Objective from "./Objective"
import Experience from "./Experience"
import References from "./References"


function Main(){
  return(
    <main className="px-6 border-l-3 border-neutral-400 flex-1 flex flex-col gap-5">
      <Name />
      <Objective />
      <Experience />
      <References />
    </main>
  )
}

export default Main