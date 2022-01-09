import React from 'react';
import './App.css';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="App">
          <p>
            Ei {user.username}, bem vindo ao meu canal!
          </p>
          <button onClick={signOut}>Sair</button>
        </div>
      )}
    </Authenticator>
  );
}

export default App;