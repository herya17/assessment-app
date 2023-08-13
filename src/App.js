// import React from 'react';
// import BasicTable from './components/AssessmentList';;

// const App = () => {
//   return (
//     <>
//       <header>
//         <h1>Aplikasi Penilaian Mahasiswa</h1>
//       </header>
//       <main>
//         <div className='assessment-input'>
//           <BasicTable />
//         </div>
//       </main>
//     </>
//   );
// }

// export default App;



// import React, { useState } from 'react';
// import FormPenilaian from './components/AssessmentInput';
// import OutputPenilaian from './components/AssessmentOutput';

// const App = () => {
//   const [penilaian, setPenilaian] = useState([]);

//   const handleDataSubmit = (data) => {
//     setPenilaian(data);
//   };

//   return (
//     <>
//       <header>
//         <h1>Aplikasi Penilaian Mahasiswa</h1>
//       </header>
//       <main>
//         <div className='assessment-input'>
//           <FormPenilaian handleDataSubmit={handleDataSubmit} />
//           {penilaian.length > 0 && <OutputPenilaian penilaian={penilaian} />}
//         </div>
//       </main>
//     </>
//   );
// };

// export default App;


import React, { useState } from 'react';
import FormPenilaian from './components/AssessmentInput';

const App = () => {
  const [score, setScore] = useState([]);

  const handleDataSubmit = (data) => {
    setScore(data);
  };

  const generateOutputJSON = () => {
    const output = {};
    for (let i = 0; i < score.length; i++) {
      const aspect = `aspek_penilaian_${i + 1}`;
      output[aspect] = {};
      for (const key in score[i]) {
        output[aspect][key] = parseInt(score[i][key]);
      }
    }
    return JSON.stringify(output, null, 2);

    // const output = {};
    // for (let i = 0; i < 4; i++) {
    //   const aspect = `aspek_penilaian_${i + 1}`;
    //   output[aspect] = {};
    //   for (let j = 0; j < score.length; j++) {
    //     for (const key in score[j]) {
    //       output[aspect][key] = parseInt(score[j][key]);
    //     }
    //   }
    // }

    // return JSON.stringify(output, null, 2);
  };

  return (
    <>
      <header>
        <h1>Penilaian Mahasiswa</h1>
      </header>
      <main>
        <FormPenilaian onSubmit={handleDataSubmit} />
        {score.length > 0 && (
          <div>
            <h2>Output JSON</h2>
            <pre>{generateOutputJSON()}</pre>
          </div>
        )}
      </main>
    </>
  );
};

export default App;
