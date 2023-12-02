import React from 'react';
import Iframe from 'react-iframe';

const GoogleMaps = () => {
    return (
        <div>
          <Iframe  
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52931066.60590366!2d-161.89660248572073!3d35.930921244846914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sbd!4v1701496874194!5m2!1sen!2sbd" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Iframe>
        </div>
    );
};
 
export default GoogleMaps;