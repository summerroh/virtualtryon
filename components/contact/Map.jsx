const Map = () => {
  return (
    <div className="map-area-one p-30 mt-120 lg-mt-80" data-aos="fade-up">
      <div className="box-layout">
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              className="gmap_iframe"
              src="https://maps.google.com/maps?width=600&height=400&hl=en&q=dhaka collage&t=&z=12&ie=UTF8&iwloc=B&output=embed"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
