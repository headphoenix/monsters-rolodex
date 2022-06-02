import { Component } from "react";
import './search-box.css'

class SearchBox extends Component {
    render () {
        console.log(this.props)
        const {onChangeHandler, placeHolder, className} = this.props
        return(
            <div>
                 <input 
     className ={className} 
     placeholder={placeHolder}
     type="search"
     onChange={onChangeHandler}/>
            </div>
        )
    }

}


export default SearchBox;