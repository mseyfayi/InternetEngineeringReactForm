import React from "react";
import {List, Typography} from "@material-ui/core";
import {formType} from "../../global/types";
import HomeFormsListItem from "./HomeFormsListItem";

interface PropsType {
    data: Array<formType>;
}

const HomeFormsList = ({data}: PropsType) =>
    <List component="nav" className='border'>
        {data.length === 0 ?
            <Typography variant='subtitle2' align='center' color='textSecondary'>
                List is empty
            </Typography> :
            data.map(item => <HomeFormsListItem key={item.id} item={item}/>)}
    </List>;

export default HomeFormsList
