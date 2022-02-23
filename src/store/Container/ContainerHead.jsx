import Head from "../../components/public/Head/Head";
import { connect, Provider } from 'react-redux'
import { actionNavToDiary,actionNavToHome } from "../actions";

  const mapStateToProps = state => {
    
    return {
      headNavs:state.headNavs
    }
  }
  const mapDispatchToProps = dispatch => {
    return {
      onChangeNav(value){
        console.log(value)
        switch(value){
          case 0 :
            dispatch(actionNavToHome())
            break;
            case 1 :
              console.log(111111)
              dispatch(actionNavToDiary())
            break;
            default :
              return 
        }
        
      }
    }
  } 
export default connect(mapStateToProps,mapDispatchToProps)(Head)
