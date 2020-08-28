questions = [
    {
        "questionOriginal": "Oppression by corporations is more of a concern than oppression by governments.",
        "question": "The growing influence of corporations is more of a concern than the growing influence of governments.",
        "sentiment": {
            "The updated question has more bias than the original (count).": 1,
            "The updated question has less bias than the original (count).": 5,
            "The updated question is just right (count).": 3
        },
        "effect": {
            "econ": 10,
            "dipl": 0,
            "govt": 0,
            "scty": 0
        }
    },
    {
        "questionOriginal": "It is necessary for the government to intervene in the economy to protect consumers.",
        "question": "It is sometimes necessary for the government to step in an make corrections to the economy.",
        "sentiment": {
            "The updated question has more bias than the original (count).": 1,
            "The updated question has less bias than the original (count).": 5,
            "The updated question is just right (count).": 3
        },
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
        "questionOriginal": "The freer the markets, the freer the people.",
        "question": "In general, people should be free to buy and sell whatever goods they want.",
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
        "questionOriginal": "It is better to maintain a balanced budget than to ensure welfare for all citizens.",
        "question": "The government should not spend more money than it takes in from taxes and should not go into debt because of welfare spending.",
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
        "questionOriginal": "Publicly-funded research is more beneficial to the people than leaving it to the market.",
        "question": "Inventions and scientific breakthroughs that are the result of public funding benefit the people more than if private companies in the market make similar advancements.",
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
        "questionOriginal": "Tariffs on international trade are important to encourage local production.",
        "question": "It is important to make laws that make imported goods more expensive. This makes domestic products more competitive and in higher demand.",
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
        "questionOriginal": "From each according to his ability, to each according to his needs.",
        "question": "Anyone can work in society at any level they choose. Access to the consumer goods and services is available to all members of society, regardless of how much they contribute.",
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
        "questionOriginal": "It would be best if social programs were abolished in favor of private charity.",
        "question": "Churches and other charities should be responsible to help the needy, not the government.",
        "effect": {
            "econ": -10,
            "dipl": 0,
            "govt": 0,
            "scty": 0
        }
    },
    {
        "questionOriginal": "Taxes should be increased on the rich to provide for the poor.",
        "question": "The rich should pay more in taxes than the poor. Tax proceeds from the rich should be used to help the poor.",
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
        "questionOriginal": "Inheritance is a legitimate form of wealth.",
        "question": "If your parents die and leave you money in their will, you are free to spend it however you like.",
        "effect": {
            "econ": -10,
            "dipl": 0,
            "govt": 0,
            "scty": -5
        }
    },
    {
        //https://www.reddit.com/r/AskLibertarians/comments/dni205/public_utilities_like_roads_and_electricity/
        "questionOriginal": "Basic utilities like roads and electricity should be publicly owned.",
        "question": "Basic things that everyone uses, like electricity and roads, should be owned by the government and paid for with taxes.",
        "effect": {
            "econ": 10,
            "dipl": 0,
            "govt": 0,
            "scty": 0
        }
    },
    {
        "questionOriginal": "Government intervention is a threat to the economy.",
        "question": "The government should rarely interfere in the economy.",
        "effect": {
            "econ": -10,
            "dipl": 0,
            "govt": 0,
            "scty": 0
        }
    },
    {
        "questionOriginal": "Those with a greater ability to pay should receive better healthcare.",
        "question": "Rich people that get sick should be able to spend your extra money to get the best treatment they can find.",
        "effect": {
            "econ": -10,
            "dipl": 0,
            "govt": 0,
            "scty": 0
        }
    },
    {
        "questionOriginal": "Quality education is a right of all people.",
        "question": "Anyone that wants to go to school should be able to go for free. The education received should be high quality.",
        "effect": {
            "econ": 10,
            "dipl": 0,
            "govt": 0,
            "scty": 5
        }
    },
    {
        //https://en.wikipedia.org/wiki/Means_of_production#:~:text=society%20at%20large.-,Determinant%20of%20class,passive%20income%20from%20their%20operation.
        "questionOriginal": "The means of production should belong to the workers who use them.",
        "question": "The people have control over their work and their bosses because they have total control what is made or not made.",
        "effect": {
            "econ": 10,
            "dipl": 0,
            "govt": 0,
            "scty": 0
        }
    },
    {
        //https://www.quora.com/What-arguments-are-there-for-why-the-United-Nations-should-be-abolished
        "questionOriginal": "The United Nations should be abolished.",
        "question": "We should eliminate the United Nations.",
        "effect": {
            "econ": 0,
            "dipl": -10,
            "govt": -5,
            "scty": 0
        }
    },
    {
        "questionOriginal": "Military action by our nation is often necessary to protect it.",
        "question": "We often must go to war to protect our country.",
        "effect": {
            "econ": 0,
            "dipl": -10,
            "govt": -10,
            "scty": 0
        }
    },
    {
        "questionOriginal": "I support regional unions, such as the European Union.",
        "question": "I support countries that join together and agree to help each other.",
        "effect": {
            "econ": -5,
            "dipl": 10,
            "govt": 10,
            "scty": 5
        }
    },
    {
        "questionOriginal": "It is important to maintain our national sovereignty.",
        "question": "It is important that our country remains independent and is governed by the people that live here.",
        "effect": {
            "econ": 0,
            "dipl": -10,
            "govt": -5,
            "scty": 0
        }
    },
    {
        "questionOriginal": "A united world government would be beneficial to mankind.",
        "question": "If the whole world was just one nation, mankind would benefit.",
        "effect": {
            "econ": 0,
            "dipl": 10,
            "govt": 0,
            "scty": 0
        }
    },
    {
        "questionOriginal": "It is more important to retain peaceful relations than to further our strength.",
        "question": "It is more important to keep peace than to prepare for war.",
        "effect": {
            "econ": 0,
            "dipl": 10,
            "govt": 0,
            "scty": 0
        }
    },
    {
        "questionOriginal": "Wars do not need to be justified to other countries.",
        "question": "If our country must go to war with another, we don't need any other country's permission.",
        "effect": {
            "econ": 0,
            "dipl": -10,
            "govt": -10,
            "scty": 0
        }
    },
    {
        "questionOriginal": "Military spending is a waste of money.",
        "question": "When the government spends money on the military, it is a waste of money.",
        "effect": {
            "econ": 0,
            "dipl": 10,
            "govt": 10,
            "scty": 0
        }
    },
    {
        "questionOriginal": "International aid is a waste of money.",
        "question": "Giving money to those in need that don't live in our country is a waste of money.",
        "effect": {
            "econ": -5,
            "dipl": -10,
            "govt": 0,
            "scty": 0
        }
    },
    {
        "questionOriginal": "My nation is great.",
        "question": "My nation is great.",
        "effect": {
            "econ": 0,
            "dipl": -10,
            "govt": 0,
            "scty": 0
        }
    },
    {
        "questionOriginal": "Research should be conducted on an international scale.",
        "question": "Inventors from different countries should coopoerate to come up with new technologies.",
        "effect": {
            "econ": 0,
            "dipl": 10,
            "govt": 0,
            "scty": 10
        }
    },
    {
        "questionOriginal": "Governments should be accountable to the international community.",
        "question": "Our country should obey international laws that all countries have agreed upon.",
        "effect": {
            "econ": 0,
            "dipl": 10,
            "govt": 5,
            "scty": 0
        }
    },
    {
        "questionOriginal": "Even when protesting an authoritarian government, violence is not acceptable.",
        "question": "Protestors should never cause harm to anyone or any property, even if protesting an authoritarian government.",
        "effect": {
            "econ": 0,
            "dipl": 5,
            "govt": -5,
            "scty": 0
        }
    },
    {
        "questionOriginal": "My religious values should be spread as much as possible.",
        "question": "Many of my values come from my religion.",
        "effect": {
            "econ": 0,
            "dipl": -5,
            "govt": -10,
            "scty": -10
        }
    },
    {
        "questionOriginal": "Our nation's values should be spread as much as possible.",
        "question": "Many of our country's values come from different religions.",
        "effect": {
            "econ": 0,
            "dipl": -10,
            "govt": -5,
            "scty": 0
        }
    },
    {
        "questionOriginal": "It is very important to maintain law and order.",
        "question": "It is very important to have law and order. We should have as little crime as possible.",
        "effect": {
            "econ": 0,
            "dipl": -5,
            "govt": -10,
            "scty": -5
        }
    },
    {
        "questionOriginal": "The general populace makes poor decisions.",
        "question": "The average person makes poor decisions.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": -10,
            "scty": 0
        }
    },
    {
        "questionOriginal": "Physician-assisted suicide should be legal.",
        "question": "If you're sick and there is no hope to live, it is not against the law to have a doctor help you end your life.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": 10,
            "scty": 0
        }
    },
    {
        "questionOriginal": "The sacrifice of some civil liberties is necessary to protect us from acts of terrorism.",
        "question": "Because the threat of terrorism is on the rise, we must allow the government to know more about us so that they can more easily stop terrorism before it happens.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": -10,
            "scty": 0
        }
    },
    {
        "questionOriginal": "Government surveillance is necessary in the modern world.",
        "question": "In order to keep people safe, the government must watch people's behavior.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": -10,
            "scty": 0
        }
    },
    {   
        "questionOriginal": "The very existence of the state is a threat to our liberty.",
        "question": "Because we choose to live together in a country, we limit our freedom.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": 10,
            "scty": 0
        }
    },
    {
        "questionOriginal": "Regardless of political opinions, it is important to side with your country.",
        "question": "It is important to support your local government, especially during a war.",
        "effect": {
            "econ": 0,
            "dipl": -10,
            "govt": -10,
            "scty": -5
        }
    },
    {
        "questionOriginal": "All authority should be questioned.",
        "question": "We should ask powerful people questions, so we can know what they are doing.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": 10,
            "scty": 5
        }
    },
    {
        "questionOriginal": "A hierarchical state is best.",
        "question": "A government where some officials are bosses over other officials is best.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": -10,
            "scty": 0
        }
    },
    {
        "questionOriginal": "It is important that the government follows the majority opinion, even if it is wrong.",
        "question": "It is important that the government follows the majority opinion, no matter what.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": 10,
            "scty": 0
        }
    },
    {
        "questionOriginal": "The stronger the leadership, the better.",
        "question": "We are a better country when we have strong leaders.",
        "effect": {
            "econ": 0,
            "dipl": -10,
            "govt": -10,
            "scty": 0
        }
    },
    {
        "questionOriginal": "Democracy is more than a decision-making process.",
        "question": "Democracy is more than just the way the government makes decisions.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": 10,
            "scty": 0
        }
    },
    {
        "questionOriginal": "Environmental regulations are essential.",
        "question": "Laws to protect the environment are needed.",
        "effect": {
            "econ": 5,
            "dipl": 0,
            "govt": 0,
            "scty": 10
        }
    },
    {
        "questionOriginal": "A better world will come from automation, science, and technology.",
        "question": "Science and technology will help the world become better.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": 0,
            "scty": 10
        }
    },
    {
        "questionOriginal": "Children should be educated in religious or traditional values.",
        "question": "In school we should learn about religious topics and traditional values.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": -5,
            "scty": -10
        }
    },
    {
        "questionOriginal": "Traditions are of no value on their own.",
        "question": "Things we do only because our ancestors did them is a waste of time.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": 0,
            "scty": 10
        }
    },
    {
        "questionOriginal": "Religion should play a role in government.",
        "question": "Our government should partner with religious groups.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": -10,
            "scty": -10
        }
    },
    {
        "questionOriginal": "Churches should be taxed the same way other institutions are taxed.",
        "question": "Religious groups should be taxed like businesses are taxed.",
        "effect": {
            "econ": 5,
            "dipl": 0,
            "govt": 0,
            "scty": 10
        }
    },
    {
        "questionOriginal": "Climate change is currently one of the greatest threats to our way of life.",
        "question": "Climate change threatens our way of life.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": 0,
            "scty": 10
        }
    },
    {
        "questionOriginal": "It is important that we work as a united world to combat climate change.",
        "question": "The world must unite to combat climate change.",
        "effect": {
            "econ": 0,
            "dipl": 10,
            "govt": 0,
            "scty": 10
        }
    },
    {
        "questionOriginal": "Society was better many years ago than it is now.",
        "question": "People were better off in the past than they are now.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": 0,
            "scty": -10
        }
    },
    {
        "questionOriginal": "It is important that we maintain the traditions of our past.",
        "question": "It is important to remember and honor the people that came before us.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": 0,
            "scty": -10
        }
    },
    {
        "questionOriginal": "It is important that we think in the long term, beyond our lifespans.",
        "question": "It is important that we think about the future, beyond the time when we are dead.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": 0,
            "scty": 10
        }
    },
    {
        "questionOriginal": "Reason is more important than maintaining our culture.",
        "question": "Figuring things out is more important than painting art.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": 0,
            "scty": 10
        }
    },
    {
        "questionOriginal": "Drug use should be legalized or decriminalized.",
        "question": "We should be free to put anything in our bodies that we want to.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": 10,
            "scty": 2
        }
    },
    {
        "questionOriginal": "Same-sex marriage should be legal.",
        "question": "Women should be able to marry women. Men should be able to marry men.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": 10,
            "scty": 10
        }
    },
    {
        "questionOriginal": "One group of people should not control another.",
        "question": "One group of people should not have power over other groups of people.",
        "effect": {
            "econ": 0,
            "dipl": 10,
            "govt": 5,
            "scty": 10
        }
    },
    {
        "questionOriginal": "Sex outside marriage is immoral.",
        "question": "Sex outside marriage is wrong.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": -5,
            "scty": -10
        }
    },
    {
        "questionOriginal": "If we accept migrants at all, it is important that they assimilate into our culture.",
        "question": "It is important that people from other countries adapt to the ways of my country.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": -5,
            "scty": -10
        }
    },
    {
        "questionOriginal": "Abortion should be prohibited in most or all cases.",
        "question": "Terminating the life of an unborn baby should be illegal.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": -10,
            "scty": -10
        }
    },
    {
        "questionOriginal": "Gun ownership should be prohibited for those without a valid reason.",
        "question": "We should not allow people to own guns, unless they have a valid reason.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": -10,
            "scty": 0
        }
    },
    {
        "questionOriginal": "I support single-payer, universal healthcare.",
        "question": "I believe that the government should pay for health care for everyone.",
        "effect": {
            "econ": 10,
            "dipl": 0,
            "govt": 0,
            "scty": 0
        }
    },
    {
        "questionOriginal": "Prostitution should be illegal.",
        "question": "Having sex with another person for money should be illegal.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": -10,
            "scty": -10
        }
    },
    {
        "questionOriginal": "Maintaining family values is essential.",
        "question": "Keeping close to your family is an essential part of life.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": 0,
            "scty": -10
        }
    },
    {
        "questionOriginal": "To chase progress at all costs is dangerous.",
        "question": "Sometimes I realize that it is best to stop what I am doing because it is dangerous to proceed.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": 0,
            "scty": -10
        }
    },
    {
        "questionOriginal": "Genetic modification is a force for good, even on humans.",
        "question": "Changing the biology of nature is good thing, even when on humans.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": 0,
            "scty": 10
        }
    },
    {
        "questionOriginal": "We should open our borders to immigration.",
        "question": "Anyone who wants to live in my country is welcome to.",
        "effect": {
            "econ": 0,
            "dipl": 10,
            "govt": 10,
            "scty": 0
        }
    },
    {
        "questionOriginal": "Governments should be as concerned about foreigners as they are about their own citizens.",
        "question": "Governments should be as concerned about people from other contries as they are about people in my country.",
        "effect": {
            "econ": 0,
            "dipl": 10,
            "govt": 0,
            "scty": 0
        }
    },
    {
        "questionOriginal": "All people - regardless of factors like culture or sexuality - should be treated equally.",
        "question": "All people should be treated equally.",
        "effect": {
            "econ": 10,
            "dipl": 10,
            "govt": 10,
            "scty": 10
        }
    },
    {
        "questionOriginal": "It is important that we further my group's goals above all others.",
        "question": "It is important that we further my group's goals above all others.",
        "effect": {
            "econ": -10,
            "dipl": -10,
            "govt": -10,
            "scty": -10
        }
    }
];