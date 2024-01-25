import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Dashboard from './components/dashboard/Dashboard';
import { EvaluationStakeholders } from './components/evaluation/stakeholders';
import { EvaluationProcesses } from './components/evaluation/processes';
import { DataTypes } from './components/evaluation/dataTypes';
import { Steps } from './components/configuration/steps';
import App from './App';



/*const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard/>,
    children: [{
      path: 'configuration',
      element: <Steps/>
    }, {
      path: 'configuration/stakeholders',
      element: <EvaluationStakeholders evaluationPeriodId={evaluationPeriodId}/>
    }, {
      path: 'evaluation',
      element: <span>Evaluation</span>
    }, {
      path: 'evaluation/stakeholders',
      element: <EvaluationStakeholders evaluationPeriodId={evaluationPeriodId}/>
    }, {
      path: 'evaluation/processes',
      element: <EvaluationProcesses evaluationId={evaluationId}/>
    }, {
      path: 'evaluation/data-types',
      element: <DataTypes evaluationId={evaluationId}/>
    }, {
      path: 'evaluation/tools',
      element: <span>Tools</span>
    },{
      path: 'actions',
      element: <span>Actions</span>
    }]
  },
]);*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
