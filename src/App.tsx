import './App.css';
import RobotGrid from './components/RobotGrid';

function App() {
  return (
    <>
      <div className='p-4'>
        <h1 className='text-2xl font-normal text-center'>
          You might also like:
        </h1>
      </div>

      <RobotGrid />
    </>
  );
}

export default App;
