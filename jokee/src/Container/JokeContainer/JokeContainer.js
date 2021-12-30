import React from 'react';

import Banner from '../../Components/Banner/Banner';
import Button from '../../Components/Button/Button';

const JokeContainer = () => {
  return (
    <main>
      <Banner />
      <div className='joke'>
        <div className='joke-content'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic ipsa
          reiciendis laborum facere quas deleniti at quisquam amet nobis,
          aspernatur culpa velit alias soluta. Deserunt suscipit dolore velit
          fuga. Reprehenderit quibusdam earum facilis ducimus sequi, labore
          accusamus velit obcaecati laboriosam accusantium nobis et aut,
          excepturi, beatae nostrum quidem. In illo neque dolores odio accusamus
          ratione deleniti, voluptatibus facilis id dignissimos, doloremque
          adipisci cupiditate esse cum debitis, commodi consequatur nesciunt eos
          molestiae. Exercitationem ullam nemo laudantium minus, assumenda fuga.
          Laborum dolores ratione non cumque mollitia corrupti sit
          necessitatibus sequi a ducimus voluptatibus eos, minus error ab,
          aspernatur officia maiores veniam quaerat?
        </div>
      </div>
      <div className='joke-button'>
        <Button type='primary' content='this is Funny!' />
        <Button type='success' content='this is not Funny.' />
      </div>
    </main>
  );
};

export default JokeContainer;
