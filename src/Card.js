import React from 'react'

const Card = () => {
    let mydata = [
        {
            title: 'Earning',
            text: '$198K ',
            backcolor: 'url(https://www.solidbackgrounds.com/images/125x125/125x125-mint-green-solid-color-background.jpg)',
            icon: <i className="fa-solid fa-dollar-sign fa-lg " style={{ color: "#0a6619" }}></i>,
            no: <p style={{ color: "#0a6619" }}><i className="fa-solid fa-arrow-up" ></i>37.8%<span style={{ color: "black" }}>this month</span></p>,


        },
        {
            title: 'Orders',
            text: '$2.4K ',
            backcolor: 'url(https://th.bing.com/th/id/R.8d4887fb595092235f9e4da09df5fef8?rik=9Z5YdBoXilepnQ&riu=http%3a%2f%2fwww.solidbackgrounds.com%2fimages%2f2560x1600%2f2560x1600-pale-lavender-solid-color-background.jpg&ehk=Y7%2bi5xHyb8zbxmA0tG0U6Fl9lmVjDlzHo7%2b3fCQXlWs%3d&risl=&pid=ImgRaw&r=0)',
            icon: <i className="fa-regular fa-file-lines fa-lg" style={{ color: "#af1286" }}></i>,
            no: <p style={{ color: "#f5242e" }}><i className="fa-solid fa-arrow-down" ></i>2%<span style={{ color: "black" }}>this month</span></p>,
        },
        {
            title: 'Balance',
            text: '$2.4K ',
            backcolor: 'url(https://th.bing.com/th/id/R.7903d6fd0397080d0a98a32f807ae615?rik=HKwL0PdyG1lyRA&riu=http%3a%2f%2fwww.solidbackgrounds.com%2fimages%2f2880x1800%2f2880x1800-light-sky-blue-solid-color-background.jpg&ehk=Gm141oxIDKzlHNSvQvPwdQZUoD8UZBc7%2fXMYhC4TmRs%3d&risl=&pid=ImgRaw&r=0)',
            icon: <i className="fa-solid fa-database fa-lg" style={{ color: "#1660df" }}></i>,
            no: <p style={{ color: "#f5242e" }}><i className="fa-solid fa-arrow-down" ></i>2%<span style={{ color: "black" }}>this month</span></p>,
        },
        {
            title: 'Total Sales',
            text: '$89K ',
            backcolor: 'url(https://th.bing.com/th/id/OIP.Z0ZLzaMepN8lBi58U1hrIQAAAA?pid=ImgDet&w=288&h=288&rs=1)',
            icon: <i className="fa-solid fa-basket-shopping fa-lg" style={{ color: "#ee1b1b" }}></i>,
            no: <p style={{ color: "#0a6619" }}><i className="fa-solid fa-arrow-up" ></i>11%<span style={{ color: "black" }}>this month</span></p>,
        }
    ]
    return (
        <div classname="container-fluid " style={{ paddingTop: "50px", paddingBottom: "50px" }}>
            <div className='row'>

                {
                    mydata.map((data) => (


                        <div className='col-lg-3 col-md-6 col-12  '>
                            <div className="card mb-3 pb-3 pt-3 ps-2 border-0" style={{maxWidth:"540"}}>
                                <div className="row g-0">
                                    <div className=" col-md-5 col-5 mt-2 ">
                                        <div className="rounded-circle  text-dark p-4 d-inline-block" style={{ backgroundImage: `${data.backcolor}` }}>
                                            <h1>{data.icon}</h1>
                                        </div>
                                    </div>
                                    <div className=" col-md-7 col-7 ">
                                        <div className="card-body">
                                            <h6 className="card-title ">{data.title}</h6>
                                            <h4 className="card-text">{data.text}</h4>
                                            <p className="card-text mt-2" style={{ fontSize: "13px" }}>{data.no}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>








                    ))
                }
            </div>
        </div>
    )
}

export default Card;
