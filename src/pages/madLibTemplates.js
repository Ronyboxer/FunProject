const madLibTemplates = [
  {
    title: "The Yelling Animal Adventure",
    template: "Yesterday, I went to the [place] with my best friend, and we saw a [adjective] [animal] [verb]ing on top of a [noun]. It looked at us and yelled '[exclamation]!' before disappearing into a pile of [plural noun]. After that, we decided to [verb] all the way to the [place], laughing the whole time. When we got home, my [family member] was waiting with a plate of [food] and a glass of [liquid]. It was the weirdest day ever, but honestly, I’d do it again in a [noun]."
  },
  {
    title: "Celebrity Space Rescue",
    template: "This morning, I woke up feeling extremely [adjective], so I put on my favorite [noun] and headed to the [place]. On the way, I ran into [celebrity] who asked if I wanted to join them on a mission to [verb] a bunch of evil [plural noun]. We hopped into a [adjective] spaceship powered by [liquid] and flew to a hidden [place] under the ocean. There, we discovered a glowing [noun] guarded by a [animal]. Best. Morning. Ever."
  },
  {
    title: "Robot Rebellion 3000",
    template: "In the year [number], robots ruled the world and forced all humans to [verb] in the [place]. Their leader, a [adjective] machine named [funny name], outlawed [plural noun] and replaced them with [food]. I secretly built a [noun] out of scraps and escaped with my pet [animal]. We hid inside a giant [noun] disguised as a [adjective] vending machine and waited for the perfect time to strike."
  },
  {
    title: "The Dream of Dancing Celebrities",
    template: "I had the strangest dream last night. I was flying over the [place] on a [adjective] [animal] made of [food]. Below me, [celebrity] was dancing with a group of [plural noun] while holding a glowing [noun]. Suddenly, everything turned into [liquid] and I started to [verb] uncontrollably. I woke up covered in sweat, clutching a [noun] and whispering '[weird word]...'"
  },
  {
    title: "The Haunted Summer Camp",
    template: "At summer camp, our cabin was haunted by a [adjective] ghost named [funny name] who only appeared when someone dropped a [noun]. One night, my bunkmate dared me to [verb] alone in the [place] after dark. I brought a flashlight, some [plural noun], and a [noun] for protection. At exactly midnight, the ghost screamed '[exclamation]!' and covered the cabin in [liquid]. I never ran so fast in my life."
  },
  {
    title: "The Magical Attic Portal",
    template: "One day, I found a dusty old [noun] in my attic. When I touched it, I was transported to a magical [place] filled with [adjective] creatures and endless [plural noun]. I met a talking [animal] named [funny name] who offered me a quest to [verb] the ancient [noun] of truth. With a backpack full of [food] and a bottle of [liquid], I set off on the most bizarre adventure of my life. Spoiler: I accidentally turned the kingdom into a [adjective] amusement park."
  },
  {
    title: "Celebrity Cafeteria Chaos",
    template: "During lunch at school, I opened my sandwich and discovered it had been replaced with a [noun]. I looked up and saw [celebrity] sitting at my table, laughing while tossing [plural noun] into the air. They invited me to [verb] after school at the [place]. I said yes, and we ended up riding a [adjective] rollercoaster made of [food]. Best detention ever."
  },
  {
    title: "The Great Zoo Escape",
    template: "At the zoo, the [animal] exhibit was closed because one of them had learned how to [verb]. According to the zookeeper, it escaped using only a [noun] and a bag of [plural noun]. Later that day, I spotted it hiding in the [place], wearing a [adjective] disguise. I tried to report it, but [celebrity] told me to keep quiet and handed me a [noun] full of [liquid]. Now I’m part of the cover-up."
  },
  {
    title: "The Exploding Science Lab",
    template: "My science experiment went terribly wrong when I mixed [liquid] with [food] and added a dash of [plural noun]. The entire [place] exploded in a cloud of [adjective] smoke, and a tiny [animal] crawled out holding a [noun]. My teacher gave me an A+ but also a permanent ban from using [noun] in the lab. Honestly, worth it. I’m now working on a formula to [verb] time itself."
  },
  {
    title: "League of Super Nouns",
    template: "I joined a secret club called The League of [plural noun], and our mission is to protect [place] from [adjective] disasters. Our leader, [celebrity], trained us to [verb] using only a [noun] and sheer determination. One night, we had to stop a [animal] from destroying the city using a flood of [liquid]. Afterward, we celebrated with [food] and a dance party in a [place]. I’ve never felt cooler."
  },
  {
    title: "The Professional Tester",
    template: "My dream job is to be a professional [noun] tester. Every day, I wake up, [verb] for a few hours, and then go to my office at the [place]. There, I work with a team of [adjective] [plural noun] and drink endless amounts of [liquid]. Yesterday, my boss gave me a raise and a [noun] made entirely of [food]. Life’s good when you love what you do."
  },
  {
    title: "The Legendary Treasure Hunt",
    template: "Once, I traveled to [place] with my [family member] to search for the legendary [adjective] treasure of [funny name]. Along the way, we battled angry [plural noun], survived a storm made of [liquid], and accidentally [verb]ed into a pit of [food]. When we finally reached the treasure, it turned out to be a [noun] that could sing. I still keep it in a box next to my [noun]."
  },
  {
    title: "Movie Set Mayhem",
    template: "We were filming a movie in the middle of [place] when a [adjective] [animal] ran onto the set. It grabbed the [noun] and started to [verb] around wildly. [Celebrity] tried to calm it down with a bag of [plural noun], but it only made things worse. The director screamed '[exclamation]!' and dove into a puddle of [liquid]. We never finished the movie, but it was an unforgettable day."
  },
  {
    title: "The Birthday Bash",
    template: "For my birthday, I threw a party at the [place] and invited all my favorite [plural noun]. Everyone wore [adjective] costumes and brought gifts made of [food]. We played a game where you had to [verb] with a [noun] while balancing a glass of [liquid]. At the end, [celebrity] showed up with a giant [animal] and performed a dance called '[weird word]'. Best birthday ever."
  },
  {
    title: "Microwave Portal Madness",
    template: "I accidentally opened a portal to [place] while trying to heat up my [food] in the microwave. Out popped a [adjective] creature holding a [noun] and yelling '[exclamation]!' It gave me a map made of [liquid] and told me to [verb] before sunset. I followed the instructions, only to end up inside a world filled with floating [plural noun] and laughing [animals]. Now I’m not sure if I’m awake or still dreaming."
  },
  {
    title: "Advanced Noun Theory",
    template: "My school started offering a new class called 'Advanced [noun] Theory.' On the first day, the teacher walked in with a [adjective] [animal] and asked us to [verb] without blinking. Everyone got a packet of [plural noun] and a bottle of [liquid] labeled 'Do Not Drink.' Half the class turned invisible, and the other half grew [noun]s out of their heads. I can’t wait for next week’s lesson."
  },
  {
    title: "The Forbidden Cave",
    template: "While hiking through the [place], I found a cave filled with glowing [plural noun] and a sign that said 'Beware the [adjective] [animal]'. Naturally, I ignored it and went inside holding only my trusty [noun]. Suddenly, I slipped on some [food] and started to [verb] uncontrollably. When I finally stopped, I was surrounded by [celebrity] clones singing '[weird word]'. I left and never looked back."
  },
  {
    title: "The 24-Hour Contest",
    template: "I signed up for a contest where you have to [verb] for 24 hours straight while holding a [noun]. The event took place in the middle of the [place], with a crowd of [plural noun] cheering us on. Halfway through, someone spilled [liquid] on the stage and a [adjective] [animal] slipped and crashed into the judges' table. The winner got a trophy made of [food] and a photo with [celebrity]. I came in second, but I got a lifetime supply of [noun]s."
  },
  {
    title: "The Cardboard Wormhole",
    template: "One rainy afternoon, I got bored and built a [noun] out of cardboard, duct tape, and [food]. When I turned it on, it began to [verb] and opened a wormhole to [place]. A group of [adjective] [plural noun] came out and started rearranging my furniture. I offered them some [liquid] and they gave me a magic [animal] in return. Now I use it to commute to school."
  },
  {
    title: "The Field Trip Showdown",
    template: "I got lost in the [place] during a class field trip and stumbled upon an ancient [noun] guarded by a [adjective] [animal]. It challenged me to a battle of [plural noun] and handed me a spoon made of [food]. I had to [verb] for my life as [celebrity] cheered me on from a throne made of [liquid]. After I won, the [animal] let me leave with a golden [noun] and a new respect for [weird word]."
  }
];

export default madLibTemplates; 