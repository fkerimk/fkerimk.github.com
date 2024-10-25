class Game {

    constructor(name, desc, icon, yt, app) {

        this.name = name;
        this.desc = desc;
        this.icon = icon;
        this.yt = yt;
        this.app = app;
    }
}

var games = [

    new Game('House Mover', 'Take the furniture and earn money!', 'house-mover.jpg', 'ftuifcOt3v4', 'https://appmagic.rocks/ipad/move-house/1601820561/info'),
    new Game('Blunt Blaster', 'Start hitting the enemy, raise your guard while the enemy is hitting, then attack again and blow off the enemy\'s head!', 'blunt-blaster.jpg', '8Kt7ajRvCOg', 'https://appmagic.rocks/ipad/blunt-blaster/1631821139/info'),
    new Game('Burning Feet', 'Balance your speed for your feet!', 'burning-feet.jpg', 'BFpUxJhV5NU', 'https://appmagic.rocks/ipad/burning-feet/1590350634/info'),
    new Game('Horror Morph', 'Morph to right creature and kill them all!', 'horror-morph.jpg', 'Qc4QRHemtFM', 'https://appmagic.rocks/iphone/horror-morph/1585983209/info'),
    new Game('Fly Kicker', 'Fight the enemy, protect the princess and save her!', 'fly-kicker.jpg', 'GNYGDXQLsZw', 'https://appmagic.rocks/ipad/fly-kicker/1609426388/info'),
    new Game('Run Back Puncher', 'Punch down objects or your opponent to slow them down and reach the finish without getting caught!', 'run-back-puncher.jpg', 'ozMfBHa9rUk', 'https://appmagic.rocks/ipad/run-back-puncher/1609481343/info'),
    new Game("Wall Blob", "Collect the same colored stickman on the platform to increase your level, stick to the wall and keep moving forward and reach the finish at the highest level!", 'wall-blob.jpg', 'VUOZbFeKzBY', 'https://appmagic.rocks/ipad/wall-blob/6443979458/info'),
    new Game('Pick Your Vehicle', 'Choose the right vehicle to pass the way!', 'pick-your-vehicle.jpg', 'sYd15cVE1d8', 'https://appmagic.rocks/ipad/pick-your-vehicle/1585968997/info'),
    new Game('Bungee Buster', 'Combine the required number of blocks, reach the targeted score and win the game!', 'bungee-buster.jpg', 'eAD-Re8vnU0', 'https://appmagic.rocks/iphone/bungee-buster/1636191392/info'),
    new Game('Windscreen Wiper', 'Use wiper as fast as you can to win the race!', 'windscreen-wiper.jpg', 'JL6XjRMa5wc', 'https://appmagic.rocks/ipad/windscreen-wiper/1587115369/info'),
    new Game('Offroad Bus', 'Drive the bus carefully across rough terrain, collect passengers, earn money and reach the finish!', 'offroad-bus.jpg', 'yqW6xRzW0ms', 'https://appmagic.rocks/iphone/offroad-bus/1606928541'),
    new Game('Mushroom Soldiers', 'Plant the mushroom and raise them to win battle!', 'mushroom-soldiers.jpg', 'L-ybxPWLGwU', 'https://appmagic.rocks/ipad/mushroom-soldiers/1584119828/info'),
    new Game('Tape Agent', 'Set tape between walls and catch the people!', 'tape-agent.jpg', 'VFLxQp1h0b0', 'https://appmagic.rocks/iphone/tape-agent/1581777103/info'),
    new Game('Escape the Party', 'Take a careful step and don\'t awake them!', 'escape-the-party.jpg', 'rjFQH9fBy58', 'https://appmagic.rocks/ipad/escape-the-party/1591513647/info'),
    new Game('Mix Match Puzzle', 'Drag the right colors on top of each other, create the expected color and win the game!', 'mix-match-puzzle.jpg', 'Pg3iwHtunqI', 'https://appmagic.rocks/ipad/mix-match-puzzle/1637700169/info'),
    new Game('Liklok Beggar', 'Beg money from people, increase your popularity, duel with other people, earn more money and win the game!', 'liklok-beggar.jpg', 'Vyy0ZvYbpZ4', 'https://appmagic.rocks/ipad/liklok-beggar/1640289262/info'),
    new Game('Wood Chip Painter', 'Color the object with colored sawdust, press it, file the rough surface and get the colored object!', 'wood-chip-painter.jpg', 'IRgnwT5qJMo', 'https://appmagic.rocks/iphone/wood-chip-painter/1643412566/info'),
    new Game('Merge Socks', 'Find the pairs and earn money!', 'merge-socks.png', 'Owu-p4gkoaU', 'https://appmagic.rocks/google-play/merge-socks/com.fiveohfivegames.mergesocks/info'),
    new Game('Ball on Fan', 'Blow the balls and pass through the multipliers to make thousand ball.', 'bacll-on-fan.jpg', 'W0Z7RMJp8nI', 'https://appmagic.rocks/iphone/ball-on-fan/1584504961/info'),
    new Game('Last Standing Soldier', 'Kill them all and protect yourself!', 'last-standing-soldier.jpg', 'py_3u7HBwy0', 'https://appmagic.rocks/iphone/last-standing-soldier/1580318427/info'),
    new Game('Stab Him', 'Cut fruits, earn money, increase your power using increments, defeat the enemy and win the duel!', 'stab-him.jpg', 'jw5xInGoPsY', 'https://appmagic.rocks/iphone/stab-him/1637353469/info'),
    new Game('Beauty Stats', 'Collect enough money, have a beautiful body and be the most beautiful!', 'beauty-stats.jpg', 'k59l0EUGDds', 'https://appmagic.rocks/iphone/beauty-stats/1613158989/info'),
    new Game('Wheelie Rider', 'Wheelie to win the race!', 'wheelie-rider.jpg', 'nthR5b_Gfls', 'https://appmagic.rocks/iphone/wheelie-rider/1587635995/info'),
    new Game('Pro Fisher', 'Start pulling the fishing line, wait for a while when it\'s hot and try to catch the fish!', 'pro-fisher.jpg', 'miGyqkwWLtI', 'https://appmagic.rocks/ipad/pro-fisher/1623189930/info'),
    new Game('Swing the Bat', "Swing the stick, defeat the enemy, increase your level, increase the stick's characteristics by passing through the gates and reach the finish with the highest level!", 'swing-the-bat.jpg', "EfiQmPQ7sFM", "https://appmagic.rocks/ipad/swing-the-bat/6444107467/info"),
    new Game('Jumping Drill', 'Press and hold the screen to start the drill, start drilling the stone, wait if the drill heats up and reach the finish!', 'jumping-drill.jpg', 'Dz4Sv5QY8KY', 'https://appmagic.rocks/iphone/jumping-drill/1615281623/info'),
    new Game('Doll House Maker', 'Arrange the furniture properly and complete all the rooms of the house!', 'doll-house-maker.jpg', 'Z-MMqR5xdP8', 'https://appmagic.rocks/iphone/doll-house-maker/1614160105/info'),
    new Game('Car or Human', 'Enlarge the car or increase the number of people, reach the finish and win the game!', 'car-or-human.jpg', 'fqwj0Ky7nU8', 'https://appmagic.rocks/ipad/liklok-beggar/1640289262/info'),
    new Game('He Will Pick Me', 'Collect the right objects, be beautiful and achieve the man!', 'he-will-pick-me.jpg', 'ySBTl_2GxuM', ),
    new Game('Find the Killer', 'Ask a right questions to find the killer!', 'find-the-killer.jpg', 'nnpk43H7WUw', 'https://appmagic.rocks/ipad/find-the-killer/1588806184/info'),
    new Game('Text and Walk', 'Text with your phone and don\'t hit the people!', 'text-and-walk.jpg', 'wSwFmxSobqw', 'https://appadvice.com/app/text-and-dodge/1602680674'),
    new Game('Coal Miner', 'Collect coal, earn money, grow your wagon and pickaxe!', 'coal-miner.jpg', '1j1bk4bsmMw', 'https://appmagic.rocks/iphone/coal-miner/1600057325/info'),
    new Game('Ballerina Gun', 'Shoot the enemies and make them a ballerina', 'ballerina-gun.jpg', 'Ac8pk2-7W8U', 'https://appmagic.rocks/ipad/ballerina-gun/1580313302/info'),
    new Game('Rubber Shooter', 'Throw the rubber band and kill the enemy!', 'rubber-shooter.jpg', 'ZJWwmBM4LH8', 'https://appmagic.rocks/ipad/rubber-shooter/1604249148/info'),
    new Game('Follower Run', 'Make the best decision and collect the followers!', 'follower-run.jpg', '7s0TIjhe2MA', 'https://appmagic.rocks/iphone/follower-run/1579241286/info'),
    new Game('Shape Gun', 'Shoot the enemy and change it\'s shape.', 'shape-gun.jpg', 'C6D4wnjt3Mc', 'https://appmagic.rocks/iphone/shape-gun/1592909678/info'),
    new Game('Ear to Ear', 'When the correct letter comes, touch the screen and whisper the sentence correctly!', 'ear-to-ear.jpg', 'Op0S21IJ3M0', 'https://appmagic.rocks/iphone/ear-to-ear/1612338066/info'),
    new Game('Hair Stack', 'Gather hair, dye, increase the amount of hair by going through the doors and plant hair for the bald ones!', 'hair-stack.jpg', 'ikzwbSYqIyw', 'https://appmagic.rocks/ipad/hair-stack/1611177577/info'),
    new Game('Ball Filler', 'Fill the circle with as many balls as possible using the increments!', 'ball-filler.jpg', 'n8gxVOoJMBk', 'https://appmagic.rocks/ipad/ball-filler/1619392906/info'),
    new Game('Eternal Doors', 'Open the doors, wait when it\'s hot, go ahead and reach the finish!', 'eternal-doors.jpg', '6QwQhLOz_UM', 'https://appmagic.rocks/iphone/eternal-doors/1618982358/info'),
    new Game('Spiral Drawing', 'Start drawing lines with the pen, increase the size of the pen using increments, and finally decide whether to sell or draw!', 'spiral-drawing.jpg', 'kGlF4bpvpVo', 'https://appmagic.rocks/ipad/spiral-drawing/1622660032/info'),

    //new Game("Ice Gunner", "Shoot the traps and enemies to freeze them, reach the finish and kill the toughest enemy!", null, "zzZAxE_VzBY", null),
];

