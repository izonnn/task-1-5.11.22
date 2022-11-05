import React, {FunctionComponent} from 'react';
import {ReactComponent as PersonalTrainerIcon} from "../../icons/personal-trainer.svg";
import {ReactComponent as ClockIcon} from "../../icons/clock.svg";
import {ReactComponent as FullTankIcon} from "../../icons/full-tank.svg";

interface Props {
    title: string;
    info: string;
    className?: string;
}

export enum FieldName {
    Coach = "date",
    StartTime = "start time",
    Participants = "participants",
}

const iconByText: { [key: string]: JSX.Element } = {
    [FieldName.Coach]: <PersonalTrainerIcon/>,
    [FieldName.StartTime]: <ClockIcon/>,
    [FieldName.Participants]: <FullTankIcon/>,
}

const IconText: FunctionComponent<Props> = ({title, info, className}) => {
    return (
        <div className={`icon-text ${className}`}>
            <div className='icon'>{iconByText[title]}</div>
            <div className='info'>{info}</div>
            <div className='title'>{title}</div>
        </div>
    );
};

export default IconText;
