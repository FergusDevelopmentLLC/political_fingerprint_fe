questions = [
    {
        "content": "Oppression by corporations is more of a concern than oppression by governments.",
        "effect": {
            "econ": 10,
            "dipl": 0,
            "govt": 0,
            "scty": 0
        }
    },
    {
        "content": "It is necessary for the government to intervene in the economy to protect consumers.",
        "effect": {
            "econ": 10,
            "dipl": 0,
            "govt": 0,
            "scty": 0
        }
    },
    {
        // The idea behind the phrase is that a freer market is one in which people are free to engage in more different
        // types of economic activity without regulation or restriction. In other words, since "the market" is just a term 
        // for a whole bunch of actions taken by people (buying things, selling things, signing contracts, etc.), a 
        // "free market" is really just a bunch of people with a lot of economic freedom.
        // https://www.reddit.com/r/communism101/comments/534r9f/what_does_the_freer_the_market_the_freer_the/
        "content": "The freer the markets, the freer the people.",
        "effect": {
            "econ": -10,
            "dipl": 0,
            "govt": 0,
            "scty": 0
        }
    },
    {
        // ?????
        //https://www.quora.com/It-is-better-to-maintain-a-balanced-budget-than-to-ensure-welfare-for-all-citizens-How-much-do-you-agree-with-the-following-statement
        "content": "It is better to maintain a balanced budget than to ensure welfare for all citizens.",
        "effect": {
            "econ": -10,
            "dipl": 0,
            "govt": 0,
            "scty": 0
        }
    },
    {
        //https://psmag.com/news/benefits-government-funded-research-86168
        //https://academicmatters.ca/the-public-value-of-public-funding-for-research/
        "content": "Publicly-funded research is more beneficial to the people than leaving it to the market.",
        "effect": {
            "econ": 10,
            "dipl": 0,
            "govt": 0,
            "scty": 10
        }
    },
    {   
        // Tarriff - Rather than being used to raise revenue, they are imposed to increase the price
        // of foreign goods in order to make domestic produce comparatively cheaper, with the aim of
        // encouraging domestic production by protecting local firms from global competition.
        //https://www.theguardian.com/business/2018/jul/06/what-are-trade-tariffs-and-who-will-they-affect#:~:text=Rather%20than%20being%20used%20to,local%20firms%20from%20global%20competition.
        "content": "Tariffs on international trade are important to encourage local production.",
        "effect": {
            "econ": 5,
            "dipl": 0,
            "govt": -10,
            "scty": 0
        }
    },
    {
        // https://en.wikipedia.org/wiki/From_each_according_to_his_ability,_to_each_according_to_his_needs
        // https://www.quora.com/What-is-the-meaning-of-the-communist-slogan-to-each-according-to-his-needs-popularized-by-Karl-Marx
        // "From each according to his ability, to each according to his needs" is a slogan popularised
        // by Karl Marx in his 1875 Critique of the Gotha Program.[1][2] The principle refers to free 
        // access to and distribution of goods, capital and services.[3] In the Marxist view, such an 
        // arrangement will be made possible by the abundance of goods and services that a developed communist
        // system will be capable to produce; the idea is that, with the full development of socialism and 
        // unfettered productive forces, there will be enough to satisfy everyone's needs.
        "content": "From each according to his ability, to each according to his needs.",
        "effect": {
            "econ": 10,
            "dipl": 0,
            "govt": 0,
            "scty": 0
        }
    },
    {
        // https://www.theatlantic.com/politics/archive/2014/03/the-conservative-myth-of-a-social-safety-net-built-on-charity/284552/
        // https://www.quora.com/It-would-be-best-if-social-programs-were-abolished-in-favor-of-private-charity-How-much-do-you-agree-with-the-following-statement
        "content": "It would be best if social programs were abolished in favor of private charity.",
        "effect": {
            "econ": -10,
            "dipl": 0,
            "govt": 0,
            "scty": 0
        }
    },
    {
        "content": "Taxes should be increased on the rich to provide for the poor.",
        "effect": {
            "econ": 10,
            "dipl": 0,
            "govt": 0,
            "scty": 0
        }
    },
    {   
        // https://www.quora.com/Inheritance-is-a-legitimate-form-of-wealth-How-much-do-you-agree-with-the-following-statement#:~:text=100%25.,will%20it%20to%20their%20progeny.
        // Inherited wealth is nothing more than wealth bequeathed to an heir from the 
        // individual who owned/earned that wealth. It is that person’s right to determine
        // what happens to his/her wealth (property), whether they give it to charity, spend
        // it on wine, women & song, or will it to their progeny.
        "content": "Inheritance is a legitimate form of wealth.",
        "effect": {
            "econ": -10,
            "dipl": 0,
            "govt": 0,
            "scty": -5
        }
    },
    {
        //https://www.reddit.com/r/AskLibertarians/comments/dni205/public_utilities_like_roads_and_electricity/
        "content": "Basic utilities like roads and electricity should be publicly owned.",
        "effect": {
            "econ": 10,
            "dipl": 0,
            "govt": 0,
            "scty": 0
        }
    },
    {
        "content": "Government intervention is a threat to the economy.",
        "effect": {
            "econ": -10,
            "dipl": 0,
            "govt": 0,
            "scty": 0
        }
    },
    {
        "content": "Those with a greater ability to pay should receive better healthcare.",
        "effect": {
            "econ": -10,
            "dipl": 0,
            "govt": 0,
            "scty": 0
        }
    },
    {
        "content": "Quality education is a right of all people.",
        "effect": {
            "econ": 10,
            "dipl": 0,
            "govt": 0,
            "scty": 5
        }
    },
    {
        //https://en.wikipedia.org/wiki/Means_of_production#:~:text=society%20at%20large.-,Determinant%20of%20class,passive%20income%20from%20their%20operation.
        "content": "The means of production should belong to the workers who use them.",
        "effect": {
            "econ": 10,
            "dipl": 0,
            "govt": 0,
            "scty": 0
        }
    },
    {
        //https://www.quora.com/What-arguments-are-there-for-why-the-United-Nations-should-be-abolished
        "content": "The United Nations should be abolished.",
        "effect": {
            "econ": 0,
            "dipl": -10,
            "govt": -5,
            "scty": 0
        }
    },
    {
        "content": "Military action by our nation is often necessary to protect it.",
        "effect": {
            "econ": 0,
            "dipl": -10,
            "govt": -10,
            "scty": 0
        }
    },
    {
        "content": "I support regional unions, such as the European Union.",
        "effect": {
            "econ": -5,
            "dipl": 10,
            "govt": 10,
            "scty": 5
        }
    },
    {
        "content": "It is important to maintain our national sovereignty.",
        "effect": {
            "econ": 0,
            "dipl": -10,
            "govt": -5,
            "scty": 0
        }
    },
    {
        "content": "A united world government would be beneficial to mankind.",
        "effect": {
            "econ": 0,
            "dipl": 10,
            "govt": 0,
            "scty": 0
        }
    },
    {
        "content": "It is more important to retain peaceful relations than to further our strength.",
        "effect": {
            "econ": 0,
            "dipl": 10,
            "govt": 0,
            "scty": 0
        }
    },
    {
        "content": "Wars do not need to be justified to other countries.",
        "effect": {
            "econ": 0,
            "dipl": -10,
            "govt": -10,
            "scty": 0
        }
    },
    {
        "content": "Military spending is a waste of money.",
        "effect": {
            "econ": 0,
            "dipl": 10,
            "govt": 10,
            "scty": 0
        }
    },
    {
        "content": "International aid is a waste of money.",
        "effect": {
            "econ": -5,
            "dipl": -10,
            "govt": 0,
            "scty": 0
        }
    },
    {
        "content": "My nation is great.",
        "effect": {
            "econ": 0,
            "dipl": -10,
            "govt": 0,
            "scty": 0
        }
    },
    {
        "content": "Research should be conducted on an international scale.",
        "effect": {
            "econ": 0,
            "dipl": 10,
            "govt": 0,
            "scty": 10
        }
    },
    {
        "content": "Governments should be accountable to the international community.",
        "effect": {
            "econ": 0,
            "dipl": 10,
            "govt": 5,
            "scty": 0
        }
    },
    {
        "content": "Even when protesting an authoritarian government, violence is not acceptable.",
        "effect": {
            "econ": 0,
            "dipl": 5,
            "govt": -5,
            "scty": 0
        }
    },
    {
        "content": "My religious values should be spread as much as possible.",
        "effect": {
            "econ": 0,
            "dipl": -5,
            "govt": -10,
            "scty": -10
        }
    },
    {
        "content": "Our nation's values should be spread as much as possible.",
        "effect": {
            "econ": 0,
            "dipl": -10,
            "govt": -5,
            "scty": 0
        }
    },
    {
        "content": "It is very important to maintain law and order.",
        "effect": {
            "econ": 0,
            "dipl": -5,
            "govt": -10,
            "scty": -5
        }
    },
    {
        "content": "The general populace makes poor decisions.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": -10,
            "scty": 0
        }
    },
    {
        "content": "Physician-assisted suicide should be legal.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": 10,
            "scty": 0
        }
    },
    {
        "content": "The sacrifice of some civil liberties is necessary to protect us from acts of terrorism.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": -10,
            "scty": 0
        }
    },
    {
        "content": "Government surveillance is necessary in the modern world.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": -10,
            "scty": 0
        }
    },
    {   
        "content": "The very existence of the state is a threat to our liberty.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": 10,
            "scty": 0
        }
    },
    {
        "content": "Regardless of political opinions, it is important to side with your country.",
        "effect": {
            "econ": 0,
            "dipl": -10,
            "govt": -10,
            "scty": -5
        }
    },
    {
        "content": "All authority should be questioned.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": 10,
            "scty": 5
        }
    },
    {
        "content": "A hierarchical state is best.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": -10,
            "scty": 0
        }
    },
    {
        "content": "It is important that the government follows the majority opinion, even if it is wrong.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": 10,
            "scty": 0
        }
    },
    {
        "content": "The stronger the leadership, the better.",
        "effect": {
            "econ": 0,
            "dipl": -10,
            "govt": -10,
            "scty": 0
        }
    },
    {
        "content": "Democracy is more than a decision-making process.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": 10,
            "scty": 0
        }
    },
    {
        "content": "Environmental regulations are essential.",
        "effect": {
            "econ": 5,
            "dipl": 0,
            "govt": 0,
            "scty": 10
        }
    },
    {
        "content": "A better world will come from automation, science, and technology.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": 0,
            "scty": 10
        }
    },
    {
        "content": "Children should be educated in religious or traditional values.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": -5,
            "scty": -10
        }
    },
    {
        "content": "Traditions are of no value on their own.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": 0,
            "scty": 10
        }
    },
    {
        "content": "Religion should play a role in government.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": -10,
            "scty": -10
        }
    },
    {
        "content": "Churches should be taxed the same way other institutions are taxed.",
        "effect": {
            "econ": 5,
            "dipl": 0,
            "govt": 0,
            "scty": 10
        }
    },
    {
        "content": "Climate change is currently one of the greatest threats to our way of life.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": 0,
            "scty": 10
        }
    },
    {
        "content": "It is important that we work as a united world to combat climate change.",
        "effect": {
            "econ": 0,
            "dipl": 10,
            "govt": 0,
            "scty": 10
        }
    },
    {
        "content": "Society was better many years ago than it is now.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": 0,
            "scty": -10
        }
    },
    {
        "content": "It is important that we maintain the traditions of our past.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": 0,
            "scty": -10
        }
    },
    {
        "content": "It is important that we think in the long term, beyond our lifespans.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": 0,
            "scty": 10
        }
    },
    {
        "content": "Reason is more important than maintaining our culture.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": 0,
            "scty": 10
        }
    },
    {
        "content": "Drug use should be legalized or decriminalized.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": 10,
            "scty": 2
        }
    },
    {
        "content": "Same-sex marriage should be legal.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": 10,
            "scty": 10
        }
    },
    {
        "content": "One group of people should not control another.",
        "effect": {
            "econ": 0,
            "dipl": 10,
            "govt": 5,
            "scty": 10
        }
    },
    {
        "content": "Sex outside marriage is immoral.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": -5,
            "scty": -10
        }
    },
    {
        "content": "If we accept migrants at all, it is important that they assimilate into our culture.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": -5,
            "scty": -10
        }
    },
    {
        "content": "Abortion should be prohibited in most or all cases.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": -10,
            "scty": -10
        }
    },
    {
        "content": "Gun ownership should be prohibited for those without a valid reason.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": -10,
            "scty": 0
        }
    },
    {
        "content": "I support single-payer, universal healthcare.",
        "effect": {
            "econ": 10,
            "dipl": 0,
            "govt": 0,
            "scty": 0
        }
    },
    {
        "content": "Prostitution should be illegal.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": -10,
            "scty": -10
        }
    },
    {
        "content": "Maintaining family values is essential.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": 0,
            "scty": -10
        }
    },
    {
        "content": "To chase progress at all costs is dangerous.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": 0,
            "scty": -10
        }
    },
    {
        "content": "Genetic modification is a force for good, even on humans.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": 0,
            "scty": 10
        }
    },
    {
        "content": "We should open our borders to immigration.",
        "effect": {
            "econ": 0,
            "dipl": 10,
            "govt": 10,
            "scty": 0
        }
    },
    {
        "content": "Governments should be as concerned about foreigners as they are about their own citizens.",
        "effect": {
            "econ": 0,
            "dipl": 10,
            "govt": 0,
            "scty": 0
        }
    },
    {
        "content": "All people - regardless of factors like culture or sexuality - should be treated equally.",
        "effect": {
            "econ": 10,
            "dipl": 10,
            "govt": 10,
            "scty": 10
        }
    },
    {
        "content": "It is important that we further my group's goals above all others.",
        "effect": {
            "econ": -10,
            "dipl": -10,
            "govt": -10,
            "scty": -10
        }
    }
];