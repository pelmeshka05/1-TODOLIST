
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from "@mui/icons-material/Menu";
import Switch from '@mui/material/Switch';
import { useDispatch, useSelector } from 'react-redux';
import { AppRootStateType } from '../../app/store';
import { changeThemeAC, ThemeMode } from '../../app/app-reducer';
import { getTheme } from '../theme/theme';
import { MenuButton } from './MenuButton';


export const Header = () =>{
    const dispatch = useDispatch();

    const themeMode = useSelector<AppRootStateType, ThemeMode>(state => state.app.themeMode)
    const theme = getTheme(themeMode)

    const changeModeHandler = () => {
        dispatch(changeThemeAC(themeMode == "light" ? "dark" : "light"));
      };

    return(
        <AppBar position="fixed">
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <div>
              <MenuButton background={theme.palette.primary.dark}>
                Login
              </MenuButton>
              <MenuButton>Logout</MenuButton>
              <MenuButton>Faq</MenuButton>
              <Switch onChange={changeModeHandler} />
            </div>
          </Toolbar>
        </AppBar>
    );
}