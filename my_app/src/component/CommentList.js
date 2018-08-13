import React ,{Component} from 'react'
import Comment from './Comment'

class CommentList extends Component {
    render(){
        const comments =[
            {username :'kim',content :'hello'},
            {username :'kibana', content :'worls'},
            {username :'john' , content : 'good'}
        ]
        return (
            <div>
            {comments.map((comment,i)=><Comment comment={comment} key ={i} />)}
            </div>
        )
    }
}
export default CommentList