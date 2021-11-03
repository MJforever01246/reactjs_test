
import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    colImage:{
      background:"red"
    }
  }));
  