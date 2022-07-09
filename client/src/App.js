import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { Search } from './components/search/Search';
import { UserList } from './components/user-list/UserList';

import './App.css';

import { useEffect, useState } from 'react';

const baseUrl = 'http://localhost:3005/api';

function App() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch(`${baseUrl}/users`)
            .then(res => res.json())
            .then((data) => {
                setUsers(data.users);
            })
    }, []);

    return (
        <div>
            <Header />

            <main className="main">
                <section className="card users-container">
                    <Search />

                    <UserList users={users} />
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default App;
