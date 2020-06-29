import  React,{ Component } from 'react';
import { Button } from 'reactstrap';

class CommentForm extends Component{
    render(){
        return(
            <div className="row">
            <Button className="fa fa-pencil btn btn-outline-secondary">Submit Comment</Button>
            </div>
        );
    }
    
}

export default CommentForm;