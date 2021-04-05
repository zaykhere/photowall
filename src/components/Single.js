import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getPosts} from '../actions/PhotowallActions';
import Photo from './Photo';
import Comments from './Comments';

class Single extends Component {
  // componentDidMount(){
  //   this.props.getPosts();
  // }

  
  render(){
    const {match,posts} = this.props;
    const id= match.params.id;
    const post = posts.find((post)=> post.id==id)
  return(
    <div className="single-photo">
        <div className="single-photo-photo">
        </div>
        <Photo post={post} />
        <div className="single-photo-comments">
        <Comments comments={this.props.comments} />
        </div>
   
    </div>
  )
}
}

const mapStateToProps = (state) => ({
  posts: state.photowall.posts,
  comments: state.comments.comments
}) 


export default connect(mapStateToProps,{getPosts})(Single);
