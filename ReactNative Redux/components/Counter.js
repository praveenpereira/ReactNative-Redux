import React, {Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import { increase,decrease,reset} from '../actions/counterActions';


 class Counter extends Component{
     
     increase = () => {
        this.props.increase();
     }
     decrease = () => {
       this.props.decrease();
    }
    reset = () => {
       this.props.reset();
    }
  
 
    render() {
        return(
            <View>
                <TouchableOpacity onPress={()=>this.increase()}>
                <Text style={[styles.text]}>UP</Text>
                </TouchableOpacity>
                <Text style={[styles.text]}>{this.props.count}</Text>
                <TouchableOpacity onPress={()=>this.decrease()}>
                <Text style={[styles.text]}>DOWN</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.reset()}>
                <Text style={[styles.text]}>RESET</Text>
                </TouchableOpacity>
            </View>
        )
      }
    }

const styles = StyleSheet.create({
    text: {
        fontSize : 35,
    },

});

const mapStateToProps = (state) =>{
    return{
        count: state.counter.count
    };

}
const mapDispatchToProps = {
    increase,
    decrease,
    reset
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
