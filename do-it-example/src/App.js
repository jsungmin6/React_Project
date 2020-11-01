import './App.css';
import MyComponent from './components/MyComponent'

//MyComponent 라는 component를 불러와 사용. mycomponent에 name="message" 라는 값을 넘겨줌. 파라미터 처럼.
function App() {
  return (
    <div className="body">
      <MyComponent name="message" />
    </div>
  );
}

export default App;

