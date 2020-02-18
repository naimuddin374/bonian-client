import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const some_download_files = [
    {
        file_name: "Download Your Product Details Reports",
        download_file: require("../../../src/assets/images/pdf.pdf")

    },
    {
        file_name: "Download Your Product Details Reports",
        download_file: require("../../../src/assets/images/pdf.pdf")

    },
    {
        file_name: "Download Your Product Details Reports",
        download_file: require("../../../src/assets/images/pdf.pdf")

    },
    {
        file_name: "Download Your Product Details Reports",
        download_file: require("../../../src/assets/images/pdf.pdf")

    },
    {
        file_name: "Download Your Product Details Reports",
        download_file: require("../../../src/assets/images/pdf.pdf")

    },
    {
        file_name: "Download Your Product Details Reports",
        download_file: require("../../../src/assets/images/pdf.pdf")

    },
    {
        file_name: "Download Your Product Details Reports",
        download_file: require("../../../src/assets/images/pdf.pdf")

    },
    {
        file_name: "Download Your Product Details Reports",
        download_file: require("../../../src/assets/images/pdf.pdf")

    },
    {
        file_name: "Download Your Product Details Reports",
        download_file: require("../../../src/assets/images/pdf.pdf")

    },
]

// files looping
const get_single_files = some_download_files.map( (single_files,i) =>{
    return(
        <div className="single-file-download" key={i}>
            <div className="single-download-file-content">
                <h5 className="download-file-name-title">{single_files.file_name}</h5>
            </div>
            <div className="download-files-button-area">
                <Link to={single_files.download_file} className="download-btn btn"><i className="fa fa-download"></i> Download</Link>
            </div>
        </div>
    )
});

class DownloadFiles extends Component {
    render() {
        return (
            <section className="download-files-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            {get_single_files}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default DownloadFiles;

