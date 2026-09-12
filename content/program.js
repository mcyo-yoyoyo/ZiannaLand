(function () {
  const media = {
    fox:{local:'assets/videos/fox.mp4',file:'Desert_Kit_Fox_(Vulpes_macrotis_arsipus).webm',src:'https://upload.wikimedia.org/wikipedia/commons/3/3c/Desert_Kit_Fox_%28Vulpes_macrotis_arsipus%29.webm',page:'https://commons.wikimedia.org/wiki/File:Desert_Kit_Fox_(Vulpes_macrotis_arsipus).webm',credit:'U.S. Fish and Wildlife Service / NCTC',license:'Public domain'},
    bird:{local:'assets/videos/bird.mp4',file:"Anna's_hummingbird_(Calypte_anna)_in_the_rain.webm",src:'https://upload.wikimedia.org/wikipedia/commons/e/e3/Anna%27s_hummingbird_%28Calypte_anna%29_in_the_rain.webm',page:'https://commons.wikimedia.org/wiki/File:Anna%27s_hummingbird_(Calypte_anna)_in_the_rain.webm',credit:'Love Star Production',license:'CC0'},
    clouds:{local:'assets/videos/clouds.mp4',file:'Clouds_time_lapse.webm',src:'https://upload.wikimedia.org/wikipedia/commons/9/9f/Clouds_time_lapse.webm',page:'https://commons.wikimedia.org/wiki/File:Clouds_time_lapse.webm',credit:'John Fowler',license:'CC BY 2.0'},
    rainbow:{local:'assets/videos/rainbow.mp4',file:'Lightnings_and_rainbow.webm',src:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Lightnings_and_rainbow.webm',page:'https://commons.wikimedia.org/wiki/File:Lightnings_and_rainbow.webm',credit:'Cristian Bulumac',license:'CC BY 3.0'},
    seeds:{local:'assets/videos/seeds.mp4',file:'Sabzeh_sprouting_seeds_timelapse.webm',src:'https://upload.wikimedia.org/wikipedia/commons/transcoded/c/cc/Sabzeh_sprouting_seeds_timelapse.webm/Sabzeh_sprouting_seeds_timelapse.webm.360p.webm',page:'https://commons.wikimedia.org/wiki/File:Sabzeh_sprouting_seeds_timelapse.webm',credit:'Always Shooting',license:'CC BY 2.0'},
    lettuce:{local:'assets/videos/lettuce.mp4',file:'Timelapse_of_lettuce_emerging.webm',src:'https://upload.wikimedia.org/wikipedia/commons/f/f6/Timelapse_of_lettuce_emerging.webm',page:'https://commons.wikimedia.org/wiki/File:Timelapse_of_lettuce_emerging.webm',credit:'Dwight Sipler',license:'CC BY 2.0'},
    moon:{local:'assets/videos/moon.mp4',file:'Moon_(30549457916).webm',src:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Moon_(30549457916).webm',page:'https://commons.wikimedia.org/wiki/File:Moon_(30549457916).webm',credit:'Joshua Tree National Park / NPS Lian Law',license:'Public domain'},
    astronaut:{local:'assets/videos/astronaut.mp4',file:'Bunny_hopping_on_the_Moon.webm',src:'https://upload.wikimedia.org/wikipedia/commons/0/0b/Bunny_hopping_on_the_Moon.webm',page:'https://commons.wikimedia.org/wiki/File:Bunny_hopping_on_the_Moon.webm',credit:'NASA / Gene Cernan',license:'Public domain'}
  };
  const seeds = [
    {name:'动物侦探',en:'ANIMAL DETECTIVES',icon:'FOX',level:'Seed',goal:'观察动物并描述身体和动作。',words:[['fox','狐狸'],['bird','小鸟'],['ears','耳朵'],['wings','翅膀'],['walk','走'],['fly','飞']],pattern:'It has big ears. It can walk.',story:'A little fox walks by a tree. It has big ears. A tiny bird flies above it.',cn:'一只小狐狸从树旁走过。它有大耳朵。一只小鸟从它上方飞过。',question:'Which animal can fly?',answer:'bird',phonics:'短元音 i · big / little',videos:[media.fox,media.bird]},
    {name:'天气观察员',en:'WEATHER WATCHERS',icon:'SUN',level:'Seed',goal:'观察天气并完成简单天气播报。',words:[['sunny','晴朗的'],['cloudy','多云的'],['windy','有风的'],['rainy','下雨的'],['sky','天空'],['umbrella','雨伞']],pattern:'It is windy today.',story:'White clouds move across the sky. The wind blows. Mia takes her umbrella.',cn:'白云飘过天空。风吹起来了。米娅带上了雨伞。',question:'What does Mia take?',answer:'umbrella',phonics:'长元音 y · sunny / windy',videos:[media.clouds,media.rainbow]},
    {name:'花园生长记',en:'GROWING GARDEN',icon:'LEAF',level:'Seed',goal:'按顺序讲述种子发芽。',words:[['seed','种子'],['soil','泥土'],['water','水'],['root','根'],['sprout','嫩芽'],['sunlight','阳光']],pattern:'First, add water. Then, wait.',story:'A seed sleeps in the soil. A root grows down. A green sprout reaches for sunlight.',cn:'一颗种子睡在土里。根向下生长。绿色嫩芽朝着阳光生长。',question:'What grows down?',answer:'root',phonics:'长元音 ee · seed / green',videos:[media.seeds,media.lettuce]},
    {name:'天空探险家',en:'SKY EXPLORERS',icon:'MOON',level:'Seed',goal:'观察月球并描述所见。',words:[['Earth','地球'],['Moon','月球'],['rocket','火箭'],['astronaut','宇航员'],['bright','明亮的'],['hop','跳跃']],pattern:'I can see the bright Moon.',story:'A rocket leaves Earth. An astronaut lands on the Moon. He hops across the dusty ground.',cn:'火箭离开地球。宇航员登上月球。他跳着穿过布满尘土的地面。',question:'Where does the astronaut land?',answer:'Moon',phonics:'字母组合 oo · moon / look',videos:[media.moon,media.astronaut]},
    {name:'我的一天',en:'MY BRIGHT DAY',icon:'CLOCK',level:'Sprout',goal:'用顺序词介绍一天的活动。',words:[['wake up','起床'],['breakfast','早餐'],['school','学校'],['homework','作业'],['dinner','晚餐'],['bedtime','睡觉时间']],pattern:'I go to school in the morning.',story:'Zianna wakes up at seven. She goes to school in the morning. At night, she reads before bedtime.',cn:'Zianna七点起床，早晨去学校，晚上睡觉前读书。',question:'What does Zianna do before bedtime?',answer:'reads',phonics:'短元音 a · at / breakfast'},
    {name:'校园好帮手',en:'SCHOOL HELPERS',icon:'BOOK',level:'Sprout',goal:'在校园情境中提出请求并回应。',words:[['teacher','老师'],['classmate','同学'],['library','图书馆'],['pencil','铅笔'],['borrow','借用'],['help','帮助']],pattern:'Can I borrow your pencil, please?',story:'Leo cannot find his pencil. He asks a classmate for help. They look under the library book.',cn:'Leo找不到铅笔。他请同学帮忙。他们在图书馆的书下面找到了。',question:'Where is the pencil?',answer:'under the book',phonics:'字母组合 sh · she / shelf'},
    {name:'美味实验室',en:'FOOD LAB',icon:'APPLE',level:'Sprout',goal:'描述食物、味道和健康选择。',words:[['apple','苹果'],['carrot','胡萝卜'],['sweet','甜的'],['crunchy','脆的'],['hungry','饥饿的'],['healthy','健康的']],pattern:'I like apples because they are crunchy.',story:'Nora is hungry. She makes a colourful snack with apples and carrots. It is sweet, crunchy and healthy.',cn:'Nora饿了。她用苹果和胡萝卜做了彩色点心，又甜又脆，而且健康。',question:'Why does Nora like the snack?',answer:'It is healthy',phonics:'字母组合 ch · lunch / crunchy'},
    {name:'城市小向导',en:'AROUND TOWN',icon:'MAP',level:'Sprout',goal:'询问地点并理解简单路线。',words:[['park','公园'],['museum','博物馆'],['station','车站'],['turn left','左转'],['go straight','直走'],['beside','在旁边']],pattern:'Go straight and turn left.',story:'Ben wants to find the museum. He goes straight, turns left and sees it beside the park.',cn:'Ben想找到博物馆。他直走后左转，看见博物馆就在公园旁。',question:'What is beside the park?',answer:'museum',phonics:'字母组合 ar · park / car'},
    {name:'蓝色海洋',en:'OCEAN LIFE',icon:'WAVE',level:'Explorer',goal:'阅读简单科普并比较海洋动物。',words:[['ocean','海洋'],['whale','鲸'],['dolphin','海豚'],['shell','贝壳'],['deep','深的'],['breathe','呼吸']],pattern:'A whale is bigger than a dolphin.',story:'A whale swims in the deep ocean. It is very big, but it must come up to breathe. A dolphin swims nearby.',cn:'一头鲸在深海中游泳。它很大，但必须浮上水面呼吸。一只海豚游在附近。',question:'Why does the whale come up?',answer:'to breathe',phonics:'字母组合 wh · whale / what'},
    {name:'情绪与朋友',en:'FEELINGS & FRIENDS',icon:'HEART',level:'Explorer',goal:'表达情绪、原因和友善回应。',words:[['excited','兴奋的'],['nervous','紧张的'],['proud','自豪的'],['lonely','孤单的'],['together','一起'],['kind','友善的']],pattern:'I feel proud because I tried.',story:'Lina feels nervous before the show. Her friend smiles and says, “We can try together.” Lina feels brave.',cn:'Lina演出前很紧张。朋友微笑着说：“我们可以一起试试。”Lina变得勇敢。',question:'What makes Lina feel brave?',answer:'her friend',phonics:'字母组合 ou · proud / loud'},
    {name:'神奇机器',en:'AMAZING MACHINES',icon:'GEAR',level:'Explorer',goal:'解释简单机器的用途和过程。',words:[['machine','机器'],['wheel','轮子'],['button','按钮'],['move','移动'],['build','建造'],['invent','发明']],pattern:'This machine can move heavy boxes.',story:'Sam builds a small machine with wheels. He pushes a button. The machine moves a box across the room.',cn:'Sam用轮子做了一台小机器。他按下按钮，机器把箱子运过房间。',question:'What makes the machine start?',answer:'a button',phonics:'长元音 ui · build / suit'},
    {name:'故事创造家',en:'STORY MAKERS',icon:'STAR',level:'Explorer',goal:'用人物、地点、问题和结局创作故事。',words:[['character','人物'],['setting','地点'],['problem','问题'],['suddenly','突然'],['decide','决定'],['ending','结局']],pattern:'Suddenly, the little door opened.',story:'A curious girl finds a tiny door in a tree. Suddenly, it opens. She decides to follow a golden light.',cn:'一个好奇的女孩在树上发现一扇小门。门突然打开了，她决定跟随一道金色的光。',question:'What does the girl decide to follow?',answer:'a golden light',phonics:'词尾 ing · ending / finding'}
  ];
  const days=[
    {kind:'情境输入',suffix:'Look, listen and discover',template:'listen'},
    {kind:'词汇拼读',suffix:'Words and sounds',template:'match'},
    {kind:'句子积木',suffix:'Build the sentence',template:'build'},
    {kind:'故事阅读',suffix:'Put the story in order',template:'sequence'},
    {kind:'表达任务',suffix:'My weekly show',template:'speak'}
  ];
  const world=[
    {chapter:'会发光的叶子地图',guide:'Sprig',dialogue:'Zianna, this leaf glows when we use English!',clue:'第一片发光叶子',mission:'找到会飞的动物，读出地图上的第一条线索。',project:'录一段动物侦探播报，介绍一种动物。'},
    {chapter:'风送来的悄悄话',guide:'Pip',dialogue:'Listen! The wind is carrying a message.',clue:'一根蓝色羽毛',mission:'完成天气播报，帮 Pip 读懂风的消息。',project:'制作一张天气卡并录制今日天气播报。'},
    {chapter:'Momo 醒来了',guide:'Momo',dialogue:'Water, sunlight, and kind words help me grow.',clue:'一颗星星种子',mission:'按顺序讲出种子如何长大。',project:'画出四格生长图，用 First、Then 来讲述。'},
    {chapter:'月亮上的银色碎片',guide:'Sprig',dialogue:'The next clue is shining on the Moon!',clue:'一块银色月石',mission:'登上月球，描述探险家看到的景色。',project:'完成一段“我的月球发现”语音日志。'},
    {chapter:'失灵的晨光钟',guide:'Pip',dialogue:'The Story Tree needs your bright-day routine.',clue:'一枚太阳齿轮',mission:'用顺序词说清 Zianna 的一天，让晨光钟重新转动。',project:'制作“我的一天”时间轴并配音。'},
    {chapter:'图书馆里的叶子印',guide:'Momo',dialogue:'A kind request can open a hidden door.',clue:'一枚书页叶印',mission:'在校园里用礼貌英语寻找藏起来的线索。',project:'演一段校园求助对话，分别说两个角色。'},
    {chapter:'彩虹果盘的配方',guide:'Sprig',dialogue:'Crunch, taste, and tell us why it is healthy!',clue:'一张彩虹配方',mission:'描述味道与口感，完成故事树的能量点心。',project:'设计健康点心菜单并录制推荐语。'},
    {chapter:'拼起来的城市地图',guide:'Pip',dialogue:'Go straight, turn left, and the map will join.',clue:'一块金色地图',mission:'沿着英语路线找回最后一块城市地图。',project:'画一条寻宝路线，给家人发出英文指令。'},
    {chapter:'深海里的古老歌声',guide:'Momo',dialogue:'The ocean song tells us how every animal lives.',clue:'一枚会唱歌的贝壳',mission:'阅读海洋科普，比较鲸和海豚。',project:'制作“海洋一分钟”科普音频。'},
    {chapter:'友谊桥缺了一句话',guide:'Sprig',dialogue:'Kind words make the bridge strong.',clue:'一颗勇气之心',mission:'说出情绪和原因，用友善的话修好桥。',project:'创作三句“友善急救包”并录下来。'},
    {chapter:'会走路的修理机器',guide:'Pip',dialogue:'Let us build a machine to carry every clue!',clue:'一枚绿色按钮',mission:'解释机器怎样工作，把线索送到故事树。',project:'画一台神奇机器，介绍它的三个功能。'},
    {chapter:'故事树重新发光',guide:'Zianna',dialogue:'Every clue is a word. Every word can grow a story.',clue:'故事树金钥匙',mission:'把人物、地点、问题和结局连成自己的故事。',project:'完成 Zianna Land 第一季有声故事。'}
  ];
  const decoys=['a red backpack','under the moon','three little pencils'];
  const weeks=seeds.map((seed,wi)=>({
    id:`week-${wi+1}`,name:seed.name,en:seed.en,icon:seed.icon,level:seed.level,goal:seed.goal,
    canDo:`我能围绕“${seed.name}”听懂短文并说出至少三句话。`,...world[wi],
    units:days.map((day,di)=>{
      const template=(di===1&&wi%2===1)?'sound':day.template;
      return {id:`w${wi+1}-d${di+1}`,week:wi+1,day:di+1,title:di===4?`${seed.name}小作品`:day.suffix,
        kind:day.kind,level:seed.level,goal:di===0?seed.goal:di===1?`掌握本周关键词与${seed.phonics}`:di===2?`会使用句型：${seed.pattern}`:di===3?'读懂故事并找出事件顺序':`独立完成“${seed.name}”口语作品`,
        minutes:di===4?12:10,skills:[di===0?'listening':di===1?'phonics':di===2?'sentence':di===3?'reading':'speaking'],
        prerequisites:wi===0&&di===0?[]:[di===0?`w${wi}-d5`:`w${wi+1}-d${di}`],words:seed.words.slice(di%2,di%2+4),pattern:seed.pattern,
        story:seed.story,cn:seed.cn,phonics:seed.phonics,question:seed.question,answer:seed.answer,
        options:(()=>{const a=[seed.answer,...decoys.slice(0,2)],n=wi%3;return [a[n],...a.filter((_,i)=>i!==n)]})(),template,
        sequence:seed.story.split('. ').map((s,i)=>({id:i,text:s.replace(/\.$/,'')+'.'})),build:seed.pattern.replace(/[.?!]/g,'').split(' '),
        speakPrompt:`请用这些句子开始：${seed.pattern} 再补充一句自己的发现。`,video:seed.videos?.[di===0?0:di===3?1:-1]};
    })
  }));
  window.ZL_PROGRAM={version:'2026.09-phase3',title:'Zianna Land · 故事树第一季',updatedAt:'2026-09-11',worldTitle:'寻找故事树的十二片光',
    levels:[{id:'Seed',name:'种子',range:'Week 1–4',goal:'听懂生活短句，建立基础拼读意识。'},{id:'Sprout',name:'新芽',range:'Week 5–8',goal:'阅读短故事，用完整句表达日常想法。'},{id:'Explorer',name:'探索者',range:'Week 9–12',goal:'理解简单科普，完成复述与创作。'}],
    reviewIntervals:[1,3,7],masteryThreshold:80,weeks};
})();

