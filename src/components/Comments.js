import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addComment} from '../actions/CommentsActions';

class Comments extends Component {
  onSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      id: Date.now(),
      content: e.target.elements.comment.value
    }
    this.props.addComment(newComment);
  }

  render(){
    
    return( <div className="comment">
      {
        this.props.comments.map((comment)=>{
           return( 
            <p key={comment.id}> {comment.content} </p>
           )
        })
      }
      
        <form className="comment-form" onSubmit={this.onSubmit}>
          <input type="text" name="comment" placeholder="Enter comment" />
          <input type="submit" /> 
        </form>
      </div>
    )
  }
}

export default connect(null, {addComment})(Comments);
