import Aside from '../../views/Aside/Aside'
import { connect } from 'react-redux'
import { actionNavToOutlet } from "../actions";
const mapStateToProps = state => {
    console.log(state)
    return {
      headNavs:state,
      activeOutlet:state.activeOutlet
    }
  }
  const mapDispatchToProps = dispatch => {
    return {
      onNavToOutlet(index){
        dispatch(actionNavToOutlet(index))
      }
  }
  } 
export default connect(mapStateToProps,mapDispatchToProps)(Aside)
