

// export default function Home() {
//   return (
//     <section>
//       <div>
//         <h2>Jobe Camp Main Contant</h2>

//       </div>
//     </section>
//   );
// }

import { currentUser } from '@clerk/nextjs/server';
import React from 'react';

const  Home = async () => {

  const user = await currentUser();

  console.log(user, 'currentUser');
  

  return (
    <div>
      <h2>Jobe Camp Main Contant </h2>
      <p>amar</p>
     
      <div> amader bngla</div>
    </div>
  );
};

export default Home;
