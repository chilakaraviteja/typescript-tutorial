type HeroProps = {
  children: React.ReactNode;
  name: string;
};

const Hero = ({ children, name }: HeroProps) => {
  return (
    <>
      <h3>
        Hi Hero {name} {children}
      </h3>
    </>
  );
};

export default Hero;
