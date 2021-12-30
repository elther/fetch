import { RecoilRoot } from 'recoil';
// import Counter2 from './components/Counter2';
// import CharacterCounter from './components/recoilExample/CharacterCounter';
// import FontButton from './components/recoilExample/FontButton';
// import Text from './components/recoilExample/Text';
import TodoList from './components/recoilExample/Todo/TodoList';
// import TestMocking from './components/TestMocking';
// import Counter from './features/counter/Counter';

function App() {
  return (
    <div className="App">
      {/* <TestMocking />
      <Counter /> */}
      <RecoilRoot>
        {/* <FontButton />
        <Text />
        <CharacterCounter /> */}
        <TodoList />
      </RecoilRoot>
    </div>
  );
}

export default App;
