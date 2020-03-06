const initState = {
  posts: [
    {id: 1, userId:1, title: "First class", body: "new one out"},
    {id: 2, userId:10,title: "Second class", body: "new one ashj"},
    {id: 3, userId:2,title: "Third class", body: "new skahskj oxjkhakjhxut"},
    {id: 4, userId:4,title: "Fourth class", body: "sakskj sas xaa"},
  ]
}
const rootReducer = (state= initState, action) => {
  let newPosts;
  switch (action.type){
    case "DELETE":
       newPosts = state.posts.filter(post => {return post.id !== action.id})
       return {...state,posts: newPosts}
      break;
    case "FETCH_API":
    console.log('hey');
    break;
    default:
    break;

  }
  return state


}

export default rootReducer
