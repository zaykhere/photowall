import React, {Component} from 'react';
import '../styles/skeleton.css';
import {connect} from 'react-redux';
import {getPost, editPost} from '../actions/PhotowallActions';

class EditPost extends Component{

  state={
    imageTitle: '',
    imageLink: ''
  }
  componentDidMount(){
    const {id} = this.props.match.params;
    this.props.getPost(id);
    this.setState({ 
      imageLink: this.props.post.imageLink,
      imageTitle: this.props.post.description
      })
  }



  onChange= (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit = (e) => {
   e.preventDefault();
   const {imageLink,imageTitle} = this.state;
   

   const editedPost = {
     id: Date.now(),
     description: imageTitle,
     imageLink: imageLink
   }

   this.props.editPost(editedPost);

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

const mapStateToProps = (state) => ({
  post: state.photowall.post
})

export default connect(mapStateToProps,{getPost,editPost})(EditPost);
