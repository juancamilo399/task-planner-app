import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

export const CardItem = ({text,priority,dueDate}) => {
    

    const useStyles = makeStyles({
        root: {
            width: "350px",
            minWidth: 275,
            display: "inline-block"
        },
        title: {
            fontSize: 14,
        }
    });

    const classes = useStyles();

    return (
        <div style={{textAlign:"center"}}>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    
                    <Typography variant="h5" component="h2">
                        {text}
                    </Typography>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {priority}
                    </Typography>
                    
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {dueDate}
                    </Typography>
                </CardContent>
                
            </Card>
        </div>

        
    )
}
