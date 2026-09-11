(function(){
  const scripts=[
    ['Sprig’s Animal Case','Sprig','Help me solve the animal case.',[
      ['Which animal can fly?',['bird','fly'],['A bird can fly.','The bird can fly.'],'Yes! What does the bird have?','Try: A bird can fly.'],
      ['Tell me about its body.',['wings'],['It has wings.','It has small wings.'],'Great detail! Can a fox fly?','Use the word wings.'],
      ['Compare the fox and the bird.',['fox','bird'],['A fox can walk, and a bird can fly.','The fox has ears. The bird has wings.'],'Case closed!','Say both animal names.']]],
    ['Pip’s Weather Show','Pip','Give today’s forest weather report.',[
      ['How is the weather today?',['sunny','cloudy','windy','rainy'],['It is sunny today.','It is windy today.'],'Good report! What should we take?','Choose a weather word.'],
      ['What do we need in the rain?',['umbrella'],['We need an umbrella.','Take an umbrella, please.'],'Ready for the rain! What moves in the wind?','Use umbrella in your answer.'],
      ['Give the whole weather report.',['today','it is'],['Today it is windy. Take an umbrella.','It is cloudy today.'],'You are our weather watcher!','Start with Today or It is.']]],
    ['Momo’s Growing Lab','Momo','Teach Momo how a seed grows.',[
      ['What does a seed need?',['water','sunlight'],['A seed needs water and sunlight.','It needs water.'],'Momo is waking up! What grows down?','Name water or sunlight.'],
      ['What grows down into the soil?',['root'],['A root grows down.','The root grows into the soil.'],'Correct! What grows up?','Use the word root.'],
      ['Tell the steps in order.',['first','then'],['First, add water. Then, wait.','First the root grows. Then the sprout grows.'],'Momo has two new leaves!','Use First and Then.']]],
    ['Moon Mission Control','Sprig','Report what you see on the Moon.',[
      ['Where does the astronaut land?',['moon'],['The astronaut lands on the Moon.','On the Moon.'],'Landing confirmed! How does the astronaut move?','Say Moon.'],
      ['How does the astronaut move?',['hop'],['The astronaut can hop.','He hops on the Moon.'],'A moon hop! What looks bright?','Use hop or hops.'],
      ['Send your Moon report.',['bright','moon'],['I can see the bright Moon.','The Moon is bright.'],'Mission complete!','Use bright and Moon.']]],
    ['The Bright-Day Clock','Pip','Put Zianna’s day back in order.',[
      ['What do you do in the morning?',['morning'],['I go to school in the morning.','I eat breakfast in the morning.'],'The clock is moving! What happens at night?','Use morning.'],
      ['What do you do before bedtime?',['read','bedtime'],['I read before bedtime.','Before bedtime, I read.'],'A lovely routine! Tell the order.','Use read and bedtime.'],
      ['Tell me two parts of your day.',['first','then'],['First I eat breakfast. Then I go to school.','First I wake up. Then I read.'],'The bright-day clock works again!','Use First and Then.']]],
    ['The Library Leaf Mark','Momo','Use kind English to find the lost pencil.',[
      ['What can you ask a classmate?',['can i','please'],['Can I borrow your pencil, please?','Can you help me, please?'],'That was kind! Where should we look?','Use Can I or please.'],
      ['Where is the pencil?',['under','book'],['It is under the book.','The pencil is under a book.'],'You found it! What do you say now?','Use under and book.'],
      ['Thank your helper.',['thank'],['Thank you for helping me.','Thank you!'],'The hidden door is open!','Start with Thank you.']]],
    ['Sprig’s Food Lab','Sprig','Recommend a colourful healthy snack.',[
      ['Which snack do you like?',['like'],['I like apples.','I like carrots.'],'Yum! Why do you like it?','Use I like.'],
      ['How does it taste or feel?',['sweet','crunchy'],['It is sweet and crunchy.','The apple is crunchy.'],'Good describing! Is it healthy?','Use sweet or crunchy.'],
      ['Recommend your snack.',['because'],['I like apples because they are crunchy.','I like carrots because they are healthy.'],'The rainbow recipe is complete!','Use because.']]],
    ['Pip’s Town Quest','Pip','Guide Momo safely through town.',[
      ['How do I get to the park?',['go straight'],['Go straight.','Go straight to the park.'],'I see the park! Which way now?','Use go straight.'],
      ['What should I do next?',['turn left'],['Turn left at the park.','Please turn left.'],'I found the next street! Where is the museum?','Use turn left.'],
      ['Give the complete route.',['go straight','turn left'],['Go straight and turn left.','Go straight, then turn left at the park.'],'The map is complete!','Use both route phrases.']]],
    ['Momo’s Ocean Radio','Momo','Host a one-minute ocean science show.',[
      ['Which animal is bigger?',['whale','dolphin'],['A whale is bigger than a dolphin.','The whale is bigger.'],'Good comparison! Why does it swim up?','Name whale and dolphin.'],
      ['Why does a whale come up?',['breathe'],['It comes up to breathe.','A whale must breathe air.'],'Exactly! Where does it swim?','Use breathe.'],
      ['Share one ocean fact.',['ocean'],['A whale swims in the deep ocean.','Dolphins live in the ocean.'],'Ocean radio complete!','Use ocean.']]],
    ['Sprig’s Friendship Bridge','Sprig','Use kind words to repair the bridge.',[
      ['How does Lina feel?',['nervous'],['Lina feels nervous.','She is nervous.'],'You noticed her feeling. Why?','Use nervous.'],
      ['What can a kind friend say?',['together'],['We can try together.','Let us do it together.'],'The bridge is stronger! How does Lina feel now?','Use together.'],
      ['Say why you feel proud.',['proud','because'],['I feel proud because I tried.','I am proud because I helped.'],'The friendship bridge is shining!','Use proud and because.']]],
    ['Pip’s Machine Workshop','Pip','Explain how the helping machine works.',[
      ['What makes the machine start?',['button'],['A button makes it start.','Push the button.'],'The light is on! What can it move?','Use button.'],
      ['What can the machine move?',['box'],['It can move a heavy box.','The machine moves boxes.'],'Useful machine! What parts does it have?','Use box or boxes.'],
      ['Explain your invention.',['machine','can'],['This machine can move heavy boxes.','My machine can help people.'],'Workshop challenge complete!','Use machine and can.']]],
    ['Zianna’s Story Door','Zianna','Create the final chapter of our adventure.',[
      ['Who is your main character?',['character'],['My character is a curious girl.','The character is Sprig.'],'A wonderful hero! Where are they?','Use character.'],
      ['What happens suddenly?',['suddenly'],['Suddenly, a little door opens.','Suddenly, they see a golden light.'],'What a surprise! What do they decide?','Start with Suddenly.'],
      ['Give your story an ending.',['ending'],['The ending is happy because they find the tree.','In the ending, they go home together.'],'You opened the Story Door!','Use ending.']]]
  ];
  window.ZL_DIALOGUES=scripts.map((s,i)=>({id:`talk-${i+1}`,week:i+1,level:window.ZL_PROGRAM.weeks[i].level,title:s[0],guide:s[1],mission:s[2],turns:s[3].map((t,j)=>({id:j+1,prompt:t[0],expected:t[1],suggestions:t[2],followupHit:t[3],followupMiss:t[4]}))}));
})();
