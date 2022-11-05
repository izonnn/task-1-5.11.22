import React, {useState} from 'react';
import {Avatar, Select} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import Participant from "./participant/participant";
import {ReactComponent as YoniIcon} from '../../icons/yoni.svg';
import {ReactComponent as DaganIcon} from '../../icons/dagan.svg';
import {ReactComponent as EdenIcon} from '../../icons/eden.svg';
import {ReactComponent as TomerIcon} from '../../icons/tomer.svg';
import {ReactComponent as TomIcon} from '../../icons/tom.svg';
import {ReactComponent as TomiIcon} from '../../icons/tomi.svg';

const {Option} = Select;

const ParticipantsList = () => {
    const [selectedParticipants, setSelectedParticipants] = useState<{ name: string, icon: JSX.Element }[]>([
            {name: 'Dagan Lev', icon: <YoniIcon/>},
            {name: 'Eden Elian', icon: <DaganIcon/>},
            {name: 'Yoni Yatziv', icon: <EdenIcon/>}
        ]
    );

    const options = [
        {name: 'Tom Levi', icon: <TomIcon/>},
        {name: 'Tomer Cohen', icon: <TomerIcon/>},
        {name: 'Tomi Tomi', icon: <TomiIcon/>}
    ];

    const handleChange = (value: string) => {
        const foundParticipant = options.find(o => o.name === value);

        if (foundParticipant) {
            setSelectedParticipants([...selectedParticipants, foundParticipant])
        }
    };

    const removeParticipant = (participantToRemove: string) => {
        const newArr = selectedParticipants.filter(o => o.name !== participantToRemove);
        setSelectedParticipants(newArr)
    }

    return (
        <div className='participants-list'>
            <div className='header'>
                <div className='title'>Participants</div>
                <Select
                    suffixIcon={<PlusOutlined/>}
                    value={null}
                    className='participants-select'
                    optionLabelProp="label"
                    placeholder='Add client'
                    onChange={handleChange}
                >
                    {options.map(item => (
                        <Option key={item.name} value={item.name} label={item.name} className='select-option'>
                            <Avatar size={20} icon={item.icon} className='icon'/>
                            <span>{item.name}</span>
                        </Option>
                    ))}
                </Select>
            </div>

            {selectedParticipants.map((item) => <Participant key={item.name} name={item.name} icon={item.icon}
                                                             removeParticipant={removeParticipant}/>)}
        </div>
    );
};

export default ParticipantsList;
