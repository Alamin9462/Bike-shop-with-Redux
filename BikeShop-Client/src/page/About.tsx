

const About = () => {
  return (
    <div className="w-full">
      <div className="hero min-h-[50vh] bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://imgd.aeplcdn.com/1200x900/n/cw/ec/123865/g310-rr-right-front-three-quarter-2.jpeg?isig=0&q=80"
            className="max-w-sm rounded-lg shadow-2xl"
            alt="Bike Shop"
          />
          <div className="ml-5">
            <h1 className="text-5xl font-bold text-primary">About Our Bike Shop</h1>
            <p className="py-6 text-base-content">
              Welcome to our bike shop where passion meets performance. We offer a wide selection of high-quality bikes from top brands, parts, and exceptional services to keep your ride smooth.
            </p>
          </div>
        </div>
      </div>


      <div className="py-12 bg-base-100 text-center">
        <h2 className="text-3xl font-semibold text-primary mb-6">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-16">
          <div className="card bg-base-200 shadow-lg">
            <div className="card-body items-center text-center">
              <h2 className="card-title text-secondary">Top Brands</h2>
              <p>We provide bikes from leading global brands with guaranteed authenticity.</p>
            </div>
          </div>
          <div className="card bg-base-200 shadow-lg">
            <div className="card-body items-center text-center">
              <h2 className="card-title text-secondary">Expert Service</h2>
              <p>Our mechanics are trained and experienced to handle all types of repairs.</p>
            </div>
          </div>
          <div className="card bg-base-200 shadow-lg">
            <div className="card-body items-center text-center">
              <h2 className="card-title text-secondary">Easy Booking</h2>
              <p>Book your favorite bikes or services online with just a few clicks.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
