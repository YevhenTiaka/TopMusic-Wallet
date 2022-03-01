const Register = () => {
  return (
    <>
      <main className="h-screen">
        <section className="m-auto flex flex-col items-center">
          <h1 className="text-center font-extrabold text-5xl mb-10">Inscription</h1>
          <div className="">
            Pour une expérience plus immersive, poursuivez votre inscription <br />
            <p className="indent-12"> directement depuis l’application mobile TopMusic !</p>
          </div>
          <div className="flex mt-6 mb-6">
            <a className="app__store"></a>
            <a className="google__play"></a>
          </div>
          <a className="connecter__link">
            Déjà membre TopMusic ? <u> Se connecter</u>
          </a>
        </section>
      </main>
    </>
  );
};

export default Register;
