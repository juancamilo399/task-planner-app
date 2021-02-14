import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

export const CardItem = ({description,responsible,status,dueDate}) => {
    

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
                        {description}
                    </Typography>

                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {`${status} - ${dueDate.format('DD-MM-YYYY')}`}
                    </Typography>

                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {responsible.name}
                    </Typography>
            
                </CardContent>
                
            </Card>
        </div>      
    )
}
