import './App.css'
import Counter from './components/Counters/Counter'
import ToggleButton from './components/ToggleButton'
import DynamicInput from './components/DynamicInput'
import ShowHide from './components/ShowHide'
import RegistrationForm from './components/RegistrationForm'
import MultipleCounters from './components/Counters/MultipleCounters'
import LikeDislike from './components/LikeDislike/LikeDisklike'
import TabNavigation from './components/TabNavigation'
import CounterWithLimits from './components/Counters/CounterWithLimits'
import Timer from './components/Timer'
import DerivedState from './components/DerivedState'
import CounterWithHistory from './components/Counters/CounterWithHistory'
import TodoList from './components/TodoList'
import DynamicBackgroundColor from './components/DynamicBackgroundColor'
import ShoppingCart from './components/ShoppingCart'

function App() {

  return (
    <main className='flex_center flex-gap-n-margin'>
        <Counter/>
        <ToggleButton/>
        <DynamicInput/>
        <ShowHide/>
        <RegistrationForm/>
        <MultipleCounters/>
        <TodoList/>
        <LikeDislike/>
        <TabNavigation/>
        <DynamicBackgroundColor/>
        <CounterWithLimits/>
        <Timer/>
        <ShoppingCart/>
        <DerivedState/>
        <CounterWithHistory/>
    </main>
  )
}

export default App
