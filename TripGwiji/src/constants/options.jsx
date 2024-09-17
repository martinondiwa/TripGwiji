
export const SelectTravelesList = [
    {
        id: 1,
        title: 'Just me',
        desc: 'A sole travelers in exploration',
        icon: '+',
        people: '1'

    },
    {
        id: 2,
        title: 'Couple',
        desc: 'Two travelers in tandem',
        icon: '🥂🥂',
        people: '2 people'
    },
    {
        id: 3,
        title: 'Family',
        desc: 'A group of fun loving adventurers',
        icon: '👨‍👩‍👧‍👦',
        people: '2-10 People'

    },
    {
        id: 4,
        title: 'Friends',
        desc: 'A bunch of thrill-seekers',
        icon: '👫👬',
        people: '5 to 10'

    }
];

export const SelectBudgetOptions = [
    {
        id: 1,
        title: 'Cheap',
        desc: 'Stay conscious of costs',
        icon: '💸' // Money with wings emoji
    },
    {
        id: 2,
        title: 'Moderate',
        desc: 'A balance of cost and comfort',
        icon: '💵' // Dollar banknote emoji
    },
    {
        id: 3,
        title: 'Luxury',
        desc: 'Indulge in high-end experiences',
        icon: '💰' // Money bag emoji
    }

];

export const AI_PROMT='Generate Travel Plan for Location {location}, for {totalDays} for Couple with a cheap budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, place Details, place Image url, Geo Coordinates, ticket Pricing, rating,  time to travel each of the location for {totalDays} with each day plan with best time to visit in JSON format.'