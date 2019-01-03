import React from 'react';
import Blog from './Blog';
import BlogsList from './BlogsList';

export default class Recipes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBlog: '',
      // blogs array of objects to be refactored once fetching from the back end is integrated
      // Dummy images and content taken from Lyn Mettler's article on U.S. News "The 30 Best Places to Travel Alone"
      // https://travel.usnews.com/gallery/solo-vacations-the-30-best-places-to-travel-alone
      blogs: [
        {
          imageURL: 'https://www.usnews.com/dims4/USNEWS/570b49a/2147483647/resize/1200x%3E/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2F29%2Fe2%2F56542f51480cadf494f8d8f67709%2F180720travelalone-stock.jpg',
          title: 'Beaver Creek, Colorado',
          content: `For those who love the outdoors, this charming village in the Rocky Mountains offers plenty to do in both winter and summer. Hop in a Colorado Mountain Express shuttle at Denver International Airport and travel about 130 miles west to your hotel, home or condo. Beaver Creek Resort offers free shuttle service for travel anywhere within the resort, so you'll have no trouble getting around. Ski and snowboard to your heart's content in winter, or enjoy solitary hiking, mountain biking or sitting by a peaceful mountain stream during the warmer months. Don't miss local restaurants like Beano's Cabin (which you can visit on horseback), the Beaver Creek Chophouse and Toscanini.`
        },
        {
          imageURL: 'https://www.usnews.com/dims4/USNEWS/c1376f8/2147483647/resize/1200x%3E/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2F60%2F6a%2F603e6c6244f29777b79b9a34a51e%2F180720travelalone-stock.jpg',
          title: 'Grand Cayman, Cayman Islands',
          content: `Known for its friendly locals and outstanding cuisine, the latter of which has led many to call this island the culinary capital of the Caribbean, Grand Cayman is easy and affordable to reach on airlines like Southwest. It's also simple to get around using taxis or public buses and offers plenty of solitary activities. Be sure to take a charter to Stingray City, where you can touch stingrays as they look for food. Other must-dos include snorkeling or scuba diving with one of 40-plus operators like Ocean Frontiers and unwinding at luxury resorts like the Kimpton Seafire Resort + Spa on Seven Mile Beach. `
        },
        {
          imageURL: 'https://www.usnews.com/dims4/USNEWS/217cfdf/2147483647/resize/1200x%3E/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2F9c%2Fb2%2F959e903c4c8a8940e25bbee1abfd%2F180720travelalone-stock.jpg',
          title: 'Paris, France',
          content: `Paris is an extremely walkable city, ideal for individuals exploring on their own. Mass transit, including the Métro and bus system, are also easy to navigate, and a Paris Visite travel card covers unlimited trips for a set number of days in its fee. Grab a Paris Museum Pass and admire the amazing artwork at the Musée du Louvre (try Friday night when it's less busy), the Centre Pompidou and the Musée d'Orsay, or make like a local and find a spot along the Seine to enjoy a baguette and bottle of wine. The Hotel Indigo Paris - Opera is close to many attractions on the Right Bank, while charming vacation rentals are plentiful on the Left Bank.`
        },
        {
          imageURL: 'https://www.usnews.com/dims4/USNEWS/c858850/2147483647/resize/1200x%3E/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2F53%2F85%2F0a4bffb74f6684a65a66daddf722%2F180723-travelalone-stock.jpg',
          title: 'San Diego, California',
          content: `There are so many options for where to go and what to do in San Diego that it works for many types of solo travelers. Visitors can sunbathe and surf at Pacific Beach, go shopping and get up close to seals in La Jolla or enjoy the nightlife in the historic Gaslamp Quarter. If you love comics, be sure to arrive in July so you can attend Comic-Con International, the largest annual convention dedicated to comics and pop culture in the U.S. Or, soak up some California sun while hiking through a nearby state park or wandering around the spacious Balboa Park and San Diego Zoo. As for accommodations, travelers can stay at the iconic Hotel del Coronado, Curio Collection by Hilton on Coronado Island or opt for a quieter getaway at La Valencia Hotel in La Jolla.`
        },
        {
          imageURL: 'https://www.usnews.com/dims4/USNEWS/5b675af/2147483647/resize/1200x%3E/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2F1e%2F28%2F1bc78f4243989e78e520d2af374d%2F180720travelalone-stock.jpg',
          title: 'Rome, Italy',
          content: `Rome is a bucket list destination that gives visitors the opportunity to see the famous Colosseum, world-renowned artwork and the seat of the Roman Catholic Church in Vatican City. Italians tend to speak English and are generally warm and friendly people, making it easy to socialize and find your way around. Plus, the bus system is a convenient mode of transportation (once you know some basics), and taxis are typically safe to use. Areas like Trastevere and the Spanish Steps feature several convenient accommodation options, such as the Aleph Rome Hotel, Curio Collection by Hilton and the Hotel Indigo Rome - St. George on Via Guilia, one of Rome's most beautiful streets. It's also easy to hop on a tour with companies like The Roman Guy, which offers excursions to the city's ancient catacombs and areas beneath the Colosseum, among other options.`
        },
        {
          imageURL: 'https://www.usnews.com/dims4/USNEWS/e2799d7/2147483647/resize/1200x%3E/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2F81%2F72%2F3840d7b14143a7bfee3cca66d091%2F180720travelalone-stock.jpg',
          title: 'Santa Fe, New Mexico',
          content: `Solo travelers looking for clear skies should consider visiting Santa Fe. Offering an average of 325 days of sunshine per year, this southwestern city, which is the oldest capital in North America, is known for its art scene and beautiful scenery. Visitors can go hiking or skiing or check out more than 20 museums, such as iconic Canyon Road's Georgia O'Keeffe Museum. To reach the city, vacationers can fly into Santa Fe Regional Airport on American Airlines or United Airlines or into Albuquerque International Sunport before catching the Sandia Shuttle to Santa Fe. Travelers can then get around on foot, by bike or via the city's bus system.`
        },
      ],
    }
  }

  handleClick = (e) => {
    // console.log('handleclick:', e.target.title);
    let id = e.target.title;
    let selectedBlog = this.state.blogs.filter(blog => blog.title === id);
    this.setState({
      selectedBlog,
    });
  }
  
  handleClearSelection = () => {
    this.setState({
      selectedBlog: '',
    })
  }

  render() {
    return (
      <div className="blogs">
        <h1>MisterKat Adventures</h1>
        {
          (this.state.selectedBlog !== '')
          ? <Blog  
              selectedBlog={this.state.selectedBlog}
              handleClearSelection={this.handleClearSelection}
            />
          : <BlogsList 
            blogs={this.state.blogs} 
            selectedBlog={this.state.selectedBlog}
            handleClick={this.handleClick}
          />
        }
      </div>
    );
  }
}