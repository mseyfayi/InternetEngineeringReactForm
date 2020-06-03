import React from "react";
import {List} from "@material-ui/core";
import {formType} from "../../global/types";
import HomeFormsListItem from "./HomeFormsListItem";

interface PropsType {
    data: Array<formType>;
}

const HomeFormsList = ({data}: PropsType) =>
    <List component="nav" className='m-3 col-5 border'>
        {data.map(item => <HomeFormsListItem key={item.id} item={item}/>)}
    </List>;

export default HomeFormsList
