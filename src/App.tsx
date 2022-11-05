import React, {useState} from 'react';
import 'antd/dist/antd.min.css';
import './App.scss';
import Drawer from "./components/drawer/drawer";

function App() {
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    }

    return (
        <>
            <div className="bg" onClick={toggleDrawer}/>
            <Drawer open={isDrawerOpen} toggleDrawer={toggleDrawer}/>
        </>
    );
}

export default App;
