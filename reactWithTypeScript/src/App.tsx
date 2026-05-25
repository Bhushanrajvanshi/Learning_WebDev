import './App.css'
import { Card } from './components/Card.tsx'
import { ChaiCard } from './components/ChaiCard.tsx'
import { ChaiList } from './components/ChaiList.tsx'
import { Counter } from './components/Counter.tsx'
import { Form } from './components/Form.tsx'


import type { Chai } from './types.ts'


const menu: Chai[] = [
  {id: 1, name: "Masala", price: 20},
  {id: 2, name: "Ginger", price: 35},
  {id: 3, name: "Lemon", price: 50},
]


function App() {

  return (
    <>
      <div>
        <h1>Vite + React</h1>
        <ChaiCard name="HeadPhone" price={2500}/>
        <ChaiCard name="iPhone" price={90500}/>
        <Counter />
        <ChaiList items={menu}/>
      </div>

      <div>
        <Form onSubmit={(order) => {
          console.log("placed: ", order.name, order.cups);
        }}/>
      </div>

      <div>
        <Card title='Code with TypeScript'
          footer={<button>Order now!</button>}
        />
      </div>
    </>
  )
}

export default App
