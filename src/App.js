// import { RecoilRoot } from 'recoil';
// import CurrentUserInfo from './components/recoilExample/CurrentUserInfo';
// import Counter2 from './components/Counter2';
// import CharacterCounter from './components/recoilExample/CharacterCounter';
// import FontButton from './components/recoilExample/FontButton';
// import Text from './components/recoilExample/Text';
// import TodoList from './components/recoilExample/Todo/TodoList';
import CharacterCounter from './components/ZustandExample/CharacterCounter';
import Text from './components/ZustandExample/Text';
// import TestMocking from './components/TestMocking';
// import Counter from './features/counter/Counter';

function App() {
  return (
    <div className="App">
      {/* <TestMocking />
      <Counter /> */}
      {/* <RecoilRoot> */}
        {/* <FontButton />
        <Text />
        <CharacterCounter /> */}
        {/* <TodoList />
        <CurrentUserInfo />
      </RecoilRoot> */}
      <Text />
      <CharacterCounter />
    </div>
  );
}

export default App;
