import React, {Component} from 'react';
import Photowall from './components/Photowall';
import AddPost from './components/AddPost';
import EditPost from './components/EditPost';
import Single from './components/Single';
import store from './store';
import {Provider} from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Title from './components/Title';
class App extends Component {
  
  
  render(){
    return(
      <Provider store={store}>
      <BrowserRouter>
      <div>
        <Title />
        <Switch>
          <Route exact path="/" component={Photowall} />
          <Route exact path="/addpost" component={AddPost} />
          <Route exact path="/editpost/:id" component={EditPost} />
          <Route exact path="/single/:id" component={Single} />
          
        </Switch> 
      </div>
      </BrowserRouter>
      </Provider>
    )
  }
}




export default App;
