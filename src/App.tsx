import { FC, useState } from 'react'
import './App.css'

//typescript is a superset of javascript, it adds types to javascript. Typescript is compiled to javascript.
//typescript is a typed language, it requires types to be declared
//the types are: string, number, boolean, enum, interface, function, array, object, void, null, undefined, any, never, unknown

//when declaring a variable, the type must be declared
const book: string = 'The way of kings'
const numberOfCopies: number = 10
const isAvailable: boolean = true

//title is declared as a string in this function component
function Heading({ title }: { title: string }) {
  return <h1>{title}</h1>
}

//arrow functions require FC to be imported
const SubHeading: FC<{ title: string }> = ({ title }) => {
  return <h2>{title}</h2>
}

//an enum is a list of values that can be used as a type HairColor.Brown is equal to 'Your hair is brown'
enum HairColor {
  Blonde = 'Your hair is blonde',
  Brown = 'Your hair is brown',
  Black = 'Your hair is black',
}

// interface InAppProps, email is optional, it defines an object
interface InAppProps {
  name: string
  age: number
  email?: string
  hairColor?: HairColor
}

//function component Person, takes in props of type InAppProps
const Person: FC<InAppProps> = ({ name, age, email }) => {
  //set state for country, <string> is the type of the state and must be declared
  const [country, setCountry] = useState<string>('')

  //types are used to define the return type of a function
  type NameType = 'Pedro' | 'John' | 'Jane'
  //nameFromType is a string that can only be equal to "Pedro", "John", or "Jane"
  // "George" will throw an error
  const nameFromType: NameType = 'Jane'

  return (
    <div>
      <h1>{name}</h1>
      <h2>{age}</h2>
      <h3>{country}</h3>
      <input
        placeholder="Where are you from?"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
      <h3>{HairColor.Blonde}</h3>
      <h4>Best friend: {nameFromType}</h4>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Heading title="Hello World" />
      <SubHeading title="this is nuts" />
      <Person name="John" age={30} />
    </div>
  )
}

export default App
