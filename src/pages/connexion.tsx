import Link from 'next/link';

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
              <input className="outline-none h-12 border-b-[1px] mb-4 indent-2" type="text" />
              <label className="text-xs opacity-70 font-bold" htmlFor="">
                MOT DE PASSE
              </label>

              <input className="outline-none h-12 border-b-[1px] indent-2" type="password" />
              <span className="forgot__password">Mot de passe oublié ?</span>
              <a className="flex items-center justify-center cursor-pointer w-[377px] h-[56px] mt-[50px] text-white bg-gradient shadow rounded-full font-bold ">
                SE CONNECTER
              </a>
              <Link href="/enregistrement">
                <a className="flex justify-center mt-[20px] cursor-pointer text-orange">
                  Première fois sur TopMusic ? <u className=" indent-2 "> Inscrivez-vous ? </u>
                </a>
              </Link>
            </div>
            <div className="ml-10">
              <div className="mb-4 mt-6">
                <a
                  className="flex items-center w-[377px] h-[56px] shadow border-[1px] rounded-full font-bold"
                  href="facebook.com"
                >
                  <i className="fa-brands fa-facebook"></i>
                  Continuer avec Facebook
                </a>
              </div>
              <div className="mb-4 mt-6">
                <a
                  className="flex items-center w-[377px] h-[56px] shadow border-[1px] rounded-full font-bold"
                  href="facebook.com"
                >
                  <i className="fab fa-google fa-10x"></i>
                  Continuer avec Google
                </a>
              </div>
              <div className="mb-4 mt-6">
                <a
                  className="flex items-center w-[377px] h-[56px] shadow border-[1px] rounded-full font-bold"
                  href="facebook.com"
                >
                  <i className="fa-brands fa-facebook"></i>
                  Continuer avec Facebook
                </a>
              </div>
              <a className="flex justify-center mt-[25px] font-regular cursor-pointer opacity-50">
                Login par TopChrétien
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;
