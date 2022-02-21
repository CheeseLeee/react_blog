import Head from "../../components/public/Head/Head";
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
export default connect(mapStateToProps,mapDispatchToProps)(Head)
