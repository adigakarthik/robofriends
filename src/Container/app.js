import React,{Component} from 'react';
import CardList from '../Component/cardList';
import SearchBox from '../Component/searchBox';
import Scroll from '../Component/scroll';
import './app.css';
import {debounce} from 'lodash';
import ErrorBoundary from '../Component/errorBoundary';

class App extends Component {
    constructor(){
        super()
        //below can change & should be available at Top-level
        this.state={
            robots: [],
            searchField: ''
        }
    }

    // //debounce any event
    // debounceEvent(...args){
    //     this.debouncedEvent = debounce(...args);
    //     return e =>{
    //         e.persist();
    //         return this.debouncedEvent(e);
    //     }
    // }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users =>this.setState({robots: users}))
        // this.setState({
        //     robots: robots
        // })
    }

    onSearchChange= (text)=>{
        // console.log('inside event state',event.target.value);
        // console.log('inside event state',this.state);
        // debounce()
        this.setState({
            searchField: text
        }); 
        
    }

    render(){    
    const filteredRobots=
        this.state.robots
        .filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });
    if (this.state.robots.length === 0){
        return (<h1>Loading...</h1>)
    }else{
        return (
            <div className='tc'>
            <h1 className='f1 navy' >RoboFriends</h1>
            {/* <SearchBox searchChange={this.debounceEvent(this.onSearchChange,500)}/> */}
            <SearchBox searchChange={
                debounce(this.onSearchChange,500)                
                }/>
            <Scroll>
            <ErrorBoundary>
                <CardList robots={filteredRobots}/>
            </ErrorBoundary>
            </Scroll>
            </div>
        );

    }
        
}
}

export default App;