//  Home-register-login

        <section class="homeLogin container">
            <div class="proTest">
                <h1 class="homeLoginTitle">Pro Test</h1>
                <p class="homeText"><span class="homeAccent">[</span> We will help you find weak points in knowledge
                    so
                    that you can strengthen it. We will show
                    you
                    what is relevant to know for a <span class="homeAccent">QA Engineer</span> and will try to make the
                    learning process more
                    diverse_ <span class="homeAccent">]</span></p>
            </div>

            <div class="formRegister">
                <p class="authorizeTitle">You can use your Google Account to authorize:</p>
                <button class="buttonGoogle" type="button"></button>
                <p class="authorizeTitle">Or login to our app using e-mail and password:</p>
                <form action="" class="formLogin">
                    <div class="formField">
                        <input class="formInput " type="email" name="mail" id="mail" autocomplete="on"
                            placeholder="E-mail">
                        <label class="formLabel formEmail" for="mail"></label>
                    </div>
                    <div class="formField">
                        <input class="formInput " type="password" name="password" id="password"
                            placeholder="Password" />
                        <label class="formLabel formPassword" for="password"></label>
                    </div>
                </form>
                <div class="signButtons">
                    <button type="submit" class="button signin">Sign in</button>
                    <button type="submit" class="button buttonActive">Sign up</button>
                </div>
            </div>
        </section>

/* Home-register-login */
.homeLoginTitle {
  font-weight: 800;
  letter-spacing: 0.02em;
}

.homeText {
  color: var(--textColor);
  font-weight: 500;
  letter-spacing: 0.02em;
}

.homeAccent {
  color: var(--primaryBlackColor);
  font-weight: 700;
  letter-spacing: 0.02em;
}

.formRegister {
  background-color: var(--primaryWhiteColor);
  box-shadow: var(--boxShadowModal);
}

.buttonGoogle {
  display: inline-block;
  margin-bottom: 30px;
  padding: 17px 38px;
  width: 159px;
  height: 51px;

  background-color: #fafafa;
  background-image: url(./img/google.png);
  background-size: 84px 18px;
  background-repeat: no-repeat;
  background-position: center center;

  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.1));
  border: none;
  cursor: pointer;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

.buttonGoogle:focus,
.buttonGoogle:hover {
  transform: scale(1.06);
}

.authorizeTitle {
  font-weight: 500;
  line-height: 1, 2;
}

.formInput {
  padding: 20px 25px;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.02em;
  width: 100%;

  border: 1px solid #bbbbbb;
}

.formLabel {
  display: block;
}

.signButtons {
  display: flex;
}

.button {
  display: block;
  margin-left: auto;
  margin-right: auto;

  color: var(--primaryBlackColor);
  background-color: var(--primaryWhiteColor);
  border: 1px solid #bbbbbb;
  outline: none;

  font-weight: 700;
  letter-spacing: 0.02em;
  text-transform: uppercase;

  cursor: pointer;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

.button:focus,
.button:hover {
  transform: scale(1.06);
}

.signin {
  margin-right: 20px;
}

.buttonActive {
  color: var(--primaryWhiteColor);
  background-color: var(--OrangeColor);
  border: 1px solid var(--OrangeColor);
}

@media screen and (max-width: 767px) {
  .homeLogin {
    padding: 39px 20px 50px 20px;
  }

  .homeLoginTitle {
    font-size: 20;
    line-height: 1.2;
    margin-bottom: 10px;
  }

  .homeText {
    font-size: 12px;
    line-height: 1.7;
    margin-bottom: 30px;
  }

  .homeAccent {
    font-size: 12px;
    line-height: 1.7;
  }

  .formRegister {
    padding: 30px 20px;
    text-align: center;
  }

  .authorizeTitle {
    margin-bottom: 20px;
    font-size: 10px;
    line-height: 1, 2;
  }

  .formEmail {
    margin-bottom: 20px;
  }

  .formPassword {
    margin-bottom: 20px;
  }

  .button {
    padding: 10px 15px;
    width: 109px;
    height: 60px;

    font-size: 10px;
    line-height: 1.2;
  }
}

@media screen and (min-width: 768px) {
  .homeLogin {
    padding: 80px 114px 70px 114px;
  }

  .homeLoginTitle {
    font-size: 30px;
    line-height: 1.2;
    margin-bottom: 20px;
  }

  .homeText {
    font-size: 16px;
    line-height: 2.25;
    margin-bottom: 50px;
  }

  .homeAccent {
    font-size: 16px;
    line-height: 2.25;
  }

  .formRegister {
    padding: 62px 57px;
    text-align: left;
    width: 539px;
  }

  .authorizeTitle {
    margin-bottom: 30px;
    font-size: 14px;
    line-height: 1, 2;
  }

  .formInput {
    width: 423px;
  }

  .formEmail {
    margin-bottom: 24px;
  }

  .formPassword {
    margin-bottom: 40px;
  }

  .button {
    display: block;
    padding: 23px 46px;
    margin: 0;

    width: 202px;
    height: 60px;

    font-size: 15px;
    line-height: 1.25;
  }

  .signin {
    margin-right: 20px;
  }
}

@media screen and (min-width: 1280px) {
  .homeLogin {
    display: flex;
    padding: 99px 125px;
  }

  .proTest {
    margin-right: 105px;
  }

  .homeLoginTitle {
    margin-top: 71px;
    font-size: 34px;
  }

  .homeText {
    font-size: 18px;
    line-height: 2;
    margin-bottom: 0;
  }

  .homeAccent {
    font-size: 18px;
    line-height: 2;
  }

  .formRegister {
    padding: 62px 40px;
    text-align: left;
    width: 505px;
  }
}