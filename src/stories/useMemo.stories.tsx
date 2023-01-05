import React, {memo, useCallback, useMemo, useState} from "react";

export default {
    title: 'useMemo'
}

export const Example = () => {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);

    let resultA = 1;
    let resultB = 1;
    resultA = useMemo(() => {
        let tempA = 1;
        for (let i = 1; i <= a; i++) {
            let FakeCount = 0;
            while (FakeCount < 1000000) {
                FakeCount++;
            }
            tempA *= i;
        }
        return tempA
    }, [a])

    resultB = useMemo(() => {
        let tempB = 1;
        console.log(b)
        for (let i = 1; i <= b; i++) {
            let FakeCount = 0;
            while (FakeCount < 1000000) {
                FakeCount++;
            }
            tempB *= i;
        }
        return tempB
    }, [b])

    return <>
        <input type="text" value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input type="text" value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result A: {resultA}
        </div>
        <hr/>
        <div>
            Result B: {resultB}
        </div>
    </>

}

const UsersSecrets = (props: { users: string[] }) => {
    console.log('USERS SECRET')
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const Users = memo(UsersSecrets)

export const HelpReactMemo = () => {
    console.log('HelpReactMemo')
    const [counter, setCounter] = useState(0)
    const [users] = useState(['Dimych', 'Valera', 'Artem', 'Dronik']);

    const setCount = () => {
        setCounter(counter + 1)
    };

    const arrayForUsers = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') !== -1)
    }, [users])

    return <>
        <button onClick={setCount}>+</button>
        {counter}
        <Users users={arrayForUsers}></Users>
    </>
}

export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'JS', 'CSS', 'REDUX']);

    const setCount = () => {
        setCounter(counter + 1)
    };

    const addBook = () => {
        setBooks([...books, 'Angular' + new Date().getTime()])
    }

    const memoized = useCallback(addBook, [books])

    return <>
        <button onClick={setCount}>increment</button>
        {counter}
        <Books addBook={memoized}></Books>
    </>
}

interface BooksSecretsParams {
    addBook: () => void;
}

const BooksSecrets = (props: BooksSecretsParams) => {
    console.log('BOOKS SECRET')
    return <div>
        <button onClick={props.addBook}>add book</button>
    </div>
}

const Books = memo(BooksSecrets)

const MarkersSecrets = memo((props: { markers: string[], addMarkers: () => void }) => {
    console.log('MarkersSecrets render');
    return (
        <div>
            <button onClick={() => props.addMarkers()}>add markers</button>
            {props.markers.map((marker, i) => (<div key={i + Date.now()}>{marker}</div>))}
        </div>
    )
})

export const LikeUseCallbacks = () => {
    console.log('LikeUseCallbacks')
    const [counter, setCounter] = useState(0)
    const [markers, setMarkers] = useState(['Red', 'Blue', 'Yellow', 'Green']);

    const setCount = () => {
        setCounter(counter + 1)
    };

    const memoized = useCallback(() => {
        setMarkers([...markers, 'Pink'])
    }, [markers])

    return <>
        <button onClick={setCount}>+</button>
        {counter}
        <MarkersSecrets markers={markers} addMarkers={memoized}></MarkersSecrets>
    </>
}

