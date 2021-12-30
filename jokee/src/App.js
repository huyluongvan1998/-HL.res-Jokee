import './App.scss';

import brand from './images/joke-brand.svg';
import user from './images/user.svg';

const App = () => {
  return (
    <div classNameName='App'>
      <header>
        <div className='container'>
          <div className='brand'>
            <img src={brand} alt='err' />
          </div>
          <div className='user'>
            <div className='user-profile '>
              <div className='user-profile-title grey-1'>Hancrafted By</div>
              <div className='user-profile-name'>Jack</div>
            </div>
            <div className='user-image'>
              <img src={user} alt='err' />
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className='banner green-bg-1'>
          <div className='banner-content'>
            <h1 className='title white-700'>A joke a day keep doctor away</h1>
            <p className='quote white-400'>
              If you joke wrong way, your teeth have to pay. (Serious)
            </p>
          </div>
        </div>
        <div className='joke'>
          <div className='joke-content'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic ipsa
            reiciendis laborum facere quas deleniti at quisquam amet nobis,
            aspernatur culpa velit alias soluta. Deserunt suscipit dolore velit
            fuga. Reprehenderit quibusdam earum facilis ducimus sequi, labore
            accusamus velit obcaecati laboriosam accusantium nobis et aut,
            excepturi, beatae nostrum quidem. In illo neque dolores odio
            accusamus ratione deleniti, voluptatibus facilis id dignissimos,
            doloremque adipisci cupiditate esse cum debitis, commodi consequatur
            nesciunt eos molestiae. Exercitationem ullam nemo laudantium minus,
            assumenda fuga. Laborum dolores ratione non cumque mollitia corrupti
            sit necessitatibus sequi a ducimus voluptatibus eos, minus error ab,
            aspernatur officia maiores veniam quaerat?
          </div>
          <div className='joke-button'>
            <div className='button btn-primary joke-button-funny'>
              this is Funny!
            </div>
            <div className='button btn-success joke-button-bad'>
              this is not Funny.
            </div>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
