import Head from "../../components/public/Head/Head";
import { connect, Provider } from 'react-redux'
import {actionNavToOutlet } from "../actions";
  const mapStateToProps = state => {
    return {
      headNavs:state.navs,
      activeOutlet:state.activeOutlet
    }
  }
  const mapDispatchToProps = dispatch => {
    return {
      onNavToOutlet(activeNavInfo){
        dispatch(actionNavToOutlet(activeNavInfo))
      }
  }
  } 
export default connect(mapStateToProps,mapDispatchToProps)(Head)
