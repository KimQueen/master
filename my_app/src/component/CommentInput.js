import React, { Component } from 'react'

class CommentInput extends Component {
    constructor (){
        super()
        this.state ={
            username  : '',
            content : ''
        }
    }
    handleUsernameChange (event){
        this.setState({
            username : event.target.value
        })
    }
    handleUsercontentChange (event){
        this.setState({
            content : event.target.value
        })
    }
    handleSubmit (){
        if(this.props.onSubmit){
           this.props.submit({
            username:this.state.username,
            content:this.state.content,
           })
        }
        this.setState({
            content:'',
            username:'',
        })
    }

    render() {
        return (
            <div>
                <div className='comment-input'>
                    <div className='comment-field'>
                        <span className='comment-field-name'>用户名：</span>
                        <div className='comment-field-input'>
                            <input value = {this.state.username} onChange={this.handleUsernameChange.bind(this)}/>
                        </div>
                    </div>
                    <div className='comment-field'>
                        <span className='comment-field-name'>评论内容：</span>
                        <div className='comment-field-input'>
                            <textarea value = {this.state.content} onChange ={this.handleUsercontentChange.bind(this)}/>
                        </div>
                    </div>
                    <div className = 'comment-field-button'>
                        <button onClick = {this.handleSubmit.bind(this)}>发布</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default CommentInput