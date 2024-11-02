import { Button, ButtonProps } from "@mui/material"
import { memo } from "react"



export const ButtonWithMemo = memo(({title,...props}: ButtonProps) => {
    return(
        <Button {...props}>{title}</Button>
    )
})