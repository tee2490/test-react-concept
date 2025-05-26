import "./App.css";
import Header from "./components/Header";
import StudentList from "./components/StudentList";

export default function App() {
  return (
    <div className="container">
      <Header title = "Computer Science"/>
      <main>
        <StudentList />
      </main>
    </div>
  );
}