function SetApp (id) {

    var gamesPanel = document.getElementsByClassName("games-panel")[0];

    var titleBar = gamesPanel.querySelector(".title-bar");
    titleBar.style = `background-image: url('assets/appicons/${games[id].icon}')`

    var icon = gamesPanel.querySelector(".title-bar>.filter>.icon>img");
    icon.src = `assets/appicons/${games[id].icon}`;

    var title = titleBar.querySelector(".filter>.text>.title");
    title.textContent = games[id].name;

    var subtitle = titleBar.querySelector(".filter>.text>.subtitle");
    subtitle.textContent = games[id].desc;

    var iframe = gamesPanel.querySelector(".youtube-embed>iframe");
    iframe.src = `https://www.youtube.com/embed/${games[id].yt}`;
    iframe.src = iframe.src;

    var youtubeButton = gamesPanel.querySelector(".buttons>a#yt");
    youtubeButton.href = `https://www.youtube.com/watch?v=${games[id].yt}`;

    var apppageButton = gamesPanel.querySelector(".buttons>a#ap");
    apppageButton.href = games[id].app;
}

var gameIndex = 0;

window.onload = function() {

    SetApp(gameIndex);
};

function GamesPanelPop () {

    var gamesPanel =  document.getElementsByClassName("games-panel")[0];
    gamesPanel.classList.add("pop");
    setTimeout(function() { gamesPanel.classList.remove("pop"); }, 250);
}


function GamesPanelPrevious(){

    gameIndex--;

    if (gameIndex < 0)
        gameIndex = games.length - 1;

    SetApp(gameIndex);

    GamesPanelPop();
}

function GamesPanelNext(){

    gameIndex++;

    if (gameIndex >= games.length)
        gameIndex = 0;

    SetApp(gameIndex);

    GamesPanelPop();
}