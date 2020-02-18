import React, { Component } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
class CounterUp extends Component {
    state = {
        didViewCountUp: false
    };
    onVisibilityChange = isVisible => {
        if (isVisible) {
            this.setState({ didViewCountUp: true });
        }
    }
    render() {
        let data = [
            { icon: require("../../assets/images/intersting_fact/day.png"), count: 70000, description: 'Basic items/Day' },
            { icon: require("../../assets/images/intersting_fact/doller.png"), count: 13, description: 'Lac USD, Export Last Year' },
            { icon: require("../../assets/images/intersting_fact/style.png"), count: 65, description: 'Styles completed' },
            { icon: require("../../assets/images/intersting_fact/award.png"), count: 90, description: 'Winning awards' }
        ];
        return (
            <section className="interesting-fact-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="section-title section-title-padding text-center counter-up-heading-section">
                                <h2 className="text-white">Interesting Facts</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {
                            data.map((single_Fact, i) => (
                                <div className="col-lg-3 col-md-6" key={i}>
                                    <div className="single-fact">
                                        <div className="fact-icon">
                                            <img src={single_Fact.icon} alt="intersting fact" />
                                        </div>
                                        <div className="interesting-fact-content">
                                            <h4 className="count">
                                                <VisibilitySensor onChange={this.onVisibilityChange} offset={{ top: 10 }} delayedCall>
                                                    <CountUp end={this.state.didViewCountUp ? single_Fact.count : 0} />
                                                </VisibilitySensor>
                                            </h4>
                                            <h5 className="fact-name">{single_Fact.description}</h5>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        )
    }
}
export default CounterUp