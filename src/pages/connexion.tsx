const Login = () => {
  return (
    <>
      <div className="left__bg_back"></div>
      <div className="left__bg_front"></div>

      <main className="h-screen">
        <section className="m-auto">
          <h1 className="text-center font-extrabold text-5xl mb-20">Connexion</h1>
          <div className="flex justify-center">
            <div className="flex flex-col mr-10">
              <label className="text-xs opacity-70 font-bold" htmlFor="">
                ADRESSE EMAIL
              </label>
              <input className="outline-none h-12 border-b-2 mb-4 indent-2" type="text" />
              <label className="text-xs opacity-70 font-bold" htmlFor="">
                MOT DE PASSE
              </label>

              <input className="outline-none h-12 border-b-2 indent-2" type="password" />
              <span className="forgot__password">Mot de passe oublié ?</span>
              <a className="connecter__btn">SE CONNECTER</a>
              <a className="register__btn">
                Première fois sur TopMusic ? <u> Inscrivez-vous ? </u>
              </a>
            </div>
            <div className="ml-10">
              <div className="mb-4 mt-6">
                <a className="social__link" href="facebook.com">
                  <i className="fa-brands fa-facebook"></i>
                  Continuer avec Facebook
                </a>
              </div>
              <div className="mb-4 mt-6">
                <a className="social__link" href="facebook.com">
                  <i className="fab fa-google fa-10x"></i>
                  Continuer avec Google
                </a>
              </div>
              <div className="mb-4 mt-6">
                <a className="social__link" href="facebook.com">
                  <i className="fa-brands fa-facebook"></i>
                  Continuer avec Facebook
                </a>
              </div>
              <a className="topchretien__login">Login par TopChrétien</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;
