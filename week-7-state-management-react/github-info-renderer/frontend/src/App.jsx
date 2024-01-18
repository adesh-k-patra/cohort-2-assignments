import { RecoilRoot } from "recoil"
import { GithubInfo } from "./components/GithubInfo"
import { InputUsername } from "./components/InputUsername"


function App() {
  return (<div>
    <RecoilRoot>
      <InputUsername />
      <GithubInfo />
    </RecoilRoot>
  </div>)
}

export default App
