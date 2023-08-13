// import React, { useState } from 'react';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
// import Button from '@material-ui/core/Button';

// const FormPenilaian = ({ handleDataSubmit }) => {

//   const [penilaian, setPenilaian] = useState([]);

//   const handleInputChange = (event, index) => {
//     const { name, value } = event.target;
//     const newPenilaian = [...penilaian];
//     newPenilaian[index] = { ...newPenilaian[index], [name]: value };
//     setPenilaian(newPenilaian);
//   };

//   const handleAddPenilaian = () => {
//     setPenilaian([...penilaian, { aspek: '', nilai: '' }]);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     handleDataSubmit(penilaian);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       {penilaian.map((item, index) => (
//         <div key={index}>
//           <label>Aspek Penilaian #{index + 1}:</label>
//           <input
//             type="text"
//             name="aspek"
//             value={item.aspek}
//             onChange={(event) => handleInputChange(event, index)}
//           />
//           <label>Nilai:</label>
//           <select
//             name="nilai"
//             value={item.nilai}
//             onChange={(event) => handleInputChange(event, index)}
//           >
//             <option value="">Pilih nilai</option>
//             <option value="0">0</option>
//             <option value="1">1</option>
//             <option value="2">2</option>
//             <option value="3">3</option>
//             <option value="4">4</option>
//             <option value="5">5</option>
//             <option value="6">6</option>
//             <option value="7">7</option>
//             <option value="8">8</option>
//             <option value="9">9</option>
//             <option value="10">10</option>
//           </select>
//         </div>
//       ))}
//       <button type="button" onClick={handleAddPenilaian}>
//         Tambah Aspek Penilaian
//       </button>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default FormPenilaian;



import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


import React, { useState, useEffect } from 'react';
import data from '../utils/utils';

const FormPenilaian = ({ onSubmit }) => {
  const [penilaian, setPenilaian] = useState([data]);
  const [initialize, setInitialize] = useState(true);

  useEffect(() => {
    console.log(penilaian);
  }, [penilaian]);

  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    const newPenilaian = [...penilaian];
    newPenilaian[index] = { ...newPenilaian[index], [name]: value };
    setPenilaian(newPenilaian);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(penilaian);
  };

  if (false) {
    return (
      <form onSubmit={handleSubmit}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell />
              <TableCell align="center">Aspek Penilain 1</TableCell>
              <TableCell align="center">Aspek Penilain 2</TableCell>
              <TableCell align="center">Aspek Penilain 3</TableCell>
              <TableCell align="center">Aspek Penilain 4</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.from({ length: 10 }, (_, i) => i + 1).map((student, studentIndex) => (
              <TableRow key={studentIndex}>
                <TableCell component="th" scope="row">{studentIndex + 1}</TableCell>
                <TableCell align="left">Mahasiswa {student}</TableCell>
                {
                  Array.from({ length: 4 }, (_, i) => i + 1).map((aspect, aspectIndex) => {
                    <TableCell align="center">
                      <select
                        name={`mahasiswa_${aspectIndex}`}
                        value={penilaian[aspectIndex]?.[`mahasiswa_${aspect}`] || ''}
                        onChange={(event) => handleInputChange(event, aspectIndex)}
                      >
                      <option value="">Pilih nilai</option>
                        {Array.from({ length: 10 }, (_, i) => i + 1).map((nilai) => (
                          <option key={nilai} value={nilai}>{nilai}</option>
                        ))}
                      </select>
                    </TableCell>
                  })
                }
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className='btn-container'>
        <Button type='submit'>Submit</Button>
      </div>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell />
              <TableCell align="center">Aspek Penilain 1</TableCell>
              <TableCell align="center">Aspek Penilain 2</TableCell>
              <TableCell align="center">Aspek Penilain 3</TableCell>
              <TableCell align="center">Aspek Penilain 4</TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
      {Array.from({ length: 4 }, (_, i) => i + 1).map((aspek, aspekIndex) => (
        <div key={aspekIndex}>
          <h3>Aspek Penilaian {aspek}</h3>
          {Array.from({ length: 10 }, (_, mhsIndex) => mhsIndex + 1).map((mahasiswa, mhsIndex) => (
            <div key={mhsIndex}>
              <label>Mahasiswa {mahasiswa}</label>
              <select
                name={`mahasiswa_${mahasiswa}`}
                value={penilaian[aspekIndex]?.[`mahasiswa_${mahasiswa}`] || ''}
                onChange={(event) => handleInputChange(event, aspekIndex)}
              >
                <option value="">Pilih nilai</option>
                {Array.from({ length: 10 }, (_, i) => i + 1).map((nilai) => (
                  <option key={nilai} value={nilai}>{nilai}</option>
                ))}
              </select>
            </div>
          ))}
        </div>
      ))}
      
      {/* <button type="button" onClick={handleAddPenilaian}>
        Tambah Aspek Penilaian
      </button> */}
      
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormPenilaian;
