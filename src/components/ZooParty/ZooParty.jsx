import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import zooPartySrc from './ZooParty.png';
import {
    CssBaseline
  } from '@material-ui/core/';

const useStyles = makeStyles({
    zooParty: {
        background: 'black'
    },
    image: {
        width: '100vw',
        height: 'calc(100vh - 5px)',
    }
});

export default function ZooParty(props) {
    const classes = useStyles();
    const c = {
        title: `Default title`,
        backgroundColor: `#ccc`,
    }
    const image = {
        src: zooPartySrc,
        alt: 'Zoo Party',
      };
    const { storybook } = props;
    if (storybook){
        if (storybook.title) c.title = storybook.title;
        if (storybook.backgroundColor) c.backgroundColor = storybook.backgroundColor;
    }
    return (
        <React.Fragment>
            <CssBaseline />
            <div className={classes.zooParty}>
                <img className={classes.image}
                    src={image.src} 
                    alt={image.alt} />
            </div>
        </React.Fragment>
        
    );
}



/*
    style={{
        // border: '1px solid red',
        color: 'white',
    }}
*/