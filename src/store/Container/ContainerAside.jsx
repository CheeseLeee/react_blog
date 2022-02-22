import Aside from '../../views/Aside/Aside'
import { connect, Provider } from 'react-redux'

const mapStateToProps = state => {
    console.log(state)
    return {
      headerNav:state.headerNav
    }
  }
  const mapDispatchToProps = dispatch => {
    return {
      onChangeNav(){
        dispatch({type:'navToDiary'})
      }
    }
  } 
export default connect(mapStateToProps,mapDispatchToProps)(Aside)
