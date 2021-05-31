import React from 'react';
import './ReactCarousel.css';
class ReactCarousel extends React.Component{
    constructor(){
        super();
        this.state = {
            imgs:[
                '../imgs/carouselItem1.jpeg',
                '../imgs/carouselItem2.jpeg',
                '../imgs/carouselItem3.jpeg'
            ],
            showIndex: 0,
            timer: null,
            show: false
        }
    }
    render(){
        return (
            <div className="ReactCarousel">
                <div className="container"
                onMouseEnter={()=>{this.stop()}}
                onMouseLeave={()=>{this.start()}}
                >
                    <ul className="ul">
                        {
                            this.state.imgs.map((value,index)=>{
                                return (
                                    <li className={index ===this.state.showIndex ? 'show': ''}
                                    key={index}
                                    >
                                        <img src={require(value+'')} alt="CarouselImg" />
                                    </li>
                                )
                            })
                        }
                    </ul>
                    
                </div>
            </div>
        )
    }
}