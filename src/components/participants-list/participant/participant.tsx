import React, {FunctionComponent, useState} from 'react';
import {ReactComponent as WhatsappIcon} from '../../../icons/whatsapp.svg';
import {ReactComponent as TrashIcon} from '../../../icons/trash.svg';
import {Avatar, Button} from "antd";
import classNames from "classnames";

interface Props {
    name: string;
    icon: JSX.Element;
    removeParticipant: (participantToRemove: string) => void;
}

const Participant: FunctionComponent<Props> = ({name, icon, removeParticipant}) => {
    const [isCheckedIn, setIsCheckedIn] = useState<boolean>(false);

    const checkInParticipant = () => {
        setIsCheckedIn(!isCheckedIn);
    }

    return (
        <div className='participant'>
            <div className='icon-name'>
                <Avatar size={35} className='icon' icon={icon}/>
                <div className='name'>{name}</div>
            </div>

            <Button className={classNames('check-in-btn', {checked: isCheckedIn})}
                    onClick={checkInParticipant}>{isCheckedIn ? 'Checked' : 'Check in'}</Button>

            <div className='buttons'>
                <WhatsappIcon className='whatsapp-icon'/>
                <TrashIcon className='trash-icon' onClick={() => removeParticipant(name)}/>
            </div>
        </div>
    );
};

export default Participant;
