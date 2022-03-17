import JSONDATA from './MOCK_DATA.json';
import { useState } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <input placeholder='Search...' onChange={event => setSearchTerm(event.target.value)} />
      {JSONDATA.filter((val) => {
        if (val === '') {
          return val
        } else if (val.first_name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
          return val
        }
      }).map((val, key) => {
        return <div className='user' key={key}><p>{val.first_name}</p></div>
      })}
    </div>
  )
}

export default App;
