import React, { Component } from 'react';
import {connect} from 'react-redux';
import Card from './Card.js'

class Post extends Component  {

  render(){
    const {posts} = this.props;
    const postList = posts.length ? (
      posts.map(post =>{
        return(<Card post={post}/>)
      } )
    ) : "No posts"
    return(
        <React.Fragment>
         <h2>POSTS</h2>
         {postList}
        </React.Fragment>
      )}
}
const mapStateToProps=(state,action)=>{
  return{
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Post);
