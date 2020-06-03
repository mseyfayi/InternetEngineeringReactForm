import React from "react";
import {ListItem, ListItemText, Typography} from "@material-ui/core";
import {formType} from "../../global/types";

interface PropsType {
    item: formType;
}

const HomeFormsListItem = ({item}: PropsType) =>
    <ListItem button component="a"  href={`/form/${item.id}`}>
        <ListItemText className='position-absolute'>
            <Typography variant='overline'>
                {item.id}:
            </Typography>
        </ListItemText>
        <ListItemText>
            <Typography className='text-center'>
                {item.title}
            </Typography>
        </ListItemText>
    </ListItem>;

export default HomeFormsListItem
