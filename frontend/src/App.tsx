import './App.css';
import ShiftTable from './components/ShiftTable';
import { ShiftData, getSundayList } from './components/types';

function App() {
  const sundayList = getSundayList(2024, 2);
  const data: ShiftData[] = [
    new ShiftData("namae1", sundayList.length),
    new ShiftData("namae2", sundayList.length),
    new ShiftData("namae3", sundayList.length),
  ];

  return (
    <>
    <ShiftTable dates={sundayList} shiftData={data} />
    </>
  )
}

export default App
