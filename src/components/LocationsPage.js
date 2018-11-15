import React from 'react';

import '../sass/main.scss';
import Tokyo1 from '../img/tokyo1.jpg';
import Tokyo2 from '../img/tokyo2.jpg';

const LocationsPage = () => {
    return(
    <div>
        <div className="location__header">
            <div className="location__title">Locations</div><br/>
            <div className="location__hours">
                <div className="location__day">Monday - Thursday</div>
                <div className="location__time">11:30am - 11:30pm</div>
                <div className="location__day">Friday</div>
                <div className="location__time">11:30am - 1:30am</div>
                <div className="location__day">Saturday</div>
                <div className="location__time">12:00pm - 1:30am</div>
                <div className="location__day">Sunday</div>
                <div className="location__time">12:00pm - 9:30pm</div>
            </div>
        </div>
        <div className="location__listing--1">
            <div className="location__listing--1-title">Shinjuku</div>
            <div className="location__listing--1-address">Japan, 169-0073 Tōkyō-to, Shinjuku-ku, Hyakuninchō</div>
            <img src={Tokyo1} className="location__listing--image" alt="tokyo1"/>
        </div>
        <div className="location__listing--2">
            <div className="location__listing--2-title">Nippori</div>
            <div className="location__listing--2-address">Higashinippori, 荒川区 Arakawa-ku, Tōkyō-to 116-0014, Japan</div>
            <img src={Tokyo2} className="location__listing--image" alt="tokyo2" />
        </div>
    </div>
    );
}

export default LocationsPage;