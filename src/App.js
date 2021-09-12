import Expenses from './components/Expenses'
import './index.css'
function App(props) {
  const expenses = [
    { id: 'e1', title: 'Toilet paper', amount: 94.12, date: new Date(2020, 8, 13), },
    { id: 'e2', title: 'new TV', amount: 799.49, date: new Date(2021, 3, 11), },
    { id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 3, 27), },
    { id: 'e4', title: 'Toilet paper', amount: 450, date: new Date(2021, 6, 11), }]
  return (
    <>
    <Expenses items={expenses}/>
    </>
  )


}

export default App;
