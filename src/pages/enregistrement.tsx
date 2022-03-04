const Register = () => {
  return (
    <>
      <div className="left__bg_back"></div>
      <div className="left__bg_front"></div>
      <div className="right__bg_back"></div>
      <div className="right__bg_front"></div>
      <main className="h-screen">
        <section className="m-auto flex flex-col items-center mt-40">
          <h1 className="text-center font-extrabold text-5xl mb-10">Inscription</h1>
          <div className="">
            Pour une expérience plus immersive, poursuivez votre inscription <br />
            <p className="indent-12"> directement depuis l’application mobile TopMusic !</p>
          </div>
          <div className="flex mt-6 mb-6">
            <a className="bg-[url('./images/appstore-button.png')] w-[125px] h-[40px] mr-4 cursor-pointer bg-no-repeat "></a>
            <a className="bg-[url('./images/playstore-button.png')] w-[125px] h-[40px] ml-4 cursor-pointer bg-no-repeat"></a>
          </div>
          <a className="text-orange">
            Déjà membre TopMusic ? <u> Se connecter</u>
          </a>
        </section>
      </main>
    </>
  );
};

export default Register;
