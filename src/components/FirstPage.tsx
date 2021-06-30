import React from 'react';
import SvgBg from '../common/svgs/SvgBg';
import {kokyuImage1, kokyuLogo1, kokyuLogo2, Ttl01, Ttl1} from './Links';

const FirstPage = () => {
  return (
    <div id="first">
      <div className="firstInn">
        <div className="objectImage expandUp">
          <img src={kokyuImage1} alt=""/>
        </div>
        <div className="object">
          <div className="objectInn">
            <div className="ttl1 fadeIn">
              <img className="ttl1In" src={Ttl01} alt=""/>
            </div>
            <div className="ttl2 fadeIn2">
              <p>KOKYU presents</p>
            </div>
            <div className="ttl3 fadeIn3">
              <p>
                <img src={Ttl1} alt="Ttl1"/>
              </p>
            </div>
            <div className="ttl4 fadeIn3">
              <p>Backshan YOGA</p>
            </div>
          </div>
        </div>
        <div className="obfectLogo1 fade">
          <img src={kokyuLogo1} alt=""/>
        </div>
        <div className="obfectLogo2 fade">
          <img src={kokyuLogo2} alt=""/>
        </div>
      </div>
      <SvgBg/>
      <div className="cont" style={{opacity: 1}}>
        <div className="rRect default" style={{width: '25%'}}></div>
        <div className="rRect yell" style={{width: '25%'}}></div>
        <div className="rRect mar" style={{width: '25%'}}></div>
        <div className="rRect next" style={{width: '25%'}}></div>
      </div>
    </div>
  );
};

export default FirstPage;
