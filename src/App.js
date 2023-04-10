import './App.css';
import Amplify from 'aws-amplify';
import awsConfig from './aws-exports';
import { Authenticator } from '@aws-amplify/ui-react';

Amplify.configure(awsConfig);

function App() {
  return (
    <Authenticator> 
      <div className="App">
        <h1>Welcome to Amplify AW</h1>
        <signOut></signOut>
      </div>
    </Authenticator>
  );  
}

export default App;
