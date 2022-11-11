import React from 'react'
import DescriptionSec from './components/DescriptionSec/DescriptionSec';
import EventScheduleSec from './components/EventScheduleSec/EventScheduleSec';
import EventScheduleTab from './components/EventScheduleTab/EventScheduleTab';
import Footer from './components/Footer/Footer';
import GetTicket from './components/GetTicket/GetTicket';
import HeaderSection from './components/HeaderSection/HeaderSection';
import Newsletter from './components/Newsletter/Newsletter';
import SliderComponent from './components/Slider/Slider';
import Speakers from './components/Speakers/Speakers';
import Sponsors from './components/Sponsors/Sponsors';
import TimeCounterSec from './components/TimeCounterSec/TimeCounterSec';
import Navbar from './components/Navbar/Navbar';

function Home() {
  return (
    <>
    <Navbar/>
    <HeaderSection/>
    <TimeCounterSec/>
    <DescriptionSec/>
    <Speakers/>
    <EventScheduleTab/>
    <Sponsors/>
    <GetTicket/>
    <EventScheduleSec/>
    <SliderComponent/>
    <Newsletter/>
    <Footer/>
    </>
  )
}

export default Home