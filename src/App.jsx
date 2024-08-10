import logo from "./assets/svgs/logo.svg"
function App() {

  return (
    <div className="bg-white h-screen w-screen flex flex-col justify-center items-center gap-6">
      <img src={logo} alt="VEGAN" className="h-[10vh] cursor-pointer" onClick={()=>window.open('https://vegancorner.princekb.tech', '_blank', 'noopener')}/>
      <h1 className="text-5xl font-bold">Welcome to <span className="text-orange-400">Vegan Corner Seller</span></h1>
      <h2 className="text-4xl font-bold animate-bounce">Currently under development !</h2>
      <h2 className="text-4xl">Please Check Again later</h2>
      <a className="hover:text-purple-500 text-orange-400 text-3xl font-bold" href="https://vegancorner.princekb.tech" target="_blank">VEGAN CORNER</a>
    </div>
  )}

export default App
