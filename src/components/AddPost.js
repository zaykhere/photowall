import React, {Component} from 'react';
import '../styles/skeleton.css';
import {connect} from 'react-redux';
import {addPost} from '../actions/PhotowallActions';

class AddPost extends Component {
  state={
    imageTitle: '',
    imageLink: ''
  }

  onChange= (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit = (e) => {
   e.preventDefault();
   const {imageLink,imageTitle} = this.state;

   const newPost = {
     id: Date.now(),
     description: imageTitle,
     imageLink: imageLink
   }

   this.props.addPost(newPost);

   this.props.history.push('/');
  }
  render(){
    return(
    <form className="container" onSubmit={this.onSubmit}>
      <label htmlFor="exampleMessage">Image Link</label>
      <input className="container" type="text" placeholder="Enter image link" id="imageInput" name="imageLink" value={this.state.imageLink} onChange={this.onChange} />
      <label htmlFor="exampleMessage">Image Title</label>
      <input className="container" type="text" placeholder="Enter image title" id="imageTitleInput" name="imageTitle" value={this.state.imageTitle} onChange={this.onChange}  />
      <br />
      <input className="button-primary" type="submit" value="Submit" style={{marginTop: '20px'}} />
    </form>
    )
  }
}

export default connect(null, {addPost})(AddPost);
