import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import Socials from './components/Socials';
import Bio from './components/Bio';
import TimeLine from './components/TimeLine';


// Colors :rgb(34, 34, 34), #1a1a1a
function App(){
  return( 
    <div className="d-flex flex-column sm:w-100 align-items-center justify-content-between text-white" style={{ backgroundColor: 'rgb(34, 34, 34)' }}>
      <div className="d-flex flex-column flex-wrap align-items-center justify-content-center mt-4 mb-5 p-3 w-100" style={{ maxWidth: '650px' }}>
        <div className="d-flex flex-column w-100 mb-4">
          <div className="mt-4 font-monospace">
            <div className="d-flex justify-content-between align-items-center mb-4 ">
              <Intro/>
              <Socials/>
            </div>
          </div>
          <div className='mt-3'>
            <Bio/>
            <Portfolio/>
            <TimeLine/>
          </div>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;