import NavBar from './components/NavBar/NavBar';
import Search from './components/SearchDiv/Search';
import Job from './components/JobDiv/Job';
import Value from './components/ValueDiv/Value';
import Footer from './components/FooterDiv/Footer';




function App () {
  
  return (
      <div className="w-[85%] mx-auto bg-white">
          <NavBar/>
          <Search/>
          <Job/>
          <Value/>
          <Footer/>
      </div>
  )
}

export default App;
