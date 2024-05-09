import React, { Component } from "react";
import AlertBox from "../components/boxes/AlertBox";
import Article from "../components/boxes/Article";
import '../css/App.css';
import '../css/Texts.css';
import ViewHeader from "../components/boxes/ViewHeader";

class About extends Component {
    render() {
        return(    
            <div className="scroll_container">
                <ViewHeader />
                <div className="article_wrapper">
                    <Article 
                        title="início"
                        subtitle="Como comecei a carreira e outras coisas."
                        article="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                    />
                    <Article 
                        title="quem sou eu?"
                        subtitle="Como comecei a carreira e outras coisas."
                        article="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                    />
                </div>
                <AlertBox 
                    title="Hey, recrutador..." 
                    description="Se você estiver procurando pelo meu currículo, é só baixar clicando ali do lado."
                    color="alert_box_message"
                    buttonColor="teal_dark_button"
                />
            </div>
        );
    };
}

export default About;