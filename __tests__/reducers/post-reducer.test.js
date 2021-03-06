import postReducer from './../../src/reducers/post-reducer';

describe('postReducer', () => {

  let action;
  const samplePostData = {
    author: 'Johnny',
    title: 'FUggin sweeet',
    textArea: 'Bruh',
    numberOfUpvotes: 13,
    numberOfDownvotes: 12,
    timeStamp: 1500000000000,
    id: 0
  };

  test('test', () => {
    const { author, title, textArea, numberOfUpvotes, numberOfDownvotes, timeStamp, id } = samplePostData;
    action = {
      type: 'ADD_POST',
      author: author,
      title: title,
      textArea: textArea,
      numberOfUpvotes: numberOfUpvotes,
      numberOfDownvotes: numberOfDownvotes,
      timeStamp: timeStamp,
      id: id
    };
    expect(postReducer({}, action)).toEqual({
      [id]: {
        author: author,
        title: title,
        textArea: textArea,
        numberOfUpvotes: numberOfUpvotes,
        numberOfDownvotes: numberOfDownvotes,
        timeStamp: timeStamp,
        id: id
      }
    });
  });

});
