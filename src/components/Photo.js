import React, {Component} from 'react';
import {deletePost} from '../actions/PhotowallActions';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Photo extends Component{
  removePost = (id) => {
    this.props.deletePost(id);
  }

  render(){
    const {post} = this.props;
   
    return(

      <div className="figureContainer">
          <Link to={`/single/${post.id}`}>
          <img src={post.imageLink} alt={post.description}  className="photoFigureImage" />
          </Link>
          <p> {post.description} </p>
          <div className="buttonContainer">
          <button  onClick={()=>{this.removePost(post.id)}}> Remove </button>
          </div>
      </div>
    )
  }
}

export default connect(null, {deletePost})(Photo);
