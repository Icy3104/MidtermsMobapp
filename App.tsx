import React from 'react';
import { JobProvider } from './Context/Jobcontext';
import Jobfinderscreen from './Screens/Jobfinderscreen';

const App = () => {
  return (
    <JobProvider>
      <Jobfinderscreen />
    </JobProvider>
  );
};

export default App;
