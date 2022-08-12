import Art from '../../assets/images/category-art.png';
import Music from '../../assets/images/category-music.png';
import VirtualWorld from '../../assets/images/category-virtual-worlds.png';
import Illustrations from '../../assets/images/category-illustrations.png';
import TradingCards from '../../assets/images/category-trading-cards.png';
import Collectibles from '../../assets/images/category-collectibles.png';
import Utilities from '../../assets/images/category-utilities.png';
import Sports from '../../assets/images/category-sports.png';
import All from '../../assets/images/category-all.png';

import Setup from '../../assets/images/setup.svg';
import Create from '../../assets/images/create.svg';
import Upload from '../../assets/images/upload.svg';
import List from '../../assets/images/list.svg';

export const CATEGORIES = [
  { name: 'Art', image: Art },
  { name: 'Music', image: Music },
  {
    name: 'Virtual Worlds',
    image: VirtualWorld,
  },
  {
    name: 'Illustrations',
    image: Illustrations,
  },
  {
    name: 'Trading Cards',
    image: TradingCards,
  },
  {
    name: 'Collectibles',
    image: Collectibles,
  },
  { name: 'Utilities', image: Utilities },
  { name: 'Sports', image: Sports },
  { name: 'All', image: All },
];

export const STEPS = [
  {
    title: 'Setup your wallet',
    image: Setup,
    content:
      'Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner. ',
  },
  {
    title: 'Create your collection',
    image: Create,
    content:
      'Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner. ',
  },
  {
    title: 'Add your NFTs',
    image: Upload,
    content:
      'Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties, stats, and unlockable content.',
  },
  {
    title: 'List them for sale',
    image: List,
    content:
      'Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs, and we help you sell them!    ',
  },
];
