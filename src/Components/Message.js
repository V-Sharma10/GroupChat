import React from 'react'
import {Card, Collapse, CardContent, Typography, CardHeader, CardActions } from '@material-ui/core';

import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function Message(props) {
    const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div>
       
      <Card >
      <CardHeader style={{textAlign:"center"}}
        
        title={props.title}
        // subheader="September 14, 2016"
      />
     
      


      <CardActions disableSpacing>
          
      <Typography style={{width:'90%'}}><code style={{color:'red'}}>{props.author}</code></Typography>
        <IconButton
        //   className={clsx(classes.expand, {
        //     [classes.expandOpen]: expanded,
        //   })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          style={{float:'right'}}
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse 
      in={expanded} 
      timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph> {props.message} </Typography>
         
        </CardContent>
      </Collapse>
    </Card>
    <br/>
    </div>
  )
}
