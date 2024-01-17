import { RecoilRoot } from "recoil"
import { Layout } from "./components/Layout"
import { Paragraph } from "./components/Paragraph"


function App() {
  
  return (<div>
    <RecoilRoot>
      <Layout />
      <Paragraph />
    </RecoilRoot>
  </div> 
  )
}

export default App
