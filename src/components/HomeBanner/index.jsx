import Container from "core/Container"
import bannerLogo from "assets/images/logo-white-lg.jpg"
import ButtonLink from "core/ButtonLink"

const HomeBanner = () => {
  return (
    <section className="relative z-40 bg-hero-main py-28 lg:py-40">
      <div className="bg-black -z-1 backdrop-blur-sm bg-opacity-50 absolute top-0 left-0 right-0 bottom-0"></div>
      <Container classes="flex flex-col lg:flex-row items-center justify-center lg:items-stretch flex-wrap">
        <img
          src={bannerLogo}
          alt="Aural Logo"
          width="500"
          className="mb-4 lg:mb-0 lg:pr-5"
        />
        <div className="w-96 flex flex-col items-center lg:items-start">
          <h1 className="text-center lg:text-left text-white font-bold uppercase text-6xl leading-xl">
            50% off new releases
          </h1>
          <ButtonLink path="/" classes="block w-60 mt-8 lg:mt-2 text-center">
            Shop Now
          </ButtonLink>
        </div>
      </Container>
    </section>
  )
}

export default HomeBanner
