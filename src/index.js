import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from './contex/context';
import { SpeechProvider } from '@speechly/react-client';

ReactDOM.render(
  <SpeechProvider appId="5480afe3-0730-4aa6-a93b-f59526e2b388" language="en-US">

  <Provider>
    <App />
    </Provider>
    </SpeechProvider>
  ,
  document.getElementById('root')
);
