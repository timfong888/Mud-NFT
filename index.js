{
  "Story": {
    "Title": "Dungeons of the Willow",
    "Tagline": "Where darkness always seeps....",
    "Author": "Jenny Hoodline",
    "Website": "www.dungeonsofthewillow.com",
    "StartLocation": {
      "Place": {
        "type": "Room",
        "name": "Study",
        "description": "This is a small study with some basic things: a table, a chair.  It feels as if some deep, private moments occurred.  A stream of light comes from the small, naked bulb hanging above.",
        "light": "Lit"
      }
    }
  },
  "Place": [
    {
      "type": "Room", 
      "name": "Kitchen",
      "description": "The dark, wood-paneled kitchen smells of bleach.  The dark granite counter-tops look sparkling clean.  On the center table, however, is a raw, half-eaten, and bloody chicken leg with a red-stained knife on the floor.",
      "light": "Dimly Lit"
    },
    {
      "type": "Room",
      "name": "Dining Room",
      "description": "There's a long dining table with a bright white tablecloth in the center.  The Dining Room is also dark paneled with portraits of dour-faced, almost zombie-lack, royalty.  Their grim expressions stare down from the walls.",
      "light": "Dimly Lit"
    }
  ],
  "Door": [
    {
      "name": "Kitchen Door",
      "description": "The Kitchen Door has a small pane of frosted glass with a hand-print on it.",
      "conections": [
                      {"to_East": "Dining Room"},
                      {"to_West": "Kitchen"}
                    ]
    },
    {
      "name": "Study Door",
      "description": "Frail, wooden door with a round, brass handle.",
      "connections": [
                        {"to_North": "Kitchen"},
                        {"to_South": "Study"}
                     ]
    }
  ]
}