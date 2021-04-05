import React, {Component} from 'react';
import Photo from './Photo';
import {connect} from 'react-redux';
import addBtn from '../images/plusbtn.png';
import Title from './Title';
import {Link} from 'react-router-dom';

class Photowall extends Component{
  
  
  render(){
    const {posts}= this.props;
      return(
       <div>
       
        <div>
       <Link to="/addpost"><img src={addBtn} className="plusbtn" alt="Click to add post" /> </Link>
      <div className="photoGrid">

        {this.props.posts.map(post=> <Photo post={post} key={post.id} />)}
      </div>
      </div>
      </div>
    ) 
  }
}

const mapStateToProps = (state) => ({
  posts: state.photowall.posts
})

export default connect(mapStateToProps)(Photowall);
