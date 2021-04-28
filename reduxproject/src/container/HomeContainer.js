import Home from './../components/Home';
 
import {connect} from 'react-redux'
 
import { addToCart } from './../service/Actions/action';


const mapStateToProps = state => ( {
 data:state.cardItems
})

const mapDispatchTOProps = dispatch => ({
    addToCartHandler:data => dispatch(addToCart(data))
})





 
 export default  connect(mapStateToProps,mapDispatchTOProps)(Home)