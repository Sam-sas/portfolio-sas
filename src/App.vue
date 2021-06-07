<template>
  <div id="app">
    <Navigation />
    <Landing />
    <div class="workPieces">
      <b-card-group deck>
        <PortfolioPiece :portCard="portfolioSectionOne" />
        <PortfolioPiece :portCard="portfolioSectionTwo" />
        <PortfolioPiece :portCard="portfolioSectionThree" />
      </b-card-group>
    </div>
    <About :bio="bio" />
    <div class="skills">
      <h3>Skills</h3>
      <b-card-group deck>
        <Skills :skillCard="skillSection.bigThree" />
        <Skills :skillCard="skillSection.vue" />
        <Skills :skillCard="skillSection.wordpress" />
        <Skills :skillCard="skillSection.wireframe" />
        <Skills :skillCard="skillSection.ui" />
        <Skills :skillCard="skillSection.responsive" />
      </b-card-group>
    </div>
    <Contact />
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue';
import Landing from '@/components/Landing.vue';
import PortfolioPiece from '@/components/PortfolioCard.vue';
import Skills from '@/components/SkillCard.vue';
import About from '@/components/About.vue';
import Contact from '@/components/Contact.vue';

export default {
  components: {
    Navigation,
    Landing,
    PortfolioPiece,
    Skills,
    About,
    Contact,
  },
  data() {
    return {
      portfolioSectionOne: {
        image: 'arborist.png',
        imageAlt: 'W.G. Arborist Consultants',
        title: 'W.G. Arborist consultants',
        text: 'The goal for the website is a full redesign of their old site,'
          + 'including modern color schemes and readability.'
          + 'WordPress is used as CMS for easy updates,'
          + 'utilizing their built in plugins to avoid boilerplate code'
          + 'and focus on interactivity and UX work.',
        highlights: [
          { highlight: 'WordPress theme development' },
          { highlight: 'Responsive design' },
          { highlight: 'SEO (search engine optimization)' },
        ],
      },
      portfolioSectionTwo: {
        image: 'eosdigital.png',
        imageAlt: 'Eos Digital Agency',
        title: 'Eos Digital Agency',
        text: 'Eos needed to have their site built following exact specifications.'
          + 'Handbuilt a VueJS backed libary of generic components and utilized as global components.'
          + 'Parallax used for scroll animation.',
        highlights: [
          { highlight: 'VueJS/Bootstrap' },
          { highlight: 'Responsive design' },
          { highlight: 'Single page application' },
        ],
      },
      portfolioSectionThree: {
        image: 'eosdigital.png',
        imageAlt: 'my personal portfolio',
        title: 'Me!',
        text: 'I needed a place to show my portfolio for potential clients,'
          + 'with the challenge of being both eye catching and minimal for quick information finding.'
          + 'Added current digital trends and use of a fixed brand background for an about page',
        highlights: [
          { highlight: 'Simple navigation' },
          { highlight: 'SCSS/JavaScript events' },
          { highlight: 'Produced from wireframe to full production' },
        ],
      },
      skillSection: {
        bigThree: {
          skillImage: 'javascript-logo.svg',
          skillName: 'HTML/CSS/JavaScript',
        },
        vue: {
          skillImage: 'vue-logo.svg',
          skillName: 'VueJS',
        },
        wordpress: {
          skillImage: 'wordpress-logo.svg',
          skillName: 'WordPress',
        },
        wireframe: {
          skillImage: 'adobe-xd-logo.svg',
          skillName: 'Wireframing',
        },
        ui: {
          skillImage: 'invision-logo.svg',
          skillName: 'User Interface',
        },
        responsive: {
          skillImage: 'bootstrap-logo.svg',
          skillName: 'Responsive Design',
        },
      },
      bio: {
        aboutMe: 'My name is Sam Shepard, and I am a web developer and designer.'
          + 'I like to make clean code and detailed designs,'
          + 'whether it be from a financial powerhouse to a small two person startup.'
          + 'I started my career as a contractor with Bank of America,'
          + 'working on the redesign of transfer pages'
          + '(the modern updates were first written by me!), and worked on extending my knowledge.'
          + 'I consider myself a jack of all trades,'
          + 'and love to focus on UI development, from a sketchy napkin to user interaction.',
        talk: 'I am a freelancer, available for work.'
          + 'If you would like to learn more, reach out and we can start a discussion.',
      },
    };
  },
};
</script>
