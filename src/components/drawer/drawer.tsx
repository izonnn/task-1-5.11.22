import React, {FunctionComponent} from 'react';
import {Drawer as AntdDrawer, DrawerProps} from "antd";
import {ReactComponent as EditIcon} from '../../icons/edit.svg';
import {ReactComponent as CalenderIcon} from '../../icons/calendar-delete.svg';
import {ReactComponent as ClassTitleIcon} from '../../icons/class.svg';
import IconText, {FieldName} from "../icon-text/icon-text";
import ParticipantsList from "../participants-list/participants-list";

type Props = DrawerProps & { toggleDrawer: () => void; };

const Drawer: FunctionComponent<Props> = ({
                                              open, toggleDrawer
                                          }) => {

    return (
        <AntdDrawer className='drawer' width={430} open={open} closable={false} maskClosable={true}
                    onClose={toggleDrawer}>
            <div className='action-buttons'>
                <div className='action'>
                    <EditIcon className='edit-icon' width={20} height={20}/>
                    <span className='text'>Edit</span>
                </div>
                <div className='action'>
                    <CalenderIcon className='calender-icon' width={20} height={20}/>
                    <span className='text red'>Cancel class</span>
                </div>
            </div>

            <div className='class-title'>
                <div>
                    <ClassTitleIcon/>
                </div>
                <div className='title'>Workout of the day</div>
            </div>

            <div className='class-details'>
                <div className="icons">
                    <IconText title={FieldName.Coach} info='Tom A'/>
                    <IconText className='center-icon' title={FieldName.StartTime} info='16:15'/>
                    <IconText title={FieldName.Participants} info='3/15'/>
                </div>

                <div className='description'>
                    <div className='title'>You Should Know...</div>
                    <div className='text'>Dagan & Eden which participates in the class have a debt</div>
                </div>
            </div>

            <ParticipantsList/>
        </AntdDrawer>
    );
};

export default Drawer;
