const counties = [
    {
      "id": 21007,
      "name": "Ballard",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 21017,
      "name": "Bourbon",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 21031,
      "name": "Butler",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 21065,
      "name": "Estill",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 21069,
      "name": "Fleming",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 21093,
      "name": "Hardin",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 21099,
      "name": "Hart",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 21131,
      "name": "Leslie",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 21151,
      "name": "Madison",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 21155,
      "name": "Marion",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 21179,
      "name": "Nelson",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 17091,
      "name": "Kankakee",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 17187,
      "name": "Warren",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 17197,
      "name": "Will",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 18027,
      "name": "Daviess",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 18061,
      "name": "Harrison",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": "01001",
      "name": "Autauga",
      "state_abbrev": "AL",
      "state_name": "Alabama"
    },
    {
      "id": "01005",
      "name": "Barbour",
      "state_abbrev": "AL",
      "state_name": "Alabama"
    },
    {
      "id": "01023",
      "name": "Choctaw",
      "state_abbrev": "AL",
      "state_name": "Alabama"
    },
    {
      "id": "01035",
      "name": "Conecuh",
      "state_abbrev": "AL",
      "state_name": "Alabama"
    },
    {
      "id": "01051",
      "name": "Elmore",
      "state_abbrev": "AL",
      "state_name": "Alabama"
    },
    {
      "id": "01055",
      "name": "Etowah",
      "state_abbrev": "AL",
      "state_name": "Alabama"
    },
    {
      "id": "01065",
      "name": "Hale",
      "state_abbrev": "AL",
      "state_name": "Alabama"
    },
    {
      "id": "01089",
      "name": "Madison",
      "state_abbrev": "AL",
      "state_name": "Alabama"
    },
    {
      "id": "01113",
      "name": "Russell",
      "state_abbrev": "AL",
      "state_name": "Alabama"
    },
    {
      "id": "01117",
      "name": "Shelby",
      "state_abbrev": "AL",
      "state_name": "Alabama"
    },
    {
      "id": "02016",
      "name": "Aleutians West",
      "state_abbrev": "AK",
      "state_name": "Alaska"
    },
    {
      "id": "02130",
      "name": "Ketchikan Gateway",
      "state_abbrev": "AK",
      "state_name": "Alaska"
    },
    {
      "id": "02180",
      "name": "Nome",
      "state_abbrev": "AK",
      "state_name": "Alaska"
    },
    {
      "id": "02282",
      "name": "Yakutat",
      "state_abbrev": "AK",
      "state_name": "Alaska"
    },
    {
      "id": "05011",
      "name": "Bradley",
      "state_abbrev": "AR",
      "state_name": "Arkansas"
    },
    {
      "id": "05015",
      "name": "Carroll",
      "state_abbrev": "AR",
      "state_name": "Arkansas"
    },
    {
      "id": "05019",
      "name": "Clark",
      "state_abbrev": "AR",
      "state_name": "Arkansas"
    },
    {
      "id": "05025",
      "name": "Cleveland",
      "state_abbrev": "AR",
      "state_name": "Arkansas"
    },
    {
      "id": "05063",
      "name": "Independence",
      "state_abbrev": "AR",
      "state_name": "Arkansas"
    },
    {
      "id": "05067",
      "name": "Jackson",
      "state_abbrev": "AR",
      "state_name": "Arkansas"
    },
    {
      "id": "05121",
      "name": "Randolph",
      "state_abbrev": "AR",
      "state_name": "Arkansas"
    },
    {
      "id": "06001",
      "name": "Alameda",
      "state_abbrev": "CA",
      "state_name": "California"
    },
    {
      "id": "06003",
      "name": "Alpine",
      "state_abbrev": "CA",
      "state_name": "California"
    },
    {
      "id": "06005",
      "name": "Amador",
      "state_abbrev": "CA",
      "state_name": "California"
    },
    {
      "id": "06013",
      "name": "Contra Costa",
      "state_abbrev": "CA",
      "state_name": "California"
    },
    {
      "id": "06019",
      "name": "Fresno",
      "state_abbrev": "CA",
      "state_name": "California"
    },
    {
      "id": "06023",
      "name": "Humboldt",
      "state_abbrev": "CA",
      "state_name": "California"
    },
    {
      "id": "06033",
      "name": "Lake",
      "state_abbrev": "CA",
      "state_name": "California"
    },
    {
      "id": "06037",
      "name": "Los Angeles",
      "state_abbrev": "CA",
      "state_name": "California"
    },
    {
      "id": "06047",
      "name": "Merced",
      "state_abbrev": "CA",
      "state_name": "California"
    },
    {
      "id": "06057",
      "name": "Nevada",
      "state_abbrev": "CA",
      "state_name": "California"
    },
    {
      "id": "06081",
      "name": "San Mateo",
      "state_abbrev": "CA",
      "state_name": "California"
    },
    {
      "id": "06085",
      "name": "Santa Clara",
      "state_abbrev": "CA",
      "state_name": "California"
    },
    {
      "id": "06115",
      "name": "Yuba",
      "state_abbrev": "CA",
      "state_name": "California"
    },
    {
      "id": "08013",
      "name": "Boulder",
      "state_abbrev": "CO",
      "state_name": "Colorado"
    },
    {
      "id": "08029",
      "name": "Delta",
      "state_abbrev": "CO",
      "state_name": "Colorado"
    },
    {
      "id": "08049",
      "name": "Grand",
      "state_abbrev": "CO",
      "state_name": "Colorado"
    },
    {
      "id": "08077",
      "name": "Mesa",
      "state_abbrev": "CO",
      "state_name": "Colorado"
    },
    {
      "id": "08083",
      "name": "Montezuma",
      "state_abbrev": "CO",
      "state_name": "Colorado"
    },
    {
      "id": "08091",
      "name": "Ouray",
      "state_abbrev": "CO",
      "state_name": "Colorado"
    },
    {
      "id": "09009",
      "name": "New Haven",
      "state_abbrev": "CT",
      "state_name": "Connecticut"
    },
    {
      "id": 11001,
      "name": "District of Columbia",
      "state_abbrev": "DC",
      "state_name": "District of Columbia"
    },
    {
      "id": 12009,
      "name": "Brevard",
      "state_abbrev": "FL",
      "state_name": "Florida"
    },
    {
      "id": 12023,
      "name": "Columbia",
      "state_abbrev": "FL",
      "state_name": "Florida"
    },
    {
      "id": 12039,
      "name": "Gadsden",
      "state_abbrev": "FL",
      "state_name": "Florida"
    },
    {
      "id": 12055,
      "name": "Highlands",
      "state_abbrev": "FL",
      "state_name": "Florida"
    },
    {
      "id": 12065,
      "name": "Jefferson",
      "state_abbrev": "FL",
      "state_name": "Florida"
    },
    {
      "id": 12073,
      "name": "Leon",
      "state_abbrev": "FL",
      "state_name": "Florida"
    },
    {
      "id": 12095,
      "name": "Orange",
      "state_abbrev": "FL",
      "state_name": "Florida"
    },
    {
      "id": 12107,
      "name": "Putnam",
      "state_abbrev": "FL",
      "state_name": "Florida"
    },
    {
      "id": 12123,
      "name": "Taylor",
      "state_abbrev": "FL",
      "state_name": "Florida"
    },
    {
      "id": 12127,
      "name": "Volusia",
      "state_abbrev": "FL",
      "state_name": "Florida"
    },
    {
      "id": 12131,
      "name": "Walton",
      "state_abbrev": "FL",
      "state_name": "Florida"
    },
    {
      "id": 12133,
      "name": "Washington",
      "state_abbrev": "FL",
      "state_name": "Florida"
    },
    {
      "id": 13009,
      "name": "Baldwin",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 13027,
      "name": "Brooks",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 13103,
      "name": "Effingham",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 13121,
      "name": "Fulton",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 13141,
      "name": "Hancock",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 13149,
      "name": "Heard",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 13179,
      "name": "Liberty",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 13183,
      "name": "Long",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 13189,
      "name": "McDuffie",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 13209,
      "name": "Montgomery",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 13229,
      "name": "Pierce",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 13267,
      "name": "Tattnall",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 13271,
      "name": "Telfair",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 13291,
      "name": "Union",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 13305,
      "name": "Wayne",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 13319,
      "name": "Wilkinson",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 15007,
      "name": "Kauai",
      "state_abbrev": "HI",
      "state_name": "Hawaii"
    },
    {
      "id": 16015,
      "name": "Boise",
      "state_abbrev": "ID",
      "state_name": "Idaho"
    },
    {
      "id": 16023,
      "name": "Butte",
      "state_abbrev": "ID",
      "state_name": "Idaho"
    },
    {
      "id": 16025,
      "name": "Camas",
      "state_abbrev": "ID",
      "state_name": "Idaho"
    },
    {
      "id": 16027,
      "name": "Canyon",
      "state_abbrev": "ID",
      "state_name": "Idaho"
    },
    {
      "id": 16037,
      "name": "Custer",
      "state_abbrev": "ID",
      "state_name": "Idaho"
    },
    {
      "id": 16039,
      "name": "Elmore",
      "state_abbrev": "ID",
      "state_name": "Idaho"
    },
    {
      "id": 16043,
      "name": "Fremont",
      "state_abbrev": "ID",
      "state_name": "Idaho"
    },
    {
      "id": 16061,
      "name": "Lewis",
      "state_abbrev": "ID",
      "state_name": "Idaho"
    },
    {
      "id": 16063,
      "name": "Lincoln",
      "state_abbrev": "ID",
      "state_name": "Idaho"
    },
    {
      "id": 16085,
      "name": "Valley",
      "state_abbrev": "ID",
      "state_name": "Idaho"
    },
    {
      "id": 19175,
      "name": "Union",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 20053,
      "name": "Ellsworth",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 20095,
      "name": "Kingman",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 20135,
      "name": "Ness",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 20199,
      "name": "Wallace",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 48011,
      "name": "Armstrong",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48025,
      "name": "Bee",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48035,
      "name": "Bosque",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48053,
      "name": "Burnet",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48055,
      "name": "Caldwell",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48083,
      "name": "Coleman",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 29057,
      "name": "Dade",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 29143,
      "name": "New Madrid",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 29157,
      "name": "Perry",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 29189,
      "name": "St. Louis",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 29199,
      "name": "Scotland",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 29207,
      "name": "Stoddard",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 30015,
      "name": "Chouteau",
      "state_abbrev": "MT",
      "state_name": "Montana"
    },
    {
      "id": 30023,
      "name": "Deer Lodge",
      "state_abbrev": "MT",
      "state_name": "Montana"
    },
    {
      "id": 30029,
      "name": "Flathead",
      "state_abbrev": "MT",
      "state_name": "Montana"
    },
    {
      "id": 30039,
      "name": "Granite",
      "state_abbrev": "MT",
      "state_name": "Montana"
    },
    {
      "id": 30057,
      "name": "Madison",
      "state_abbrev": "MT",
      "state_name": "Montana"
    },
    {
      "id": 30071,
      "name": "Phillips",
      "state_abbrev": "MT",
      "state_name": "Montana"
    },
    {
      "id": 30077,
      "name": "Powell",
      "state_abbrev": "MT",
      "state_name": "Montana"
    },
    {
      "id": 30085,
      "name": "Roosevelt",
      "state_abbrev": "MT",
      "state_name": "Montana"
    },
    {
      "id": 30087,
      "name": "Rosebud",
      "state_abbrev": "MT",
      "state_name": "Montana"
    },
    {
      "id": 30105,
      "name": "Valley",
      "state_abbrev": "MT",
      "state_name": "Montana"
    },
    {
      "id": 31091,
      "name": "Hooker",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 53065,
      "name": "Stevens",
      "state_abbrev": "WA",
      "state_name": "Washington"
    },
    {
      "id": 21189,
      "name": "Owsley",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 21195,
      "name": "Pike",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 21217,
      "name": "Taylor",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 21237,
      "name": "Wolfe",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 21239,
      "name": "Woodford",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 22001,
      "name": "Acadia",
      "state_abbrev": "LA",
      "state_name": "Louisiana"
    },
    {
      "id": 22009,
      "name": "Avoyelles",
      "state_abbrev": "LA",
      "state_name": "Louisiana"
    },
    {
      "id": 22011,
      "name": "Beauregard",
      "state_abbrev": "LA",
      "state_name": "Louisiana"
    },
    {
      "id": 22029,
      "name": "Concordia",
      "state_abbrev": "LA",
      "state_name": "Louisiana"
    },
    {
      "id": 22031,
      "name": "De Soto",
      "state_abbrev": "LA",
      "state_name": "Louisiana"
    },
    {
      "id": 22033,
      "name": "East Baton Rouge",
      "state_abbrev": "LA",
      "state_name": "Louisiana"
    },
    {
      "id": 22047,
      "name": "Iberville",
      "state_abbrev": "LA",
      "state_name": "Louisiana"
    },
    {
      "id": 22071,
      "name": "Orleans",
      "state_abbrev": "LA",
      "state_name": "Louisiana"
    },
    {
      "id": 22081,
      "name": "Red River",
      "state_abbrev": "LA",
      "state_name": "Louisiana"
    },
    {
      "id": 22099,
      "name": "St. Martin",
      "state_abbrev": "LA",
      "state_name": "Louisiana"
    },
    {
      "id": 22119,
      "name": "Webster",
      "state_abbrev": "LA",
      "state_name": "Louisiana"
    },
    {
      "id": 23013,
      "name": "Knox",
      "state_abbrev": "ME",
      "state_name": "Maine"
    },
    {
      "id": 23015,
      "name": "Lincoln",
      "state_abbrev": "ME",
      "state_name": "Maine"
    },
    {
      "id": 24003,
      "name": "Anne Arundel",
      "state_abbrev": "MD",
      "state_name": "Maryland"
    },
    {
      "id": 18103,
      "name": "Miami",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 18129,
      "name": "Posey",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 18147,
      "name": "Spencer",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 19001,
      "name": "Adair",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 19045,
      "name": "Clinton",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 19083,
      "name": "Hardin",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 19111,
      "name": "Lee",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 31167,
      "name": "Stanton",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 34003,
      "name": "Bergen",
      "state_abbrev": "NJ",
      "state_name": "New Jersey"
    },
    {
      "id": 34007,
      "name": "Camden",
      "state_abbrev": "NJ",
      "state_name": "New Jersey"
    },
    {
      "id": 34013,
      "name": "Essex",
      "state_abbrev": "NJ",
      "state_name": "New Jersey"
    },
    {
      "id": 34023,
      "name": "Middlesex",
      "state_abbrev": "NJ",
      "state_name": "New Jersey"
    },
    {
      "id": 34041,
      "name": "Warren",
      "state_abbrev": "NJ",
      "state_name": "New Jersey"
    },
    {
      "id": 35007,
      "name": "Colfax",
      "state_abbrev": "NM",
      "state_name": "New Mexico"
    },
    {
      "id": 35011,
      "name": "De Baca",
      "state_abbrev": "NM",
      "state_name": "New Mexico"
    },
    {
      "id": 35051,
      "name": "Sierra",
      "state_abbrev": "NM",
      "state_name": "New Mexico"
    },
    {
      "id": 36013,
      "name": "Chautauqua",
      "state_abbrev": "NY",
      "state_name": "New York"
    },
    {
      "id": 36029,
      "name": "Erie",
      "state_abbrev": "NY",
      "state_name": "New York"
    },
    {
      "id": 36043,
      "name": "Herkimer",
      "state_abbrev": "NY",
      "state_name": "New York"
    },
    {
      "id": 36045,
      "name": "Jefferson",
      "state_abbrev": "NY",
      "state_name": "New York"
    },
    {
      "id": 36047,
      "name": "Kings",
      "state_abbrev": "NY",
      "state_name": "New York"
    },
    {
      "id": 36053,
      "name": "Madison",
      "state_abbrev": "NY",
      "state_name": "New York"
    },
    {
      "id": 36065,
      "name": "Oneida",
      "state_abbrev": "NY",
      "state_name": "New York"
    },
    {
      "id": 36077,
      "name": "Otsego",
      "state_abbrev": "NY",
      "state_name": "New York"
    },
    {
      "id": 36081,
      "name": "Queens",
      "state_abbrev": "NY",
      "state_name": "New York"
    },
    {
      "id": 36091,
      "name": "Saratoga",
      "state_abbrev": "NY",
      "state_name": "New York"
    },
    {
      "id": 36115,
      "name": "Washington",
      "state_abbrev": "NY",
      "state_name": "New York"
    },
    {
      "id": 37007,
      "name": "Anson",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 37027,
      "name": "Caldwell",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 37039,
      "name": "Cherokee",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 37049,
      "name": "Craven",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 37055,
      "name": "Dare",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 37059,
      "name": "Davie",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 37069,
      "name": "Franklin",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 37083,
      "name": "Halifax",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 37091,
      "name": "Hertford",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 37093,
      "name": "Hoke",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 37099,
      "name": "Jackson",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 37111,
      "name": "McDowell",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 37117,
      "name": "Martin",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 37127,
      "name": "Nash",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 37165,
      "name": "Scotland",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 37175,
      "name": "Transylvania",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 37199,
      "name": "Yancey",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 38017,
      "name": "Cass",
      "state_abbrev": "ND",
      "state_name": "North Dakota"
    },
    {
      "id": 38037,
      "name": "Grant",
      "state_abbrev": "ND",
      "state_name": "North Dakota"
    },
    {
      "id": 38085,
      "name": "Sioux",
      "state_abbrev": "ND",
      "state_name": "North Dakota"
    },
    {
      "id": 38099,
      "name": "Walsh",
      "state_abbrev": "ND",
      "state_name": "North Dakota"
    },
    {
      "id": 39035,
      "name": "Cuyahoga",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 39039,
      "name": "Defiance",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 39043,
      "name": "Erie",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 39125,
      "name": "Paulding",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 40065,
      "name": "Jackson",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": 48103,
      "name": "Crane",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48141,
      "name": "El Paso",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48151,
      "name": "Fisher",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48161,
      "name": "Freestone",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48167,
      "name": "Galveston",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48199,
      "name": "Hardin",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48213,
      "name": "Henderson",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48229,
      "name": "Hudspeth",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48241,
      "name": "Jasper",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48245,
      "name": "Jefferson",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48261,
      "name": "Kenedy",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48289,
      "name": "Leon",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48317,
      "name": "Martin",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48333,
      "name": "Mills",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48347,
      "name": "Nacogdoches",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48361,
      "name": "Orange",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48371,
      "name": "Pecos",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48395,
      "name": "Robertson",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48423,
      "name": "Smith",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48427,
      "name": "Starr",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48457,
      "name": "Tyler",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48471,
      "name": "Walker",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48475,
      "name": "Ward",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48477,
      "name": "Washington",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48499,
      "name": "Wood",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 49001,
      "name": "Beaver",
      "state_abbrev": "UT",
      "state_name": "Utah"
    },
    {
      "id": 49003,
      "name": "Box Elder",
      "state_abbrev": "UT",
      "state_name": "Utah"
    },
    {
      "id": 49011,
      "name": "Davis",
      "state_abbrev": "UT",
      "state_name": "Utah"
    },
    {
      "id": 40073,
      "name": "Kingfisher",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": 40079,
      "name": "Le Flore",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": 40145,
      "name": "Wagoner",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": 41005,
      "name": "Clackamas",
      "state_abbrev": "OR",
      "state_name": "Oregon"
    },
    {
      "id": 41021,
      "name": "Gilliam",
      "state_abbrev": "OR",
      "state_name": "Oregon"
    },
    {
      "id": 41033,
      "name": "Josephine",
      "state_abbrev": "OR",
      "state_name": "Oregon"
    },
    {
      "id": 41035,
      "name": "Klamath",
      "state_abbrev": "OR",
      "state_name": "Oregon"
    },
    {
      "id": 41039,
      "name": "Lane",
      "state_abbrev": "OR",
      "state_name": "Oregon"
    },
    {
      "id": 41043,
      "name": "Linn",
      "state_abbrev": "OR",
      "state_name": "Oregon"
    },
    {
      "id": 41051,
      "name": "Multnomah",
      "state_abbrev": "OR",
      "state_name": "Oregon"
    },
    {
      "id": 41055,
      "name": "Sherman",
      "state_abbrev": "OR",
      "state_name": "Oregon"
    },
    {
      "id": 41061,
      "name": "Union",
      "state_abbrev": "OR",
      "state_name": "Oregon"
    },
    {
      "id": 42005,
      "name": "Armstrong",
      "state_abbrev": "PA",
      "state_name": "Pennsylvania"
    },
    {
      "id": 42029,
      "name": "Chester",
      "state_abbrev": "PA",
      "state_name": "Pennsylvania"
    },
    {
      "id": 42035,
      "name": "Clinton",
      "state_abbrev": "PA",
      "state_name": "Pennsylvania"
    },
    {
      "id": 42059,
      "name": "Greene",
      "state_abbrev": "PA",
      "state_name": "Pennsylvania"
    },
    {
      "id": 42067,
      "name": "Juniata",
      "state_abbrev": "PA",
      "state_name": "Pennsylvania"
    },
    {
      "id": 42091,
      "name": "Montgomery",
      "state_abbrev": "PA",
      "state_name": "Pennsylvania"
    },
    {
      "id": 42111,
      "name": "Somerset",
      "state_abbrev": "PA",
      "state_name": "Pennsylvania"
    },
    {
      "id": 45005,
      "name": "Allendale",
      "state_abbrev": "SC",
      "state_name": "South Carolina"
    },
    {
      "id": 45019,
      "name": "Charleston",
      "state_abbrev": "SC",
      "state_name": "South Carolina"
    },
    {
      "id": 45025,
      "name": "Chesterfield",
      "state_abbrev": "SC",
      "state_name": "South Carolina"
    },
    {
      "id": 45043,
      "name": "Georgetown",
      "state_abbrev": "SC",
      "state_name": "South Carolina"
    },
    {
      "id": 45063,
      "name": "Lexington",
      "state_abbrev": "SC",
      "state_name": "South Carolina"
    },
    {
      "id": 45077,
      "name": "Pickens",
      "state_abbrev": "SC",
      "state_name": "South Carolina"
    },
    {
      "id": 45091,
      "name": "York",
      "state_abbrev": "SC",
      "state_name": "South Carolina"
    },
    {
      "id": 46073,
      "name": "Jerauld",
      "state_abbrev": "SD",
      "state_name": "South Dakota"
    },
    {
      "id": 46093,
      "name": "Meade",
      "state_abbrev": "SD",
      "state_name": "South Dakota"
    },
    {
      "id": 46095,
      "name": "Mellette",
      "state_abbrev": "SD",
      "state_name": "South Dakota"
    },
    {
      "id": 46123,
      "name": "Tripp",
      "state_abbrev": "SD",
      "state_name": "South Dakota"
    },
    {
      "id": 47001,
      "name": "Anderson",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 47003,
      "name": "Bedford",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 47005,
      "name": "Benton",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 47019,
      "name": "Carter",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 47029,
      "name": "Cocke",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 47049,
      "name": "Fentress",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 47063,
      "name": "Hamblen",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 47073,
      "name": "Hawkins",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 47081,
      "name": "Hickman",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 47097,
      "name": "Lauderdale",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 47121,
      "name": "Meigs",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 47149,
      "name": "Rutherford",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 47173,
      "name": "Union",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 48007,
      "name": "Aransas",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 25001,
      "name": "Barnstable",
      "state_abbrev": "MA",
      "state_name": "Massachusetts"
    },
    {
      "id": 25013,
      "name": "Hampden",
      "state_abbrev": "MA",
      "state_name": "Massachusetts"
    },
    {
      "id": 25025,
      "name": "Suffolk",
      "state_abbrev": "MA",
      "state_name": "Massachusetts"
    },
    {
      "id": 26033,
      "name": "Chippewa",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 26053,
      "name": "Gogebic",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 26063,
      "name": "Huron",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 26097,
      "name": "Mackinac",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 26115,
      "name": "Monroe",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 13283,
      "name": "Treutlen",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 13289,
      "name": "Twiggs",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 13313,
      "name": "Whitfield",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 13317,
      "name": "Wilkes",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 15001,
      "name": "Hawaii",
      "state_abbrev": "HI",
      "state_name": "Hawaii"
    },
    {
      "id": 15009,
      "name": "Maui",
      "state_abbrev": "HI",
      "state_name": "Hawaii"
    },
    {
      "id": 16059,
      "name": "Lemhi",
      "state_abbrev": "ID",
      "state_name": "Idaho"
    },
    {
      "id": 16073,
      "name": "Owyhee",
      "state_abbrev": "ID",
      "state_name": "Idaho"
    },
    {
      "id": 16083,
      "name": "Twin Falls",
      "state_abbrev": "ID",
      "state_name": "Idaho"
    },
    {
      "id": 16087,
      "name": "Washington",
      "state_abbrev": "ID",
      "state_name": "Idaho"
    },
    {
      "id": 17027,
      "name": "Clinton",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 17031,
      "name": "Cook",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 17047,
      "name": "Edwards",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 49029,
      "name": "Morgan",
      "state_abbrev": "UT",
      "state_name": "Utah"
    },
    {
      "id": 49035,
      "name": "Salt Lake",
      "state_abbrev": "UT",
      "state_name": "Utah"
    },
    {
      "id": 49043,
      "name": "Summit",
      "state_abbrev": "UT",
      "state_name": "Utah"
    },
    {
      "id": 49049,
      "name": "Utah",
      "state_abbrev": "UT",
      "state_name": "Utah"
    },
    {
      "id": 51015,
      "name": "Augusta",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 51037,
      "name": "Charlotte",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 51051,
      "name": "Dickenson",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 51053,
      "name": "Dinwiddie",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 51069,
      "name": "Frederick",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 51073,
      "name": "Gloucester",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 51085,
      "name": "Hanover",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 51099,
      "name": "King George",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 51125,
      "name": "Nelson",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 51131,
      "name": "Northampton",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 51137,
      "name": "Orange",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 51145,
      "name": "Powhatan",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 51149,
      "name": "Prince George",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 51161,
      "name": "Roanoke",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 51177,
      "name": "Spotsylvania",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 51185,
      "name": "Tazewell",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 51199,
      "name": "York",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 53005,
      "name": "Benton",
      "state_abbrev": "WA",
      "state_name": "Washington"
    },
    {
      "id": 53007,
      "name": "Chelan",
      "state_abbrev": "WA",
      "state_name": "Washington"
    },
    {
      "id": 53009,
      "name": "Clallam",
      "state_abbrev": "WA",
      "state_name": "Washington"
    },
    {
      "id": 53015,
      "name": "Cowlitz",
      "state_abbrev": "WA",
      "state_name": "Washington"
    },
    {
      "id": 53025,
      "name": "Grant",
      "state_abbrev": "WA",
      "state_name": "Washington"
    },
    {
      "id": 53031,
      "name": "Jefferson",
      "state_abbrev": "WA",
      "state_name": "Washington"
    },
    {
      "id": 53037,
      "name": "Kittitas",
      "state_abbrev": "WA",
      "state_name": "Washington"
    },
    {
      "id": 53043,
      "name": "Lincoln",
      "state_abbrev": "WA",
      "state_name": "Washington"
    },
    {
      "id": 12077,
      "name": "Liberty",
      "state_abbrev": "FL",
      "state_name": "Florida"
    },
    {
      "id": 72054,
      "name": "Florida",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": 72113,
      "name": "Ponce",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": 72115,
      "name": "Quebradillas",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": 72141,
      "name": "Utuado",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": 72147,
      "name": "Vieques",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": 78010,
      "name": "St. Croix",
      "state_abbrev": "VI",
      "state_name": "United States Virgin Islands"
    },
    {
      "id": 78020,
      "name": "St. John",
      "state_abbrev": "VI",
      "state_name": "United States Virgin Islands"
    },
    {
      "id": "05061",
      "name": "Howard",
      "state_abbrev": "AR",
      "state_name": "Arkansas"
    },
    {
      "id": "05093",
      "name": "Mississippi",
      "state_abbrev": "AR",
      "state_name": "Arkansas"
    },
    {
      "id": "05095",
      "name": "Monroe",
      "state_abbrev": "AR",
      "state_name": "Arkansas"
    },
    {
      "id": "05099",
      "name": "Nevada",
      "state_abbrev": "AR",
      "state_name": "Arkansas"
    },
    {
      "id": "05103",
      "name": "Ouachita",
      "state_abbrev": "AR",
      "state_name": "Arkansas"
    },
    {
      "id": "05109",
      "name": "Pike",
      "state_abbrev": "AR",
      "state_name": "Arkansas"
    },
    {
      "id": "05117",
      "name": "Prairie",
      "state_abbrev": "AR",
      "state_name": "Arkansas"
    },
    {
      "id": "05133",
      "name": "Sevier",
      "state_abbrev": "AR",
      "state_name": "Arkansas"
    },
    {
      "id": "05147",
      "name": "Woodruff",
      "state_abbrev": "AR",
      "state_name": "Arkansas"
    },
    {
      "id": "06045",
      "name": "Mendocino",
      "state_abbrev": "CA",
      "state_name": "California"
    },
    {
      "id": "06051",
      "name": "Mono",
      "state_abbrev": "CA",
      "state_name": "California"
    },
    {
      "id": 24011,
      "name": "Caroline",
      "state_abbrev": "MD",
      "state_name": "Maryland"
    },
    {
      "id": 24033,
      "name": "Prince George's",
      "state_abbrev": "MD",
      "state_name": "Maryland"
    },
    {
      "id": 24043,
      "name": "Washington",
      "state_abbrev": "MD",
      "state_name": "Maryland"
    },
    {
      "id": 25007,
      "name": "Dukes",
      "state_abbrev": "MA",
      "state_name": "Massachusetts"
    },
    {
      "id": 25017,
      "name": "Middlesex",
      "state_abbrev": "MA",
      "state_name": "Massachusetts"
    },
    {
      "id": 26041,
      "name": "Delta",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 26099,
      "name": "Macomb",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 26103,
      "name": "Marquette",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 26135,
      "name": "Oscoda",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 26147,
      "name": "St. Clair",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 26163,
      "name": "Wayne",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 27023,
      "name": "Chippewa",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 27053,
      "name": "Hennepin",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 27077,
      "name": "Lake of the Woods",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 27091,
      "name": "Martin",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 27129,
      "name": "Renville",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 27139,
      "name": "Scott",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 27163,
      "name": "Washington",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 28007,
      "name": "Attala",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 28033,
      "name": "DeSoto",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 28055,
      "name": "Issaquena",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 28075,
      "name": "Lauderdale",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 28143,
      "name": "Tunica",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 28157,
      "name": "Wilkinson",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 28163,
      "name": "Yazoo",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 29023,
      "name": "Butler",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 29029,
      "name": "Camden",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 29031,
      "name": "Cape Girardeau",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 29033,
      "name": "Carroll",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 17075,
      "name": "Iroquois",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 17129,
      "name": "Menard",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 17161,
      "name": "Rock Island",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 17175,
      "name": "Stark",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 17185,
      "name": "Wabash",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 18009,
      "name": "Blackford",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 18035,
      "name": "Delaware",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 18067,
      "name": "Howard",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 18083,
      "name": "Knox",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 18159,
      "name": "Tipton",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 18175,
      "name": "Washington",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 49025,
      "name": "Kane",
      "state_abbrev": "UT",
      "state_name": "Utah"
    },
    {
      "id": "05003",
      "name": "Ashley",
      "state_abbrev": "AR",
      "state_name": "Arkansas"
    },
    {
      "id": "05007",
      "name": "Benton",
      "state_abbrev": "AR",
      "state_name": "Arkansas"
    },
    {
      "id": "05013",
      "name": "Calhoun",
      "state_abbrev": "AR",
      "state_name": "Arkansas"
    },
    {
      "id": "05045",
      "name": "Faulkner",
      "state_abbrev": "AR",
      "state_name": "Arkansas"
    },
    {
      "id": 13051,
      "name": "Chatham",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 13077,
      "name": "Coweta",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 13123,
      "name": "Gilmer",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 13133,
      "name": "Greene",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 13137,
      "name": "Habersham",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 13139,
      "name": "Hall",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 13143,
      "name": "Haralson",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 13157,
      "name": "Jackson",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 13171,
      "name": "Lamar",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 13181,
      "name": "Lincoln",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 13185,
      "name": "Lowndes",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 13195,
      "name": "Madison",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 13213,
      "name": "Murray",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 13217,
      "name": "Newton",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 13237,
      "name": "Putnam",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 13245,
      "name": "Richmond",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 13251,
      "name": "Screven",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 13269,
      "name": "Taylor",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 13279,
      "name": "Toombs",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 23023,
      "name": "Sagadahoc",
      "state_abbrev": "ME",
      "state_name": "Maine"
    },
    {
      "id": 23031,
      "name": "York",
      "state_abbrev": "ME",
      "state_name": "Maine"
    },
    {
      "id": 24001,
      "name": "Allegany",
      "state_abbrev": "MD",
      "state_name": "Maryland"
    },
    {
      "id": 24005,
      "name": "Baltimore",
      "state_abbrev": "MD",
      "state_name": "Maryland"
    },
    {
      "id": 24017,
      "name": "Charles",
      "state_abbrev": "MD",
      "state_name": "Maryland"
    },
    {
      "id": 24021,
      "name": "Frederick",
      "state_abbrev": "MD",
      "state_name": "Maryland"
    },
    {
      "id": 24031,
      "name": "Montgomery",
      "state_abbrev": "MD",
      "state_name": "Maryland"
    },
    {
      "id": 24045,
      "name": "Wicomico",
      "state_abbrev": "MD",
      "state_name": "Maryland"
    },
    {
      "id": 28149,
      "name": "Warren",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 28151,
      "name": "Washington",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 29041,
      "name": "Chariton",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 29069,
      "name": "Dunklin",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 29087,
      "name": "Holt",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 29113,
      "name": "Lincoln",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 29159,
      "name": "Pettis",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 29183,
      "name": "St. Charles",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 29195,
      "name": "Saline",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 29197,
      "name": "Schuyler",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 29201,
      "name": "Scott",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 30001,
      "name": "Beaverhead",
      "state_abbrev": "MT",
      "state_name": "Montana"
    },
    {
      "id": 30013,
      "name": "Cascade",
      "state_abbrev": "MT",
      "state_name": "Montana"
    },
    {
      "id": 30027,
      "name": "Fergus",
      "state_abbrev": "MT",
      "state_name": "Montana"
    },
    {
      "id": 30031,
      "name": "Gallatin",
      "state_abbrev": "MT",
      "state_name": "Montana"
    },
    {
      "id": 30045,
      "name": "Judith Basin",
      "state_abbrev": "MT",
      "state_name": "Montana"
    },
    {
      "id": 30049,
      "name": "Lewis and Clark",
      "state_abbrev": "MT",
      "state_name": "Montana"
    },
    {
      "id": 30055,
      "name": "McCone",
      "state_abbrev": "MT",
      "state_name": "Montana"
    },
    {
      "id": 30059,
      "name": "Meagher",
      "state_abbrev": "MT",
      "state_name": "Montana"
    },
    {
      "id": 30069,
      "name": "Petroleum",
      "state_abbrev": "MT",
      "state_name": "Montana"
    },
    {
      "id": 30073,
      "name": "Pondera",
      "state_abbrev": "MT",
      "state_name": "Montana"
    },
    {
      "id": 30083,
      "name": "Richland",
      "state_abbrev": "MT",
      "state_name": "Montana"
    },
    {
      "id": 30099,
      "name": "Teton",
      "state_abbrev": "MT",
      "state_name": "Montana"
    },
    {
      "id": 31103,
      "name": "Keya Paha",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 31151,
      "name": "Saline",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 32001,
      "name": "Churchill",
      "state_abbrev": "NV",
      "state_name": "Nevada"
    },
    {
      "id": 32003,
      "name": "Clark",
      "state_abbrev": "NV",
      "state_name": "Nevada"
    },
    {
      "id": 32015,
      "name": "Lander",
      "state_abbrev": "NV",
      "state_name": "Nevada"
    },
    {
      "id": 33007,
      "name": "Coos",
      "state_abbrev": "NH",
      "state_name": "New Hampshire"
    },
    {
      "id": 33015,
      "name": "Rockingham",
      "state_abbrev": "NH",
      "state_name": "New Hampshire"
    },
    {
      "id": 33017,
      "name": "Strafford",
      "state_abbrev": "NH",
      "state_name": "New Hampshire"
    },
    {
      "id": 34001,
      "name": "Atlantic",
      "state_abbrev": "NJ",
      "state_name": "New Jersey"
    },
    {
      "id": 34005,
      "name": "Burlington",
      "state_abbrev": "NJ",
      "state_name": "New Jersey"
    },
    {
      "id": 34015,
      "name": "Gloucester",
      "state_abbrev": "NJ",
      "state_name": "New Jersey"
    },
    {
      "id": 34019,
      "name": "Hunterdon",
      "state_abbrev": "NJ",
      "state_name": "New Jersey"
    },
    {
      "id": 34021,
      "name": "Mercer",
      "state_abbrev": "NJ",
      "state_name": "New Jersey"
    },
    {
      "id": 34025,
      "name": "Monmouth",
      "state_abbrev": "NJ",
      "state_name": "New Jersey"
    },
    {
      "id": 34029,
      "name": "Ocean",
      "state_abbrev": "NJ",
      "state_name": "New Jersey"
    },
    {
      "id": 34035,
      "name": "Somerset",
      "state_abbrev": "NJ",
      "state_name": "New Jersey"
    },
    {
      "id": 21229,
      "name": "Washington",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 21231,
      "name": "Wayne",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 22035,
      "name": "East Carroll",
      "state_abbrev": "LA",
      "state_name": "Louisiana"
    },
    {
      "id": 22045,
      "name": "Iberia",
      "state_abbrev": "LA",
      "state_name": "Louisiana"
    },
    {
      "id": 22053,
      "name": "Jefferson Davis",
      "state_abbrev": "LA",
      "state_name": "Louisiana"
    },
    {
      "id": 22055,
      "name": "Lafayette",
      "state_abbrev": "LA",
      "state_name": "Louisiana"
    },
    {
      "id": "06055",
      "name": "Napa",
      "state_abbrev": "CA",
      "state_name": "California"
    },
    {
      "id": "06059",
      "name": "Orange",
      "state_abbrev": "CA",
      "state_name": "California"
    },
    {
      "id": "06069",
      "name": "San Benito",
      "state_abbrev": "CA",
      "state_name": "California"
    },
    {
      "id": "06073",
      "name": "San Diego",
      "state_abbrev": "CA",
      "state_name": "California"
    },
    {
      "id": "06079",
      "name": "San Luis Obispo",
      "state_abbrev": "CA",
      "state_name": "California"
    },
    {
      "id": "06083",
      "name": "Santa Barbara",
      "state_abbrev": "CA",
      "state_name": "California"
    },
    {
      "id": "06097",
      "name": "Sonoma",
      "state_abbrev": "CA",
      "state_name": "California"
    },
    {
      "id": "06101",
      "name": "Sutter",
      "state_abbrev": "CA",
      "state_name": "California"
    },
    {
      "id": "06107",
      "name": "Tulare",
      "state_abbrev": "CA",
      "state_name": "California"
    },
    {
      "id": "06113",
      "name": "Yolo",
      "state_abbrev": "CA",
      "state_name": "California"
    },
    {
      "id": "08019",
      "name": "Clear Creek",
      "state_abbrev": "CO",
      "state_name": "Colorado"
    },
    {
      "id": "08023",
      "name": "Costilla",
      "state_abbrev": "CO",
      "state_name": "Colorado"
    },
    {
      "id": "08031",
      "name": "Denver",
      "state_abbrev": "CO",
      "state_name": "Colorado"
    },
    {
      "id": "08037",
      "name": "Eagle",
      "state_abbrev": "CO",
      "state_name": "Colorado"
    },
    {
      "id": "08055",
      "name": "Huerfano",
      "state_abbrev": "CO",
      "state_name": "Colorado"
    },
    {
      "id": "01049",
      "name": "DeKalb",
      "state_abbrev": "AL",
      "state_name": "Alabama"
    },
    {
      "id": "01063",
      "name": "Greene",
      "state_abbrev": "AL",
      "state_name": "Alabama"
    },
    {
      "id": "01087",
      "name": "Macon",
      "state_abbrev": "AL",
      "state_name": "Alabama"
    },
    {
      "id": "01091",
      "name": "Marengo",
      "state_abbrev": "AL",
      "state_name": "Alabama"
    },
    {
      "id": "01095",
      "name": "Marshall",
      "state_abbrev": "AL",
      "state_name": "Alabama"
    },
    {
      "id": "01101",
      "name": "Montgomery",
      "state_abbrev": "AL",
      "state_name": "Alabama"
    },
    {
      "id": "01107",
      "name": "Pickens",
      "state_abbrev": "AL",
      "state_name": "Alabama"
    },
    {
      "id": "01115",
      "name": "St. Clair",
      "state_abbrev": "AL",
      "state_name": "Alabama"
    },
    {
      "id": "01119",
      "name": "Sumter",
      "state_abbrev": "AL",
      "state_name": "Alabama"
    },
    {
      "id": "01131",
      "name": "Wilcox",
      "state_abbrev": "AL",
      "state_name": "Alabama"
    },
    {
      "id": "02090",
      "name": "Fairbanks North Star",
      "state_abbrev": "AK",
      "state_name": "Alaska"
    },
    {
      "id": "02158",
      "name": "Kusilvak",
      "state_abbrev": "AK",
      "state_name": "Alaska"
    },
    {
      "id": "02240",
      "name": "Southeast Fairbanks",
      "state_abbrev": "AK",
      "state_name": "Alaska"
    },
    {
      "id": "04005",
      "name": "Coconino",
      "state_abbrev": "AZ",
      "state_name": "Arizona"
    },
    {
      "id": "04009",
      "name": "Graham",
      "state_abbrev": "AZ",
      "state_name": "Arizona"
    },
    {
      "id": "04013",
      "name": "Maricopa",
      "state_abbrev": "AZ",
      "state_name": "Arizona"
    },
    {
      "id": 54001,
      "name": "Barbour",
      "state_abbrev": "WV",
      "state_name": "West Virginia"
    },
    {
      "id": 54005,
      "name": "Boone",
      "state_abbrev": "WV",
      "state_name": "West Virginia"
    },
    {
      "id": 54021,
      "name": "Gilmer",
      "state_abbrev": "WV",
      "state_name": "West Virginia"
    },
    {
      "id": 54039,
      "name": "Kanawha",
      "state_abbrev": "WV",
      "state_name": "West Virginia"
    },
    {
      "id": 54045,
      "name": "Logan",
      "state_abbrev": "WV",
      "state_name": "West Virginia"
    },
    {
      "id": 54047,
      "name": "McDowell",
      "state_abbrev": "WV",
      "state_name": "West Virginia"
    },
    {
      "id": 54063,
      "name": "Monroe",
      "state_abbrev": "WV",
      "state_name": "West Virginia"
    },
    {
      "id": 54067,
      "name": "Nicholas",
      "state_abbrev": "WV",
      "state_name": "West Virginia"
    },
    {
      "id": 54087,
      "name": "Roane",
      "state_abbrev": "WV",
      "state_name": "West Virginia"
    },
    {
      "id": 54107,
      "name": "Wood",
      "state_abbrev": "WV",
      "state_name": "West Virginia"
    },
    {
      "id": 55003,
      "name": "Ashland",
      "state_abbrev": "WI",
      "state_name": "Wisconsin"
    },
    {
      "id": 55043,
      "name": "Grant",
      "state_abbrev": "WI",
      "state_name": "Wisconsin"
    },
    {
      "id": 55113,
      "name": "Sawyer",
      "state_abbrev": "WI",
      "state_name": "Wisconsin"
    },
    {
      "id": 56029,
      "name": "Park",
      "state_abbrev": "WY",
      "state_name": "Wyoming"
    },
    {
      "id": 60010,
      "name": "Eastern",
      "state_abbrev": "AS",
      "state_name": "American Samoa"
    },
    {
      "id": 60020,
      "name": "Manu'a",
      "state_abbrev": "AS",
      "state_name": "American Samoa"
    },
    {
      "id": 69085,
      "name": "Northern Islands",
      "state_abbrev": "MP",
      "state_name": "Commonwealth of the Northern Mariana Islands"
    },
    {
      "id": 69100,
      "name": "Rota",
      "state_abbrev": "MP",
      "state_name": "Commonwealth of the Northern Mariana Islands"
    },
    {
      "id": 69110,
      "name": "Saipan",
      "state_abbrev": "MP",
      "state_name": "Commonwealth of the Northern Mariana Islands"
    },
    {
      "id": 72023,
      "name": "Cabo Rojo",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": 72031,
      "name": "Carolina",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": 72037,
      "name": "Ceiba",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": 72039,
      "name": "Ciales",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": 72053,
      "name": "Fajardo",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": 12086,
      "name": "Miami-Dade",
      "state_abbrev": "FL",
      "state_name": "Florida"
    },
    {
      "id": 12093,
      "name": "Okeechobee",
      "state_abbrev": "FL",
      "state_name": "Florida"
    },
    {
      "id": 12097,
      "name": "Osceola",
      "state_abbrev": "FL",
      "state_name": "Florida"
    },
    {
      "id": 13021,
      "name": "Bibb",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 13029,
      "name": "Bryan",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 39137,
      "name": "Putnam",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 39175,
      "name": "Wyandot",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 40013,
      "name": "Bryan",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": 40027,
      "name": "Cleveland",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": 40057,
      "name": "Harmon",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": 40067,
      "name": "Jefferson",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": 40075,
      "name": "Kiowa",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": 40095,
      "name": "Marshall",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": 40125,
      "name": "Pottawatomie",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": 40135,
      "name": "Sequoyah",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": 40143,
      "name": "Tulsa",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": 27011,
      "name": "Big Stone",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 27013,
      "name": "Blue Earth",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 27031,
      "name": "Cook",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 27061,
      "name": "Itasca",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 27073,
      "name": "Lac qui Parle",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 27075,
      "name": "Lake",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 27089,
      "name": "Marshall",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 27097,
      "name": "Morrison",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 27127,
      "name": "Redwood",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 27161,
      "name": "Waseca",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 27171,
      "name": "Wright",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 28001,
      "name": "Adams",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 28011,
      "name": "Bolivar",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 28029,
      "name": "Copiah",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 28043,
      "name": "Grenada",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 28083,
      "name": "Leflore",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 28087,
      "name": "Lowndes",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 28103,
      "name": "Noxubee",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 28121,
      "name": "Rankin",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 35015,
      "name": "Eddy",
      "state_abbrev": "NM",
      "state_name": "New Mexico"
    },
    {
      "id": 35039,
      "name": "Rio Arriba",
      "state_abbrev": "NM",
      "state_name": "New Mexico"
    },
    {
      "id": 35045,
      "name": "San Juan",
      "state_abbrev": "NM",
      "state_name": "New Mexico"
    },
    {
      "id": 35055,
      "name": "Taos",
      "state_abbrev": "NM",
      "state_name": "New Mexico"
    },
    {
      "id": 36025,
      "name": "Delaware",
      "state_abbrev": "NY",
      "state_name": "New York"
    },
    {
      "id": 36031,
      "name": "Essex",
      "state_abbrev": "NY",
      "state_name": "New York"
    },
    {
      "id": 36103,
      "name": "Suffolk",
      "state_abbrev": "NY",
      "state_name": "New York"
    },
    {
      "id": 36105,
      "name": "Sullivan",
      "state_abbrev": "NY",
      "state_name": "New York"
    },
    {
      "id": 36119,
      "name": "Westchester",
      "state_abbrev": "NY",
      "state_name": "New York"
    },
    {
      "id": 36123,
      "name": "Yates",
      "state_abbrev": "NY",
      "state_name": "New York"
    },
    {
      "id": 37009,
      "name": "Ashe",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 37013,
      "name": "Beaufort",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 37017,
      "name": "Bladen",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 37023,
      "name": "Burke",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 37037,
      "name": "Chatham",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 37043,
      "name": "Clay",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 37053,
      "name": "Currituck",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 37057,
      "name": "Davidson",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 37065,
      "name": "Edgecombe",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 37075,
      "name": "Graham",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 37085,
      "name": "Harnett",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 37089,
      "name": "Henderson",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 37095,
      "name": "Hyde",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 37103,
      "name": "Jones",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 37115,
      "name": "Madison",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 37123,
      "name": "Montgomery",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 28141,
      "name": "Tishomingo",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 42099,
      "name": "Perry",
      "state_abbrev": "PA",
      "state_name": "Pennsylvania"
    },
    {
      "id": 42103,
      "name": "Pike",
      "state_abbrev": "PA",
      "state_name": "Pennsylvania"
    },
    {
      "id": 42127,
      "name": "Wayne",
      "state_abbrev": "PA",
      "state_name": "Pennsylvania"
    },
    {
      "id": 42133,
      "name": "York",
      "state_abbrev": "PA",
      "state_name": "Pennsylvania"
    },
    {
      "id": 48411,
      "name": "San Saba",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48429,
      "name": "Stephens",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48449,
      "name": "Titus",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48453,
      "name": "Travis",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48455,
      "name": "Trinity",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48467,
      "name": "Van Zandt",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48473,
      "name": "Waller",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48479,
      "name": "Webb",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 49033,
      "name": "Rich",
      "state_abbrev": "UT",
      "state_name": "Utah"
    },
    {
      "id": 49045,
      "name": "Tooele",
      "state_abbrev": "UT",
      "state_name": "Utah"
    },
    {
      "id": 49047,
      "name": "Uintah",
      "state_abbrev": "UT",
      "state_name": "Utah"
    },
    {
      "id": 49051,
      "name": "Wasatch",
      "state_abbrev": "UT",
      "state_name": "Utah"
    },
    {
      "id": 50017,
      "name": "Orange",
      "state_abbrev": "VT",
      "state_name": "Vermont"
    },
    {
      "id": 50027,
      "name": "Windsor",
      "state_abbrev": "VT",
      "state_name": "Vermont"
    },
    {
      "id": 51007,
      "name": "Amelia",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 51017,
      "name": "Bath",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 51019,
      "name": "Bedford",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 51023,
      "name": "Botetourt",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 51033,
      "name": "Caroline",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 51036,
      "name": "Charles City",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 51041,
      "name": "Chesterfield",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 51057,
      "name": "Essex",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 51067,
      "name": "Franklin",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 51083,
      "name": "Halifax",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 51091,
      "name": "Highland",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 51095,
      "name": "James City",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 51107,
      "name": "Loudoun",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 51111,
      "name": "Lunenburg",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 51127,
      "name": "New Kent",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 51133,
      "name": "Northumberland",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 51143,
      "name": "Pittsylvania",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 51159,
      "name": "Richmond",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 51165,
      "name": "Rockingham",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 51175,
      "name": "Southampton",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 51179,
      "name": "Stafford",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 51187,
      "name": "Warren",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 53047,
      "name": "Okanogan",
      "state_abbrev": "WA",
      "state_name": "Washington"
    },
    {
      "id": 53049,
      "name": "Pacific",
      "state_abbrev": "WA",
      "state_name": "Washington"
    },
    {
      "id": 53053,
      "name": "Pierce",
      "state_abbrev": "WA",
      "state_name": "Washington"
    },
    {
      "id": 53061,
      "name": "Snohomish",
      "state_abbrev": "WA",
      "state_name": "Washington"
    },
    {
      "id": 53071,
      "name": "Walla Walla",
      "state_abbrev": "WA",
      "state_name": "Washington"
    },
    {
      "id": 53073,
      "name": "Whatcom",
      "state_abbrev": "WA",
      "state_name": "Washington"
    },
    {
      "id": 54013,
      "name": "Calhoun",
      "state_abbrev": "WV",
      "state_name": "West Virginia"
    },
    {
      "id": 54017,
      "name": "Doddridge",
      "state_abbrev": "WV",
      "state_name": "West Virginia"
    },
    {
      "id": 54019,
      "name": "Fayette",
      "state_abbrev": "WV",
      "state_name": "West Virginia"
    },
    {
      "id": 54023,
      "name": "Grant",
      "state_abbrev": "WV",
      "state_name": "West Virginia"
    },
    {
      "id": 54027,
      "name": "Hampshire",
      "state_abbrev": "WV",
      "state_name": "West Virginia"
    },
    {
      "id": 54033,
      "name": "Harrison",
      "state_abbrev": "WV",
      "state_name": "West Virginia"
    },
    {
      "id": 54037,
      "name": "Jefferson",
      "state_abbrev": "WV",
      "state_name": "West Virginia"
    },
    {
      "id": 54043,
      "name": "Lincoln",
      "state_abbrev": "WV",
      "state_name": "West Virginia"
    },
    {
      "id": 54065,
      "name": "Morgan",
      "state_abbrev": "WV",
      "state_name": "West Virginia"
    },
    {
      "id": 54071,
      "name": "Pendleton",
      "state_abbrev": "WV",
      "state_name": "West Virginia"
    },
    {
      "id": 54081,
      "name": "Raleigh",
      "state_abbrev": "WV",
      "state_name": "West Virginia"
    },
    {
      "id": 54093,
      "name": "Tucker",
      "state_abbrev": "WV",
      "state_name": "West Virginia"
    },
    {
      "id": 54095,
      "name": "Tyler",
      "state_abbrev": "WV",
      "state_name": "West Virginia"
    },
    {
      "id": 37133,
      "name": "Onslow",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 37137,
      "name": "Pamlico",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 37149,
      "name": "Polk",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 37153,
      "name": "Richmond",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 37161,
      "name": "Rutherford",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 37163,
      "name": "Sampson",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 37177,
      "name": "Tyrrell",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 38005,
      "name": "Benson",
      "state_abbrev": "ND",
      "state_name": "North Dakota"
    },
    {
      "id": 38033,
      "name": "Golden Valley",
      "state_abbrev": "ND",
      "state_name": "North Dakota"
    },
    {
      "id": 38053,
      "name": "McKenzie",
      "state_abbrev": "ND",
      "state_name": "North Dakota"
    },
    {
      "id": 38059,
      "name": "Morton",
      "state_abbrev": "ND",
      "state_name": "North Dakota"
    },
    {
      "id": 38067,
      "name": "Pembina",
      "state_abbrev": "ND",
      "state_name": "North Dakota"
    },
    {
      "id": 38071,
      "name": "Ramsey",
      "state_abbrev": "ND",
      "state_name": "North Dakota"
    },
    {
      "id": 22067,
      "name": "Morehouse",
      "state_abbrev": "LA",
      "state_name": "Louisiana"
    },
    {
      "id": 22069,
      "name": "Natchitoches",
      "state_abbrev": "LA",
      "state_name": "Louisiana"
    },
    {
      "id": 22079,
      "name": "Rapides",
      "state_abbrev": "LA",
      "state_name": "Louisiana"
    },
    {
      "id": 22097,
      "name": "St. Landry",
      "state_abbrev": "LA",
      "state_name": "Louisiana"
    },
    {
      "id": 22107,
      "name": "Tensas",
      "state_abbrev": "LA",
      "state_name": "Louisiana"
    },
    {
      "id": 22113,
      "name": "Vermilion",
      "state_abbrev": "LA",
      "state_name": "Louisiana"
    },
    {
      "id": 22117,
      "name": "Washington",
      "state_abbrev": "LA",
      "state_name": "Louisiana"
    },
    {
      "id": 22123,
      "name": "West Carroll",
      "state_abbrev": "LA",
      "state_name": "Louisiana"
    },
    {
      "id": 23007,
      "name": "Franklin",
      "state_abbrev": "ME",
      "state_name": "Maine"
    },
    {
      "id": "08065",
      "name": "Lake",
      "state_abbrev": "CO",
      "state_name": "Colorado"
    },
    {
      "id": "08071",
      "name": "Las Animas",
      "state_abbrev": "CO",
      "state_name": "Colorado"
    },
    {
      "id": "08093",
      "name": "Park",
      "state_abbrev": "CO",
      "state_name": "Colorado"
    },
    {
      "id": "08105",
      "name": "Rio Grande",
      "state_abbrev": "CO",
      "state_name": "Colorado"
    },
    {
      "id": "08113",
      "name": "San Miguel",
      "state_abbrev": "CO",
      "state_name": "Colorado"
    },
    {
      "id": "09001",
      "name": "Fairfield",
      "state_abbrev": "CT",
      "state_name": "Connecticut"
    },
    {
      "id": "09007",
      "name": "Middlesex",
      "state_abbrev": "CT",
      "state_name": "Connecticut"
    },
    {
      "id": "09011",
      "name": "New London",
      "state_abbrev": "CT",
      "state_name": "Connecticut"
    },
    {
      "id": 10005,
      "name": "Sussex",
      "state_abbrev": "DE",
      "state_name": "Delaware"
    },
    {
      "id": 12033,
      "name": "Escambia",
      "state_abbrev": "FL",
      "state_name": "Florida"
    },
    {
      "id": 12037,
      "name": "Franklin",
      "state_abbrev": "FL",
      "state_name": "Florida"
    },
    {
      "id": 12041,
      "name": "Gilchrist",
      "state_abbrev": "FL",
      "state_name": "Florida"
    },
    {
      "id": 12047,
      "name": "Hamilton",
      "state_abbrev": "FL",
      "state_name": "Florida"
    },
    {
      "id": 12053,
      "name": "Hernando",
      "state_abbrev": "FL",
      "state_name": "Florida"
    },
    {
      "id": 12071,
      "name": "Lee",
      "state_abbrev": "FL",
      "state_name": "Florida"
    },
    {
      "id": 19009,
      "name": "Audubon",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 19027,
      "name": "Carroll",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 19075,
      "name": "Grundy",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 19113,
      "name": "Linn",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 19147,
      "name": "Palo Alto",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 19195,
      "name": "Worth",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 20069,
      "name": "Gray",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 20143,
      "name": "Ottawa",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 20181,
      "name": "Sherman",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 21005,
      "name": "Anderson",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 21025,
      "name": "Breathitt",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 21029,
      "name": "Bullitt",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 21033,
      "name": "Caldwell",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 21043,
      "name": "Carter",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 21049,
      "name": "Clark",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 21063,
      "name": "Elliott",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 21071,
      "name": "Floyd",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 21085,
      "name": "Grayson",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 21097,
      "name": "Harrison",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 21109,
      "name": "Jackson",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 21119,
      "name": "Knott",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 21125,
      "name": "Laurel",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 21135,
      "name": "Lewis",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 21139,
      "name": "Livingston",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 21153,
      "name": "Magoffin",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 21159,
      "name": "Martin",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 21167,
      "name": "Mercer",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 21181,
      "name": "Nicholas",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 21183,
      "name": "Ohio",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 21193,
      "name": "Perry",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 21197,
      "name": "Powell",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 21205,
      "name": "Rowan",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 54109,
      "name": "Wyoming",
      "state_abbrev": "WV",
      "state_name": "West Virginia"
    },
    {
      "id": 55023,
      "name": "Crawford",
      "state_abbrev": "WI",
      "state_name": "Wisconsin"
    },
    {
      "id": 55037,
      "name": "Florence",
      "state_abbrev": "WI",
      "state_name": "Wisconsin"
    },
    {
      "id": 55051,
      "name": "Iron",
      "state_abbrev": "WI",
      "state_name": "Wisconsin"
    },
    {
      "id": 55069,
      "name": "Lincoln",
      "state_abbrev": "WI",
      "state_name": "Wisconsin"
    },
    {
      "id": 55075,
      "name": "Marinette",
      "state_abbrev": "WI",
      "state_name": "Wisconsin"
    },
    {
      "id": 55111,
      "name": "Sauk",
      "state_abbrev": "WI",
      "state_name": "Wisconsin"
    },
    {
      "id": 41007,
      "name": "Clatsop",
      "state_abbrev": "OR",
      "state_name": "Oregon"
    },
    {
      "id": 41017,
      "name": "Deschutes",
      "state_abbrev": "OR",
      "state_name": "Oregon"
    },
    {
      "id": 41019,
      "name": "Douglas",
      "state_abbrev": "OR",
      "state_name": "Oregon"
    },
    {
      "id": 41065,
      "name": "Wasco",
      "state_abbrev": "OR",
      "state_name": "Oregon"
    },
    {
      "id": 42003,
      "name": "Allegheny",
      "state_abbrev": "PA",
      "state_name": "Pennsylvania"
    },
    {
      "id": 42027,
      "name": "Centre",
      "state_abbrev": "PA",
      "state_name": "Pennsylvania"
    },
    {
      "id": 42033,
      "name": "Clearfield",
      "state_abbrev": "PA",
      "state_name": "Pennsylvania"
    },
    {
      "id": 42041,
      "name": "Cumberland",
      "state_abbrev": "PA",
      "state_name": "Pennsylvania"
    },
    {
      "id": 42045,
      "name": "Delaware",
      "state_abbrev": "PA",
      "state_name": "Pennsylvania"
    },
    {
      "id": 42051,
      "name": "Fayette",
      "state_abbrev": "PA",
      "state_name": "Pennsylvania"
    },
    {
      "id": 42061,
      "name": "Huntingdon",
      "state_abbrev": "PA",
      "state_name": "Pennsylvania"
    },
    {
      "id": 42071,
      "name": "Lancaster",
      "state_abbrev": "PA",
      "state_name": "Pennsylvania"
    },
    {
      "id": 42089,
      "name": "Monroe",
      "state_abbrev": "PA",
      "state_name": "Pennsylvania"
    },
    {
      "id": 42095,
      "name": "Northampton",
      "state_abbrev": "PA",
      "state_name": "Pennsylvania"
    },
    {
      "id": 51063,
      "name": "Floyd",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 51087,
      "name": "Henrico",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 53077,
      "name": "Yakima",
      "state_abbrev": "WA",
      "state_name": "Washington"
    },
    {
      "id": 45027,
      "name": "Clarendon",
      "state_abbrev": "SC",
      "state_name": "South Carolina"
    },
    {
      "id": 45047,
      "name": "Greenwood",
      "state_abbrev": "SC",
      "state_name": "South Carolina"
    },
    {
      "id": "01043",
      "name": "Cullman",
      "state_abbrev": "AL",
      "state_name": "Alabama"
    },
    {
      "id": 45029,
      "name": "Colleton",
      "state_abbrev": "SC",
      "state_name": "South Carolina"
    },
    {
      "id": 45071,
      "name": "Newberry",
      "state_abbrev": "SC",
      "state_name": "South Carolina"
    },
    {
      "id": 46067,
      "name": "Hutchinson",
      "state_abbrev": "SD",
      "state_name": "South Dakota"
    },
    {
      "id": "01033",
      "name": "Colbert",
      "state_abbrev": "AL",
      "state_name": "Alabama"
    },
    {
      "id": "02050",
      "name": "Bethel",
      "state_abbrev": "AK",
      "state_name": "Alaska"
    },
    {
      "id": "04007",
      "name": "Gila",
      "state_abbrev": "AZ",
      "state_name": "Arizona"
    },
    {
      "id": "05039",
      "name": "Dallas",
      "state_abbrev": "AR",
      "state_name": "Arkansas"
    },
    {
      "id": "06039",
      "name": "Madera",
      "state_abbrev": "CA",
      "state_name": "California"
    },
    {
      "id": "08043",
      "name": "Fremont",
      "state_abbrev": "CO",
      "state_name": "Colorado"
    },
    {
      "id": 12013,
      "name": "Calhoun",
      "state_abbrev": "FL",
      "state_name": "Florida"
    },
    {
      "id": 12069,
      "name": "Lake",
      "state_abbrev": "FL",
      "state_name": "Florida"
    },
    {
      "id": 12129,
      "name": "Wakulla",
      "state_abbrev": "FL",
      "state_name": "Florida"
    },
    {
      "id": 13219,
      "name": "Oconee",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 16035,
      "name": "Clearwater",
      "state_abbrev": "ID",
      "state_name": "Idaho"
    },
    {
      "id": 16069,
      "name": "Nez Perce",
      "state_abbrev": "ID",
      "state_name": "Idaho"
    },
    {
      "id": 17153,
      "name": "Pulaski",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 18071,
      "name": "Jackson",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 19087,
      "name": "Henry",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 21003,
      "name": "Allen",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 21051,
      "name": "Clay",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 21165,
      "name": "Menifee",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 46085,
      "name": "Lyman",
      "state_abbrev": "SD",
      "state_name": "South Dakota"
    },
    {
      "id": 47057,
      "name": "Grainger",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": "02195",
      "name": "Petersburg",
      "state_abbrev": "AK",
      "state_name": "Alaska"
    },
    {
      "id": "06009",
      "name": "Calaveras",
      "state_abbrev": "CA",
      "state_name": "California"
    },
    {
      "id": "08097",
      "name": "Pitkin",
      "state_abbrev": "CO",
      "state_name": "Colorado"
    },
    {
      "id": 13007,
      "name": "Baker",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 21055,
      "name": "Crittenden",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 22017,
      "name": "Caddo",
      "state_abbrev": "LA",
      "state_name": "Louisiana"
    },
    {
      "id": 22115,
      "name": "Vernon",
      "state_abbrev": "LA",
      "state_name": "Louisiana"
    },
    {
      "id": 26137,
      "name": "Otsego",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 29019,
      "name": "Boone",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 30005,
      "name": "Blaine",
      "state_abbrev": "MT",
      "state_name": "Montana"
    },
    {
      "id": 37029,
      "name": "Camden",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 40089,
      "name": "McCurtain",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": 41023,
      "name": "Grant",
      "state_abbrev": "OR",
      "state_name": "Oregon"
    },
    {
      "id": 46117,
      "name": "Stanley",
      "state_abbrev": "SD",
      "state_name": "South Dakota"
    },
    {
      "id": 47091,
      "name": "Johnson",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 39047,
      "name": "Fayette",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 39061,
      "name": "Hamilton",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 39095,
      "name": "Lucas",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 45055,
      "name": "Kershaw",
      "state_abbrev": "SC",
      "state_name": "South Carolina"
    },
    {
      "id": 45059,
      "name": "Laurens",
      "state_abbrev": "SC",
      "state_name": "South Carolina"
    },
    {
      "id": 45069,
      "name": "Marlboro",
      "state_abbrev": "SC",
      "state_name": "South Carolina"
    },
    {
      "id": 45073,
      "name": "Oconee",
      "state_abbrev": "SC",
      "state_name": "South Carolina"
    },
    {
      "id": 45083,
      "name": "Spartanburg",
      "state_abbrev": "SC",
      "state_name": "South Carolina"
    },
    {
      "id": 45089,
      "name": "Williamsburg",
      "state_abbrev": "SC",
      "state_name": "South Carolina"
    },
    {
      "id": 46009,
      "name": "Bon Homme",
      "state_abbrev": "SD",
      "state_name": "South Dakota"
    },
    {
      "id": "06043",
      "name": "Mariposa",
      "state_abbrev": "CA",
      "state_name": "California"
    },
    {
      "id": "06095",
      "name": "Solano",
      "state_abbrev": "CA",
      "state_name": "California"
    },
    {
      "id": "08035",
      "name": "Douglas",
      "state_abbrev": "CO",
      "state_name": "Colorado"
    },
    {
      "id": 10003,
      "name": "New Castle",
      "state_abbrev": "DE",
      "state_name": "Delaware"
    },
    {
      "id": 12079,
      "name": "Madison",
      "state_abbrev": "FL",
      "state_name": "Florida"
    },
    {
      "id": 12113,
      "name": "Santa Rosa",
      "state_abbrev": "FL",
      "state_name": "Florida"
    },
    {
      "id": 13001,
      "name": "Appling",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 13079,
      "name": "Crawford",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 13135,
      "name": "Gwinnett",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 13311,
      "name": "White",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 47107,
      "name": "McMinn",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 47117,
      "name": "Marshall",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 47123,
      "name": "Monroe",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 47143,
      "name": "Rhea",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 47151,
      "name": "Scott",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 47155,
      "name": "Sevier",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 47157,
      "name": "Shelby",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 47165,
      "name": "Sumner",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 47167,
      "name": "Tipton",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 47185,
      "name": "White",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 47189,
      "name": "Wilson",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 48001,
      "name": "Anderson",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48005,
      "name": "Angelina",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48029,
      "name": "Bexar",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48037,
      "name": "Bowie",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48043,
      "name": "Brewster",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48051,
      "name": "Burleson",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48057,
      "name": "Calhoun",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48067,
      "name": "Cass",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48091,
      "name": "Comal",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48109,
      "name": "Culberson",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48119,
      "name": "Delta",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48173,
      "name": "Glasscock",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48187,
      "name": "Guadalupe",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48205,
      "name": "Hartley",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48215,
      "name": "Hidalgo",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48225,
      "name": "Houston",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48263,
      "name": "Kent",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48273,
      "name": "Kleberg",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48287,
      "name": "Lee",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48301,
      "name": "Loving",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48311,
      "name": "McMullen",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48315,
      "name": "Marion",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48339,
      "name": "Montgomery",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48343,
      "name": "Morris",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48349,
      "name": "Navarro",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48373,
      "name": "Polk",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48377,
      "name": "Presidio",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48383,
      "name": "Reagan",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48405,
      "name": "San Augustine",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48407,
      "name": "San Jacinto",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 46041,
      "name": "Dewey",
      "state_abbrev": "SD",
      "state_name": "South Dakota"
    },
    {
      "id": 46071,
      "name": "Jackson",
      "state_abbrev": "SD",
      "state_name": "South Dakota"
    },
    {
      "id": 46075,
      "name": "Jones",
      "state_abbrev": "SD",
      "state_name": "South Dakota"
    },
    {
      "id": 46079,
      "name": "Lake",
      "state_abbrev": "SD",
      "state_name": "South Dakota"
    },
    {
      "id": 46127,
      "name": "Union",
      "state_abbrev": "SD",
      "state_name": "South Dakota"
    },
    {
      "id": 47013,
      "name": "Campbell",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 47021,
      "name": "Cheatham",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 47031,
      "name": "Coffee",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 47035,
      "name": "Cumberland",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 47037,
      "name": "Davidson",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 47041,
      "name": "DeKalb",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 47065,
      "name": "Hamilton",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 47089,
      "name": "Jefferson",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 56003,
      "name": "Big Horn",
      "state_abbrev": "WY",
      "state_name": "Wyoming"
    },
    {
      "id": 56013,
      "name": "Fremont",
      "state_abbrev": "WY",
      "state_name": "Wyoming"
    },
    {
      "id": 56031,
      "name": "Platte",
      "state_abbrev": "WY",
      "state_name": "Wyoming"
    },
    {
      "id": 56035,
      "name": "Sublette",
      "state_abbrev": "WY",
      "state_name": "Wyoming"
    },
    {
      "id": "01041",
      "name": "Crenshaw",
      "state_abbrev": "AL",
      "state_name": "Alabama"
    },
    {
      "id": "02100",
      "name": "Haines",
      "state_abbrev": "AK",
      "state_name": "Alaska"
    },
    {
      "id": "04001",
      "name": "Apache",
      "state_abbrev": "AZ",
      "state_name": "Arizona"
    },
    {
      "id": "05001",
      "name": "Arkansas",
      "state_abbrev": "AR",
      "state_name": "Arkansas"
    },
    {
      "id": "05029",
      "name": "Conway",
      "state_abbrev": "AR",
      "state_name": "Arkansas"
    },
    {
      "id": "05057",
      "name": "Hempstead",
      "state_abbrev": "AR",
      "state_name": "Arkansas"
    },
    {
      "id": 39115,
      "name": "Morgan",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 40113,
      "name": "Osage",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": 41015,
      "name": "Curry",
      "state_abbrev": "OR",
      "state_name": "Oregon"
    },
    {
      "id": 42049,
      "name": "Erie",
      "state_abbrev": "PA",
      "state_name": "Pennsylvania"
    },
    {
      "id": 42101,
      "name": "Philadelphia",
      "state_abbrev": "PA",
      "state_name": "Pennsylvania"
    },
    {
      "id": 45009,
      "name": "Bamberg",
      "state_abbrev": "SC",
      "state_name": "South Carolina"
    },
    {
      "id": 45057,
      "name": "Lancaster",
      "state_abbrev": "SC",
      "state_name": "South Carolina"
    },
    {
      "id": 45087,
      "name": "Union",
      "state_abbrev": "SC",
      "state_name": "South Carolina"
    },
    {
      "id": 47025,
      "name": "Claiborne",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 47053,
      "name": "Gibson",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 47135,
      "name": "Perry",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 47163,
      "name": "Sullivan",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 48089,
      "name": "Colorado",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48135,
      "name": "Ector",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48203,
      "name": "Harrison",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48323,
      "name": "Maverick",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48351,
      "name": "Newton",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48379,
      "name": "Rains",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48409,
      "name": "San Patricio",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48465,
      "name": "Val Verde",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 49007,
      "name": "Carbon",
      "state_abbrev": "UT",
      "state_name": "Utah"
    },
    {
      "id": 49019,
      "name": "Grand",
      "state_abbrev": "UT",
      "state_name": "Utah"
    },
    {
      "id": 51005,
      "name": "Alleghany",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 51029,
      "name": "Buckingham",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 51089,
      "name": "Henry",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 51141,
      "name": "Patrick",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 51193,
      "name": "Westmoreland",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 53011,
      "name": "Clark",
      "state_abbrev": "WA",
      "state_name": "Washington"
    },
    {
      "id": 53045,
      "name": "Mason",
      "state_abbrev": "WA",
      "state_name": "Washington"
    },
    {
      "id": 54025,
      "name": "Greenbrier",
      "state_abbrev": "WV",
      "state_name": "West Virginia"
    },
    {
      "id": 55001,
      "name": "Adams",
      "state_abbrev": "WI",
      "state_name": "Wisconsin"
    },
    {
      "id": 72097,
      "name": "Mayagüez",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": 72151,
      "name": "Yabucoa",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": "08027",
      "name": "Custer",
      "state_abbrev": "CO",
      "state_name": "Colorado"
    },
    {
      "id": "08051",
      "name": "Gunnison",
      "state_abbrev": "CO",
      "state_name": "Colorado"
    },
    {
      "id": "05041",
      "name": "Desha",
      "state_abbrev": "AR",
      "state_name": "Arkansas"
    },
    {
      "id": 13261,
      "name": "Sumter",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 18179,
      "name": "Wells",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 22111,
      "name": "Union",
      "state_abbrev": "LA",
      "state_name": "Louisiana"
    },
    {
      "id": 23003,
      "name": "Aroostook",
      "state_abbrev": "ME",
      "state_name": "Maine"
    },
    {
      "id": 40133,
      "name": "Seminole",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": 35019,
      "name": "Guadalupe",
      "state_abbrev": "NM",
      "state_name": "New Mexico"
    },
    {
      "id": 37105,
      "name": "Lee",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 37125,
      "name": "Moore",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 19035,
      "name": "Cherokee",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 20033,
      "name": "Comanche",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 20149,
      "name": "Pottawatomie",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 21027,
      "name": "Breckinridge",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 21147,
      "name": "McCreary",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 21175,
      "name": "Morgan",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 22005,
      "name": "Ascension",
      "state_abbrev": "LA",
      "state_name": "Louisiana"
    },
    {
      "id": 22015,
      "name": "Bossier",
      "state_abbrev": "LA",
      "state_name": "Louisiana"
    },
    {
      "id": 22025,
      "name": "Catahoula",
      "state_abbrev": "LA",
      "state_name": "Louisiana"
    },
    {
      "id": 22037,
      "name": "East Feliciana",
      "state_abbrev": "LA",
      "state_name": "Louisiana"
    },
    {
      "id": 22091,
      "name": "St. Helena",
      "state_abbrev": "LA",
      "state_name": "Louisiana"
    },
    {
      "id": 22109,
      "name": "Terrebonne",
      "state_abbrev": "LA",
      "state_name": "Louisiana"
    },
    {
      "id": 24029,
      "name": "Kent",
      "state_abbrev": "MD",
      "state_name": "Maryland"
    },
    {
      "id": 24047,
      "name": "Worcester",
      "state_abbrev": "MD",
      "state_name": "Maryland"
    },
    {
      "id": 26055,
      "name": "Grand Traverse",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 27015,
      "name": "Brown",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 27167,
      "name": "Wilkin",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 28051,
      "name": "Holmes",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 29013,
      "name": "Bates",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 29095,
      "name": "Jackson",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 30053,
      "name": "Lincoln",
      "state_abbrev": "MT",
      "state_name": "Montana"
    },
    {
      "id": 35033,
      "name": "Mora",
      "state_abbrev": "NM",
      "state_name": "New Mexico"
    },
    {
      "id": 36059,
      "name": "Nassau",
      "state_abbrev": "NY",
      "state_name": "New York"
    },
    {
      "id": 38003,
      "name": "Barnes",
      "state_abbrev": "ND",
      "state_name": "North Dakota"
    },
    {
      "id": 38055,
      "name": "McLean",
      "state_abbrev": "ND",
      "state_name": "North Dakota"
    },
    {
      "id": 40055,
      "name": "Greer",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": 40117,
      "name": "Pawnee",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": 42043,
      "name": "Dauphin",
      "state_abbrev": "PA",
      "state_name": "Pennsylvania"
    },
    {
      "id": 42097,
      "name": "Northumberland",
      "state_abbrev": "PA",
      "state_name": "Pennsylvania"
    },
    {
      "id": 45015,
      "name": "Berkeley",
      "state_abbrev": "SC",
      "state_name": "South Carolina"
    },
    {
      "id": 45067,
      "name": "Marion",
      "state_abbrev": "SC",
      "state_name": "South Carolina"
    },
    {
      "id": 47009,
      "name": "Blount",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 47129,
      "name": "Morgan",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 48065,
      "name": "Carson",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48157,
      "name": "Fort Bend",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 12057,
      "name": "Hillsborough",
      "state_abbrev": "FL",
      "state_name": "Florida"
    },
    {
      "id": 12089,
      "name": "Nassau",
      "state_abbrev": "FL",
      "state_name": "Florida"
    },
    {
      "id": 13025,
      "name": "Brantley",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 39167,
      "name": "Washington",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 40023,
      "name": "Choctaw",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": 18007,
      "name": "Benton",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 18051,
      "name": "Gibson",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 18123,
      "name": "Perry",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 20083,
      "name": "Hodgeman",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 20203,
      "name": "Wichita",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 21079,
      "name": "Garrard",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 21123,
      "name": "Larue",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 21209,
      "name": "Scott",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 22065,
      "name": "Madison",
      "state_abbrev": "LA",
      "state_name": "Louisiana"
    },
    {
      "id": 22105,
      "name": "Tangipahoa",
      "state_abbrev": "LA",
      "state_name": "Louisiana"
    },
    {
      "id": 23025,
      "name": "Somerset",
      "state_abbrev": "ME",
      "state_name": "Maine"
    },
    {
      "id": 26007,
      "name": "Alpena",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 28017,
      "name": "Chickasaw",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 48419,
      "name": "Shelby",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 54083,
      "name": "Randolph",
      "state_abbrev": "WV",
      "state_name": "West Virginia"
    },
    {
      "id": "06063",
      "name": "Plumas",
      "state_abbrev": "CA",
      "state_name": "California"
    },
    {
      "id": 48129,
      "name": "Donley",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48313,
      "name": "Madison",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 53027,
      "name": "Grays Harbor",
      "state_abbrev": "WA",
      "state_name": "Washington"
    },
    {
      "id": 54059,
      "name": "Mingo",
      "state_abbrev": "WV",
      "state_name": "West Virginia"
    },
    {
      "id": "05119",
      "name": "Pulaski",
      "state_abbrev": "AR",
      "state_name": "Arkansas"
    },
    {
      "id": "06093",
      "name": "Siskiyou",
      "state_abbrev": "CA",
      "state_name": "California"
    },
    {
      "id": "02170",
      "name": "Matanuska-Susitna",
      "state_abbrev": "AK",
      "state_name": "Alaska"
    },
    {
      "id": 13075,
      "name": "Cook",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 25005,
      "name": "Bristol",
      "state_abbrev": "MA",
      "state_name": "Massachusetts"
    },
    {
      "id": 13303,
      "name": "Washington",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 17017,
      "name": "Cass",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 22043,
      "name": "Grant",
      "state_abbrev": "LA",
      "state_name": "Louisiana"
    },
    {
      "id": 22127,
      "name": "Winn",
      "state_abbrev": "LA",
      "state_name": "Louisiana"
    },
    {
      "id": 10001,
      "name": "Kent",
      "state_abbrev": "DE",
      "state_name": "Delaware"
    },
    {
      "id": 12075,
      "name": "Levy",
      "state_abbrev": "FL",
      "state_name": "Florida"
    },
    {
      "id": 27021,
      "name": "Cass",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 28089,
      "name": "Madison",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 29227,
      "name": "Worth",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 30043,
      "name": "Jefferson",
      "state_abbrev": "MT",
      "state_name": "Montana"
    },
    {
      "id": 30081,
      "name": "Ravalli",
      "state_abbrev": "MT",
      "state_name": "Montana"
    },
    {
      "id": 34027,
      "name": "Morris",
      "state_abbrev": "NJ",
      "state_name": "New Jersey"
    },
    {
      "id": 36075,
      "name": "Oswego",
      "state_abbrev": "NY",
      "state_name": "New York"
    },
    {
      "id": 37021,
      "name": "Buncombe",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 37107,
      "name": "Lenoir",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 37145,
      "name": "Person",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 37193,
      "name": "Wilkes",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 40141,
      "name": "Tillman",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": 41031,
      "name": "Jefferson",
      "state_abbrev": "OR",
      "state_name": "Oregon"
    },
    {
      "id": 41047,
      "name": "Marion",
      "state_abbrev": "OR",
      "state_name": "Oregon"
    },
    {
      "id": 27087,
      "name": "Mahnomen",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 27173,
      "name": "Yellow Medicine",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 28109,
      "name": "Pearl River",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 29027,
      "name": "Callaway",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 30009,
      "name": "Carbon",
      "state_abbrev": "MT",
      "state_name": "Montana"
    },
    {
      "id": 30033,
      "name": "Garfield",
      "state_abbrev": "MT",
      "state_name": "Montana"
    },
    {
      "id": 31033,
      "name": "Cheyenne",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 34031,
      "name": "Passaic",
      "state_abbrev": "NJ",
      "state_name": "New Jersey"
    },
    {
      "id": 35017,
      "name": "Grant",
      "state_abbrev": "NM",
      "state_name": "New Mexico"
    },
    {
      "id": 36009,
      "name": "Cattaraugus",
      "state_abbrev": "NY",
      "state_name": "New York"
    },
    {
      "id": 36061,
      "name": "New York",
      "state_abbrev": "NY",
      "state_name": "New York"
    },
    {
      "id": 36071,
      "name": "Orange",
      "state_abbrev": "NY",
      "state_name": "New York"
    },
    {
      "id": 37015,
      "name": "Bertie",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 37101,
      "name": "Johnston",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 37131,
      "name": "Northampton",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 37159,
      "name": "Rowan",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 37183,
      "name": "Wake",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 13201,
      "name": "Miller",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 13265,
      "name": "Taliaferro",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 44009,
      "name": "Washington",
      "state_abbrev": "RI",
      "state_name": "Rhode Island"
    },
    {
      "id": 45003,
      "name": "Aiken",
      "state_abbrev": "SC",
      "state_name": "South Carolina"
    },
    {
      "id": 45007,
      "name": "Anderson",
      "state_abbrev": "SC",
      "state_name": "South Carolina"
    },
    {
      "id": 45017,
      "name": "Calhoun",
      "state_abbrev": "SC",
      "state_name": "South Carolina"
    },
    {
      "id": 45035,
      "name": "Dorchester",
      "state_abbrev": "SC",
      "state_name": "South Carolina"
    },
    {
      "id": 45041,
      "name": "Florence",
      "state_abbrev": "SC",
      "state_name": "South Carolina"
    },
    {
      "id": 45045,
      "name": "Greenville",
      "state_abbrev": "SC",
      "state_name": "South Carolina"
    },
    {
      "id": 45051,
      "name": "Horry",
      "state_abbrev": "SC",
      "state_name": "South Carolina"
    },
    {
      "id": 30007,
      "name": "Broadwater",
      "state_abbrev": "MT",
      "state_name": "Montana"
    },
    {
      "id": 30093,
      "name": "Silver Bow",
      "state_abbrev": "MT",
      "state_name": "Montana"
    },
    {
      "id": 37051,
      "name": "Cumberland",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 37139,
      "name": "Pasquotank",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 45061,
      "name": "Lee",
      "state_abbrev": "SC",
      "state_name": "South Carolina"
    },
    {
      "id": 46055,
      "name": "Haakon",
      "state_abbrev": "SD",
      "state_name": "South Dakota"
    },
    {
      "id": 47045,
      "name": "Dyer",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 47127,
      "name": "Moore",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 51081,
      "name": "Greensville",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 51105,
      "name": "Lee",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 51195,
      "name": "Wise",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 54007,
      "name": "Braxton",
      "state_abbrev": "WV",
      "state_name": "West Virginia"
    },
    {
      "id": 54099,
      "name": "Wayne",
      "state_abbrev": "WV",
      "state_name": "West Virginia"
    },
    {
      "id": 42031,
      "name": "Clarion",
      "state_abbrev": "PA",
      "state_name": "Pennsylvania"
    },
    {
      "id": "01009",
      "name": "Blount",
      "state_abbrev": "AL",
      "state_name": "Alabama"
    },
    {
      "id": "01047",
      "name": "Dallas",
      "state_abbrev": "AL",
      "state_name": "Alabama"
    },
    {
      "id": "05073",
      "name": "Lafayette",
      "state_abbrev": "AR",
      "state_name": "Arkansas"
    },
    {
      "id": "06027",
      "name": "Inyo",
      "state_abbrev": "CA",
      "state_name": "California"
    },
    {
      "id": "06053",
      "name": "Monterey",
      "state_abbrev": "CA",
      "state_name": "California"
    },
    {
      "id": "06099",
      "name": "Stanislaus",
      "state_abbrev": "CA",
      "state_name": "California"
    },
    {
      "id": "08111",
      "name": "San Juan",
      "state_abbrev": "CO",
      "state_name": "Colorado"
    },
    {
      "id": 12045,
      "name": "Gulf",
      "state_abbrev": "FL",
      "state_name": "Florida"
    },
    {
      "id": 12105,
      "name": "Polk",
      "state_abbrev": "FL",
      "state_name": "Florida"
    },
    {
      "id": 12121,
      "name": "Suwannee",
      "state_abbrev": "FL",
      "state_name": "Florida"
    },
    {
      "id": 16041,
      "name": "Franklin",
      "state_abbrev": "ID",
      "state_name": "Idaho"
    },
    {
      "id": 16079,
      "name": "Shoshone",
      "state_abbrev": "ID",
      "state_name": "Idaho"
    },
    {
      "id": 18021,
      "name": "Clay",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 48175,
      "name": "Goliad",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48503,
      "name": "Young",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 51113,
      "name": "Madison",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 53033,
      "name": "King",
      "state_abbrev": "WA",
      "state_name": "Washington"
    },
    {
      "id": 53057,
      "name": "Skagit",
      "state_abbrev": "WA",
      "state_name": "Washington"
    },
    {
      "id": "06091",
      "name": "Sierra",
      "state_abbrev": "CA",
      "state_name": "California"
    },
    {
      "id": 18125,
      "name": "Pike",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 26003,
      "name": "Alger",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 27103,
      "name": "Nicollet",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": "01039",
      "name": "Covington",
      "state_abbrev": "AL",
      "state_name": "Alabama"
    },
    {
      "id": "01061",
      "name": "Geneva",
      "state_abbrev": "AL",
      "state_name": "Alabama"
    },
    {
      "id": "01075",
      "name": "Lamar",
      "state_abbrev": "AL",
      "state_name": "Alabama"
    },
    {
      "id": "04011",
      "name": "Greenlee",
      "state_abbrev": "AZ",
      "state_name": "Arizona"
    },
    {
      "id": "01013",
      "name": "Butler",
      "state_abbrev": "AL",
      "state_name": "Alabama"
    },
    {
      "id": "01015",
      "name": "Calhoun",
      "state_abbrev": "AL",
      "state_name": "Alabama"
    },
    {
      "id": 21235,
      "name": "Whitley",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 22057,
      "name": "Lafourche",
      "state_abbrev": "LA",
      "state_name": "Louisiana"
    },
    {
      "id": 24023,
      "name": "Garrett",
      "state_abbrev": "MD",
      "state_name": "Maryland"
    },
    {
      "id": 26013,
      "name": "Baraga",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 26071,
      "name": "Iron",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 47145,
      "name": "Roane",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 47183,
      "name": "Weakley",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 48041,
      "name": "Brazos",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48079,
      "name": "Cochran",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48341,
      "name": "Moore",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 49005,
      "name": "Cache",
      "state_abbrev": "UT",
      "state_name": "Utah"
    },
    {
      "id": 49023,
      "name": "Juab",
      "state_abbrev": "UT",
      "state_name": "Utah"
    },
    {
      "id": 51103,
      "name": "Lancaster",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 51157,
      "name": "Rappahannock",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 53019,
      "name": "Ferry",
      "state_abbrev": "WA",
      "state_name": "Washington"
    },
    {
      "id": 53075,
      "name": "Whitman",
      "state_abbrev": "WA",
      "state_name": "Washington"
    },
    {
      "id": 55011,
      "name": "Buffalo",
      "state_abbrev": "WI",
      "state_name": "Wisconsin"
    },
    {
      "id": 56033,
      "name": "Sheridan",
      "state_abbrev": "WY",
      "state_name": "Wyoming"
    },
    {
      "id": 56039,
      "name": "Teton",
      "state_abbrev": "WY",
      "state_name": "Wyoming"
    },
    {
      "id": 60050,
      "name": "Western",
      "state_abbrev": "AS",
      "state_name": "American Samoa"
    },
    {
      "id": 78030,
      "name": "St. Thomas",
      "state_abbrev": "VI",
      "state_name": "United States Virgin Islands"
    },
    {
      "id": "05085",
      "name": "Lonoke",
      "state_abbrev": "AR",
      "state_name": "Arkansas"
    },
    {
      "id": "06089",
      "name": "Shasta",
      "state_abbrev": "CA",
      "state_name": "California"
    },
    {
      "id": "08005",
      "name": "Arapahoe",
      "state_abbrev": "CO",
      "state_name": "Colorado"
    },
    {
      "id": "08033",
      "name": "Dolores",
      "state_abbrev": "CO",
      "state_name": "Colorado"
    },
    {
      "id": "01073",
      "name": "Jefferson",
      "state_abbrev": "AL",
      "state_name": "Alabama"
    },
    {
      "id": "01129",
      "name": "Washington",
      "state_abbrev": "AL",
      "state_name": "Alabama"
    },
    {
      "id": "02290",
      "name": "Yukon-Koyukuk",
      "state_abbrev": "AK",
      "state_name": "Alaska"
    },
    {
      "id": 42131,
      "name": "Wyoming",
      "state_abbrev": "PA",
      "state_name": "Pennsylvania"
    },
    {
      "id": 45021,
      "name": "Cherokee",
      "state_abbrev": "SC",
      "state_name": "South Carolina"
    },
    {
      "id": 27137,
      "name": "St. Louis",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 28021,
      "name": "Claiborne",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 28053,
      "name": "Humphreys",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 28137,
      "name": "Tate",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 30003,
      "name": "Big Horn",
      "state_abbrev": "MT",
      "state_name": "Montana"
    },
    {
      "id": 30035,
      "name": "Glacier",
      "state_abbrev": "MT",
      "state_name": "Montana"
    },
    {
      "id": 30061,
      "name": "Mineral",
      "state_abbrev": "MT",
      "state_name": "Montana"
    },
    {
      "id": 30089,
      "name": "Sanders",
      "state_abbrev": "MT",
      "state_name": "Montana"
    },
    {
      "id": 31009,
      "name": "Blaine",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 32033,
      "name": "White Pine",
      "state_abbrev": "NV",
      "state_name": "Nevada"
    },
    {
      "id": 34009,
      "name": "Cape May",
      "state_abbrev": "NJ",
      "state_name": "New Jersey"
    },
    {
      "id": 36017,
      "name": "Chenango",
      "state_abbrev": "NY",
      "state_name": "New York"
    },
    {
      "id": 37019,
      "name": "Brunswick",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 37047,
      "name": "Columbus",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 37079,
      "name": "Greene",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 37147,
      "name": "Pitt",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 37173,
      "name": "Swain",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 45065,
      "name": "McCormick",
      "state_abbrev": "SC",
      "state_name": "South Carolina"
    },
    {
      "id": 46003,
      "name": "Aurora",
      "state_abbrev": "SD",
      "state_name": "South Dakota"
    },
    {
      "id": 47055,
      "name": "Giles",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 47085,
      "name": "Humphreys",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": "05145",
      "name": "White",
      "state_abbrev": "AR",
      "state_name": "Arkansas"
    },
    {
      "id": 13107,
      "name": "Emanuel",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 16007,
      "name": "Bear Lake",
      "state_abbrev": "ID",
      "state_name": "Idaho"
    },
    {
      "id": 47119,
      "name": "Maury",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 47147,
      "name": "Robertson",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 48015,
      "name": "Austin",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48277,
      "name": "Lamar",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48391,
      "name": "Refugio",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48469,
      "name": "Victoria",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 49057,
      "name": "Weber",
      "state_abbrev": "UT",
      "state_name": "Utah"
    },
    {
      "id": 51003,
      "name": "Albemarle",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 51031,
      "name": "Campbell",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 51059,
      "name": "Fairfax",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 51121,
      "name": "Montgomery",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 51155,
      "name": "Pulaski",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 53067,
      "name": "Thurston",
      "state_abbrev": "WA",
      "state_name": "Washington"
    },
    {
      "id": 54031,
      "name": "Hardy",
      "state_abbrev": "WV",
      "state_name": "West Virginia"
    },
    {
      "id": 54057,
      "name": "Mineral",
      "state_abbrev": "WV",
      "state_name": "West Virginia"
    },
    {
      "id": 54085,
      "name": "Ritchie",
      "state_abbrev": "WV",
      "state_name": "West Virginia"
    },
    {
      "id": 55007,
      "name": "Bayfield",
      "state_abbrev": "WI",
      "state_name": "Wisconsin"
    },
    {
      "id": 55057,
      "name": "Juneau",
      "state_abbrev": "WI",
      "state_name": "Wisconsin"
    },
    {
      "id": 55121,
      "name": "Trempealeau",
      "state_abbrev": "WI",
      "state_name": "Wisconsin"
    },
    {
      "id": 41003,
      "name": "Benton",
      "state_abbrev": "OR",
      "state_name": "Oregon"
    },
    {
      "id": 42023,
      "name": "Cameron",
      "state_abbrev": "PA",
      "state_name": "Pennsylvania"
    },
    {
      "id": 42055,
      "name": "Franklin",
      "state_abbrev": "PA",
      "state_name": "Pennsylvania"
    },
    {
      "id": 44007,
      "name": "Providence",
      "state_abbrev": "RI",
      "state_name": "Rhode Island"
    },
    {
      "id": 21203,
      "name": "Rockcastle",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": "05017",
      "name": "Chicot",
      "state_abbrev": "AR",
      "state_name": "Arkansas"
    },
    {
      "id": 13215,
      "name": "Muscogee",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 13301,
      "name": "Warren",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 16013,
      "name": "Blaine",
      "state_abbrev": "ID",
      "state_name": "Idaho"
    },
    {
      "id": 16031,
      "name": "Cassia",
      "state_abbrev": "ID",
      "state_name": "Idaho"
    },
    {
      "id": 17125,
      "name": "Mason",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 24015,
      "name": "Cecil",
      "state_abbrev": "MD",
      "state_name": "Maryland"
    },
    {
      "id": 24039,
      "name": "Somerset",
      "state_abbrev": "MD",
      "state_name": "Maryland"
    },
    {
      "id": 17007,
      "name": "Boone",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 18053,
      "name": "Grant",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 20065,
      "name": "Graham",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 21011,
      "name": "Bath",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 21067,
      "name": "Fayette",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 21101,
      "name": "Henderson",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 21133,
      "name": "Letcher",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 22077,
      "name": "Pointe Coupee",
      "state_abbrev": "LA",
      "state_name": "Louisiana"
    },
    {
      "id": 22103,
      "name": "St. Tammany",
      "state_abbrev": "LA",
      "state_name": "Louisiana"
    },
    {
      "id": "08069",
      "name": "Larimer",
      "state_abbrev": "CO",
      "state_name": "Colorado"
    },
    {
      "id": 12029,
      "name": "Dixie",
      "state_abbrev": "FL",
      "state_name": "Florida"
    },
    {
      "id": 27067,
      "name": "Kandiyohi",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 27119,
      "name": "Polk",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 20067,
      "name": "Grant",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 21089,
      "name": "Greenup",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 26089,
      "name": "Leelanau",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 26141,
      "name": "Presque Isle",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 32031,
      "name": "Washoe",
      "state_abbrev": "NV",
      "state_name": "Nevada"
    },
    {
      "id": 38097,
      "name": "Traill",
      "state_abbrev": "ND",
      "state_name": "North Dakota"
    },
    {
      "id": 47105,
      "name": "Loudon",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 13309,
      "name": "Wheeler",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 17003,
      "name": "Alexander",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 17189,
      "name": "Washington",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 19003,
      "name": "Adams",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 19163,
      "name": "Scott",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 20195,
      "name": "Trego",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 21187,
      "name": "Owen",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 22063,
      "name": "Livingston",
      "state_abbrev": "LA",
      "state_name": "Louisiana"
    },
    {
      "id": 22101,
      "name": "St. Mary",
      "state_abbrev": "LA",
      "state_name": "Louisiana"
    },
    {
      "id": "08117",
      "name": "Summit",
      "state_abbrev": "CO",
      "state_name": "Colorado"
    },
    {
      "id": 12007,
      "name": "Bradford",
      "state_abbrev": "FL",
      "state_name": "Florida"
    },
    {
      "id": 13031,
      "name": "Bulloch",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 39123,
      "name": "Ottawa",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 40101,
      "name": "Muskogee",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": 27069,
      "name": "Kittson",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 27107,
      "name": "Norman",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 27145,
      "name": "Stearns",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 28049,
      "name": "Hinds",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 29171,
      "name": "Putnam",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 30075,
      "name": "Powder River",
      "state_abbrev": "MT",
      "state_name": "Montana"
    },
    {
      "id": 32011,
      "name": "Eureka",
      "state_abbrev": "NV",
      "state_name": "Nevada"
    },
    {
      "id": 34033,
      "name": "Salem",
      "state_abbrev": "NJ",
      "state_name": "New Jersey"
    },
    {
      "id": 36113,
      "name": "Warren",
      "state_abbrev": "NY",
      "state_name": "New York"
    },
    {
      "id": 37031,
      "name": "Carteret",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 37113,
      "name": "Macon",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 38035,
      "name": "Grand Forks",
      "state_abbrev": "ND",
      "state_name": "North Dakota"
    },
    {
      "id": 39055,
      "name": "Geauga",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 46023,
      "name": "Charles Mix",
      "state_abbrev": "SD",
      "state_name": "South Dakota"
    },
    {
      "id": 47093,
      "name": "Knox",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": "01071",
      "name": "Jackson",
      "state_abbrev": "AL",
      "state_name": "Alabama"
    },
    {
      "id": 13019,
      "name": "Berrien",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 48061,
      "name": "Cameron",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48185,
      "name": "Grimes",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48239,
      "name": "Jackson",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": "06011",
      "name": "Colusa",
      "state_abbrev": "CA",
      "state_name": "California"
    },
    {
      "id": 16029,
      "name": "Caribou",
      "state_abbrev": "ID",
      "state_name": "Idaho"
    },
    {
      "id": "01021",
      "name": "Chilton",
      "state_abbrev": "AL",
      "state_name": "Alabama"
    },
    {
      "id": "01027",
      "name": "Clay",
      "state_abbrev": "AL",
      "state_name": "Alabama"
    },
    {
      "id": "01029",
      "name": "Cleburne",
      "state_abbrev": "AL",
      "state_name": "Alabama"
    },
    {
      "id": "04023",
      "name": "Santa Cruz",
      "state_abbrev": "AZ",
      "state_name": "Arizona"
    },
    {
      "id": "01093",
      "name": "Marion",
      "state_abbrev": "AL",
      "state_name": "Alabama"
    },
    {
      "id": "05053",
      "name": "Grant",
      "state_abbrev": "AR",
      "state_name": "Arkansas"
    },
    {
      "id": "01103",
      "name": "Morgan",
      "state_abbrev": "AL",
      "state_name": "Alabama"
    },
    {
      "id": "01133",
      "name": "Winston",
      "state_abbrev": "AL",
      "state_name": "Alabama"
    },
    {
      "id": "02070",
      "name": "Dillingham",
      "state_abbrev": "AK",
      "state_name": "Alaska"
    },
    {
      "id": "02110",
      "name": "Juneau",
      "state_abbrev": "AK",
      "state_name": "Alaska"
    },
    {
      "id": "02150",
      "name": "Kodiak Island",
      "state_abbrev": "AK",
      "state_name": "Alaska"
    },
    {
      "id": "02220",
      "name": "Sitka",
      "state_abbrev": "AK",
      "state_name": "Alaska"
    },
    {
      "id": "02261",
      "name": "Valdez-Cordova",
      "state_abbrev": "AK",
      "state_name": "Alaska"
    },
    {
      "id": 48389,
      "name": "Reeves",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 49017,
      "name": "Garfield",
      "state_abbrev": "UT",
      "state_name": "Utah"
    },
    {
      "id": 51093,
      "name": "Isle of Wight",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 51171,
      "name": "Shenandoah",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 53021,
      "name": "Franklin",
      "state_abbrev": "WA",
      "state_name": "Washington"
    },
    {
      "id": 53055,
      "name": "San Juan",
      "state_abbrev": "WA",
      "state_name": "Washington"
    },
    {
      "id": 66010,
      "name": "Guam",
      "state_abbrev": "GU",
      "state_name": "Guam"
    },
    {
      "id": "05069",
      "name": "Jefferson",
      "state_abbrev": "AR",
      "state_name": "Arkansas"
    },
    {
      "id": "05107",
      "name": "Phillips",
      "state_abbrev": "AR",
      "state_name": "Arkansas"
    },
    {
      "id": "06041",
      "name": "Marin",
      "state_abbrev": "CA",
      "state_name": "California"
    },
    {
      "id": "06077",
      "name": "San Joaquin",
      "state_abbrev": "CA",
      "state_name": "California"
    },
    {
      "id": "08001",
      "name": "Adams",
      "state_abbrev": "CO",
      "state_name": "Colorado"
    },
    {
      "id": "01059",
      "name": "Franklin",
      "state_abbrev": "AL",
      "state_name": "Alabama"
    },
    {
      "id": "01097",
      "name": "Mobile",
      "state_abbrev": "AL",
      "state_name": "Alabama"
    },
    {
      "id": 48283,
      "name": "La Salle",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48401,
      "name": "Rusk",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48459,
      "name": "Upshur",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 49037,
      "name": "San Juan",
      "state_abbrev": "UT",
      "state_name": "Utah"
    },
    {
      "id": 51027,
      "name": "Buchanan",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 51101,
      "name": "King William",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 51147,
      "name": "Prince Edward",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 51191,
      "name": "Washington",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 54003,
      "name": "Berkeley",
      "state_abbrev": "WV",
      "state_name": "West Virginia"
    },
    {
      "id": 54041,
      "name": "Lewis",
      "state_abbrev": "WV",
      "state_name": "West Virginia"
    },
    {
      "id": 42017,
      "name": "Bucks",
      "state_abbrev": "PA",
      "state_name": "Pennsylvania"
    },
    {
      "id": "05043",
      "name": "Drew",
      "state_abbrev": "AR",
      "state_name": "Arkansas"
    },
    {
      "id": "05049",
      "name": "Fulton",
      "state_abbrev": "AR",
      "state_name": "Arkansas"
    },
    {
      "id": "02020",
      "name": "Anchorage",
      "state_abbrev": "AK",
      "state_name": "Alaska"
    },
    {
      "id": "04021",
      "name": "Pinal",
      "state_abbrev": "AZ",
      "state_name": "Arizona"
    },
    {
      "id": 13113,
      "name": "Fayette",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 13151,
      "name": "Henry",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 13191,
      "name": "McIntosh",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 23027,
      "name": "Waldo",
      "state_abbrev": "ME",
      "state_name": "Maine"
    },
    {
      "id": 24027,
      "name": "Howard",
      "state_abbrev": "MD",
      "state_name": "Maryland"
    },
    {
      "id": "05135",
      "name": "Sharp",
      "state_abbrev": "AR",
      "state_name": "Arkansas"
    },
    {
      "id": "09005",
      "name": "Litchfield",
      "state_abbrev": "CT",
      "state_name": "Connecticut"
    },
    {
      "id": "09013",
      "name": "Tolland",
      "state_abbrev": "CT",
      "state_name": "Connecticut"
    },
    {
      "id": 12115,
      "name": "Sarasota",
      "state_abbrev": "FL",
      "state_name": "Florida"
    },
    {
      "id": "05101",
      "name": "Newton",
      "state_abbrev": "AR",
      "state_name": "Arkansas"
    },
    {
      "id": "05105",
      "name": "Perry",
      "state_abbrev": "AR",
      "state_name": "Arkansas"
    },
    {
      "id": "05115",
      "name": "Pope",
      "state_abbrev": "AR",
      "state_name": "Arkansas"
    },
    {
      "id": "05005",
      "name": "Baxter",
      "state_abbrev": "AR",
      "state_name": "Arkansas"
    },
    {
      "id": "05009",
      "name": "Boone",
      "state_abbrev": "AR",
      "state_name": "Arkansas"
    },
    {
      "id": "08021",
      "name": "Conejos",
      "state_abbrev": "CO",
      "state_name": "Colorado"
    },
    {
      "id": "08039",
      "name": "Elbert",
      "state_abbrev": "CO",
      "state_name": "Colorado"
    },
    {
      "id": "08059",
      "name": "Jefferson",
      "state_abbrev": "CO",
      "state_name": "Colorado"
    },
    {
      "id": "01037",
      "name": "Coosa",
      "state_abbrev": "AL",
      "state_name": "Alabama"
    },
    {
      "id": "08073",
      "name": "Lincoln",
      "state_abbrev": "CO",
      "state_name": "Colorado"
    },
    {
      "id": "08101",
      "name": "Pueblo",
      "state_abbrev": "CO",
      "state_name": "Colorado"
    },
    {
      "id": "08121",
      "name": "Washington",
      "state_abbrev": "CO",
      "state_name": "Colorado"
    },
    {
      "id": "08125",
      "name": "Yuma",
      "state_abbrev": "CO",
      "state_name": "Colorado"
    },
    {
      "id": "05077",
      "name": "Lee",
      "state_abbrev": "AR",
      "state_name": "Arkansas"
    },
    {
      "id": "01017",
      "name": "Chambers",
      "state_abbrev": "AL",
      "state_name": "Alabama"
    },
    {
      "id": "05129",
      "name": "Searcy",
      "state_abbrev": "AR",
      "state_name": "Arkansas"
    },
    {
      "id": 13063,
      "name": "Clayton",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 13159,
      "name": "Jasper",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": "06031",
      "name": "Kings",
      "state_abbrev": "CA",
      "state_name": "California"
    },
    {
      "id": "06035",
      "name": "Lassen",
      "state_abbrev": "CA",
      "state_name": "California"
    },
    {
      "id": "06075",
      "name": "San Francisco",
      "state_abbrev": "CA",
      "state_name": "California"
    },
    {
      "id": "08003",
      "name": "Alamosa",
      "state_abbrev": "CO",
      "state_name": "Colorado"
    },
    {
      "id": "08015",
      "name": "Chaffee",
      "state_abbrev": "CO",
      "state_name": "Colorado"
    },
    {
      "id": 13003,
      "name": "Atkinson",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 12035,
      "name": "Flagler",
      "state_abbrev": "FL",
      "state_name": "Florida"
    },
    {
      "id": 12059,
      "name": "Holmes",
      "state_abbrev": "FL",
      "state_name": "Florida"
    },
    {
      "id": 12087,
      "name": "Monroe",
      "state_abbrev": "FL",
      "state_name": "Florida"
    },
    {
      "id": 12109,
      "name": "St. Johns",
      "state_abbrev": "FL",
      "state_name": "Florida"
    },
    {
      "id": 12111,
      "name": "St. Lucie",
      "state_abbrev": "FL",
      "state_name": "Florida"
    },
    {
      "id": "05149",
      "name": "Yell",
      "state_abbrev": "AR",
      "state_name": "Arkansas"
    },
    {
      "id": "06021",
      "name": "Glenn",
      "state_abbrev": "CA",
      "state_name": "California"
    },
    {
      "id": "06025",
      "name": "Imperial",
      "state_abbrev": "CA",
      "state_name": "California"
    },
    {
      "id": "06061",
      "name": "Placer",
      "state_abbrev": "CA",
      "state_name": "California"
    },
    {
      "id": "06109",
      "name": "Tuolumne",
      "state_abbrev": "CA",
      "state_name": "California"
    },
    {
      "id": 13117,
      "name": "Forsyth",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 13169,
      "name": "Jones",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 13197,
      "name": "Marion",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 17067,
      "name": "Hancock",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 17183,
      "name": "Vermilion",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 13059,
      "name": "Clarke",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 13069,
      "name": "Coffee",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 13083,
      "name": "Dade",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 17053,
      "name": "Ford",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 13145,
      "name": "Harris",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 13023,
      "name": "Bleckley",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 13037,
      "name": "Calhoun",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 13053,
      "name": "Chattahoochee",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 17073,
      "name": "Henry",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 17097,
      "name": "Lake",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 17059,
      "name": "Gallatin",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 17063,
      "name": "Grundy",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 13093,
      "name": "Dooly",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 16051,
      "name": "Jefferson",
      "state_abbrev": "ID",
      "state_name": "Idaho"
    },
    {
      "id": 16065,
      "name": "Madison",
      "state_abbrev": "ID",
      "state_name": "Idaho"
    },
    {
      "id": 13111,
      "name": "Fannin",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 13243,
      "name": "Randolph",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 13257,
      "name": "Stephens",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 17011,
      "name": "Bureau",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 17015,
      "name": "Carroll",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 18099,
      "name": "Marshall",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 18101,
      "name": "Martin",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 13287,
      "name": "Turner",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 13295,
      "name": "Walker",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 15003,
      "name": "Honolulu",
      "state_abbrev": "HI",
      "state_name": "Hawaii"
    },
    {
      "id": 16009,
      "name": "Benewah",
      "state_abbrev": "ID",
      "state_name": "Idaho"
    },
    {
      "id": 18003,
      "name": "Allen",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 17149,
      "name": "Pike",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 17159,
      "name": "Richland",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 17107,
      "name": "Logan",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 17115,
      "name": "Macon",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 17121,
      "name": "Marion",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 17131,
      "name": "Mercer",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 17135,
      "name": "Montgomery",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 17145,
      "name": "Perry",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 13233,
      "name": "Polk",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 13239,
      "name": "Quitman",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 18031,
      "name": "Decatur",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 18037,
      "name": "Dubois",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 18041,
      "name": "Fayette",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 18055,
      "name": "Greene",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 18065,
      "name": "Henry",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 18075,
      "name": "Jay",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 18085,
      "name": "Kosciusko",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 18091,
      "name": "LaPorte",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 18109,
      "name": "Morgan",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 16019,
      "name": "Bonneville",
      "state_abbrev": "ID",
      "state_name": "Idaho"
    },
    {
      "id": 16021,
      "name": "Boundary",
      "state_abbrev": "ID",
      "state_name": "Idaho"
    },
    {
      "id": 16045,
      "name": "Gem",
      "state_abbrev": "ID",
      "state_name": "Idaho"
    },
    {
      "id": 17029,
      "name": "Coles",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 18181,
      "name": "White",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 19007,
      "name": "Appanoose",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 19017,
      "name": "Bremer",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 19025,
      "name": "Calhoun",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 18095,
      "name": "Madison",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 18097,
      "name": "Marion",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 17173,
      "name": "Shelby",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 17177,
      "name": "Stephenson",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 16075,
      "name": "Payette",
      "state_abbrev": "ID",
      "state_name": "Idaho"
    },
    {
      "id": 17005,
      "name": "Bond",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 19103,
      "name": "Johnson",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 19117,
      "name": "Lucas",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 19127,
      "name": "Marshall",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 19131,
      "name": "Mitchell",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 20105,
      "name": "Lincoln",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 20109,
      "name": "Logan",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 20111,
      "name": "Lyon",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 20113,
      "name": "McPherson",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 19135,
      "name": "Monroe",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 19041,
      "name": "Clay",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 18017,
      "name": "Cass",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 20049,
      "name": "Elk",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 20057,
      "name": "Ford",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 18115,
      "name": "Ohio",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 18119,
      "name": "Owen",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 18121,
      "name": "Parke",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 20091,
      "name": "Johnson",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 20097,
      "name": "Kiowa",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 20101,
      "name": "Lane",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 19049,
      "name": "Dallas",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 18133,
      "name": "Putnam",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 18157,
      "name": "Tippecanoe",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 18111,
      "name": "Newton",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 17021,
      "name": "Christian",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 19159,
      "name": "Ringgold",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 19165,
      "name": "Shelby",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 20063,
      "name": "Gove",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 20073,
      "name": "Greenwood",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 20077,
      "name": "Harper",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 20085,
      "name": "Jackson",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 19169,
      "name": "Story",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 19189,
      "name": "Winnebago",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 20001,
      "name": "Allen",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 20009,
      "name": "Barton",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 20015,
      "name": "Butler",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 20025,
      "name": "Clark",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 20029,
      "name": "Cloud",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 20043,
      "name": "Doniphan",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 40045,
      "name": "Ellis",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": 48309,
      "name": "McLennan",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48337,
      "name": "Montague",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48355,
      "name": "Nueces",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 51720,
      "name": "Norton",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 51740,
      "name": "Portsmouth",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 18143,
      "name": "Scott",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 18171,
      "name": "Warren",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 18177,
      "name": "Wayne",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 19097,
      "name": "Jackson",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 19141,
      "name": "O'Brien",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 19055,
      "name": "Delaware",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 19073,
      "name": "Greene",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 19079,
      "name": "Hamilton",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 40041,
      "name": "Delaware",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": 46111,
      "name": "Sanborn",
      "state_abbrev": "SD",
      "state_name": "South Dakota"
    },
    {
      "id": 51810,
      "name": "Virginia Beach",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 72061,
      "name": "Guaynabo",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": 20087,
      "name": "Jefferson",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 20089,
      "name": "Jewell",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 46109,
      "name": "Roberts",
      "state_abbrev": "SD",
      "state_name": "South Dakota"
    },
    {
      "id": 46121,
      "name": "Todd",
      "state_abbrev": "SD",
      "state_name": "South Dakota"
    },
    {
      "id": 53051,
      "name": "Pend Oreille",
      "state_abbrev": "WA",
      "state_name": "Washington"
    },
    {
      "id": 53059,
      "name": "Skamania",
      "state_abbrev": "WA",
      "state_name": "Washington"
    },
    {
      "id": 54011,
      "name": "Cabell",
      "state_abbrev": "WV",
      "state_name": "West Virginia"
    },
    {
      "id": 23011,
      "name": "Kennebec",
      "state_abbrev": "ME",
      "state_name": "Maine"
    },
    {
      "id": 24019,
      "name": "Dorchester",
      "state_abbrev": "MD",
      "state_name": "Maryland"
    },
    {
      "id": 38103,
      "name": "Wells",
      "state_abbrev": "ND",
      "state_name": "North Dakota"
    },
    {
      "id": 30101,
      "name": "Toole",
      "state_abbrev": "MT",
      "state_name": "Montana"
    },
    {
      "id": 31003,
      "name": "Antelope",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 48275,
      "name": "Knox",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 31029,
      "name": "Chase",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 24025,
      "name": "Harford",
      "state_abbrev": "MD",
      "state_name": "Maryland"
    },
    {
      "id": 24035,
      "name": "Queen Anne's",
      "state_abbrev": "MD",
      "state_name": "Maryland"
    },
    {
      "id": 25009,
      "name": "Essex",
      "state_abbrev": "MA",
      "state_name": "Massachusetts"
    },
    {
      "id": 26015,
      "name": "Barry",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 38045,
      "name": "LaMoure",
      "state_abbrev": "ND",
      "state_name": "North Dakota"
    },
    {
      "id": 38051,
      "name": "McIntosh",
      "state_abbrev": "ND",
      "state_name": "North Dakota"
    },
    {
      "id": 38095,
      "name": "Towner",
      "state_abbrev": "ND",
      "state_name": "North Dakota"
    },
    {
      "id": 38101,
      "name": "Ward",
      "state_abbrev": "ND",
      "state_name": "North Dakota"
    },
    {
      "id": 25003,
      "name": "Berkshire",
      "state_abbrev": "MA",
      "state_name": "Massachusetts"
    },
    {
      "id": 25011,
      "name": "Franklin",
      "state_abbrev": "MA",
      "state_name": "Massachusetts"
    },
    {
      "id": 25021,
      "name": "Norfolk",
      "state_abbrev": "MA",
      "state_name": "Massachusetts"
    },
    {
      "id": 26159,
      "name": "Van Buren",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 26165,
      "name": "Wexford",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 40151,
      "name": "Woods",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": 42073,
      "name": "Lawrence",
      "state_abbrev": "PA",
      "state_name": "Pennsylvania"
    },
    {
      "id": 42083,
      "name": "McKean",
      "state_abbrev": "PA",
      "state_name": "Pennsylvania"
    },
    {
      "id": 48441,
      "name": "Taylor",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48451,
      "name": "Tom Green",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 55123,
      "name": "Vernon",
      "state_abbrev": "WI",
      "state_name": "Wisconsin"
    },
    {
      "id": 72035,
      "name": "Cayey",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": 72041,
      "name": "Cidra",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": 47115,
      "name": "Marion",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 47125,
      "name": "Montgomery",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 51153,
      "name": "Prince William",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 46015,
      "name": "Brule",
      "state_abbrev": "SD",
      "state_name": "South Dakota"
    },
    {
      "id": 46035,
      "name": "Davison",
      "state_abbrev": "SD",
      "state_name": "South Dakota"
    },
    {
      "id": 46039,
      "name": "Deuel",
      "state_abbrev": "SD",
      "state_name": "South Dakota"
    },
    {
      "id": 46049,
      "name": "Faulk",
      "state_abbrev": "SD",
      "state_name": "South Dakota"
    },
    {
      "id": 51075,
      "name": "Goochland",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 45001,
      "name": "Abbeville",
      "state_abbrev": "SC",
      "state_name": "South Carolina"
    },
    {
      "id": 48045,
      "name": "Briscoe",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 72011,
      "name": "Añasco",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": 72013,
      "name": "Arecibo",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": 51181,
      "name": "Surry",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 29005,
      "name": "Atchison",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 29009,
      "name": "Barry",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 39159,
      "name": "Union",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 31171,
      "name": "Thomas",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 48145,
      "name": "Falls",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 36057,
      "name": "Montgomery",
      "state_abbrev": "NY",
      "state_name": "New York"
    },
    {
      "id": 36067,
      "name": "Onondaga",
      "state_abbrev": "NY",
      "state_name": "New York"
    },
    {
      "id": 39105,
      "name": "Meigs",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 27153,
      "name": "Todd",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 27157,
      "name": "Wabasha",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 28013,
      "name": "Calhoun",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 26023,
      "name": "Branch",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 37001,
      "name": "Alamance",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 55077,
      "name": "Marquette",
      "state_abbrev": "WI",
      "state_name": "Wisconsin"
    },
    {
      "id": 29203,
      "name": "Shannon",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 29133,
      "name": "Mississippi",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 29149,
      "name": "Oregon",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 31031,
      "name": "Cherry",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 31035,
      "name": "Clay",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 31037,
      "name": "Colfax",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 38027,
      "name": "Eddy",
      "state_abbrev": "ND",
      "state_name": "North Dakota"
    },
    {
      "id": 13205,
      "name": "Mitchell",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 13315,
      "name": "Wilcox",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 16033,
      "name": "Clark",
      "state_abbrev": "ID",
      "state_name": "Idaho"
    },
    {
      "id": 17043,
      "name": "DuPage",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 47101,
      "name": "Lewis",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 48385,
      "name": "Real",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48399,
      "name": "Runnels",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 55085,
      "name": "Oneida",
      "state_abbrev": "WI",
      "state_name": "Wisconsin"
    },
    {
      "id": 40131,
      "name": "Rogers",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": 60030,
      "name": "Rose Island",
      "state_abbrev": "AS",
      "state_name": "American Samoa"
    },
    {
      "id": 60040,
      "name": "Swains Island",
      "state_abbrev": "AS",
      "state_name": "American Samoa"
    },
    {
      "id": 69120,
      "name": "Tinian",
      "state_abbrev": "MP",
      "state_name": "Commonwealth of the Northern Mariana Islands"
    },
    {
      "id": 48093,
      "name": "Comanche",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 36019,
      "name": "Clinton",
      "state_abbrev": "NY",
      "state_name": "New York"
    },
    {
      "id": 31051,
      "name": "Dixon",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 41025,
      "name": "Harney",
      "state_abbrev": "OR",
      "state_name": "Oregon"
    },
    {
      "id": 47087,
      "name": "Jackson",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 28023,
      "name": "Clarke",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 48485,
      "name": "Wichita",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48489,
      "name": "Willacy",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 50025,
      "name": "Windham",
      "state_abbrev": "VT",
      "state_name": "Vermont"
    },
    {
      "id": 72047,
      "name": "Corozal",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": 21075,
      "name": "Fulton",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 21083,
      "name": "Graves",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 26027,
      "name": "Cass",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 30067,
      "name": "Park",
      "state_abbrev": "MT",
      "state_name": "Montana"
    },
    {
      "id": 30095,
      "name": "Stillwater",
      "state_abbrev": "MT",
      "state_name": "Montana"
    },
    {
      "id": 36073,
      "name": "Orleans",
      "state_abbrev": "NY",
      "state_name": "New York"
    },
    {
      "id": 48049,
      "name": "Brown",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48069,
      "name": "Castro",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 13273,
      "name": "Terrell",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 45081,
      "name": "Saluda",
      "state_abbrev": "SC",
      "state_name": "South Carolina"
    },
    {
      "id": 46005,
      "name": "Beadle",
      "state_abbrev": "SD",
      "state_name": "South Dakota"
    },
    {
      "id": 46011,
      "name": "Brookings",
      "state_abbrev": "SD",
      "state_name": "South Dakota"
    },
    {
      "id": 29021,
      "name": "Buchanan",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 29035,
      "name": "Carter",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 26037,
      "name": "Clinton",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 26051,
      "name": "Gladwin",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 40001,
      "name": "Adair",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": 40005,
      "name": "Atoka",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": 40033,
      "name": "Cotton",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": "08053",
      "name": "Hinsdale",
      "state_abbrev": "CO",
      "state_name": "Colorado"
    },
    {
      "id": 12031,
      "name": "Duval",
      "state_abbrev": "FL",
      "state_name": "Florida"
    },
    {
      "id": 12119,
      "name": "Sumter",
      "state_abbrev": "FL",
      "state_name": "Florida"
    },
    {
      "id": 13073,
      "name": "Columbia",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 55105,
      "name": "Rock",
      "state_abbrev": "WI",
      "state_name": "Wisconsin"
    },
    {
      "id": 55119,
      "name": "Taylor",
      "state_abbrev": "WI",
      "state_name": "Wisconsin"
    },
    {
      "id": 41011,
      "name": "Coos",
      "state_abbrev": "OR",
      "state_name": "Oregon"
    },
    {
      "id": 51079,
      "name": "Greene",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 72045,
      "name": "Comerío",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": 32013,
      "name": "Humboldt",
      "state_abbrev": "NV",
      "state_name": "Nevada"
    },
    {
      "id": 27095,
      "name": "Mille Lacs",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 27101,
      "name": "Murray",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 27109,
      "name": "Olmsted",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 27125,
      "name": "Red Lake",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 54049,
      "name": "Marion",
      "state_abbrev": "WV",
      "state_name": "West Virginia"
    },
    {
      "id": 54073,
      "name": "Pleasants",
      "state_abbrev": "WV",
      "state_name": "West Virginia"
    },
    {
      "id": 55067,
      "name": "Langlade",
      "state_abbrev": "WI",
      "state_name": "Wisconsin"
    },
    {
      "id": 55073,
      "name": "Marathon",
      "state_abbrev": "WI",
      "state_name": "Wisconsin"
    },
    {
      "id": 17137,
      "name": "Morgan",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 72089,
      "name": "Luquillo",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": 72093,
      "name": "Maricao",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": 72007,
      "name": "Aguas Buenas",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": 42121,
      "name": "Venango",
      "state_abbrev": "PA",
      "state_name": "Pennsylvania"
    },
    {
      "id": 44001,
      "name": "Bristol",
      "state_abbrev": "RI",
      "state_name": "Rhode Island"
    },
    {
      "id": 48107,
      "name": "Crosby",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 39099,
      "name": "Mahoning",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 39103,
      "name": "Medina",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 32009,
      "name": "Esmeralda",
      "state_abbrev": "NV",
      "state_name": "Nevada"
    },
    {
      "id": 41027,
      "name": "Hood River",
      "state_abbrev": "OR",
      "state_name": "Oregon"
    },
    {
      "id": 41049,
      "name": "Morrow",
      "state_abbrev": "OR",
      "state_name": "Oregon"
    },
    {
      "id": 48507,
      "name": "Zavala",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 49009,
      "name": "Daggett",
      "state_abbrev": "UT",
      "state_name": "Utah"
    },
    {
      "id": 49021,
      "name": "Iron",
      "state_abbrev": "UT",
      "state_name": "Utah"
    },
    {
      "id": 56041,
      "name": "Uinta",
      "state_abbrev": "WY",
      "state_name": "Wyoming"
    },
    {
      "id": 51011,
      "name": "Appomattox",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 51025,
      "name": "Brunswick",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 21045,
      "name": "Casey",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 21113,
      "name": "Jessamine",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 21141,
      "name": "Logan",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 41059,
      "name": "Umatilla",
      "state_abbrev": "OR",
      "state_name": "Oregon"
    },
    {
      "id": 40017,
      "name": "Canadian",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": 56045,
      "name": "Weston",
      "state_abbrev": "WY",
      "state_name": "Wyoming"
    },
    {
      "id": 23019,
      "name": "Penobscot",
      "state_abbrev": "ME",
      "state_name": "Maine"
    },
    {
      "id": 51043,
      "name": "Clarke",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 48251,
      "name": "Johnson",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 51135,
      "name": "Nottoway",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 22095,
      "name": "St. John the Baptist",
      "state_abbrev": "LA",
      "state_name": "Louisiana"
    },
    {
      "id": 22125,
      "name": "West Feliciana",
      "state_abbrev": "LA",
      "state_name": "Louisiana"
    },
    {
      "id": 26061,
      "name": "Houghton",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 48231,
      "name": "Hunt",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48279,
      "name": "Lamb",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": "04003",
      "name": "Cochise",
      "state_abbrev": "AZ",
      "state_name": "Arizona"
    },
    {
      "id": 29081,
      "name": "Harrison",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 31023,
      "name": "Butler",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 37189,
      "name": "Watauga",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 38007,
      "name": "Billings",
      "state_abbrev": "ND",
      "state_name": "North Dakota"
    },
    {
      "id": 51630,
      "name": "Fredericksburg",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 42013,
      "name": "Blair",
      "state_abbrev": "PA",
      "state_name": "Pennsylvania"
    },
    {
      "id": 42117,
      "name": "Tioga",
      "state_abbrev": "PA",
      "state_name": "Pennsylvania"
    },
    {
      "id": 26065,
      "name": "Ingham",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 29167,
      "name": "Polk",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 19191,
      "name": "Winneshiek",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 29085,
      "name": "Hickory",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 40035,
      "name": "Craig",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": 49027,
      "name": "Millard",
      "state_abbrev": "UT",
      "state_name": "Utah"
    },
    {
      "id": 50009,
      "name": "Essex",
      "state_abbrev": "VT",
      "state_name": "Vermont"
    },
    {
      "id": 47139,
      "name": "Polk",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 47153,
      "name": "Sequatchie",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 48497,
      "name": "Wise",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 13223,
      "name": "Paulding",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 55127,
      "name": "Walworth",
      "state_abbrev": "WI",
      "state_name": "Wisconsin"
    },
    {
      "id": 56001,
      "name": "Albany",
      "state_abbrev": "WY",
      "state_name": "Wyoming"
    },
    {
      "id": 56005,
      "name": "Campbell",
      "state_abbrev": "WY",
      "state_name": "Wyoming"
    },
    {
      "id": 21201,
      "name": "Robertson",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 20023,
      "name": "Cheyenne",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 47169,
      "name": "Trousdale",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 50019,
      "name": "Orleans",
      "state_abbrev": "VT",
      "state_name": "Vermont"
    },
    {
      "id": 72005,
      "name": "Aguadilla",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": 48413,
      "name": "Schleicher",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 46059,
      "name": "Hand",
      "state_abbrev": "SD",
      "state_name": "South Dakota"
    },
    {
      "id": 46063,
      "name": "Harding",
      "state_abbrev": "SD",
      "state_name": "South Dakota"
    },
    {
      "id": 46077,
      "name": "Kingsbury",
      "state_abbrev": "SD",
      "state_name": "South Dakota"
    },
    {
      "id": 46087,
      "name": "McCook",
      "state_abbrev": "SD",
      "state_name": "South Dakota"
    },
    {
      "id": 46089,
      "name": "McPherson",
      "state_abbrev": "SD",
      "state_name": "South Dakota"
    },
    {
      "id": 56015,
      "name": "Goshen",
      "state_abbrev": "WY",
      "state_name": "Wyoming"
    },
    {
      "id": 72021,
      "name": "Bayamón",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": 47177,
      "name": "Warren",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 48017,
      "name": "Bailey",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48131,
      "name": "Duval",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48143,
      "name": "Erath",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 42011,
      "name": "Berks",
      "state_abbrev": "PA",
      "state_name": "Pennsylvania"
    },
    {
      "id": 42019,
      "name": "Butler",
      "state_abbrev": "PA",
      "state_name": "Pennsylvania"
    },
    {
      "id": 42105,
      "name": "Potter",
      "state_abbrev": "PA",
      "state_name": "Pennsylvania"
    },
    {
      "id": 42115,
      "name": "Susquehanna",
      "state_abbrev": "PA",
      "state_name": "Pennsylvania"
    },
    {
      "id": 51049,
      "name": "Cumberland",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 26017,
      "name": "Bay",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 72025,
      "name": "Caguas",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": 72033,
      "name": "Cataño",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": 51685,
      "name": "Manassas Park",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 48163,
      "name": "Frio",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48165,
      "name": "Gaines",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48179,
      "name": "Gray",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 28047,
      "name": "Harrison",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 48285,
      "name": "Lavaca",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48303,
      "name": "Lubbock",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 51540,
      "name": "Charlottesville",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 51570,
      "name": "Colonial Heights",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 51610,
      "name": "Falls Church",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": "02060",
      "name": "Bristol Bay",
      "state_abbrev": "AK",
      "state_name": "Alaska"
    },
    {
      "id": "02068",
      "name": "Denali",
      "state_abbrev": "AK",
      "state_name": "Alaska"
    },
    {
      "id": "02188",
      "name": "Northwest Arctic",
      "state_abbrev": "AK",
      "state_name": "Alaska"
    },
    {
      "id": "02230",
      "name": "Skagway",
      "state_abbrev": "AK",
      "state_name": "Alaska"
    },
    {
      "id": "02275",
      "name": "Wrangell",
      "state_abbrev": "AK",
      "state_name": "Alaska"
    },
    {
      "id": 30019,
      "name": "Daniels",
      "state_abbrev": "MT",
      "state_name": "Montana"
    },
    {
      "id": 39025,
      "name": "Clermont",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 39053,
      "name": "Gallia",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 39067,
      "name": "Harrison",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 31153,
      "name": "Sarpy",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": "02013",
      "name": "Aleutians East",
      "state_abbrev": "AK",
      "state_name": "Alaska"
    },
    {
      "id": 40093,
      "name": "Major",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": 40103,
      "name": "Noble",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": 40053,
      "name": "Grant",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": 31081,
      "name": "Hamilton",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 31109,
      "name": "Lancaster",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 31119,
      "name": "Madison",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": "01057",
      "name": "Fayette",
      "state_abbrev": "AL",
      "state_name": "Alabama"
    },
    {
      "id": "01111",
      "name": "Randolph",
      "state_abbrev": "AL",
      "state_name": "Alabama"
    },
    {
      "id": "05021",
      "name": "Clay",
      "state_abbrev": "AR",
      "state_name": "Arkansas"
    },
    {
      "id": "05023",
      "name": "Cleburne",
      "state_abbrev": "AR",
      "state_name": "Arkansas"
    },
    {
      "id": "05037",
      "name": "Cross",
      "state_abbrev": "AR",
      "state_name": "Arkansas"
    },
    {
      "id": 27071,
      "name": "Koochiching",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 19197,
      "name": "Wright",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 20013,
      "name": "Brown",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 40107,
      "name": "Okfuskee",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": 31053,
      "name": "Dodge",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 31123,
      "name": "Morrill",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 21041,
      "name": "Carroll",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 39135,
      "name": "Preble",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 39119,
      "name": "Muskingum",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": "05051",
      "name": "Garland",
      "state_abbrev": "AR",
      "state_name": "Arkansas"
    },
    {
      "id": 31095,
      "name": "Jefferson",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 29173,
      "name": "Ralls",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 72059,
      "name": "Guayanilla",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": 40021,
      "name": "Cherokee",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": 36079,
      "name": "Putnam",
      "state_abbrev": "NY",
      "state_name": "New York"
    },
    {
      "id": 36097,
      "name": "Schuyler",
      "state_abbrev": "NY",
      "state_name": "New York"
    },
    {
      "id": 29011,
      "name": "Barton",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 39127,
      "name": "Perry",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 20045,
      "name": "Douglas",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 20051,
      "name": "Ellis",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 20055,
      "name": "Finney",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 29177,
      "name": "Ray",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 28153,
      "name": "Wayne",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 28159,
      "name": "Winston",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 28161,
      "name": "Yalobusha",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 20173,
      "name": "Sedgwick",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 20177,
      "name": "Shawnee",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 20185,
      "name": "Stafford",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 29017,
      "name": "Bollinger",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 29047,
      "name": "Clay",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 20059,
      "name": "Franklin",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 39163,
      "name": "Vinton",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 29105,
      "name": "Laclede",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 29109,
      "name": "Lawrence",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 31137,
      "name": "Phelps",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 33003,
      "name": "Carroll",
      "state_abbrev": "NH",
      "state_name": "New Hampshire"
    },
    {
      "id": 39009,
      "name": "Athens",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 19181,
      "name": "Warren",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 19185,
      "name": "Wayne",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 19187,
      "name": "Webster",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 21207,
      "name": "Russell",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 38065,
      "name": "Oliver",
      "state_abbrev": "ND",
      "state_name": "North Dakota"
    },
    {
      "id": "06111",
      "name": "Ventura",
      "state_abbrev": "CA",
      "state_name": "California"
    },
    {
      "id": "08009",
      "name": "Baca",
      "state_abbrev": "CO",
      "state_name": "Colorado"
    },
    {
      "id": "08011",
      "name": "Bent",
      "state_abbrev": "CO",
      "state_name": "Colorado"
    },
    {
      "id": "08017",
      "name": "Cheyenne",
      "state_abbrev": "CO",
      "state_name": "Colorado"
    },
    {
      "id": 29125,
      "name": "Maries",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 31133,
      "name": "Pawnee",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 20175,
      "name": "Seward",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 22023,
      "name": "Cameron",
      "state_abbrev": "LA",
      "state_name": "Louisiana"
    },
    {
      "id": 22041,
      "name": "Franklin",
      "state_abbrev": "LA",
      "state_name": "Louisiana"
    },
    {
      "id": 22051,
      "name": "Jefferson",
      "state_abbrev": "LA",
      "state_name": "Louisiana"
    },
    {
      "id": 22075,
      "name": "Plaquemines",
      "state_abbrev": "LA",
      "state_name": "Louisiana"
    },
    {
      "id": 39171,
      "name": "Williams",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 20017,
      "name": "Chase",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 20183,
      "name": "Smith",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 20189,
      "name": "Stevens",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 20037,
      "name": "Crawford",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 20027,
      "name": "Clay",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 20031,
      "name": "Coffey",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 29223,
      "name": "Wayne",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 29510,
      "name": "St. Louis",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 21021,
      "name": "Boyle",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 36107,
      "name": "Tioga",
      "state_abbrev": "NY",
      "state_name": "New York"
    },
    {
      "id": 20159,
      "name": "Rice",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 20169,
      "name": "Saline",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 21137,
      "name": "Lincoln",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 39147,
      "name": "Seneca",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 39153,
      "name": "Summit",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 40037,
      "name": "Creek",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": 34037,
      "name": "Sussex",
      "state_abbrev": "NJ",
      "state_name": "New Jersey"
    },
    {
      "id": 32023,
      "name": "Nye",
      "state_abbrev": "NV",
      "state_name": "Nevada"
    },
    {
      "id": 32510,
      "name": "Carson City",
      "state_abbrev": "NV",
      "state_name": "Nevada"
    },
    {
      "id": 40039,
      "name": "Custer",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": 40043,
      "name": "Dewey",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": 39131,
      "name": "Pike",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 29077,
      "name": "Greene",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 28115,
      "name": "Pontotoc",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 28129,
      "name": "Smith",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 31177,
      "name": "Washington",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 20125,
      "name": "Montgomery",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 20209,
      "name": "Wyandotte",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 21001,
      "name": "Adair",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 21077,
      "name": "Gallatin",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 23021,
      "name": "Piscataquis",
      "state_abbrev": "ME",
      "state_name": "Maine"
    },
    {
      "id": 24009,
      "name": "Calvert",
      "state_abbrev": "MD",
      "state_name": "Maryland"
    },
    {
      "id": "06103",
      "name": "Tehama",
      "state_abbrev": "CA",
      "state_name": "California"
    },
    {
      "id": 40009,
      "name": "Beckham",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": 40019,
      "name": "Carter",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": 72017,
      "name": "Barceloneta",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": 31041,
      "name": "Custer",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 38089,
      "name": "Stark",
      "state_abbrev": "ND",
      "state_name": "North Dakota"
    },
    {
      "id": 26131,
      "name": "Ontonagon",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 38061,
      "name": "Mountrail",
      "state_abbrev": "ND",
      "state_name": "North Dakota"
    },
    {
      "id": 29001,
      "name": "Adair",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 51790,
      "name": "Staunton",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 72065,
      "name": "Hatillo",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": 40069,
      "name": "Johnston",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": 46097,
      "name": "Miner",
      "state_abbrev": "SD",
      "state_name": "South Dakota"
    },
    {
      "id": 21171,
      "name": "Monroe",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 26075,
      "name": "Jackson",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 26079,
      "name": "Kalkaska",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 26095,
      "name": "Luce",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 26133,
      "name": "Osceola",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 26143,
      "name": "Roscommon",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 39007,
      "name": "Ashtabula",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 36121,
      "name": "Wyoming",
      "state_abbrev": "NY",
      "state_name": "New York"
    },
    {
      "id": 37121,
      "name": "Mitchell",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 37141,
      "name": "Pender",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 39073,
      "name": "Hocking",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 39077,
      "name": "Huron",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 46099,
      "name": "Minnehaha",
      "state_abbrev": "SD",
      "state_name": "South Dakota"
    },
    {
      "id": 54015,
      "name": "Clay",
      "state_abbrev": "WV",
      "state_name": "West Virginia"
    },
    {
      "id": 26119,
      "name": "Montmorency",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 21103,
      "name": "Henry",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 36033,
      "name": "Franklin",
      "state_abbrev": "NY",
      "state_name": "New York"
    },
    {
      "id": 36051,
      "name": "Livingston",
      "state_abbrev": "NY",
      "state_name": "New York"
    },
    {
      "id": 31055,
      "name": "Douglas",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 40047,
      "name": "Garfield",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": 13047,
      "name": "Catoosa",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 20131,
      "name": "Nemaha",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 20141,
      "name": "Osborne",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 31047,
      "name": "Dawson",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 47039,
      "name": "Decatur",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 55025,
      "name": "Dane",
      "state_abbrev": "WI",
      "state_name": "Wisconsin"
    },
    {
      "id": 39129,
      "name": "Pickaway",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 39019,
      "name": "Carroll",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 35003,
      "name": "Catron",
      "state_abbrev": "NM",
      "state_name": "New Mexico"
    },
    {
      "id": 35021,
      "name": "Harding",
      "state_abbrev": "NM",
      "state_name": "New Mexico"
    },
    {
      "id": 35037,
      "name": "Quay",
      "state_abbrev": "NM",
      "state_name": "New Mexico"
    },
    {
      "id": 20193,
      "name": "Thomas",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 21013,
      "name": "Bell",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 39097,
      "name": "Madison",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 28067,
      "name": "Jones",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 21173,
      "name": "Montgomery",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 29119,
      "name": "McDonald",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 31161,
      "name": "Sheridan",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 55039,
      "name": "Fond du Lac",
      "state_abbrev": "WI",
      "state_name": "Wisconsin"
    },
    {
      "id": 55059,
      "name": "Kenosha",
      "state_abbrev": "WI",
      "state_name": "Wisconsin"
    },
    {
      "id": 39151,
      "name": "Stark",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 72019,
      "name": "Barranquitas",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": 40031,
      "name": "Comanche",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": 28071,
      "name": "Lafayette",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 28085,
      "name": "Lincoln",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 39083,
      "name": "Knox",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 39091,
      "name": "Logan",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 29061,
      "name": "Daviess",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 29067,
      "name": "Douglas",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 40121,
      "name": "Pittsburg",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": 40127,
      "name": "Pushmataha",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": 46125,
      "name": "Turner",
      "state_abbrev": "SD",
      "state_name": "South Dakota"
    },
    {
      "id": 21199,
      "name": "Pulaski",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 26149,
      "name": "St. Joseph",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 39157,
      "name": "Tuscarawas",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 26153,
      "name": "Schoolcraft",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 26155,
      "name": "Shiawassee",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 27081,
      "name": "Lincoln",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 39117,
      "name": "Morrow",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 27033,
      "name": "Cottonwood",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 27043,
      "name": "Faribault",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 39143,
      "name": "Sandusky",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 46107,
      "name": "Potter",
      "state_abbrev": "SD",
      "state_name": "South Dakota"
    },
    {
      "id": 48365,
      "name": "Panola",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 53013,
      "name": "Columbia",
      "state_abbrev": "WA",
      "state_name": "Washington"
    },
    {
      "id": 39165,
      "name": "Warren",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 39133,
      "name": "Portage",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 39013,
      "name": "Belmont",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 31065,
      "name": "Furnas",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 31071,
      "name": "Garfield",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 31089,
      "name": "Holt",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 39107,
      "name": "Mercer",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 39121,
      "name": "Noble",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 21227,
      "name": "Warren",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 53029,
      "name": "Island",
      "state_abbrev": "WA",
      "state_name": "Washington"
    },
    {
      "id": 53035,
      "name": "Kitsap",
      "state_abbrev": "WA",
      "state_name": "Washington"
    },
    {
      "id": 53041,
      "name": "Lewis",
      "state_abbrev": "WA",
      "state_name": "Washington"
    },
    {
      "id": 51830,
      "name": "Williamsburg",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 55015,
      "name": "Calumet",
      "state_abbrev": "WI",
      "state_name": "Wisconsin"
    },
    {
      "id": 55021,
      "name": "Columbia",
      "state_abbrev": "WI",
      "state_name": "Wisconsin"
    },
    {
      "id": 39017,
      "name": "Butler",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 35047,
      "name": "San Miguel",
      "state_abbrev": "NM",
      "state_name": "New Mexico"
    },
    {
      "id": 35057,
      "name": "Torrance",
      "state_abbrev": "NM",
      "state_name": "New Mexico"
    },
    {
      "id": 33013,
      "name": "Merrimack",
      "state_abbrev": "NH",
      "state_name": "New Hampshire"
    },
    {
      "id": 39155,
      "name": "Trumbull",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 28133,
      "name": "Sunflower",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 22003,
      "name": "Allen",
      "state_abbrev": "LA",
      "state_name": "Louisiana"
    },
    {
      "id": 22021,
      "name": "Caldwell",
      "state_abbrev": "LA",
      "state_name": "Louisiana"
    },
    {
      "id": 18059,
      "name": "Hancock",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 20021,
      "name": "Cherokee",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 27141,
      "name": "Sherburne",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 27147,
      "name": "Steele",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 27151,
      "name": "Swift",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 35061,
      "name": "Valencia",
      "state_abbrev": "NM",
      "state_name": "New Mexico"
    },
    {
      "id": 21213,
      "name": "Simpson",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 13235,
      "name": "Pulaski",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 13249,
      "name": "Schley",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 20147,
      "name": "Phillips",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 20151,
      "name": "Pratt",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 20153,
      "name": "Rawlins",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 17019,
      "name": "Champaign",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 47131,
      "name": "Obion",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 13065,
      "name": "Clinch",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 13161,
      "name": "Jeff Davis",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 21111,
      "name": "Jefferson",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 19171,
      "name": "Tama",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 12099,
      "name": "Palm Beach",
      "state_abbrev": "FL",
      "state_name": "Florida"
    },
    {
      "id": 12067,
      "name": "Lafayette",
      "state_abbrev": "FL",
      "state_name": "Florida"
    },
    {
      "id": 22121,
      "name": "West Baton Rouge",
      "state_abbrev": "LA",
      "state_name": "Louisiana"
    },
    {
      "id": "01053",
      "name": "Escambia",
      "state_abbrev": "AL",
      "state_name": "Alabama"
    },
    {
      "id": "01067",
      "name": "Henry",
      "state_abbrev": "AL",
      "state_name": "Alabama"
    },
    {
      "id": 21129,
      "name": "Lee",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 19077,
      "name": "Guthrie",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 19081,
      "name": "Hancock",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 19089,
      "name": "Howard",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 13011,
      "name": "Banks",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 27131,
      "name": "Rice",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 27135,
      "name": "Roseau",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 42079,
      "name": "Luzerne",
      "state_abbrev": "PA",
      "state_name": "Pennsylvania"
    },
    {
      "id": 45011,
      "name": "Barnwell",
      "state_abbrev": "SC",
      "state_name": "South Carolina"
    },
    {
      "id": 47181,
      "name": "Wayne",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 48009,
      "name": "Archer",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 50003,
      "name": "Bennington",
      "state_abbrev": "VT",
      "state_name": "Vermont"
    },
    {
      "id": 19167,
      "name": "Sioux",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 72111,
      "name": "Peñuelas",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": 13207,
      "name": "Monroe",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 18173,
      "name": "Warrick",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 17179,
      "name": "Tazewell",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 72127,
      "name": "San Juan",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": 13057,
      "name": "Cherokee",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 17057,
      "name": "Fulton",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 13085,
      "name": "Dawson",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": "08115",
      "name": "Sedgwick",
      "state_abbrev": "CO",
      "state_name": "Colorado"
    },
    {
      "id": 13225,
      "name": "Peach",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": "05089",
      "name": "Marion",
      "state_abbrev": "AR",
      "state_name": "Arkansas"
    },
    {
      "id": 19173,
      "name": "Taylor",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 48417,
      "name": "Shackelford",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48421,
      "name": "Sherman",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48431,
      "name": "Sterling",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48435,
      "name": "Sutton",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 42047,
      "name": "Elk",
      "state_abbrev": "PA",
      "state_name": "Pennsylvania"
    },
    {
      "id": 13253,
      "name": "Seminole",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 13277,
      "name": "Tift",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 48369,
      "name": "Parmer",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48381,
      "name": "Randall",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 17041,
      "name": "Douglas",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 72143,
      "name": "Vega Alta",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": "05113",
      "name": "Polk",
      "state_abbrev": "AR",
      "state_name": "Arkansas"
    },
    {
      "id": 26125,
      "name": "Oakland",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 72099,
      "name": "Moca",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": 21169,
      "name": "Metcalfe",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 48487,
      "name": "Wilbarger",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48493,
      "name": "Wilson",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 42075,
      "name": "Lebanon",
      "state_abbrev": "PA",
      "state_name": "Pennsylvania"
    },
    {
      "id": 24510,
      "name": "Baltimore",
      "state_abbrev": "MD",
      "state_name": "Maryland"
    },
    {
      "id": 25019,
      "name": "Nantucket",
      "state_abbrev": "MA",
      "state_name": "Massachusetts"
    },
    {
      "id": 36095,
      "name": "Schoharie",
      "state_abbrev": "NY",
      "state_name": "New York"
    },
    {
      "id": 19095,
      "name": "Iowa",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 19099,
      "name": "Jasper",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 13015,
      "name": "Bartow",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 47075,
      "name": "Haywood",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 17051,
      "name": "Fayette",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": "05055",
      "name": "Greene",
      "state_abbrev": "AR",
      "state_name": "Arkansas"
    },
    {
      "id": "08014",
      "name": "Broomfield",
      "state_abbrev": "CO",
      "state_name": "Colorado"
    },
    {
      "id": "05065",
      "name": "Izard",
      "state_abbrev": "AR",
      "state_name": "Arkansas"
    },
    {
      "id": "05071",
      "name": "Johnson",
      "state_abbrev": "AR",
      "state_name": "Arkansas"
    },
    {
      "id": 19101,
      "name": "Jefferson",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 19105,
      "name": "Jones",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 19109,
      "name": "Kossuth",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 12019,
      "name": "Clay",
      "state_abbrev": "FL",
      "state_name": "Florida"
    },
    {
      "id": 12049,
      "name": "Hardee",
      "state_abbrev": "FL",
      "state_name": "Florida"
    },
    {
      "id": 19057,
      "name": "Des Moines",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 20061,
      "name": "Geary",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 72131,
      "name": "San Sebastián",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": 72133,
      "name": "Santa Isabel",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": 42123,
      "name": "Warren",
      "state_abbrev": "PA",
      "state_name": "Pennsylvania"
    },
    {
      "id": 13095,
      "name": "Dougherty",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 72149,
      "name": "Villalba",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": 27083,
      "name": "Lyon",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 19161,
      "name": "Sac",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 13049,
      "name": "Charlton",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 42119,
      "name": "Union",
      "state_abbrev": "PA",
      "state_name": "Pennsylvania"
    },
    {
      "id": 13177,
      "name": "Lee",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 36099,
      "name": "Seneca",
      "state_abbrev": "NY",
      "state_name": "New York"
    },
    {
      "id": 33001,
      "name": "Belknap",
      "state_abbrev": "NH",
      "state_name": "New Hampshire"
    },
    {
      "id": "08099",
      "name": "Prowers",
      "state_abbrev": "CO",
      "state_name": "Colorado"
    },
    {
      "id": 45037,
      "name": "Edgefield",
      "state_abbrev": "SC",
      "state_name": "South Carolina"
    },
    {
      "id": 29055,
      "name": "Crawford",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 26001,
      "name": "Alcona",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 13167,
      "name": "Johnson",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 27093,
      "name": "Meeker",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 27099,
      "name": "Mower",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 21145,
      "name": "McCracken",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 26039,
      "name": "Crawford",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 26045,
      "name": "Eaton",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": "08041",
      "name": "El Paso",
      "state_abbrev": "CO",
      "state_name": "Colorado"
    },
    {
      "id": 72101,
      "name": "Morovis",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": 72105,
      "name": "Naranjito",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": 19137,
      "name": "Montgomery",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 13043,
      "name": "Candler",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 18069,
      "name": "Huntington",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 18073,
      "name": "Jasper",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 37087,
      "name": "Haywood",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 37155,
      "name": "Robeson",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 38105,
      "name": "Williams",
      "state_abbrev": "ND",
      "state_name": "North Dakota"
    },
    {
      "id": 48139,
      "name": "Ellis",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48403,
      "name": "Sabine",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48481,
      "name": "Wharton",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 41001,
      "name": "Baker",
      "state_abbrev": "OR",
      "state_name": "Oregon"
    },
    {
      "id": 41045,
      "name": "Malheur",
      "state_abbrev": "OR",
      "state_name": "Oregon"
    },
    {
      "id": 42063,
      "name": "Indiana",
      "state_abbrev": "PA",
      "state_name": "Pennsylvania"
    },
    {
      "id": 45053,
      "name": "Jasper",
      "state_abbrev": "SC",
      "state_name": "South Carolina"
    },
    {
      "id": 18029,
      "name": "Dearborn",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 18131,
      "name": "Pulaski",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 18139,
      "name": "Rush",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": "08047",
      "name": "Gilpin",
      "state_abbrev": "CO",
      "state_name": "Colorado"
    },
    {
      "id": "08089",
      "name": "Otero",
      "state_abbrev": "CO",
      "state_name": "Colorado"
    },
    {
      "id": 19047,
      "name": "Crawford",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 72135,
      "name": "Toa Alta",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": 40061,
      "name": "Haskell",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": 29137,
      "name": "Monroe",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 31169,
      "name": "Thayer",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 47161,
      "name": "Stewart",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 17023,
      "name": "Clark",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 19043,
      "name": "Clayton",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 19053,
      "name": "Decatur",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 20171,
      "name": "Scott",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 19133,
      "name": "Monona",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 26019,
      "name": "Benzie",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 26035,
      "name": "Clare",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 20071,
      "name": "Greeley",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 20123,
      "name": "Mitchell",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 42065,
      "name": "Jefferson",
      "state_abbrev": "PA",
      "state_name": "Pennsylvania"
    },
    {
      "id": 44003,
      "name": "Kent",
      "state_abbrev": "RI",
      "state_name": "Rhode Island"
    },
    {
      "id": 17061,
      "name": "Greene",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 18105,
      "name": "Monroe",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 18117,
      "name": "Orange",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 18137,
      "name": "Ripley",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": "05083",
      "name": "Logan",
      "state_abbrev": "AR",
      "state_name": "Arkansas"
    },
    {
      "id": 40081,
      "name": "Lincoln",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": 19071,
      "name": "Fremont",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 19023,
      "name": "Butler",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 19029,
      "name": "Cass",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": "08103",
      "name": "Rio Blanco",
      "state_abbrev": "CO",
      "state_name": "Colorado"
    },
    {
      "id": "08109",
      "name": "Saguache",
      "state_abbrev": "CO",
      "state_name": "Colorado"
    },
    {
      "id": "05031",
      "name": "Craighead",
      "state_abbrev": "AR",
      "state_name": "Arkansas"
    },
    {
      "id": 26009,
      "name": "Antrim",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 27117,
      "name": "Pipestone",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 27121,
      "name": "Pope",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 27041,
      "name": "Douglas",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 19115,
      "name": "Louisa",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 19125,
      "name": "Marion",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 13187,
      "name": "Lumpkin",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 17009,
      "name": "Brown",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": "08119",
      "name": "Teller",
      "state_abbrev": "CO",
      "state_name": "Colorado"
    },
    {
      "id": 12001,
      "name": "Alachua",
      "state_abbrev": "FL",
      "state_name": "Florida"
    },
    {
      "id": "09015",
      "name": "Windham",
      "state_abbrev": "CT",
      "state_name": "Connecticut"
    },
    {
      "id": 12027,
      "name": "DeSoto",
      "state_abbrev": "FL",
      "state_name": "Florida"
    },
    {
      "id": "05123",
      "name": "St. Francis",
      "state_abbrev": "AR",
      "state_name": "Arkansas"
    },
    {
      "id": 26011,
      "name": "Arenac",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 18043,
      "name": "Floyd",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 21215,
      "name": "Spencer",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 21221,
      "name": "Trigg",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 22059,
      "name": "LaSalle",
      "state_abbrev": "LA",
      "state_name": "Louisiana"
    },
    {
      "id": 22073,
      "name": "Ouachita",
      "state_abbrev": "LA",
      "state_name": "Louisiana"
    },
    {
      "id": 22083,
      "name": "Richland",
      "state_abbrev": "LA",
      "state_name": "Louisiana"
    },
    {
      "id": 22087,
      "name": "St. Bernard",
      "state_abbrev": "LA",
      "state_name": "Louisiana"
    },
    {
      "id": 40071,
      "name": "Kay",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": "09003",
      "name": "Hartford",
      "state_abbrev": "CT",
      "state_name": "Connecticut"
    },
    {
      "id": "05141",
      "name": "Van Buren",
      "state_abbrev": "AR",
      "state_name": "Arkansas"
    },
    {
      "id": 26117,
      "name": "Montcalm",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 26121,
      "name": "Muskegon",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 49055,
      "name": "Wayne",
      "state_abbrev": "UT",
      "state_name": "Utah"
    },
    {
      "id": 42081,
      "name": "Lycoming",
      "state_abbrev": "PA",
      "state_name": "Pennsylvania"
    },
    {
      "id": 19061,
      "name": "Dubuque",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 19067,
      "name": "Floyd",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 19139,
      "name": "Muscatine",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 19143,
      "name": "Osceola",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 19153,
      "name": "Polk",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 19157,
      "name": "Poweshiek",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 26101,
      "name": "Manistee",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 19005,
      "name": "Allamakee",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 19013,
      "name": "Black Hawk",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 19019,
      "name": "Buchanan",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 20139,
      "name": "Osage",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 42069,
      "name": "Lackawanna",
      "state_abbrev": "PA",
      "state_name": "Pennsylvania"
    },
    {
      "id": 72087,
      "name": "Loíza",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": 40115,
      "name": "Ottawa",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": 27045,
      "name": "Fillmore",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 27123,
      "name": "Ramsey",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 13099,
      "name": "Early",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 16053,
      "name": "Jerome",
      "state_abbrev": "ID",
      "state_name": "Idaho"
    },
    {
      "id": 54061,
      "name": "Monongalia",
      "state_abbrev": "WV",
      "state_name": "West Virginia"
    },
    {
      "id": 42007,
      "name": "Beaver",
      "state_abbrev": "PA",
      "state_name": "Pennsylvania"
    },
    {
      "id": 48353,
      "name": "Nolan",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48357,
      "name": "Ochiltree",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48367,
      "name": "Parker",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 54069,
      "name": "Ohio",
      "state_abbrev": "WV",
      "state_name": "West Virginia"
    },
    {
      "id": 28037,
      "name": "Franklin",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 28041,
      "name": "Greene",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 48221,
      "name": "Hood",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48227,
      "name": "Howard",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 38087,
      "name": "Slope",
      "state_abbrev": "ND",
      "state_name": "North Dakota"
    },
    {
      "id": 13089,
      "name": "DeKalb",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 12061,
      "name": "Indian River",
      "state_abbrev": "FL",
      "state_name": "Florida"
    },
    {
      "id": 72153,
      "name": "Yauco",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": 13285,
      "name": "Troup",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 17085,
      "name": "Jo Daviess",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 17089,
      "name": "Kane",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 45039,
      "name": "Fairfield",
      "state_abbrev": "SC",
      "state_name": "South Carolina"
    },
    {
      "id": 13115,
      "name": "Floyd",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 42021,
      "name": "Cambria",
      "state_abbrev": "PA",
      "state_name": "Pennsylvania"
    },
    {
      "id": 18141,
      "name": "St. Joseph",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 18149,
      "name": "Starke",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 13125,
      "name": "Glascock",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 13255,
      "name": "Spalding",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 13259,
      "name": "Stewart",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": "08081",
      "name": "Moffat",
      "state_abbrev": "CO",
      "state_name": "Colorado"
    },
    {
      "id": 72057,
      "name": "Guayama",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": 27001,
      "name": "Aitkin",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 42037,
      "name": "Columbia",
      "state_abbrev": "PA",
      "state_name": "Pennsylvania"
    },
    {
      "id": 17069,
      "name": "Hardin",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 17151,
      "name": "Pope",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 26077,
      "name": "Kalamazoo",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 42107,
      "name": "Schuylkill",
      "state_abbrev": "PA",
      "state_name": "Pennsylvania"
    },
    {
      "id": 17071,
      "name": "Henderson",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 72079,
      "name": "Lajas",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": 72081,
      "name": "Lares",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": 30037,
      "name": "Golden Valley",
      "state_abbrev": "MT",
      "state_name": "Montana"
    },
    {
      "id": 30051,
      "name": "Liberty",
      "state_abbrev": "MT",
      "state_name": "Montana"
    },
    {
      "id": 27005,
      "name": "Becker",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 38023,
      "name": "Divide",
      "state_abbrev": "ND",
      "state_name": "North Dakota"
    },
    {
      "id": 72103,
      "name": "Naguabo",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": 51173,
      "name": "Smyth",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": "01077",
      "name": "Lauderdale",
      "state_abbrev": "AL",
      "state_name": "Alabama"
    },
    {
      "id": "01083",
      "name": "Limestone",
      "state_abbrev": "AL",
      "state_name": "Alabama"
    },
    {
      "id": 13067,
      "name": "Cobb",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 13081,
      "name": "Crisp",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 37097,
      "name": "Iredell",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 37169,
      "name": "Stokes",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 51510,
      "name": "Alexandria",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 51013,
      "name": "Arlington",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 13165,
      "name": "Jenkins",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 26073,
      "name": "Isabella",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 18005,
      "name": "Bartholomew",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 18015,
      "name": "Carroll",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 72137,
      "name": "Toa Baja",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": 16071,
      "name": "Oneida",
      "state_abbrev": "ID",
      "state_name": "Idaho"
    },
    {
      "id": 17167,
      "name": "Sangamon",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 18163,
      "name": "Vanderburgh",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 18165,
      "name": "Vermillion",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 18169,
      "name": "Wabash",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 54055,
      "name": "Mercer",
      "state_abbrev": "WV",
      "state_name": "West Virginia"
    },
    {
      "id": 13299,
      "name": "Ware",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 26093,
      "name": "Livingston",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 17203,
      "name": "Woodford",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": "08085",
      "name": "Montrose",
      "state_abbrev": "CO",
      "state_name": "Colorado"
    },
    {
      "id": 12021,
      "name": "Collier",
      "state_abbrev": "FL",
      "state_name": "Florida"
    },
    {
      "id": 12051,
      "name": "Hendry",
      "state_abbrev": "FL",
      "state_name": "Florida"
    },
    {
      "id": 17147,
      "name": "Piatt",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 48097,
      "name": "Cooke",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48113,
      "name": "Dallas",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 13307,
      "name": "Webster",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 17141,
      "name": "Ogle",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 17157,
      "name": "Randolph",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 47109,
      "name": "McNairy",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 47113,
      "name": "Madison",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 48445,
      "name": "Terry",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48483,
      "name": "Wheeler",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 53039,
      "name": "Klickitat",
      "state_abbrev": "WA",
      "state_name": "Washington"
    },
    {
      "id": 54035,
      "name": "Jackson",
      "state_abbrev": "WV",
      "state_name": "West Virginia"
    },
    {
      "id": 48127,
      "name": "Dimmit",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 27133,
      "name": "Rock",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 54101,
      "name": "Webster",
      "state_abbrev": "WV",
      "state_name": "West Virginia"
    },
    {
      "id": 55005,
      "name": "Barron",
      "state_abbrev": "WI",
      "state_name": "Wisconsin"
    },
    {
      "id": 17165,
      "name": "Saline",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 72121,
      "name": "Sabana Grande",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": 18001,
      "name": "Adams",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": "01125",
      "name": "Tuscaloosa",
      "state_abbrev": "AL",
      "state_name": "Alabama"
    },
    {
      "id": "04017",
      "name": "Navajo",
      "state_abbrev": "AZ",
      "state_name": "Arizona"
    },
    {
      "id": 56019,
      "name": "Johnson",
      "state_abbrev": "WY",
      "state_name": "Wyoming"
    },
    {
      "id": 72001,
      "name": "Adjuntas",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": 55089,
      "name": "Ozaukee",
      "state_abbrev": "WI",
      "state_name": "Wisconsin"
    },
    {
      "id": 39001,
      "name": "Adams",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 28091,
      "name": "Marion",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 51045,
      "name": "Craig",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 51580,
      "name": "Covington",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 51600,
      "name": "Fairfax",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 17081,
      "name": "Jefferson",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 13035,
      "name": "Butts",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 27019,
      "name": "Carver",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 27029,
      "name": "Clearwater",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 39169,
      "name": "Wayne",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 42001,
      "name": "Adams",
      "state_abbrev": "PA",
      "state_name": "Pennsylvania"
    },
    {
      "id": 28095,
      "name": "Monroe",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 47133,
      "name": "Overton",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 49041,
      "name": "Sevier",
      "state_abbrev": "UT",
      "state_name": "Utah"
    },
    {
      "id": 26043,
      "name": "Dickinson",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 26057,
      "name": "Gratiot",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 26067,
      "name": "Ionia",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 36069,
      "name": "Ontario",
      "state_abbrev": "NY",
      "state_name": "New York"
    },
    {
      "id": 28105,
      "name": "Oktibbeha",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 31039,
      "name": "Cuming",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 13193,
      "name": "Macon",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 16001,
      "name": "Ada",
      "state_abbrev": "ID",
      "state_name": "Idaho"
    },
    {
      "id": 26087,
      "name": "Lapeer",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 26091,
      "name": "Lenawee",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 21127,
      "name": "Lawrence",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 13293,
      "name": "Upson",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 17133,
      "name": "Monroe",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 47043,
      "name": "Dickson",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 54097,
      "name": "Upshur",
      "state_abbrev": "WV",
      "state_name": "West Virginia"
    },
    {
      "id": 45023,
      "name": "Chester",
      "state_abbrev": "SC",
      "state_name": "South Carolina"
    },
    {
      "id": 50007,
      "name": "Chittenden",
      "state_abbrev": "VT",
      "state_name": "Vermont"
    },
    {
      "id": 31113,
      "name": "Logan",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 42009,
      "name": "Bedford",
      "state_abbrev": "PA",
      "state_name": "Pennsylvania"
    },
    {
      "id": 18079,
      "name": "Jennings",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 17181,
      "name": "Union",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 17191,
      "name": "Wayne",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 17195,
      "name": "Whiteside",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 42053,
      "name": "Forest",
      "state_abbrev": "PA",
      "state_name": "Pennsylvania"
    },
    {
      "id": 48149,
      "name": "Fayette",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48155,
      "name": "Foard",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48183,
      "name": "Gregg",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 50011,
      "name": "Franklin",
      "state_abbrev": "VT",
      "state_name": "Vermont"
    },
    {
      "id": 26005,
      "name": "Allegan",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 18093,
      "name": "Lawrence",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": "05047",
      "name": "Franklin",
      "state_abbrev": "AR",
      "state_name": "Arkansas"
    },
    {
      "id": 13055,
      "name": "Chattooga",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": "05137",
      "name": "Stone",
      "state_abbrev": "AR",
      "state_name": "Arkansas"
    },
    {
      "id": "08061",
      "name": "Kiowa",
      "state_abbrev": "CO",
      "state_name": "Colorado"
    },
    {
      "id": "08075",
      "name": "Logan",
      "state_abbrev": "CO",
      "state_name": "Colorado"
    },
    {
      "id": 48189,
      "name": "Hale",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 72051,
      "name": "Dorado",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": 40007,
      "name": "Beaver",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": 13321,
      "name": "Worth",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 17109,
      "name": "McDonough",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 17113,
      "name": "McLean",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 26025,
      "name": "Calhoun",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 13101,
      "name": "Echols",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 17099,
      "name": "LaSalle",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 17103,
      "name": "Lee",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 17105,
      "name": "Livingston",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 51197,
      "name": "Wythe",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 37179,
      "name": "Union",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 17123,
      "name": "Marshall",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 72083,
      "name": "Las Marías",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": 13109,
      "name": "Evans",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 48397,
      "name": "Rockwall",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 72069,
      "name": "Humacao",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": 72077,
      "name": "Juncos",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": 18155,
      "name": "Switzerland",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 37025,
      "name": "Cabarrus",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 37035,
      "name": "Catawba",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 13211,
      "name": "Morgan",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 40105,
      "name": "Nowata",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": 40111,
      "name": "Okmulgee",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": 26031,
      "name": "Cheboygan",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 54089,
      "name": "Summers",
      "state_abbrev": "WV",
      "state_name": "West Virginia"
    },
    {
      "id": 51115,
      "name": "Mathews",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 51169,
      "name": "Scott",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 17083,
      "name": "Jersey",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 39071,
      "name": "Highland",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 39079,
      "name": "Jackson",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 48267,
      "name": "Kimble",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 28117,
      "name": "Prentiss",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 28125,
      "name": "Sharkey",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 29135,
      "name": "Moniteau",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 48271,
      "name": "Kinney",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 51650,
      "name": "Hampton",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 37143,
      "name": "Perquimans",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 29221,
      "name": "Washington",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 39069,
      "name": "Henry",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 29075,
      "name": "Gentry",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 29079,
      "name": "Grundy",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 29165,
      "name": "Platte",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 17111,
      "name": "McHenry",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 30107,
      "name": "Wheatland",
      "state_abbrev": "MT",
      "state_name": "Montana"
    },
    {
      "id": 46047,
      "name": "Fall River",
      "state_abbrev": "SD",
      "state_name": "South Dakota"
    },
    {
      "id": 37191,
      "name": "Wayne",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 38001,
      "name": "Adams",
      "state_abbrev": "ND",
      "state_name": "North Dakota"
    },
    {
      "id": 29225,
      "name": "Webster",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 36085,
      "name": "Richmond",
      "state_abbrev": "NY",
      "state_name": "New York"
    },
    {
      "id": 28059,
      "name": "Jackson",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 29093,
      "name": "Iron",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 56037,
      "name": "Sweetwater",
      "state_abbrev": "WY",
      "state_name": "Wyoming"
    },
    {
      "id": 54079,
      "name": "Putnam",
      "state_abbrev": "WV",
      "state_name": "West Virginia"
    },
    {
      "id": 39089,
      "name": "Licking",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 45085,
      "name": "Sumter",
      "state_abbrev": "SC",
      "state_name": "South Carolina"
    },
    {
      "id": 46007,
      "name": "Bennett",
      "state_abbrev": "SD",
      "state_name": "South Dakota"
    },
    {
      "id": 18089,
      "name": "Lake",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 18107,
      "name": "Montgomery",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 18161,
      "name": "Union",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 19021,
      "name": "Buena Vista",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 36117,
      "name": "Wayne",
      "state_abbrev": "NY",
      "state_name": "New York"
    },
    {
      "id": 48177,
      "name": "Gonzales",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48191,
      "name": "Hall",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48219,
      "name": "Hockley",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 12005,
      "name": "Bay",
      "state_abbrev": "FL",
      "state_name": "Florida"
    },
    {
      "id": 48257,
      "name": "Kaufman",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 31021,
      "name": "Burt",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 36011,
      "name": "Cayuga",
      "state_abbrev": "NY",
      "state_name": "New York"
    },
    {
      "id": 31141,
      "name": "Platte",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 31145,
      "name": "Red Willow",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 31149,
      "name": "Rock",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 48247,
      "name": "Jim Hogg",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48021,
      "name": "Bastrop",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 29111,
      "name": "Lewis",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 53001,
      "name": "Adams",
      "state_abbrev": "WA",
      "state_name": "Washington"
    },
    {
      "id": 53063,
      "name": "Spokane",
      "state_abbrev": "WA",
      "state_name": "Washington"
    },
    {
      "id": 40153,
      "name": "Woodward",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": 17139,
      "name": "Moultrie",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 55091,
      "name": "Pepin",
      "state_abbrev": "WI",
      "state_name": "Wisconsin"
    },
    {
      "id": 37033,
      "name": "Caswell",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 37185,
      "name": "Warren",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 37187,
      "name": "Washington",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 33005,
      "name": "Cheshire",
      "state_abbrev": "NH",
      "state_name": "New Hampshire"
    },
    {
      "id": 35001,
      "name": "Bernalillo",
      "state_abbrev": "NM",
      "state_name": "New Mexico"
    },
    {
      "id": 28107,
      "name": "Panola",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 36027,
      "name": "Dutchess",
      "state_abbrev": "NY",
      "state_name": "New York"
    },
    {
      "id": 17193,
      "name": "White",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 18047,
      "name": "Franklin",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": "02185",
      "name": "North Slope",
      "state_abbrev": "AK",
      "state_name": "Alaska"
    },
    {
      "id": "05111",
      "name": "Poinsett",
      "state_abbrev": "AR",
      "state_name": "Arkansas"
    },
    {
      "id": 38015,
      "name": "Burleigh",
      "state_abbrev": "ND",
      "state_name": "North Dakota"
    },
    {
      "id": 29025,
      "name": "Caldwell",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 29091,
      "name": "Howell",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 20191,
      "name": "Sumner",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 21039,
      "name": "Carlisle",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 48197,
      "name": "Hardeman",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 31067,
      "name": "Gage",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 31077,
      "name": "Greeley",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 46065,
      "name": "Hughes",
      "state_abbrev": "SD",
      "state_name": "South Dakota"
    },
    {
      "id": 54051,
      "name": "Marshall",
      "state_abbrev": "WV",
      "state_name": "West Virginia"
    },
    {
      "id": 31097,
      "name": "Johnson",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 20145,
      "name": "Pawnee",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 26123,
      "name": "Newaygo",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 31127,
      "name": "Nemaha",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 37109,
      "name": "Lincoln",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 37197,
      "name": "Yadkin",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 31083,
      "name": "Harlan",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 31093,
      "name": "Howard",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 55071,
      "name": "Manitowoc",
      "state_abbrev": "WI",
      "state_name": "Wisconsin"
    },
    {
      "id": 42113,
      "name": "Sullivan",
      "state_abbrev": "PA",
      "state_name": "Pennsylvania"
    },
    {
      "id": 48209,
      "name": "Hays",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48233,
      "name": "Hutchinson",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48307,
      "name": "McCulloch",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 31173,
      "name": "Thurston",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 31175,
      "name": "Valley",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 35006,
      "name": "Cibola",
      "state_abbrev": "NM",
      "state_name": "New Mexico"
    },
    {
      "id": 35009,
      "name": "Curry",
      "state_abbrev": "NM",
      "state_name": "New Mexico"
    },
    {
      "id": 31131,
      "name": "Otoe",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 31139,
      "name": "Pierce",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 48123,
      "name": "DeWitt",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48125,
      "name": "Dickens",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 51680,
      "name": "Lynchburg",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 51683,
      "name": "Manassas",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 13005,
      "name": "Bacon",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 13045,
      "name": "Carroll",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 21163,
      "name": "Meade",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 21191,
      "name": "Pendleton",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 39051,
      "name": "Fulton",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 30065,
      "name": "Musselshell",
      "state_abbrev": "MT",
      "state_name": "Montana"
    },
    {
      "id": 35013,
      "name": "Doña Ana",
      "state_abbrev": "NM",
      "state_name": "New Mexico"
    },
    {
      "id": 55083,
      "name": "Oconto",
      "state_abbrev": "WI",
      "state_name": "Wisconsin"
    },
    {
      "id": 48077,
      "name": "Clay",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48081,
      "name": "Coke",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 40099,
      "name": "Murray",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": 13087,
      "name": "Decatur",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 27155,
      "name": "Traverse",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 27159,
      "name": "Wadena",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 27169,
      "name": "Winona",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 36049,
      "name": "Lewis",
      "state_abbrev": "NY",
      "state_name": "New York"
    },
    {
      "id": 39059,
      "name": "Guernsey",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": "05027",
      "name": "Columbia",
      "state_abbrev": "AR",
      "state_name": "Arkansas"
    },
    {
      "id": 48087,
      "name": "Collingsworth",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48235,
      "name": "Irion",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48243,
      "name": "Jeff Davis",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48249,
      "name": "Jim Wells",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 29181,
      "name": "Ripley",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 31013,
      "name": "Box Butte",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 48281,
      "name": "Lampasas",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48291,
      "name": "Liberty",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 41009,
      "name": "Columbia",
      "state_abbrev": "OR",
      "state_name": "Oregon"
    },
    {
      "id": 28065,
      "name": "Jefferson Davis",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 28069,
      "name": "Kemper",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 29107,
      "name": "Lafayette",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 13061,
      "name": "Clay",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 28039,
      "name": "George",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 37081,
      "name": "Guilford",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 37119,
      "name": "Mecklenburg",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 37171,
      "name": "Surry",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 28005,
      "name": "Amite",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 28113,
      "name": "Pike",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 17025,
      "name": "Clay",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 55049,
      "name": "Iowa",
      "state_abbrev": "WI",
      "state_name": "Wisconsin"
    },
    {
      "id": 48253,
      "name": "Jones",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 51550,
      "name": "Chesapeake",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 46129,
      "name": "Walworth",
      "state_abbrev": "SD",
      "state_name": "South Dakota"
    },
    {
      "id": 51065,
      "name": "Fluvanna",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 51520,
      "name": "Bristol",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 28063,
      "name": "Jefferson",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 28127,
      "name": "Simpson",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 17049,
      "name": "Effingham",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": "01007",
      "name": "Bibb",
      "state_abbrev": "AL",
      "state_name": "Alabama"
    },
    {
      "id": 30097,
      "name": "Sweet Grass",
      "state_abbrev": "MT",
      "state_name": "Montana"
    },
    {
      "id": "01019",
      "name": "Cherokee",
      "state_abbrev": "AL",
      "state_name": "Alabama"
    },
    {
      "id": 28015,
      "name": "Carroll",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 55031,
      "name": "Douglas",
      "state_abbrev": "WI",
      "state_name": "Wisconsin"
    },
    {
      "id": "01085",
      "name": "Lowndes",
      "state_abbrev": "AL",
      "state_name": "Alabama"
    },
    {
      "id": 55101,
      "name": "Racine",
      "state_abbrev": "WI",
      "state_name": "Wisconsin"
    },
    {
      "id": 28135,
      "name": "Tallahatchie",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 28145,
      "name": "Union",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 55129,
      "name": "Washburn",
      "state_abbrev": "WI",
      "state_name": "Wisconsin"
    },
    {
      "id": 46051,
      "name": "Grant",
      "state_abbrev": "SD",
      "state_name": "South Dakota"
    },
    {
      "id": 41057,
      "name": "Tillamook",
      "state_abbrev": "OR",
      "state_name": "Oregon"
    },
    {
      "id": 46045,
      "name": "Edmunds",
      "state_abbrev": "SD",
      "state_name": "South Dakota"
    },
    {
      "id": 20081,
      "name": "Haskell",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 20093,
      "name": "Kearny",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 46043,
      "name": "Douglas",
      "state_abbrev": "SD",
      "state_name": "South Dakota"
    },
    {
      "id": 29053,
      "name": "Cooper",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 30103,
      "name": "Treasure",
      "state_abbrev": "MT",
      "state_name": "Montana"
    },
    {
      "id": 35028,
      "name": "Los Alamos",
      "state_abbrev": "NM",
      "state_name": "New Mexico"
    },
    {
      "id": 28019,
      "name": "Choctaw",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 37181,
      "name": "Vance",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 28073,
      "name": "Lamar",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 46057,
      "name": "Hamlin",
      "state_abbrev": "SD",
      "state_name": "South Dakota"
    },
    {
      "id": 55135,
      "name": "Waupaca",
      "state_abbrev": "WI",
      "state_name": "Wisconsin"
    },
    {
      "id": 28025,
      "name": "Clay",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 48085,
      "name": "Collin",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48095,
      "name": "Concho",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48111,
      "name": "Dallam",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48115,
      "name": "Dawson",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 36021,
      "name": "Columbia",
      "state_abbrev": "NY",
      "state_name": "New York"
    },
    {
      "id": 30109,
      "name": "Wibaux",
      "state_abbrev": "MT",
      "state_name": "Montana"
    },
    {
      "id": 29131,
      "name": "Miller",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 28155,
      "name": "Webster",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 29039,
      "name": "Cedar",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 48047,
      "name": "Brooks",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48105,
      "name": "Crockett",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 28031,
      "name": "Covington",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 28035,
      "name": "Forrest",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": "05125",
      "name": "Saline",
      "state_abbrev": "AR",
      "state_name": "Arkansas"
    },
    {
      "id": 21143,
      "name": "Lyon",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 39081,
      "name": "Jefferson",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 37005,
      "name": "Alleghany",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 34039,
      "name": "Union",
      "state_abbrev": "NJ",
      "state_name": "New Jersey"
    },
    {
      "id": 29051,
      "name": "Cole",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 21219,
      "name": "Todd",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 22049,
      "name": "Jackson",
      "state_abbrev": "LA",
      "state_name": "Louisiana"
    },
    {
      "id": "06049",
      "name": "Modoc",
      "state_abbrev": "CA",
      "state_name": "California"
    },
    {
      "id": "06087",
      "name": "Santa Cruz",
      "state_abbrev": "CA",
      "state_name": "California"
    },
    {
      "id": 17033,
      "name": "Crawford",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 40119,
      "name": "Payne",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": 29147,
      "name": "Nodaway",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 29151,
      "name": "Osage",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 46091,
      "name": "Marshall",
      "state_abbrev": "SD",
      "state_name": "South Dakota"
    },
    {
      "id": 35027,
      "name": "Lincoln",
      "state_abbrev": "NM",
      "state_name": "New Mexico"
    },
    {
      "id": 35053,
      "name": "Socorro",
      "state_abbrev": "NM",
      "state_name": "New Mexico"
    },
    {
      "id": 39031,
      "name": "Coshocton",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 39033,
      "name": "Crawford",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 21073,
      "name": "Franklin",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 28099,
      "name": "Neshoba",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 28147,
      "name": "Walthall",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 51750,
      "name": "Radford",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 40123,
      "name": "Pontotoc",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": 27059,
      "name": "Isanti",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 37041,
      "name": "Chowan",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 39037,
      "name": "Darke",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 26105,
      "name": "Mason",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 48439,
      "name": "Tarrant",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 16055,
      "name": "Kootenai",
      "state_abbrev": "ID",
      "state_name": "Idaho"
    },
    {
      "id": 39057,
      "name": "Greene",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 39065,
      "name": "Hardin",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 29185,
      "name": "St. Clair",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 21047,
      "name": "Christian",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 21081,
      "name": "Grant",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 46103,
      "name": "Pennington",
      "state_abbrev": "SD",
      "state_name": "South Dakota"
    },
    {
      "id": 37061,
      "name": "Duplin",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": "01045",
      "name": "Dale",
      "state_abbrev": "AL",
      "state_name": "Alabama"
    },
    {
      "id": 31159,
      "name": "Seward",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 31165,
      "name": "Sioux",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 31111,
      "name": "Lincoln",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 31115,
      "name": "Loup",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 56011,
      "name": "Crook",
      "state_abbrev": "WY",
      "state_name": "Wyoming"
    },
    {
      "id": 56017,
      "name": "Hot Springs",
      "state_abbrev": "WY",
      "state_name": "Wyoming"
    },
    {
      "id": 56023,
      "name": "Lincoln",
      "state_abbrev": "WY",
      "state_name": "Wyoming"
    },
    {
      "id": 56027,
      "name": "Niobrara",
      "state_abbrev": "WY",
      "state_name": "Wyoming"
    },
    {
      "id": 12063,
      "name": "Jackson",
      "state_abbrev": "FL",
      "state_name": "Florida"
    },
    {
      "id": 27055,
      "name": "Houston",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": "01105",
      "name": "Perry",
      "state_abbrev": "AL",
      "state_name": "Alabama"
    },
    {
      "id": "02122",
      "name": "Kenai Peninsula",
      "state_abbrev": "AK",
      "state_name": "Alaska"
    },
    {
      "id": 25023,
      "name": "Plymouth",
      "state_abbrev": "MA",
      "state_name": "Massachusetts"
    },
    {
      "id": 46061,
      "name": "Hanson",
      "state_abbrev": "SD",
      "state_name": "South Dakota"
    },
    {
      "id": 47095,
      "name": "Lake",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 47099,
      "name": "Lawrence",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 56007,
      "name": "Carbon",
      "state_abbrev": "WY",
      "state_name": "Wyoming"
    },
    {
      "id": 55093,
      "name": "Pierce",
      "state_abbrev": "WI",
      "state_name": "Wisconsin"
    },
    {
      "id": 55097,
      "name": "Portage",
      "state_abbrev": "WI",
      "state_name": "Wisconsin"
    },
    {
      "id": 38039,
      "name": "Griggs",
      "state_abbrev": "ND",
      "state_name": "North Dakota"
    },
    {
      "id": 46115,
      "name": "Spink",
      "state_abbrev": "SD",
      "state_name": "South Dakota"
    },
    {
      "id": 18049,
      "name": "Fulton",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 18057,
      "name": "Hamilton",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 18077,
      "name": "Jefferson",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 18127,
      "name": "Porter",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 38029,
      "name": "Emmons",
      "state_abbrev": "ND",
      "state_name": "North Dakota"
    },
    {
      "id": 38057,
      "name": "Mercer",
      "state_abbrev": "ND",
      "state_name": "North Dakota"
    },
    {
      "id": 12101,
      "name": "Pasco",
      "state_abbrev": "FL",
      "state_name": "Florida"
    },
    {
      "id": 47179,
      "name": "Washington",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 20163,
      "name": "Rooks",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 39023,
      "name": "Clark",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 39139,
      "name": "Richland",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 30017,
      "name": "Custer",
      "state_abbrev": "MT",
      "state_name": "Montana"
    },
    {
      "id": 40129,
      "name": "Roger Mills",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": 40149,
      "name": "Washita",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": 27085,
      "name": "McLeod",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 31179,
      "name": "Wayne",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 31183,
      "name": "Wheeler",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 32017,
      "name": "Lincoln",
      "state_abbrev": "NV",
      "state_name": "Nevada"
    },
    {
      "id": 32021,
      "name": "Mineral",
      "state_abbrev": "NV",
      "state_name": "Nevada"
    },
    {
      "id": 32027,
      "name": "Pershing",
      "state_abbrev": "NV",
      "state_name": "Nevada"
    },
    {
      "id": 37003,
      "name": "Alexander",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 35005,
      "name": "Chaves",
      "state_abbrev": "NM",
      "state_name": "New Mexico"
    },
    {
      "id": 30021,
      "name": "Dawson",
      "state_abbrev": "MT",
      "state_name": "Montana"
    },
    {
      "id": 49031,
      "name": "Piute",
      "state_abbrev": "UT",
      "state_name": "Utah"
    },
    {
      "id": 18019,
      "name": "Clark",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 38043,
      "name": "Kidder",
      "state_abbrev": "ND",
      "state_name": "North Dakota"
    },
    {
      "id": 29083,
      "name": "Henry",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 39041,
      "name": "Delaware",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 46037,
      "name": "Day",
      "state_abbrev": "SD",
      "state_name": "South Dakota"
    },
    {
      "id": 47061,
      "name": "Grundy",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 47069,
      "name": "Hardeman",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 47071,
      "name": "Hardin",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 29097,
      "name": "Jasper",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 32029,
      "name": "Storey",
      "state_abbrev": "NV",
      "state_name": "Nevada"
    },
    {
      "id": 39027,
      "name": "Clinton",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 21091,
      "name": "Hancock",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 12081,
      "name": "Manatee",
      "state_abbrev": "FL",
      "state_name": "Florida"
    },
    {
      "id": 41037,
      "name": "Lake",
      "state_abbrev": "OR",
      "state_name": "Oregon"
    },
    {
      "id": 48121,
      "name": "Denton",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48133,
      "name": "Eastland",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48269,
      "name": "King",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48327,
      "name": "Menard",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 28101,
      "name": "Newton",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 29117,
      "name": "Livingston",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 29121,
      "name": "Macon",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 46027,
      "name": "Clay",
      "state_abbrev": "SD",
      "state_name": "South Dakota"
    },
    {
      "id": 17055,
      "name": "Franklin",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 16081,
      "name": "Teton",
      "state_abbrev": "ID",
      "state_name": "Idaho"
    },
    {
      "id": "05079",
      "name": "Lincoln",
      "state_abbrev": "AR",
      "state_name": "Arkansas"
    },
    {
      "id": 20201,
      "name": "Washington",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 20205,
      "name": "Wilson",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 48447,
      "name": "Throckmorton",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 29139,
      "name": "Montgomery",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 47103,
      "name": "Lincoln",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 31121,
      "name": "Merrick",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 31125,
      "name": "Nance",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 46135,
      "name": "Yankton",
      "state_abbrev": "SD",
      "state_name": "South Dakota"
    },
    {
      "id": "05127",
      "name": "Scott",
      "state_abbrev": "AR",
      "state_name": "Arkansas"
    },
    {
      "id": 13199,
      "name": "Meriwether",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 21211,
      "name": "Shelby",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 40091,
      "name": "McIntosh",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": 19037,
      "name": "Chickasaw",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 55141,
      "name": "Wood",
      "state_abbrev": "WI",
      "state_name": "Wisconsin"
    },
    {
      "id": 30079,
      "name": "Prairie",
      "state_abbrev": "MT",
      "state_name": "Montana"
    },
    {
      "id": 38019,
      "name": "Cavalier",
      "state_abbrev": "ND",
      "state_name": "North Dakota"
    },
    {
      "id": 38021,
      "name": "Dickey",
      "state_abbrev": "ND",
      "state_name": "North Dakota"
    },
    {
      "id": 47027,
      "name": "Clay",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 47047,
      "name": "Fayette",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 55027,
      "name": "Dodge",
      "state_abbrev": "WI",
      "state_name": "Wisconsin"
    },
    {
      "id": 21015,
      "name": "Boone",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 21087,
      "name": "Green",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 20167,
      "name": "Russell",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 27035,
      "name": "Crow Wing",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 18033,
      "name": "DeKalb",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 18039,
      "name": "Elkhart",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 36015,
      "name": "Chemung",
      "state_abbrev": "NY",
      "state_name": "New York"
    },
    {
      "id": 48305,
      "name": "Lynn",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 13091,
      "name": "Dodge",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 46033,
      "name": "Custer",
      "state_abbrev": "SD",
      "state_name": "South Dakota"
    },
    {
      "id": 36109,
      "name": "Tompkins",
      "state_abbrev": "NY",
      "state_name": "New York"
    },
    {
      "id": 40085,
      "name": "Love",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": 37071,
      "name": "Gaston",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 21019,
      "name": "Boyd",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 12011,
      "name": "Broward",
      "state_abbrev": "FL",
      "state_name": "Florida"
    },
    {
      "id": 13119,
      "name": "Franklin",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 19149,
      "name": "Plymouth",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 47023,
      "name": "Chester",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": "08007",
      "name": "Archuleta",
      "state_abbrev": "CO",
      "state_name": "Colorado"
    },
    {
      "id": 38083,
      "name": "Sheridan",
      "state_abbrev": "ND",
      "state_name": "North Dakota"
    },
    {
      "id": 20127,
      "name": "Morris",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 20129,
      "name": "Morton",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 20133,
      "name": "Neosho",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 17013,
      "name": "Calhoun",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 12015,
      "name": "Charlotte",
      "state_abbrev": "FL",
      "state_name": "Florida"
    },
    {
      "id": 27017,
      "name": "Carlton",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 31163,
      "name": "Sherman",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 29141,
      "name": "Morgan",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 29145,
      "name": "Newton",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 46031,
      "name": "Corson",
      "state_abbrev": "SD",
      "state_name": "South Dakota"
    },
    {
      "id": 36039,
      "name": "Greene",
      "state_abbrev": "NY",
      "state_name": "New York"
    },
    {
      "id": 47083,
      "name": "Houston",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 55133,
      "name": "Waukesha",
      "state_abbrev": "WI",
      "state_name": "Wisconsin"
    },
    {
      "id": 72015,
      "name": "Arroyo",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": 21009,
      "name": "Barren",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 72123,
      "name": "Salinas",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": 29205,
      "name": "Shelby",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 29211,
      "name": "Sullivan",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 48331,
      "name": "Milam",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48363,
      "name": "Palo Pinto",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 36041,
      "name": "Hamilton",
      "state_abbrev": "NY",
      "state_name": "New York"
    },
    {
      "id": 36093,
      "name": "Schenectady",
      "state_abbrev": "NY",
      "state_name": "New York"
    },
    {
      "id": 28077,
      "name": "Lawrence",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 22089,
      "name": "St. Charles",
      "state_abbrev": "LA",
      "state_name": "Louisiana"
    },
    {
      "id": 22093,
      "name": "St. James",
      "state_abbrev": "LA",
      "state_name": "Louisiana"
    },
    {
      "id": 20187,
      "name": "Stanton",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 23009,
      "name": "Hancock",
      "state_abbrev": "ME",
      "state_name": "Maine"
    },
    {
      "id": 27049,
      "name": "Goodhue",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 13129,
      "name": "Gordon",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 29007,
      "name": "Audrain",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 42015,
      "name": "Bradford",
      "state_abbrev": "PA",
      "state_name": "Pennsylvania"
    },
    {
      "id": 46029,
      "name": "Codington",
      "state_abbrev": "SD",
      "state_name": "South Dakota"
    },
    {
      "id": 28097,
      "name": "Montgomery",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 38009,
      "name": "Bottineau",
      "state_abbrev": "ND",
      "state_name": "North Dakota"
    },
    {
      "id": 38011,
      "name": "Bowman",
      "state_abbrev": "ND",
      "state_name": "North Dakota"
    },
    {
      "id": 29215,
      "name": "Texas",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 29219,
      "name": "Warren",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 18045,
      "name": "Fountain",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 27065,
      "name": "Kanabec",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 21035,
      "name": "Calloway",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 21053,
      "name": "Clinton",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 28111,
      "name": "Perry",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 29045,
      "name": "Clark",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 29073,
      "name": "Gasconade",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 54077,
      "name": "Preston",
      "state_abbrev": "WV",
      "state_name": "West Virginia"
    },
    {
      "id": 35041,
      "name": "Roosevelt",
      "state_abbrev": "NM",
      "state_name": "New Mexico"
    },
    {
      "id": 44005,
      "name": "Newport",
      "state_abbrev": "RI",
      "state_name": "Rhode Island"
    },
    {
      "id": 37073,
      "name": "Gates",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 38013,
      "name": "Burke",
      "state_abbrev": "ND",
      "state_name": "North Dakota"
    },
    {
      "id": 19051,
      "name": "Davis",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": "05035",
      "name": "Crittenden",
      "state_abbrev": "AR",
      "state_name": "Arkansas"
    },
    {
      "id": 72003,
      "name": "Aguada",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": 72107,
      "name": "Orocovis",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": 72125,
      "name": "San Germán",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": 51760,
      "name": "Richmond",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 53023,
      "name": "Garfield",
      "state_abbrev": "WA",
      "state_name": "Washington"
    },
    {
      "id": 20003,
      "name": "Anderson",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 20047,
      "name": "Edwards",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 20119,
      "name": "Meade",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 20157,
      "name": "Republic",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 50015,
      "name": "Lamoille",
      "state_abbrev": "VT",
      "state_name": "Vermont"
    },
    {
      "id": 40059,
      "name": "Harper",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": 72043,
      "name": "Coamo",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": 31063,
      "name": "Frontier",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 41029,
      "name": "Jackson",
      "state_abbrev": "OR",
      "state_name": "Oregon"
    },
    {
      "id": 16011,
      "name": "Bingham",
      "state_abbrev": "ID",
      "state_name": "Idaho"
    },
    {
      "id": 72029,
      "name": "Canóvanas",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": 38069,
      "name": "Pierce",
      "state_abbrev": "ND",
      "state_name": "North Dakota"
    },
    {
      "id": 39005,
      "name": "Ashland",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 17095,
      "name": "Knox",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 21157,
      "name": "Marshall",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 40139,
      "name": "Texas",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": 48137,
      "name": "Edwards",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48217,
      "name": "Hill",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48299,
      "name": "Llano",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 18011,
      "name": "Boone",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 20121,
      "name": "Miami",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 31143,
      "name": "Polk",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 32005,
      "name": "Douglas",
      "state_abbrev": "NV",
      "state_name": "Nevada"
    },
    {
      "id": 31087,
      "name": "Hitchcock",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 31117,
      "name": "McPherson",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 42109,
      "name": "Snyder",
      "state_abbrev": "PA",
      "state_name": "Pennsylvania"
    },
    {
      "id": 23005,
      "name": "Cumberland",
      "state_abbrev": "ME",
      "state_name": "Maine"
    },
    {
      "id": 17035,
      "name": "Cumberland",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 17039,
      "name": "De Witt",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 20041,
      "name": "Dickinson",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 20137,
      "name": "Norton",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 42025,
      "name": "Carbon",
      "state_abbrev": "PA",
      "state_name": "Pennsylvania"
    },
    {
      "id": 20179,
      "name": "Sheridan",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 26151,
      "name": "Sanilac",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 17079,
      "name": "Jasper",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 51021,
      "name": "Bland",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 40109,
      "name": "Oklahoma",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": 40083,
      "name": "Logan",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": 40137,
      "name": "Stephens",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": 29123,
      "name": "Madison",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 29187,
      "name": "St. Francois",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 72119,
      "name": "Río Grande",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": 41041,
      "name": "Lincoln",
      "state_abbrev": "OR",
      "state_name": "Oregon"
    },
    {
      "id": 17155,
      "name": "Putnam",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 18023,
      "name": "Clinton",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 18063,
      "name": "Hendricks",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 18145,
      "name": "Shelby",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 26161,
      "name": "Washtenaw",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 38041,
      "name": "Hettinger",
      "state_abbrev": "ND",
      "state_name": "North Dakota"
    },
    {
      "id": 40063,
      "name": "Hughes",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": 35023,
      "name": "Hidalgo",
      "state_abbrev": "NM",
      "state_name": "New Mexico"
    },
    {
      "id": 37157,
      "name": "Rockingham",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 37195,
      "name": "Wilson",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 72027,
      "name": "Camuy",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": 31181,
      "name": "Webster",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 37151,
      "name": "Randolph",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 17101,
      "name": "Lawrence",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 12003,
      "name": "Baker",
      "state_abbrev": "FL",
      "state_name": "Florida"
    },
    {
      "id": 53003,
      "name": "Asotin",
      "state_abbrev": "WA",
      "state_name": "Washington"
    },
    {
      "id": 19011,
      "name": "Benton",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 31007,
      "name": "Banner",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 40025,
      "name": "Cimarron",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": 40147,
      "name": "Washington",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": 41053,
      "name": "Polk",
      "state_abbrev": "OR",
      "state_name": "Oregon"
    },
    {
      "id": 51840,
      "name": "Winchester",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 13175,
      "name": "Laurens",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": "08123",
      "name": "Weld",
      "state_abbrev": "CO",
      "state_name": "Colorado"
    },
    {
      "id": 27009,
      "name": "Benton",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 27057,
      "name": "Hubbard",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 26069,
      "name": "Iosco",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 18135,
      "name": "Randolph",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 31027,
      "name": "Cedar",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 31043,
      "name": "Dakota",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 55045,
      "name": "Green",
      "state_abbrev": "WI",
      "state_name": "Wisconsin"
    },
    {
      "id": 46025,
      "name": "Clark",
      "state_abbrev": "SD",
      "state_name": "South Dakota"
    },
    {
      "id": 17117,
      "name": "Macoupin",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 56009,
      "name": "Converse",
      "state_abbrev": "WY",
      "state_name": "Wyoming"
    },
    {
      "id": 72049,
      "name": "Culebra",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": 72095,
      "name": "Maunabo",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": 42077,
      "name": "Lehigh",
      "state_abbrev": "PA",
      "state_name": "Pennsylvania"
    },
    {
      "id": 49053,
      "name": "Washington",
      "state_abbrev": "UT",
      "state_name": "Utah"
    },
    {
      "id": 18153,
      "name": "Sullivan",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 19123,
      "name": "Mahaska",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 21117,
      "name": "Kenton",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 29186,
      "name": "Ste. Genevieve",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 72009,
      "name": "Aibonito",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": 31099,
      "name": "Kearney",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 21105,
      "name": "Hickman",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 13247,
      "name": "Rockdale",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 17077,
      "name": "Jackson",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 18183,
      "name": "Whitley",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 27007,
      "name": "Beltrami",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 19015,
      "name": "Boone",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 31045,
      "name": "Dawes",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 29229,
      "name": "Wright",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 30041,
      "name": "Hill",
      "state_abbrev": "MT",
      "state_name": "Montana"
    },
    {
      "id": 31005,
      "name": "Arthur",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 12043,
      "name": "Glades",
      "state_abbrev": "FL",
      "state_name": "Florida"
    },
    {
      "id": 39015,
      "name": "Brown",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 35025,
      "name": "Lea",
      "state_abbrev": "NM",
      "state_name": "New Mexico"
    },
    {
      "id": 38031,
      "name": "Foster",
      "state_abbrev": "ND",
      "state_name": "North Dakota"
    },
    {
      "id": 13147,
      "name": "Hart",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": "05097",
      "name": "Montgomery",
      "state_abbrev": "AR",
      "state_name": "Arkansas"
    },
    {
      "id": "06105",
      "name": "Trinity",
      "state_abbrev": "CA",
      "state_name": "California"
    },
    {
      "id": "08107",
      "name": "Routt",
      "state_abbrev": "CO",
      "state_name": "Colorado"
    },
    {
      "id": 12103,
      "name": "Pinellas",
      "state_abbrev": "FL",
      "state_name": "Florida"
    },
    {
      "id": 13017,
      "name": "Ben Hill",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 51183,
      "name": "Sussex",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 13071,
      "name": "Colquitt",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 41063,
      "name": "Wallowa",
      "state_abbrev": "OR",
      "state_name": "Oregon"
    },
    {
      "id": 39029,
      "name": "Columbiana",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 48027,
      "name": "Bell",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 19065,
      "name": "Fayette",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 19093,
      "name": "Ida",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 13033,
      "name": "Burke",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 48375,
      "name": "Potter",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48461,
      "name": "Upton",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48495,
      "name": "Winkler",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 19119,
      "name": "Lyon",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 17087,
      "name": "Johnson",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 51590,
      "name": "Danville",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 27079,
      "name": "Le Sueur",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 42087,
      "name": "Mifflin",
      "state_abbrev": "PA",
      "state_name": "Pennsylvania"
    },
    {
      "id": 20007,
      "name": "Barber",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 20117,
      "name": "Marshall",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 19121,
      "name": "Madison",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 19151,
      "name": "Pocahontas",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 72067,
      "name": "Hormigueros",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": 19179,
      "name": "Wapello",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 27039,
      "name": "Dodge",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 27063,
      "name": "Jackson",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 48415,
      "name": "Scurry",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 27111,
      "name": "Otter Tail",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 27165,
      "name": "Watonwan",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 72091,
      "name": "Manatí",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": 19107,
      "name": "Keokuk",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 20207,
      "name": "Woodson",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 21061,
      "name": "Edmonson",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 38079,
      "name": "Rolette",
      "state_abbrev": "ND",
      "state_name": "North Dakota"
    },
    {
      "id": 48193,
      "name": "Hamilton",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48433,
      "name": "Stonewall",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48505,
      "name": "Zapata",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 13297,
      "name": "Walton",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 15005,
      "name": "Kalawao",
      "state_abbrev": "HI",
      "state_name": "Hawaii"
    },
    {
      "id": 19033,
      "name": "Cerro Gordo",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 17201,
      "name": "Winnebago",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 19059,
      "name": "Dickinson",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 19183,
      "name": "Washington",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 20075,
      "name": "Hamilton",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": "01011",
      "name": "Bullock",
      "state_abbrev": "AL",
      "state_name": "Alabama"
    },
    {
      "id": 39113,
      "name": "Montgomery",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 18167,
      "name": "Vigo",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 37067,
      "name": "Forsyth",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 19063,
      "name": "Emmet",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 27115,
      "name": "Pine",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 13231,
      "name": "Pike",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 26021,
      "name": "Berrien",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 39141,
      "name": "Ross",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 51820,
      "name": "Waynesboro",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 48059,
      "name": "Callahan",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 55033,
      "name": "Dunn",
      "state_abbrev": "WI",
      "state_name": "Wisconsin"
    },
    {
      "id": 72139,
      "name": "Trujillo Alto",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": 28045,
      "name": "Hancock",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 27143,
      "name": "Sibley",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 20039,
      "name": "Decatur",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 27105,
      "name": "Nobles",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 72073,
      "name": "Jayuya",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": 19177,
      "name": "Van Buren",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 20011,
      "name": "Bourbon",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 55087,
      "name": "Outagamie",
      "state_abbrev": "WI",
      "state_name": "Wisconsin"
    },
    {
      "id": 39063,
      "name": "Hancock",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 39149,
      "name": "Shelby",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 28079,
      "name": "Leake",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 29155,
      "name": "Pemiscot",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 54053,
      "name": "Mason",
      "state_abbrev": "WV",
      "state_name": "West Virginia"
    },
    {
      "id": 27149,
      "name": "Stevens",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 36023,
      "name": "Cortland",
      "state_abbrev": "NY",
      "state_name": "New York"
    },
    {
      "id": "01003",
      "name": "Baldwin",
      "state_abbrev": "AL",
      "state_name": "Alabama"
    },
    {
      "id": "01109",
      "name": "Pike",
      "state_abbrev": "AL",
      "state_name": "Alabama"
    },
    {
      "id": "04015",
      "name": "Mohave",
      "state_abbrev": "AZ",
      "state_name": "Arizona"
    },
    {
      "id": "05091",
      "name": "Miller",
      "state_abbrev": "AR",
      "state_name": "Arkansas"
    },
    {
      "id": 72063,
      "name": "Gurabo",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": 55017,
      "name": "Chippewa",
      "state_abbrev": "WI",
      "state_name": "Wisconsin"
    },
    {
      "id": 55019,
      "name": "Clark",
      "state_abbrev": "WI",
      "state_name": "Wisconsin"
    },
    {
      "id": 38047,
      "name": "Logan",
      "state_abbrev": "ND",
      "state_name": "North Dakota"
    },
    {
      "id": 38049,
      "name": "McHenry",
      "state_abbrev": "ND",
      "state_name": "North Dakota"
    },
    {
      "id": 47171,
      "name": "Unicoi",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 26059,
      "name": "Hillsdale",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 28139,
      "name": "Tippah",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 26029,
      "name": "Charlevoix",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 26111,
      "name": "Midland",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 35059,
      "name": "Union",
      "state_abbrev": "NM",
      "state_name": "New Mexico"
    },
    {
      "id": 39085,
      "name": "Lake",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 35031,
      "name": "McKinley",
      "state_abbrev": "NM",
      "state_name": "New Mexico"
    },
    {
      "id": 41071,
      "name": "Yamhill",
      "state_abbrev": "OR",
      "state_name": "Oregon"
    },
    {
      "id": 27025,
      "name": "Chisago",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 12085,
      "name": "Martin",
      "state_abbrev": "FL",
      "state_name": "Florida"
    },
    {
      "id": 40029,
      "name": "Coal",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": 28009,
      "name": "Benton",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 33011,
      "name": "Hillsborough",
      "state_abbrev": "NH",
      "state_name": "New Hampshire"
    },
    {
      "id": 36001,
      "name": "Albany",
      "state_abbrev": "NY",
      "state_name": "New York"
    },
    {
      "id": 23029,
      "name": "Washington",
      "state_abbrev": "ME",
      "state_name": "Maine"
    },
    {
      "id": 50023,
      "name": "Washington",
      "state_abbrev": "VT",
      "state_name": "Vermont"
    },
    {
      "id": "01127",
      "name": "Walker",
      "state_abbrev": "AL",
      "state_name": "Alabama"
    },
    {
      "id": "02164",
      "name": "Lake and Peninsula",
      "state_abbrev": "AK",
      "state_name": "Alaska"
    },
    {
      "id": 29059,
      "name": "Dallas",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 29063,
      "name": "DeKalb",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 36007,
      "name": "Broome",
      "state_abbrev": "NY",
      "state_name": "New York"
    },
    {
      "id": 28131,
      "name": "Stone",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 29049,
      "name": "Clinton",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 72145,
      "name": "Vega Baja",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": 48099,
      "name": "Coryell",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 22027,
      "name": "Claiborne",
      "state_abbrev": "LA",
      "state_name": "Louisiana"
    },
    {
      "id": 24037,
      "name": "St. Mary's",
      "state_abbrev": "MD",
      "state_name": "Maryland"
    },
    {
      "id": 26047,
      "name": "Emmet",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 29217,
      "name": "Vernon",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": "04019",
      "name": "Pima",
      "state_abbrev": "AZ",
      "state_name": "Arizona"
    },
    {
      "id": 56043,
      "name": "Washakie",
      "state_abbrev": "WY",
      "state_name": "Wyoming"
    },
    {
      "id": 20005,
      "name": "Atchison",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 46013,
      "name": "Brown",
      "state_abbrev": "SD",
      "state_name": "South Dakota"
    },
    {
      "id": 46017,
      "name": "Buffalo",
      "state_abbrev": "SD",
      "state_name": "South Dakota"
    },
    {
      "id": 31049,
      "name": "Deuel",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 55109,
      "name": "St. Croix",
      "state_abbrev": "WI",
      "state_name": "Wisconsin"
    },
    {
      "id": 55137,
      "name": "Waushara",
      "state_abbrev": "WI",
      "state_name": "Wisconsin"
    },
    {
      "id": 56025,
      "name": "Natrona",
      "state_abbrev": "WY",
      "state_name": "Wyoming"
    },
    {
      "id": 40049,
      "name": "Garvin",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": 72055,
      "name": "Guánica",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": 51800,
      "name": "Suffolk",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 17045,
      "name": "Edgar",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 50001,
      "name": "Addison",
      "state_abbrev": "VT",
      "state_name": "Vermont"
    },
    {
      "id": 47007,
      "name": "Bledsoe",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 26113,
      "name": "Missaukee",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 26129,
      "name": "Ogemaw",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 36037,
      "name": "Genesee",
      "state_abbrev": "NY",
      "state_name": "New York"
    },
    {
      "id": 50013,
      "name": "Grand Isle",
      "state_abbrev": "VT",
      "state_name": "Vermont"
    },
    {
      "id": 38073,
      "name": "Ransom",
      "state_abbrev": "ND",
      "state_name": "North Dakota"
    },
    {
      "id": 46069,
      "name": "Hyde",
      "state_abbrev": "SD",
      "state_name": "South Dakota"
    },
    {
      "id": 56021,
      "name": "Laramie",
      "state_abbrev": "WY",
      "state_name": "Wyoming"
    },
    {
      "id": 31185,
      "name": "York",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 33019,
      "name": "Sullivan",
      "state_abbrev": "NH",
      "state_name": "New Hampshire"
    },
    {
      "id": 19193,
      "name": "Woodbury",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 55115,
      "name": "Shawano",
      "state_abbrev": "WI",
      "state_name": "Wisconsin"
    },
    {
      "id": 51035,
      "name": "Carroll",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": "01031",
      "name": "Coffee",
      "state_abbrev": "AL",
      "state_name": "Alabama"
    },
    {
      "id": "01123",
      "name": "Tallapoosa",
      "state_abbrev": "AL",
      "state_name": "Alabama"
    },
    {
      "id": 35049,
      "name": "Santa Fe",
      "state_abbrev": "NM",
      "state_name": "New Mexico"
    },
    {
      "id": 47011,
      "name": "Bradley",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 31107,
      "name": "Knox",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 21233,
      "name": "Webster",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 53069,
      "name": "Wahkiakum",
      "state_abbrev": "WA",
      "state_name": "Washington"
    },
    {
      "id": 55095,
      "name": "Polk",
      "state_abbrev": "WI",
      "state_name": "Wisconsin"
    },
    {
      "id": 55125,
      "name": "Vilas",
      "state_abbrev": "WI",
      "state_name": "Wisconsin"
    },
    {
      "id": 41013,
      "name": "Crook",
      "state_abbrev": "OR",
      "state_name": "Oregon"
    },
    {
      "id": 36005,
      "name": "Bronx",
      "state_abbrev": "NY",
      "state_name": "New York"
    },
    {
      "id": 36055,
      "name": "Monroe",
      "state_abbrev": "NY",
      "state_name": "New York"
    },
    {
      "id": 48319,
      "name": "Mason",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48359,
      "name": "Oldham",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48425,
      "name": "Somervell",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 51670,
      "name": "Hopewell",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 54029,
      "name": "Hancock",
      "state_abbrev": "WV",
      "state_name": "West Virginia"
    },
    {
      "id": 28119,
      "name": "Quitman",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 55053,
      "name": "Jackson",
      "state_abbrev": "WI",
      "state_name": "Wisconsin"
    },
    {
      "id": 72109,
      "name": "Patillas",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": 19039,
      "name": "Clarke",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 12091,
      "name": "Okaloosa",
      "state_abbrev": "FL",
      "state_name": "Florida"
    },
    {
      "id": 36035,
      "name": "Fulton",
      "state_abbrev": "NY",
      "state_name": "New York"
    },
    {
      "id": 39109,
      "name": "Miami",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 31085,
      "name": "Hayes",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 31147,
      "name": "Richardson",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 51530,
      "name": "Buena Vista",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 28057,
      "name": "Itawamba",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 29037,
      "name": "Cass",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 47051,
      "name": "Franklin",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 16017,
      "name": "Bonner",
      "state_abbrev": "ID",
      "state_name": "Idaho"
    },
    {
      "id": 20099,
      "name": "Labette",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 31017,
      "name": "Brown",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 40015,
      "name": "Caddo",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": 19091,
      "name": "Humboldt",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 29209,
      "name": "Stone",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 28081,
      "name": "Lee",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 55047,
      "name": "Green Lake",
      "state_abbrev": "WI",
      "state_name": "Wisconsin"
    },
    {
      "id": 55055,
      "name": "Jefferson",
      "state_abbrev": "WI",
      "state_name": "Wisconsin"
    },
    {
      "id": "05087",
      "name": "Madison",
      "state_abbrev": "AR",
      "state_name": "Arkansas"
    },
    {
      "id": "08087",
      "name": "Morgan",
      "state_abbrev": "CO",
      "state_name": "Colorado"
    },
    {
      "id": 39093,
      "name": "Lorain",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 46053,
      "name": "Gregory",
      "state_abbrev": "SD",
      "state_name": "South Dakota"
    },
    {
      "id": 46102,
      "name": "Oglala Lakota",
      "state_abbrev": "SD",
      "state_name": "South Dakota"
    },
    {
      "id": 48393,
      "name": "Roberts",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 36089,
      "name": "St. Lawrence",
      "state_abbrev": "NY",
      "state_name": "New York"
    },
    {
      "id": 38025,
      "name": "Dunn",
      "state_abbrev": "ND",
      "state_name": "North Dakota"
    },
    {
      "id": 35035,
      "name": "Otero",
      "state_abbrev": "NM",
      "state_name": "New Mexico"
    },
    {
      "id": "06029",
      "name": "Kern",
      "state_abbrev": "CA",
      "state_name": "California"
    },
    {
      "id": "06071",
      "name": "San Bernardino",
      "state_abbrev": "CA",
      "state_name": "California"
    },
    {
      "id": "08063",
      "name": "Kit Carson",
      "state_abbrev": "CO",
      "state_name": "Colorado"
    },
    {
      "id": 54009,
      "name": "Brooke",
      "state_abbrev": "WV",
      "state_name": "West Virginia"
    },
    {
      "id": 31135,
      "name": "Perkins",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 17001,
      "name": "Adams",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 51071,
      "name": "Giles",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 32019,
      "name": "Lyon",
      "state_abbrev": "NV",
      "state_name": "Nevada"
    },
    {
      "id": 48013,
      "name": "Atascosa",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48023,
      "name": "Baylor",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48033,
      "name": "Borden",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48071,
      "name": "Chambers",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 55041,
      "name": "Forest",
      "state_abbrev": "WI",
      "state_name": "Wisconsin"
    },
    {
      "id": 39045,
      "name": "Fairfield",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": "05033",
      "name": "Crawford",
      "state_abbrev": "AR",
      "state_name": "Arkansas"
    },
    {
      "id": 29163,
      "name": "Pike",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 36083,
      "name": "Rensselaer",
      "state_abbrev": "NY",
      "state_name": "New York"
    },
    {
      "id": 72075,
      "name": "Juana Díaz",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": 72071,
      "name": "Isabela",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": 54105,
      "name": "Wirt",
      "state_abbrev": "WV",
      "state_name": "West Virginia"
    },
    {
      "id": 48019,
      "name": "Bandera",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 51770,
      "name": "Roanoke",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 51775,
      "name": "Salem",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 13275,
      "name": "Thomas",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 72085,
      "name": "Las Piedras",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": 31079,
      "name": "Hall",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 72117,
      "name": "Rincón",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": "08045",
      "name": "Garfield",
      "state_abbrev": "CO",
      "state_name": "Colorado"
    },
    {
      "id": "02198",
      "name": "Prince of Wales-Hyder",
      "state_abbrev": "AK",
      "state_name": "Alaska"
    },
    {
      "id": 13227,
      "name": "Pickens",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 48181,
      "name": "Grayson",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48195,
      "name": "Hansford",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48211,
      "name": "Hemphill",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48295,
      "name": "Lipscomb",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 51620,
      "name": "Franklin",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 55103,
      "name": "Richland",
      "state_abbrev": "WI",
      "state_name": "Wisconsin"
    },
    {
      "id": 55065,
      "name": "Lafayette",
      "state_abbrev": "WI",
      "state_name": "Wisconsin"
    },
    {
      "id": 13281,
      "name": "Towns",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 47137,
      "name": "Pickett",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 46083,
      "name": "Lincoln",
      "state_abbrev": "SD",
      "state_name": "South Dakota"
    },
    {
      "id": 31129,
      "name": "Nuckolls",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 31157,
      "name": "Scotts Bluff",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 48297,
      "name": "Live Oak",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 46081,
      "name": "Lawrence",
      "state_abbrev": "SD",
      "state_name": "South Dakota"
    },
    {
      "id": 31001,
      "name": "Adams",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 55078,
      "name": "Menominee",
      "state_abbrev": "WI",
      "state_name": "Wisconsin"
    },
    {
      "id": 51710,
      "name": "Norfolk",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 51735,
      "name": "Poquoson",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 29169,
      "name": "Pulaski",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 20103,
      "name": "Leavenworth",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 51660,
      "name": "Harrisonburg",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 38063,
      "name": "Nelson",
      "state_abbrev": "ND",
      "state_name": "North Dakota"
    },
    {
      "id": 38081,
      "name": "Sargent",
      "state_abbrev": "ND",
      "state_name": "North Dakota"
    },
    {
      "id": 31019,
      "name": "Buffalo",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 31011,
      "name": "Boone",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 31015,
      "name": "Boyd",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 29175,
      "name": "Randolph",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 30025,
      "name": "Fallon",
      "state_abbrev": "MT",
      "state_name": "Montana"
    },
    {
      "id": 48101,
      "name": "Cottle",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48259,
      "name": "Kendall",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48463,
      "name": "Uvalde",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 72129,
      "name": "San Lorenzo",
      "state_abbrev": "PR",
      "state_name": "Puerto Rico"
    },
    {
      "id": 19145,
      "name": "Page",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 31101,
      "name": "Keith",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 55013,
      "name": "Burnett",
      "state_abbrev": "WI",
      "state_name": "Wisconsin"
    },
    {
      "id": 36003,
      "name": "Allegany",
      "state_abbrev": "NY",
      "state_name": "New York"
    },
    {
      "id": 29065,
      "name": "Dent",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 55009,
      "name": "Brown",
      "state_abbrev": "WI",
      "state_name": "Wisconsin"
    },
    {
      "id": 47017,
      "name": "Carroll",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 51640,
      "name": "Galax",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 55061,
      "name": "Kewaunee",
      "state_abbrev": "WI",
      "state_name": "Wisconsin"
    },
    {
      "id": 20197,
      "name": "Wabaunsee",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 51700,
      "name": "Newport News",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 55063,
      "name": "La Crosse",
      "state_abbrev": "WI",
      "state_name": "Wisconsin"
    },
    {
      "id": 50021,
      "name": "Rutland",
      "state_abbrev": "VT",
      "state_name": "Vermont"
    },
    {
      "id": 46019,
      "name": "Butte",
      "state_abbrev": "SD",
      "state_name": "South Dakota"
    },
    {
      "id": 48325,
      "name": "Medina",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48329,
      "name": "Midland",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48335,
      "name": "Mitchell",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 51077,
      "name": "Grayson",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": "08025",
      "name": "Crowley",
      "state_abbrev": "CO",
      "state_name": "Colorado"
    },
    {
      "id": 55131,
      "name": "Washington",
      "state_abbrev": "WI",
      "state_name": "Wisconsin"
    },
    {
      "id": 34017,
      "name": "Hudson",
      "state_abbrev": "NJ",
      "state_name": "New Jersey"
    },
    {
      "id": 17037,
      "name": "DeKalb",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 29153,
      "name": "Ozark",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 30011,
      "name": "Carter",
      "state_abbrev": "MT",
      "state_name": "Montana"
    },
    {
      "id": 31069,
      "name": "Garden",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 12017,
      "name": "Citrus",
      "state_abbrev": "FL",
      "state_name": "Florida"
    },
    {
      "id": 20161,
      "name": "Riley",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 21059,
      "name": "Daviess",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 39173,
      "name": "Wood",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 17093,
      "name": "Kendall",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 17127,
      "name": "Massac",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 39087,
      "name": "Lawrence",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 35043,
      "name": "Sandoval",
      "state_abbrev": "NM",
      "state_name": "New Mexico"
    },
    {
      "id": 37045,
      "name": "Cleveland",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 55035,
      "name": "Eau Claire",
      "state_abbrev": "WI",
      "state_name": "Wisconsin"
    },
    {
      "id": 55099,
      "name": "Price",
      "state_abbrev": "WI",
      "state_name": "Wisconsin"
    },
    {
      "id": 31057,
      "name": "Dundy",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 31075,
      "name": "Grant",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 31105,
      "name": "Kimball",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 28061,
      "name": "Jasper",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 17119,
      "name": "Madison",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 21121,
      "name": "Knox",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 21177,
      "name": "Muhlenberg",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 54103,
      "name": "Wetzel",
      "state_abbrev": "WV",
      "state_name": "West Virginia"
    },
    {
      "id": 55107,
      "name": "Rusk",
      "state_abbrev": "WI",
      "state_name": "Wisconsin"
    },
    {
      "id": 48443,
      "name": "Terrell",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48491,
      "name": "Williamson",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 51009,
      "name": "Amherst",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 51047,
      "name": "Culpeper",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 39145,
      "name": "Scioto",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 40003,
      "name": "Alfalfa",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": 46119,
      "name": "Sully",
      "state_abbrev": "SD",
      "state_name": "South Dakota"
    },
    {
      "id": 19031,
      "name": "Cedar",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 20019,
      "name": "Chautauqua",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 20079,
      "name": "Harvey",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 20107,
      "name": "Linn",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 46101,
      "name": "Moody",
      "state_abbrev": "SD",
      "state_name": "South Dakota"
    },
    {
      "id": 55117,
      "name": "Sheboygan",
      "state_abbrev": "WI",
      "state_name": "Wisconsin"
    },
    {
      "id": 55139,
      "name": "Winnebago",
      "state_abbrev": "WI",
      "state_name": "Wisconsin"
    },
    {
      "id": "05081",
      "name": "Little River",
      "state_abbrev": "AR",
      "state_name": "Arkansas"
    },
    {
      "id": 12083,
      "name": "Marion",
      "state_abbrev": "FL",
      "state_name": "Florida"
    },
    {
      "id": 13127,
      "name": "Glynn",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 29115,
      "name": "Linn",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 51119,
      "name": "Middlesex",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 51139,
      "name": "Page",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 51730,
      "name": "Petersburg",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 37129,
      "name": "New Hanover",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 37167,
      "name": "Stanly",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 38077,
      "name": "Richland",
      "state_abbrev": "ND",
      "state_name": "North Dakota"
    },
    {
      "id": 45079,
      "name": "Richland",
      "state_abbrev": "SC",
      "state_name": "South Carolina"
    },
    {
      "id": "06017",
      "name": "El Dorado",
      "state_abbrev": "CA",
      "state_name": "California"
    },
    {
      "id": 12125,
      "name": "Union",
      "state_abbrev": "FL",
      "state_name": "Florida"
    },
    {
      "id": 19085,
      "name": "Harrison",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 47015,
      "name": "Cannon",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 48159,
      "name": "Franklin",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 32007,
      "name": "Elko",
      "state_abbrev": "NV",
      "state_name": "Nevada"
    },
    {
      "id": 17163,
      "name": "St. Clair",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 30111,
      "name": "Yellowstone",
      "state_abbrev": "MT",
      "state_name": "Montana"
    },
    {
      "id": 31025,
      "name": "Cass",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 22019,
      "name": "Calcasieu",
      "state_abbrev": "LA",
      "state_name": "Louisiana"
    },
    {
      "id": 47141,
      "name": "Putnam",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 47175,
      "name": "Van Buren",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 48039,
      "name": "Brazoria",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48223,
      "name": "Hopkins",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48321,
      "name": "Matagorda",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48387,
      "name": "Red River",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 46137,
      "name": "Ziebach",
      "state_abbrev": "SD",
      "state_name": "South Dakota"
    },
    {
      "id": 47059,
      "name": "Greene",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": "01099",
      "name": "Monroe",
      "state_abbrev": "AL",
      "state_name": "Alabama"
    },
    {
      "id": 42129,
      "name": "Westmoreland",
      "state_abbrev": "PA",
      "state_name": "Pennsylvania"
    },
    {
      "id": 48003,
      "name": "Andrews",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48265,
      "name": "Kerr",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48293,
      "name": "Limestone",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48437,
      "name": "Swisher",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": "06067",
      "name": "Sacramento",
      "state_abbrev": "CA",
      "state_name": "California"
    },
    {
      "id": 17143,
      "name": "Peoria",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": "01079",
      "name": "Lawrence",
      "state_abbrev": "AL",
      "state_name": "Alabama"
    },
    {
      "id": 19069,
      "name": "Franklin",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 16067,
      "name": "Minidoka",
      "state_abbrev": "ID",
      "state_name": "Idaho"
    },
    {
      "id": 42057,
      "name": "Fulton",
      "state_abbrev": "PA",
      "state_name": "Pennsylvania"
    },
    {
      "id": 27037,
      "name": "Dakota",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": "05139",
      "name": "Union",
      "state_abbrev": "AR",
      "state_name": "Arkansas"
    },
    {
      "id": 27051,
      "name": "Grant",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 48075,
      "name": "Childress",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 45031,
      "name": "Darlington",
      "state_abbrev": "SC",
      "state_name": "South Carolina"
    },
    {
      "id": 17169,
      "name": "Schuyler",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 17171,
      "name": "Scott",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 54091,
      "name": "Taylor",
      "state_abbrev": "WV",
      "state_name": "West Virginia"
    },
    {
      "id": 13173,
      "name": "Lanier",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 48237,
      "name": "Jack",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 20035,
      "name": "Cowley",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 13131,
      "name": "Grady",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 20155,
      "name": "Reno",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 12117,
      "name": "Seminole",
      "state_abbrev": "FL",
      "state_name": "Florida"
    },
    {
      "id": 13013,
      "name": "Barrow",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 45049,
      "name": "Hampton",
      "state_abbrev": "SC",
      "state_name": "South Carolina"
    },
    {
      "id": 48063,
      "name": "Camp",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 16077,
      "name": "Power",
      "state_abbrev": "ID",
      "state_name": "Idaho"
    },
    {
      "id": 49015,
      "name": "Emery",
      "state_abbrev": "UT",
      "state_name": "Utah"
    },
    {
      "id": "02105",
      "name": "Hoonah-Angoon",
      "state_abbrev": "AK",
      "state_name": "Alaska"
    },
    {
      "id": 22039,
      "name": "Evangeline",
      "state_abbrev": "LA",
      "state_name": "Louisiana"
    },
    {
      "id": 51097,
      "name": "King and Queen",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": "06007",
      "name": "Butte",
      "state_abbrev": "CA",
      "state_name": "California"
    },
    {
      "id": 13241,
      "name": "Rabun",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": "01025",
      "name": "Clarke",
      "state_abbrev": "AL",
      "state_name": "Alabama"
    },
    {
      "id": "08067",
      "name": "La Plata",
      "state_abbrev": "CO",
      "state_name": "Colorado"
    },
    {
      "id": 13263,
      "name": "Talbot",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 21037,
      "name": "Campbell",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 16047,
      "name": "Gooding",
      "state_abbrev": "ID",
      "state_name": "Idaho"
    },
    {
      "id": 48255,
      "name": "Karnes",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 47111,
      "name": "Macon",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 48153,
      "name": "Floyd",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48169,
      "name": "Garza",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 17199,
      "name": "Williamson",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 46021,
      "name": "Campbell",
      "state_abbrev": "SD",
      "state_name": "South Dakota"
    },
    {
      "id": 28093,
      "name": "Marshall",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 29089,
      "name": "Howard",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 36101,
      "name": "Steuben",
      "state_abbrev": "NY",
      "state_name": "New York"
    },
    {
      "id": 37063,
      "name": "Durham",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 35029,
      "name": "Luna",
      "state_abbrev": "NM",
      "state_name": "New Mexico"
    },
    {
      "id": 29003,
      "name": "Andrew",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 29015,
      "name": "Benton",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 51690,
      "name": "Martinsville",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 19129,
      "name": "Mills",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 21023,
      "name": "Bracken",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 37135,
      "name": "Orange",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 38091,
      "name": "Steele",
      "state_abbrev": "ND",
      "state_name": "North Dakota"
    },
    {
      "id": "08095",
      "name": "Phillips",
      "state_abbrev": "CO",
      "state_name": "Colorado"
    },
    {
      "id": 48207,
      "name": "Haskell",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 54075,
      "name": "Pocahontas",
      "state_abbrev": "WV",
      "state_name": "West Virginia"
    },
    {
      "id": 25015,
      "name": "Hampshire",
      "state_abbrev": "MA",
      "state_name": "Massachusetts"
    },
    {
      "id": 21115,
      "name": "Johnson",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 39161,
      "name": "Van Wert",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 29043,
      "name": "Christian",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 13097,
      "name": "Douglas",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 13155,
      "name": "Irwin",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 38075,
      "name": "Renville",
      "state_abbrev": "ND",
      "state_name": "North Dakota"
    },
    {
      "id": 38093,
      "name": "Stutsman",
      "state_abbrev": "ND",
      "state_name": "North Dakota"
    },
    {
      "id": 39003,
      "name": "Allen",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 39021,
      "name": "Champaign",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": "01081",
      "name": "Lee",
      "state_abbrev": "AL",
      "state_name": "Alabama"
    },
    {
      "id": 26127,
      "name": "Oceana",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 26145,
      "name": "Saginaw",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 49039,
      "name": "Sanpete",
      "state_abbrev": "UT",
      "state_name": "Utah"
    },
    {
      "id": 50005,
      "name": "Caledonia",
      "state_abbrev": "VT",
      "state_name": "Vermont"
    },
    {
      "id": 51167,
      "name": "Russell",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 51595,
      "name": "Emporia",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 51678,
      "name": "Lexington",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 41069,
      "name": "Wheeler",
      "state_abbrev": "OR",
      "state_name": "Oregon"
    },
    {
      "id": 42085,
      "name": "Mercer",
      "state_abbrev": "PA",
      "state_name": "Pennsylvania"
    },
    {
      "id": 22061,
      "name": "Lincoln",
      "state_abbrev": "LA",
      "state_name": "Louisiana"
    },
    {
      "id": 28027,
      "name": "Coahoma",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 51061,
      "name": "Fauquier",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 55029,
      "name": "Door",
      "state_abbrev": "WI",
      "state_name": "Wisconsin"
    },
    {
      "id": 21095,
      "name": "Harlan",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 47079,
      "name": "Henry",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 42125,
      "name": "Washington",
      "state_abbrev": "PA",
      "state_name": "Pennsylvania"
    },
    {
      "id": "06015",
      "name": "Del Norte",
      "state_abbrev": "CA",
      "state_name": "California"
    },
    {
      "id": 16003,
      "name": "Adams",
      "state_abbrev": "ID",
      "state_name": "Idaho"
    },
    {
      "id": 21107,
      "name": "Hopkins",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 16049,
      "name": "Idaho",
      "state_abbrev": "ID",
      "state_name": "Idaho"
    },
    {
      "id": 36063,
      "name": "Niagara",
      "state_abbrev": "NY",
      "state_name": "New York"
    },
    {
      "id": 51117,
      "name": "Mecklenburg",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 13153,
      "name": "Houston",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 23001,
      "name": "Androscoggin",
      "state_abbrev": "ME",
      "state_name": "Maine"
    },
    {
      "id": 21185,
      "name": "Oldham",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 27047,
      "name": "Freeborn",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 28003,
      "name": "Alcorn",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 28123,
      "name": "Scott",
      "state_abbrev": "MS",
      "state_name": "Mississippi"
    },
    {
      "id": 42039,
      "name": "Crawford",
      "state_abbrev": "PA",
      "state_name": "Pennsylvania"
    },
    {
      "id": 18025,
      "name": "Crawford",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 21161,
      "name": "Mason",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 27003,
      "name": "Anoka",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 31155,
      "name": "Saunders",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 45075,
      "name": "Orangeburg",
      "state_abbrev": "SC",
      "state_name": "South Carolina"
    },
    {
      "id": 48201,
      "name": "Harris",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 39011,
      "name": "Auglaize",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 20115,
      "name": "Marion",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 20165,
      "name": "Rush",
      "state_abbrev": "KS",
      "state_name": "Kansas"
    },
    {
      "id": 26107,
      "name": "Mecosta",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 40051,
      "name": "Grady",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": 40077,
      "name": "Latimer",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": 18081,
      "name": "Johnson",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 29103,
      "name": "Knox",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 29127,
      "name": "Marion",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 29161,
      "name": "Phelps",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 39049,
      "name": "Franklin",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 22007,
      "name": "Assumption",
      "state_abbrev": "LA",
      "state_name": "Louisiana"
    },
    {
      "id": "05059",
      "name": "Hot Spring",
      "state_abbrev": "AR",
      "state_name": "Arkansas"
    },
    {
      "id": "05143",
      "name": "Washington",
      "state_abbrev": "AR",
      "state_name": "Arkansas"
    },
    {
      "id": 40011,
      "name": "Blaine",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": 29179,
      "name": "Reynolds",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 40097,
      "name": "Mayes",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": 26049,
      "name": "Genesee",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 21057,
      "name": "Cumberland",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 39111,
      "name": "Monroe",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 46105,
      "name": "Perkins",
      "state_abbrev": "SD",
      "state_name": "South Dakota"
    },
    {
      "id": 42093,
      "name": "Montour",
      "state_abbrev": "PA",
      "state_name": "Pennsylvania"
    },
    {
      "id": "08057",
      "name": "Jackson",
      "state_abbrev": "CO",
      "state_name": "Colorado"
    },
    {
      "id": 33009,
      "name": "Grafton",
      "state_abbrev": "NH",
      "state_name": "New Hampshire"
    },
    {
      "id": 39101,
      "name": "Marion",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 30063,
      "name": "Missoula",
      "state_abbrev": "MT",
      "state_name": "Montana"
    },
    {
      "id": 36111,
      "name": "Ulster",
      "state_abbrev": "NY",
      "state_name": "New York"
    },
    {
      "id": 23017,
      "name": "Oxford",
      "state_abbrev": "ME",
      "state_name": "Maine"
    },
    {
      "id": 45013,
      "name": "Beaufort",
      "state_abbrev": "SC",
      "state_name": "South Carolina"
    },
    {
      "id": 34011,
      "name": "Cumberland",
      "state_abbrev": "NJ",
      "state_name": "New Jersey"
    },
    {
      "id": 48345,
      "name": "Motley",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 25027,
      "name": "Worcester",
      "state_abbrev": "MA",
      "state_name": "Massachusetts"
    },
    {
      "id": 47187,
      "name": "Williamson",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": "04025",
      "name": "Yavapai",
      "state_abbrev": "AZ",
      "state_name": "Arizona"
    },
    {
      "id": "08079",
      "name": "Mineral",
      "state_abbrev": "CO",
      "state_name": "Colorado"
    },
    {
      "id": 41067,
      "name": "Washington",
      "state_abbrev": "OR",
      "state_name": "Oregon"
    },
    {
      "id": 18013,
      "name": "Brown",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 26081,
      "name": "Kent",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 26085,
      "name": "Lake",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 55081,
      "name": "Monroe",
      "state_abbrev": "WI",
      "state_name": "Wisconsin"
    },
    {
      "id": 21149,
      "name": "McLean",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 29071,
      "name": "Franklin",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 29213,
      "name": "Taney",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 30091,
      "name": "Sheridan",
      "state_abbrev": "MT",
      "state_name": "Montana"
    },
    {
      "id": 19155,
      "name": "Pottawattamie",
      "state_abbrev": "IA",
      "state_name": "Iowa"
    },
    {
      "id": 18087,
      "name": "LaGrange",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 18113,
      "name": "Noble",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 29101,
      "name": "Johnson",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 18151,
      "name": "Steuben",
      "state_abbrev": "IN",
      "state_name": "Indiana"
    },
    {
      "id": 26157,
      "name": "Tuscola",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 29129,
      "name": "Mercer",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 36087,
      "name": "Rockland",
      "state_abbrev": "NY",
      "state_name": "New York"
    },
    {
      "id": 47067,
      "name": "Hancock",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 47033,
      "name": "Crockett",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 47159,
      "name": "Smith",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 48073,
      "name": "Cherokee",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 30047,
      "name": "Lake",
      "state_abbrev": "MT",
      "state_name": "Montana"
    },
    {
      "id": 31059,
      "name": "Fillmore",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 22013,
      "name": "Bienville",
      "state_abbrev": "LA",
      "state_name": "Louisiana"
    },
    {
      "id": 22085,
      "name": "Sabine",
      "state_abbrev": "LA",
      "state_name": "Louisiana"
    },
    {
      "id": 24013,
      "name": "Carroll",
      "state_abbrev": "MD",
      "state_name": "Maryland"
    },
    {
      "id": 26109,
      "name": "Menominee",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": "04027",
      "name": "Yuma",
      "state_abbrev": "AZ",
      "state_name": "Arizona"
    },
    {
      "id": 13105,
      "name": "Elbert",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 21223,
      "name": "Trimble",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 31061,
      "name": "Franklin",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 47077,
      "name": "Henderson",
      "state_abbrev": "TN",
      "state_name": "Tennessee"
    },
    {
      "id": 48031,
      "name": "Blanco",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 16057,
      "name": "Latah",
      "state_abbrev": "ID",
      "state_name": "Idaho"
    },
    {
      "id": 37011,
      "name": "Avery",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 21225,
      "name": "Union",
      "state_abbrev": "KY",
      "state_name": "Kentucky"
    },
    {
      "id": 48501,
      "name": "Yoakum",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 37077,
      "name": "Granville",
      "state_abbrev": "NC",
      "state_name": "North Carolina"
    },
    {
      "id": 13163,
      "name": "Jefferson",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 13221,
      "name": "Oglethorpe",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 24041,
      "name": "Talbot",
      "state_abbrev": "MD",
      "state_name": "Maryland"
    },
    {
      "id": 26083,
      "name": "Keweenaw",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    },
    {
      "id": 16005,
      "name": "Bannock",
      "state_abbrev": "ID",
      "state_name": "Idaho"
    },
    {
      "id": 49013,
      "name": "Duchesne",
      "state_abbrev": "UT",
      "state_name": "Utah"
    },
    {
      "id": 51001,
      "name": "Accomack",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 51109,
      "name": "Louisa",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 51163,
      "name": "Rockbridge",
      "state_abbrev": "VA",
      "state_name": "Virginia"
    },
    {
      "id": 53017,
      "name": "Douglas",
      "state_abbrev": "WA",
      "state_name": "Washington"
    },
    {
      "id": "05075",
      "name": "Lawrence",
      "state_abbrev": "AR",
      "state_name": "Arkansas"
    },
    {
      "id": "05131",
      "name": "Sebastian",
      "state_abbrev": "AR",
      "state_name": "Arkansas"
    },
    {
      "id": "06065",
      "name": "Riverside",
      "state_abbrev": "CA",
      "state_name": "California"
    },
    {
      "id": "01069",
      "name": "Houston",
      "state_abbrev": "AL",
      "state_name": "Alabama"
    },
    {
      "id": "01121",
      "name": "Talladega",
      "state_abbrev": "AL",
      "state_name": "Alabama"
    },
    {
      "id": "04012",
      "name": "La Paz",
      "state_abbrev": "AZ",
      "state_name": "Arizona"
    },
    {
      "id": 13039,
      "name": "Camden",
      "state_abbrev": "GA",
      "state_name": "Georgia"
    },
    {
      "id": 40087,
      "name": "McClain",
      "state_abbrev": "OK",
      "state_name": "Oklahoma"
    },
    {
      "id": 27027,
      "name": "Clay",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 27113,
      "name": "Pennington",
      "state_abbrev": "MN",
      "state_name": "Minnesota"
    },
    {
      "id": 29099,
      "name": "Jefferson",
      "state_abbrev": "MO",
      "state_name": "Missouri"
    },
    {
      "id": 48117,
      "name": "Deaf Smith",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 48147,
      "name": "Fannin",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 17065,
      "name": "Hamilton",
      "state_abbrev": "IL",
      "state_name": "Illinois"
    },
    {
      "id": 45033,
      "name": "Dillon",
      "state_abbrev": "SC",
      "state_name": "South Carolina"
    },
    {
      "id": 31073,
      "name": "Gosper",
      "state_abbrev": "NE",
      "state_name": "Nebraska"
    },
    {
      "id": 39075,
      "name": "Holmes",
      "state_abbrev": "OH",
      "state_name": "Ohio"
    },
    {
      "id": 48171,
      "name": "Gillespie",
      "state_abbrev": "TX",
      "state_name": "Texas"
    },
    {
      "id": 55079,
      "name": "Milwaukee",
      "state_abbrev": "WI",
      "state_name": "Wisconsin"
    },
    {
      "id": 26139,
      "name": "Ottawa",
      "state_abbrev": "MI",
      "state_name": "Michigan"
    }
  ]
