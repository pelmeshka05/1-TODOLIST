
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { ChangeTodolistFilter, FilterValuesType } from '../../../../model/todolist-reduser';

import { PropsToDOList } from '../Todolist';
import { ButtonWithMemo } from '../../../../../../common/components/ButtonWithMemo';


export const FilterTasksButtons = ({todolist}: PropsToDOList) =>{

    const dispatch = useDispatch();

    const { id, filter } = todolist

    const changeTaskFilterHandler = useCallback((filter: FilterValuesType, id: string) => {
      dispatch(ChangeTodolistFilter(id, filter));
    },[dispatch]);

      // ERROR ререндер трех, а не двух
  const onAllClickHandler = useCallback(() => changeTaskFilterHandler("all", id),[changeTaskFilterHandler, id])
  const onActiveClickHandler = useCallback(() => changeTaskFilterHandler("active",id),[changeTaskFilterHandler,id])
  const onComplitedClickHandler = useCallback(() => changeTaskFilterHandler("complited",id),[changeTaskFilterHandler, id])


    return(
        <ButtonBox>
      <ButtonWithMemo
      title={"All"}
        color="secondary"
        variant={filter === "all" ? "outlined" : "contained"}
        onClick={onAllClickHandler}
      ></ButtonWithMemo>
        
      <ButtonWithMemo
         title={"Active"}
        color="error"
        variant={filter === "active" ? "outlined" : "contained"}
        onClick={onActiveClickHandler}
      ></ButtonWithMemo>

 
      <ButtonWithMemo
         title={"Complited"}
        variant={filter === "complited" ? "outlined" : "contained"}
        color={"primary"}
        onClick={onComplitedClickHandler}
      ></ButtonWithMemo>
    </ButtonBox>
 
    );
}

const ButtonBox = styled.div`
  display: flex;
  gap: 5px;
`;
