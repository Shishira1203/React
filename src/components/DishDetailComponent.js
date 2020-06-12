import React, { Component } from 'react';
import { Card, CardImg,  CardBody, CardText, CardTitle } from 'reactstrap';
import moment from 'moment';
class DishDetail extends Component {
    renderDish(dish) {
        if (dish!=null){
            return(
                <Card className="col-12 col-md-5 m-1">
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle><strong>{dish.name}</strong></CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        } else {
            return(
                <div></div>
            );
        }
    }

    renderComments(array) {
        if(array.length !== 0) {
            return (
                <div className="col-122 col-md-5 m-1">
                    <h4>Comments</h4>
                    {array.map(comment => (
                        <ul className="list-unstyled">
                            <li>
                                <p>{comment.comment}</p>
                                <p>-- {comment.author} , {moment(comment.date).format('MMM DD, YYYY')}</p>
                            </li>
                        </ul>
                    )
                    )}
                </div>);
        } else {
            return(
                <div></div>
            );
        }
    }
    render() {
        return(
            <div className="row">

                {this.renderDish(this.props.selectedDish)}
                {this.renderComments(this.props.selectedDish.comments)} 
            </div>
        );
    }
}
export default DishDetail;