


export type ThemeMode = 'dark' | 'light'
 
type InitialState = typeof initialState
 
const initialState = {
  themeMode: 'light' as ThemeMode,
}



type ChangeThemeActionType = {
    type: 'CHANGE_THEME',
    themeMode: ThemeMode
}
 
type ActionsType = ChangeThemeActionType



 
export const appReducer = (
  state: InitialState = initialState,
  action: ActionsType
): InitialState => {
  switch (action.type) {
    case 'CHANGE_THEME':
      return {...state,
      themeMode: action.themeMode,}
    default:
      return state
  }
}
 



export const changeThemeAC = (themeMode: string) => {
    return {
        type: "CHANGE_THEME",
        themeMode
    } as const
}