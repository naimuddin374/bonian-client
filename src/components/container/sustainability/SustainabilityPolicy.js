import React, { Component } from 'react'

class SustainabilityPolicy extends Component {
    render() {
        // sustainability policy content
        let sus_policy_data = {
            heading: "Sustainability Policy",
            content_one: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore vero error magni repudiandae nisi, repellendus placeat quos earum voluptate itaque cupiditate praesentium optio dolorem quia quo, eveniet sit architecto atque.",
            content_two: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit illo quo est reiciendis facere, quibusdam eius fugiat similique delectus laborum. Qui a est itaque labore praesentium, atque fuga, perspiciatis magni distinctio deleniti quos quis!",
            content_three: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit beatae molestiae ipsam reiciendis quo, et explicabo consequuntur asperiores quis eius voluptate officiis facere fugiat sint illum optio unde! Quo debitis optio qui non culpa aspernatur eligendi beatae deserunt blanditiis voluptatum."
        }
        return (
            <section className="single-sustainability-policy section-padding-bottom">
                <div className="container-fluid">
                    <div className="row sus-policy-align-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="sustainability-policy-heading section-title text-center">
                                <h2>{sus_policy_data.heading}</h2>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="sustainability-policy-content">
                                <p>{sus_policy_data.content_one}</p>
                                <p>{sus_policy_data.content_two}</p>
                                <p>{sus_policy_data.content_three}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default SustainabilityPolicy