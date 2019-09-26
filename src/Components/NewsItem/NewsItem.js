import React from "react";

class NewsItem extends React.Component{

    state = {
        btnChange: false,
        btnText: "Contact Now",
        favorite: this.props.favorite,

    }

    onBtnClick = () => {
        if(this.state.btnChange){
            this.setState({
                btnChange:false,
                btnText: "Contact Now"
            });
        }
        else{
            this.setState({
                btnChange:true,
                btnText: "X"
            });
        }
    }

    onFavorivteClick = () =>{
        this.setState(() => {
          return {
            favorite: !this.state.favorite
          };
        });
    
        this.props.onFavoriteChange();
      }

    render() {
        const {id ,title, description, image, url} = this.props;
        
        let btnStyle = "";
        let btnStar = "";
        if(this.state.btnChange){
            btnStyle = "btn btn-danger"
        }
        else{
            btnStyle = "btn btn-default"
        }
        if(this.state.favorite){
            btnStar = "fa fa-star-o fa-2x star";
        }
        else{
            btnStar = "fa fa-star fa-2x star";
        }

        
        console.log(this.props);
        return (
            <div>
                <div class="card">
                    <img class="card-img-top" src={image}/>
                    <div class="card-body">
                        <h4>{title}</h4>
                        <p>{description}</p>
                        <a href={url} class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        
        );
    };
    
}
export default NewsItem;