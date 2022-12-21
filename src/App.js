import PostsList from './features/posts/PostsList';
import AddPostForm from './features/posts/AddPostForm';
import './App.css';


function App() {
  return (
    <div className="App">
    <AddPostForm/>
      <PostsList></PostsList>
    </div>
  );
}

export default App;
