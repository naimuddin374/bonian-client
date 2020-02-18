import React, { Component } from 'react';

class SustainabilityGoal extends Component {
    render() {
        // sustainability goals data
        let sus_goal_data = {
            heading: "Bonian Fashion Ltd sustainability goals for 2025",
            content_one: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum consequatur eligendi, explicabo corrupti quidem facilis distinctio eos iure eius quam incidunt maiores iste. Expedita iste excepturi quae aperiam, quod necessitatibus cum ab quisquam corporis aliquam nesciunt omnis ea dolorem eveniet voluptatem at quidem unde quia! Veniam sequi dolorem magnam consequuntur.",
            content_two: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptas cumque praesentium corporis ipsam cupiditate. Sunt aliquid ab tenetur impedit reprehenderit magnam, debitis nam excepturi qui quia quisquam ullam dolores eveniet facere ea aspernatur atque id repellendus asperiores inventore! Nam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, voluptatum. Quisquam officia sin"
        }
        return (
            <section className="sutainability-goal section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="section-title text-center sustainability-goal-content">
                                <h1 className="sus-goal-heading pb-3">{sus_goal_data.heading}</h1>
                                <p>{sus_goal_data.content_one}</p>
                                <p>{sus_goal_data.content_two}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default SustainabilityGoal