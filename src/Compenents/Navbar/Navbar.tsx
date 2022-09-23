import { AppBar, Avatar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
import { deepOrange } from '@mui/material/colors';

const Navbar = (props: any) => {
    let noteCounter = props.counterState;
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant='h4' component="div" sx={{ flexGrow: 1 }}>React Keep</Typography>
                <Avatar sx={{ bgcolor: deepOrange[500] }} data-testid="user-avatar">{noteCounter}</Avatar>
                {/* <UserNavPill/> */}
            </Toolbar>
        </AppBar>

    );
}

export default Navbar;