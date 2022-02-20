const allContent = [{
"pager": 1,
"path": "attributions",
"type": "attributions",
"filename": "attributions.json",
"fields": {
  "title": "attributions",
  "description": "i gets ta log all the tech stuff used in here, yo... desu.",
  "created": "2021.3.5"
}

},{
"pager": 1,
"path": "blog/components",
"type": "blog",
"filename": "components.json",
"fields": {
    "title": "Dynamic components example",
    "body": [
        "The <a href=\"https://plenti.co/docs/alllayouts\">allLayouts</a> helper object holds references to all svelte templates on your site.",
        "This allows you to load components from your JSON data source without explicitly importing them.",
        "Just remember to use a <em>component signature</em> (e.g. layouts/components/ball.svelte becomes layouts_components_ball_svelte)."
    ],
	"components": [
		{
			"name": "ball"
		},
		{
			"name": "block"
		}
	],
    "author": "Jim Fisk",
    "date": "12/9/2020"
}
},{
"pager": 1,
"path": "blog/perry",
"type": "blog",
"filename": "perry.json",
"fields": {
    "title": "Customize your Planarian",
    "body": [
        "Meet our mascot - Perry the Planarian!",
        "If you want to customize Perry's style, you can do so <a href='https://perry.plenti.co' target='blank' rel='noopener noreferrer'>here</a> (Coming soon).",
        "Check out this <a href='https://youtu.be/Gr3KTOnsWEM' target='blank' rel='noopener noreferrer'>video</a> to see how the app was made!"
    ],
    "author": "Jim Fisk",
    "date": "10/1/2020"
}
},{
"pager": 1,
"path": "blog/pletiform",
"type": "blog",
"filename": "pletiform.json",
"fields": {
    "title": "Build sites with good form",
    "body": [
        "Need an easy webform solution?",
        "Try adding a <a href='https://plentiform.com' target='blank' rel='noopener noreferrer'>plentiform</a>! (Coming soon)"
    ],
    "author": "Jim Fisk",
    "date": "1/26/2020"
}
},{
"pager": 1,
"path": "blog/stores",
"type": "blog",
"filename": "stores.json",
"fields": {
    "title": "Svelte writable stores example",
    "body": [
        "Here's a basic counter implementation using Svelte Writable Stores"
    ],
    "store": true,
    "author": "Jim Fisk",
    "date": "8/25/2020"
}
},{
"pager": 1,
"path": "buildlog",
"type": "buildlog",
"filename": "buildlog.json",
"fields": {
  "title": "build log",
  "description": "i gets ta log the build process, yo... desu.",
  "created": "2021.3.31"
}

},{
"pager": 1,
"path": "/",
"type": "index",
"filename": "index.json",
"fields": {
  "siteName": "PaperMod",
	"title": "Welcome to Plenti!",
	"intro": [
		"Take a look around to see how things work.",
		"The bottom of each page will tell you where to find the corresponding template in your project.",
		"If you get stuck, check out our <a href='https://plenti.co/docs' target='blank' rel='noopener noreferrer'>docs</a>. If you need extra help, <a href='https://github.com/plentico/plenti/issues/new' target='blank' rel='noopener noreferrer'>let us know</a>! Enjoy :)"
	]
}

},{
"pager": 1,
"path": "/about",
"type": "pages",
"filename": "about.json",
"fields": {
	"title": "About Plenti",
	"description": [
		"Plenti is a minimalist <a href='https://jamstack.org/' target='blank' rel='noopener noreferrer'>JAMstack</a> framework that's flexible and easy to use.",
		"We've cut out as many dependencies as possible so you can focus on being productive instead of wrestling with tools.",
		"The <a href='https://svelte.dev/' target='blank' rel='noopener noreferrer'>Svelte</a> frontend gives users get a snappy experience, and the <a href='https://golang.org/' target='blank' rel='noopener noreferrer'>Go</a> backend builds fast so you can get more done."
	],
	"author": "Jim Fisk"
}
},{
"pager": 1,
"path": "/archive",
"type": "pages",
"filename": "archive.json",
"fields": {
  "page": "archive",
  "description": [
    "Plenti is a minimalist <a href='https://jamstack.org/' target='blank' rel='noopener noreferrer'>JAMstack</a> framework that's flexible and easy to use.",
    "We've cut out as many dependencies as possible so you can focus on being productive instead of wrestling with tools.",
    "The <a href='https://svelte.dev/' target='blank' rel='noopener noreferrer'>Svelte</a> frontend gives users get a snappy experience, and the <a href='https://golang.org/' target='blank' rel='noopener noreferrer'>Go</a> backend builds fast so you can get more done."
  ]
}

},{
"pager": 1,
"path": "/categories",
"type": "pages",
"filename": "categories.json",
"fields": {
  "page": "categories",
  "description": [
    "Plenti is a minimalist <a href='https://jamstack.org/' target='blank' rel='noopener noreferrer'>JAMstack</a> framework that's flexible and easy to use.",
    "We've cut out as many dependencies as possible so you can focus on being productive instead of wrestling with tools.",
    "The <a href='https://svelte.dev/' target='blank' rel='noopener noreferrer'>Svelte</a> frontend gives users get a snappy experience, and the <a href='https://golang.org/' target='blank' rel='noopener noreferrer'>Go</a> backend builds fast so you can get more done."
  ]
}

},{
"pager": 1,
"path": "/contact",
"type": "pages",
"filename": "contact.json",
"fields": {
	"title": "Contact Us",
	"description": [
		"Plenti is 100% free and open source!",
		"You can fork it for your own purposes, or help us out by reporting bugs / contributing code on <a href='https://github.com/plentico/plenti' target='blank' rel='noopener noreferrer'>Our GitHub</a>.",
		"Give us <a href='https://twitter.com/plentico' target='blank' rel='noopener noreferrer'>a tweet</a> if you like what you see!"
	],
	"author": "Jim Fisk"
}
},{
"pager": 1,
"path": "/search",
"type": "pages",
"filename": "search.json",
"fields": {
  "page": "search",
  "description": [
    "Plenti is a minimalist <a href='https://jamstack.org/' target='blank' rel='noopener noreferrer'>JAMstack</a> framework that's flexible and easy to use.",
    "We've cut out as many dependencies as possible so you can focus on being productive instead of wrestling with tools.",
    "The <a href='https://svelte.dev/' target='blank' rel='noopener noreferrer'>Svelte</a> frontend gives users get a snappy experience, and the <a href='https://golang.org/' target='blank' rel='noopener noreferrer'>Go</a> backend builds fast so you can get more done."
  ]
}

},{
"pager": 1,
"path": "/tags",
"type": "pages",
"filename": "tags.json",
"fields": {
  "page": "tags",
  "description": [
    "Plenti is a minimalist <a href='https://jamstack.org/' target='blank' rel='noopener noreferrer'>JAMstack</a> framework that's flexible and easy to use.",
    "We've cut out as many dependencies as possible so you can focus on being productive instead of wrestling with tools.",
    "The <a href='https://svelte.dev/' target='blank' rel='noopener noreferrer'>Svelte</a> frontend gives users get a snappy experience, and the <a href='https://golang.org/' target='blank' rel='noopener noreferrer'>Go</a> backend builds fast so you can get more done."
  ]
}

},{
"pager": 1,
"path": "posts/post-2020/post-2020-11/post-20-11-01",
"type": "posts",
"filename": "post-20.11.01.json",
"fields": {
  "title": "Little Nap Coffee Stand serves freshly roasted coffee",
  "date": "2020.11.01",
  "readTime": "4 mins",
  "author": "claxx moldii",
  "pic": "littleNap.webp",
  "caption": "Little Nap Coffee Stand serves freshly roasted coffee | © amabird / Shutterstock.com",
  "teaser": "It has a laid-back atmosphere and the friendly owner...",
  "body": "Just across from Yoyogi Park in Shibuya, you’ll find Little Nap Coffee Stand, a tiny coffee shop with a few extra seats outside. It has a laid-back atmosphere and the friendly owner, Daisuke Hamada, will be more than happy to engage in conversation with visitors. The high-quality beans are roasted on-site, and the <a href='/'>menu</a> includes single-origin drip coffee along with the typical espresso-based drinks, which are prepared on a Synesso machine."
}

},{
"pager": 1,
"path": "posts/post-2020/post-2020-11/post-20-11-02",
"type": "posts",
"filename": "post-20.11.02.json",
"fields": {
  "title": "Starbucks Reserve Roastery",
  "date": "2020.11.02",
  "readTime": "4 mins",
  "author": "claxx moldii",
  "pic": "sbReserve.webp",
  "caption": "Starbucks Reserve Roastery Tokyo | © Starbucks Reserve Roastery Tokyo",
  "teaser": "...the largest Starbucks in the world.",
  "body": "Yes, it’s a Starbucks, but not as you know it. Co-designed by architect Kengo Kuma, Nakameguro’s Reserve Roastery is the largest Starbucks in the world. The building incorporates Japanese design elements, such as origami-inspired ceilings and delicate cherry blossoms around the huge, hammered-copper cask rising through the centre of the building. The flowers are inspired by the springtime views over the river just outside, which is lined with sakura trees. On the floors above the roastery and café, the building houses Princi bakery, Teavana and the Arriviamo bar."
}

},{
"pager": 1,
"path": "posts/post-2020/post-2020-12/post-20-12-03",
"type": "posts",
"filename": "post-20.12.03.json",
"fields": {
  "title": "Streamer Coffee Company",
  "date": "2020.12.03",
  "readTime": "4 mins",
  "author": "claxx moldii",
  "pic": "streamerCC.webp",
  "teaser": "every cup of coffee comes with latte art...",
  "caption": "Streamer Coffee Company in Shibuya | © Richard, enjoy my life!/Flickr",
  "body": [
    "Owned by latte art champion Hiroshi Sawada, Streamer Coffee Company is one of the most popular coffee shops in Tokyo. Unsurprisingly, given the owner, every cup of coffee comes with latte art, whether a cute cartoon character or intricate leaf pattern. In all of the Tokyo branches, the decor is sleek and industrial and there’s good free WiFi, so you can catch up on work while indulging in the wonderful coffee. The star attraction is the Streamer Latte, served in a soup bowl-sized mug."
  ]
}

},{
"pager": 1,
"path": "posts/post-2020/post-2020-12/post-20-12-04",
"type": "posts",
"filename": "post-20.12.04.json",
"fields": {
  "title": "Chatei Hatou Kissaten",
  "date": "2020.12.04",
  "readTime": "4 mins",
  "author": "claxx moldii",
  "pic": "chateiHK.jpg",
  "caption": "Entrance to Chatei Hatou — Photo by Athena Lam",
  "teaser": "The drinks aren’t cheap....",
  "body": [
    "Open for 25 years, Chatei Hatou is a slice of traditional Tokyo kissaten culture in the middle of hypermodern Shibuya. The interior is cool and quiet, clad in dark wood accented with greenery, there’s no WiFi to distract you and you can only pay in cash. The drinks aren’t cheap, but they’re expertly made from the highest-quality ingredients, whether bean or leaf, and there’s always a tempting array of cakes to enjoy as you linger over the cup. As with most traditional kissaten, smoking is allowed here, so bear that in mind if it’ll ruin your meditation on the perfect cup of dark-roast coffee."
  ]
}

},{
"pager": 1,
"path": "posts/post-2020/post-2020-12/post-20-12-05",
"type": "posts",
"filename": "post-20.12.05.json",
"fields": {
  "title": "Sarutahiko Coffee",
  "date": "2020.12.05",
  "readTime": "4 mins",
  "author": "claxx moldii",
  "pic": "sarutahiko.jpg",
  "caption": "is really nice get kohi here... desu.",
  "teaser": "The space is warm, welcoming and unpretentious...",
  "body": [
    "Sarutahiko Coffee was established in 2011 by the actor Tomoyuki Otsuka, with the goal of bringing a smile to your face with just one cup of coffee. The intimate Ebisu flagship store can seat up to 25 people, serving drip coffee and espresso drinks from the Synesso machine, and the single-origin beans and blends are high quality. The space is warm, welcoming and unpretentious, and you can buy beans to take home with you."
    ]
}

},{
"pager": 1,
"path": "posts/post-2021/post-2021-01/post-21-01-05",
"type": "posts",
"filename": "post-21.01.05.json",
"fields": {
  "title": "Social Good Roasters",
  "date": "2021.01.06",
  "readTime": "4 mins",
  "author": "claxx moldii",
  "pic": "socialGR.jpg",
  "caption": "unless otherwise noted, all photos by KOP courtesy Key Operation Architects",
  "teaser": "aiming to provide not only excellent coffee....",
  "body": [
    "Located on the second floor of a sleek modern building in Kanda, Social Good Roasters lives up to its name, aiming to provide not only excellent coffee in a relaxed environment but also fulfilling jobs for neurodiverse or disabled employees. Their medium-roast Social Good Roasters Blend makes deliciously smooth espressos and lattes, which you can enjoy in the light, welcoming café."
  ],
  "archived": true
}

},{
"pager": 1,
"path": "posts/post-2021/post-2021-01/post-21-01-07",
"type": "posts",
"filename": "post-21.01.07.json",
"fields": {
  "title": "kohikan",
  "date": "2021.01.07",
  "readTime": "4 mins",
  "author": "claxx moldii",
  "pic": "kohikan.jpg",
  "caption": "is really good kohi available here... desu.",
  "teaser": "もしかすると、あなたの生活圏の近くにも...",
  "body": [
    "自宅の近くや職場の近く、出張先の近くなど、全国各地のさまざまな地域にある珈琲館。実は、新しい店舗が続々とオープンしているのをご存知ですか？2020年に入ってからも、利府店（宮城県）がリニューアルオープンし、今宿店（神奈川県）、祖師ヶ谷大蔵店（東京都）が続々とグランドオープンしました",
    "もしかすると、あなたの生活圏の近くにも、新しく珈琲館がオープンしているかもしれません。「どこに店舗があるの？」と気になる方は、珈琲館のウェブサイト内にある「添付検索」メニューをクリック。フリーワード検索で住所を入力するか、エリア検索することで、お近くの珈琲館のお店をお探しいただけます。また、「珈琲館 蔵」や「CAFE DI ESPRESSO」など、お好みのブランドを指定して検索することもできます。"
  ]
}

},{
"pager": 1,
"path": "posts/post-2021/post-2021-01/post-21-01-08",
"type": "posts",
"filename": "post-21.01.08.json",
"fields": {
  "title": "About Life Coffee Specialty Coffee",
  "date": "2021.01.08",
  "readTime": "4 mins",
  "author": "claxx moldii",
  "pic": "aboutLife.jpg",
  "caption": "A chic design and knowledgeable baristas at About Life Coffee Brewers. Credit: Eric S.Tessier",
  "teaser": "they regularly feature international beans...",
  "body": [
    "For a little window into the third wave of Tokyo’s coffee scene, About Life is a must-visit spot. It’s one of many stylish shops in the heart of bustling Shibuya. This area is popular with both the hip tourist crowd and Japanese third wave enthusiasts. You wouldn’t know it from the name, but About Life is the second location of Onibus Coffee. The team behind these cafés are obsessive about quality: every drink is test-tasted to make sure it meets their standards and the quality control manager is almost always on staff.",
    "One of the coolest things about this <a class='italic' href='/'>café</a>  is that it also offers you a choice of drip and espresso coffees from other Tokyo roasters. And they regularly feature international beans and guest baristas. What’s more, the sleek, clean design of this compact specialty coffee café has attracted many admirers and may make it worth a visit in its own right – it’s now one of the most Instagrammed shops in <a href='/'>Japan</a>. Just search <i>#aboutlifecoffeebrewers</i> to see what I mean."
  ]
}

},{
"pager": 1,
"path": "posts/post-2021/post-2021-02/post-21-02-09",
"type": "posts",
"filename": "post-21.02.09.json",
"fields": {
  "isPost": "post-09",
  "title": "% Arabica Niseko Hirafu188 Kiosk",
  "date": "2021.02.09",
  "readTime": "4 mins",
  "author": "claxx moldii",
  "pic": "arabica.jpg",
  "caption": "sugoi kiosk kora da...",
  "teaser": "functionally designed space for customers...",
  "body": [
    "Japan is the home country of % Arabica, and we are excited to now serve our loyal customers here in the picturesque Northern city of Niseko; one of the world’s greatest ski destinations. We are located in the centre of Niseko, called Hirafu. The kiosk is part of Hirafu188, which is a commercial space and accommodation complex in one. All day, skiers and snowboarders walk up to Niseko Mt. resort, along the road beside us as they head for a day on the slopes.",
    "The trailer kiosk has become a trademark of % Arabica countries worldwide, and the inviting design is instantly recognizable, by design as well as its fast flowing, functionally designed space for customers to pass bye and grab a coffee as they go about their day. We are also happy that our baristas from Kyoto stores can come to Niseko in the winter months to work, ski or snowboard and brew amazing coffee for the ski community – another chance for us to spread our See The World Through Coffee ethos."
  ]
}

},{
"pager": 1,
"path": "posts/post-2021/post-2021-02/post-21-02-10",
"type": "posts",
"filename": "post-21.02.10.json",
"fields": {
  "title": "Along The Middle Path, Iron Coffee In Tokyo Beckons",
  "date": "2021.02.10",
  "readTime": "4 mins",
  "author": "claxx moldii",
  "pic": "ironCoffee.jpg",
  "caption": "'Iron feels like a symbol of strength', Isono says.",
  "teaser": "there’s a strong sense of local community...",
  "body": [
    "Chances are, you’ll find Iron Coffee on your way to or from Gotokuji Temple. But don’t feel bad about it; that’s how it works for most anyone who isn’t a local. And for owner Yuki Isono, that’s the point. &ldquotThere’s no specialty coffee here,&rdquot he says. &ldquotThat’s the whole reason I chose this place. I mean, there’s a strong sense of local community, and the people are friendly, and this location happened to be available. I wanted to bring something new to that.&rdquot",
    "&ldquotWhen I started, I just liked brewing good coffee and making latte art,%rdquot he says. &ldquotBut since opening here, it’s talking to people and turning customers into friends that makes the job rewarding.&rdquot Isono tells me he gets a lot of foreign customers because of the local temple, so I wander over to check it out. After circling through the winding neighborhood streets of Setagaya, I find a giant wooden gate, and inside of it, a world different to the one I came from: temple buildings, grave stones, statues, trees, bushes."
  ],
  "archived": true
}

},{
"pager": 1,
"path": "posts/post-2021/post-2021-02/post-21-02-11",
"type": "posts",
"filename": "post-21.02.11.json",
"fields": {
  "title": "Allpress Espresso Tokyo Roastery & Café",
  "date": "2021.02.11",
  "readTime": "4 mins",
  "author": "claxx moldii",
  "pic": "allpress.jpg",
  "caption": "Allpress Espresso Tokyo Roastery & Café... subarashii!",
  "teaser": "Café, roastery and training facilities are all under one roof...",
  "body": [
      "The Kiyosumi Shirakawa district of Tokyo has become somewhat of a coffee destination. With the appearance of two big players, the Allpress Espresso Tokyo Roastery & Cafe in 2014 and Japan’s first Blue Bottle roastery in 2016, it quickly gained popularity. Beforehand, and still today actually, the community specialty roastery ‘Arise Coffee Roasters’ was one of its kind in the neighbourhood. Nowadays, these three build a coffee-triangle with Arise, Blue Bottle and Allpress Espresso all in close proximity to each other.",
      "The timber storage warehouse that is home to New Zealand’s favourite coffee roastery, (which started 1989 as a simple coffee cart - impressive, huh?), was carefully restored to celebrate its past while giving it a new purpose in the present. Café, roastery and training facilities are all under one roof and open for guests to learn, taste and enjoy. Their signature <a href='/'>Allpress Espresso Blend</a> is made up of four different origins, namely Brazil, Colombia, Guatemala & Sumatra, to create a sweet, balanced and complex brew. While it will always be on one of the grinders, the available single origin beans vary."
  ]
}

},{
"pager": 1,
"path": "posts/post-2021/post-2021-03/post-21-03-10",
"type": "posts",
"filename": "post-21.03.10.json",
"fields": {
  "title": "Glitch Coffee & Roasters",
  "date": "2021.03.10",
  "readTime": "4 mins",
  "author": "claxx moldii",
  "pic": "glitchCNR.jpg",
  "caption": "pic by @ytomatom",
  "teaser": "It has a laid-back atmosphere and the friendly owner...",
  "body": [
    "Sourcing beans from all over the world gives Glitch Coffee & Roasters an edge over the rest. Because of that, this coffee shop has accumulated a decent size of raving, coffee-loving fans. The display of all the roasts offered in the middle of the cafe space is a wonderful detail to the store. Not only does it add on to the aesthetics but it also gives a sense of what Glitch Coffee has to offer to the customers.",
    "Glitch is the perfect place for a lighter roast. The Guatemalan one seems to be a huge hit with the crowd. If you’re overwhelmed by the choices they have, the staff are more than willing to offer suggestions such as the fruity Kenya Karinga AA or whatever else that is preferable for your coffee palate. Packed with a powerful coffee range alongside the kissaten-inspired decor, Glitch is a one-stop for all the coffee drinkers."
  ]
}

},{
"pager": 1,
"path": "posts/post-2021/post-2021-03/post-21-03-22",
"type": "posts",
"filename": "post-21.03.22.json",
"fields": {
  "title": "Coffee Kazoku",
  "date": "2021.03.22",
  "readTime": "4 mins",
  "author": "claxx moldii",
  "pic": "coffeeKazoku.jpg",
  "caption": "pic from tripadvisor",
  "teaser": "It has a laid-back atmosphere and the friendly owner...",
  "body": [
    "The history of coffee in Japan goes back further than you’d think. When Japan isolated itself from 1638-1858 (a period called <i>sakoku</i>), foreign merchants’ access to Japan was strictly regulated. On the tiny island of Dejima, in Nagasaki, European merchants drank coffee, though it did not yet catch on among Japanese people. When sakoku ended and gave way to the Meiji restoration, coffee gradually began to be imported, with Tokyo’s first coffee shop apparently opening in 1888.",
    "World Wars I and II slowed coffee imports down, but in the 1960s it became fashionable, and today Japan is among the world’s largest importers of coffee, bringing in US$1.4 billion worth in 2014 alone.",
    "You can get coffee almost anywhere in Japan, from big chains like Doutor (not particularly recommended!) and Starbucks (a good place for <a href='/'>Wi-Fi in Japan</a>), to the millions of vending machines across the country, which dispense it in both hot and cold cans."
  ]
}

},{
"pager": 1,
"path": "posts/post-2021/post-2021-03/post-21-03-23",
"type": "posts",
"filename": "post-21.03.23.json",
"fields": {
  "title": "Coffee Sari",
  "date": "2021.03.23",
  "readTime": "4 mins",
  "author": "claxx moldii",
  "pic": "coffeeSari.jpg",
  "caption": "pic from tripadvisor",
  "teaser": "It has a laid-back atmosphere and the friendly owner...",
  "body": [
    "There’s no right or wrong way to get your coffee fix in Japan, but our focus here is on specialty coffee shops, where—as Tessier says—”beans are ground to order and coffee is being made by hand with care.",
    "For an interesting contrast, also be sure to visit a <i>kissaten</i>. These are old-school Japanese coffee shops where students and salarymen take their coffee with breakfast or curry rice lunch sets in delightfully vintage surroundings. One of our favorites is the legendary Chatei Hatou in Tokyo.",
    "Japan’s best coffee shops import beans from coffee-growing countries around the world, such as Guatemala, Rwanda, Kenya, Indonesia and Thailand. Beans tend to be roasted and ground on site in small batches. Aeropress, French press, and paper drip (pour over) are common preparation methods.",
    "Coffee nerds will geek out when they see the shelves of equipment at many of the shops below, and with enough <a href='/'>luggage space,</a> it can all be yours! For more check out Eric’s guide on where to buy <a href='/'>coffee accessories</a> in Japan."
  ],
  "archived": true
}

},{
"pager": 1,
"path": "tags/hekinan",
"type": "tags",
"filename": "hekinan.json",
"fields": {}
},{
"pager": 1,
"path": "tags/kissaten",
"type": "tags",
"filename": "kissaten.json",
"fields": {}
},{
"pager": 1,
"path": "tags/kyoto",
"type": "tags",
"filename": "kyoto.json",
"fields": {}
},{
"pager": 1,
"path": "tags/nagoya",
"type": "tags",
"filename": "nagoya.json",
"fields": {}
},{
"pager": 1,
"path": "tags/sapporo",
"type": "tags",
"filename": "sapporo.json",
"fields": {}
},{
"pager": 1,
"path": "tags/specialty",
"type": "tags",
"filename": "specialty.json",
"fields": {}
},{
"pager": 1,
"path": "tags/starbucks",
"type": "tags",
"filename": "starbucks.json",
"fields": {}
},{
"pager": 1,
"path": "tags/tokyo",
"type": "tags",
"filename": "tokyo.json",
"fields": {}
},{
"pager": 1,
"path": "tags/yokohama",
"type": "tags",
"filename": "yokohama.json",
"fields": {}
},{
"pager": 1,
"path": "/1",
"type": "index",
"filename": "index.json",
"fields": { "siteName": "PaperMod", "title": "Welcome to Plenti!", "intro": [ "Take a look around to see how things work.", "The bottom of each page will tell you where to find the corresponding template in your project.", "If you get stuck, check out our <a href='https://plenti.co/docs' target='blank' rel='noopener noreferrer'>docs</a>. If you need extra help, <a href='https://github.com/plentico/plenti/issues/new' target='blank' rel='noopener noreferrer'>let us know</a>! Enjoy :)" ] } 
},{
"pager": 2,
"path": "/2",
"type": "index",
"filename": "index.json",
"fields": { "siteName": "PaperMod", "title": "Welcome to Plenti!", "intro": [ "Take a look around to see how things work.", "The bottom of each page will tell you where to find the corresponding template in your project.", "If you get stuck, check out our <a href='https://plenti.co/docs' target='blank' rel='noopener noreferrer'>docs</a>. If you need extra help, <a href='https://github.com/plentico/plenti/issues/new' target='blank' rel='noopener noreferrer'>let us know</a>! Enjoy :)" ] } 
},{
"pager": 3,
"path": "/3",
"type": "index",
"filename": "index.json",
"fields": { "siteName": "PaperMod", "title": "Welcome to Plenti!", "intro": [ "Take a look around to see how things work.", "The bottom of each page will tell you where to find the corresponding template in your project.", "If you get stuck, check out our <a href='https://plenti.co/docs' target='blank' rel='noopener noreferrer'>docs</a>. If you need extra help, <a href='https://github.com/plentico/plenti/issues/new' target='blank' rel='noopener noreferrer'>let us know</a>! Enjoy :)" ] } 
},];

export default allContent;