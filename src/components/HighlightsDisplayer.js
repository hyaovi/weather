import React from 'react';
import { Eye, Droplet, Cloud, Sunset, Sunrise } from 'react-feather';
import { timeConverter } from '../utils';

export default ({ weather: { data, err } }) => {
  return (
    <>
      {err ? (
        <p>Something went wrong</p>
      ) : (
        data && (
          <div className="">
            <h3 className="h3 heading mb-4">Today's Highlights</h3>
            <div className="row no-gutters">
              <div className="col-6 col-md-4 p-3">
                <div className="card px-3 py-1 py-md-5 border-0 text-center text-md-left">
                  <h5 className="h6 text-muted">Visibility</h5>
                  <div className="d-flex flex-wrap flex-column flex-md-row  justify-content-center justify-content-md-between align-items-center">
                    <span className="icon-container">
                      <Eye />
                    </span>
                    <span className="h3">{data.visibility / 1000} km </span>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4 p-3">
                <div className="card px-3 py-1 py-md-5 border-0 text-center text-md-left">
                  <h5 className="h6 text-muted">Wind</h5>
                  <div className="d-flex flex-wrap flex-column flex-md-row  justify-content-center justify-content-md-between align-items-center">
                    <span className="icon-container">
                      <Eye />
                    </span>
                    <span className="h3">{data.wind.speed} m/s </span>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4 p-3">
                <div className="card px-3 py-1 py-md-5 border-0 text-center text-md-left">
                  <h5 className="h6 text-muted">Humidity</h5>
                  <div className="d-flex flex-wrap flex-column flex-md-row justify-content-center justify-content-md-between align-items-center">
                    <span className="icon-container">
                      <Droplet />
                    </span>
                    <span className="h3">{data.main.humidity} %</span>
                  </div>
                </div>
              </div>

              <div className="w-100 d-none d-md-block"></div>

              <div className="col-6 col-md-4 p-3">
                <div className="card px-3 py-1 py-md-5 border-0 text-center text-md-left">
                  <h5 className="h6 text-muted">Cloud</h5>
                  <div className="d-flex flex-wrap flex-column flex-md-row  justify-content-center justify-content-md-between align-items-center">
                    <span className="icon-container">
                      <Cloud />
                    </span>
                    <span className="h3">{data.clouds.all} %</span>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4 p-3">
                <div className="card px-3 py-1 py-md-5 border-0 text-center text-md-left">
                  <h5 className="h6 text-muted">Sunrise</h5>
                  <div className="d-flex flex-wrap flex-column flex-md-row  justify-content-center justify-content-md-between align-items-center">
                    <span className="icon-container">
                      <Sunrise />
                    </span>
                    <span className="h3">
                      {' '}
                      {timeConverter(data.sys.sunrise).time}
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4 p-3">
                <div className="card px-3 py-1 py-md-5 border-0 text-center text-md-left">
                  <h5 className="h6 text-muted">Sunset</h5>
                  <div className="d-flex flex-wrap flex-column flex-md-row  justify-content-center justify-content-md-between align-items-center">
                    <span className="icon-container">
                      <Sunset />
                    </span>
                    <span className="h3">
                      {timeConverter(data.sys.sunset).time}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};
