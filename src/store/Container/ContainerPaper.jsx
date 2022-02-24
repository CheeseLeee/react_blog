
import { connect } from 'react-redux'
import Paper from '../../views/Paper/Paper';
import {actionNavToOutlet } from "../actions";
  const mapStateToProps = state => {
    
    return {
      activeOutlet:state.activeOutlet
    }
  }
  const mapDispatchToProps = dispatch => {
    return {
        onNavToOutlet(index){
            dispatch(actionNavToOutlet())
        }
    }
  } 
export default connect(mapStateToProps,mapDispatchToProps)(Paper)
