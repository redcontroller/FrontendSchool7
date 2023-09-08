import React from 'react';


const arr = [1,2,3,4,5,6];

const items = [
    { id: 1, name: 'Apple', desc: '빨간건 사과' },
    { id: 2, name: 'Banana', desc: '바나나는 길어' },
    { id: 3, name: 'Cherry', desc: '체리는 비싸' }
];

function ItemList() {
    const itemsList = items.map(({id, name, desc}) => {
        return (
            <React.Fragment key={id}>
                <dt>{name}</dt>
                <dd>{desc}</dd>
            </React.Fragment>
        )
    });

    return (
        <dl>
            {itemsList}
        </dl>
    )
}

function ReactFragment() {
    const myArr = arr.map((item) => {
        return (
            <React.Fragment key={item}>
            <h1>숫자</h1>
            <h2>{item}</h2>
        </React.Fragment>
        )
    });

    const myFruit = items.map((fruit)=> {
        return (
            <React.Fragment>
                <dt style={{fontSize:'30px', fontWeight:'bold'}}>{fruit.name}</dt>
                <dd>{fruit.desc}</dd>
            </React.Fragment>
        )
    });


    return (
        <React.Fragment className="hello">
            <ItemList />
            {/* <h1>hello</h1>
            <h2>라이켓!!</h2>
            <dl>
                {myFruit}
            </dl>
            <dl>
                {myArr}
            </dl> */}
        </React.Fragment>
    );
}

export default ReactFragment;