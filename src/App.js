import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import HealthRecords from './components/HealthRecords';
import QRCodeGenerator from './components/QRCodeGenerator';
import Marketplace from './components/Marketplace';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/health-records" component={HealthRecords} />
        <Route path="/qr-generator" component={QRCodeGenerator} />
        <Route path="/marketplace" component={Marketplace} />
        <Route path="/profile" component={UserProfile} />
      </Switch>
    </Router>
  );
}

export default App;
