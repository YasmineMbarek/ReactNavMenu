import React ,{Component} from 'react'

let Thelistsnav=[{list:'Home'}, {list:'Services'},{list:'Contact'}]
let Navtitle =({title})=><li className="list">{title.list}</li>
const Navtitles = ({Titlelist}) =>
         {
             return( Titlelist.map((el, i) =>
           
            <ul  className="NavMenu" >
              <Navtitle key={i} title={el} />
            </ul>
              ) )}
class NavMenu extends Component{
    render(){
        return(
            <div className="container">
                <Navtitles Titlelist={Thelistsnav}/>
            </div>
        );
    }
}
export default NavMenu;



