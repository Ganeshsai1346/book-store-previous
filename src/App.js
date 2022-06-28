import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import WarningSign from './components/WarningSign';
import MyBadge from './components/MyBadge';
import SingleBook from './components/SingleBook';
import BookList from './components/BookList';
import horrorBooks from "./data/horror.json";




function App() {
  return (
    <div className="App">
      <WarningSign text="Something is wrong!" variant="danger" />
      <MyBadge text="Check!" color="secondary" />
      <SingleBook book={horrorBooks[0]} category="Horror" />
      <BookList books={horrorBooks} />
    </div>
  );
}

export default App;
