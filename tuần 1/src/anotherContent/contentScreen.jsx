import React from "react";
import { Fragment } from "react";
import { useStyles } from "./contentScreen.styles";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
export const ContentScreen = (props) => {
    const classes = useStyles();

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <div className={classes.root}>
            <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '20vh' }} />
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    Some content
                </Grid>
                <Grid item xs={3} className={classes.colImage} >
                    
                        <img
                            src={'http://images5.fanpop.com/image/photos/29200000/PIKACHU-pikachu-29274386-861-927.jpg'}
                            alt="display image" width="100%" />
                        

                </Grid>
                <Grid item xs={3}className={classes.colImage} >
                    <img
                            src={'https://i.vietgiaitri.com/2019/7/8/7-su-that-thu-vi-ve-mewtwo-pokemon-huyen-thoai-manh-vo-doi-dieu-cuoi-cung-se-khien-ban-nga-ngua--fecc5d.png'}
                            alt="display image" width="100%"  />

                </Grid>
                <Grid item xs={3}className={classes.colImage}>

                    <img
                            src={'https://i.vietgiaitri.com/2019/7/8/7-su-that-thu-vi-ve-mewtwo-pokemon-huyen-thoai-manh-vo-doi-dieu-cuoi-cung-se-khien-ban-nga-ngua--2f0372.png'}
                            alt="display image" width="100%"  />

                </Grid>
                <Grid item xs={3} className={classes.colImage}>

                    <img
                            src={'https://i.vietgiaitri.com/2019/7/8/7-su-that-thu-vi-ve-mewtwo-pokemon-huyen-thoai-manh-vo-doi-dieu-cuoi-cung-se-khien-ban-nga-ngua--c6d60b.png'}
                            alt="display image" width="100%"  />

                </Grid>
            </Grid>
        </div>
        </Box>
    );
}