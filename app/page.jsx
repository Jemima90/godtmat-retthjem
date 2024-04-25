import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text orange_gradient text-center">
            God mat - Rett hjem
            <br className="max-md:hidden"/>
            <span className="head_texts text-center">
            <p class="italic">Smaker Godt</p>
            </span>
        </h1>
        <p className="desc text-center">
            Vi leverer god mat rett hjem med våre måltids-abonnement og catering tjeneste for dine fester og sammenkomster!
        </p>

        <Feed />
    </section>
      )
}

export default Home
