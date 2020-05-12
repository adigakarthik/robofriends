import React,{Component} from 'react';
import {connect} from  'react-redux';
import CardList from '../Component/cardList';
import SearchBox from '../Component/searchBox';
import Scroll from '../Component/scroll';
import './app.css';
import {debounce} from 'lodash';
import ErrorBoundary from '../Component/errorBoundary';
import {setSearchFeild} from '../actions';

const mapStateToProps = state =>{
    // return{searchField: state.searchRobots.searchFeild}
    // useful when we have more reducers
    return{searchField: state.searchFeild}
}

const mapDispatchToProps = (dispatch) =>{
    //todo- change the event.target.value to text
    return {onSearchChange: (text) => dispatch(setSearchFeild(text))}
    // return {onSearchChange: (event) => dispatch(setSearchFeild(event.target.value))}
}

class App extends Component {
    constructor(){
        super()
        //below can change & should be available at Top-level
        this.state={
            robots: [],
            // searchField: ''
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

    // onSearchChange= (text)=>{
    //     // console.log('inside event state',event.target.value);
    //     // console.log('inside event state',this.state);
    //     // debounce()
    //     this.setState({
    //         searchField: text
    //     }); 
        
    // }

    render(){
    const {robots} = this.state;  
    const {searchField,onSearchChange} = this.props;
    const filteredRobots=
        robots
        .filter(robot =>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
    if (robots.length === 0){
        return (<h1>Loading...</h1>)
    }else{
        return (
            <div className='tc'>
            <h1 className='f1 navy' >RoboFriends</h1>
            {/* <SearchBox searchChange={this.debounceEvent(this.onSearchChange,500)}/> */}
            <SearchBox searchChange={
                debounce(onSearchChange,500)                
                }/>
            {/* <SearchBox searchChange={onSearchChange}/> */}
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

//connect is a higher order components
// like a curry operation
export default connect(mapStateToProps, mapDispatchToProps)(App);