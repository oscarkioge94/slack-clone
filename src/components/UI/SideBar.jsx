import React, { useState, useEffect} from 'react'
import './styles/SideBar.css'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SideBarOptions from '../functionality/SideBarOptions';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import db from '../functionality/firebase';

function SideBar() {
    const[channels, setChannels] = useState([])
    useEffect(() => {
        db.collection('rooms').onSnapshot((snapshot)=>{
            setChannels(snapshot.docs.map(doc => ({
                id: doc.id,
                name: doc.data().name,
            })))
        })

    },[])
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                <h2>Clever Programmer</h2>
                <h3> 
                    <FiberManualRecordIcon />
                    kamau
                </h3>
                </div>
                <CreateIcon />
            </div>
            <SideBarOptions Icon={InsertCommentIcon} title='threads'/>
            <SideBarOptions  title='Youtube'/>
            <SideBarOptions Icon={InboxIcon} title='Mentions & Reactions'/>
            <SideBarOptions Icon={DraftsIcon} title='Saved Items'/>
            <SideBarOptions Icon={BookmarkIcon} title='Channel Browser'/>
            <SideBarOptions Icon={PeopleAltIcon} title='people & user groups '/>
            <SideBarOptions Icon={AppsIcon} title='Apps'/>
            <SideBarOptions Icon={FileCopyIcon} title='File browser'/>
            <SideBarOptions Icon={ExpandLessIcon} title='show less'/>
            <hr/>
            <SideBarOptions Icon={ExpandMoreIcon} title='Channels'/>
            <hr/>
            <SideBarOptions Icon={AddIcon} title='Add Channels'/>
            {/* connect the db and list all the channels */}
            {channels.map(channel => (
                <SideBarOptions title={channel.name} id={channel.id} />
            ))}
            
        </div>
    )
}

export default SideBar
