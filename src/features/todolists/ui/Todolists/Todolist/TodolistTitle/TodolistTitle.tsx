
import React, { useCallback } from 'react';
import IconButton from '@mui/material/IconButton';
import { Delete } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { ChangeTodolistTitle, RemoveTodolist } from '../../../../model/todolist-reduser';
import { EditableSpan } from '../../../../../../common/components/EditableSpan';
import { PropsToDOList } from '../Todolist';


export const TodolistTitle = ({todolist}: PropsToDOList) =>{

    const dispatch = useDispatch();

    const { id, title, filter } = todolist;
    
    const removeTodolistHandler = () => {
      dispatch(RemoveTodolist(id));
    };

    const updateTodolistTitleHandler = useCallback(
        (newTitle: string) => {
          dispatch(ChangeTodolistTitle(id, newTitle));
        },
        [dispatch]
      );

    return(
        <>
        <EditableSpan oldTitle={title} updateTitle={updateTodolistTitleHandler} />
    <IconButton
      size="small"
      aria-label="delete"
      onClick={removeTodolistHandler}
    >
      <Delete />
    </IconButton>
        </>
    );
}