// TODO: Create action creators as defined in tests
export function addQuote(quote = {}) {
    // console.log('got to the add quote action with quote:', quote)
    return {
        type: 'ADD_QUOTE',
        quote
    }
}

export function removeQuote(quoteId) {
    return {
        type: 'REMOVE_QUOTE',
        quoteId
    }
}

export function upvoteQuote(quoteId) {
    return {
        type: 'UPVOTE_QUOTE',
        quoteId
    }
}

export function downvoteQuote(quoteId) {
    // console.log('downvoting')
    return {
        type: 'DOWNVOTE_QUOTE',
        quoteId
    }
}