import React, {useState} from "react";

export default {
    title: 'React.Memo',

}

const NewMessagesCounter = (props: any) => {
    return <div>{props.count}</div>
}

const UsersSecrets = (props: { users: string[] }) => {
    console.log('USERS')
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}
const Users = React.memo(UsersSecrets)
export const Example1 = () => {
    console.log('example')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem'])
    const setCount = () => {
        setCounter(counter + 1)
    }
    const addUser = () => {
        users.push('Ilya');
        setUsers(users)
    }
    return <>
        <button onClick={setCount}>+</button>
        <button onClick={addUser}>add user</button>
        <NewMessagesCounter count={counter}></NewMessagesCounter>
        <Users users={users}></Users>
    </>
}
