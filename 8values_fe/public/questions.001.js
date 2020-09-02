questions = [
    {
        "questionV001": "Oppression by corporations is more of a concern than oppression by governments.",
        "questionV002": "The growing influence of corporations is more of a concern than the growing influence of governments.",
        "sentimentCounts": {
            "This question feels overly biased and should be deleted or re-written.": 1,
            "This question has a bit of bias, but is acceptable.": 5,
            "This question feels unbiased.": 3,
            "This question has a defect, get rid of it.": 1
        },
        "effect": {
            "econ": 10,
            "dipl": 0,
            "govt": 0,
            "scty": 0
        }
    },
    {
        "questionV001": "It is necessary for the government to intervene in the economy to protect consumers.",
        "questionV002": "It is sometimes necessary for the government to step in an make corrections to the economy.",
        "sentimentCounts": {
            "This question feels overly biased and should be deleted or re-written.": 1,
            "This question has a bit of bias, but is acceptable.": 5,
            "This question feels unbiased.": 3,
            "This question has a defect, get rid of it.": 1
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
        "questionV001": "The freer the markets, the freer the people.",
        "questionV002": "In general, people should be free to buy and sell whatever goods they want.",
        "sentimentCounts": {
            "This question feels overly biased and should be deleted or re-written.": 1,
            "This question has a bit of bias, but is acceptable.": 5,
            "This question feels unbiased.": 3,
            "This question has a defect, get rid of it.": 1
        },
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
        "questionV001": "It is better to maintain a balanced budget than to ensure welfare for all citizens.",
        "questionV002": "The government should not spend more money than it takes in from taxes and should not go into debt because of welfare spending.",
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
        "questionV001": "Publicly-funded research is more beneficial to the people than leaving it to the market.",
        "questionV002": "Inventions and scientific breakthroughs that are the result of public funding benefit the people more than if private companies in the market make similar advancements.",
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
        "questionV001": "Tariffs on international trade are important to encourage local production.",
        "questionV002": "It is important to make laws that make imported goods more expensive. This makes domestic products more competitive and in higher demand.",
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
        "questionV001": "From each according to his ability, to each according to his needs.",
        "questionV002": "Anyone can work in society at any level they choose. Access to the consumer goods and services is available to all members of society, regardless of how much they contribute.",
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
        "questionV001": "It would be best if social programs were abolished in favor of private charity.",
        "questionV002": "Churches and other charities should be responsible to help the needy, not the government.",
        "effect": {
            "econ": -10,
            "dipl": 0,
            "govt": 0,
            "scty": 0
        }
    },
    {
        "questionV001": "Taxes should be increased on the rich to provide for the poor.",
        "questionV002": "The rich should pay more in taxes than the poor. Tax proceeds from the rich should be used to help the poor.",
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
        "questionV001": "Inheritance is a legitimate form of wealth.",
        "questionV002": "If your parents die and leave you money in their will, you are free to spend it however you like.",
        "effect": {
            "econ": -10,
            "dipl": 0,
            "govt": 0,
            "scty": -5
        }
    },
    {
        //https://www.reddit.com/r/AskLibertarians/comments/dni205/public_utilities_like_roads_and_electricity/
        "questionV001": "Basic utilities like roads and electricity should be publicly owned.",
        "questionV002": "Basic things that everyone uses, like electricity and roads, should be owned by the government and paid for with taxes.",
        "effect": {
            "econ": 10,
            "dipl": 0,
            "govt": 0,
            "scty": 0
        }
    },
    {
        "questionV001": "Government intervention is a threat to the economy.",
        "questionV002": "The government should rarely interfere in the economy.",
        "effect": {
            "econ": -10,
            "dipl": 0,
            "govt": 0,
            "scty": 0
        }
    },
    {
        "questionV001": "Those with a greater ability to pay should receive better healthcare.",
        "questionV002": "Rich people that get sick should be able to spend your extra money to get the best treatment they can find.",
        "effect": {
            "econ": -10,
            "dipl": 0,
            "govt": 0,
            "scty": 0
        }
    },
    {
        "questionV001": "Quality education is a right of all people.",
        "questionV002": "Anyone that wants to go to school should be able to go for free. The education received should be high quality.",
        "effect": {
            "econ": 10,
            "dipl": 0,
            "govt": 0,
            "scty": 5
        }
    },
    {
        //https://en.wikipedia.org/wiki/Means_of_production#:~:text=society%20at%20large.-,Determinant%20of%20class,passive%20income%20from%20their%20operation.
        "questionV001": "The means of production should belong to the workers who use them.",
        "questionV002": "The people have control over their work and their bosses because they have total control what is made or not made.",
        "effect": {
            "econ": 10,
            "dipl": 0,
            "govt": 0,
            "scty": 0
        }
    },
    {
        //https://www.quora.com/What-arguments-are-there-for-why-the-United-Nations-should-be-abolished
        "questionV001": "The United Nations should be abolished.",
        "questionV002": "We should eliminate the United Nations.",
        "effect": {
            "econ": 0,
            "dipl": -10,
            "govt": -5,
            "scty": 0
        }
    },
    {
        "questionV001": "Military action by our nation is often necessary to protect it.",
        "questionV002": "We often must go to war to protect our country.",
        "effect": {
            "econ": 0,
            "dipl": -10,
            "govt": -10,
            "scty": 0
        }
    },
    {
        "questionV001": "I support regional unions, such as the European Union.",
        "questionV002": "I support countries that join together and agree to help each other.",
        "effect": {
            "econ": -5,
            "dipl": 10,
            "govt": 10,
            "scty": 5
        }
    },
    {
        "questionV001": "It is important to maintain our national sovereignty.",
        "questionV002": "It is important that our country remains independent and is governed by the people that live here.",
        "effect": {
            "econ": 0,
            "dipl": -10,
            "govt": -5,
            "scty": 0
        }
    },
    {
        "questionV001": "A united world government would be beneficial to mankind.",
        "questionV002": "If the whole world was just one nation, mankind would benefit.",
        "effect": {
            "econ": 0,
            "dipl": 10,
            "govt": 0,
            "scty": 0
        }
    },
    {
        "questionV001": "It is more important to retain peaceful relations than to further our strength.",
        "questionV002": "It is more important to keep peace than to prepare for war.",
        "effect": {
            "econ": 0,
            "dipl": 10,
            "govt": 0,
            "scty": 0
        }
    },
    {
        "questionV001": "Wars do not need to be justified to other countries.",
        "questionV002": "If our country must go to war with another, we don't need any other country's permission.",
        "effect": {
            "econ": 0,
            "dipl": -10,
            "govt": -10,
            "scty": 0
        }
    },
    {
        "questionV001": "Military spending is a waste of money.",
        "questionV002": "When the government spends money on the military, it is a waste of money.",
        "effect": {
            "econ": 0,
            "dipl": 10,
            "govt": 10,
            "scty": 0
        }
    },
    {
        "questionV001": "International aid is a waste of money.",
        "questionV002": "Giving money to those in need that don't live in our country is a waste of money.",
        "effect": {
            "econ": -5,
            "dipl": -10,
            "govt": 0,
            "scty": 0
        }
    },
    {
        "questionV001": "My nation is great.",
        "questionV002": "My nation is great.",
        "effect": {
            "econ": 0,
            "dipl": -10,
            "govt": 0,
            "scty": 0
        }
    },
    {
        "questionV001": "Research should be conducted on an international scale.",
        "questionV002": "Inventors from different countries should coopoerate to come up with new technologies.",
        "effect": {
            "econ": 0,
            "dipl": 10,
            "govt": 0,
            "scty": 10
        }
    },
    {
        "questionV001": "Governments should be accountable to the international community.",
        "questionV002": "Our country should obey international laws that all countries have agreed upon.",
        "effect": {
            "econ": 0,
            "dipl": 10,
            "govt": 5,
            "scty": 0
        }
    },
    {
        "questionV001": "Even when protesting an authoritarian government, violence is not acceptable.",
        "questionV002": "Protestors should never cause harm to anyone or any property, even if protesting an authoritarian government.",
        "effect": {
            "econ": 0,
            "dipl": 5,
            "govt": -5,
            "scty": 0
        }
    },
    {
        "questionV001": "My religious values should be spread as much as possible.",
        "questionV002": "Many of my values come from my religion.",
        "effect": {
            "econ": 0,
            "dipl": -5,
            "govt": -10,
            "scty": -10
        }
    },
    {
        "questionV001": "Our nation's values should be spread as much as possible.",
        "questionV002": "Many of our country's values come from different religions.",
        "effect": {
            "econ": 0,
            "dipl": -10,
            "govt": -5,
            "scty": 0
        }
    },
    {
        "questionV001": "It is very important to maintain law and order.",
        "questionV002": "It is very important to have law and order. We should have as little crime as possible.",
        "effect": {
            "econ": 0,
            "dipl": -5,
            "govt": -10,
            "scty": -5
        }
    },
    {
        "questionV001": "The general populace makes poor decisions.",
        "questionV002": "The average person makes poor decisions.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": -10,
            "scty": 0
        }
    },
    {
        "questionV001": "Physician-assisted suicide should be legal.",
        "questionV002": "If you're sick and there is no hope to live, it is not against the law to have a doctor help you end your life.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": 10,
            "scty": 0
        }
    },
    {
        "questionV001": "The sacrifice of some civil liberties is necessary to protect us from acts of terrorism.",
        "questionV002": "Because the threat of terrorism is on the rise, we must allow the government to know more about us so that they can more easily stop terrorism before it happens.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": -10,
            "scty": 0
        }
    },
    {
        "questionV001": "Government surveillance is necessary in the modern world.",
        "questionV002": "In order to keep people safe, the government must watch people's behavior.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": -10,
            "scty": 0
        }
    },
    {   
        "questionV001": "The very existence of the state is a threat to our liberty.",
        "questionV002": "Because we choose to live together in a country, we limit our freedom.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": 10,
            "scty": 0
        }
    },
    {
        "questionV001": "Regardless of political opinions, it is important to side with your country.",
        "questionV002": "It is important to support your local government, especially during a war.",
        "effect": {
            "econ": 0,
            "dipl": -10,
            "govt": -10,
            "scty": -5
        }
    },
    {
        "questionV001": "All authority should be questioned.",
        "questionV002": "We should ask powerful people questions, so we can know what they are doing.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": 10,
            "scty": 5
        }
    },
    {
        "questionV001": "A hierarchical state is best.",
        "questionV002": "A government where some officials are bosses over other officials is best.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": -10,
            "scty": 0
        }
    },
    {
        "questionV001": "It is important that the government follows the majority opinion, even if it is wrong.",
        "questionV002": "It is important that the government follows the majority opinion, no matter what.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": 10,
            "scty": 0
        }
    },
    {
        "questionV001": "The stronger the leadership, the better.",
        "questionV002": "We are a better country when we have strong leaders.",
        "effect": {
            "econ": 0,
            "dipl": -10,
            "govt": -10,
            "scty": 0
        }
    },
    {
        "questionV001": "Democracy is more than a decision-making process.",
        "questionV002": "Democracy is more than just the way the government makes decisions.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": 10,
            "scty": 0
        }
    },
    {
        "questionV001": "Environmental regulations are essential.",
        "questionV002": "Laws to protect the environment are needed.",
        "effect": {
            "econ": 5,
            "dipl": 0,
            "govt": 0,
            "scty": 10
        }
    },
    {
        "questionV001": "A better world will come from automation, science, and technology.",
        "questionV002": "Science and technology will help the world become better.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": 0,
            "scty": 10
        }
    },
    {
        "questionV001": "Children should be educated in religious or traditional values.",
        "questionV002": "In school we should learn about religious topics and traditional values.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": -5,
            "scty": -10
        }
    },
    {
        "questionV001": "Traditions are of no value on their own.",
        "questionV002": "Things we do only because our ancestors did them is a waste of time.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": 0,
            "scty": 10
        }
    },
    {
        "questionV001": "Religion should play a role in government.",
        "questionV002": "Our government should partner with religious groups.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": -10,
            "scty": -10
        }
    },
    {
        "questionV001": "Churches should be taxed the same way other institutions are taxed.",
        "questionV002": "Religious groups should be taxed like businesses are taxed.",
        "effect": {
            "econ": 5,
            "dipl": 0,
            "govt": 0,
            "scty": 10
        }
    },
    {
        "questionV001": "Climate change is currently one of the greatest threats to our way of life.",
        "questionV002": "Climate change threatens our way of life.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": 0,
            "scty": 10
        }
    },
    {
        "questionV001": "It is important that we work as a united world to combat climate change.",
        "questionV002": "The world must unite to combat climate change.",
        "effect": {
            "econ": 0,
            "dipl": 10,
            "govt": 0,
            "scty": 10
        }
    },
    {
        "questionV001": "Society was better many years ago than it is now.",
        "questionV002": "People were better off in the past than they are now.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": 0,
            "scty": -10
        }
    },
    {
        "questionV001": "It is important that we maintain the traditions of our past.",
        "questionV002": "It is important to remember and honor the people that came before us.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": 0,
            "scty": -10
        }
    },
    {
        "questionV001": "It is important that we think in the long term, beyond our lifespans.",
        "questionV002": "It is important that we think about the future, beyond the time when we are dead.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": 0,
            "scty": 10
        }
    },
    {
        "questionV001": "Reason is more important than maintaining our culture.",
        "questionV002": "Figuring things out is more important than painting art.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": 0,
            "scty": 10
        }
    },
    {
        "questionV001": "Drug use should be legalized or decriminalized.",
        "questionV002": "We should be free to put anything in our bodies that we want to.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": 10,
            "scty": 2
        }
    },
    {
        "questionV001": "Same-sex marriage should be legal.",
        "questionV002": "Women should be able to marry women. Men should be able to marry men.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": 10,
            "scty": 10
        }
    },
    {
        "questionV001": "One group of people should not control another.",
        "questionV002": "One group of people should not have power over other groups of people.",
        "effect": {
            "econ": 0,
            "dipl": 10,
            "govt": 5,
            "scty": 10
        }
    },
    {
        "questionV001": "Sex outside marriage is immoral.",
        "questionV002": "Sex outside marriage is wrong.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": -5,
            "scty": -10
        }
    },
    {
        "questionV001": "If we accept migrants at all, it is important that they assimilate into our culture.",
        "questionV002": "It is important that people from other countries adapt to the ways of my country.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": -5,
            "scty": -10
        }
    },
    {
        "questionV001": "Abortion should be prohibited in most or all cases.",
        "questionV002": "Terminating the life of an unborn baby should be illegal.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": -10,
            "scty": -10
        }
    },
    {
        "questionV001": "Gun ownership should be prohibited for those without a valid reason.",
        "questionV002": "We should not allow people to own guns, unless they have a valid reason.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": -10,
            "scty": 0
        }
    },
    {
        "questionV001": "I support single-payer, universal healthcare.",
        "questionV002": "I believe that the government should pay for health care for everyone.",
        "effect": {
            "econ": 10,
            "dipl": 0,
            "govt": 0,
            "scty": 0
        }
    },
    {
        "questionV001": "Prostitution should be illegal.",
        "questionV002": "Having sex with another person for money should be illegal.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": -10,
            "scty": -10
        }
    },
    {
        "questionV001": "Maintaining family values is essential.",
        "questionV002": "Keeping close to your family is an essential part of life.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": 0,
            "scty": -10
        }
    },
    {
        "questionV001": "To chase progress at all costs is dangerous.",
        "questionV002": "Sometimes I realize that it is best to stop what I am doing because it is dangerous to proceed.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": 0,
            "scty": -10
        }
    },
    {
        "questionV001": "Genetic modification is a force for good, even on humans.",
        "questionV002": "Changing the biology of nature is good thing, even when on humans.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": 0,
            "scty": 10
        }
    },
    {
        "questionV001": "We should open our borders to immigration.",
        "questionV002": "Anyone who wants to live in my country is welcome to.",
        "effect": {
            "econ": 0,
            "dipl": 10,
            "govt": 10,
            "scty": 0
        }
    },
    {
        "questionV001": "Governments should be as concerned about foreigners as they are about their own citizens.",
        "questionV002": "Governments should be as concerned about people from other contries as they are about people in my country.",
        "effect": {
            "econ": 0,
            "dipl": 10,
            "govt": 0,
            "scty": 0
        }
    },
    {
        "questionV001": "All people - regardless of factors like culture or sexuality - should be treated equally.",
        "questionV002": "All people should be treated equally.",
        "effect": {
            "econ": 10,
            "dipl": 10,
            "govt": 10,
            "scty": 10
        }
    },
    {
        "questionV001": "It is important that we further my group's goals above all others.",
        "questionV002": "It is important that we further my group's goals above all others.",
        "effect": {
            "econ": -10,
            "dipl": -10,
            "govt": -10,
            "scty": -10
        }
    }
];