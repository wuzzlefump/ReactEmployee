import React, {useState, useEffect} from 'react'
import Jumbotron from 'react-bootstrap/esm/Jumbotron'
import Table from 'react-bootstrap/esm/Table'
import People from '../people.json'

import Employee from './employee'
import Button from 'react-bootstrap/esm/Button'
import Inputter from './input'


function SearchBox(){
const [listState,setList]=useState(People)
const [filter,setFilter]=useState("")
const [error, setError]= useState("")



useEffect(() => {
        setList(People)
        setFilter("")
        setError("")
  }, []);

  const handleInputChange = event => {
    setFilter(event.target.value);
    console.log(filter)
  };

const results = (e) =>{
e.preventDefault()

let arr ={results:[]}
People.results.forEach(item=>{
    if(item.name.first.toLowerCase().includes(filter.toLowerCase())||item.name.last.toLowerCase().includes(filter.toLowerCase())){
        arr.results.push(item)
    }
})
 setList(arr)
}

const alphaFirst = ()=>{
    console.log(listState)
    let container = []
    let answer = {results:[]}
    listState.results.forEach(item=>{
        container.push(item.name.first)
    })
    let alpha = container.sort()

    alpha.forEach(item=>{
        listState.results.forEach(thing=>{
            if(item === thing.name.first){
                answer.results.push(thing)
            }
        })
        setList(answer)
    })

}

const alphaLast = ()=>{

    let container = []
    let answer = {results:[]}
    listState.results.forEach(item=>{
        container.push(item.name.last)
    })
    let alpha = container.sort()

    alpha.forEach(item=>{
        listState.results.forEach(thing=>{
            if(item === thing.name.last){
                answer.results.push(thing)
            }
        })
        setList(answer)
    })

}

    return(<div><Jumbotron>
        <h1>Employee Directory</h1>
        <p>
          Search Employees here
        </p>
        <p>
        <Inputter
          onChange={handleInputChange}
          results={filter} />
        <Button variant="success" onClick={results}>Submit</Button>
        </p>
      </Jumbotron>
      <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th onClick={alphaFirst}>First Name</th>
      <th onClick={alphaLast}>Last Name</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Picture</th>
    </tr>
  </thead>
  <tbody>
      {listState.results.map(item=>(
<Employee first={item.name.first} last={item.name.last} image={item.picture.thumbnail} email ={item.email} phone = {item.phone} num={People.results.indexOf(item)+1}/>
      ))}
  </tbody>
</Table>
      </div>)
}

export default SearchBox;