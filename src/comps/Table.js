import React from 'react';

const DATA = [
    {
        name: "Alice Smith",
        age: 25,
        skills: ["Javascript", "Python", "Typescript"]
    },
    {
        name: "Bob Johnson",
        age: 32,
        skills: ["Go", "Rust", "Java"] 
    },
    {
        name: "Carol Williams",
        age: 28,
        skills: ["Python", "Haskell", "Typescript"]
    },
    {
        name: "David Brown",
        age: 35,
        skills: ["Javascript", "Go", "Java"]
    },
    {
        name: "Emma Davis",
        age: 29,
        skills: ["Rust", "Python", "Haskell"]
    },
    {
        name: "Frank Miller",
        age: 31,
        skills: ["Typescript", "Java", "Go"]
    }
]

const Table = ({ style }) => {
    return (
        <table style={style}>
            <tbody>
                {DATA.map((person, index) => (
                    <tr 
                        key={index}
                        style={{
                            borderBottom: '1px solid #ddd',
                            backgroundColor: index % 2 === 0 ? '#ffffff' : '#f9f9f9'
                        }}
                    >
                        <td style={{ padding: '12px' }}>{person.name}</td>
                        <td style={{ padding: '12px' }}>{person.age}</td>
                        <td style={{ padding: '12px' }}>{person.skills.join(', ')}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
