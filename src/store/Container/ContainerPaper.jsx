
import { connect } from 'react-redux'
import Paper from '../../views/Paper/Paper';
import {actionNavToOutlet } from "../actions";
  const mapStateToProps = state => {
    console.log(state,'paper')
    return {
      asideNav:state
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
