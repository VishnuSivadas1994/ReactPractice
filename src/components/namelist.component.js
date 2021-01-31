import React from 'react'
import Person from './person'

function NameList() {

    const persons = [
        {
            id: 1,
            name: 'Bob',
            age: 20,
            skill: 'Java'
        },
        {
            id: 2,
            name: 'John',
            age: 40,
            skill: 'C++'
        },
        {
            id: 3,
            name: 'Sam',
            age: 35,
            skill: 'React'
        }
    ]




    //const names = ['Bob', 'John', 'Sam']
    const personList = persons.map(person => (
        <Person key={person.id} person={person}></Person>
    ))
    return (
        <div>
            {personList}
        </div>
    )
}

export default NameList
