const Login = () => {
  return (
    <>
      <main className="h-screen">
        <section className="m-auto">
          <h1>Connexion</h1>
          <div className="flex">
            <div>
              <label htmlFor=""></label>
              <input type="text" />
              <label htmlFor=""></label>
              <input type="text" />
              <span>Mot de passe oublié ?</span>
              <button></button>
              <span>Première fois sur TopMusic ? Inscrivez-vous ?</span>
            </div>
            <div>
              <div>
                <a href="facebook.com"></a>
              </div>
              <span>Login par TopChrétien</span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;
