const menu = [
  {
    modid: 1,
    category: 'Character',
    modName: 'AddCustomTurn',
    version: '0.1.1',
    description:
      'AddCustomTurn provides an easy way to add (and remove) custom turns which increment or decrement, and have auto delete features.\r\r For instructions, run `!act --help`.\r\r Forum Discussion: https://app....',
    author: 'The Aaron',
  },
  {
    modid: 2,
    category: 'Character',
    modName: 'Ammo',
    version: '0.3.11',
    description:
      "Ammo provides inventory management for ammunition stored in a character attribute. If the adjustment would change the attribute to be below 0 or above it's maximum value, a warning will be issued and ...",
    author: 'The Aaron',
  },
  {
    modid: 3,
    category: 'Character',
    modName: 'CharacterSheet',
    version: '1.2.1',
    description:
      "A simple and easily customizable script allowing players to create their own character sheets. Using the command '!charsheet' will generate a character sheet controlled by the user that runs the comma...",
    author: 'Kevin The Barbarian,TECH',
  },
  {
    modid: 4,
    category: 'Character',
    modName: 'ChatSetAttr',
    version: '1.10',
    description:
      '# ChatSetAttr\n\nThis script is a utility that allows the user to create, modify, or delete character attributes via chat messages or macros. There are several options that determine which attributes ar...',
    author: 'Jakob',
  },
  {
    modid: 5,
    category: 'Character',
    modName: 'Critical',
    version: '0.1.0',
    description: 'Critical hit generator. Use !critical [percent] to use.',
    author: 'Ryan Jentzsch',
  },
  {
    modid: 6,
    category: 'Character',
    modName: 'EasyExperience',
    version: '1.13',
    description:
      '# EasyExperience\r\r###### Make awarding XP simple!\r\r### PC vs. NPC: \rThe script determines if a character is a PC or an NPC based on whether or not it is controlled by a  specific player. Characters wi...',
    author: 'Scott C.,Bret',
  },
  {
    modid: 7,
    category: 'Character',
    modName: 'Experience Tracker',
    version: '2.1',
    description:
      'This script allows for automatic tracking of a Dungeons and Dragons 5e like experience system, aswell as level up announcement in chat. !xp handles experience and announces level up',
    author: 'Kasper K.',
  },
  {
    modid: 8,
    category: 'Character',
    modName: 'Fumbler',
    version: '0.4.0',
    description:
      'A simple and sometimes humorous fumble generator\r\rTo use enter !fumble [roll%] in the chat. The roll% is an optional % die roll, if not provided then a random percent will be selected.',
    author: 'Ryan Jentzsch',
  },
  {
    modid: 9,
    category: 'Character',
    modName: 'GroupCheck',
    version: '1.12',
    description:
      '\n\n# GroupCheck\nThis is an API script meant to run checks for several tokens at once. You can specify the type of check to run and it will roll it once for every selected token. Note that you **will** ...',
    author: 'Jakob',
  },
  {
    modid: 10,
    category: 'Character',
    modName: 'GroupInitiative',
    version: '0.9.36',
    description:
      "Rolls initiative for the selected tokens and adds them to the turn order if they don't have a turn yet.\r\rThe calculation of initiative is handled by the combination of Roller (See **Roller Options** b...",
    author: 'The Aaron',
  },
  {
    modid: 11,
    category: 'Character',
    modName: 'Markov',
    version: '0.1.3',
    description:
      'A simple name generator that uses markov chains\r\rTo use, enter `!markov` in the chat and a new name will be generated using a markov chain.\rFor full command usage, enter `!markov -h` in chat.\n\nSee the...',
    author:
      'Ryan Jentzsch, Craig Burton (retooled into Roll20 -- based on works created by drow <drow@bin.sh> and released into the public domain)',
  },
  {
    modid: 12,
    category: 'Character',
    modName: 'namegen',
    version: '0.0.3',
    description:
      'Script to randomly generate names for character, towns or inns.\n\n**Use:** type `!namegen`, `!towngen`, or `!taverngen`.\n\nMore info: [Script:namegen](https://wiki.roll20.net/Script:namegen) or [Readme]...',
    author: 'Paul S.',
  },
  {
    modid: 13,
    category: 'Character',
    modName: 'Observer',
    version: '0.1.6',
    description:
      'Manages observer players, who are given the visiblilty (and control) of all player characters. This is useful for both podcasting views and local play on a single player screen. Note that observers wi...',
    author: 'The Aaron',
  },
  {
    modid: 14,
    category: 'Character',
    modName: 'PublicSheet',
    version: '1.1',
    description:
      '\n\nThis is a utility script to manage public read-only versions of character sheets, for when you want players to see, but not edit, the character sheets of other players. Enter **!publicsheet** in cha...',
    author: 'Jakob',
  },
  {
    modid: 15,
    category: 'Character',
    modName: 'Status FX',
    version: '1.2.1',
    description:
      "# Status FX\r\r_v1.2 Updates:_\r* Added a user option to set the interval that it cycles through effects.\r* Improved the script's ability to detect when status markers change.\r\rThis script allows you to ...",
    author: 'Ada Lindberg',
  },
  {
    modid: 16,
    category: 'Character',
    modName: 'Welcome Package',
    version: '1.3.2',
    description:
      '# Welcome Package\r\rThis script welcomes new players to your game and creates a blank new character\rfor them to begin building immediately.\r\rNormally, this would be a back and forth process with variou...',
    author: 'Ada Lindberg',
  },
  {
    modid: 17,
    category: 'Chat',
    modName: 'ColorEmote',
    version: '0.1.9',
    description:
      'ColorEmote provides a long form emote block with a colored background and header based on the Character, Token, or Player speaking. The header contains a representative image for the speaker (Characte...',
    author: 'The Aaron',
  },
  {
    modid: 18,
    category: 'Chat',
    modName: 'ColorNote',
    version: '0.2.4',
    description:
      'ColorNote provides a way for players to output text similar to /em, but colored based on their player color.\r\n\r\nFor instructions, run `!note` with no arguments.',
    author: 'The Aaron',
  },
  {
    modid: 19,
    category: 'Chat',
    modName: 'Customizable Roll Listener',
    version: '1.1',
    description:
      '# Customizable Roll Listener\r\r### The script allows you to define custom reactions to various chat input and roll results. Listeners are stored as abilities in a script created character, which also h...',
    author: 'Scott C.',
  },
  {
    modid: 20,
    category: 'Chat',
    modName: 'emas',
    version: '0.8.5',
    description:
      'Provides a command that players can use to replicate GM-only and player chat commands.\r\rSupported commands are: `!emas`, `!as`, `!w`, `!r`, `!gr`, `!desc`.\r\rFor instructions run any of the commands wi...',
    author: 'The Aaron',
  },
  {
    modid: 21,
    category: 'Chat',
    modName: 'Hidden Roll Messages',
    version: '1.0.0',
    description:
      'Inspired by Disco Elysium, this script will roll a check for all player in the background then whisper the player with some information if they pass the check. This script was designed to allow GMs to...',
    author: 'Phillip T.',
  },
  {
    modid: 22,
    category: 'Chat',
    modName: 'Message of the Day',
    version: '0.2.12',
    description:
      'MotD is a simple script that creates a handout named **MotD Note**. When a player logs in, it whispers the contents of that note to the player. Any formatting that works in the Note is passed on to th...',
    author: 'The Aaron',
  },
  {
    modid: 23,
    category: 'Chat',
    modName: 'Rollable Table Macros',
    version: '1.1',
    description:
      '# Rollable Table Macros\r\rThis is a simple script that gets an item from a rollable table and enters its name as a chat message rather than showing it as a rollable table result. This allows use of mos...',
    author: 'Nathanael W.',
  },
  {
    modid: 24,
    category: 'Lighting',
    modName: 'DL Darkness',
    version: '0.3',
    description:
      '**Creates a gridded circle based on a specific token on the Dynamic Lighting layer to be used as magical darkness.** \r\r**FORUM LINK:** For full documentation, see the forum thread for this script [her...',
    author: 'David M.',
  },
  {
    modid: 25,
    category: 'Lighting',
    modName: 'DLEllipseDrawer',
    version: '1.1',
    description:
      'This script allows ellipses to be drawn on the Dynamic Lighting layer and have them automatically convert to polygon approximations. To use, just activate the script and draw a circle or ellipse using...',
    author: 'Tim M.',
  },
  {
    modid: 26,
    category: 'Lighting',
    modName: 'Door Knocker',
    version: '1.213',
    description:
      '# Door Knocker v1.1\r___\rWelcome to Door Knocker. This script helps quickly open and close doors by controlling the dynamic lighting lines. If you have any questions, comments, or find a bug; please dr...',
    author: 'Scott C.',
  },
  {
    modid: 27,
    category: 'Lighting',
    modName: 'Dynamic Light Helper',
    version: '2.0',
    description:
      'DynamicLightHelper automatically splits lines drawn on the Dynamic Lighting layer and adds control points for easy manipulation.\r\r## Commands\r\r```!Dynamic_Light_Helper [hidehelp|showhelp]```\r\rWhen Dyn...',
    author: 'Stephen Shomo',
  },
  {
    modid: 28,
    category: 'Lighting',
    modName: 'Dynamic Light Recorder',
    version: '1.0.2',
    description:
      'Records dynamic lighting paths for map tiles & automatically recreates them when new tiles are placed.',
    author: 'Lucian Holland',
  },
  {
    modid: 29,
    category: 'Lighting',
    modName: 'Elevation',
    version: '0.1.0',
    description:
      'Defines different elevation levels to allow showing/hiding of different map sections with DL paths for different elevations',
    author: 'Lucian Holland',
  },
  {
    modid: 30,
    category: 'Lighting',
    modName: 'LightCrumbTrails',
    version: '0.77',
    description:
      "LightCrumbTrails is a script to produce lit, shared-vision breadcrumbs behind character tokens. This allows them to see where they've been on maps with dynamic lighting. Great for dungeon-crawls and h...",
    author: 'Plexsoup, The Aaron, Tritlo',
  },
  {
    modid: 31,
    category: 'Lighting',
    modName: 'Move Lighting',
    version: '0.1.4',
    description:
      '# Page FX\n\n_v0.1.4 Updates_\n\nUse the command !movelight with the parameters of:\n\n1) the layer to move to and\n\n2) the ID of the dynamic lighting path object\n\nExample: !movelight gmlayer -LDSsme9FmMDFmf...',
    author: 'Luke LeClair a.k.a Kastion',
  },
  {
    modid: 32,
    category: 'Lighting',
    modName: 'One-Way Dynamic Lighting',
    version: '1.0.2',
    description:
      "# One-Way Dynamic Lighting\r\r_This script is deprecated. Please use Roll20's built-in one-way dynamic lighting walls feature instead._\r\rI'm happy to have provided this capability through the API before...",
    author: 'Ada Lindberg',
  },
  {
    modid: 33,
    category: 'Lighting',
    modName: 'ShareVision',
    version: '1.4',
    description:
      "ShareVision allows you to share a token's sight with the whole party. Use the aura status marker to share normal vision and the overdrive status marker to share darkvision.",
    author: 'Scott C.',
  },
  {
    modid: 34,
    category: 'Lighting',
    modName: 'Torch',
    version: '0.8.13',
    description:
      'Torch provides commands for managing dynamic lighting. Supplying a first argument of **help** to any of the commands displays this help message, as will calling `!torch` or `!snuff` with nothing suppl...',
    author: 'The Aaron',
  },
  {
    modid: 35,
    category: 'Lighting',
    modName: 'UDLPasswall',
    version: '0.1.0',
    description:
      "UDLPasswall converts path objects to paths that block vision but don't block movement. This requires twice the space of the opening to make the full distance open. The excess space is spread to either...",
    author: 'The Aaron',
  },
  {
    modid: 36,
    category: 'Lighting',
    modName: 'UDLWindows',
    version: '0.1.2',
    description:
      "UDLWindows converts path objects to paths that don't block vision but do block movement.\r\rFor instructions see the *Help: UDLWindows* Handout in game, or run `!to-window --help`, or visit [UDLWindows ...",
    author: 'The Aaron',
  },
  {
    modid: 37,
    category: 'Lighting',
    modName: 'Walls',
    version: '0.3.7',
    description:
      "Walls provides a way to generate the Dynamic Lighting Walls for your maps using SVG Paths exported from The GIMP.  Since it's designed to take information generated by a script, there wouldn't be any ...",
    author: 'The Aaron',
  },
  {
    modid: 38,
    category: 'Sound',
    modName: 'Roll20 Audio Master',
    version: '2.15',
    description:
      'Roll20 Audio Master (a.k.a Roll20AM)  allows control of the jukebox via the chat interface and expands upon the standard jukebox functionality with some additional commands.\n### Getting Started\n* Impo...',
    author: 'Victor B, Scott C.',
  },
  {
    modid: 39,
    category: 'Sound',
    modName: 'Simple Sound',
    version: '2.1',
    description:
      'The goal of this script is to play/stop sound effects from the Roll20 Jukebox via macro and chat commands.\n\nCommands: `!splay trackname`, `!sstop trackname`, `!sstop`(stops all), `!swhisper`(toggle th...',
    author: 'Ben F.',
  },
  {
    modid: 40,
    category: 'Pages',
    modName: 'Change Map - Clone Tokens',
    version: '1.0',
    description:
      'This script listens for change of page event (drag the ribbon) and will clone player tokens onto the new page. Ignoring duplicate tokens by name.\nPrevious workflow for changing the page is drag player...',
    author: 'Dystopian Djinni',
  },
  {
    modid: 41,
    category: 'Pages',
    modName: 'Custom FX',
    version: '0.1',
    description:
      'Enables the creation and previewing of FX objects. `!createfx` will create an FX object directly, while `!previewfx` will allow you to build an FX object incrementally, seeing the changes to the effec...',
    author: 'Brian Shields',
  },
  {
    modid: 42,
    category: 'Pages',
    modName: 'DryErase',
    version: '0.1.8',
    description:
      'DryErase gives you control over how your players are drawing on your maps.  It\rallows you to prevent any drawing, allow certain people to draw, label\rdrawings so you know who made them, move all drawi...',
    author: 'The Aaron',
  },
  {
    modid: 43,
    category: 'Pages',
    modName: 'Dungeon Alchemist Importer',
    version: '0.0.4',
    description: 'Imports Dungeon Alchemist maps. Read the guide at https:',
    author: 'Karel Crombecq, Briganti',
  },
  {
    modid: 44,
    category: 'Pages',
    modName: 'Hexploration',
    version: '1.3',
    description:
      "# Hexploration\r\r_v1.3 Updates:_\r* Fixed a couple state bugs.\r\rThis script allows GMs to draw a polygon on a hex-gridded map and fill in\reach hex inside that polygon with an opaque hexagon. It's great ...",
    author: 'Ada Lindberg',
  },
  {
    modid: 45,
    category: 'Pages',
    modName: 'MapChange',
    version: '1.4',
    description:
      "Provides a way for users to move between maps in a campaign without the GM needing to move them.\n\nFor full information on how to use the script, use the command '!mc help' in game.",
    author: 'TheWhiteWolves',
  },
  {
    modid: 46,
    category: 'Pages',
    modName: 'Page FX',
    version: '1.3',
    description:
      "# Page FX\r\r_v1.3 Updates_\r* A PageFX token's bar 1 current and max values can now be used to specify a range for randomly setting its time interval.\r\rThis script allows GMs to set up environmental spe...",
    author: 'Ada Lindberg',
  },
  {
    modid: 47,
    category: 'Pages',
    modName: 'Page Navigator',
    version: '2.11518021707',
    description:
      '# Page Navigator v2.0\nPage Navigator allows you to more easily move your players from page to page. Movement can be triggered by chat command or token movement. The script will also handle creation of...',
    author: 'Scott C.',
  },
  {
    modid: 48,
    category: 'Pages',
    modName: 'Path Splitter',
    version: '1.1.1',
    description:
      "# Path Splitter\r\r_Updates:_\r_v1.1:_\r* Pathsplitter now supports elliptical paths.\r* If a splitting path isn't selected, it will display a message in the chat with the current splitting color.\r* When t...",
    author: 'Ada Lindberg',
  },
  {
    modid: 49,
    category: 'Pages',
    modName: 'SmartAoE',
    version: '0.25',
    description:
      "Have you ever overlayed a cone, line, or circle template on a map and wondered if that square that is just barely covered should count as 'in'? Sure, there are pre-made grid templates out there, but y...",
    author: 'David M.',
  },
  {
    modid: 50,
    category: 'Pages',
    modName: 'SyncPage',
    version: '0.1.9',
    description:
      '* Skype: RobinKuiper.eu \n* Discord: Atheos#1095 \n* Roll20: https://app.roll20.net/users/1226016/robin\n* Github: https://github.com/RobinKuiper/Roll20APIScripts\n* Reddit: https://www.reddit.com/user/ro...',
    author: 'Robin Kuiper',
  },
  {
    modid: 51,
    category: 'Pages',
    modName: 'Terrain Generator',
    version: '0.1.1',
    description:
      'Automates creation of outdoor maps (forests, deserts, etc.\rCommands:\r!TGFillBG [pageName] [rollableTableName] [itemNames] [size]\r!TGSpawnTrees [pageName] [rollableTableName] [itemNames] [size] [sparsi...',
    author: 'Sebastian O.',
  },
  {
    modid: 52,
    category: 'Pages',
    modName: 'True Page Copy',
    version: '1.0',
    description:
      'A script to properly duplicate graphics from one page to another.',
    author: 'Bodin Punyaprateep (PaprikaCC)',
  },
  {
    modid: 53,
    category: 'Pages',
    modName: 'World Map Discovery',
    version: '1.1',
    description:
      '# World Map Discovery\r\r_v1.1 Updates:_\r* Location discoveries now display an HTML-formatted message to the chat.\r* When locations are discovered, their white-tower status is removed.\r* The script now ...',
    author: 'Ada Lindberg',
  },
  {
    modid: 54,
    category: 'Systems',
    modName: '13th Age Official Character Sheet Companion',
    version: '1.0',
    description:
      'Enhances the Official 13th Age Character Sheet with quick Escalation Die tracking, automatic recovery tracking, token setup, and automatic staggered and down icons.\r\r**API COMMANDS**\r\r**!edie** will a...',
    author: 'Steve K.',
  },
  {
    modid: 55,
    category: 'Systems',
    modName: '5E BattleMaster',
    version: '0.1',
    description:
      'The 5E BattleMaster script is designed to make combat according to 5th Edition rules an absolute breeze. When combat starts, type "!combat start" to begin the encounter. When combat ends, type "!comba...',
    author: 'Ian Hunicke-Smith',
  },
  {
    modid: 56,
    category: 'Systems',
    modName: '5E Resting in Style',
    version: '1.2.1',
    description:
      '# 5E Resting in Style\n\nThis script for the 5E OGL character sheet solves the error prone task of updating your character sheet when resting. Using !long-rest and !short-rest commands will update your ...',
    author: 'Magnar Sveen',
  },
  {
    modid: 57,
    category: 'Systems',
    modName: '5e Shaped Companion Script',
    version: '10.0.1',
    description:
      '\n\n# Roll20 Shaped Character Sheet Companion Script\nThis is a script designed for use with the API on the [Roll20 Virtual Table Top](http://roll20.net). This script is specifically designed to provide ...',
    author: 'Lucian H., Brunhine',
  },
  {
    modid: 58,
    category: 'Systems',
    modName: '5th Edition OGL by Roll20 Companion',
    version: '1.4.4',
    description:
      'Enhances the Official 5th Edition OGL by Roll20 Character Sheet. The Companion currently supports Ammo Tracking, Automatic NPC Tokens, Automatic Death Save Tracking, and Automatic Spell Slot Tracking....',
    author: 'Steve K., Chris M., Christopher D.',
  },
  {
    modid: 59,
    category: 'Systems',
    modName: 'ABFRoll',
    version: '1.0',
    description:
      'This API works in addition to the Anima Beyond Fantasy sheet.\r\r## Commands\r\r```!ABFList```\r\rThis command displays the list of attack/defense rolls made from the sheet.\r\r```!ABFClean```\r\rThis command c...',
    author: 'Alain H.',
  },
  {
    modid: 60,
    category: 'Systems',
    modName: 'Aborea Character Sheet AutoCalculations',
    version: '1.0',
    description:
      'Provides some automated calculations for values of attributes that cannot be calculated by the html sheet directly.',
    author: 'Scaby79',
  },
  {
    modid: 61,
    category: 'Systems',
    modName: 'AgoneCleanOlds',
    version: '0.1',
    description:
      'Allows the GM to clean old attributes from Agone-(french) sheet version 0.1, with the command !AgoneCleanOlds in the chat (can take a while).\rI recommand to first copy your game and test on it.',
    author: 'Le GDF',
  },
  {
    modid: 62,
    category: 'Systems',
    modName: 'AgoneDice',
    version: '0.4',
    description: 'Allows automatic fumble with Agone-(french) sheet',
    author: 'Le GDF',
  },
  {
    modid: 63,
    category: 'Systems',
    modName: 'Alien RPG Dice Roller',
    version: '2.00',
    description:
      "This is a Dice Roller used for Alien RPG dice rolls. It can be used in combination with the Alien RPG Character Sheet, but can also be used independently. Get info on how to use with chat command '!al...",
    author: 'Richard W',
  },
  {
    modid: 64,
    category: 'Systems',
    modName: 'ARC.doom',
    version: '1.0',
    description:
      '# ARC.doom API\n\nThis script is a utility that allows the user to import and export characters, generate random plot points (omens), and facilitate the Doomsday Clock.\n\n\n\nTo get started, `!arc .help` w...',
    author: 'Morgdalaine',
  },
  {
    modid: 65,
    category: 'Systems',
    modName: 'Ars Magica 5e--Automated Stress Die',
    version: '1.0',
    description:
      "This allows players to enter '!st <number1>' or '!st <number1>, <number2>' (_nomod version: !st or !st <number2>) to roll a stress die with modifier <number1> and optional botch dice count <number2>. ...",
    author: 'Chris Lankford',
  },
  {
    modid: 66,
    category: 'Systems',
    modName: 'AttackMaster',
    version: '2.046',
    description:
      'AttackMaster API for AD&D 2E provides functions to manage weapons, armour & shields, including taking weapons in hand and using them to attack, ranged weapon range and ammo management; penalties & bon...',
    author: 'Richard E.',
  },
  {
    modid: 67,
    category: 'Systems',
    modName: 'Blades in the Dark Companion Script',
    version: '2.3',
    description:
      '# Blades in the Dark Companion Script\n\nThis is a helper script mainly intended to make it easy to synchronise data (stress, trauma, harm, clocks) between the tabletop and the character sheet. Enter **...',
    author: 'Chris M., Jakob',
  },
  {
    modid: 68,
    category: 'Systems',
    modName: 'CashMaster',
    version: '0.10.1',
    description:
      '# CashMaster\r\rA currency management script for the D&D 5e OGL sheets on Roll20.net.\r\rPlease use `!cm` for inline help and examples.\r\r## Setup\r\r### Player Setup\r\r1. Create a macro bar button for the co...',
    author: 'Arthur B, Kryx, Michael G.',
  },
  {
    modid: 69,
    category: 'Systems',
    modName: 'Clock Tokens',
    version: '1.2.1',
    description:
      "A script for GMs utilising Multi-sided tokens to track 'clocks', a common mechanic for tracking progress in Powered By The Apocolypse and Forged In The Dark games, among others. Accepts the command !c...",
    author: 'Tyson Tiatia',
  },
  {
    modid: 70,
    category: 'Systems',
    modName: 'COFantasy',
    version: '3.08',
    description:
      'Provides a set of functionalities for the RPG named Chroniques Oubliees Fantasy. Those functionalities concern mostly the fights, and provide automatic support for initiative tracking, attack tests, d...',
    author: 'Ulti, Far2Casual',
  },
  {
    modid: 71,
    category: 'Systems',
    modName: 'CommandMaster',
    version: '2.027',
    description:
      'The CommandMaster API is part of the RPGMaster suite of APIs for Roll20, and manages the initialisation of a Campaign to use the RPGMaster APIs, communication and command syntax updates between the AP...',
    author: 'Richard E.',
  },
  {
    modid: 72,
    category: 'Systems',
    modName: 'Concentration',
    version: '0.1.14',
    description:
      'Concentration keeps track of characters concentration, and reminds to do a concentration check.  If you use the 5e OGL character sheet, it can also automaticly add the concentrating marker when a conc...',
    author: 'Robin Kuiper',
  },
  {
    modid: 73,
    category: 'Systems',
    modName: 'Cyberpunk 2k20 (micka9fr)',
    version: '1.5',
    description:
      'Only work with the **Cyberpunk2k20 (Version 2)** character sheet by Micka9fr. Auto-calculation Damage and Armor degradation.',
    author: 'Michael Notaro',
  },
  {
    modid: 74,
    category: 'Systems',
    modName: 'Cypher System Sheet',
    version: '1.2',
    description:
      'Enables the applying of stat cost, recovery roll advance, auto calculation of PC state and damage track in the Cypher System Sheet, from the roll template, sheet buttons and/or macros. Read the [Wiki ...',
    author: 'Natha',
  },
  {
    modid: 75,
    category: 'Systems',
    modName: 'Cypher Systems by Roll20 Companion',
    version: '1.001',
    description:
      'Enables the applying to characters of Stats costs and Recovery rolls advancement from the chat roll template, as well as applying Damage to NPCs.',
    author: 'Natha',
  },
  {
    modid: 76,
    category: 'Systems',
    modName: 'D&D 5E - GMSheet',
    version: '0.2.0',
    description:
      '### Roll20-GMSheet\r*Version 0.2.0*\r\rA quick GM Cheatsheet for the **D&D 5E by Roll20** character sheet.\rPlease use `!gmsheet -h` for inline help and examples.\r\r#### Displayed information\r\rThe script c...',
    author: 'Arthur B',
  },
  {
    modid: 77,
    category: 'Systems',
    modName: 'D&D 5E - Mass Combat',
    version: '1.0',
    description:
      "# Kyburn's Mass Combat\r\rThe official companion script for the [Kyburn's Mass Combat](https://docs.google.com/document/d/1-56AC-p57x-vr_BzszksjC55kTFK4d67XOzcIb1pWCY/edit?usp=sharing) ruleset.\r\rThis sc...",
    author: 'M. Greene',
  },
  {
    modid: 78,
    category: 'Systems',
    modName: 'D&D 5E - PaladinAura',
    version: '1.1',
    description:
      'A Roll20 API that auto-applies Paladin Auras and shows which characters are affected by the aura through the use of token-markers. Only Compatible with the **D&D 5E by Roll20** character sheet.\n\n* For...',
    author:
      'Layton Burchell. User "Oosh" https://app.roll20.net/users/4775411/oosh. Special thanks to: Gustav Merelius.',
  },
  {
    modid: 79,
    category: 'Systems',
    modName: 'D&D 5E - ShortRest',
    version: '0.1.1',
    description:
      'Allows Hit Dice, Class Resource and Spellslot tracking for Short Rests on the **D&D 5E by Roll20** Character Sheet.\r\rThe script can be used in 2 ways, either by clicking on Hit Dice on the D&D 5E by R...',
    author: 'Werner D.; Original Author Unkown',
  },
  {
    modid: 80,
    category: 'Systems',
    modName: 'D&D 5E - SpellMaster',
    version: '2.005',
    description:
      '\r\r# SpellMaster\rSpellMaster is a high-performance total-replacement for the Spells page of the **D&D 5E by Roll20** character sheet with several additional key features that go beyond the default spel...',
    author: 'M. Greene',
  },
  {
    modid: 81,
    category: 'Systems',
    modName: 'D&D 5E Barbarian Class Module',
    version: '0.2',
    description:
      'This script is a Barbarian Class Module add-on for the Dungeon Master Tools.\r\rThis module requires the Dungeon Master Tools and provides support for common Barbarian Actions, such as Rage. \r\r**API Com...',
    author: 'Patrick Kolenic',
  },
  {
    modid: 82,
    category: 'Systems',
    modName: 'D&D 5E Difficulty Rating',
    version: '1.05',
    description:
      '# Difficulty Rating\r\rA 5th Edition Dungeons & Dragons encounter calculator.  It is compatible with the OGL and 5e-Shaped character sheets.\r\r## Setup\r\rOnce installed, upon API startup, Difficulty Ratin...',
    author: 'M. Greene',
  },
  {
    modid: 83,
    category: 'Systems',
    modName: 'D&D 5E Dungeon Master Tools',
    version: '0.2',
    description:
      'This script provides a Framework to enhance the Roll20 experience.\r\rThe Dungeon Master tools currently supports automatically adding the Death Token Status, remove items from the turn order once their...',
    author: 'Patrick Kolenic',
  },
  {
    modid: 84,
    category: 'Systems',
    modName: 'D&D 5E Homebrew - Drunk',
    version: '0.0.5',
    description:
      'Drunk keeps track of the level of inebration a character has and also adds a statusmarker to the character. It uses the homebrew rules from [CritGames](http://critgames.com/rpg/dnd-5e-homebrew-drinkin...',
    author: 'Robin Kuiper',
  },
  {
    modid: 85,
    category: 'Systems',
    modName: 'D&D 5E Paladin Class Module',
    version: '0.1',
    description:
      'This script is a Paladin Class Module add-on for the Dungeon Master Tools.\r\rThis module requires the Dungeon Master Tools and provides support for common Paladin Actions, such as Lay on hands. \r\r**API...',
    author: 'Patrick Kolenic',
  },
  {
    modid: 86,
    category: 'Systems',
    modName: 'Darker Dungeon',
    version: '1.0',
    description:
      "Created for Giffy's Darker Dungeons v. 2.0. Go to /r/Darkerdungeons for more info. Use !darkerdungeons to access the menu ",
    author: 'Cassie Levett',
  },
  {
    modid: 87,
    category: 'Systems',
    modName: 'DealInit',
    version: '1.9',
    description:
      'Handles Savage Worlds card-based Inititive by dealing cards to Turn Order, automatically handling Jokers and Initiative Edges and sorting Turn Order by suit. To see options, type: !deal-init --help',
    author: 'Pat Elwer',
  },
  {
    modid: 88,
    category: 'Systems',
    modName: 'Delta Green Companion API',
    version: '1.5',
    description:
      'Enhances the Unofficial Delta Green Character Sheet with autocomputation of projection on bonds.',
    author: ' Marco M.',
  },
  {
    modid: 89,
    category: 'Systems',
    modName: 'DSA 4.1 Crit Checker',
    version: '1.0.0',
    description:
      'This API Script checks for a critical success or failure of talent rolls in the DSA 4.1 Character Sheet (ie. 2 or more 1s or 20s in a roll). It is absolutely useless with any other Character Sheets',
    author: 'Christian S.',
  },
  {
    modid: 90,
    category: 'Systems',
    modName: 'Earth Dawn 1st Editon - Step to Action Dice roller',
    version: '1.0',
    description:
      "This allows players to enter '!ed <ActionStepNumber>, <KarmaStepNumber>' or '!ed <ActionStepNumber>, <KarmaStepNumber>, <GMROLL>' to roll action dice for given step number. <ActionStepNumber> is the a...",
    author: 'Aqua Alex',
  },
  {
    modid: 91,
    category: 'Systems',
    modName: 'Earthdawn by FASA character sheet companion',
    version: '02.042',
    description:
      'The Roll20 "Earthdawn by FASA character sheet companion" API script is made to work with the "Earthdawn by FASA" character sheet. It provides many features that automate and assist in many tasks. It i...',
    author: 'Chris Dickey',
  },
  {
    modid: 92,
    category: 'Systems',
    modName: 'Eclipse Phase Alternate Companion Script',
    version: '1.0.3',
    description:
      'Eclipse Phase 1E Companion Script\r\n=================================\r\n\r\nThis is a companion script to the [Eclipse Phase 1E sheet](https://github.com/Bathtor/EPSheet) for use with the API on [Roll20](...',
    author: 'Lars Kroll (Lars K. on Roll20)',
  },
  {
    modid: 93,
    category: 'Systems',
    modName: 'Exalted 3rd Edition Dice Roller',
    version: '1.0',
    description:
      "A more robust dice rolling script for use with the Exalted Third Edition game system. It is capable of not only counting 10s as two successes (or not, at the user's discretion), but also keeping track...",
    author: 'Mike W. Leavitt',
  },
  {
    modid: 94,
    category: 'Systems',
    modName: 'exaltScript',
    version: '1.0',
    description:
      'This script adds general utility and automation to Exalted 3rd Edition campaigns.',
    author: 'Pinmissile',
  },
  {
    modid: 95,
    category: 'Systems',
    modName: 'Fate Point Display',
    version: '1.0.2',
    description:
      "Automatically adds and updates token markers to track characters' FATE Point totals, and provides helper macros to increment, decrement, and reset those values.",
    author: 'Tyson Tiatia',
  },
  {
    modid: 96,
    category: 'Systems',
    modName: 'FateDots',
    version: '0.2.3',
    description:
      'Provides numbered multi dots for Fate stress boxes.  By default, red and blue statuses will be treated specially.\r\rFor instructions, run `!fate-dots` with no arguments.',
    author: 'The Aaron',
  },
  {
    modid: 97,
    category: 'Systems',
    modName: 'Feng Shui Initiative',
    version: '1.0',
    description:
      'Allows GM and players to automatically deduct and resort steps from the initiative tracker to speed up play for Fung Shui 2 action scenes.\r\r**API Commands:**\r**!init** <# of steps> <token name in trac...',
    author: 'Steve K.',
  },
  {
    modid: 98,
    category: 'Systems',
    modName: 'Fire Emblem Tabletop Combat Script',
    version: '1.16',
    description:
      "**This is the companion script for the default version of Xeohelios' Fire Emblem Tabletop system!**\rThis script automates combat and provides other necessary functions, such as a fully-fledged, dynami...",
    author: 'Missing-q',
  },
  {
    modid: 99,
    category: 'Systems',
    modName: 'Forbidden Lands Year-Zero Die Roller',
    version: '1.3',
    description:
      'This is a Die Roller used for Forbidden Lands dice rolls. It is used in combination with the Forbidden Lands Character Sheet but can be used independently of each other.',
    author: 'Barry Snyder, Jens Alm',
  },
  {
    modid: 100,
    category: 'Systems',
    modName: 'FotN Companion',
    version: '2.0',
    description:
      "# FotN Companion\r\rThis script allows you to wyrd (draw runes from a deck) and have those runes placed on an official FotN playmat located on a page called 'playmats', remove runes from the playmat, ge...",
    author: 'Joshua S.',
  },
  {
    modid: 101,
    category: 'Systems',
    modName: 'Genesys RPG Dice Roller',
    version: '1.3.1',
    description:
      'This is the Fantasy Flight Games Genesys Role Playing Game System Dice Roller. It is used in combination with the Genesys Character Sheet.',
    author: 'GM Knowledge Rhino',
  },
  {
    modid: 102,
    category: 'Systems',
    modName: 'Guidance: Starfinder Tools',
    version: '2.0.1',
    description:
      'API for Roll20 and Starfinder\n\nVersion 2.0.0\n\nThis is a tool to support the usage of the Starfinder (Simple) character sheets in Roll20.\nIt has the ability to read a statblock from the GMNotes section...',
    author: 'Russell A. Sinclair, Thomas McFarland',
  },
  {
    modid: 103,
    category: 'Systems',
    modName: 'GURPS GE',
    version: '1.0',
    description:
      'Gather Energy tool for GURPS Thaumatology: Ritual Path Magic\n - Syntax emample: !ge 11 12 5\nThe first number is Skill level, 2nd: energy, last: time per gathering attempt.\nPer the rules this is usuall...',
    author: 'Scott D. Sveter',
  },
  {
    modid: 104,
    category: 'Systems',
    modName: 'Hero Roller',
    version: '1.2.1',
    description:
      '# Hero Roller api script\r\nThis API is designed to be used with the [HeroSystem6e character sheet](https://github.com/Roll20/roll20-character-sheets/tree/master/HeroSystem6e), however its interaction w...',
    author: 'timmaugh',
  },
  {
    modid: 105,
    category: 'Systems',
    modName: 'HeroSystem6e',
    version: '1.1',
    description:
      '# HeroSystem6e api script\r\nThis API is designed for use with the [HeroSystem6e character sheet](https://github.com/Roll20/roll20-character-sheets/tree/master/HeroSystem6e).  If you are not using that ...',
    author: 'Darren',
  },
  {
    modid: 106,
    category: 'Systems',
    modName: 'HeroTracker',
    version: '1.2',
    description:
      "#\r\r## HeroTracker\r\r\rHeroTracker implements the turn sequence of the Hero Games system.  The Hero Games system utilizes a segment chart with 12 phases.  A character's speed determines how many and on w...",
    author: 'Darren',
  },
  {
    modid: 107,
    category: 'Systems',
    modName: 'Imperator API',
    version: '0.1',
    description:
      'Script pour comptabiliser correctement les r??ussites de jets sur le JdR Imperator (de JdR Editions).\r\rPour des instructions, saisissez `!imperator --help`.',
    author: 'Kapirklaa',
  },
  {
    modid: 108,
    category: 'Systems',
    modName: 'ImportHS6e',
    version: '1.05',
    description:
      '# ImportHS6e api script\r\nThis API is designed for use with the [HeroSystem6e character sheet](https://github.com/Roll20/roll20-character-sheets/tree/master/HeroSystem6e).  If you are not using that ch...',
    author: 'eepjr24',
  },
  {
    modid: 109,
    category: 'Systems',
    modName: 'InitMaster',
    version: '1.046',
    description:
      'The InitMaster API supports initiative for RPGs using the Turn Order and the Tracker window.  It provides functions dealing with all aspects of: managing how initiative is done; rolling for initiative...',
    author: 'Richard E.',
  },
  {
    modid: 110,
    category: 'Systems',
    modName: 'InspirationTracker',
    version: '0.1.4',
    description:
      'InspirationTracker keeps track of inspiration and adds a statusmarker to the characters token(s). You can also easily give an inspiration with the command `!inspiration` when you have token(s) selecte...',
    author: 'Robin Kuiper',
  },
  {
    modid: 111,
    category: 'Systems',
    modName: 'InspirationTracker (Giger)',
    version: '0.22',
    description:
      'For use with the 5e OGL character sheet.  Places annoucement in chat log and updates character token for visual reminder.',
    author: 'Giger',
  },
  {
    modid: 112,
    category: 'Systems',
    modName: "It's a Trap! - Burn Bryte theme",
    version: '3.0',
    description:
      "# It's A Trap! - Burn Bryte Generic theme\r\rThis is a Burn Bryte trap theme built to support all Burn Bryte character sheets\rBy default, it will automatically detect which character sheet you're using,...",
    author: 'Ada Lindberg',
  },
  {
    modid: 113,
    category: 'Systems',
    modName: 'Knight Style Marker',
    version: '1.0',
    description:
      "Il s'agit du script pour accompagner la fiche de personnage de Knight, afin d'afficher des status sur les tokens, et de pr??venir lorsqu'un personnage change de style de combat.\r\r**Commandes :**\r*...",
    author: 'Alain H.',
  },
  {
    modid: 114,
    category: 'Systems',
    modName: 'Krystal Die',
    version: '1.0',
    description:
      'Script pour le Jeu de R??le Krystal, ??dit?? par Les XII Singes.\r Permet de lancer des d??s Krystal (dK) et de sommer le r??sultat correctement. Les 1, 3 et 6 seront ajout??s au total et affich??s en vert. L...',
    author: 'Elsa T.',
  },
  {
    modid: 115,
    category: 'Systems',
    modName: 'LazyExperience',
    version: '0.1.14',
    description:
      'LazyExperience is a script to record experience during a game (the idea comes from [EasyExperience](https://app.roll20.net/forum/post/3309609/script-easy-experience/?pageforid=3506293#post-3506293)).\n...',
    author: 'Robin Kuiper',
  },
  {
    modid: 116,
    category: 'Systems',
    modName: 'MagicMaster',
    version: '3.051',
    description:
      'The MagicMaster API provides functions to manage all types of magic, including:\n* Wizard & Priest spell use and effects;\n* Character, NPC & Monster Powers; \n* discovery, looting, use and cursing of Ma...',
    author: 'Richard E.',
  },
  {
    modid: 117,
    category: 'Systems',
    modName: 'Maximum Apocalypse',
    version: '3.6',
    description:
      'APIs to support Maximimum Apocalypse.\r\r(Note: All chatted text is in English only.)\r\rAlso see the Maximimum Apocalypse character sheet.\r\r## Commands:\r\r```!ma init```\r\rShow the initiative tracker windo...',
    author: 'David Maitland',
  },
  {
    modid: 118,
    category: 'Systems',
    modName: 'Midgard Turn Tracker Helper',
    version: '1.0',
    description:
      "This script is used for the German RPG Midgard. It adds some functionality to the turn tracker. It sorts the turn tracker, adds 'Bewegungsphase' and 'Rundenende' to the turn tracker and sorts it. To s...",
    author: 'Hans-Joachim Maier',
  },
  {
    modid: 119,
    category: 'Systems',
    modName: 'MutantYearZero',
    version: '0.1.12',
    description:
      'MutantYearZero automates the rolling of Skill, Base (Stat), and Gear dice using Mutant: Year Zero dice mechanics.\r\r## Commands\r\r```\r!myz [Skill Roll] [Base Roll] [Gear Roll] [--<Label>|<Messa...',
    author: 'The Aaron',
  },
  {
    modid: 120,
    category: 'Systems',
    modName: 'MutantYearZero',
    version: '0.1.12',
    description:
      'MutantYearZero automates the rolling of Skill, Base (Stat), and Gear dice using Mutant: Year Zero dice mechanics.\r\r## Commands\r\r```\r!myz [Skill Roll] [Base Roll] [Gear Roll] [--<Label>|<Messa...',
    author: 'The Aaron',
  },
  {
    modid: 121,
    category: 'Systems',
    modName: 'MutantYearZero_SectorGenerator',
    version: '0.1.0',
    description:
      'MutantYearZero_SectorGenerator generates a sector for MutantYearZero randomly.\r\r## Commands\r\r```\r!sector-generate\r```',
    author: 'SmokeRaven',
  },
  {
    modid: 122,
    category: 'Systems',
    modName: 'MythicGM ',
    version: '1.0.0',
    description:
      'MythicGM Brings the rules from the Mythic game system to ANY preexisting system. Making your game not require a GM to run the story. For more informaiton head over to Word Mill Games to learn about th...',
    author: 'Pyromanci',
  },
  {
    modid: 123,
    category: 'Systems',
    modName: "Natha's Numenera",
    version: '4.8',
    description:
      "Enables the use of advance rolls and functions in Natha's Numenera Tabbed character sheets (both english and french) version 4+. Read the [Wiki page](https://wiki.roll20.net/Script:Numenera_Natha) for...",
    author: 'Natha',
  },
  {
    modid: 124,
    category: 'Systems',
    modName: 'One Roll Engine Matching Sets',
    version: '0.2',
    description:
      'This script automatically finds sets of matching dice in rolled dice pools. It is intended to support "Matching Set" style games like One Roll Engine or Mistborn RPG. It provides an auto-match functio...',
    author: 'Ean M., dart44',
  },
  {
    modid: 125,
    category: 'Systems',
    modName: 'Pathfinder 2 Treat Wounds',
    version: '1.2',
    description:
      'Treat Wounds is designed for Pathfinder 2nd Edition and aids in performing a Medicine check to treat wounds allowing for the user to pass in the specific DC of the check they want to attempt as well a...',
    author: 'Mark S.',
  },
  {
    modid: 126,
    category: 'Systems',
    modName: 'Pathfinder 2 Utilities',
    version: '310520',
    description:
      'A set of utilities for Pathfinder 2 standard abilities and modifier tracking. See https://wiki.roll20.net/Script:Pathfinder_2_Utilities .',
    author: 'Mark Green',
  },
  {
    modid: 127,
    category: 'Systems',
    modName: 'Pathfinder Companion Script',
    version: '1.01518021707',
    description:
      '# Companion API Script v1.X\nThe Pathfinder Companion Script automates many of the day to day tasks of playing in and running a pathfinder game. The script is designed for the Neceros Pathfinder Sheet ...',
    author: 'Scott C.',
  },
  {
    modid: 128,
    category: 'Systems',
    modName: 'Pathfinder HeroLab Character Import',
    version: '0.5',
    description:
      'A script for importing characters from Hero Lab to the Pathfinder character sheet; visit the forum thread for usage: https://wiki.roll20.net/Script:HL-Import',
    author: 'James W.',
  },
  {
    modid: 129,
    category: 'Systems',
    modName: 'Pathfinder Skillbook',
    version: '1.11',
    description:
      "Creates a token action to provide API buttons for each of a character's skills; for use with the Pathfinder character sheet.  Use v1.0 for the current version (v.37) of the character sheet; use v1.1 f...",
    author: 'James W.',
  },
  {
    modid: 130,
    category: 'Systems',
    modName: 'Portes Monstres Tresors',
    version: '1.4',
    description:
      'Character creation helper for the Portes Monstres Tresors character sheet (french free OGL retroclone of DnD B/X). Chat command is !pmt-rollchar 0 or 1 to roll a character. Option 0 is 3d6 in order, 1...',
    author: 'Natha',
  },
  {
    modid: 131,
    category: 'Systems',
    modName: 'Roleplaying is Magic 4E Dice',
    version: '1.1',
    description:
      "# Roleplaying is Magic 4E dice\r\r*Dependencies*\r* Roleplaying Is Magic 4E character sheet - v1.1+\r\r*v1.1 Updates*\r* The script now has an API.\r* Compatible with the It's A Trap! MLP-RIM-4 theme.\r* Requ...",
    author: 'Ada Lindberg',
  },
  {
    modid: 132,
    category: 'Systems',
    modName: 'RoundMaster',
    version: '4.033',
    description:
      'RoundMaster is an API for the Roll20 RPG-DS.  Its purpose is to extend the functionality of the Turn Tracker capability already built in to Roll20.  It is one of several other similar APIs available o...',
    author: 'Richard E. based on TrackerJacker by Ken L.',
  },
  {
    modid: 133,
    category: 'Systems',
    modName: 'Savage Worlds - Raise Count',
    version: '2.6',
    description:
      'Counts raises for the Savage Worlds system. Use `!rc roll target` to make a roll. See [Readme](https://github.com/Roll20/roll20-api-scripts/tree/master/Raise%20Count) for more details.',
    author: 'Brian Shields',
  },
  {
    modid: 134,
    category: 'Systems',
    modName: 'Savage Worlds Raise Roller',
    version: '0.1.0',
    description:
      'This script performs a Savage Worlds roll (including wild die if needed) and displays a list of the target numbers with details on whether this roll would be a success and any raises associated with i...',
    author: 'Carl D.',
  },
  {
    modid: 135,
    category: 'Systems',
    modName: 'Savage Worlds Status Changer',
    version: '1.0.0',
    description:
      'This script makes it easy to assign a status to a set of selected tokens. Call the script with the appropriate status name and the assigned status marker is added to the token or set of tokens. You ca...',
    author: 'Carl D.',
  },
  {
    modid: 136,
    category: 'Systems',
    modName: 'Shadow of the Demon Lord',
    version: '0.2',
    description:
      'This takes the Shadow of the Demon Lord character sheet to the next level, since the core Game Mechanics requirements exceed what can be done with macros, such as detecting rolls totaling 20 or more.',
    author: 'Matthew Paluch(170911)',
  },
  {
    modid: 137,
    category: 'Systems',
    modName: 'Shadowrun 3rd Edition',
    version: '1.01',
    description:
      'This takes the Shadow of the Demon Lord character sheet to the next level, since the core Game Mechanics requirements exceed what can be done with macros, such as detecting rolls totaling 20 or more.',
    author: 'Brad H',
  },
  {
    modid: 138,
    category: 'Systems',
    modName: 'Shadowrun 5E - RollExtender',
    version: '0.2',
    description:
      'Designed to be used with the **Shadowrun: 5th Edition (Advanced)**-character sheet.\r\r Automatically detect Glitches and roll Extended Tests.\r\r Glitch Detection is not yet configurable and will send a ...',
    author: "Jens 'xyro'",
  },
  {
    modid: 139,
    category: 'Systems',
    modName: 'Shadowrun 5th Edition',
    version: '1.1',
    description:
      'Created to be used with Shadowrun 5th Edition character sheet. Instructions for use can be found at in the [ReadMe on Github](https://github.com/Roll20/roll20-api-scripts/tree/master/Shadowrun%205th%2...',
    author: 'Cassie Levett',
  },
  {
    modid: 140,
    category: 'Systems',
    modName: 'SpellMaster-SRD',
    version: '2.005',
    description:
      '# SpellMaster SRD Spell List\r\rThis is a dependency of SpellMaster and provides the stock list of SRD spells for D&D 5E, which are released under the OGL.  This resource file has been separated due to ...',
    author: 'M. Greene',
  },
  {
    modid: 141,
    category: 'Systems',
    modName: 'SR-NextPass',
    version: '1.1',
    description:
      'Implements a **!nextpass** command which can be used by the GM to adjust initiative between combat passes. Typically bound to a macro button. Compatible with Tracker Jacker.',
    author: 'jflo, updated by Aaron, John D.',
  },
  {
    modid: 142,
    category: 'Systems',
    modName: 'Star Wars: Fantasy Flight Games - Destiny Tracker',
    version: '0.1.0',
    description:
      'SW FFG Destiny Tracker provides a way to prompt, set and track destiny points for Star Wars: Edge of the Empire (Fantasy Flight Games) rpg system. The script creates a handout when a command is run wh...',
    author: 'Ziechael',
  },
  {
    modid: 143,
    category: 'Systems',
    modName: 'Star Wars: Fantasy Flight Games - Dice Roller',
    version: '6.3.0',
    description:
      'This is the Fantasy Flight Games Star Wars Role Playing Game Dice Roller. It is used in combination with the Star Wars FFG API-Compatible Character Sheet. NOTE: \r\r**Version 2.6 - Compatible with Depre...',
    author:
      'Konrad J.,Steve Day, Arron, Andrew H., Tom F., Akashan, GM Knowledge Rhino,Tim P.',
  },
  {
    modid: 144,
    category: 'Systems',
    modName: 'Tagmar',
    version: '0.1.3',
    description:
      ' Provides a lookup for rolls in the Tagmar RPG.\r\r## Commands\r\r```!tagmar <skill> <roll> [descriptive text]```\r* `<skill>` - The value of the skill from -7 to 20. You can use inline rolls or attribute ...',
    author: 'The Aaron',
  },
  {
    modid: 145,
    category: 'Systems',
    modName: 'Tails of Equestria Helper',
    version: '1.1',
    description:
      '# Tails of Equestria Helper\r\r*Update v1.1*\r* When the script starts up, set all characters to use the API for Exploding Hoof rolls.\r\rThis script provides some utilities for the Tails of Equestria syst...',
    author: 'Ada Lindberg',
  },
  {
    modid: 146,
    category: 'Systems',
    modName: 'Tales from the Loop Die Roller',
    version: '1.0',
    description:
      'This is a Die Roller used for Tales from the Loop dice rolls.',
    author: 'Barry Snyder',
  },
  {
    modid: 147,
    category: 'Systems',
    modName: 'Titansgrave RPG - TotalRolled',
    version: '1.0.0',
    description:
      'Automatically totals all the rolls and modifiers used in the **Titansgrave RPG**. This API will also return the number of stunt point earns for that roll. If used with the new character sheet it will ...',
    author: 'Joshua Casserino',
  },
  {
    modid: 148,
    category: 'Systems',
    modName: 'TotalRolled for AGE',
    version: '2.1.0',
    description:
      'Automatically totals all the rolls and modifiers used in the AGE System games. This API will also return the number of stunt point earns for that roll. It will also automatically tell if a spell TN ha...',
    author: 'Joshua Casserino,Olivier L.-L.',
  },
  {
    modid: 149,
    category: 'Systems',
    modName: 'Vampire The Masquerade 5th Edition Dice Mechanics',
    version: '1.2',
    description:
      'This is the Dice roller for the Vampire the Masquerade 5th Edition and is designed to be used in conjunction with its corresponding character sheet. It provides access to advanced rolling features suc...',
    author: 'The Grand Coterie',
  },
  {
    modid: 150,
    category: 'Systems',
    modName: 'WFRP 2E Actions (Havoc)',
    version: '1.0',
    description:
      "A set of functions and roll templates for robust WFRP2E player actions, including initiative, Magic casting, Fortune re-rolls, Ulric's Fury, Attack and Parry Rolls, and maybe a little bit more.",
    author: 'Paul "Havoc" Stein',
  },
  {
    modid: 151,
    category: 'Systems',
    modName: 'WFRP4e',
    version: '1.0.0',
    description:
      'Speeds common combat tasks for Warhammer Fantasy Roleplay 4th Edition',
    author: 'Seth Williams',
  },
  {
    modid: 152,
    category: 'Systems',
    modName: 'WFRP4ePL',
    version: '1.0.0',
    description:
      "Unofficial polish version of Seth Williams' script to speed up combat. // Nieoficjalna polska wersja skryptu przyspieszaj??cego walk?? WFRP 4ed",
    author: 'Mariusz Dybowski',
  },
  {
    modid: 153,
    category: 'Systems',
    modName: 'WH40k Wrath & Glory Die Roller',
    version: '3.1',
    description:
      'This is a Die Roller for the Warhammer 40k Wrath & Glory RPG.  It provides the ability to define a roll with or without a wrath die, will calculate a die roll modifier to all dice rolled, and enables ...',
    author: 'Barry Snyder, Fenrhir',
  },
  {
    modid: 154,
    category: 'Systems',
    modName: 'WildDice',
    version: '0.3.5',
    description:
      'Implements the [Wild Dice](https://en.wikipedia.org/wiki/D6_System#The_Wild_Die) rolling mechanic used in D6 System/OpenD6-games, and in [Star Wars D6](https://wiki.roll20.net/Star_Wars_D6). [Wild Dic...',
    author: 'The Aaron',
  },
  {
    modid: 155,
    category: 'Systems',
    modName: 'Yatzoid',
    version: '1.0',
    description:
      'Provides automated round and turn tracking, Token renaming, as well as the setup, and reset system of the game. Also contains some chat commands.',
    author: 'Runnetty',
  },
  {
    modid: 156,
    category: 'Tokens',
    modName: 'Areas of Effect',
    version: '1.6.1',
    description:
      '# Areas of Effect\r\r_v1.6.1 Updates_\r* Fixed unicode icons in chat menu.\r\rGMs, your spellcasting players will love you for this script! It lets you\rcreate graphical areas of effect for various spells a...',
    author: 'Ada Lindberg',
  },
  {
    modid: 157,
    category: 'Tokens',
    modName: 'Aura/Tint HealthColors',
    version: '1.6.1',
    description:
      'Script to set health indicator on tokens via aura or tint, based on a bars value. Be sure to set the bar your health is tied to in the menu: API menu command !AURA',
    author: 'DXWarlock',
  },
  {
    modid: 158,
    category: 'Tokens',
    modName: 'BounceTokens',
    version: '0.1.3',
    description:
      'Allows the GM to toggle bouncing of selected tokens.  Begin bouncing with the `!bounc-start` command, optionally followed by how many seconds it should take to bounce once.  End bouncing with the `!bo...',
    author: 'The Aaron',
  },
  {
    modid: 159,
    category: 'Tokens',
    modName: 'Bump',
    version: '0.2.26',
    description:
      'Bump provides a way to invisibly manipulate tokens on the GM Layer from the Objects Layer, and vice versa.\r\r For instructions, run `!bump --help`.\r\r Forum Discussion: https://app.roll20.net/forum/perm...',
    author: 'The Aaron',
  },
  {
    modid: 160,
    category: 'Tokens',
    modName: 'Carry Tokens',
    version: '2.0.1',
    description:
      '# Carry Tokens\r\rThis script allows you to set tokens to carry each other, either as a\rcharacter holding an item, or as a mount carrying a rider. The carried\rtoken will always set its position to that ...',
    author: 'Ada Lindberg',
  },
  {
    modid: 161,
    category: 'Tokens',
    modName: 'ChangeTokenImage',
    version: '0.1.33',
    description: 'Interface to change token images from a rollable table.',
    author: 'Chris B, The Aaron',
  },
  {
    modid: 162,
    category: 'Tokens',
    modName: 'Collision Detection',
    version: '2.2',
    description:
      'Watches for collisions between player-controlled tokens and a specified subset of path objects. When a collision is detected, the script may return the token to its position prior to the move, send a ...',
    author: 'Brian Shields',
  },
  {
    modid: 163,
    category: 'Tokens',
    modName: 'Custom Status Markers',
    version: '4.0',
    description:
      "# Custom Status Markers (Deprecated)\r\r_Notice: This script is no longer updated or actively maintained._\r\rPlease use Roll20's built-in custom status icons feature. I'm glad to have been able\rto provid...",
    author: 'Ada Lindberg',
  },
  {
    modid: 164,
    category: 'Tokens',
    modName: 'Emojibubble',
    version: '1.1',
    description:
      '# Emojibubble\r\r[Emojibubble Forum Discussion](https://app.roll20.net/forum/post/9605567/script-emojibubble/?pageforid=9605567#post-9605567)\r\rThis script provides a way for GMs and players to indicate ...',
    author: 'Patrick K.',
  },
  {
    modid: 165,
    category: 'Tokens',
    modName: 'Facing',
    version: '0.1.6',
    description:
      'Creates and maintains a facing indicator for tokens.\r\rFor instructions run `!facing --help`, or visit [Facing Forum Thread](https://app.roll20.net/forum/permalink/1903275/).',
    author: 'The Aaron',
  },
  {
    modid: 166,
    category: 'Tokens',
    modName: 'Flight',
    version: '3.5',
    description:
      "Adds 'fluffy-wings' status icon to selected token to represent some height.",
    author: 'Brian Shields,Aaron C. Meadows',
  },
  {
    modid: 167,
    category: 'Tokens',
    modName: 'Flip Tokens',
    version: '2.3',
    description:
      'Flips selected graphics horizontally and/or vertically. Especially useful for games with side-view tokens, and for players who do not have access to the same context menu as GMs.',
    author: 'Brian Shields',
  },
  {
    modid: 168,
    category: 'Tokens',
    modName: 'Geiger Counter',
    version: '1.1',
    description:
      '# Geiger Counter\r\rThis script allows the GM to dynamically create radioactive areas in their\rmaps. Characters that have Geiger counters will be alerted how many rads\rthey are taking.\r\r## To create a r...',
    author: 'Ada Lindberg',
  },
  {
    modid: 169,
    category: 'Tokens',
    modName: 'GMAura',
    version: '0.1.0',
    description:
      'GMAura creates gm-only auras on selected or specified tokens.\r\rAuras are created as invisible tokens on the GM layer with their aura 1 set up with the specified options. Changes to the location and si...',
    author: 'The Aaron',
  },
  {
    modid: 170,
    category: 'Tokens',
    modName: 'Health Status',
    version: '0.1',
    description:
      "In the old CRPGs (Baldur's Gate, Icewind Dale), you could hover your cursor over a monster and see *roughly* how much health it had. This script aims to let you and your players do just that.\n\n## Comm...",
    author: 'AndrielChaoti',
  },
  {
    modid: 171,
    category: 'Tokens',
    modName: "Hunter's Mark",
    version: '0.3.0',
    description:
      'A script that lets each character have their own custom Status Marker, which they can use to mark other tokens. You can make only one target at a time. When you mark a new target, the old marker is re...',
    author: 'GiGs',
  },
  {
    modid: 172,
    category: 'Tokens',
    modName: "It's a Trap!",
    version: '3.13.1',
    description:
      "# It's A Trap!\r\r_v3.13 Updates_\r\r* Can specify 'none' for trap trigger areas.\r* Can specify message for when a character notices a trap via passive detection using the 'Detection Message' property.\r\rT...",
    author: 'Ada Lindberg',
  },
  {
    modid: 173,
    category: 'Tokens',
    modName: 'KABOOM',
    version: '1.2',
    description:
      '# KABOOM.js\r\rEver wonder why the tokens inside of your flimsy straw houses never budge when\ryour players decide that fireball is the easiest solution to their troubles? It\rmight have to do with the co...',
    author: 'Bodin Punyaprateep (PaprikaCC)',
  },
  {
    modid: 174,
    category: 'Tokens',
    modName: 'MapLock',
    version: '0.4.6',
    description:
      'MapLock provides a way to lock individual graphics in place. This prevents them from being moved, resized, or rotated by reverting any of those changes that are made to them. It also provides tinting ...',
    author: 'The Aaron',
  },
  {
    modid: 175,
    category: 'Tokens',
    modName: 'Marching Order',
    version: '3.1',
    description:
      "# Marching Order\r\r_3.1 Updates_\r* Added button for creating ad-hoc formations that aren't saved.\r* Added button for making one token follow another at some set distance as an ad-hoc formation.\r* Reorg...",
    author: 'Ada Lindberg',
  },
  {
    modid: 176,
    category: 'Tokens',
    modName: 'Mark',
    version: '0.3.5',
    description:
      'Mark places a numbered marker under each token whose id is supplied to it. Markers are cleared when the Turn Order changes, is closed, or when the player page changes. This script is intended to allow...',
    author: 'The Aaron',
  },
  {
    modid: 177,
    category: 'Tokens',
    modName: 'Marking Conditions',
    version: '3.3',
    description: 'Sets and removes statusmarkers on tokens.',
    author: 'Brian Shields',
  },
  {
    modid: 178,
    category: 'Tokens',
    modName: 'Modify Token Image',
    version: '1.0.4',
    description:
      "Allows you to modify the token images for use in Polymorph or other reasons for changing the Token image without changing the location of the token. \r\rSETUP\rYou need a folder in your Journal named 'To...",
    author: 'Zachare Sylvestre',
  },
  {
    modid: 179,
    category: 'Tokens',
    modName: 'MonsterHitDice',
    version: '0.3.9',
    description:
      'Automatically fills in the hit points for a characters dragged onto the table top.\r\rThe default token for the character needs to represent that creature but **should not** have the bar used for hit po...',
    author: 'The Aaron',
  },
  {
    modid: 180,
    category: 'Tokens',
    modName: 'Random Token Tinter',
    version: '0.0.0',
    description:
      'Need to add amusing colors to a horde of pixies?  Want to re-create the periodic defining struggle between the green and purple Drazi?  Or do you just want to drive your players mad trying to find the...',
    author: 'Bill (Do Not Kill)',
  },
  {
    modid: 181,
    category: 'Tokens',
    modName: 'RandomRotate',
    version: '0.2.3',
    description:
      'Allows the GM to easily randomize the rotation of the selected tokens.\r\r## Commands\r\r```!random-rotate```\r\rAdjusts the rotation of all the selected tokens to a random angle.\r\r```!random-spread```\r\rAdj...',
    author: 'The Aaron',
  },
  {
    modid: 182,
    category: 'Tokens',
    modName: 'Reporter',
    version: '1.1.6',
    description:
      '**Reporter** reads the tokens on the board that are associated with character sheets and builds a report of them in the chat or to a handout, returning selected values from the token settings or the c...',
    author: 'Keith Curtis',
  },
  {
    modid: 183,
    category: 'Tokens',
    modName: 'ScaleOnAdd',
    version: '0.1.3',
    description:
      'ScaleOnAdd automatically adjusts the dimentions of new graphics when it is active. This is handy for dragging in tiles of a known size.\r\r## Commands\r\r```\r!scale-on-add [--help|--toggle|--on|--off|--se...',
    author: 'The Aaron',
  },
  {
    modid: 184,
    category: 'Tokens',
    modName: 'Shuffle Tokens',
    version: '1.0.0',
    description:
      'Shuffles positions of selected cards and or tokens in the map window.',
    author: 'Ashton McAllan',
  },
  {
    modid: 185,
    category: 'Tokens',
    modName: 'SpawnDefaultToken',
    version: '0.24',
    description:
      '**Spawns one or more default tokens for a given character, with various options for placement and token characteristics.**\r\r**FORUM LINK:** For full documentation (including many examples), see the fo...',
    author: 'David M.',
  },
  {
    modid: 186,
    category: 'Tokens',
    modName: 'SpinTokens',
    version: '0.4.3',
    description:
      'SpinTokens provides a way to toggle tokens to be spinning at various rates. GMs can spin any tokens, while players are limited to the tokens they can control.\r\r## Commands\r\r```!spin-start [Seconds Per...',
    author: 'The Aaron',
  },
  {
    modid: 187,
    category: 'Tokens',
    modName: 'Status Tracker',
    version: '1.0',
    description:
      'Tracks status effects and markers on tokens and their duration within the turn tracker',
    author: 'Jason Martin',
  },
  {
    modid: 188,
    category: 'Tokens',
    modName: 'Token Action Maker',
    version: '0.3.7',
    description:
      '*By keithcurtis, based on original code by kevin, with assitance and additions by Oosh, GiGs, and bretmckee*\n\nThis script creates token actions on selected tokens for the D&D 5e by Roll20 sheet. Token...',
    author: 'Keith Curtis, Kevin, Bret',
  },
  {
    modid: 189,
    category: 'Tokens',
    modName: 'TokenCondition',
    version: '0.1.2',
    description:
      'TokenCondition makes it easy to drop condition tokens onto your player and monster tokens. Simply create a Character with a name that starts with Condition:, such as Condition: Charmed. Create a Token...',
    author: 'The Aaron',
  },
  {
    modid: 190,
    category: 'Tokens',
    modName: 'TokenController',
    version: '2.2.0',
    description:
      '# Token Controller\n\rBring your scene to life with simple but dynamic patrol pathing. Select a pre-defined path or quickly create your own (not map or position dependent, just works with grids), select...',
    author: 'Scott E. Schwarz',
  },
  {
    modid: 191,
    category: 'Tokens',
    modName: 'TokenLock',
    version: '0.2.8',
    description:
      'TokenLock allows the GM to selectively prevent players from moving their tokens. Since `change:graphic` events to not specify who changed the graphic, determination of player tokens is based on whethe...',
    author: 'The Aaron',
  },
  {
    modid: 192,
    category: 'Tokens',
    modName: 'TokenMarker',
    version: '1.0.0.0',
    description:
      'Allows simple scripted methods to mark and clear custom markers for tokens. No validation between marker and condition is made, just whether the marker is part of the loaded set.  ',
    author: 'Andy H & Akinbar',
  },
  {
    modid: 193,
    category: 'Tokens',
    modName: 'TokenMod',
    version: '0.8.74',
    description:
      'TokenMod provides an interface to setting almost all settable properties of a token.\r\rFor instructions see the *Help: TokenMod* Handout in game, or run `!token-mod --help` in game, or visit [TokenMod ...',
    author: 'The Aaron',
  },
  {
    modid: 194,
    category: 'Tokens',
    modName: 'TokenNameNumber',
    version: '0.5.15',
    description:
      'Provides automatic numbering of tokens dragged onto the tabletop.  Token names need to have the special word `%%NUMBERED%%` somewhere in them.\n\n`!tnn --help` displays the help and configuration option...',
    author: 'The Aaron',
  },
  {
    modid: 195,
    category: 'Tokens',
    modName: 'WeaponArcs',
    version: '0.1.3',
    description:
      'WeaponArcs provides a means to add weapon arcs to tokens for visualization of range and targetable tokens.\rSee the in-game Help Handout for more details or run the help command `!weapon-arc --help`.\r\r...',
    author: 'The Aaron',
  },
  {
    modid: 196,
    category: 'Utility',
    modName: 'AlignmentTracker',
    version: '0.1.2',
    author: 'Robin Kuiper',
  },
  {
    modid: 197,
    category: 'Utility',
    modName: 'APIHeartBeat',
    version: '0.5.1',
    description:
      'APIHeartBeat provides visual feedback that the API is running.\r\rFor instructions see the *Help: APIHeartBeat* Handout in game, or run `!api-heartbeat --help`, or visit [APIHeartBeat Forum Thread](http...',
    author: 'The Aaron',
  },
  {
    modid: 198,
    category: 'Utility',
    modName: 'APILogic',
    version: '2.0.6',
    description:
      'APILogic is a meta-script and part of the Meta-Toolbox. APILogic provides chat input logical constructs for shaping the command line, including IF, ELSEIF, and ELSE. It provides a way to define terms ...',
    author: 'timmaugh',
  },
  {
    modid: 199,
    category: 'Utility',
    modName: 'APISelection',
    version: '0.1.0',
    description:
      'APISelection adds a simple interface for other scripters to use when creating scripts that operate on a persisted selection of objects, as well as sharing a list of selected objects across multiple sc...',
    author: 'The Aaron',
  },
  {
    modid: 200,
    category: 'Utility',
    modName: 'Base64',
    version: '0.3.2',
    description:
      'Provides Base 64 encoding facilities for Roll20 Scripts. (Adapted from http://www.webtoolkit.info/ )\r\rThis script is used as a dependency for other scripts that need to encode data for transfer betwee...',
    author: 'The Aaron',
  },
  {
    modid: 201,
    category: 'Utility',
    modName: 'BattleRoyale',
    version: '1.0',
    description:
      'Transforms a Roll20 Campaign into a Battle Royale, playable without a GM present, so that everyone can take part!',
    author: 'Jakob Sigvard',
  },
  {
    modid: 202,
    category: 'Utility',
    modName: 'Calendar',
    version: '1.2',
    description:
      '# Calendar\n\nThis simple script is used to help keep track of the current in-game date for your game. It was designed to be extremely simple to use and update.\n\nIt currently supports 4 calendars:\n\n- **...',
    author: 'Steven Jeffries',
  },
  {
    modid: 203,
    category: 'Utility',
    modName: 'Calendar DND',
    version: '4.2',
    description: 'A Calendar for D&D 5e',
    author: 'Julexar',
  },
  {
    modid: 204,
    category: 'Utility',
    modName: 'Campaign Survey',
    version: '0.0.2',
    description:
      '**Campaign Survey** *([Forum thread](https://app.roll20.net/forum/post/10675897/script-campaign-survey))* is a script that tries to give the user a bird-eye view of their campaign, reporting on how mu...',
    author: 'Keith Curtis',
  },
  {
    modid: 205,
    category: 'Utility',
    modName: 'Card Tables',
    version: '1.0',
    description:
      'Give your rollable tables a bit more flair or consolidate rolling on multiple tables into one macro or make rollable tables with multiple columns using ScriptCards',
    author: 'Riddhi M.',
  },
  {
    modid: 206,
    category: 'Utility',
    modName: 'Character Sheet Utils',
    version: '1.0',
    description:
      '# Character Sheet Utils\r\rThis script provides a collection of utility functions for reading and writing\rattributes from a character sheet, including support for attributes in\rrepeating sections and ca...',
    author: 'Ada Lindberg',
  },
  {
    modid: 207,
    category: 'Utility',
    modName: 'ChatTurnManager',
    version: '0.0.2',
    description:
      'A script to simplify Turn Order Management, and move it into chat.',
    author: 'Erik O.',
  },
  {
    modid: 208,
    category: 'Utility',
    modName: 'Check It Out',
    version: '1.2',
    description:
      "# Check It Out\r\r_1.1 Updates_\r* D20 themes now support checks for multiple types of skills.\r* D20 themes support option to use passive skills.\r\r'Check It Out' provides the GM with capabilities to add ...",
    author: 'Ada Lindberg',
  },
  {
    modid: 209,
    category: 'Utility',
    modName: 'Combat Master',
    version: '2.47',
    description:
      '# Combat Master v2.47\r\r**Features:** The script provides management of combat, incuding rolling initiative(option to use GroupInitiative), stepping through a turnorder, adding or remove conditions(imp...',
    author: 'Victor B',
  },
  {
    modid: 210,
    category: 'Utility',
    modName: 'CombatTracker',
    version: '0.2.6',
    description:
      '## CombatTracker\n\n* Skype: RobinKuiper.eu\n* Discord: Atheos#1095\n* Roll20: https://app.roll20.net/users/1226016/robin\n* Roll20 Thread: https://app.roll20.net/forum/post/6349145/script-combattracker\n* ...',
    author: 'Robin Kuiper',
  },
  {
    modid: 211,
    category: 'Utility',
    modName: 'D&D 5E - Rest and Recovery',
    version: '0.0.5',
    description:
      '# Rest and Recovery\rA Roll20 API script to handle recovery on the resource attributes on the **D&D 5E by Roll20** sheet.([Rest and Recovery - Forum Thread](https://app.roll20.net/forum/post/8652406/sl...',
    author: 'Keith Curtis',
  },
  {
    modid: 212,
    category: 'Utility',
    modName: 'D&D 5E - WildShape',
    version: '1.4.3',
    description:
      'Easy shapeshift for your PCs/NPCs.Can be used for both PC and NPC to shape shift into either a PC or an NPC.\r\rAlt-double clicking on the shape shifted token will open the relative pc/npc sheet so that...',
    author: 'Angelo',
  },
  {
    modid: 213,
    category: 'Utility',
    modName: 'Dealer',
    version: '1.2',
    description:
      'Deals and takes cards from players by deck\r\rSyntax is:\r`!deal --[give,take] [#] --[deck name]|[Card Name]`\r\rIf give/take is not specified, it gives a card to the player controlling the selected token ...',
    author: 'Keith Curtis',
  },
  {
    modid: 214,
    category: 'Utility',
    modName: 'DeathTracker',
    version: '0.1.8',
    description:
      '## DeathTracker\n\n* Skype: RobinKuiper.eu\n* Discord: Atheos#1095\n* Roll20: https://app.roll20.net/users/1226016/robin\n* Reddit: https://www.reddit.com/user/robinkuiper/\n* Patreon: https://www.patreon.c...',
    author: 'Robin Kuiper',
  },
  {
    modid: 215,
    category: 'Utility',
    modName: 'DiscreteWhisper',
    version: '1.1.2',
    description:
      'DiscreteWhisper gives the ability to send a single command to the API and produce individual, differentiated whispers to various targets, including action buttons.\r\rFor more information, see the origi...',
    author: 'timmaugh',
  },
  {
    modid: 216,
    category: 'Utility',
    modName: 'Downtime System',
    version: '0.9',
    description:
      "A System for tracking Downtime Activities in Roll20 and automating the Options to only require a few Button clicks, making them add and remove things for you so you don't have to",
    author: 'Julexar',
  },
  {
    modid: 217,
    category: 'Utility',
    modName: 'Duplicate a Character and Token',
    version: '1.05',
    description:
      "This script will duplicate a character sheet and tokens giving the new characters and tokens an identifying number and linking each new token to it's own individual new character sheet. This script is...",
    author: 'Chris Dickey',
  },
  {
    modid: 218,
    category: 'Utility',
    modName: 'EncounterHelper',
    version: '1.0.14',
    description:
      "# EncounterHelper\n\nNote: Not game-system specific.\n\nThis API script allows you to define sets of tokens that comprise 'Encounters' that can be treated as a group entitiy and have actions performed on ...",
    author: 'Kurt Jaegers',
  },
  {
    modid: 219,
    category: 'Utility',
    modName: 'Extended Syntax Roll20 Objects',
    version: '0.1',
    description:
      'Extends the syntax for Roll20 objects for use in scripts. This script is not intended to stand alone.\n\n### Overridden Functions\nEach function you set to be overridden below will have the normal Roll20...',
    author: 'Brian Shields',
  },
  {
    modid: 220,
    category: 'Utility',
    modName: 'Fallout Terminal',
    version: '1.2',
    description:
      '# Fallout Terminal\r\r_v1.1 Updates:_\r* There are now useroptions to specify the colors for the terminal screens.\r\rWith this script, you can set up a token to display an interactive\rFallout-like termina...',
    author: 'Ada Lindberg',
  },
  {
    modid: 221,
    category: 'Utility',
    modName: 'Fetch',
    version: '1.0.11',
    description:
      'Fetch is a meta-script and part of the Meta-Toolbox. Fetch offers a unified syntax to expand the amount of things that can be retrieved with simple token or sheet calls. You can retrieve any token pro...',
    author: 'timmaugh',
  },
  {
    modid: 222,
    category: 'Utility',
    modName: 'Game Timer',
    version: '1.3.1',
    description:
      'This is a simple script to court how long does player use the game room. Just upload a clock picture on the table and change bar1 to game.clock. Then the picture will court the time. API sandbox will ...',
    author: 'Sad',
  },
  {
    modid: 223,
    category: 'Utility',
    modName: 'GoFish!',
    version: '1.1.0',
    description:
      'A fishing mini-game in which a character, or a group of characters, can engage in a fishing tourney by selecting a token and choosing from a number of API commands. To run the module, or get a full li...',
    author: 'theTexasWave',
  },
  {
    modid: 224,
    category: 'Utility',
    modName: 'Hands Up',
    version: '1.0.0',
    description:
      '# Hands Up\r\rDo you have players in your game who are shy, soft-spoken, or otherwise have\rtrouble speaking over the other players? This script will extend the\raccessibility of your game by allowing pla...',
    author: 'Stephen Lindberg',
  },
  {
    modid: 225,
    category: 'Utility',
    modName: 'Hourglass',
    version: '1.0',
    description:
      'This script provides a simple hourglass (i.e. countdown timer) that you can set for any duration.\n\nTo use:\n1. Add a token to the tabletop and make sure it\'s named "hourglass" in the nameplate field.\n2...',
    author: 'D??ja Augustine',
  },
  {
    modid: 226,
    category: 'Utility',
    modName: 'HTML Builder',
    version: '1.0',
    description:
      '# HtmlBuilder\r\rThis is a utility script that provides a library for constructing stylized\rHTML strings. It has no functionality of its own, but it can be used by other\rscripts to create HTML-formatted...',
    author: 'Ada Lindberg',
  },
  {
    modid: 227,
    category: 'Utility',
    modName: 'ImperialCalendar',
    version: '0.1.3',
    description:
      'ImperialCalendar provides a fully featured calendar as used in Traveller, Stars without Number, and other scifi games.  It supports notes (public, private, and player specific) and various display for...',
    author: 'The Aaron',
  },
  {
    modid: 228,
    category: 'Utility',
    modName: 'Initiative Standby',
    version: '1.0',
    description:
      '# Initiative Standby\r\rA simple script for when your encounters see a lot of turn skipping by yanking and restoring from initiative order.  \r\rWhile a token is yanked, the `interdiction` icon will appea...',
    author: 'M. Greene',
  },
  {
    modid: 229,
    category: 'Utility',
    modName: 'Initiative Tracker Plus',
    version: '1.29',
    description:
      "**From Ken L's original Tracker Jacker script.**\r\rAn attempt to modernize Tracker Jacker and add new functionality as it becomes desired.\r\rFor help visit [Initiative Tracker Plus Readme](https://githu...",
    author: 'Ken L., James C. (Chuz)',
  },
  {
    modid: 230,
    category: 'Utility',
    modName: 'InitiativeAssistant',
    version: '0.1.6',
    description:
      'Provides an easy interface to adding players to the inititaive order.\r\rFor instructions, run `!init-assist --help`, or visit [InitiativeAssistant Forum Thread](https://app.roll20.net/forum/permalink/1...',
    author: 'The Aaron',
  },
  {
    modid: 231,
    category: 'Utility',
    modName: 'InsertArg',
    version: '1.6.0',
    description:
      'InsertArg provides a command-line interface for accessing various components of a Roll20 game from the chat interface. It can build command lines on the fly, or modify existing lines by use of hooks i...',
    author: 'timmaugh',
  },
  {
    modid: 232,
    category: 'Utility',
    modName: 'Interpreted sendChat',
    version: '2.2',
    description:
      'Provides a function for other scripts to use to assist in sending messages to the chat. This script is not intended to stand alone.',
    author: 'Brian Shields',
  },
  {
    modid: 233,
    category: 'Utility',
    modName: 'levenshteinDistance',
    version: '1.1',
    description:
      'Provides a levenshteinDistance function for comparing strings. This script is not intended to stand alone.',
    author: 'Brian Shields',
  },
  {
    modid: 234,
    category: 'Utility',
    modName: 'libInline',
    version: '1.0.5',
    description:
      'libInline provides an easy interface for interacting with inlinerolls from a message, including retrieving dice sets and/or obtaining the roll-tip for chat-level output.\r\rFor more information, see the...',
    author: 'timmaugh, The Aaron',
  },
  {
    modid: 235,
    category: 'Utility',
    modName: 'libTokenMarkers',
    version: '0.1.2',
    description:
      'libTokenMarkers provides an easy encapsulation around Custom Token Markers.  It is a library for other scripts to use and does not have a user interface.  It is intended to be a dependency for other s...',
    author: 'The Aaron',
  },
  {
    modid: 236,
    category: 'Utility',
    modName: 'libTypes',
    version: '0.1.0',
    description:
      '**`libTypes`** provides a collection of classes for use by developers in other scripts.  Currently, they are primarily focused on spacial organization of data, but there may be other types in future r...',
    author: 'The Aaron',
  },
  {
    modid: 237,
    category: 'Utility',
    modName: 'MathOps',
    version: '1.0.5',
    description:
      'MathOps is a meta-script and part of the Meta-Toolbox. MathOps offers a way to perform inline math operations in the macro command line for other scripts without the need for inline rolls and unpackin...',
    author: 'timmaugh',
  },
  {
    modid: 238,
    category: 'Utility',
    modName: 'MatrixMath',
    version: '1.0',
    description:
      '# Matrix Math\r\rThis script provides a library of matrix mathematical operations for\rlinear algebra and 2D affine transformations. It has no behavior on its own\rand is meant to be used by other scripts...',
    author: 'Ada Lindberg',
  },
  {
    modid: 239,
    category: 'Utility',
    modName: 'MD5Sum',
    version: '0.1.0',
    description:
      'Provides MD5 hash calculation facilities for Roll20 Scripts. (Adapted from http://www.myersdaily.org/joseph/javascript/md5-text.html)\r\rThis script is used as a dependency for other scripts that need t...',
    author: 'The Aaron',
  },
  {
    modid: 240,
    category: 'Utility',
    modName: 'Measure',
    version: '0.3.3',
    description:
      'Measures the distance between multiple tokens.  The distance between each\rselected token will be shown in the units of measure for the current page.\rAlternatively, multiple token ids can be specified ...',
    author: 'The Aaron',
  },
  {
    modid: 241,
    category: 'Utility',
    modName: 'Message of the Day',
    version: '0.2.12',
    description:
      'MotD is a simple script that creates a handout named **MotD Note**. When a player logs in, it whispers the contents of that note to the player. Any formatting that works in the Note is passed on to th...',
    author: 'The Aaron',
  },
  {
    modid: 242,
    category: 'Utility',
    modName: 'Meta Macros',
    version: '1.1',
    description:
      '# Meta Macros\n\nThis script extends the Roll20 macro "language" by enabling:\n\n* comments `// like this one`\n* multi-line commands, indicated by `\\` at end of line\n* textual inclusion of other macros us...',
    author: 'Henning Koehler',
  },
  {
    modid: 243,
    category: 'Utility',
    modName: 'Muler',
    version: '1.0.9',
    description:
      'Muler is a meta-script and part of the Meta-Toolbox. Muler allows for you to designate and store variables in a character ability (called a Mule), then retrieve them in another call, and all from with...',
    author: 'timmaugh',
  },
  {
    modid: 244,
    category: 'Utility',
    modName: 'Multi-World Calendar',
    version: '5.0',
    description:
      "A Calendar for D&D 5e that includes Eberron, Faerun, Greyhawk, Modern and Tal'Dorei",
    author: 'Julexar',
  },
  {
    modid: 245,
    category: 'Utility',
    modName: 'NoteLog',
    version: '0.1.3',
    description:
      'NoteLog provides an easy interface to keeping notes for your players.  It provides API commands for writing text into a Handout named **Log**.\r\r## Commands\r\r```\r!note-log <text to append to the log...',
    author: 'The Aaron',
  },
  {
    modid: 246,
    category: 'Utility',
    modName: 'Path Math',
    version: '1.6',
    description:
      "# Path Math\r\rA library that provides some mathematical operations involving Paths.\rIt has no stand-alone functionality of its own.\r\r## API Documentation:\r\rThis script's documentation uses the followin...",
    author: 'Ada Lindberg',
  },
  {
    modid: 247,
    category: 'Utility',
    modName: 'PCPP',
    version: '0.3.3',
    description:
      'PowerCard PreProcessor - Provides API time evaluation and preprocessing of commands for PowerCards v1, v2, or v3',
    author: 'The Aaron',
  },
  {
    modid: 248,
    category: 'Utility',
    modName: 'PeekCard',
    version: '0.1.0',
    description:
      "Allows you to look at cards you've played facedown by running the `!peek-card` command.  Use `!peek-card --help` for a full description of available options.",
    author: 'The Aaron',
  },
  {
    modid: 249,
    category: 'Utility',
    modName: 'PlayerCharacters',
    version: '0.1.2',
    description:
      'PlayerCharacters provides a list of Characters by Player, as well as the means to add Characters for Players easily.\r\rFor instructions see the *Help: PlayerCharacters* Handout in game, or run `!list-p...',
    author: 'The Aaron',
  },
  {
    modid: 250,
    category: 'Utility',
    modName: 'Plugger',
    version: '1.0.7',
    description:
      'Plugger is a meta-script and part of the Meta-Toolbox. Plugger allows for scripts to be run from within the command lines that are inteded for other scripts, and it runs those scripts at meta-script p...',
    author: 'timmaugh',
  },
  {
    modid: 251,
    category: 'Utility',
    modName: 'PowerCards',
    version: '3.8.21',
    description:
      '**PowerCards** allows you to define highly customizable templated output for PC and NPC actions, spells, abilities, statistics, or almost any other purpose you can come up with. See also the **PowerCa...',
    author: 'Sky, Kurt Jaegers',
  },
  {
    modid: 252,
    category: 'Utility',
    modName: 'PowerCards Macro Helper',
    version: '1.0.13',
    description:
      'Companion Script to **PowerCards**. Automatically creates character attributes and macros to allow for system-generated PowerCards based on compendium/custom entered NPC Actions and Player Attacks.\n\n ...',
    author: 'Kurt Jaegers',
  },
  {
    modid: 253,
    category: 'Utility',
    modName: 'Radar',
    version: '0.11',
    description:
      'The Radar script creates an animated wavefront from a selected token to reveal visible and invisible tokens on the map, with optional character or token property filters. Output including directional ...',
    author: 'David M.',
  },
  {
    modid: 254,
    category: 'Utility',
    modName: 'RecursiveTable',
    version: '0.2.5',
    description:
      'RecursiveTable provides a way to expand the results of Rollable Tables which have inline rolls within them. Now with options and support for whispering Roll Templates.\r\rWhen using Rolltemplates, your ...',
    author: 'The Aaron',
  },
  {
    modid: 255,
    category: 'Utility',
    modName: 'Resizer',
    version: '0.0.9',
    description:
      'Resizer lets you easily resize graphics and pages with a simple menu.\n\n### Commands\n\n* **!resizer [width] [height]** - Resizes the selected graphic(s).\n* **!resizer page [width] [height] [?pixels]** -...',
    author: 'Robin Kuiper',
  },
  {
    modid: 256,
    category: 'Utility',
    modName: 'RoleMasterD100',
    version: '1.0.0',
    description:
      'RoleMaster D100 Generator is a configurable script for generating d100 rolls according to RoleMaster explosion rules. Rolls can be high open-ended, low open-ended, open-ended in both directions (the d...',
    author: 'timmaugh',
  },
  {
    modid: 257,
    category: 'Utility',
    modName: 'Roll Handout Tables',
    version: '2.0',
    description:
      'This script will make tables from any handout that has a rollable table and add a roll button for regular rolls as well as recursive tables. It will surround any dice roll from the item section of the...',
    author: 'Jordan Caiola',
  },
  {
    modid: 258,
    category: 'Utility',
    modName: 'Safety Tools Alert',
    version: '0.50',
    description:
      'A simple API script that will do 1 or 2 things when a safety card (from the roll20 Safety Toolkit) or your own deck OR a character with a specified prefix to their name is dragged to the virtual table...',
    author: 'James C. (Chuz)',
  },
  {
    modid: 259,
    category: 'Utility',
    modName: 'ScriptCards',
    version: '2.0.2',
    description:
      '**ScriptCards** allows you to create powerful macros utilizing a built-in scripting language to output nicely formatted display cards for PC and NPC actions, spells, abilities, statistics, or almost a...',
    author: 'Kurt Jaegers',
  },
  {
    modid: 260,
    category: 'Utility',
    modName: 'Search',
    version: '0.1.1',
    description:
      'Search provides full text searching across handouts and characters (including attributes).  Search uses an Okapi BM25F+ search engine with Porter stemming and stop word removal to provide fast results...',
    author: 'The Aaron',
  },
  {
    modid: 261,
    category: 'Utility',
    modName: 'SelectManager',
    version: '1.0.9',
    description:
      'SelectManager stores the selected, who, and playerid properties from the last user-generated message (as opposed to API generated), and makes them available for another script to retrieve. This solves...',
    author: 'timmaugh, The Aaron',
  },
  {
    modid: 262,
    category: 'Utility',
    modName: 'splitArgs',
    version: '1.1',
    description:
      'Provides a function for splitting arguments of an API command. This script is not intended to stand alone.',
    author: 'Brian Shields',
  },
  {
    modid: 263,
    category: 'Utility',
    modName: 'StatusInfo',
    version: '0.3.11',
    description:
      'All info and latest version on \n\n https://github.com/RobinKuiper/Roll20APIScripts/tree/master/StatusInfo',
    author: 'Robin Kuiper',
  },
  {
    modid: 264,
    category: 'Utility',
    modName: 'Supernotes',
    version: '0.1.4',
    description:
      "# Supernotes\r*by keithcurtis, expanded from code written by the Aaron.*\r\rThis script pulls the contents from a token's GM Notes field and sends them to chat, based on a user-selectable roll template. ...",
    author: 'Keith Curtis',
  },
  {
    modid: 265,
    category: 'Utility',
    modName: 'TableExport',
    version: '0.2.4',
    description:
      'This script dumps commands to the chat for reconstructing a rollable table on another campaign. While this can be done on your own campaigns via the transmogrifyer, this script allows you to pass thos...',
    author: 'The Aaron',
  },
  {
    modid: 266,
    category: 'Utility',
    modName: 'Teleport',
    version: '1.2.2',
    description:
      '# Teleport\r\r[Forum Teleport Discussion](https://app.roll20.net/forum/post/9436375/script-teleport-from-scratch-teleport-token) <= this has a how-to on using Teleport.\r\rThis script provides a way for G...',
    author: 'Patrick K.',
  },
  {
    modid: 267,
    category: 'Utility',
    modName: 'Token Collisions',
    version: '1.6',
    description:
      '# Token Collisions\r\r_v1.5 Updates:_\r* Collisions with Paths and arbitrary polygons are now supported. Paths with non-transparent fills are treated as polygons.\r* All collisions are now entirely pixel-...',
    author: 'Ada Lindberg',
  },
  {
    modid: 268,
    category: 'Utility',
    modName: 'Token Fate',
    version: '1.1.1',
    description:
      'The goblin reinforcements have arrived with their crude bows at the ready! They scan the caves beyond their bretheren who are engaged in melee. Who will they fire on?\rA vicar floats above his acolytes...',
    author: 'Davemania',
  },
  {
    modid: 269,
    category: 'Utility',
    modName: 'TurnClock',
    version: '0.0.0',
    description:
      "Adds a macro !Clock <Seconds>, select one or more tokens and activate the maro which counts down and plays clock sounds named (grab from Fanburst): 'Sound: Ticking Clock' 'Sound: Buzzer' ",
    author: 'Bast',
  },
  {
    modid: 270,
    category: 'Utility',
    modName: 'TurnMarker1',
    version: '1.3.12',
    description:
      'TurnMarker1 provides a visual marker to show which token is at the top of the\rTurn Order.\r\r For instructions, run `!tm --help`.',
    author: 'The Aaron',
  },
  {
    modid: 271,
    category: 'Utility',
    modName: 'UniversalVTTImporter',
    version: '0.1.9',
    description:
      'Imports UniversalVTT files, `.dd2vtt`, as used by Dungeondraft.\r\rSee the *Help: UniversalVTTImporter* Handout in game for help, or run `!uvtt --help`, or visit [UniversalVTTImporter Forum Thread](http...',
    author: 'The Aaron',
  },
  {
    modid: 272,
    category: 'Utility',
    modName: 'UnSanity',
    version: '0.0.1',
    description:
      'UnSanity is a unicode sanitation test script and is mainly intended for scripters, sheet designers, and GMs looking to prepare for a game. It gives us a window into what unicode characters are allowed...',
    author: 'timmaugh',
  },
  {
    modid: 273,
    category: 'Utility',
    modName: 'Vector Math',
    version: '1.0',
    description:
      '# Vector Math\r\rThis script provides a small library of vector mathematics operations used by\rother scripts to assist in geometric computations. For example, this is\rused prominently in the ```Token Co...',
    author: 'Ada Lindberg',
  },
  {
    modid: 274,
    category: 'Utility',
    modName: 'WildHelpers',
    version: '1.3.4',
    description:
      'Set of utilities used by the **WildShape** API(and possibly others)\n Create menus, parse journal items, duplicate characters etc.',
    author: 'Angelo',
  },
  {
    modid: 275,
    category: 'Utility',
    modName: 'WildShapeResizer',
    version: '0.0.2',
    description:
      'A script to automatically resize a Rollable Table Token when a different side is chosen. It does this by repurposing the ???weight??? attribute of the Items in the Rollable Table. It was written with D&D ...',
    author: 'Erik O.',
  },
  {
    modid: 276,
    category: 'Utility',
    modName: 'ZeroFrame',
    version: '1.0.10',
    description:
      'ZeroFrame is the meta-script to control meta-scripts. It cuts in front of other scripts to make sure it handles the API chat message first, then hands it off to registered meta-scripts in a loop, in w...',
    author: 'timmaugh',
  },
]
export default menu
