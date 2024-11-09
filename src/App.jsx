import './App.css'
import Navigation from "./components/Navigation.jsx";
import Body from "./components/Body.jsx";
import {useState} from "react";


function App() {
    const [user, setUser] = useState({
        name: 'Monster',
        avatar: 'https://gravatar.com/avatar/000?d=monsterid'
    });

    const [stats, setStats] = useState({
        followers: 10,
        following: 100
    });

    const changeAvatar = url => {
        setUser({ ...user, avatar: url });
    }

    return (
        <div className={'app'}>
            <Navigation changeAvatar={changeAvatar} user={user}/>
            <Body changeAvatar={changeAvatar} user={user} stats={stats}/>
        </div>
    )
}

export default App
