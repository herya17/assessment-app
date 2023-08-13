// import React from 'react';

// const OutputPenilaian = ({ penilaian }) => {
//   const downloadJSON = () => {
//     const json = JSON.stringify(penilaian, null, 2);
//     const blob = new Blob([json], { type: 'application/json' });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = 'penilaian.json';
//     a.click();
//     URL.revokeObjectURL(url);
//   };

//   return (
//     <div>
//       <pre>{JSON.stringify(penilaian, null, 2)}</pre>
//       <button onClick={downloadJSON}>Download JSON</button>
//     </div>
//   );
// };

// export default OutputPenilaian;


import React from 'react';

const OutputPenilaian = ({ penilaian }) => {
  return (
    <pre>{JSON.stringify(penilaian, null, 2)}</pre>
  );
};

export default OutputPenilaian;
