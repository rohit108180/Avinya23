import React, { useEffect, useState } from 'react'
import Timeline from './timeline';
import "../stylels.css"
import Heading from '../../Heading/Heading';
// import { NavLink } from "react-router-dom";

function Timelinediv() {
    const timeline = [
        [       // day 1
            {
                id: "01",
                name: "Event 1",
                date: "13 March 2022, Saturday"
            },
            {
                id: "02",
                name: "Event 2",
                date: "13 March 2022, Monday"
            },
            {
                id: "03",
                name: "Event 3",
                date: "13 March 2022, Tuesday"
            },
            {
                id: "04",
                name: "Event 4",
                date: "13 March 2022, Wednesday"
            }
        ], [       // day 2
            {
                id: "01",
                name: "Event 5",
                date: "13 March 2022, Saturday"
            },
            {
                id: "02",
                name: "Event 6",
                date: "13 March 2022, Monday"
            },
            {
                id: "03",
                name: "Event 7",
                date: "13 March 2022, Tuesday"
            },
            {
                id: "04",
                name: "Event 7",
                date: "13 March 2022, Tuesday"
            },
            {
                id: "05",
                name: "Event 7",
                date: "13 March 2022, Tuesday"
            },
            {
                id: "06",
                name: "Event 8",
                date: "13 March 2022, Wednesday"
            }
        ], [        // day 3
            {
                id: "01",
                name: "Event 9",
                date: "13 March 2022, Saturday"
            },
            {
                id: "02",
                name: "Event 10",
                date: "13 March 2022, Monday"
            },
            {
                id: "03",
                name: "Event 11",
                date: "13 March 2022, Tuesday"
            },
            {
                id: "04",
                name: "Event 12",
                date: "13 March 2022, Wednesday"
            }
        ], [        // day 3
            {
                id: "01",
                name: "Event 14",
                date: "13 March 2022, Saturday"
            },
            {
                id: "02",
                name: "Event 10",
                date: "13 March 2022, Monday"
            },
            {
                id: "03",
                name: "Event 11",
                date: "13 March 2022, Tuesday"
            },
            {
                id: "04",
                name: "Event 12",
                date: "13 March 2022, Wednesday"
            }
        ], [        // day 3
            {
                id: "01",
                name: "Event 18",
                date: "13 March 2022, Saturday"
            },
            {
                id: "02",
                name: "Event 10",
                date: "13 March 2022, Monday"
            },
            {
                id: "03",
                name: "Event 11",
                date: "13 March 2022, Tuesday"
            },
            {
                id: "04",
                name: "Event 12",
                date: "13 March 2022, Wednesday"
            }
        ]
    ]

    const [activeButton, setActiveButton] = useState("Button 1");
    const [day1, setday1] = useState('block');
    const [day2, setday2] = useState('none');
    const [day3, setday3] = useState('none');
    const [day4, setday4] = useState('none');
    const [day5, setday5] = useState('none');

    var change = (e, btnnm) => {
        if (btnnm === 1) {
            setActiveButton("Button 1");
            setday1("block")
            setday2("none")
            setday3("none")
            setday4("none")
            setday5("none")
        }
        else if (btnnm === 2) {
            setActiveButton("Button 2");
            setday2("block")
            setday1("none")
            setday3("none")
            setday4("none")
            setday5("none")
        }
        else if (btnnm === 3) {
            setActiveButton("Button 3");
            setday3("block")
            setday2("none")
            setday1("none")
            setday4("none")
            setday5("none")
        }
        else if (btnnm === 4) {
            setActiveButton("Button 4");
            setday4("block")
            setday2("none")
            setday1("none")
            setday3("none")
            setday5("none")
        }
        else if (btnnm === 5) {
            setActiveButton("Button 5");
            setday5("block")
            setday2("none")
            setday1("none")
            setday4("none")
            setday3("none")
        }
    }
    return (
        <div class="timeline-div">
            <div className="timeline-div-2">
                <section>
                    <div class="container">
                        {/* <h1 class="title">EVENT SCHEDULES</h1> */}
                        <Heading name="EVENT SCHEDULES" />
                        <div class="">
                            <button class="timeline-btn" style={activeButton === "Button 1" ? { backgroundColor: "transparent", background: "linear-gradient(to right,#5e00bf, #FE68F4)","-webkit-text-fill-color":"transparent","-webkit-background-clip":"text", borderColor: "#9322d0", borderTopRightRadius: "10px", borderTopLeftRadius: "10px", } : {}} onClick={(e) => { change(e, 1) }}>
                                DAY 1
                            </button>
                            <button class="timeline-btn" style={activeButton === "Button 2" ? { backgroundColor: "transparent", background: "linear-gradient(to right,#5e00bf, #FE68F4)","-webkit-text-fill-color":"transparent","-webkit-background-clip":"text", borderColor: "#9322d0", borderTopRightRadius: "10px", borderTopLeftRadius: "10px", } : {}} onClick={(e) => { change(e, 2) }}>
                                DAY 2
                            </button>
                            <button class="timeline-btn" style={activeButton === "Button 3" ? { backgroundColor: "transparent", background: "linear-gradient(to right,#5e00bf, #FE68F4)","-webkit-text-fill-color":"transparent","-webkit-background-clip":"text", borderColor: "#9322d0", borderTopRightRadius: "10px", borderTopLeftRadius: "10px", } : {}} onClick={(e) => { change(e, 3) }}>
                                DAY 3
                            </button>
                            <button class="timeline-btn" style={activeButton === "Button 4" ? { backgroundColor: "transparent", background: "linear-gradient(to right,#5e00bf, #FE68F4)","-webkit-text-fill-color":"transparent","-webkit-background-clip":"text", borderColor: "#9322d0", borderTopRightRadius: "10px", borderTopLeftRadius: "10px", } : {}} onClick={(e) => { change(e, 4) }}>
                                DAY 4
                            </button>
                            <button class="timeline-btn" style={activeButton === "Button 5" ? { backgroundColor: "transparent", background: "linear-gradient(to right,#5e00bf, #FE68F4)","-webkit-text-fill-color":"transparent","-webkit-background-clip":"text", borderColor: "#9322d0", borderTopRightRadius: "10px", borderTopLeftRadius: "10px", } : {}} onClick={(e) => { change(e, 5) }}>
                                DAY 5
                            </button>
                        </div>
                        <div className="timeline-combined">
                            <p style={{ "font-size": "30px" }}>To be announced soon!</p>
                            {/* <div class='day1info text-center' style={{ "display": day1 }} data-aos="zoom-in" >
                                <h1 class='text-3xl font-bold m-20 block'>Day1 info</h1>
                                {timeline[0].map((detail, index) => <Timeline key={index} timeline={index} items={detail} />)}
                            </div>
                            <div class='day2info text-center' style={{ "display": day2 }} data-aos="zoom-in">
                                <h1 class='text-3xl font-bold m-20 block'>Day2 info</h1>
                                {timeline[1].map((detail, index) => <Timeline key={index} timeline={index} items={detail} />)}
                            </div>
                            <div class='day3info text-center' style={{ "display": day3 }} data-aos="zoom-in">
                                <h1 class='text-3xl font-bold m-20 block'>Day3 info</h1>
                                {timeline[2].map((detail, index) => <Timeline key={index} timeline={index} items={detail} />)}
                            </div>
                            <div class='day4info text-center' style={{ "display": day4 }} data-aos="zoom-in">
                                <h1 class='text-3xl font-bold m-20 block'>Day4 info</h1>
                                {timeline[3].map((detail, index) => <Timeline key={index} timeline={index} items={detail} />)}
                            </div>
                            <div class='day5info text-center' style={{ "display": day5 }} data-aos="zoom-in">
                                <h1 class='text-3xl font-bold m-20 block'>Day5 info</h1>
                                {timeline[4].map((detail, index) => <Timeline key={index} timeline={index} items={detail} />)}
                            </div> */}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Timelinediv