(function(){
  const P=window.ZL_PROGRAM;
  const extras=[
    ['Fox and Bird','A fox walks quietly under a tall tree. It listens with its big ears. A bird flaps its wings and flies to a branch. They see each other and become forest friends.','Who flies to a branch?','the bird'],
    ['Pip’s Weather Window','Pip looks outside in the morning. The sky is cloudy and the trees move in the wind. Pip takes a small umbrella before leaving the nest. Soon, soft rain begins to fall.','What does Pip take?','an umbrella'],
    ['A Tiny Green Surprise','Momo rests in dark soil. Zianna gives the seed water every day. First a root grows down. Then a green shoot grows up. At last, two small leaves open in the sun.','What grows first?','a root'],
    ['Footprints on the Moon','The Moon has no wind and no rain. An astronaut can leave a footprint in the dust. The print may stay there for a very long time. From the Moon, Earth looks blue and bright.','What colour does Earth look?','blue'],
    ['Zianna’s Saturday','Zianna wakes up early on Saturday. She eats eggs and fruit for breakfast. In the afternoon, she rides her bike. After dinner, she reads with Dad and gets ready for bed.','What does Zianna do after dinner?','reads'],
    ['The Lost Pencil','A green pencil is missing in the classroom. Leo asks, “Can you help me, please?” His friend looks beside the chair. The teacher looks under a book. There it is!','Where is the pencil?','under a book'],
    ['The Crunch Test','Zianna tests three foods. The banana is soft and sweet. The carrot is hard and crunchy. The apple is juicy and crunchy. She chooses fruit and vegetables for her snack box.','Which food is soft?','the banana'],
    ['A Map for Momo','Momo starts at the station. It goes straight past the shop and turns left at the park. The museum is beside a tall clock. Momo arrives just in time for the dinosaur show.','What is beside the clock?','the museum'],
    ['Up for Air','Whales live in the ocean, but they breathe air. A whale swims to the surface and blows air from its blowhole. Then it dives into the deep blue water again.','Why does a whale swim up?','to breathe'],
    ['The Brave First Step','Lina feels nervous about joining a new game. Her friend waves and makes room for her. Lina takes one brave step, then another. Soon they are laughing and playing together.','Who helps Lina?','her friend'],
    ['The Helping Machine','Sam invents a machine with two wheels, one arm and a green button. When he pushes the button, the arm lifts a heavy box. The machine moves it safely across the room.','What starts the machine?','the green button'],
    ['The Door in the Story Tree','Zianna finds a tiny golden door in the Story Tree. She puts twelve clues into a star-shaped lock. The door opens, and blank pages float out. “Now write the next adventure,” says Sprig.','What floats out of the door?','blank pages']
  ];
  const readers=[];
  P.weeks.forEach((w,i)=>{
    const u=w.units[0], opts=[u.answer,'a red backpack','three pencils'];
    readers.push({id:`r${i+1}a`,week:i+1,level:w.level,series:'故事树主线',title:`${i+1}. ${w.chapter}`,minutes:4,text:u.story,cn:u.cn,question:u.question,options:opts,answer:u.answer,words:u.words.map(x=>x[0])});
    const e=extras[i];
    readers.push({id:`r${i+1}b`,week:i+1,level:w.level,series:'探险家小书',title:e[0],minutes:5,text:e[1],cn:'先尝试独立阅读；遇到困难时，可以点单词或播放配音。',question:e[2],options:[e[3],'a red backpack','the Moon'],answer:e[3],words:u.words.map(x=>x[0])});
  });
  window.ZL_READERS=readers;
})();
