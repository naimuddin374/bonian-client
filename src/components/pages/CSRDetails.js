import React, { Component } from 'react';

import CSRDetailsBread from "../../components/container/breadcrumb/CSRDetailsBread";

class CSRDetails extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <React.Fragment>
                <CSRDetailsBread/>
                <section className="csr-details-page section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="csr-details-inner-content">
                                    <h2 className="pb-4">Fresh Drinking Water Supply For The Employees</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde qui dolor modi consequuntur excepturi, dolorem quia? Totam non exercitationem incidunt at officia maiores atque error, ipsam praesentium quos ratione nemo ea illum nihil ad qui, eum eos cum distinctio dolor? Repellat, numquam, praesentium sit neque unde rerum esse quis provident aliquid, hic repellendus eum aspernatur tempora. Pariatur laboriosam ullam maiores repellat earum illum, omnis dolore necessitatibus suscipit? Neque optio ad fugit pariatur velit iusto nam quas aut reiciendis, ut quia numquam quasi, accusantium consectetur. Sed doloremque corporis aliquam asperiores? Maxime, nesciunt animi eligendi non autem debitis necessitatibus assumenda aut praesentium. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, illo? Placeat dignissimos delectus quisquam, ipsam impedit magni dolores ratione sit, ipsum et sint distinctio. Aliquam, distinctio! Facere, quam! Quasi in obcaecati illum beatae libero cumque maiores velit eos labore expedita, praesentium odio voluptate, saepe impedit vero facilis quod quia autem alias nisi! Laborum natus, quaerat porro eum autem exercitationem rem aliquid optio nihil error sapiente aspernatur reprehenderit saepe mollitia ipsum ea deleniti, accusamus iste magni facilis doloribus beatae? Similique magni, incidunt explicabo quae perspiciatis corrupti fuga. Quas labore minima quo, sed in, aliquam aspernatur sequi et recusandae libero fuga dignissimos nobis modi maiores harum iste illo! Odio, suscipit pariatur eos veritatis eaque quisquam nesciunt similique nulla asperiores veniam inventore quas culpa autem perferendis possimus obcaecati voluptatibus eius laudantium molestiae blanditiis laborum accusamus quam! Iure nesciunt voluptas nihil dolores, asperiores officia quia! Suscipit et sapiente est minima laboriosam blanditiis at recusandae minus quis aperiam repellat provident eaque ipsum accusamus sint natus soluta amet eveniet odit voluptas, vero omnis laudantium? Magni aliquid cumque, ipsam porro repellendus adipisci nulla? Sunt obcaecati est architecto eius iusto odit, magnam asperiores laborum voluptates suscipit nisi aliquid blanditiis totam, provident tempore ab eligendi quis fuga. Vero, eos.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}
export default CSRDetails;