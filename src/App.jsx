//import logo from './logo.svg';
import './App.css';
import Title from './components/Title.jsx'
import MenuItems from './components/MenuItems.jsx'

//function Title (){
  //return (
//<h1> Hello REact from title component!!!</h1>
  //)
//}
function App() {
    const name ="Jhon";
    const lastname = "Doe";
    const x = true;

    return (
        <div className ="App">
          <MenuItems/>
            <h1>Hello React!</h1>
            <Title />
            <h2>Hello {name} {lastname}  </h2>
            <h2> {x ? "yes" : "No"}</h2>
        
        </div> 
    );
}

export default App;
