import Aside from '../../views/Aside/Aside'
import { connect, Provider } from 'react-redux'
const mapStateToProps = state => {
    console.log(state)
    return {
      
    }
  }
  const mapDispatchToProps = dispatch => {
    return {
  
    }
  } 
export default connect(mapStateToProps,mapDispatchToProps)(Aside)
