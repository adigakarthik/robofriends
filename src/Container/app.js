import React,{Component} from 'react';
import {connect} from  'react-redux';
import CardList from '../Component/cardList';
import SearchBox from '../Component/searchBox';
import Scroll from '../Component/scroll';
import './app.css';
import {debounce} from 'lodash';
import ErrorBoundary from '../Component/errorBoundary';
import {setSearchFeild,requestRobots} from '../actions';

const mapStateToProps = state =>{
    // return{searchField: state.searchRobots.searchFeild}
    // useful when we have more reducers
    return{
        searchField: state.searchRobots.searchFeild,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) =>{
    //todo- change the event.target.value to text
    return {
        onSearchChange: (text) => dispatch(setSearchFeild(text)),
        onRequestRobots: () => dispatch(requestRobots())
    }
    // return {onSearchChange: (event) => dispatch(setSearchFeild(event.target.value))}
}

class App extends Component {

    componentDidMount(){
        this.props.onRequestRobots();
    }

    render(){
    const {searchField,onSearchChange,robots,isPending} = this.props;
    const filteredRobots=
        robots
        .filter(robot =>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
    if (isPending){
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