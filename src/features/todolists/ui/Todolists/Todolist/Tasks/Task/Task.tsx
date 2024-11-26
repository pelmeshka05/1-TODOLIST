import React, { ChangeEvent, memo } from 'react';
import ListItem from '@mui/material/ListItem';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import { Delete } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { TaskType } from '../../../../../../../app/App';
import { changeTaskStatusAC, changeTaskTitleAC, removeTaskAC } from '../../../../../model/task-reducer';
import { getListItemSX } from '../../../../../../../Todolist.styled';
import { EditableSpan } from '../../../../../../../common/components/EditableSpan';



export type TaskPropsType = {
    task: TaskType
    todolistID: string
}


export const Task = memo(({task, todolistID}: TaskPropsType) =>{
    const dispatch = useDispatch();

    const changeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => dispatch(changeTaskStatusAC(task.id, e.currentTarget.checked, todolistID));

    const removeTaskHandler = () => dispatch(removeTaskAC(todolistID, task.id));

    const updateTaskTitleHandler = (newTitle: string) => dispatch(changeTaskTitleAC( task.id, newTitle, todolistID));

    return(
      <ListItem key={task.id} sx={getListItemSX(task.isDone)}>
      <div>
        <Checkbox
          size="small"
          checked={task.isDone}
          onChange={changeStatusHandler}
        />
        <EditableSpan
          oldTitle={task.title}
          updateTitle={updateTaskTitleHandler}
        />
      </div>
      <IconButton aria-label="delete" onClick={removeTaskHandler}>
        <Delete />
      </IconButton>
    </ListItem>
    );
})