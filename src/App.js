import './App.css';
import Student from './Student'
import studentsArr from './studentsData'


function App() {
  const students = studentsArr.map((student, idx) => {
    return (<Student 
    name={student.name} 
    bio={student.bio} 
    scores={student.scores} 
    key={idx} />
  )})
  
  
  return (
    <div className="App">
    {students}
    </div>
  );
  }

export default App;
