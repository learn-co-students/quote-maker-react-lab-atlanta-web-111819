export default (state = [], action) => {
  switch(action.type) {
    case 'ADD_QUOTE':
      // console.log('got to the add quote action in the reducer. action:', action)
      return [...state, action.quote]
    case 'REMOVE_QUOTE':
      return state.filter(q => q.id !== action.quoteId)
    case 'UPVOTE_QUOTE':
      // console.log(typeof state)
      // console.log(state)
      // const quote = state.indexOf
      let quote = state.find(q => q.id === action.quoteId)
      quote.votes++
      return state.map(q => q.id === action.quoteId ? quote : q)
    case 'DOWNVOTE_QUOTE':
      quote = state.find(q => q.id === action.quoteId)
      quote.votes > 0 ? quote.votes-- : quote.votes = 0
      return state.map(q => q.id === action.quoteId ? quote : q)
    default:
      return state;
  }
}
