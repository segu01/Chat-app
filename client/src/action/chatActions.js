export const ADD_MESSAGE = 'ADD_MESSAGE';
export const LIKE_MESSAGE = 'LIKE_MESSAGE';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';

export const addMessage = (message) => ({
  type: ADD_MESSAGE,
  payload: message,
});

export const likeMessage = (messageId) => ({
  type: LIKE_MESSAGE,
  payload: messageId,
});

export const deleteMessage = (messageId) => ({
  type: DELETE_MESSAGE,
  payload: messageId,
});
