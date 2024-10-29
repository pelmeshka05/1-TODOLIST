import TextField from "@mui/material/TextField"
import { ChangeEvent, useState } from "react"

type EditableSpanType = {
    oldTitle: string
    updateTitle: (newTitle: string) => void
}

export const EditableSpan = ({oldTitle, updateTitle}: EditableSpanType) => {
    const [edit, setEdit] = useState(false)
    const [newTitle, setNewTitle] = useState(oldTitle)

    const editModeHandler = () => {
        setEdit(!edit)
        if(edit){
            updateTitleHandler()
        }
        
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }

    const updateTitleHandler = () => {
        updateTitle(newTitle.trim())
    }


    return(
        <>
        {edit
            ?
            <TextField
                    label="Enter a title"
                    variant={"outlined"}
                    value={newTitle}
                    size={"small"}
                    onChange={onChangeHandler}
                    onBlur={editModeHandler}
                  />
            :<span onDoubleClick={editModeHandler}>{oldTitle}</span>
        }
        </>
    );
}