import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import $ from "jquery";

const Machineries_Data = [
    {
        name: "plain machine",
        set: "50 set"
    },
    {
        name: "over lock machine ",
        set: "40 SET"
    },
    {
        name: "flat lock cylindered",
        set: "15 set"
    },
    {
        name: "flat lock flatbed",
        set: "10 set"
    },
    {
        name: "feed of the ARM ",
        set: "02 SET"
    },

    {
        name: "button stitch",
        set: "02 set"
    },

    {
        name: "button hole",
        set: "02 set"
    },

    {
        name: "RIB cutting",
        set: "02 set"
    },
    {
        name: "clothes cutting",
        set: "03 set"
    },

    {
        name: "iron with steam boiler",
        set: "10 (IRON)"
    },

    {
        name: "vacum iron table",
        set: "10 SET"
    },

    {
        name: "RE CONING",
        set: "01 set"
    },
    {
        name: "88 KBA auto power supply",
        set: "01 set"
    },
    {
        name: "Metal detector machine",
        set: "01 set"
    },
    {
        name: "flat lock flatbed",
        set: "10 set"
    },
    {
        name: "feed of the ARM ",
        set: "02 SET"
    },
];

// get data 

class MachineriesList extends Component {
    // same height bonian glance
    componentDidMount() {
        function useSameHeight(el) {
            var max = 0;
            el.css('height', 'auto');
            el.each(function () {
                max = Math.max(max, $(this).height());
            }).height(max);
            return el;
        }
        $(window).resize(function () {
            useSameHeight($('.single-machineries-wrapper'));
        }).resize();
    }
    render() {
        return (
            <section className="machinerieslist-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="section-title section-title-padding text-center relative">
                                <h2 className="text-white">Machineries List</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">

                        {
                            Machineries_Data.map((single_machineries, i) => (

                                <Fade up key={i}>
                                    <div className="col-lg-3 col-md-4">
                                        <div className="single-machineries-wrapper">
                                            <div className="single-machineries-content text-center">
                                                <span>{single_machineries.name}</span>
                                                <h3>{single_machineries.set}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </Fade>
                            ))
                        }

                    </div>
                </div>
            </section>
        )
    }
}
export default MachineriesList;