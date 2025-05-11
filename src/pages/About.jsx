import Testimonial from "../assets/testimonial.webp";

const About = () => {
  return (
    <section className="about" id="about">
      <h2>About me</h2>
      <p>
        I currently live in Barranquilla, Colombia. Growing up, I always
        imagined myself as a doctor, wanting to make a difference in
        people&apos;s lives. However, life had other plans, and I found myself
        drawn to the world of software and technology. Even though I&apos;m not
        the most outgoing person, I&apos;m passionate about using technology to
        create solutions that improve people&apos;s lives.
      </p>
      <div className="testimonial__container">
        <img
          src={Testimonial}
          alt="We were using pen and paper to create service orders. Emanuel's work not only changed that, it changed the way we do business. Wilson Nuñez - Founder of Genesis Electric"
        />
      </div>
    </section>
  );
};

export default About;
