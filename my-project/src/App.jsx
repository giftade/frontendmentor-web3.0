import { Header } from "./components/Header";
import { LeftMain } from "./components/LeftMain";
import { RightMain } from "./components/RightMain";
import { BottomContent } from "./components/BottomContent";

function App() {
  return (
    <div>
        <Header/>
        <main className="flex flex-col mx-2 md:mx-3 md:flex-row md:justify-evenly pt-16">
         <LeftMain/>
         <RightMain/>
        </main>
        <BottomContent/>
      </div>
  );
}

export default App;
