import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CommentState {
  comments: IComment[];
}

const initialState: CommentState = {
  comments: [],
};

const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    addComment(state, action: PayloadAction<IComment>) {
      state.comments.push(action.payload);
    },
  },
});

export const { addComment } = commentSlice.actions;
export default commentSlice.reducer;
