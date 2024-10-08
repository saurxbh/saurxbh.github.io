import '../styles/modern-normalize.css';
import '../styles/style.css';
import '../styles/components/header.css';
import '../styles/components/hero.css';
import '../styles/components/about.css';
import '../styles/components/timeline.css';
import '../styles/components/work.css';
import '../styles/components/contact.css';
import '../styles/components/footer.css'
import '../styles/components/mobile-nav.css'
import '../styles/utils.css';

import footerFunctionalities from './utils/footer';
import mobileNav from './utils/mobile-nav';
import toggleTheme from './utils/toggle-theme'
import lazyLoading from './utils/lazy-loading';

footerFunctionalities();
mobileNav();
toggleTheme();
lazyLoading();

