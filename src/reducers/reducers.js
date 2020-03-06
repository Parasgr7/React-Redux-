const initState = {
  posts: [
    {id: 1, name: "First class", description: "new one out"},
    {id: 2, name: "Second class", description: "new one ashj"},
    {id: 3, name: "Third class", description: "new skahskj oxjkhakjhxut"},
    {id: 4, name: "Fourth class", description: "sakskj sas xaa"},
  ]
}
const rootReducer = (state= initState, action) => {
  let newPosts;
  switch (action.type){
    case "DELETE":
       newPosts = state.posts.filter(post => {return post.id != action.id})
       return {...state,posts: newPosts}
      break;

  }
  return state


}

export default rootReducer
